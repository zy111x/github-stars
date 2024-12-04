---
project: telegraph-image-bed
stars: 1
description: null
url: https://github.com/zy111x/telegraph-image-bed
---

telegraph-Image
===============

### Demo

https://img.lianli.us.kg

### 测试

https://telegraph-image-e49.pages.dev/

```
测试管理员账号：admin
测试管理员密码：admin

测试普通用户：user
测试普通用户：user

```

### 优点

1.  无限图片储存数量，你可以上传不限数量的图片
    
2.  无需购买服务器，托管于Cloudflare的网络上，当使用量不超过Cloudflare的免费额度时，完全免费
    
3.  无需购买域名，可以使用Cloudflare Pages提供的\*.pages.dev的免费二级域名，同时也支持绑定自定义域名
    
4.  支持图片审查API，可根据需要开启，开启后不良图片将自动屏蔽，不再加载
    
5.  支持后台图片管理，日志管理，查看访问前20的Referer、IP、img,可以对上传的图片进行在线预览，添加白名单，黑名单等操作
    

### 利用Cloudflare pages部署

1.  点击Use this template按钮创建一个新的代码库。
    
2.  登录到Cloudflare控制台.
    
3.  在帐户主页中，选择`pages`\> `Create a project` > `Connect to Git`
    
4.  选择你创建的项目存储库，在`Set up builds and deployments`部分中，`Framework preset(框架)`选`Next.js`即可。
    

1.  点击`Save and Deploy`部署 。
    
2.  设置环境变量&开启图片管理功能
    
3.  设置兼容性标志，前往后台依次点击`设置`\->`函数`\->`兼容性标志`\->`配置生产兼容性标志` 填写 `nodejs_compat`
    

1.  前往后台点击`部署` 找到最新的一次部署点`重试部署`。

> 环境变量

变量名称

值

type

PROXYALLIMG

反向代理所有图片（默认为false）

boolean

BASIC\_USER

后台管理页面登录用户名称

string

BASIC\_PASS

后台管理页面登录用户密码

string

ENABLE\_AUTH\_API

是否开启访客验证 （默认为false）

boolean

REGULAR\_USER

普通用户 （访客验证）

string

REGULAR\_PASS

普通用户密码

string

ModerateContentApiKey

审查图像内容的API key

string

RATINGAPI

自建的鉴黄api

string

CUSTOM\_DOMAIN

https://your-custom-domain.com (自定义加速域名)

string

TG\_BOT\_TOKEN

123468:AAxxxGKrn5 (从 @BotFather)

string

TG\_CHAT\_ID

\-1234567 (频道的ID,TG Bot要是该频道或群组的管理员)

string

> TG\_BOT\_TOKEN

> 获取ID机器人 @VersaToolsBot

> `TG_CHAT_ID`为目标对话的唯一标`ID`或目标频道的用户名（eg: @channelusername），当目标对话为个人或私有频道是只能是`ID`,当为公开频道或群组是可以为目标频道的用户名（eg: `@channelusername`）

### Star History
