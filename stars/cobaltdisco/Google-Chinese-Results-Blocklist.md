---
project: Google-Chinese-Results-Blocklist
stars: 7481
description: 我终于能用谷歌搜中文了……
url: https://github.com/cobaltdisco/Google-Chinese-Results-Blocklist
---

中文搜索结果黑名单
---------

垃圾站点出现在 Google、百度的中文搜索结果中，实在是恶心——于是这个黑名单就这么出来了。

黑名单主要由我自己使用 Google 搜索时收集 (当然，也离不开来自网友的热心分享、提交)，所以更新频率无法保证。然而已经断断续续更新了 4 年，就职的公司都被收购了，部门也换了 4 次。

如何使用
----

安装以下插件导入黑名单，插件选其中之一即可。

强烈建议使用 **uBlacklist**，因为该插件可以对搜索结果标题进行匹配 (即下方提到的“模糊匹配”)。例如，Google 搜索结果中可能有成百上千的“小 X 百科网”、“小 X 知识网”，以域名匹配的方式几乎是不可能的 (即下方提到的“精确匹配”)。这时用正则模糊匹配结果标题，将会非常简单。

同理，由于 **Google Hit Hider by Domain** 和 **AC-baidu** 没有匹配标题的功能，屏蔽效果会比 **uBlacklist** 差。

### 屏蔽 Google 中文搜索结果

**1\. uBlacklist** (下载地址：Chrome Web Store、Firefox Add-ons、Mac App Store)

-   将以下 2 个链接，通过点击 Add a subscription 添加到 Subscription 分类下。
    
    -   精确匹配：该匹配方式主要是通过 `*://*.xxxx.com/*` 的方式来匹配搜索结果，进行过滤。基本不会有误杀。
        
    -   模糊匹配：该匹配方式主要是通过如 `*://*/list.php?s=*`、`title/小.(百科|知识)网/` 的方式来匹配搜索结果，进行过滤。存在小范围的误杀。
        
        -   请仔细查看当前模糊匹配列表 (下方列表为最新规则)，若会击中自己经常使用的网站，请自行修改规则配置到插件中，防止被误杀。

```
        *://*/so.php
        *://*/so.php?s=*
        *://*/cha.php?s=*
        *://*/list.php?s=*
        *://*/?s=*
        *://*/so/*
        title/^小.(百科|知识)网$/
        title/^.*[ ]-[ ]小.(百科|知识)网$/
        title/.*点击一次就可以出国/
        title/.*一键访问国外网站/
```

**2\. Google Hit Hider by Domain** (下载地址：GreasyFork)

-   将该列表中的网址，通过 List Until -> Import 进行导入。

### 屏蔽百度中文搜索结果

**1\. Google Hit Hider by Domain** (下载地址：GreasyFork)

-   同 Google 方案操作。

**2\. AC-baidu** (下载地址：GreasyFork)

-   开启“附加2-自主拦截域名”，点击 DIY，将该列表中的网址导入。

> 注：这个脚本似乎也会同时对搜狗、谷歌、必应搜索结果同时产生影响。

反馈
--

加入反馈群 (Telegram) 来更快的分享规则、提出建议。
