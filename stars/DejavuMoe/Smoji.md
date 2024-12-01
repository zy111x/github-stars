---
project: Smoji
stars: 75
description: Social emoji for mastodon, pleroma, misskey...
url: https://github.com/DejavuMoe/Smoji
---

Smoji 🫣
========

**Smoji = Social + Emoji**

Introduction
------------

Smoji is an emoji project that includes many default emoji packs built into applications, itl also include some funny little emojis. 😎

You can use these emoji packs on your Mastodon, Pleroma, Misskey, and other federated social applications, as well as on your website and comment systems.

You can browse it in **Playground** https://smoji.dejavu.moe and take a look.

Name

Copyright

Releases

Update

weibo

新浪微博

2023.02.20

2023.02.20

coolapk

酷安社区

2023.02.20

2023.02.20

qq

腾讯 QQ

2023.02.21

2023.02.21

wechat

微信

2023.02.21

2023.02.21

eveonecat

Every One Cat

2023.02.22

2023.02.22

ding

钉钉

2023.02.22

2023.02.22

bilibili

哔哩哔哩

2023.02.23

2023.02.23

xiaodianshi

小电视

2023.02.23

2023.02.23

tiktok

抖音

2023.03.04

2023.03.04

ithome

IT 之家

2023.03.10

2023.03.10

heo

Heo Sticker

2023.03.10

2022.07.31

Usage
-----

### Mastodon

You can check the use of Mastodon import emoji on the releases page, for example:

wget https://github.com/DejavuMoe/Smoji/releases/download/2023.02.20/coolapk.tar.gz
wget https://github.com/DejavuMoe/Smoji/releases/download/2023.02.20/weibo.tar.gz

sudo mv coolapk.tar.gz mastodon/public/system/coolapk.tar.gz
sudo mv weibo.tar.gz mastodon/public/system/weibo.tar.gz


sudo docker exec mastodon-web tootctl emoji import --category weibo /mastodon/public/system/weibo.tar.gz
sudo docker exec mastodon-web tootctl emoji import --category coolapk /mastodon/public/system/coolapk.tar.gz

### Pleroma

On your pleroma server, pull the latest source code for the master branch, and then import it in the backend on a per-file shelf.

### OwO

We provide an out of the box OwO format, which means you can use it directly on the OwO-compatible emoji system. Here are some links to their documentation, please enjoy 🤤.

```
https://smoji.dejavu.moe/Smoji.json
```

-   **Artalk**
-   **Typecho Theme**
-   ……

* * *

**Attention:** emoji collected by Smoji is only for learning and communication. The original author of the emoji is copyrighted. Please do not use them for any commercial purpose.
