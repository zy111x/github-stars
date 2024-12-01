---
project: urllib-sync
stars: 44
description: sync http request
---

urllib-sync
-----------

sync http request powered by urllib and spawnSync.

_**Notice: Only support node v0.11.13+**_

Installation
------------

$ npm install urllib-sync --save

Usage
-----

var request \= require('urllib-sync').request;

var res \= request('https://github.com');
// res should have status, data, headers

more options please check out urllib. But unfortunately, `urllib-sync` _**do not support streams and agents now**_.

### writeFile

If `options.writeFile` is present, the result of request will write into this file directly.

### License

MIT
