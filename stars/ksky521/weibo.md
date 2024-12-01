---
project: weibo
stars: 44
description: 新浪微博node sdk
---

新浪微博node sdk
============

特点
--

-   api可配置化
-   接口采用promise
-   最少依赖，专注新浪微博OAuth2.0认证

使用方法
----

安装

npm install iweibo

配置
--

### 引入iweibo

var iweibo = require('iweibo');
var Weibo = iweibo.Weibo;

### 配置app信息

-   iweibo.set(name, options); //设置单条
-   iweibo.set(optionsObject); //设置多条

iweibo.set({
    appkey: 'xxx',
    appsecret: 'xxxxxxxxxx'
})

支持的配置：

var CONFIG \= {
    appkey: '',
    appsecret: '',
    oauth\_host: 'https://api.weibo.com/oauth2/authorize',
    access\_url: 'https://api.weibo.com/oauth2/access\_token',
    api\_url: 'https://api.weibo.com/2/'
}

### 配置api接口

-   iweibo.setAPI(apiname, options); //设置单条api
-   iweibo.setAPI(optionsObject); //设置多条api

iweibo.setAPI('statuses/update', {
    method: 'post',
    params: {
        status: 'hello, world',
        visible: 0
    }
});

配置下微博接口（由于太多，并且不时更新，所以我就没全配置），配置下自己使用的接口，方法参考下件，基本如下：

'接口名称': {
    method: 'get', //请求方法，post或者get(get可省略)，参考api文档
    params: { //默认参数，不用填写appkey和access\_token，程序会自动补上

    }
}

可以讲接口统一写到一个json或者js文件中，然后使用 `require` 引入，直接给 `setAPI` 传入

使用
--

参考 `examples/app.js` 文件（需要先在本目录执行 `npm install` 安装依赖模块）

修改host，添加下面内容：

127.0.0.1 testapp.cn

进入 open.weibo.com 设置应用回调地址到 http://testapp.cn/callbak

### 获取登录链接

weibo.getAuthorizeURL(backURL);

### 获取access\_token

weibo.getAccessToken('code', {
    code: code,
    redirect\_uri: backURL
}).done(function(err, data) {
    var realpath \= templateDir + 'callback.html';
    html \= fs.readFileSync(realpath);
    data \= JSON.parse(data);
    data.refresh\_token \= data.refresh\_token || '';
    req.session.refresh\_token \= data.refresh\_token;
    req.session.access\_token \= data.access\_token;
    req.session.uid \= data.uid;

    html \= bdTemplate(html, data);
    res.end(html);
}).fail(function(err, data) {
    var html;
    if (err) {
        html \= fs.readFileSync(templateDir + 'error.html');
    }
    res.end(html);
});

使用api接口
-------

//所有API都支持promise接口
weibo.api('users/show', urlObj).done(function(err, result) {
    console.log(result);
    res.end(JSON.stringify(result));
});

测试方法
----

-   进入`examples`
-   修改`config.json`，回调地址需要在open.weibo.com配置好，然后修改自己的host，将回调地址指到`127.0.0.1`
-   执行 `npm install`
-   访问自己在`config.json`配置的网站
