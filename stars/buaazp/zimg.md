---
project: zimg
stars: 2691
description: A lightweight and high performance image storage and processing system.
url: https://github.com/buaazp/zimg
---

zimg
====

Project zimg is a lightweight image storage and processing system. It's written in C and it has high performance in image field. The zimg is designed for high concurrency image server. It supports many features for storing and processing images.

Homepage: zimg.buaa.us  
Author: @招牌疯子  
Contact me: zp@buaa.us

### Versions:

-   05/11/2017 - zimg 3.2.0 Release. Fix build issues with 3rd dependences.
-   09/09/2014 - zimg 3.1.0 Release. New generation.
-   04/26/2014 - zimg 2.0.0 Release. Supported distributed storage backends.
-   08/01/2013 - zimg 1.0.0 Release.

### Synopsis

-   The zimg is an image storage and processing server. You can get a compressed and scaled image from zimg with the parameters of URL.  
    http://demo.buaa.us/5f189d8ec57f5a5a0d3dcba47fa797e2?w=500&h=500&g=1&x=0&y=0&r=45&q=75&f=jpeg
    
-   The parameters contain width, height, resize type, gray, crop position (x, y), rotate, quality and format. And you can control the default type of images by configuration file.  
    And you can get the information of image in zimg server like this:  
    http://demo.buaa.us/info?md5=5f189d8ec57f5a5a0d3dcba47fa797e2
    
-   If you want to customize the transform rule of image you can write a zimg-lua script. Goto API of zimg-lua for more information. Use `t=type` parameter in your URL to get the special image:  
    http://demo.buaa.us/5f189d8ec57f5a5a0d3dcba47fa797e2?t=webp500
    
-   The concurrent I/O, distributed storage and in time processing ability of zimg is excellent. You needn't nginx in your image server any more. In the benchmark test, zimg can deal with 3000+ image downloading task per second and 90000+ HTTP echo request per second on a high concurrency level. The performance is higher than PHP or other image processing server. More information of zimg is in the documents below.
    

### Supplying:

Uploading, downloading and processing images through HTTP protocol.  
High performance in concurrency I/O and compressing image.  
Support lua scripts to deal with customize compressing strategy.  
Support memcached and redis protocols to save images into distributed storage backends.  
Varied config options for operation and maintenance.

More usages are in Guidebook of zimg.

### Build:

You should build dependences first. If you want to use distributed storage, make sure the optional storage backends beansdb(memcached protocol), or ssdb(redis protocol) is working well.  
More information of building zimg is in Install Guide.

```
git clone https://github.com/buaazp/zimg -b master --depth=1
cd zimg   
make  
cd bin  
./zimg conf/zimg.lua
```

### Thanks to:

> We stand on the shoulders of giants.

libevhtp: A more flexible replacement for libevent's httpd API.  
LuaJIT: LuaJIT is JIT compiler for the Lua language.  
imagemagick: A software suite to create, edit, compose, or convert bitmap images.  
hiredis: Hiredis is a minimalistic C client library for the Redis database.  
libmemcached: LibMemcached is designed to provide the greatest number of options to use Memcached.

**\[Optional\] For Storage:**

memcached: A distributed memory object caching system.  
beansdb: Beansdb is a distributed key-value storage system designed for large scale online system, aiming for high avaliablility and easy management.  
beanseye: Beanseye is proxy and monitor for beansdb, written in Go.  
SSDB: SSDB is a high performace key-value(key-string, key-zset, key-hashmap) NoSQL database, an alternative to Redis.  
twemproxy: Twemproxy is a fast and lightweight proxy for memcached and redis protocol.

### Documents:

There are several documents to introduce the design and architecture of zimg:  
Documents of zimg  
And this picture below shows the architecture of zimg's storage:

### Download:

The source code is licensed under a BSD-like License.  
All versions on Github.

### Feedback:

If you have any question, please submit comment in my BLOG or mention me on Weibo, twitter.  
Technical issues are also welcomed to be submitted on GitHub Issues.
