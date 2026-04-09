const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const os = require("os");

const PORT = Number(process.env.PORT || 8787);
const HOST = "0.0.0.0";
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  });
  response.end(JSON.stringify(payload));
}

function sendFile(response, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const stream = fs.createReadStream(filePath);

  response.writeHead(200, {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": "*",
  });

  stream.pipe(response);
  stream.on("error", () => {
    sendJson(response, 500, { error: "文件读取失败" });
  });
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 2 * 1024 * 1024) {
        reject(new Error("请求体过大"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(raw));
    request.on("error", reject);
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
    summary: typeof review.summary === "string" && review.summary.trim()
      ? review.summary.trim()
      : fallbackSummary,
    rewrite: typeof review.rewrite === "string" ? review.rewrite.trim() : "",
    source: "真实 AI",
  };
}

function getProviderConfig(payload) {
  const requestProvider = payload.provider || {};
  return {
    baseUrl: requestProvider.baseUrl || process.env.OPENAI_BASE_URL || "https://api.openai.com/v1",
    apiKey: requestProvider.apiKey || process.env.OPENAI_API_KEY || "",
    model: requestProvider.model || process.env.OPENAI_MODEL || "gpt-4.1-mini",
  };
}

function getHealthInfo() {
  return {
    ok: true,
    name: "Interview AI Proxy",
    runtime: "node-local",
    port: PORT,
    cwd: ROOT,
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
    model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
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
      `上游模型调用失败（HTTP ${response.status}）`;
    throw new Error(errorText);
  }

  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("上游模型没有返回点评内容");
  }

  return content;
}

async function handleReview(request, response) {
  let payload;

  try {
    const rawBody = await readBody(request);
    payload = JSON.parse(rawBody || "{}");
  } catch (error) {
    sendJson(response, 400, { error: `请求体解析失败：${error.message}` });
    return;
  }

  const provider = getProviderConfig(payload);
  if (!provider.baseUrl || !provider.apiKey || !provider.model) {
    sendJson(response, 400, {
      error: "AI 配置不完整，请提供 provider 配置，或在环境变量里设置 OPENAI_BASE_URL / OPENAI_API_KEY / OPENAI_MODEL。",
    });
    return;
  }

  if (!payload.question?.title || !payload.candidateAnswer) {
    sendJson(response, 400, { error: "点评请求缺少题目或回答内容。" });
    return;
  }

  try {
    const prompts = buildPrompts(payload);
    const content = await callChatCompletions(provider, prompts);
    const parsed = extractJsonObject(content);
    const fallbackSummary =
      "AI 已返回结果，但格式不够标准。建议先看改写版本，再回到题目重新练一遍。";

    const review = normalizeReview(
      parsed || { summary: fallbackSummary, rewrite: content, badges: ["格式异常", "已回退", "可继续用"] },
      fallbackSummary,
    );

    sendJson(response, 200, { review });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "AI 点评失败" });
  }
}

function getSafeFilePath(requestPath) {
  const normalized =
    requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const safePath = path.normalize(normalized).replace(/^(\.\.[/\\])+/, "");
  return path.join(ROOT, safePath);
}

const server = http.createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 400, { error: "请求地址无效" });
    return;
  }

  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    });
    response.end();
    return;
  }

  const currentUrl = new URL(request.url, `http://${request.headers.host || `${HOST}:${PORT}`}`);

  if (request.method === "GET" && currentUrl.pathname === "/api/health") {
    sendJson(response, 200, getHealthInfo());
    return;
  }

  if (request.method === "POST" && currentUrl.pathname === "/api/review") {
    await handleReview(request, response);
    return;
  }

  if (request.method !== "GET") {
    sendJson(response, 405, { error: "仅支持 GET、POST 和 OPTIONS" });
    return;
  }

  const filePath = getSafeFilePath(currentUrl.pathname);
  if (!filePath.startsWith(ROOT)) {
    sendJson(response, 403, { error: "禁止访问" });
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      sendJson(response, 404, { error: "文件不存在" });
      return;
    }
    sendFile(response, filePath);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Interview AI Proxy running at http://127.0.0.1:${PORT}`);
  console.log(`Local browser: http://127.0.0.1:${PORT}/`);

  const interfaces = os.networkInterfaces();
  const lanAddresses = Object.values(interfaces)
    .flat()
    .filter((item) => item && item.family === "IPv4" && !item.internal)
    .map((item) => item.address);

  if (lanAddresses.length) {
    console.log("Phone access on same Wi-Fi:");
    lanAddresses.forEach((address) => {
      console.log(`  http://${address}:${PORT}/`);
    });
  }
});

server.on("error", (error) => {
  console.error(`Server failed to start: ${error.message}`);
  process.exit(1);
});
