---
project: swf-docs-generator
stars: 399
description: 类百度文库 swf 生成和在线浏览完整解决方案：支持 office/pdf/txt/html 等多格式文档上传
---

Swf 文档生成和展示解决方案（类百度文库）
======================

这是一个类百度文库 swf 格式在线浏览的完整解决方案：支持 office/pdf/txt/html 等多格式文档上传。本解决方案全程采用开源免费软件，零成本。项目目前实现了简单上传和自动转换，若要用在实际项目中，还需考虑更多的因素，在此不一一列举。有问题大家直接 issue、或提交 pull request 共同完善，感谢。

软件演示截图
------

安装文档
----

详情参见 安装过程

开发团队
----

-   Project Lead: chekun

依赖软件
----

-   OpenOffice 或 LibreOffice
-   swftools(with xpdf)
-   Python, Python MySQLdb
-   PyODConverter
-   supervisor
-   httpsqs
-   FlexPaper

项目开发/测试环境
---------

-   Kubuntu12.10
-   LAMPStack5.4.8.0 Dev

演示程序开发框架
--------

-   CodeIgniter 2.1.3
-   jQuery
-   Backbone.js
-   Underscore.js

项目文件夹说明
-------

### application

> CodeIgniter 项目文件夹

### conf

> rc.local lamp开机自启动  
> supervisord.conf supervisord配置

### data

> 用户上传文件存储文件夹，用户没有权限直接访问该文件夹

### public

> 网站根目录

### scripts

> 转换脚本存放目录

### system

> CodeIgnier 框架系统目录

### install

> db.sql 数据库结构

LICENSE
-------

Copyright (c) 2012 Chekun and Yoozi Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
