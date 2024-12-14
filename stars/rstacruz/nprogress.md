---
project: nprogress
stars: 26177
description: For slim progress bars like on YouTube, Medium, etc
url: https://github.com/rstacruz/nprogress
---

NProgress
=========

> Minimalist progress bar

Slim progress bars for Ajax'y applications. Inspired by Google, YouTube, and Medium.

Installation
------------

Add nprogress.js and nprogress.css to your project.

<script src\='nprogress.js'\></script\>
<link rel\='stylesheet' href\='nprogress.css'/>

NProgress is available via bower and npm.

```
$ npm install --save nprogress
```

Also available via unpkg CDN:

-   https://unpkg.com/nprogress@0.2.0/nprogress.js
-   https://unpkg.com/nprogress@0.2.0/nprogress.css

Basic usage
-----------

Simply call `start()` and `done()` to control the progress bar.

NProgress.start();
NProgress.done();

### Turbolinks (version 5+)

Ensure you're using Turbolinks 5+, and use this: (explained here)

$(document).on('turbolinks:click', function() {
  NProgress.start();
});
$(document).on('turbolinks:render', function() {
  NProgress.done();
  NProgress.remove();
});

### Turbolinks (version 3 and below)

Ensure you're using Turbolinks 1.3.0+, and use this: (explained here)

$(document).on('page:fetch',   function() { NProgress.start(); });
$(document).on('page:change',  function() { NProgress.done(); });
$(document).on('page:restore', function() { NProgress.remove(); });

### Pjax

Try this: (explained here)

$(document).on('pjax:start', function() { NProgress.start(); });
$(document).on('pjax:end',   function() { NProgress.done();  });

Ideas
-----

-   Add progress to your Ajax calls! Bind it to the jQuery `ajaxStart` and `ajaxStop` events.
    
-   Make a fancy loading bar even without Turbolinks/Pjax! Bind it to `$(document).ready` and `$(window).load`.
    

Advanced usage
--------------

**Percentages:** To set a progress percentage, call `.set(n)`, where _n_ is a number between `0..1`.

NProgress.set(0.0);     // Sorta same as .start()
NProgress.set(0.4);
NProgress.set(1.0);     // Sorta same as .done()

**Incrementing:** To increment the progress bar, just use `.inc()`. This increments it with a random amount. This will never get to 100%: use it for every image load (or similar).

NProgress.inc();

If you want to increment by a specific value, you can pass that as a parameter:

NProgress.inc(0.2);    // This will get the current status value and adds 0.2 until status is 0.994

**Force-done:** By passing `true` to `done()`, it will show the progress bar even if it's not being shown. (The default behavior is that _.done()_ will not do anything if _.start()_ isn't called)

NProgress.done(true);

**Get the status value:** To get the status value, use `.status`

Configuration
-------------

#### `minimum`

Changes the minimum percentage used upon starting. (default: `0.08`)

NProgress.configure({ minimum: 0.1 });

#### `template`

You can change the markup using `template`. To keep the progress bar working, keep an element with `role='bar'` in there. See the default template for reference.

NProgress.configure({
  template: "<div class='....'>...</div>"
});

#### `easing` and `speed`

Adjust animation settings using _easing_ (a CSS easing string) and _speed_ (in ms). (default: `ease` and `200`)

NProgress.configure({ easing: 'ease', speed: 500 });

#### `trickle`

Turn off the automatic incrementing behavior by setting this to `false`. (default: `true`)

NProgress.configure({ trickle: false });

#### `trickleSpeed`

Adjust how often to trickle/increment, in ms.

NProgress.configure({ trickleSpeed: 200 });

#### `showSpinner`

Turn off loading spinner by setting it to false. (default: `true`)

NProgress.configure({ showSpinner: false });

#### `parent`

specify this to change the parent container. (default: `body`)

NProgress.configure({ parent: '#container' });

Customization
-------------

Just edit `nprogress.css` to your liking. Tip: you probably only want to find and replace occurrences of `#29d`.

The included CSS file is pretty minimal... in fact, feel free to scrap it and make your own!

Resources
---------

-   New UI Pattern: Website Loading Bars (usabilitypost.com)

Support
-------

**Bugs and requests**: submit them through the project's issues tracker.  

**Questions**: ask them at StackOverflow with the tag _nprogress_.  

**Chat**: join us at gitter.im.  

Thanks
------

**NProgress** © 2013-2017, Rico Sta. Cruz. Released under the MIT License.  
Authored and maintained by Rico Sta. Cruz with help from contributors.

> ricostacruz.com  ·  GitHub @rstacruz  ·  Twitter @rstacruz
