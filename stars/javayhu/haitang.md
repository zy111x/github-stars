---
project: haitang
stars: 620
description: 海棠诗社，古诗词的数字桃源
url: https://github.com/javayhu/haitang
---

海棠诗社
====

https://haitang.app | https://haitang.vercel.app

海棠诗社，古诗词的数字桃源

如果觉得这个项目不错的话，可以点个⭐，非常感谢

📌 Key Features
---------------

-   🎯 海棠诗社按诗集、朝代、诗人、诗词等方式检索，内容丰富，信息齐全
-   📝 海棠诗社按选集、主题、节日、节气、词牌、时令、地理等方式精选分类
-   🔍 海棠诗社全站响应式布局，兼容移动端，支持暗黑模式，响应速度快

✨ Tech Stacks
-------------

-   💻 Frontend: Astro + Tailwind + Shadcn/ui
-   📊 Analytics: Umami + Google Analytics 👉 Analytics.astro
-   🗂️ Database: SQLite + Drizzle 👉 schema\_sqlite.ts
-   💬 Comment: Giscus 👉 Giscus.astro

⛳ Deployment
------------

Fork这个项目，然后在Vercel中新建项目，选择Github仓库，配置默认即可。

开源版本的海棠诗社：https://haitang.vercel.app

现网版本的海棠诗社：https://haitang.app

🚀 Getting Started
------------------

### 👉 Install Dependencies

yarn

### 👉 Development Command

yarn dev

### 👉 Build Command

yarn build

❓开源版本和现网版本有什么区别？
----------------

-   项目代码的差异：没有差异，完全开源。
    
-   部署平台的差异：开源版本的海棠诗社是部署在Vercel上，需要科学上网才能访问。现网版本的海棠诗社是部署在Netlify上，绑定了自购域名，所以国内可以直接访问。本项目是纯静态网站，也可以稍微修改代码在其他平台上部署，例如CloudFlare。
    
-   网站功能的差异：开源版本去掉了注册登录的功能，原因：简化开源版本的上手流程。这些功能跟主体的诗词学习功能无关，加上的话还要配置 Supabase + Github OAuth + Resend。若对注册登录等逻辑感兴趣的话，可以看这次代码提交之前的代码，可自行配置。
    

📱 古诗词数据来源
----------

Thanks to 西窗烛

👨‍💻 独立开发者导航站
--------------

如果对独立开发感兴趣的话，不妨关注下 独立开发者导航站，发掘最优秀的产品工具，助力你快速发布你的下一个应用！ 或者关注 我的推特，我会不定期分享独立开发相关的知识，一起成长，一起开发独立产品出海挣💰

📝 License
----------

Copyright (c) 2024 - Present, Designed & Developed by javayhu

**Code License:** Released under the MIT license.

⭐ Star History
--------------
