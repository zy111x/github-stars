---
project: rasterizeHTML.js
stars: 2457
description: Renders HTML into the browser's canvas
url: https://github.com/cburgmer/rasterizeHTML.js
---

rasterizeHTML.js
================

Renders HTML into the browser's canvas.

See the API.

Install
-------

```
$ npm install rasterizehtml
```

Then include a script tag with `node_modules/rasterizehtml/dist/rasterizeHTML.allinone.js` or require through browserify.

Example
-------

var canvas \= document.getElementById("canvas");
rasterizeHTML.drawHTML('Some ' +
                       '<span style="color: green; font-size: 20px;">HTML</span>' +
                       ' with an image <img src="someimg.png">',
                       canvas);

See the examples page. The code also ships with examples, make sure to run `npm test` first to compile the library.

How does it work
----------------

For security reasons rendering HTML into a canvas is severly limited. Firefox offers such a function via `ctx.drawWindow()`, but only with Chrome privileges (see https://developer.mozilla.org/en/Drawing\_Graphics\_with\_Canvas).

As described in http://robert.ocallahan.org/2011/11/drawing-dom-content-to-canvas.html and https://developer.mozilla.org/en/HTML/Canvas/Drawing\_DOM\_objects\_into\_a\_canvas however it is possible by embedding the HTML into an SVG image as a `<foreignObject>` and then drawing the resulting image via `ctx.drawImage()`.

In addition SVG is not allowed to link to external resources and so rasterizeHTML.js will load external images, fonts and stylesheets and store them inline via data: URIs (or inline style elements respectively).

Limitations
-----------

All resources (HTML page, CSS, images, fonts and JS) that are needed for drawing the page can only be loaded if from the same origin, unless techniques like CORS are used. I.E. `drawURL()` can only load pages from the same domain as the current page and all draw methods can equally only embed styling and images from that domain.

The code is tested under Firefox, Chrome & Safari.

There's basic support for Microsoft Edge, however **it will not work under any version of Internet Explorer.**

Also the individual browsers still have some issues when rendering SVGs with embedded HTML to the canvas.

The full list of limitations is here.

TypeScript
----------

Import type definitions as follows:

import \* as rasterizeHTML from 'rasterizehtml';

Development
-----------

Run `npm test`.

For tests against individual browsers run `python3 -m http.server` and `open http://localhost:8000/test/SpecRunner.html`.

Where is it used?
-----------------

-   CSS Critic, a lightweight tool for regression testing of Cascading Style Sheets
-   ...
