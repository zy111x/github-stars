---
project: two.js
stars: 8329
description: A renderer agnostic two-dimensional drawing api for the web.
---

Two.js
======

A two-dimensional drawing api meant for modern browsers. It is renderer agnostic enabling the same api to render in multiple contexts: webgl, canvas2d, and svg.

Home • Releases • Examples • Documentation • Change Log • Help

Usage
-----

Download the latest minified library and include it in your html.

<script src\="js/two.min.js"\></script\>

It can also be installed via npm, Node Package Manager:

npm install \--save two.js

Alternatively see how to build the library yourself.

Here is boilerplate html in order to draw a spinning rectangle in two.js:

<!doctype html\>
<html\>
  <head\>
    <meta charset\="utf-8"\>
    <script src\="js/two.min.js"\></script\>
  </head\>
  <body\>
    <script\>
      var two \= new Two({
        fullscreen: true,
        autostart: true
      }).appendTo(document.body);
      var rect \= two.makeRectangle(two.width / 2, two.height / 2, 50 ,50);
      two.bind('update', function() {
        rect.rotation += 0.001;
      });
    </script\>
  </body\>
</html\>

Custom Build
------------

Two.js uses nodejs in order to build source files. You'll first want to install that. Once installed open up a terminal and head to the repository folder:

```
cd ~/path-to-repo/two.js
npm install
```

This will give you a number of libraries that the development of Two.js relies on. If for instance you only use the `SVGRenderer` then you can really cut down on the file size by excluding the other renderers. To do this, modify `/utils/build.js` to only add the files you'd like. Then run:

```
node ./utils/build
```

And the resulting `/build/two.js` and `/build/two.min.js` will be updated to your specification.

* * *

### Using ES6 Imports

As of version `v0.7.5+` Two.js is compatible with EcmaScript 6 imports. This is typically employed in contemporary frameworks like React and Angular as well as bundling libraries like webpack, esbuild, and gulp. This adaptation of the boilerplate can be found on CodeSandbox:

import React, { useEffect, useRef } from "react";
import Two from "two.js";

export default function App() {
  var domElement \= useRef();

  useEffect(setup, \[\]);

  function setup() {
    var two \= new Two({
      fullscreen: true,
      autostart: true
    }).appendTo(domElement.current);

    var rect \= two.makeRectangle(two.width / 2, two.height / 2, 50, 50);
    two.bind("update", update);

    return unmount;

    function unmount() {
      two.unbind("update");
      two.pause();
      domElement.current.removeChild(two.renderer.domElement);
    }

    function update() {
      rect.rotation += 0.001;
    }
  }

  return <div ref\={domElement} /\>;
}

In addition to importing, the published packages of Two.js include the specific modules. So, if necessary you can import specific modules from the source code and bundle / minify for yourself like so:

import { Vector } from 'two.js/src/vector.js';

// In TypeScript environments leave out the ".js"
// when importing modules directly. e.g:
import { Vector } from 'two.js/src/vector';

_While useful, the main import of the `Two` namespace imports all modules. So, there isn't yet proper tree shaking implemented for the library, though it's on the roadmap._

### Running in Headless Environments

As of version `v0.7.x` Two.js can also run in a headless environment, namely running on the server with the help of a library called Node Canvas. We don't add Node Canvas to dependencies of Two.js because it's _not necessary_ to run it in the browser. However, it has all the hooks set up to run in a cloud environment. To get started follow the installation instructions on Automattic's readme. After you've done that run:

```
npm install canvas
npm install two.js
```

Now in a JavaScript file set up your Two.js scenegraph and save out frames whenever you need to:

var { createCanvas, Image } \= require('canvas');
var Two \= require('two.js')

var fs \= require('fs');
var path \= require('path');

var width \= 800;
var height \= 600;

var canvas \= createCanvas(width, height);
Two.Utils.shim(canvas, Image);

var time \= Date.now();

var two \= new Two({
  width: width,
  height: height,
  domElement: canvas
});

var rect \= two.makeRectangle(width / 2, height / 2, 50, 50);
rect.fill \= 'rgb(255, 100, 100)';
rect.noStroke();

two.render();

var settings \= { compressionLevel: 3, filters: canvas.PNG\_FILTER\_NONE };
fs.writeFileSync(path.resolve(\_\_dirname, './images/rectangle.png'), canvas.toBuffer('image/png', settings));
console.log('Finished rendering. Time took: ', Date.now() \- time);

process.exit();

Build Documentation
-------------------

The Two.js website is bundled with this repository. Relying on Vuepress the repository generates a website based on numerous `README.md` files housed in the `wiki` directory. Use the following the node commands as follows:

npm run docs:generate   // Generate README.md files for documentation from source code comments
npm run docs:dev        // Creates a local server to generate all documentation
npm run docs:build      // Builds out static site and associated files to wiki/.vuepress/dist

N.B: Vuepress is a legacy library and as such these commands rely on an older version of Node. Run `nvm use` if you get errors. If you don't use Node Version Manager then see `.nvmrc` to install the correct version of node on your local machine.

Change Log
----------

Two.js has been in operation since 2012. For a full list of changes from its first alpha version built with Three.js to the most up-to-date tweaks. Check out the wiki here.

* * *

#### And a big thank you to our sponsors who include:

Epilogue Press
