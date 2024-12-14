---
project: ark-pixel-font
stars: 3341
description: Open source Pan-CJK pixel font / 开源的泛中日韩像素字体
url: https://github.com/TakWolf/ark-pixel-font
---

方舟像素字体 / Ark Pixel Font
=======================

开源的泛中日韩像素字体，黑体无衬线风格，支持 10、12 和 16 像素。

这个项目不仅提供了全部的字形源文件，也提供了构建字体所需要的完整程序。

Warning

该字体目前处于积极开发阶段，仍然缺少大量汉字。

生产环境请考虑临时性过渡方案：缝合像素字体

Important

这是一个开源项目，字体可以免费商用。

如果这个项目对您有帮助，请考虑 赞助 来支持开发工作。

预览
--

可以通过 Playground 实时预览字体效果。

### 10 像素

示例文本 · 等宽模式-字母表 · 比例模式-字母表

### 12 像素

示例文本 · 等宽模式-字母表 · 比例模式-字母表

### 16 像素

示例文本 · 等宽模式-字母表 · 比例模式-字母表

字符统计
----

可以通过下面的链接来查看字体各尺寸目前支持的字符情况。

尺寸

等宽模式

比例模式

10px

info-10px-monospaced

info-10px-proportional

12px

info-12px-monospaced

info-12px-proportional

16px

info-16px-monospaced

info-16px-proportional

尺寸
--

目前支持 10、12 和 16 三个像素尺寸。

字体的 `UPM`（`Units Per Em`，每个字面框包含的设计单位的数量）按照像素尺寸的 100 倍来转化，即：`1 px = 100 units` 。

字体各尺寸的 `UPM` 值如下：

尺寸

UPM

10px

1000

12px

1200

16px

1600

在渲染时，请将文本尺寸设置为对应字体的像素尺寸或其整数倍，以保证栅格化时能够精确地进行像素转化。

宽度模式
----

目前支持「等宽」和「比例」两种模式。

### 「等宽」模式

字符为全宽或半宽，排版时可严格对其。字形完全处于字面框内部，默认行高等于字体的像素尺寸。

但基线位置略微偏高，中西文混排时西文在视觉上重心偏高，美观性略差。

### 「比例」模式

字符宽度根据字形实际情况变化，基线处于合适的位置。纵向上字形可能会超出字面框，默认行高大于字体的像素尺寸。

该模式排版观感自然，如无特殊需求，你应该优先选择这个模式。

字体各尺寸的默认行高如下：

尺寸

行高

10px

16px

12px

18px

16px

24px

语言特定字形
------

不同国家或地区，由于规范或书写习惯不同，同一个字符，字形可能存在差别。这种情况大部分为汉字，少量为标点符号。

目前支持以下语言特定字形版本：

版本

含义

说明

latin

拉丁语

在非中日韩环境下使用，标点符号采用西文习惯写法。

zh\_cn

中文-中国大陆

字形采用中国大陆地区标准规范 《通用规范汉字表》 中的写法。

zh\_hk

中文-香港特别行政区

字形采用香港地区教育规范 《常用字字形表》 中的写法。

zh\_tw

中文-台湾地区

字形采用台湾地区教育规范 《国字标准字体》 中的写法。

zh\_tr

中文-传统印刷

字形采用 「传统印刷体」 写法，符合香港和台湾地区传统使用习惯。

ja

日语

字形采用日本参考规范 《常用汉字表》 中的写法。

ko

朝鲜语

下载
--

可通过以下渠道下载最新的版本：

-   GitHub Releases
-   itch.io

目前提供 `.otf`、`.ttf`、`.woff2`、`.bdf`、`.pcf` 五种单字体格式，以及 `.otc`、`.ttc` 两种集合字体格式。

使用包管理器安装
--------

### Homebrew

brew install font-ark-pixel-10px-monospaced
brew install font-ark-pixel-12px-monospaced
brew install font-ark-pixel-16px-monospaced

brew install font-ark-pixel-10px-proportional
brew install font-ark-pixel-12px-proportional
brew install font-ark-pixel-16px-proportional

本地构建
----

这是一个标准的 Python3 项目。

当您配置好运行环境后，执行 `python -m tools.build` 命令来开始构建。

等待任务完成后，可在 `build/outputs` 目录下找到生成的字体文件。

授权许可
----

分为「字体」和「构建程序」两个部分。

### 字体

使用 「SIL 开放字体许可证第 1.1 版」 授权，保留字体名称「方舟像素 / Ark Pixel」。

### 构建程序

使用 「MIT 许可证」 授权。

官方社区
----

-   「像素字体工房」Discord 服务器
-   「像素字体工房」QQ 群 (302383204)

程序依赖
----

-   Pixel Font Builder
-   Pixel Font Knife
-   Unidata Blocks
-   Character Encoding Utils
-   PyYAML
-   Pillow
-   Beautiful Soup
-   Jinja
-   Loguru
-   Cyclopts

字形依赖
----

-   像素字形 - 谚文音节
-   像素字形 - 盲文图案

外部工具
----

-   SYMBL - Unicode 查询工具
-   字嗨 - 漢字部件檢索
-   字統网 - 字形檢字
-   思源映射查看器

参考资料
----

-   字体开发最佳实践
-   Microsoft - OpenType 字体文档
-   Glyphs 软件教程 - 纵向量度值
-   FreeType 字形约定

赞助
--

如果这个项目对您有帮助，请考虑赞助来支持开发工作。

请通过下面的链接来查看收到的赞助的具体情况：

赞助详情
