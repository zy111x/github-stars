---
project: site-status
stars: 495
description: 📺 一个基于 UptimeRobot API 的在线状态面板 | 站点监测 | 状态检测 | An online status panel based on the UptimeRobot API | UptimeRobot, status, site
url: https://github.com/imsyy/site-status
---

site-status
===========

一个基于 UptimeRobot API 的在线状态面板

特色
--

-   站点状态总览
-   流畅的动画
-   数据获取失败提醒
-   移动端适配

事先准备
----

-   您需要先到 UptimeRobot 添加站点监控，并在 `My Settings` 页面获取 类型为 `Read-Only API Key` 的 `API Key`

如何使用
----

-   `star` 并 `fork` 😘
-   按照下方部署操作来安装依赖
-   在 `.env` 文件中进行配置修改
-   将打包后的文件上传至网站空间或者直接使用 `Vercel` 或者 `Cloudflare` 直接部署该项目

部署
--

### 安装依赖

# 若没有 pnpm
npm install pnpm -g

# 安装依赖
pnpm install

### 开发

pnpm dev

### 打包

pnpm build

鸣谢
--

-   uptime-status 基于此项目进行修改
