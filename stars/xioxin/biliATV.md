---
project: biliATV
stars: 174
description: bilibili apple tv app
url: https://github.com/xioxin/biliATV
---

biliATV
=======

> 由于工作繁忙天天加班的原因, 项目暂停开发新功能, 但会继续维护现有功能

由于扫描登录限制,登录有效期只有一天

为了搞智能家居需要一个家庭中枢而购买的 AppleTV 从此一发不可收拾 😂

国内大部分资源可以直接用 LazyCat 解决

但是LazyCat的喵哩喵哩满足不了我的需求 所以打算自己再写一个 一个完整的bilibili客户端

### 使用技巧

> 长按视频封面可以强制打开视频详情界面 （如果不分P的视频将会直接播放）

### 需要重新安装的更新:

-   2017/12/13: 修复番剧清晰度解析问题
-   2018/01/22: 修复因b站接口调整导致番剧无法播放的问题
-   2018/11/9: 修复了部分视频、番剧无法正常播放的问题

#### todo:

-   页面
    
    -   二维码登录
    -   账号密码登录
    -   我的动态
    -   我的追番
    -   我的收藏
    -   我的历史
    -   番剧timeline
    -   番剧页面
    -   视频详情V2
    -   UP主页面 80%(更多页面未完成)
    -   热门视频(B站首页)
    -   搜索(仅搜索AV号)
    -   设置界面
-   视频地址解析与播放
    
    -   解析视频地址
    -   解析高清视频地址(默认被我设置为1080p,番剧解析不稳定原因不明清晰度忽高忽低)
    -   解决番剧高清解析偶尔失败的问题
    -   自定义视频清晰度
    -   播放视频(使用 DanMuPlayer )
    -   视频地址过期重新获取视频地址并继续播放
    -   剧集连播
    -   记录播放位置 再次打开提示还原
    -   将播放位置提交到B站的历史记录中 方便其他设备继续播放
    -   加载弹幕

### 关于私有API

项目使用了UIWebView在tvOS中UIWebView是私有API 需要手动修改Xcode文件来解锁,否则无法编译

参考: tvOSBrowser

文件位置:

```
Availability.h 在AppleTV位于： Xcode > Contents > Developer > Platforms > AppleTVOS.platform > Developer > SDKs > AppleTVOS.sdk > usr > include
Availability.h 在AppleTV模拟器位于： Xcode > Contents > Developer > Platforms > AppleTVSimulator.platform > Developer > SDKs > AppleTVSimulator.sdk > usr > include
```

将以下内容 :

```
#define __TVOS_UNAVAILABLE                    __OS_AVAILABILITY(tvos,unavailable)
#define __TVOS_PROHIBITED                     __OS_AVAILABILITY(tvos,unavailable)
```

替换为 :

```
#define __TVOS_UNAVAILABLE_NOTQUITE                    __OS_AVAILABILITY(tvos,unavailable)
#define __TVOS_PROHIBITED_NOTQUITE                     __OS_AVAILABILITY(tvos,unavailable)
```

部署方法
----

由于使用了submodule所以请不要直接下载zip,而是使用git clone

```
git clone https://github.com/xioxin/biliATV.git
cd biliATV && sh build.sh
```

感谢
==

-   感谢@fuzhuo的帮助
-   DanMuPlayer
-   tvOSBrowser

截图
==

许可证
===

GPL-3.0
