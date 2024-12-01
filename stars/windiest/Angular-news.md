---
project: Angular-news
stars: 1035
description: :panda_face:基于angular.js,weui和node.js重写的新闻客户端 Based on angular.js, weui and node.js rewrite news client
---

Angular News
============

**Use Weui and Angular prepared by the news client**, Live Demo

Made with ❤︎ by Winds and Wscats

Installation(Git)
-----------------

克隆项目地址并下载（需要已安装Git），点击预览（移动端效果更佳），新增Vue2版本

```
git clone https://github.com/Wscats/news.git
```

启动服务（http://localhost:12345/news/index.html）

```
npm run dev
```

Building
--------

通过`npm`安装本地服务第三方依赖模块（需要已安装Node.js），当然也可以先不安装依赖暂时省略这步，运行`node http`直接查看项目效果

```
npm install
```

然后执行gulp构建项目文件和打开服务器等

```
npm run test
```

Installation(NPM)
-----------------

npm安装名为20的模块

```
npm install 20
```

找到模块下载后的位置，在node\_modules的20文件夹下

```
cd /node_modules/20
```

通过`npm`安装本地服务第三方依赖模块（需要已安装Node.js），当然也可以先不安装依赖暂时省略这步，运行`node http`直接查看项目效果

```
npm install
```

执行node指令运行http.js

```
node http
```

用浏览器打开链接

```
http://localhost:12345/news/index.html
```

License
-------

MIT Copyright (c) 2016 Winds❤︎Wscats

Back-end(PHP)
-------------

后端源码地址 登录界面: url根据服务器域名对应更改(例如本机url就是localhost)

```
url/news/php/index.php/login
main = url/news/php/index.php
```

### 登录接口

Port

URL

Method

登录接口

main/login\_api/login

POST

Params

Other

username,password

账号:yaojialong,12345678

### 频道接口

Port

URL

Method

频道接口

main/news\_api/get\_channel

GET

Params

Other

无

### 自动登录接口

Port

URL

Method

自动登录接口

main/login\_api/auto\_login

POST

Params

Other

username,token

### 根据频道显示对应新闻

Port

URL

Method

根据频道显示对应新闻

main/news\_api/show\_detail\_by\_channel\_id

GET

Params

Other

page,channel\_id

例如:channel\_id:4 军事 6 推荐 7 热点 8 娱乐

### 新闻根据id显示详细内容的接口

Port

URL

Method

新闻根据id显示详细内容的接口

main/news\_api/show\_detail

GET

Params

Other

id

### 注册用户的接口

Port

URL

Method

注册用户的接口

main/login\_api/register

POST

Params

Other

params{username,password}

### 插入新闻的接口

Port

URL

Method

插入新闻的接口

main/news\_api/insert\_news

GET

Params

Other

title,text

### 删除新闻的接口

Port

URL

Method

删除新闻的接口

main/news\_api/delete\_news

GET

Params

Other

id
