---
project: shave
stars: 2108
description: 💈 Shave is a 0 dep JS plugin that truncates text to fit within an element based on a set max-height  ✁
---

⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

**This software is maintained under a new repository located at yowainwright/shave**

⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

* * *

* * *

* * *

Shave ✁
=======

**Shave** is a zero dependency javascript plugin that truncates multi-line text to fit within an html element based on a set pixel number **max-height**. It then stores the _diff_ of the original text string in a hidden `<span>` element following the visible text. This means the original text remains intact!

**Shave, compared to other truncation plugins:**

-   maintains the original text after truncation.
-   does not require other libraries
-   only requires a selector and a max height
-   is very lightweight; `~1.5kb` unminified
-   allows for custom ellipsis strings and class names but doesn't over complicate
-   is fast and capable of truncating text within lots of elements quickly
-   is additive. It will play nice with other javascript libraries and more truncation features can easily be built with it.
-   supports non-spaced languages (Non-ascii).

Installing from a package manager
---------------------------------

npm

npm install shave --save

bower

bower install shave --save

yarn

yarn add shave

Usage
-----

Add **dist/shave.js** to your html

-   Or, **dist/jquery.shave.js** for jQuery/Zepto as of Shave >= v2.

Or as a module

import shave from 'shave';

Syntax
------

Basic setup

shave('selector', maxheight);
// shave('.shave-selector', 0) for example

**Shave also provided options _only_ to overwrite what it uses.**

If you'd like have custom class names and not use `.js-shave`:

shave('selector', maxheight, { classname: 'classname' });

Or if you'd like to have custom characters (instead of the standard ellipsis):

shave('selector', maxheight, { character: '✁' });

Or both:

shave('selector', maxheight, { classname: 'classname', character: '✁' });

Without spaces:

shave('selector', maxheight, { spaces: false });

* * *

You can also use **shave** as a jQuery or Zepto plugin. As of Shave >= v2, use **dist/jquery.shave.js** for jQuery/Zepto.

$('selector').shave(maxheight);

And here's a _jQuery/Zepto_ example with custom options:

$('selector').shave(maxheight, { classname: 'your-css-class', character: '✁'  });

If you're using a non-spaced language, you can support shave by setting an option `spaces` to `false`.

$('selector').shave(maxheight, { classname: 'your-css-class', character: '✁', spaces: false });

Examples
--------

Codepen example with plain javascript.

Codepen example with jQuery.

Codepen example with a non-spaced language.

Notes
-----

`text-overflow: ellipsis` is the way to go when truncating text to a single line. Shave does something very similar to `text-overflow: ellipsis` but for _multiple lines_ when line-clamp is not supported. Shave bypasses being a `line-clamp` polyfill by only accepting a max-height number. This keeps shave a fast and light weight utility.

Shave implements a binary search to truncate text in the most optimal way possible.

Shave is meant to truncate text within a selected html element. This means it will overwrite html within an html element with just the text within the selected element.

Here are some super basic examples of shave with window resize and click events. 🙌

Shave works in all modern browsers and was tested in some not so modern browsers (like Internet Explorer 8) - it works there too. 🍻

* * *

Created and maintained by Jeff Wainwright with Dollar Shave Club Engineering.
