---
project: hexo-theme-anzhiyu
stars: 2351
description: 安知鱼主题，这是一个简洁美丽的hexo主题。
url: https://github.com/anzhiyu-c/hexo-theme-anzhiyu
---

  
  
  

🇨🇳 中文简体 | 🇬🇧 English

预览: 👍 AnZhiYu || 🤞 AnZhiYu

文档: 📖 anzhiyu Docs

一款基于hexo-theme-butterfly修改的主題

如果你希望有一个类似于wordpress的可以后台编辑的，那么你可以看看这个项目 安和鱼

hexo-theme-anzhiyu
==================

💻 安裝
-----

### Git 安裝

在博客根目录里安装最新版【推荐】

git clone \-b main https://github.com/anzhiyu\-c/hexo\-theme\-anzhiyu.git themes/anzhiyu

⚙ 应用主题
------

修改 hexo 配置文件`_config.yml`，把主题改为`anzhiyu`

```
theme: anzhiyu
```

> 如果你没有 pug 以及 stylus 的渲染器，请下载安装： `npm install hexo-renderer-pug hexo-renderer-stylus --save`

覆盖配置
----

覆盖配置可以使`主题配置`放置在 anzhiyu 目录之外，避免在更新主题时丢失自定义的配置。

通过 Npm 安装主题的用户可忽略，其他用户建议学习使用。

-   macos/linux 在博客根目录运行

cp -rf ./themes/anzhiyu/\_config.yml ./\_config.anzhiyu.yml

-   windows 复制`/themes/anzhiyu/_config.yml`此文件到 hexo 根目录，并重命名为`_config.anzhiyu.yml`

以后如果修改任何主题配置，都只需修改 \_config.anzhiyu.yml 的配置即可。

注意：

-   只要存在于 `_config.anzhiyu.yml` 的配置都是高优先级，修改原 `_config.yml` 是无效的。
-   每次更新主题可能存在配置变更，请注意更新说明，可能需要手动对 `_config.anzhiyu.yml` 同步修改。
-   想查看覆盖配置有没有生效，可以通过 `hexo g --debug` 查看命令行输出。
-   如果想将某些配置覆盖为空，注意不要把主键删掉，不然是无法覆盖的

功能特性
----

-   ✅ 无比详实的用户文档
-   ✅ 页面组件懒加载(pjax 方案)
-   ✅ 图片懒加载
-   ✅ 多种代码高亮方案
-   ✅ 多语言配置
-   ✅ 内置多款评论插件
-   ✅ 内置网页访问统计
-   ✅ 支持暗色模式
-   ✅ 支持脚注语法
-   ✅ 支持自定义 CDN 静态资源
-   ✅ 丰富多样化的标签选项快速构建你想要的功能
-   ✅ 支持定制化的右键菜单
-   ✅ 支持定制化的主色调随封面图片颜色变化
-   ✅ 支持沉浸式状态栏
-   ✅ 支持文章字数统计
-   ✅ 支持聊天系统
-   ✅ 支持谷歌分析、百度分析、微软分析、cloudflare 分析、cnzz 分析
-   ✅ 支持广告挂载
-   ✅ 支持图片大图查看
-   ✅ 支持瀑布流即刻说说
-   ✅ 支持瀑布流相册集
-   ✅ 支持阿里图标与 fontawesome
-   ✅ 支持高速缓存的 swpp，pwa 特性
-   ✅ 优秀的隐私协议支持
-   ✅ 文章 AI 摘要支持
-   ✅ 支持音乐球
-   ✅ 支持全局中控台
-   ✅ 支持快捷键选项
-   ✅ 支持本地搜索/algolia 搜索 🔍/Docsearch
-   ✅ 支持 LaTeX 数学公式
-   ✅ 支持 mermaid 流程图

部分功能展示
------

**沉浸式状态栏** 沉浸阅读。

**高低自定义的右键菜单** 高度定制。

**AI 摘要** 迅速读取文章内容。

**让人眼前一亮的清爽界面**

**评论弹幕**

贡献者
---

主题设计：@张洪 Heo

文档编写：@xiaoran

本项目 CDN 加速及安全防护由 Tencent EdgeOne 赞助

仓库统计
----
