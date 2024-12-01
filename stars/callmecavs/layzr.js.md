---
project: layzr.js
stars: 5550
description: A modern lazy loading library for images.
---

Layzr.js
========

A modern lazy loading library for images.

-   Demo Page

Getting Started
---------------

Follow these steps:

1.  Install
2.  Setup Images
3.  Instantiate
4.  Review Options
5.  Review Events
6.  Review API
7.  **Review Example Code**

-   Examples progress like a coffee addiction: small -> medium -> large

Install
-------

Layzr was developed with a modern JavaScript workflow in mind. To use it, it's recommended you have a build system in place that can transpile ES6, and bundle modules. For a minimal boilerplate that fulfills those requirements, check out outset.

Install Layzr, and add it to your `package.json` dependencies.

```
$ npm install layzr.js --save
```

Then `import` it into the file where you'll use it.

import Layzr from 'layzr.js'

Setup Images
------------

Layzr intelligently chooses the best image source available **based on an image's data attributes and browser feature detection**.

-   In browsers that support `srcset`, if available, it will be used to determine the source.
-   In browsers that don't, the normal or retina source will be chosen based on the devicePixelRatio and availability.

Note that all attribute names are configurable via the options passed to Layzr. To indicate potential sources, add the following attributes to your images:

Name

Required

Optional

`data-normal`

✓

`data-retina`

✓

`data-srcset`

✓

### data-normal

Put the _normal resolution_ source in the `data-normal` attribute.

<img data-normal\="normal.jpg"\>

Note that Layzr **selects elements using this attribute**. Elements without it won't be tracked, and will never load.

### data-retina

Add the _retina/high resolution_ source in the `data-retina` attribute.

<img data-normal\="normal.jpg" data-retina\="retina.jpg"\>

### data-srcset

Add the _source set_ in the `data-srcset` attribute. For information on the proper syntax, read the official specification.

<img data-normal\="normal.jpg" data-retina\="retina.jpg" data-srcset\="small.jpg 320w, medium.jpg 768w, large.jpg 1024w"\>

Instantiate
-----------

Create an instance, optionally passing in your options.

Be sure to **assign your Layzr instance to a variable**. Using your instance, you can:

-   start and stop the event listeners
-   add and remove event handlers
-   accommodate dynamically added elements

// using the default options

const instance \= Layzr()

// using custom options

const instance \= Layzr({
  // ...
})

Options are explained in the following section.

Options
-------

Default options are shown below, and an explanation of each follows:

const instance \= Layzr({
  normal: 'data-normal',
  retina: 'data-retina',
  srcset: 'data-srcset',
  threshold: 0
})

### normal

Customize the attribute the normal resolution source is taken from.

const instance \= Layzr({
  normal: 'data-normal'
})

### retina

Customize the attribute the retina/high resolution source is taken from.

const instance \= Layzr({
  retina: 'data-retina'
})

### srcset

Customize the attribute the source set is taken from.

const instance \= Layzr({
  srcset: 'data-srcset'
})

### threshold

Adjust when images load, relative to the viewport. _Positive values make images load sooner, negative values make images load later_.

Threshold is a percentage of the viewport height, identical to the CSS `vh` unit.

const instance \= Layzr({
  threshold: 0
})

Events
------

Layzr instances are extended with Knot.js, a browser-based event emitter. Use the event emitter syntax to add and remove handlers. Review the emitter syntax here.

Layzr emits the following events:

-   src:before
-   src:after

### src:before

This event is emitted immediately _before an image source is set_. The image node is passed to the event handler.

instance.on('src:before', (element) \=> {
  // 'this' is your Layzr instance
  // 'element' is the image node
  // ...
})

Load event handlers should be attached using this event. See the example, and note the caveats associated with image load events before proceeding.

### src:after

This event is emitted immediately _after an image source is set_. The image node is passed to the event handler.

instance.on('src:after', (element) \=> {
  // 'this' is your Layzr instance
  // 'element' is the image node
  // ...
})

Note that the image is not necessarily done loading when this event fires.

API
---

All API methods are **chainable**, including those from the emitter.

### .handlers(flag)

Add or remove the `scroll` and `resize` event handlers.

instance
  .handlers(true)       // 'true' adds them
  .handlers(false)      // 'false' removes them

### .check()

Manually check if elements are in the viewport.

This method is called while the `window` is scrolled or resized.

instance.check()

### .update()

Update the elements Layzr is checking.

instance.update()

**Dynamically added elements** should be handled using this method. See the example.

Browser Support
---------------

Layzr depends on the following browser APIs:

-   classList
-   ES5 array methods: forEach, slice
-   requestAnimationFrame

It supports the following natively:

-   Chrome 24+
-   Firefox 23+
-   Safari 6.1+
-   Opera 15+
-   Edge 12+
-   IE 10+
-   iOS Safari 7.1+
-   Android Browser 4.4+

To support older browsers, consider including polyfills/shims for the APIs listed above. There are **no plans to include any in the library**, in the interest of file size.

Colophon
--------

-   Site Design: Chris Allen
-   Stock Photos: Unsplash

License
-------

MIT. © 2017 Michael Cavalea
