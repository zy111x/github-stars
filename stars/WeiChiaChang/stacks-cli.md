---
project: stacks-cli
stars: 1992
description: 📊 Analyze website stack from the terminal  💻 
url: https://github.com/WeiChiaChang/stacks-cli
---

stacks-cli
==========

> Check website stack from the terminal.

In fact I know there's already a pretty good Chrome extension called Wappalyzer, but I still wanna make a CLI tool for myself. There's 2 major reasons why:

-   I've already installed too many extensions so far.
-   I'm a CLI lover, it's just that simple.

OMMGGGGGGG

Based on these demands, I started working on fixing these issues.

Install
-------

$ npm install stacks-cli -g

Usage
-----

Type the following command in your terminal:

$ stacks-cli

And the scripts will ask you:

? Which website stack do you wanna browse ?

Copy & Paste the URL of the website you want to analyze:

https://www.cloudflare.com/

Here's a screenshot of the result:

Helper
------

Examples
$ stacks-cli

Analyze URL via cli
$ stacks-cli <URL\>
$ stacks-cli -u <URL\>

Helpers
$ stacks-cli -h


Show current version
$ stacks-cli -v


Source code of this side project
$ stacks-cli -s

Docker
------

### Compile image locally

$ docker build -t stacks-cli .

### Use compiled image locally

$ docker run --rm -ti stacks-cli -h

### Use already compiled image

$ docker run --rm -ti femtopixel/stacks-cli

License
-------

MIT © WeiChiaChang
