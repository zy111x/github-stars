---
project: detector
stars: 881
description: :dog: 客户端环境识别模块。(UserAgent detector)
url: https://github.com/hotoo/detector
---

detector
========

* * *

中文文档

Client information detector by user agent, detect information include:

1.  Device.
2.  Operation System (OS).
3.  Browser.
4.  Rendering Engine.

Detected information is a "detector object", data structure like:

detector \= {
    device: {
        name: "iphone",
        version: \-1,
        fullVersion: "-1",
        \[iphone\]: \-1
    },
    os: {
        name: "ios",
        version: 6.1,
        fullVersion: "6.1",
        \[ios\]: 6.1
    },
    browser: {
        name: "chrome":
        version: 26.0,
        fullVersion: "26.0.1410.50",
        mode: 26.0,
        fullMode: "26.0.1410.50",
        compatible: false,
        \[chrome\]: 26.0
    },
    engine: {
        name: "webkit",
        version: 536.26,
        fullVersion: "536.26",
        mode: 523.26,
        fullMode: "523.26",
        compatible: false,
        \[webkit\]: 536.26
    }
}

**Note**: Above `[iphone]`, `[ios]`, `[chrome]`, `[webkit]` is dynamically from actual environment, different device, operation system, browser and rendering engine is different.

Note:

-   This version of detector's code is follow CommonJS sepcification, and support NodeJS and Web Browser environment at the same time.
-   Some times, you just need simple detect a litter information, please reference to #18, without `detector`.

Installation
------------

via npm:

Installation to global (with `-g` argument), you can use `detector` command in terminal.

```
npm install detector [-g]
```

Usage
-----

### for Web Browser

Some examples in common use:

// import detector, variable detector is "detector object".
const detector \= require('detector');

// Detect browser name.
detector.browser.name \=== "chrome" // true

// An other example for detect browser name.
!!detector.browser.ie // false

// Detect the old browseres.
if(detector.browser.ie && detector.browser.version < 8){
    alert("You browser is too old.");
}

// Detect rendering engine below Trident 4 (IE8).
if(detector.engine.trident && detector.engine.mode < 4){
    // hack code.
}

// Collect client detail informations.
detector.browser.name + "/" + detector.browser.fullVersion;

### for Node.js

const detector \= require('detector');

// variable \`d\` is a "detector object"
const d \= detector.parse(userAgent);
d.browser.name \=== "chrome";

API
---

### {String} detector.device.name

Name of hardware device.

### {Number} detector.device.version

Version of hardware device.

### {String} detector.device.fullVersion

Full version of hardware device.

### {Number} detector.device\[device\_name\]

Detect name of hardware device.

Support hardware devices:

-   `pc`: Windows PC.
-   `mac`: Macintosh PC.
-   `iphone`: iPhone.
-   `ipad`: iPad.
-   `ipod`: iPod.
-   `android`: Android.
-   `blackberry`: Blackberry mobile.
-   `wp`: Windows Phone.
-   `mi`: Xiaomi.
-   `meizu`: meizu.
-   `nexus`: Nexus.
-   `nokia`: Nokia.
-   `samsung`: samsung.
-   `aliyun`: Aliyun.
-   `huawei`: Huawei （华为）
-   `lenovo`: lenovo.
-   `zte`: ZTE Corporation （中兴）
-   `vivo`: vivo （步步高）
-   `htc`: HTC.
-   `oppo`: OPPO.
-   `konka`: konka （康佳）
-   `sonyericsson`: sonyericsson （索尼爱立信）
-   `coolpad`: coolpad （酷派）
-   `lg`: LG.

##### NODE ONLY

Following hardware device support in NodeJS version of `detector`:

-   `noain`: 诺亚信
-   `huawei-honor`: 华为荣耀
-   `lephone`: 乐 Phone
-   `asus`: 华硕
-   `alcatel`
-   `一加`
-   `蓝米`
-   `E 派`
-   `hike`
-   `qmi`
-   `友信达`: 友信达
-   `优米`
-   `嘉源`
-   `intki`
-   `星语`
-   `欧奇`
-   `海派`
-   `广信`: 广信
-   `nibiru`: nibiru
-   `神州`
-   `青橙`
-   `海信`
-   `金立`
-   `eton`
-   `bohp`
-   `小杨树`
-   `语信`
-   `nubia`
-   `爱讯达`
-   `寰宇通`
-   `mofut`
-   `infocus`
-   `大唐`
-   `邦华`
-   `天迈`
-   `大显`
-   `博瑞`
-   `lingwin`
-   `iusai`
-   `波导`
-   `德赛`
-   `蓝魔`
-   `美图`
-   `opsson`
-   `benwee`
-   `hosin`
-   `smartisan`: 锤子, Smartisan.
-   `ephone`
-   `佰事讯`
-   `newman`
-   `konka`
-   `haier`
-   `moto`
-   `tcl`
-   `天语`
-   `doov`
-   `天时达`

* * *

### {String} detector.os.name

Name of operation system.

### {Number} detector.os.version

Version of operation system.

### {String} detector.os.fullVersion

Full version of operation system.

### {Number} detector.os\[os\_name\]

Detect name of operation system.

Support operation system list:

-   `windows`: Windows.
-   `macosx`: Macintosh.
-   `ios`: iOS.
-   `android`: Android.
-   `chromeos`: Chrome OS.
-   `linux`: Linux.
-   `wp`: Windows Phone.
-   `windowsce`: Windows CE, include Windows Mobile, Smartphone, PPC.
-   `symbian`: Symbian OS.
-   `blackberry`: Blackberry OS.
-   `yunos`: Aliyun OS.

##### NODE ONLY

Following operation system support in NodeJS version of `detector`:

-   `meego`: Meego.
-   `smartisan`: Smartisan.

* * *

### {String} detector.browser.name

Name of browser.

### {Number} detector.browser.version

Real version of browser.

In compatibility-mode, Internet Explorer declare it is a old browser. but `detector.browser.version` return the real version of browser.

For example:

IE9 declare it is a IE7 in compatibility-mode, but `detector.browser.version` return `9.0`.

### {String} detector.browser.fullVersion

Full (real) version of browser.

### {Number} detector.browser.mode

Browser-mode. In Internet Explorer's compatibility-mode, version and mode is different.

### {String} detector.browser.fullMode

Full mode of browser.

### {Number} detector.browser\[browser\_name\]

Detect name of browser.

Support browser list:

-   `edge`: Microsoft Edge browser.
-   `ie`: Microsoft Internet Explorer.
-   `chrome`: Google Chrome.
-   `firefox`: Mozilla Firefox.
-   `safari`: Apple Safari.
-   `opera`: Opera.
-   `360`: Qihu 360 browser.
-   `maxthon`: Maxthon.
-   `sogou`: Sogou.
-   `theworld`: TheWorld.
-   `green`: GreenBrowser.
-   `qq`: QQ Browser.
-   `tt`: TencentTraveler.
-   `liebao`: Cheetah Mobile Inc. （猎豹） Browser.
-   `tao`: Taobao （淘宝） Browser.
-   `coolnovo`: coolnovo （枫树）
-   `saayaa`: Saayaa （闪游）
-   `uc`: UC Browser.
-   `mi`: Build-in browser in Xiaomi （小米）.
-   `baidu`: Baidu （百度） browser.
-   `nokia`: Build-in Browser in Nokia （诺基亚）
-   `blackberry`: 黑莓默认浏览器，版本号与系统版本相同。
-   `webview`: iOS WebView.
-   `yandex`: Yandex YaBrowser.
-   `micromessenger` WeChat （微信）
-   `ali-ap`: 支付宝手机钱包。
-   `ali-ap-pd`: 支付宝平板客户端。
-   `ali-am`: 支付宝商户客户端。
-   `ali-tb`: 淘宝手机客户端。
-   `ali-tb-pd`: 淘宝平板客户端。
-   `ali-tm`: 天猫手机客户端。
-   `ali-tm-pd`: 天猫平板客户端。

##### NODE ONLY

-   `googlebot`: Googlebot
-   `baiduspider`: Baiduspider ，百度无线、网页搜索
-   `baiduspider-image`: 百度图片搜索
-   `baiduspider-video`: 百度视频搜索
-   `baiduspider-news`: 百度新闻搜索
-   `baiduspider-favo`: 百度收藏搜索
-   `baiduspider-cpro`: 百度联盟
-   `baiduspider-ads`: 百度商务搜索
-   `baiduboxapp`: 百度手机搜索客户端
-   `bingbot`: Bingbot 网络爬虫。
-   `msnbot`: MSNBot
-   `nuhkbot`: Nuhkbot
-   `alexabot`: Alexabot.
-   `curl`: curl.
-   `slurpbot`: Yahoo! Slurp

### {Boolean} detector.browser.compatible

Judge is browser in compatibility-mode.

* * *

### {String} detector.engine.name

Name of rendering engine.

### {Number} detector.engine.version

Version of rendering engine.

### {String} detector.engine.fullVersion

Full version of rendering engine.

### {Number} detector.engine.mode

Mode of rendering engine.

### {String} detector.engine.fullMode

Full-mode of rendering engine.

### {Number} detector.engine\[engine\_name\]

Detect name of rendering engine.

Support rendering engine list:

-   `edgehtml`: Microsoft Edge browser's rendering engine. (Note: version same browser version now.)
-   `trident`: Microsoft Trident.
-   `blink`: Google Blink.
-   `webkit`: Apple Webkit.
-   `gecko`: Mozilla Gecko.
-   `presto`: Opera Presto.
-   `androidwebkit`: Android Webkit.
-   `coolpadwebkit`: Coolpad Webkit.
-   `u2`: UC browser rendering engine `v2`.
-   `u3`: UC browser rendering engine `v3`.

### {detector} detector.parse(String ua)

Parse user agent string, return a `detector` object.

* * *

Not Available information:

-   Not Available name will be `na`.
-   Not Available version will be `-1`.

Releases
--------

https://github.com/hotoo/detector/tree/gh-pages
