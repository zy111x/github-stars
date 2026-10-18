---
project: next-ai-draw-io
stars: 36306
description: Draw and edit draw.io diagrams by chatting with an AI. Web app, desktop app, and an MCP server for Claude Code, Cursor, Codex and VS Code.
url: https://github.com/DayuanJiang/next-ai-draw-io
---

Next AI Draw.io
===============

**Draw and edit draw.io diagrams by chatting with an AI.**

English | 中文 | 日本語

**Live Demo** · **Docs** · **Gallery** · **Desktop App** · **MCP Server**

promo-web.mp4

Describe a diagram in a sentence and the AI draws it on a real draw.io canvas. Edit it by hand like any draw.io file, or select a few shapes and tell the AI what to change. Every AI change is a version you can compare, restore or undo, and the result exports as `.drawio`, `.png` or `.svg`.

Available as a web app, a desktop app for Windows, macOS and Linux, and an MCP server for AI agents such as Claude Code, Cursor and VS Code.

Highlights
----------

**Draw**

-   Architecture diagrams, flowcharts, sequence diagrams and more from one sentence, with built-in AWS, Azure, GCP and Kubernetes icon libraries
-   Connectors can carry a flowing animation
-   Upload a screenshot or a sketch and the AI redraws it; upload PDF, Markdown, code and other text files and get a diagram of their content

**Edit**

-   Edit by chat: changes stream onto the canvas and the shapes the AI just changed are highlighted
-   Ask about a selection: select shapes on the canvas and the AI changes only those
-   Versions and undo: every AI change is a version card with a thumbnail; compare it with the canvas, restore it or undo it, and Ctrl+Z on the canvas also takes back an AI change in one step
-   It is a normal draw.io diagram: double-click to rename, drag, restyle, use several pages, and export as `.drawio`, `.png`, `.svg` or `.drawio.svg` at any time

**Use**

-   25 model providers, including an OpenAI-compatible preset for any other URL; enter your own API key in the browser and it stays on your machine
-   Models that reason show their thinking
-   Dark mode; the interface is available in English, Simplified Chinese, Traditional Chinese and Japanese

Examples
--------

**Highly available web app on AWS**  

**Prompt:** Draw an AWS architecture for a highly available web app across two Availability Zones with AWS icons: Route 53, CloudFront with AWS WAF, an Application Load Balancer, ECS Fargate services in private subnets, Aurora PostgreSQL with a writer and a reader, ElastiCache for Redis, S3 for static assets, NAT gateways, and CloudWatch for monitoring.

**Model:** Claude Opus 5.5, in Claude Code with the MCP server

**Kubernetes deployment for a web shop**  

**Prompt:** Draw a Kubernetes deployment for a web shop: an ingress, web and API deployments with their services and pods, a Redis StatefulSet with a persistent volume, a ConfigMap, a Secret, and an autoscaler on the API.

**Model:** Claude Opus 5.5, in Claude Code with the MCP server

**ER diagram of an online shop**  

**Prompt:** Draw an ER diagram for an online shop: customers, addresses, orders, order items, products, categories and payments, with primary and foreign keys and the cardinality of each relationship.

**Model:** Claude Opus 5.5, in Claude Code with the MCP server

**BPMN expense claim process**  

**Prompt:** Draw a BPMN process for an expense claim: an employee submits it, the manager approves or rejects it, finance checks the receipts and pays, and the claim goes back to the employee when receipts are missing.

**Model:** Claude Opus 5.5, in Claude Code with the MCP server

**Transformer architecture with animated connectors**  

**Prompt:** Give me an animated connector diagram of transformer's architecture.

**Model:** Claude Opus 5.5, in Claude Code with the MCP server

**Customer journey map of a banking app**  

**Prompt:** Draw a customer journey map for a mobile banking app across five stages (discover, sign up, first payment, everyday use, get help), with the customer's actions, touchpoints, feelings and pain points in each stage, and an opportunity for each pain point.

**Model:** Claude Opus 5.5, in Claude Code with the MCP server

More examples, each with its prompt and model, are in the **gallery**.

Use it
------

### Online demo

Open next-ai-drawio.jiang.jp, nothing to install. The demo has a usage limit; click the settings icon in the chat panel and enter your own provider and API key to lift it. The key stays in your browser and is never sent to the server for storage.

### Desktop app

Download the Windows, macOS or Linux installer from the Releases page.

### In your AI agent (MCP)

mcp-promo-v10-720p.mp4

Through MCP (Model Context Protocol, the protocol AI agents use to call outside tools), Claude Desktop, Cursor, VS Code and others can draw draw.io diagrams directly. Add this to your client's MCP configuration:

{
  "mcpServers": {
    "drawio": {
      "command": "npx",
      "args": \["@next-ai-drawio/mcp-server@latest"\]
    }
  }
}

In VS Code or Cursor, one click adds it:

For Claude Code, one command does it (`--scope user` makes it available in every project):

claude mcp add --scope user drawio -- npx @next-ai-drawio/mcp-server@latest

It is also a plugin in the Claude Code community marketplace (Claude Code 2.1.275 or later):

```
/plugin install next-ai-drawio --marketplace anthropics/claude-plugins-community
```

Then ask the AI for "a flowchart of user authentication with login, MFA and session management" and the diagram appears in your browser as it is drawn. The MCP server has most of the web app's drawing features:

-   The same drawing rules, icon libraries (AWS, Azure, GCP, Kubernetes and more) and canvas as the web app: the AI's changes are outlined, one Ctrl+Z takes them back, and the AI reads the shapes you select
-   A screenshot tool, so the AI looks at the rendered diagram and fixes it
-   Version history, several pages, export as `.drawio`, `.png`, `.svg` or `.drawio.svg`, and auto-save to `~/.next-ai-drawio/`; the draw.io editor ships inside the package, so the preview works offline

The MCP server page has the setup for Codex, VS Code, Cursor and other clients, every tool, and how it compares with other draw.io MCP servers.

### Compared with draw.io's built-in AI

draw.io has its own Generate tool (Arrange > Insert > Generate). It runs inside draw.io on a free hosted model or your own API key, and it can change a diagram, page or selection that you attach to its chat. Next AI Draw.io sends the current canvas, including your hand edits, with every message, turns every AI change into a version you can compare or restore, and works with 25 providers, including local models through Ollama, on the demo site, in the desktop app or on your own server.

Self-host
---------

### Run locally

git clone https://github.com/DayuanJiang/next-ai-draw-io
cd next-ai-draw-io
npm install
cp env.example .env.local   # add your provider and API key, see "Models and providers" below
npm run dev

Open http://localhost:6002.

### One-click deploy

Platform

How

Tencent EdgeOne Pages

Deploying there also gives you a daily free quota for DeepSeek models

Vercel

Set the same environment variables in the Vercel dashboard as in your `.env.local`

Cloudflare Workers

Cloudflare deploy guide

Docker

Docker guide

Offline or intranet

Offline deployment

### Models and providers

25 providers are supported: AWS Bedrock (default), OpenAI, Anthropic, Google AI, Google Vertex AI, Azure OpenAI, Ollama, OpenRouter, AIHubMix, DeepSeek, SiliconFlow, SGLang, Vercel AI Gateway, Tencent EdgeOne, ByteDance Doubao, ModelScope, Zhipu GLM, Qwen, Qiniu, Kimi, MiniMax, Novita, Xiaomi MiMo, Atlas Cloud, and an OpenAI-compatible preset for any other URL (vLLM, LM Studio, a gateway). The environment variables and notes for each are in the provider configuration guide.

**Which model**: the task is to produce long text in a strict format (draw.io XML), so pick a capable model; small models tend to produce broken diagrams.

**Several models and the admin panel**: list several model IDs in `AI_MODEL` separated by commas, or configure models from several providers with the `AI_MODELS_CONFIG` environment variable or an `ai-models.json` file, and every user can use them without a key of their own. Set `ADMIN_PASSWORD` and open `/admin` to manage models, access codes, feature switches, observability and quotas from a web page; see the admin panel guide.

Support
-------

-   Questions and ideas: open a GitHub issue or email me\[at\]jiang.jp
-   Common problems: FAQ
-   If the project is useful to you, consider sponsoring to help keep the demo site running
