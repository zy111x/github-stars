---
project: JSONP
stars: 82
description: A slim JSONP request library for Javascript
url: https://github.com/larryosborn/JSONP
---

JSONP
=====

A slim JSONP request library for Javascript.

Usage
=====

JSONP({
    url: 'http://api.example.com/sample.js',
    data: { foo: 'bar' },
    success: function(data) { console.log(data); }
});

This example will generate:

<script src\="http://api.example.com/sample.js?foo=bar&callback=jsonp\_a1b2c3d4e5f6g7h" async\="true"\></script\>

Options
=======

-   url: (string) (required) URL for the JSONP resource.
-   data: (object) (optional) Object used to generate GET query parameters for the JSONP resource.
-   success: (function) (optional) Callback function executed upon a successful request.
-   error: (function) (optional) Callback function executed for a failed request.
-   complete: (function) (optional) Callback function exected when the request is completed regardless of success or error.
-   beforeSend: (function) (optional) Callback function executed before request is created. If it returns false, the request is aborted.
-   callbackName: (string) (optional) Name of callback function name. Default is 'callback'.
