---
project: awesome-javascript-cn
stars: 7770
description: JavaScript 资源大全中文版，内容包括：包管理器、加载器、测试框架、运行器、QA、MVC框架和库、模板引擎等。由「开源前哨」和「前端大全」微信公号团队维护更新。
url: https://github.com/jobbole/awesome-javascript-cn
---

JavaScript 资源大全中文版
==================

awesome-javascript 是 sorrycc 发起维护的 JS 资源列表，内容包括：包管理器、加载器、测试框架、运行器、QA、MVC 框架和库、模板引擎、数据可视化、时间轴、编辑器等。由「开源前哨」和「前端大全」微信公号团队维护更新。

### 本项目的参与者

-   维护者：「开源前哨」和「前端大全」微信公号团队。「开源前哨」会定期在知乎专栏分享最新、有趣和热门的开源项目，每个项目都有详细的介绍和示例。传送门：https://www.zhihu.com/column/c\_1317124962785062912
    
-   贡献者：Yangholmes、刘健超、MissNull、一兮、Mr. Somebody、Jason Lee、Tab\_Gre、GavinZhang、shadowkimi520、zhoutk、tzstone、Erichain、chen、ElizabethMa、LeuisKen、linacre、王涛、neal1991、luoyjx、appleshowc、TAMMENY、cike8899、cnzin、cike8899、hustcc、冰斌、邢敏、张小然
    

注: 名单不分排名，不定期补充更新

* * *

### 目录

-   JavaScript资源大全中文版
    -   包管理器
    -   加载器
    -   组件管理器
    -   打包工具
    -   测试框架
    -   QA工具
    -   MVC 框架和库
    -   基于 Node 的 CMS 框架
    -   模板引擎
    -   文章和帖子
    -   数据可视化
        -   时间轴
        -   电子表格
    -   编辑器
    -   文档
    -   工具
        -   文件
        -   函数式编程
        -   响应式编程
        -   数据结构
        -   日期
        -   字符串
        -   数字
        -   存储
        -   颜色
        -   国际化和本地化
        -   控制流
        -   路由
        -   安全性
        -   日志
        -   正则表达式
        -   语音命令
        -   API
        -   流媒体
        -   视觉检测
        -   机器学习
        -   浏览器检测
        -   基准测试
    -   UI
        -   代码高亮
        -   加载状态
        -   验证
        -   键盘封装器
        -   导览与指南
        -   通知
        -   幻灯片
        -   滑块控件
        -   表单组件
        -   提示
        -   模态框和弹出框
        -   滚动条
        -   菜单
        -   表格/栅格
        -   框架
        -   Boilerplates
    -   手势
    -   地图
    -   视频/音频
    -   排版
    -   动画
    -   图片处理
    -   ES6
    -   静态页面生成器
    -   SDK
    -   大杂烩
-   精品阅读
-   其他 Awesome

-   资源
    -   有影响力的书

* * *

包管理器
----

管理、读取和打包 JavaScript 库的工具。

-   npm：npm 是 JavaScript 的包管理器。
-   Bower：一个 web 应用的包管理器。
-   component：能构建更好 web 应用的客户端包管理器。
-   spm：全新的静态包管理器。
-   jam：一个专注于浏览器端的包管理器, 兼容 RequireJS 。
-   jspm：流畅的浏览器包管理器。
-   Ender：没有库文件的程序库。
-   volo：以项目模板、添加依赖项与自动化生成的方式创建前端项目。
-   Duo：融合了 Component、Browserify 和 Go 的最佳思想，快速无痛开发组织前端代码的下一代包管理器。
-   yarn：高效、稳定、安全的依赖管理器。
-   pnpm：效率高、磁盘利用率高的包管理器

组件管理器
-----

-   Bit：跨应用创建、查找、复用组件（支持 React、Angular、Node.js 等等）的组件管理器

加载器
---

JavaScript 模块或加载系统。

-   RequireJS：一种 JavaScript 文件和模块加载器。
-   browserify：像在 Node.js 一样在浏览器端使用 require() 函数。
-   SeaJS：Web 端模块加载器。
-   HeadJS：HEAD 里只有唯一一个 script 引入。
-   curl：小巧、快速且易扩展的模块加载器，它能处理 AMD、CommonJS Modules/1.1、CSS、HTML/text 和非模块化脚本。
-   lazyload：小巧且无依赖的异步 JavaScript 和 CSS 加载器。
-   script.js：异步 JavaScript 加载器和依赖管理器。
-   systemjs：AMD、CJS（commonJS） 和符合 ES6 规范的模块加载器。
-   LodJS：基于 AMD 的模块加载器。
-   ESL：浏览器端的模块加载器，支持懒定义和 AMD。
-   modulejs：轻量的 JavaScript 模块系统。

打包工具
----

-   browserify：Browserify 帮助你在浏览器端使用 require('modules') 打包所有依赖。
-   webpack：为浏览器打包 CommonJs/AMD 模块。
-   Rollup：下一代 ES6 模块打包工具。
-   Brunch：只需要简单声明式配置的快速前端 Webapp 构建工具。
-   Parcel：零配置，超快速 Web 应用打包工具。
-   Microbundle：用于小模块的零配置打包工具。
-   FuseBox：一个只做正确事情的打包工具。

类型检测
----

-   TypeScript：JavaScript 的超集，可以编译成原生 JavaScript 。
-   Flow.js：Facebook 出品的静态类型检查器。
-   Hegel：偏向于强类型推断的静态类型检查器。
-   TypL：偏向于类型推断的 JavaScript 类型检查器。
-   Hindley Milner Definitions：使用类似 Haskell 的 Hindley Milner 类型签名的 JavaScript 函数运行时类型检查。

测试框架
----

### 框架

-   mocha：适用于 node.js 和浏览器的简易、灵活、有趣的 JavaScript 测试框架。
-   jasmine：简单无 DOM 的 JavaScript 测试框架。
-   qunit：一个易用的 JavaScript 单元测试框架。
-   jest：能无痛使用的 JavaScript 单元测试框架。
-   prova：基于 Tape 和 Browserify 的测试运行器，适用于 Node 和 浏览器。
-   DalekJS：跨浏览器的 JavaScript 自动化功能测试框架（已经停止维护——译者注）。
-   Protractor：适用于 AngularJS 应用的端到端测试框架。
-   tape：适用于 Node 和浏览器的 tap 生成器测试套件。
-   TestCafe：适用于现代 Web 应用开发栈的自动化浏览器测试工具。
-   ava：🚀 未来感十足的测试运行器。
-   Cypress：一个完整的端到端测试框架，用于测试在浏览器中运行的所有代码。

### 断言

-   chai：适用于 node.js 和浏览器的 BDD / TDD 断言框架，并能搭配任意测试框架使用。
-   Enzyme：Enzyme 是一款 React 专用的 JavaScript 测试工具，让断言、操作和遍历 React 组件之后输出更加容易。
-   react testing library：简单完备的 React DOM 测试工具，引导更好的测试实践。
-   Sinon.JS：对 JavaScript 进行 spies、stubs 和 mock 测试。
-   expect.js：简约的、适用于 Node.js 和浏览器端的 BDD 风格的断言工具。
-   proxyquire：Node.js 依赖桩代码。

### 覆盖率

-   istanbul：一个 JavaScript 代码覆盖率检测工具。
-   blanket：一个简单的代码覆盖率检测库。它的设计理念是易于安装和使用，浏览器和 node.js 都可用。
-   JSCover：JSCover 是一个检测 JavaScript 程序代码覆盖率的工具。

### 运行器

-   phantomjs：无界面的 Webkit 运行时（已暂停开发——译者注）。
-   slimerjs：一个内核为 Gecko 的类似 PhantomJS 工具。
-   casperjs：基于 PhantomJS 和 Slimer JS 的导航脚本和测试工具。
-   zombie：基于 node.js 的超快速、全栈且无图形界面的浏览器的测试工具。
-   totoro：一个简单可靠的跨浏览器测试工具。
-   karma：一款超级棒的 JavaScript 测试运行器（多浏览器测试场景下的 JavaScript 执行工具——译者注）。
-   nightwatch：基于 node.js 和 selenium webdriver 的图形界面自动化测试框架。
-   intern：下一代 JavaScript 代码测试栈。
-   yolpo：在浏览器逐句执行的 JavaScript 解释器。
-   puppeteer：谷歌 Chrome 团队出品，无界面 Chrome （Chromium） Node.js API 环境。
-   webdriverio：下一代 Web 驱动的 Node.js 自动化测试框架。
-   taiko：用于自动测试 Chromium 内核浏览器的简易 Node.js API 库。

QA 工具
-----

-   Prettier：Prettier 是一款固执（严格）的代码格式化工具。
-   JSHint：JSHint 是一款用于检测 JavaScript 代码错误和潜在问题的工具。
-   jscs：JavaScript 代码风格检测工具。
-   jsfmt：格式化、搜索和改写 JavaScript。
-   jsinspect：检测复制粘贴和结构类似的代码。
-   buddy.js：检测 JavaScript 代码里的魔术数字。
-   ESLint：一款完全可插拔的 JavaScript 模板检测和报告工具。
-   JSLint ：高标准、严要求且固执的代码质量工具，旨在保持语言的精华部分。
-   JavaScript Standard Style：固执、无需配置的代码风格规范、检查器和格式化工具。
-   Pre-evaluate code at buildtime：构建阶段前端 JavaScript 代码与评估器。
-   JS-Beautifier：格式化 JavaScript 代码的 npm 脚手架和库。
-   husky：防止劣质的 git commit、git push 等 git 操作。

MVC 框架和库
--------

-   angular.js：专为 web 应用设计的增强型 HTML 。
-   aurelia：一个适用于移动设备、桌面设备和 web 的 JavaScript 客户端框架。
-   backbone：web 应用模型层、视图层、数据集合和事件的骨架。
-   ember.js：一个旨在创建非凡 web 应用的 JavaScript 框架。
-   meteor：一个超简单的、数据库无处不在的、只传输数据的纯 JavaScript web 框架。
-   ractive：新一代 DOM 操作。
-   vue：一套用于构建用户界面的渐进式框架。
-   svelte：svelte 是一种构建 web 应用的新方式。svelte 编译器将声明式组件编译成高效的 JavaScript 代码，并且会像外科手术那样更新 DOM。
-   knockout：Knockout 让使用 JavaScript 创建响应式富 UI 更加容易。
-   spine：轻量级 JavaScript 应用 MVC 框架。
-   espresso.js：一个极小的、用于制作用户界面的 JavaScript 库。
-   canjs：让 JS 更好、更快、更简单。
-   react：用于建构用户界面的库。它是声明式的、高效的和极度灵活的。以虚拟 DOM 作为其实现。
-   hyperapp：体积仅 1kb 的前端应用构件库。
-   preact：体积仅 3kb 的用 ES6 api 实现的 React 替代方案。（和 React 一样基于）组件和虚拟 DOM。
-   nativescript：构建真正的跨平台原生 JavaScript 应用，支持 iOS 和 Android 。
-   react-native：一个用 React 构建原生应用的框架。
-   riot：轻量级类 React 库。
-   thorax：强化版 Backbone。
-   chaplin：使用 Backbone.js 库的 JavaScript 应用架构。
-   marionette：一个 Backbone.js 的复合应用程序库，旨在简化大型 JavaScript 应用结构。
-   ripple：一个小巧的、用于构建响应界面的基础框架。
-   rivets：轻量却拥有强大的数据绑定和模板解决方案。
-   derby：让编写实时和协同应用更简单的 MVC 框架，能够同时在 Node.js 和浏览器运行。
    -   derby-awesome：很棒的 derby 组件集合。
-   way.js：简单、轻量、持久的双向数据绑定库。
-   mithril.js：Mithril 是一个客户端 MVC 框架（轻量、强大和快速）
-   jsblocks：jsblocks 是一个更好的类 MV 框架。
-   LiquidLava：用于构建用户界面的透明 MVC 框架。
-   feathers：专为未来应用设计的极简主义实时 JavaScript 库。
-   Keo：基于 Shadow DOM 的函数式无状态的 React 组件（框架）。
-   atvjs：使用原生 JavaScript 快速开发 Apple TV 应用。
-   makefun：链式 Promise 调用。
-   Alpine.js：Alpine.js 以更低的代价实现了像 Vue 和 React 这类大型架构一样的响应式和声明式的特性。
-   inferno：🔥 一款用于构建现代用户界面的超级快速、类似 React 的 JS 库。

基于 Node 的 CMS 框架
----------------

-   KeystoneJS：强大的 CMS 和 Web 应用框架。
-   Reaction Commerce：拥有实时的架构和设计的响应式 CMS。
-   Ghost：简单、强大的发布平台。
-   Apostrophe：提供内容编辑和基本服务的 CMS。
-   We.js：适用于实时应用、网站或博客的框架。
-   Hatch.js：拥有社交特性的 CMS 平台。
-   TaracotJS：基于 Node.js 的快速、极简风格 CMS。
-   Nodizecms：为 CoffeeScript 爱好者准备的 CMS。
-   Cody：拥有所见即所得编辑器的 CMS。
-   PencilBlue：一个 CMS 和博客平台。
-   Strapi：开源无界面的 Node.js CMS 系统，可轻松定制个性化接口。
-   Factor：一款 JavaScript CMS。

模板引擎
----

_模板引擎用于执行字符串插值。_

-   mustache.js：JavaScript 最精简的 {{mustaches}} 模板
-   handlebars.js：Mustache 模板语言的扩展。
-   nunjucks：Mozilla 出品，丰富且强大的 JavaScript 模板语言。
-   hogan.js：是 Mustache 模板语言的编译器。
-   doT：最快速简洁的 JavaScript 模板引擎，适用于 Node.js 和浏览器。
-   dustjs：适用于浏览器和 Node.js 的异步模板。
-   eco：嵌入式的 CoffeeScript 模板。
-   JavaScript-Templates：轻量（小于 1KB）、快速、强大且无依赖的 JavaScript 模版引擎。
-   t.js：小巧的 JavaScript 模板框架，压缩后约为 400 字节。
-   Pug：健壮的、优雅且功能丰富的 nodejs 模板引擎。`（曾用名：Jade）`
-   EJS：高效的 JavaScript 模板。
-   xtemplate：可扩展的模板引擎，适用于 node.js 和浏览器。
-   marko：基于 HTML 快速轻量的模板引擎，支持异步、流、自定义标签，支持 CommonJS 模块作为编译后输出，适用于 Node.js 和浏览器。
-   swig：一款简单、强大、可扩展的基于 Node.js 和 浏览器的 JavaScript 模板引擎。`（已停止维护）`
-   EHTML：一款实现零编写 JavaScript 的 HTML 框架。

文章和帖子
-----

-   你必须知道的 JavaScript 知识：介绍 JavaScript 基本概念的葡萄牙语文章。
-   JavaScript 运行原理：介绍 JavaScript 构建块的文集。
-   利用 web-workers 实现多线程：Web Worker ：为 JavaScript 添加多线程。
-   JavaScript 的 this 关键字：细嚼慢咽理解 JS this 关键字。

数据可视化
-----

Web 数据可视化工具

-   d3：一款 JavaScript 数据可视化库，使用 HTML、SVG 和 Canvas 技术展现数据。
    -   metrics-graphics：更简洁和拥有更规范的数据图表布局优化算法的库。
-   three.js：JavaScript 3D 库。
-   Chart.js：简单的基于 `<canvas>` 标签的 HTML5 图表库。
-   paper.js：矢量图形脚本的瑞士军刀，利用 HTML5 Canvas 将脚本-图表转换移植到 JavaScript 和浏览器。
-   fabric.js：JavaScript Canvas 库，实现 SVG 与 Canvas 相互解析。
-   peity：进度条、线状和饼状图。
-   raphael：JavaScript 矢量库。
-   Echarts：企业级图表库。
-   vis：动态的、基于浏览器的可视化库。
-   two.js：一个渲染器无关的适用于 web 的二维绘图 api 库。
-   g.raphael：为 Raphaël 设计的图表库。
-   sigma.js：一个致力于图形绘画的 JavaScript 库。
-   arbor：一个基于 web workers 和 jQuery 的图形可视化库。
-   cubism：可视化时间序列的 D3 插件。
-   dc.js：与 crossfilter 无缝结合的多维图表绘制库，使用 d3.js 渲染。
-   vega：一套可视化语法。
-   processing.js：Processing.js 实现了 Web 标准使数据可视化，而且无需任何插件。
-   envisionjs：动态的 HTML5 可视化。
-   rickshaw：用于构建交互式实时图表的 JavaScript 工具包。
-   flot：吸引人的、基于 jQuery 的 JavaScript 图表库。
-   morris.js：漂亮的时间序列图。
-   nvd3：一个为 d3.js 构建可复用图表和图表组件的库。
-   svg.js：一个轻量级的 SVG 操作和动画库。
-   heatmap.js：基于 HTML5 canvas 的热力图 JavaScript 库。
-   jquery.sparkline：一个直接在浏览器端生成小型走势图的 jQuery 插件。
-   trianglify：基于 d3.js 的低聚风格背景图片生成器。
-   d3-cloud：创建词云效果的 JavaScript 库。
-   d4：一个基于 d3 、友好、可复用的 DSL 图表库 。
-   dimple.js：基于 d3 的简易商业分析图表库。
-   chartist-js：简单的响应式图表。
-   epoch：一个通用的实时图表库。
-   c3：基于 d3 的可复用图表库。
-   BabylonJS：一个基于 HTML5 和 WebGL 的 3D 游戏的框架。
-   recharts：基于 React 和 d3 ，重新定义图标库。
-   GraphicsJS：轻量级直观接口 JavaScript 图形库，基于 SVG/VML 技术。
-   mxGraph：一款可快速创建交互式图表应用的图形库，支持任何主流浏览器（`已停止开发——译者注`）。
-   Frappe Charts：GitHub 驱动，为 web 设计的简易、现代且零依赖的 SVG 图形库。
-   Frappe Gantt：一款简单、可交互、现代的 Web 甘特图库。

还有一些很棒的收费库，如 amchart、plotly 和 highchart。

时间轴
---

-   TimelineJS：一个用 JavaScript 编写的可叙事时间轴库。
-   timesheet.js：用于构建简单的 HTML5 & CSS3 时间表的 JavaScript 库。

电子表格
----

-   HANDSONTABLE：Handsontable 是一款面向开发者的 JavaScript/HTML 5 电子表格库。
-   Frappe Datatable：Frappe DataTable 是一款适用于展示 Tabular 数据的简单、现代、可交互的数据表格库。
-   Luckysheet：Luckysheet 是一款类似 Excel 的在线电子表格，配置简单且强大，完全开源。

编辑器
---

-   ace：Ace ，即 Ajax.org Cloud9 Editor。
-   CodeMirror：一个浏览器端的代码编辑器，用 JS 实现。
-   esprima：用于多用途分析的 ECMAScript 解析器。
-   quill：一个带有 API 的跨浏览器富文本编辑器。
-   medium-editor：Medium.com 使用的所见即所得编辑器的克隆版。
-   pen：享受在线编辑（支持 markdown）。
-   jquery-notebook：一个易用的、简洁优雅的文本编辑器。灵感来源于 Medium。
-   bootstrap-wysiwyg：小巧的、兼容 bootstrap 的所见即所得的富文本编辑器。
-   ckeditor-releases：适用于每个人的 web 文本编辑器。
-   editor：一个 markdown 编辑器，但仍在开发中。
-   EpicEditor：一个可嵌入的 JavaScript Markdown 的编辑器，拥有分屏编辑、即时预览、自动保存草稿和离线支持等功能。
-   jsoneditor：查看、编辑和格式化 JSON 的 web 工具。
-   vim.js：拥有持久化 ~/.vimrc 特性，支持 Vim 的 JavaScript 接口。
-   Squire：一个 HTML5 富文本编辑器。
-   TinyMCE：一个 JavaScript 富文本编辑器。
-   trix：由 Basecamp 制作，适用于每天写作的富文本编辑器。
-   Trumbowyg：一款轻量且惊人的所见即所得 JavaScript 编辑器
-   Draft.js：用于构建文本编辑器的 React 框架。
-   bootstrap-wysihtml5：一款简单漂亮的所见即所得编辑器。
-   wysihtml5：基于 HTML5 ，渐进增强的开源富文本编辑器，利用非常严苛的规则旨在生成符合 HTML5 规范的标签，避免生成非规范标签和同行样式。
-   raptor-editor：Raptor，一款 HTML5 所见即所得内容编辑器！
-   popline：Popline 是一款 HTML5 富文本工具栏。
-   Summernote：一个极简的所见即所得编辑器。

文档
--

-   DevDocs：一款多合一接口文档阅读器，界面统一、高效、排版精良。
-   dexy：一款格式自由且文艺的文档工具，可用于编写任何包含代码的技术文档。
-   docco：一款快且脏、百来行、文艺范的文档生成器，用 Literate CoffeeScript 实现。
-   styledocco：根据样式表生成风格规范文档。
-   Ronn：构建手册。把对人类阅读友好的简单文本文件转换成 roff 格式文件，便于终端显示，也可以转换为 HTML ，便于 Web 端显示。
-   dox：一款 Node.js 开发的 JavaScript 文档生成器。Dox 不会生成结构样式严苛的文档，而是采用 JSON 表示法，以实现 markdown 和 JSDoc 风格标签。
-   jsdox：一款将 JSDoc3 转换成 markdown 的文档生成器。
-   ESDoc：一款为 JavaScript 设计的优秀文档生成器。
-   YUIDoc：一款提取源码注释生成接口文档的 Node.js 应用，功能类似 Javadoc and Doxygen 。
-   coddoc：一款 jsdoc 解析库。Coddoc 与其他工具相比)的不同之处在于，它很容易扩展，通过 coddoc.addTagHandler 和 coddoc.addCodeHandler 来添加标签和代码解析器。 Coddoc 还可以解析源码生成接口文档。
-   sphinx：一款让创建智能且漂亮文档更加简单的工具。
-   Using JSDoc
-   Beautiful docs：一款 markdown 格式文档阅读器。
-   documentation.js：支持 ES2015+ 和流注释的接口文档生成器。
-   jsduck：为 Sencha JavaScript 框架开发的接口文档生成器，当然其他框架也能用。
-   codecrumbs：一款用于学习和记录代码库的可视化工具，通过在源码中插入面包屑来实现功能。

文件
--

_处理文件的库。_

-   Papa Parse：一款强大的 CSV 库，支持解析 CSV 文件/字符串，也能导出 CSV。
-   jBinary：对用声明式语法描述文件类型和数据结构的二进制文件，进行高级 I/O（加载、解析、操作、序列化、存储）操作。
-   diff2html：git 差异输出解析器，也是 HTML 美化器。
-   jsPDF：一款 JavaScript PDF 文件生成器。
-   PDF.js：一个 JavaScript PDF 阅读器，社区驱动，Mozilla 支持。

函数式编程
-----

_函数式编程库提升了 JavaScript 的能力。_

-   underscore：JavaScript 的实用工具。
-   lodash：提供一致性、可定制、高性能和额外功能的实用库。
-   Sugar：一个扩展了原生对象功能的 JavaScript 库。
-   lazy.js：类似 `Underscore`，但性能更优越
-   ramda：一个针对 JavaScript 程序员的实用函数库。
-   mout：模块化的 JavaScript 工具库。
-   mesh：流数据同步工具。
-   preludejs：JavaScript 硬核函数式编程。
-   rambda：_Ramda_ 快速小巧的替代品。

响应式编程
-----

_响应式程序库提升了 JavaScript 的能力。_

-   RxJs：对 JavaScript 进行响应式扩展。
-   Bacon：JavaScript 的 FPR（函数式响应式编程）库。
-   Kefir：受 Bacon.js 和 RxJS 启发的 FRP 库，专注于高性能和低内存消耗。
-   Highland：对 JavaScript 实用工具的重新思考，Highland 能轻易地管理同步和异步信息，而且仅使用标准 JavaScript 和类 Node 流。
-   Most.js：高性能 FRP 库。
-   MobX：一款简单可扩展的状态管理 TFRP （`Transparently Functional Reactive Programming ，透明函数式响应式编程——译者注`）库。
-   Cycle.js：一款用于可预测代码的函数式和响应式 JavaScript 框架。
-   concent：绝对是 ❤️ 最简单却 ⚡️ 最强大的 react 状态管理开发框架，可预测、渐进式、高性能。

数据结构
----

_数据结构库用于构建一个更复杂的应用。_

-   immutable-js：不可变的数据集合，包括 Sequence、Range、Repeat、Map、OrderedMap、Set 和 sparse Vector。
-   mori：使用 ClojureScript 持久化数据结构和支持原生 JavaScript API 的库。
-   buckets：完整的、经过充分测试和文档完备的数据结构的 JavaScript 库。
-   hashmap：简单的哈希映射实现，支持任何类型的键值。

日期
--

_日期库。_

-   moment：解析、验证、操作和显示日期。
-   moment-timezone：基于 moment.js 的时区库。
-   jquery-timeago：一款支持自动更新模糊时间戳的 jQuery 插件（如："4 分钟之前"）。
-   timezone-js：让 JavaScript Date 对象拥有时区功能。使用 Olson zoneinfo 文件记录时区数据。
-   date：对人类友好的 Date()。
-   ms.js：小巧的毫秒转换工具。
-   countdown.js：超小倒计时。
-   timeago.js：一个非常轻量级（~1.7 Kb）的用于将时间转化成 `xxx时间前` 格式的库。
-   fecha：轻量级日期格式化和解析库（约 2kb）。可以用来替换 moment.js 格式化和解析日期功能（moment.js 体积比较大——译者注）。
-   date-fns：现代 JavaScript 日期功能库。
-   map-countdown：构建在 Google 地图上的浏览器倒计时。
-   dayjs：Day.js 是一款拥有和 Moment.js 一样的现代化接口的日期库，但它仅仅有 2kb 大小，可以用来替换 Moment.js。

字符串
---

_字符串库。_

-   voca：一款超级好用的 JavaScript 字符串库。
-   selecting：一个允许你获取用户选定文本的库。
-   underscore.string：Underscore.js 的字符串操作扩展。
-   string.js：额外的 JavaScript 字符串方法。
-   he：健壮的 HTML 实体编码/解码器。
-   multiline：多行字符串。
-   query-string：解析和字符串化 URL 查询字符串。
-   URI.js：URL 操作库。
-   jsurl：轻量的 URL 操作库。
-   sprintf.js：实现字符串格式化。
-   url-pattern：比正则表达式匹配 url 或其它字符串更简单，字符串和数据可相互转化。
-   plexis：低保真、强大、社区驱动的字符串操作库。

数字
--

-   Numeral-js：对数字进行格式化和操作的库。
-   chance.js：JavaScript 随机生成器，可以生成数字、字符串等。
-   odometer：流畅的数字过渡效果。
-   accounting.js：对数字、金钱、货币进行格式化的轻量库，完全本地化和无依赖。
-   money.js：一个小巧（1kb）的货币转换库，适用于 web 和 nodeJS。
-   Fraction.js：一个有理数库。
-   Complex.js：一个复数库。
-   Polynomial.js：一个多项式库。
-   Quaternion.js：一款适用于 JavaScript 的四元数操作库。

存储
--

-   store.js：为所有浏览器封装了 LocalStorage，而没有使用 cookies 和 flash。隐秘地使用 localStorage、globalStorage 和用户数据。
-   localForage：改善后的离线存储。其封装了 IndexedDB、WebSQL 和 localStorage，拥有操作简单和强大的 API。
-   jStorage：jStorage 是一个简单的键值对数据库，用于在浏览器端存储数据。
-   cross-storage：获得权限后，能跨域名本地存储。
-   basket.js：用 localStorage 加载和缓存脚本的资源加载器。
-   bag.js：可以缓存脚本和加载资源，与 basket.js 相似，但增加了键值对接口和对 localStorage / websql / indexedDB 的支持。
-   basil.js：智能的 JavaScript 数据持久层库。
-   jquery-cookie：轻量简单的、用于读取、编辑和删除 cookie 的 jQuery 插件。
-   js-cookie：一款简单、轻量的 cookies 读写删 jQuery 插件。
-   Cookies：一个客户端 Cookie 操作库。
-   DB.js：基于 Promise 的、封装了 IndexedDB 的库。
-   lawnchair.js：简单的客户端 JSON 存储。
-   sql.js：基于 Emscripten 将 SQLite 编译成 JavaScript。
-   crumbsjs：一款轻量级原生 ES6 cookies 和本地存储 JavaScript 库。
-   awesome-web-storage：你必须知道的所有客户端存储知识。

颜色
--

-   randomColor：JavaScript 颜色生成器。
-   chroma.js：拥有各种各样颜色操作的 JavaScript 库。
-   color：JavaScript 颜色转换和操作库。
-   colors：更智能的默认 web 颜色。
-   PleaseJS：随机创建出赏心悦目的颜色和配色方案的 JavaScript 库。
-   TinyColor：快速、轻巧的颜色操作和转换库。
-   Vibrant.js：从图像提取主要颜色。

国际化和本地化
-------

_本地化（l10n）和国际化（i18n） JavaScript 库_

-   i18next：用 JavaScript 实现国际化（i18n）简单的方法。
-   polyglot：小巧的国际化助手库。
-   babelfish：提供友好易懂 API 的 i18n 库，并且内置多种支持。
-   ttag：基于 ES6 标签模板和优秀的旧 GNU gettext ，新潮的 JavaScript 国际化、本地化库。

控制流
---

-   async：适用于 node.js 和浏览器的异步工具库。
-   q：实现异步 promise 的 JavaScript 工具。
-   step：一款可以使逻辑执行更简单的异步控制流库。
-   contra：函数式风格实现的异步流控制。
-   Bluebird：功能齐全的 promoise 库，专注于功能革新和性能提升。
-   when：快速可靠的、Promises/A+ 规范的 when() 实现，而且拥有其它异步操作的优秀特性。
-   ObjectEventTarget：为普通对象添加事件监听原型（就如浏览器 DOMElement 的 EventTarget 一样）。
-   sporadic：位于 promise 顶部的组合并发抽象（就像流、协程和类似 Go channels 一样），支持 Node.js 和浏览器引擎。

路由
--

-   director：一个小巧的、与 URL 同构的路由。
-   page.js：受 Express router 启发的小型客户端路由器（约为1200字节）。
-   pathjs：简单、轻量的 web 路由。
-   crossroads：JavaScript 路由。
-   davis.js：基于 pushState 可降级 RESTful 风格的 JavaScript 路由。
-   navaid：一款浏览器端的导航辅助系统（也可以成为路由），体积才 850 字节！

安全性
---

-   DOMPurify：针对 HTML、MathML 和 SVG 的仅支持 DOM 的超快速、高容错的 XSS 过滤器。
-   js-xss：通过白名单配置，即可过滤不信任的 HTML（防止 XSS 攻击）。
-   xss-filters：Yahoo 出品的安全 XSS 过滤器。

日志
--

-   log：带样式的 Console.log。
-   Conzole：对 JavaScript 原生 console 对象方法和功能进行封装的 debug 面板，并将面板显示在页面内。
-   console.log-wrapper：将日志清晰地记录到 console，兼容所有浏览器。
-   loglevel：最轻量的 JavaScript 日志记录工具库，向封装后的 console.log 方法增加可靠的日志等级。
-   minilog：轻量的、流式 API 显示的、可用于客户端和服务器端的日志记录库。
-   storyboard：通用日志库 + Chrome 扩展。提供一个单一入口查看包含客户端和服务端的任务触发日志。

正则表达式
-----

-   RegEx101：在线的 JavaScript 正则表达式测试器和调试器。同时也支持 Python、PHP 和 PCRE。
-   RegExr：用于创建、测试和学习正则表达式的 HTML/JS 工具。

语音命令
----

-   annyang：向网站添加语音命令的语音识别库。
-   voix.js：向网站、app 或游戏添加语音命令的 JavaScript 库。

API
---

-   axios：基于 Promise 的 HTTP 客户端，适用于 Node.js 和 浏览器。
-   bottleneck：强大的速度限制器，使调节流量变得更容易。
-   oauth-signature-js：适用于 node 和 浏览器的 OAuth 1.0a 签名生成器。
-   amygdala：为 Web 应用提供 RESTful HTTP 客户端解决方案。
-   jquery.rest：一个让 RESTful API 更易用的 jQuery 插件。
-   Rails Ranger：为 Ruby Tails 接口设计的严格的 REST 客户端。
-   wretch：一款小巧的直觉语法系 fetch 功能封装包。
-   Bearer.sh：支持 OAuth / API Key / Basic 等协议的全能型 API 客户端。`（已停止维护——译者注）`
-   FarFetch：简单易用的现代 Fetch 接口封装，简化了文件上传。
-   Optic：Optic 用于对 API 自动测试和文档生成。
-   SWR：用于远端数据拉取的 React Hooks 库。

流媒体
---

-   Tailor：适用于前端微服务的流媒体布局服务，灵感来自 Facebook BigPipe。

视觉检测
----

-   tracking.js：在 web 上实现计算视觉的一种现代方法。
-   ocrad.js：基于 Emscripten 的 JavaScript OCR 实现。

机器学习
----

-   ConvNetJS：JavaScript 深度学习。在浏览器环境训练卷积神经网络（或者普通神经网络）。
-   DN2A：数字神经网络架构。
-   Brain.js：JavaScript 神经网络。
-   Mind.js：一款灵活的神经网络库。
-   Synaptic.js：适用于 Node.js 和浏览器的无架构神经网络库。
-   TensorFlow.js：一款用于在 浏览器和 Node.js 中训练和部署 ML 模型的 JavaScript 库。
-   ml5.js：友好的 Web 端机器学习库。
-   Synapses：轻量级跨平台神经网络库。

浏览器检测
-----

-   bowser：一个浏览器检测器，特点是小巧快速且 API 丰富。

基准测试
----

-   benchmark.js：jsPerf.com 使用的基准测试库。
-   matcha：一款咖啡因驱动的基准测试简单实现。

UI
--

代码高亮
----

-   Highlight.js：JavaScript 语法高亮器。
-   PrismJS：轻量、健壮和优雅的语法高亮器。

加载状态
----

指示加载状态的库。

-   Mprogress.js：谷歌 Material 风格的线性进度条。
-   NProgress：在 Ajax'y 应用显示细长型进度条。
-   Spin.js：一个旋转进度指示器。
-   progress.js：为页面中的任何对象创建和管理进度条。
-   progressbar.js：基于 SVG path 动画，漂亮、响应式的进度条。
-   pace：自动向你的网站添加一个进度条。
-   topbar：小巧漂亮的、与网站同宽的进度指示器。
-   nanobar：非常轻量的进度条，不依赖 jQuery。
-   PageLoadingEffects：使用 SVG 动画展现新内容的现代方式。
-   SpinKit：CSS 加载指示器动画集合。
-   Ladda：内置在按钮的加载指示器。
-   css-loaders：CSS 旋转加载指示器动画集合。

除了上述这些库，还有 Codepen 珍藏，另外还有 Ajaxload，Preloaders 和 CSSLoad 这些生成器。

验证
--

-   Parsley.js：一行 JavaScript 代码都不用写就可以在前端验证表单。
-   jquery-validation：jQuery 验证插件。
-   validator.js：字符串验证和过滤（清理用户输入中的有害或危险字符）。
-   validate.js：受 CodeIgniter 启发的轻量表单验证 JavaScript 库。
-   validatr：跨浏览器的 HTML5 表单验证库。
-   FormValidation：jQuery 最好的表单验证插件。曾用名 BootstrapValidator.
-   is.js：用于类型、正则表达式、是否存在、时间等检查。
-   FieldVal：多用途验证库。同时支持同步和异步验证。
-   Funval：函数接口式数据验证（支持 TypeScript）。

键盘封装器
-----

-   mousetrap：处理键盘快捷键的简单 JavaScript 库。
-   keymaster：定义和调度键盘快捷键的小型库。
-   Keypress：键入捕捉工具库，任何键都可以成为一个修饰健。
-   KeyboardJS：一个用于绑定组合键的 JavaScript 库，让你无痛解决快捷键和组合键冲突。
-   jquery.hotkeys：jQuery Hotkeys 能让你在代码任何的地方监听键盘事件，并几乎支持所有按键组合。
-   jwerty：令人惊叹的键盘事件处理库。

导览与指南
-----

-   intro.js：一款用于网站项目新特性介绍和逐步导览库。
-   shepherd：通过引导让用户浏览你的应用程序。
-   bootstrap-tour：应用 Twitter Bootstrap 气泡对产品进行快速简单的引导。
-   tourist：简单、灵活的应用引导库。
-   chardin.js：简单的应用遮罩层引号库。
-   pageguide：使用 jQuery 和 CSS3 的 web 页面元素交互引导库。
-   hopscotch：让开发者更容易向其产品页面添加引导的框架。
-   joyride：基于 jQuery 的功能引导介绍插件。
-   focusable：通过向页面其余部分添加遮罩层，使焦点聚集在特定 DOM 元素。
-   driver.js：用于聚焦用户注意力的强大却轻量的原生 JavaScript 引擎。

通知
--

-   iziToast：优雅、响应式、灵活且轻量的零依赖通知插件。
-   messenger：为应用添加 Growl-style 弹框和信息（Crowl 是 Mac OS X 下的一个通知系统）。
-   noty：jQuery 通知插件。
-   pnotify：适用于 Bootstrap、jQuery UI 和 Web Notifications Draft 的 JavaScript 通知库。
-   toastr：简单的 JavaScript 吐司通知库。
-   humane-js：一个简单、时髦的浏览器通知系统。
-   smoke.js：与框架无关的 JavaScript 弹框系统。
-   notie：简单的零依赖通知器和输入框。

幻灯片
---

-   Swiper：使用硬件加速动画的移动设备触控幻灯片框架。
-   slick：（可能是）你最爱的跑马灯轮播库。
-   slidesJs：响应式的 jQuery（1.7.1+）幻灯片插件，具有触摸、 CSS3 过渡等特性。`（已停止维护——译者注）`
-   FlexSlider：一款令人惊叹的、全响应式的 jQuery 幻灯片插件。
-   unslider：最简单的幻灯片 jQuery 插件。
-   sly：用于单向滚动的 JavaScript 库，支持基于项目的导航。`（注：最后更新时间是 7 年前）`
-   vegas：向页面添加漂亮的全屏背景的 jQuery 插件，同时也支持幻灯片播放。
-   Sequence：用于创建响应式的幻灯片、演示、标语和其他分步导览应用的 CSS 动画框架。
-   reveal.js：用 HTML 创建漂亮演示文档控件的框架。
-   impress.js：一款适用于现代浏览器，基于 CSS3 transforms 和 transitions 动画的演示文档框架。灵感来自 prezi.com 。
-   bespoke.js：一个超级小的(1KB min和gzip压缩)，模块化的现代浏览器表示库，旨在促进一个丰富的插件生态系统。
-   Strut：Strut 是 Impress.js 和 Bespoke.js 演示文档编辑器。
-   PhotoSwipe：适用于移动设备和桌面电脑的、模块化和独立框架的 JavaScript 画廊控件。
-   jcSlider：基于 CSS 动画实现的响应式幻灯片 jQuery 插件。
-   basic-jquery-slider：易于使用、指定主题和定制化。
-   jQuery.adaptive-slider：带有自适应颜色标题和导航的幻灯片 jQuery 插件。
-   slidr：一个简单、轻量级的 JS 库，用于向页面添加幻灯片转换。无依赖关系。
-   Flickity：可触摸的、响应式的和可轻弹的画廊。
-   Glide.js：响应式触摸友好型 jQuery 幻灯片。特点是小快灵。
-   Embla Carousel：TypeScript 编写的一款可扩展的低级轮播库。

滑块控件
----

-   Ion.RangeSlider：强大的、易于自定义的范围滑块选择库，支持丰富的配置和皮肤。
-   jQRangeSlider：支持日期的滑块选择库。
-   noUiSlider：轻量无冗余的、高度定制化的滑块选择库。
-   rangeslider.js：HTML5 输入框滑块补丁。

表单组件
----

### 输入

-   typeahead.js：快速、功能齐全的自动补全库。
-   tag-it：处理多标签字段以及标签建议/自动补全的 jQuery UI 插件。
-   At.js：在应用中添加类似 Github 的自动补全提示功能。
-   Placeholders.js：HTML5 placeholder 属性 JavaScript 补丁。
-   fancyInput：添加 CSS3 效果，让输入更有趣。
-   jQuery-Tags-Input：利用这个 jQuery 插件，可奇妙地将一个简单的文本输入转换成一个酷酷的标签列表。
-   vanilla-masker：一个纯 JavaScript 实现的输入控制库。
-   Ion.CheckRadio：一个为复选框和单选按钮添加样式的 jQuery 库，支持多种皮肤。
-   awesomplete：零依赖、超轻量、好用而且漂亮的自动补全库。 - http://leaverou.github.io/awesomplete

### 日历

-   pickadate.js：对移动设备友好的、响应式的和轻量的 jQuery 日期 & 时间输入选择器。
-   bootstrap-datepicker：基于 bootstrap 的日历选择器。
-   Pikaday：一个崭新的 JavaScript 日期选择器 —— 轻量、无依赖和模块化的 CSS。
-   fullcalendar：全尺寸、支持拖放事件的 jQuery 日历插件。
-   rome：可定制的日期（和时间）选择器。无依赖，可选 UI。
-   datedropper：datedropper 是一个 jQuery 插件，它提供了快速简易的方式去管理日期输入框。

### 选择器

-   selectize.js：Selectize 是文本框和 `<select>` 的混合体。基于jQuery，兼具自动补全和原生键盘导航，可用于标签、联系人列表等。
-   select2：基于 jQuery，是选择框的替代品。支持搜索、远程数据集和无限滚动。
-   chosen：可以让冗长不便的选择框更友好的库。

### 文件上传

-   jQuery-File-Upload：File Upload 是一个支持多文件选择、文件拖放、进度条、验证和图片/音频/视频预览的 jQuery 插件。
-   dropzone：Dropzone 是一个易于使用且支持多文件拖放的库。其支持图片预览并且拥有很漂亮的进度条。
-   flow.js：一个通过 HTML5 的 File API ，提供并发、稳定、容错、可断点重连的文件上传库。
-   fine-uploader：一个带有进度条、拖放功能和支持直接上传到 S3 （Amazon Simple Storage Service，亚马逊简易存储服务）的多文件上传插件。
-   FileAPI：JavaScript 文件工具集合。支持多文件上传、拖放和文件分块上传。对于图像，支持裁剪、调整大小和根据 EXIF 自动调整方向。
-   plupload：处理文件上传的 JavaScript API，支持多文件选择、文件类型过滤、分块请求、客户端图片缩放，根据不同的运行环境自动选择 HTML5、Silverlight 或 Flash。
-   filepond：一款可以上传任何文件的 JavaScript 库，自动优化图片以实现更快的上传体验，提供无障碍、如丝般顺滑的用户体验。

### 其它

-   form：jQuery 表单插件。
-   Garlic.js：自动在本地保存表单文本和选择框的值，直到表单被提交。
-   Countable：对某个 HTML 元素包含文本的段落数、单词数和字符数进行统计的 JavaScript 函数。
-   card：只需一行代码，就能让信用卡表单变得更友好。
-   stretchy：自适应大小的 form 元素，表单本应该是这样的。
-   analytics：与任何第三方分析工具兼容的轻量级可扩展分析库，用于页面跟踪、用户事件跟踪和用户识别。

提示
--

-   tipsy：Facebook 风格适用于 jQuery 的提示工具。
-   opentip：开源且基于 prototype 框架的 JavaScript 工具提示库。
-   qTip2：非常强大的工具提示库。
-   tooltipster：一个工具提示 jQuery 插件。
-   simptip：用 Sass 制作的、简单的工具提示。
-   jquery-popup-overlay：是一个响应式的和可访问性强的模态框窗口和工具提示框 jQuery 插件。
-   toolbar：一款提示风格工具栏 jQuery 插件。
-   hint.css：一款 CSS 提示库。

模态框和弹出框
-------

-   Magnific-Popup：专注于性能、轻量、响应式的灯箱（lightbox）脚本。
-   jquery-popbox：jQuery 提示框插件。
-   jquery.avgrund.js：一种新的定于弹出的模态框 jQuery 插件。
-   vex：新的、拥有高度可配置和易于改变样式功能的对话框库。
-   bootstrap-modal：对 Bootstrap 默认模态框类进行扩展。其支持响应式、可堆叠和 ajax 等。
-   css-modal：纯 CSS 打造的模态框。
-   jquery-popup-overlay：是一个响应式的和可访问性强的模态框和工具提示框（tooltips）jQuery 插件。
-   SweetAlert：JavaScript 原生警告弹窗很棒的替代品。
-   baguetteBox.js：原生 JavaScript 灯箱，简单又好用。
-   colorbox：一款适用于 jQuery 轻量可自定义的的灯箱插件。
-   fancyBox：一款用于放大图片、html 内容和多媒体的漂亮优雅的工具。
-   swipebox：一款支持触摸的 jQuery 灯箱。
-   jBox：jBox 是一款强大灵活的 jQuery 插件，用于管理弹窗、提示、通知等场景。
-   lightGallery：一款适用于 jQuery 的可自定义、模块化、响应式的灯箱画廊插件。
-   keukenhof：用于创建模态窗的轻量、零依赖、易用的 TypeScript 库。

滚动
--

-   scrollMonitor：监听元素滚动简单快速的 API。
-   headroom：除非你需要显示页面头部，否则将隐藏它，这样可以腾出页面头部空间。
-   onepage-scroll：使用这个单页滚动插件可以创建一个类似 Apple 的单页面滚动网站（iPhone 5S 风格）。
-   iscroll：高性能、轻量、无依赖、兼容多平台的 JavaScript 滚动组件。
-   skrollr：独立不依赖 jQuery 的视差滚动库，适用于移动设备（Android + iOS）和桌面电脑。
-   parallax：响应智能设备翻转的视差引擎。
-   stellar.js：让视差滚动变简单。
-   plax：jQuery 驱动的视差库。
-   jparallax：创建可交互视差效果的 jQuery 插件。
-   fullPage：简单和易于使用的、用于创建全屏滚动网站（也被称为单页面网站）的插件。
-   ScrollMenu：让老旧无聊的滚动条焕然一新。
-   Clusterize.js：用于展示大量数据的小巧的原生 JavaScript 插件
-   simpleParallax：用于在图片上添加视差动画的简单小巧的 JavaScript 库。
-   rellax：黄油般丝滑、超级轻盈的原生 JavaScript 视差库。

菜单
--

-   jQuery-menu-aim：当用户光标放在特定下拉菜单项时触发事件。可制作像 Amazon 那样的的响应式的、大数据量的下拉菜单。
-   jQuery contextMenu：上下文菜单管理工具。
-   Slideout：为移动设备的 web 应用制作出响应式、可触摸滑出的导航菜单。
-   Slide and swipe：一个基于 touchSwipe 库的滑出菜单插件。
-   mmenu：适用于 jQuery ，最佳的仿原生 app 可开关侧边栏菜单插件，适用于网页或者 webapp。

表格/栅格
-----

-   jTable：基于 CRUD 表创建 AJAX 的 jQuery 插件。
-   DataTables：（jQuery 插件）这是一个非常灵活的工具，在渐进增强的基础上，将高级的交互效果添加到 HTML 表格上。
-   Tabulator：（jQuery 插件）一款极致灵活的库，用于从 JSON 数据源或者 HTML 表格创建可交互式表格。
-   Bootstrap Table：流行框架 Bootstrap 的扩展，无需添加新标记，创建自适应站点风格的表格
-   floatThead：（jQuery 插件）锁定表格头部，只允许表格内容滚动。适用于任何表格，而且不需要额外的 html 或 css。
-   Masonry：瀑布流式的栅格布局库。
-   Packery：使用装箱算法（bin-packing）的网格布局库，支持拖拽布局。
-   Isotope：可过滤和可排序的网格布局的库，它能实现 Masonry、Packery 等布局。
-   flexboxgrid：基于 CSS3 flexbox 的栅格。

框架
--

-   Semantic UI：拥有大量主题和元素的 UI 套件。
-   w2ui：一系列用于数据驱动网页应用的 jQuery 前端开发插件。
-   fluidity：全世界最小的全响应式 CSS 框架。
-   Ink：基于 HTML5/CSS3 的快速高效的网站设计和原型框架，SAPO 项目正在使用。
-   DataFormsJS：用于单页应用敏捷开发的超小的、独立组件的 JavaScript 框架。
-   EHTML：不写 JavaScript 的 HTML 框架。

Boilerplates
------------

-   html5-boilerplate：一款用于构建快速、稳定、自适应网页应用和网站的专业前端模板。
-   mobile-boilerplate：一款用于构建快速、现代移动端网页应用的前端模板。
-   webplate：让开发者专注于站点和应用构建的超棒的前端框架。
-   Cerberus：简单、固定模式的响应式 HTML 邮件模板，也可在 Outlook 中使用。
-   full-page-intro-and-navigation：一款介绍页面模板，支持全宽背景、动画菜单、iOS 风格导航模糊特效。
-   Fluid-Squares：方块单元流式栅格布局。
-   Mobile-First-RWD：这是一个移动端优先响应式网页设计的样例。
-   this-is-responsive：这就是响应式。
-   npm run-scripts：npm run 脚本任务自动化。

手势
--

-   hammer.js：拥有多种触摸手势的 JavaScript 库。
-   touchemulator：在桌面电脑模仿触摸输入。
-   Dragula：超级易用的拖拽库。

地图
--

-   Leaflet：对移动设备友好的、可交互的地图 JavaScript 库。
-   Cesium：基于 WebGL 实现的开源虚拟地球仪和地图引擎。
-   gmaps：以最简单的方式使用 Google 地图。
-   polymaps：一个免费的、兼容现代 web 浏览器的、用于制作动态可交互地图的 JavaScript 库。
-   kartograph.js：开源的 Kartograph SVG 地图渲染器。
-   mapbox.js：Mapbox 的 API，Leaflet 的插件。
-   jqvmap：矢量地图 jQuery 插件。
-   OpenLayers3：高性能、功能丰富，能满足你对地图所有需求。

视频/音频
-----

-   prettyembed.js：更完美地嵌入 YouTube，支持很多功能，如高分辨率的预览图、嵌入选项的高级定制和可选的 FitVids 支持。
-   html5media：能在所有主流浏览器播放多媒体标签中定义的多媒体文件。
-   Play-em JS：Play'em 是一个 JavaScript 组件，它能管理音乐/视频播放顺序，通过在一个 DIV 元素里嵌入几个播放器（Youtube、Soundcloud 和 Vimeo）来控制一系列歌曲的播放。
-   polyplayer：将 YouTube、Soundcloud 和 Vimeo 播放器的 API 统一成一套。
-   flowplayer、Github：HTML5 视频播放器
-   mediaelement、Github：让 HTML5、 Flash 播放器和模仿 HTML5 媒体元素 API 的 Silverlight shim，在所有浏览器拥有一致的 UI。
-   SoundJS：让音频在 web 上运行更简单的库。它为不同浏览器提供了统一的 API。
-   video.js：开源的 HTML5 和 Flash 视频播放器。
-   FitVids.js：轻量易用，可自适应宽度的 jQuery 视频插件。
-   Ion.Sound：在任何页面上都能轻松地播放声音。
-   photobooth-js：用于在网站上编辑头像图片的小挂件。
-   clappr：网页上用的可扩展的媒体播放器 http://clappr.io。
-   exifr：速度最快、功能最全的 EXIF 读取库 https://mutiny.cz/exifr/。
-   ts-audio：易用的 `AudioContext` 接口封装库。
-   AmplitudeJS：开源的 HTML5 网页音频库。按你的要求来设计网页音频播放器，零依赖。

排版
--

-   FlowType.JS：业界最好的网页排版工具：以元素高度为基准定义字号和行高。
-   BigText：用于计算匹配特定行宽下字号和字间距的 jQuery 插件。
-   circletype：一款用于在网页上沿曲线显示文字的 jQuery 插件。
-   slabText：用于生成大且粗响应式大标题的 jQuery 插件。
-   simple-text-rotator：不需要添加额外标记，超级简单就能在网站上添加旋转文本的插件。
-   novacancy.js：Neon Golden 文字效果 jQuery 插件。
-   jquery-responsive-text：让文本自适应改变大小！
-   FitText.js：给越来越多的网页类型设计的 jQuery 插件。
-   Lettering.js：一款轻量易用的网页字体设置插件，利用 JavaScript 在字符上插入 `<span>` 标签实现对单个字符的样式配置。

动画
--

-   velocity：加速 JavaScript 动画。
-   jquery.transit：拥有超级流畅的 CSS3 变换和过渡效果的 jQuery 插件。
-   impess.js：在 HTML 文档里，运用 CSS3 变换和过渡制作类似 Prezi 的展现效果。
-   bounce.js：可以立刻创建有趣的 CSS3 动画。
-   GreenSock-JS：适用于所有主流浏览器的高性能 HTML5 动画。
-   TransitionEnd：TransitionEnd 是一个运用 transitonend 事件的、跨浏览器的库。
-   Dynamics.js：用于创建符合物理运动规律的 CSS 动画库。
-   the-cube：The Cube 是一个 CSS3 过渡效果实验。
-   Effeckt.css：一款高性能过渡动画库。
-   animate.css：要多易用有多易用的跨浏览器 CSS 动画库。
-   textillate：适用于 CSS3 文本动画的简单插件。
-   move.js：基于 CSS3 的 JavaScript 动画框架。
-   animatable：一个属性，两个值，无穷个可能性。
-   shuffle-images：简单有创意地打乱图片。http://www.thepetedesign.com/demos/shuffle-images\_demo.html
-   smoothState.js：免打扰式页面过渡 jQuery 库。http://smoothstate.com/
-   Anime.js：一款 JavaScript 动画引擎。http://animejs.com
-   Mo.js：网页动态图像工具`（链接已无法访问——译者注）`
-   particles.js：用于创建粒子的轻量 JavaScript 库。
-   tsParticles：particles.js 全新升级版本，修复了 bug ，增加许多新功能。
-   particles-bg：一款轻量的粒子运动动画背景 React 组件。

图片处理
----

-   lena.js：具有滤镜和实用功能的图像处理库。
-   pica：高质量地调整图片大小（使用快速、纯 JS 实现的 Lanczos 滤镜算法）。
-   cropper：一个简单的图像裁剪 jQuery 插件。

ES6
---

-   es6features：ECMAScript 6 特性概述。
-   es6-features：ECMAScript 6： 特性概述和比较。
-   ECMAScript 6 compatibility table：Compatibility tables 展示了各种平台上所有 ECMAScript 6 特性的支持程度。
-   Babel (Formerly 6to5)：将 ES6+ 代码转换成原生 ES5。
-   Traceur compiler：ES6 特性转 ES5。包括 classes、generators、promises、destructuring patterns、default parameters 等。

静态页面生成器
-------

-   Gatsby.js：React 驱动的静态网站生成器。
-   Gridsome：Vue 驱动的静态网站生成器。
-   Docusaurus：Facebook 出品的 React 驱动的静态网站生成器，以内容为中心网站的理想形态。

SDK
---

-   javascript-sdk-design：从工作和个人经验中提炼出来的 JavaScript SDK 设计指导。
-   Spotify SDK：用于 Spotify Web API 的面向实体 SDK
-   Square Node.js SDK：用于支付和其他 Square API 的 JavaScript 客户端库。

大杂烩
---

-   echo：利用 `data-*` 属性延迟加载图片。
-   picturefill：响应式图片显示插件，使浏览器支持 srcset、size 属性。
-   platform.js：一个平台检测库，几乎适用于所有 JavaScript 平台。
-   json3：一个现代 JSON 实现库，几乎兼容所有 JavaScript 平台。
-   Logical Or Not：一个关于 JavaScript 特性的游戏。
-   BitSet.js：实现位向量的 JavaScript 库。
-   spoiler-alert：SPOILER 警告 ！一款开心的 jQuery 小插件，用于隐藏页面上的 spoilers 。
-   jquery.vibrate.js：震动接口封装。
-   list.js：给表格、列表等众多 HTML 元素添加搜索、排序、过滤和自适应特性，零感知作用于已有的 HTML 。http://www.listjs.com
-   mixitup：一款过滤和排序的插件。
-   grid：用于二维可变大小响应式列表的拖拽库。
-   jquery-match-height：一款响应式等高 jQuery 插件。
-   survey.js：一款 JavaScript 调查引擎。用 JSON 作为调查元数据和结果。http://surveyjs.org/
-   Array Explorer and Object Explorer：帮助开发者选择哪一个原生 JavaScript 方法使用更佳。
-   Clipboard.js：无需 Flash 也无需使用框架实现“复制到剪贴板”功能。
-   ky：基于浏览器 Fetch 接口的小巧优雅的 HTTP 客户端。
-   Fcal：数学表达式计算器。
-   emoji-button：原生 JavaScript 表情包选择器组件。
-   iooxa：交互式科学写作、响应式文档和探索式说明组件。
-   Idyll：用于创建探索式说明和互动故事文章。可以插入 HTML 中.
-   javascript-algorithms：算法和数据结构的 JS 实现，包含详细解释和发散文章链接。

资源
==

### 有影响力的书

_具有广泛影响且值得阅读的前端经典书籍。_

-   《如果有人让你推荐前端技术书，请让他看这个列表》
-   《你不知道的Javascript》：英文版 "You Don't Know JS"

* * *

### 其他 Awesome 前端资源系列：

-   《让你受益匪浅的前端技术干货系列》
    
-   《如果有人让你推荐前端技术书，请让他看这个列表》
    
-   《CSS 资源大全中文版》
