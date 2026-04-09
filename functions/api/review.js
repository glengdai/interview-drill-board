import { json, createAiReview } from "./_utils.js";

export async function onRequestPost(context) {
  let payload;

  try {
    payload = await context.request.json();
  } catch (error) {
    return json({ error: `请求体解析失败：${error.message}` }, { status: 400 });
  }

  if (!payload?.question?.title || !payload?.candidateAnswer) {
    return json({ error: "点评请求缺少题目或回答内容。" }, { status: 400 });
  }

  try {
    const review = await createAiReview(payload, context.env);
    return json({ review });
  } catch (error) {
    return json({ error: error.message || "AI 点评失败" }, { status: 500 });
  }
}
