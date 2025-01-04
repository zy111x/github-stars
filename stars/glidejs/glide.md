---
project: glide
stars: 7454
description: A dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more
url: https://github.com/glidejs/glide
---

### Glide.js is a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more

What can convince you:

-   **Dependency-free**. Everything included, ready for action.
-   Lightweight. Only **~23kb (~7kb gzipped)** with every functionality on board.
-   **Modular**. Remove unused modules and drop script weight even more.
-   **Extendable**. Plug-in your own modules with additional functionalities.
-   **Bundlers ready**. Using Rollup or Webpack? We have your back.

Documentation
-------------

Visit glidejs.com for documentation.

> Looking for old documentation? Wiki contains archived documentation of Glide.js in version `^2.0.0`.

Donation
--------

Glide.js is an open source project licensed under the MIT license. It's completely free to use. However, it would be great if you buy me a cup of coffee once in a while to keep me awake :)

-   PayPal
-   Github Sponsors

Getting started
---------------

Pull-in a latest version with NPM ...

npm install @glidejs/glide

... provide `<link>` to the required core stylesheet. You can also optionally add an included theme stylesheet ...

<!-- Required Core stylesheet -->
<link rel\="stylesheet" href\="node\_modules/@glidejs/glide/dist/css/glide.core.min.css"\>

<!-- Optional Theme stylesheet -->
<link rel\="stylesheet" href\="node\_modules/@glidejs/glide/dist/css/glide.theme.min.css"\>

... then, prepare a little bit of necessary markup ...

<div class\="glide"\>
  <div data-glide-el\="track" class\="glide\_\_track"\>
    <ul class\="glide\_\_slides"\>
      <li class\="glide\_\_slide"\></li\>
      <li class\="glide\_\_slide"\></li\>
      <li class\="glide\_\_slide"\></li\>
    </ul\>
  </div\>
</div\>

... and finally, initialize and mount a Glide.

import Glide from '@glidejs/glide'

new Glide('.glide').mount()

Need a few selected modules? Import and mount only what you need.

import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

new Glide('.glide').mount({ Controls, Breakpoints })

Contributing
------------

The issue channel is especially for improvement proposals and bug reporting. If you have implementing problems, please write on StackOverflow with glidejs tag.

Browser Support
---------------

-   IE 11+
-   Edge
-   Chrome 10+
-   Firefox 10+
-   Opera 15+
-   Safari 5.1+
-   Safari iOS 9+

Building
--------

Build using NPM scripts. The following scripts are available:

-   `build:css` - Outputs CSS files from SASS files.
-   `build:js` - Outputs all destination variants of the script.
-   `build` - Comprehensively builds the entire library.
-   `test` - Runs complete test suite.
-   `lint` - Lints library JavaScript files.

Credits
-------

-   Jędrzej Chałubek - Creator
-   Contributors

License
-------

Copyright (c) 2014-present, Jędrzej Chałubek. Licensed under the terms of the MIT License.
