---
project: Smoji
stars: 88
description: |-
    Social emoji for mastodon, pleroma, misskey...
url: https://github.com/DejavuMoe/Smoji
---

<div align=center>
<h1>
Smoji 🫣
</div>

<div align=center>
<strong>Smoji = Social + Emoji</strong>
</div>

## Introduction

Smoji is an emoji project that includes many default emoji packs built into applications, itl also include some funny little emojis. 😎

You can use these emoji packs on your Mastodon,  Pleroma,  Misskey, and other federated social applications, as well as on your website and comment systems. [![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/dejavu-smoji?color=%23f97c49&label=jsDelivr)](https://www.jsdelivr.com/package/npm/dejavu-smoji)

You can browse it in **Playground** https://smoji.dejavu.moe and take a look. [![npm (tag)](https://img.shields.io/npm/v/dejavu-smoji/latest?color=fc7b14&label=latest)](https://www.npmjs.com/package/dejavu-smoji)

|            Name             |                      Copyright                      |                           Releases                           |   Update   |
| :-------------------------: | :-------------------------------------------------: | :----------------------------------------------------------: | :--------: |
|       [weibo](/weibo)       |           [新浪微博](https://weibo.com/)            | [2023.02.20](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.20) | 2023.02.20 |
|     [coolapk](/coolapk)     |         [酷安社区](https://www.coolapk.com)         | [2023.02.20](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.20) | 2023.02.20 |
|          [qq](/qq)          |            [腾讯 QQ](https://im.qq.com/)            | [2023.02.21](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.21) | 2023.02.21 |
|      [wechat](/wechat)      |           [微信](https://weixin.qq.com/)            | [2023.02.21](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.21) | 2023.02.21 |
|   [eveonecat](/eveonecat)   |        [Every One Cat](http://motions.cat/)         | [2023.02.22](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.22) | 2023.02.22 |
|        [ding](/ding)        |          [钉钉](https://www.dingtalk.com/)          | [2023.02.22](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.22) | 2023.02.22 |
|    [bilibili](/bilibili)    |        [哔哩哔哩](https://www.bilibili.com/)        | [2023.02.23](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.23) | 2023.02.23 |
| [xiaodianshi](/xiaodianshi) |         [小电视](https://www.bilibili.com/)         | [2023.02.23](https://github.com/DejavuMoe/Smoji/releases/tag/2023.02.23) | 2023.02.23 |
|      [tiktok](/tiktok)      |           [抖音](https://www.douyin.com/)           | [2023.03.04](https://github.com/DejavuMoe/Smoji/releases/tag/2023.03.04) | 2023.03.04 |
|      [ithome](/ithome)      |         [IT 之家](https://www.ithome.com/)          | [2023.03.10](https://github.com/DejavuMoe/Smoji/releases/tag/2023.03.10) | 2023.03.10 |
|         [heo](/heo)         | [Heo Sticker](https://github.com/zhheo/Sticker-Heo) | [2023.03.10](https://github.com/DejavuMoe/Smoji/releases/tag/2023.03.10) | 2022.07.31 |

## Usage

### Mastodon

You can check the use of Mastodon import emoji on the [releases](https://github.com/DejavuMoe/Smoji/releases) page, for example:

```bash
wget https://github.com/DejavuMoe/Smoji/releases/download/2023.02.20/coolapk.tar.gz
wget https://github.com/DejavuMoe/Smoji/releases/download/2023.02.20/weibo.tar.gz

sudo mv coolapk.tar.gz mastodon/public/system/coolapk.tar.gz
sudo mv weibo.tar.gz mastodon/public/system/weibo.tar.gz


sudo docker exec mastodon-web tootctl emoji import --category weibo /mastodon/public/system/weibo.tar.gz
sudo docker exec mastodon-web tootctl emoji import --category coolapk /mastodon/public/system/coolapk.tar.gz
```

### Pleroma

On your pleroma server, pull the latest source code for the master branch, and then import it in the backend on a per-file shelf.

### OwO

We provide an out of the box [OwO](https://github.com/DIYgod/OwO) format, which means you can use it directly on the OwO-compatible emoji system. Here are some links to their documentation, please enjoy 🤤.

```
https://smoji.dejavu.moe/Smoji.json
```

- **[Artalk](https://artalk.js.org/guide/frontend/emoticons.html#owo-格式)**
- **[Typecho Theme](https://www.google.com.hk/search?q=Typecho+OwO%E8%A1%A8%E6%83%85&pws=0&gl=us)**
- ……

---

**Attention:** emoji collected by Smoji is only for learning and communication. The original author of the emoji is copyrighted. Please do not use them for any commercial purpose.

