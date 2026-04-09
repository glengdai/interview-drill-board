function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(data), {
    ...init,
    headers,
  });
}

function clampScore(value, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(0, Math.min(100, Math.round(number)));
}

function extractJsonObject(text) {
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    // continue
  }

  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;

  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

function buildPrompts(payload) {
  const system = [
    "你是一位资深中文产品经理面试教练，风格直接、具体、友好。",
    "你要点评候选人的中文回答，目标是帮助他拿到产品经理面试机会。",
    "请只输出 JSON，不要输出 markdown，不要输出额外解释。",
    'JSON 格式必须是：{"total":0-100整数,"badges":["短标签1","短标签2","短标签3"],"summary":"一段中文点评，含优点和改进建议","rewrite":"给出一个更自然、更像面试口语的优化答案"}。',
  ].join("\n");

  const user = [
    `公司：${payload.company.name}`,
    `岗位：${payload.company.role}`,
    `投递批次：${payload.company.batch}`,
    `简历版本：${payload.company.resume}`,
    `产品策略：${payload.company.strategy}`,
    "",
    `题型：${payload.question.type}`,
    `题目：${payload.question.title}`,
    `提示点：${payload.question.prompts.join(" / ")}`,
    `理想关键词：${payload.question.keyPoints.join(" / ")}`,
    "",
    `参考答案：${payload.question.referenceAnswer}`,
    "",
    `候选人回答：${payload.candidateAnswer}`,
    "",
    `本地规则初评：${payload.localReview.summary}`,
    `本地规则分数：${payload.localReview.total}`,
    "",
    "请完成以下任务：",
    "1. 给出 0-100 的综合分。",
    "2. 给出 3 个不超过 10 个字的短标签。",
    "3. 用中文写一段具体点评，既指出优点，也指出问题，重点看结构、岗位匹配度、结果感、表达是否绕。",
    "4. 给出一版更自然、更像真人面试口语的优化答案，长度控制在 140-260 字。",
  ].join("\n");

  return { system, user };
}

function normalizeReview(review, fallbackSummary) {
  return {
    total: clampScore(review.total, 76),
    badges: Array.isArray(review.badges) && review.badges.length
      ? review.badges.slice(0, 4)
      : ["AI点评", "已生成", "可复盘"],
    summary:
      typeof review.summary === "string" && review.summary.trim()
        ? review.summary.trim()
        : fallbackSummary,
    rewrite: typeof review.rewrite === "string" ? review.rewrite.trim() : "",
    source: "真实 AI",
  };
}

function getProviderConfig(payload, envLike) {
  const requestProvider = payload.provider || {};
  return {
    baseUrl: requestProvider.baseUrl || envLike.OPENAI_BASE_URL || "https://api.openai.com/v1",
    apiKey: requestProvider.apiKey || envLike.OPENAI_API_KEY || "",
    model: requestProvider.model || envLike.OPENAI_MODEL || "gpt-4.1-mini",
  };
}

async function callChatCompletions(provider, prompts) {
  const baseUrl = (provider.baseUrl || "").replace(/\/$/, "");
  const endpoint = `${baseUrl}/chat/completions`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${provider.apiKey}`,
    },
    body: JSON.stringify({
      model: provider.model,
      temperature: 0.3,
      messages: [
        { role: "system", content: prompts.system },
        { role: "user", content: prompts.user },
      ],
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errorText =
      data.error?.message ||
      data.error ||
      `上游模型调用失败（HTTP ${response.status})`;
    throw new Error(errorText);
  }

  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("上游模型没有返回点评内容");
  }

  return content;
}

async function createAiReview(payload, envLike) {
  const provider = getProviderConfig(payload, envLike);

  if (!provider.baseUrl || !provider.apiKey || !provider.model) {
    throw new Error("AI 配置不完整，请设置服务端环境变量或在页面里填写 provider 配置。");
  }

  const prompts = buildPrompts(payload);
  const content = await callChatCompletions(provider, prompts);
  const parsed = extractJsonObject(content);
  const fallbackSummary =
    "AI 已返回结果，但格式不够标准。建议先看改写版本，再回到题目重新练一遍。";

  return normalizeReview(
    parsed || { summary: fallbackSummary, rewrite: content, badges: ["格式异常", "已回退", "可继续用"] },
    fallbackSummary,
  );
}

function getHealthInfo(envLike) {
  return {
    ok: true,
    name: "Interview AI Review API",
    runtime: "cloudflare-pages",
    aiConfigured: Boolean(envLike.OPENAI_API_KEY),
    model: envLike.OPENAI_MODEL || "gpt-4.1-mini",
  };
}

export { json, createAiReview, getHealthInfo };
