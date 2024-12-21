---
project: umbrella
stars: 2304
description: :umbrella: Lightweight javascript library for DOM manipulation and events
url: https://github.com/franciscop/umbrella
---

Umbrella JS
===========

> **Library Documentation** | **Migrating from jQuery guide**

Covers your javascript needs for those rainy days. A <3kb performant jQuery-like library born from the question: You might not need jQuery, then what do you need?

You probably need awesome CSS (like Picnic CSS) and a lightweight, modern and performant javascript library. This does:

-   DOM traversal (selector, filter, find, each, etc.)
-   DOM editing (classes & attributes, html, before, etc.)
-   Event handling

A couple of simple examples:

// Simple events like jQuery
u("button").on('click', e \=> {
  alert("Hello world");
});

// Handle form submissions
u('form.login').handle('submit', async e \=> {
  const user \= await fetch('/login', {
    method: 'POST', body: new FormData(e.target)
  }).then(res \=> res.json());
  window.href \= '/user/' + user.id;
});

Getting started
---------------

There are few ways to use Umbrella JS:

### Play with it

Instead of installing it, you can just play with it in JSFiddle:

**Try on JSFiddle**

### Use a CDN

jsdelivr.com is an awesome OSS service that hosts many open source projects so you don't need to even download the code:

<script src\="https://cdn.jsdelivr.net/npm/umbrellajs"\></script\>

### Install with `npm`

Using npm is a front-end package manager that makes it super-easy to add a new package:

```
npm install umbrellajs
```

### Module support

If you use a front-end module bundler like Webpack or Browserify, `u` is exposed as CommonJS exports. You can pull them in like so:

// ES Modules/Webpack/etc
import u from 'umbrellajs';

// Commonjs
var u \= require('umbrellajs');

### ES Module support

If you use an ES Module, `u` and `ajax` are exposed as ES Module exports. You can pull them in like so:

```
import u from 'umbrellajs/umbrella.esm.js'
```

### Download it

If you like it or prefer to try it locally, just download `umbrella.min.js`:

**Download Umbrella JS**

Add it to your project:

<script src\="umbrella.min.js"\></script\>

Support: IE11+
--------------

Current usage for IE 10- is under 1% for each version (8, 9, 10) so it's not Umbrella's mission to support this. However, those extra seconds gained from loading faster on mobile might be even bigger than that percentage. You should probably test it.

Known, wontfix IE10- bugs:

-   Invalid target element for this operation when trying to use any of these methods on **table**, **tbody**, **thead** or **tr**. Check the issue on StackOverflow. For those elements, this gives an error:
    
    -   `.before()`
    -   `.after()`
    -   `.append()`
    -   `.prepend()`
-   Unable to get property \_\_\_\_ of undefined or null reference since classList is not supported by IE9-. Just use `polyfill.js` and they will work. Affects:
    
    -   `.addClass()`
    -   `.removeClass()`
    -   `.hasClass()`
    -   `.toggleClass()`
-   Choosing multiple options within `<select>` doesn't work with IE10- when using `.serialize()` (and thus `.ajax()`). No idea why, but it's a really corner case. Affects:
    
    -   `.ajax()`
    -   `.serialize()`

Alternatives
------------

-   jQuery
    
-   Zepto
    
-   Bliss
    
-   NodeList
    
-   Micro Framework (many)
    

Author and License
------------------

Created and maintained by Francisco Presencia under the MIT license.

References
----------

-   https://www.bennadel.com/blog/4184-replacing-jquery-110kb-with-umbrella-js-8kb.htm
-   http://www.tutsplanet.com/umbrella-js-alternative-jquery-288/
-   http://www.hongkiat.com/blog/umbrella-js/
-   http://www.catswhocode.com/blog/umbrella-js-a-tiny-yet-powerful-alternative-to-jquery
-   https://webmaster.kitchen/jquery-kutuphanesine-alternatif-umbrellajs-kimdir/
-   https://wmaraci.com/blog/umbrellajs-jquery-alternatifiniz-olmaya-aday-533
-   http://qiita.com/kt3k/items/0da4c0b36c402b96122b
-   https://whatpixel.com/umbrella-js-library/
-   https://gomakethings.com/umbrella-js/
-   https://medium.com/@rintoug/umbrella-js-is-your-alternative-to-jquery-c73fab99061
-   https://lean.codecomputerlove.com/keeping-your-code-dry-with-umbrellajs/
