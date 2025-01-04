---
project: astro-cn.com
stars: 60
description: Astro 中文网站 Showcase。展示一些使用 Astro 构建的中文网站！
url: https://github.com/liruifengv/astro-cn.com
---

Astro 中文网站 Showcase
===================

展示一些使用 Astro 构建的中文网站！

🧞 Commands
-----------

运行以下命令：

Command

Action

`pnpm install`

安装依赖

`pnpm run dev`

在 `localhost:4321` 启动开发服务器

`pnpm run build`

打包到 `./dist/`

`pnpm run preview`

本地预览

`pnpm format`

规范格式

添加 Showcase
-----------

用 Astro 或 Starlight 构建过中文网站？欢迎添加 Showcase!

1.  Fork 此仓库，在你的本地运行。
    
2.  添加一个你的网站的截图到 `src/assets/showcase/` 文件夹。
    
    -   你网站域名命名的 `.png` 格式，例如 `example.com.png`。
    -   图片尺寸为 800 × 450 像素。
3.  在 `src/sites.ts` 为你的网站添加新的一条。
    
    -   新的网站必须放在已存在的列表最后。
    -   `title` 属性是必须的，它是你的网站的名称。
    -   `href` 属性是必须的，它是你的网站的 URL。
    -   `thumbnail` 属性是必须的，它是第 2 步中添加的截图文件名。

const sites: Site\[\] = \[
  // ...
  { title: "Example", href: "https://example.com", thumbnail: "example.com.png" },
  { title: "Last Example", href: "https://example.org", thumbnail: "example.org.png" },
+ { title: "你的网站", href: "https://example.com", thumbnail: "example.com.png" },
\]

1.  创建一个 PR 到本仓库。

进群交流
----

> 如果你是 Astro 用户，欢迎加我微信 `liruifengv2333` 进 Astro 中文交流群
