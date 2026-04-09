# 面试闪卡作战台

这是一个可部署到 Cloudflare Pages 的轻量面试刷题网页，适合手机刷题。

## 功能

- 公司投递分批：试水 / 重点 / 冲刺
- 每家公司定制题库、参考答案、BOSS 打招呼、自我介绍
- 文本输入、语音输入
- 本地规则点评
- 真实 AI 点评
- 记录每家公司完整刷过几轮、总点评次数、平均分
- 支持手机端访问与主屏安装

## 本地使用

1. 进入当前目录
2. 运行：

```bash
node server.js
```

3. 打开终端输出的地址

本地服务会同时打印：

- 电脑浏览器地址
- 同一 Wi-Fi 下手机可访问地址

## 部署到 Cloudflare Pages

### 方式一：通过 Git 仓库部署

1. 把当前目录推到 GitHub 仓库
2. 在 Cloudflare Pages 创建新项目并连接该仓库
3. 构建命令留空
4. Build output directory 填 `.`

### 方式二：通过 Wrangler

如果你本机已安装 Wrangler，也可以在项目根目录执行：

```bash
wrangler pages deploy .
```

## Cloudflare 环境变量

如果想让线上版直接支持真实 AI 点评，请在 Cloudflare Pages 项目中配置：

- `OPENAI_API_KEY`
- `OPENAI_BASE_URL`
- `OPENAI_MODEL`

示例：

- `OPENAI_BASE_URL=https://api.openai.com/v1`
- `OPENAI_MODEL=gpt-4.1-mini`

配置好后，前端会自动检测 `/api/health`，手机端不需要再手动输入 API Key。

## 目录说明

- `index.html`：页面结构
- `styles.css`：样式
- `app.js`：前端逻辑与题库
- `server.js`：本地 Node 服务
- `functions/api/*`：Cloudflare Pages Functions
- `manifest.json` / `service-worker.js`：手机端安装支持
