---
project: font-spider
stars: 5029
description: Smart webfont compression and format conversion tool
url: https://github.com/aui/font-spider
---

font-spider
===========

\[简体中文\] | \[English\] | \[日本語\]

Font-spider is a compress tool for WebFont which can analyze your web-page intelligently to find the fonts out which have been used and then compress them.

字蛛是一个智能 WebFont 压缩工具，它能自动分析出页面使用的 WebFont 并进行按需压缩。

フォント・スパイダー（font-spider）は、Webフォントを圧縮するためのスマートなツールです，Webページに使用されるWebフォントを分析し、必要に応じて圧縮することができます。

* * *

Feature
-------

1.  Font subsetter: Our tool is based on HTML and CSS analysis and completely running in local so that.
2.  Font converter: Support woff2, woff, eot, svg font format generation.

Install
-------

npm install font-spider -g

Use
---

### step one: code CSS

@font-face {
  font-family: 'source';
  src: url('../font/source.eot');
  src:
    url('../font/source.eot?#font-spider') format('embedded-opentype'),
    url('../font/source.woff2') format('woff2'),
    url('../font/source.woff') format('woff'),
    url('../font/source.ttf') format('truetype'),
    url('../font/source.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

.home h1, .demo \> .test {
    font-family: 'source';
}

> Attention: the ".ttf" file must be existed which is referred in `src` property of `@font-face`, and our font-spider will automatically generate other formats of font.

### step two: compress WebFont by using font-spider

font-spider \[options\] <htmlFile1 htmlFile2 ...\>

#### htmlFiles

One or more web-page addresses which support the http form.

Example:

font-spider dest/news.html dest/index.html dest/about.html

#### options

```
Usage: font-spider [options] <htmlFile ...>

Options:

  -h, --help                    output usage information
  -V, --version                 output the version number
  --info                        show only webfont information
  --ignore <pattern>            ignore the files
  --map <remotePath,localPath>  mapping the remote path to the local
  --no-backup                   do not back up fonts
  --debug                       enable debug mode
```

#### sample of parameters usage

Use the wildcard character to compress the WebFont of several HTML file:

font-spider dest/\*.html

`--info` Show the WebFont that has been used on the website:

font-spider --info http://fontawesome.io

`--ignore` Ignore the file:

font-spider --ignore "icon\\\\.css$" dest/\*.html

`--map` This parameter will map the WebFont of online page to local and then compress it (the local path must be an absolute path):

font-spider --map "http://font-spider.org/font,/Website/font" http://font-spider.org/index.html

Build plugins
-------------

-   grunt-font-spider
-   gulp-font-spider

API
---

See:API.md

Limitations
-----------

-   Only the constant texts and styles are supported, but not the dynamic elements and styles which is inserted by javascript.
-   The ".otf" format fonts should be transfered to ".ttf" format firstly, so that we can start our compressing work.
-   Only the HTML and CSS files which is encoded by `utf-8` are supported.

* * *

\[Link\] 让 font-spider 支持 js 动态内容

\[AD\] 前端招聘：在海边写代码
