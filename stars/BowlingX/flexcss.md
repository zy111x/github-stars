---
project: flexcss
stars: 84
description: A simple css pattern-library using flexbox, build for hellofellow
url: https://github.com/BowlingX/flexcss
---

FlexCss
=======

**A lightweight Flexbox based mobile-first CSS/Javascript pattern-library created by David Heidrich, build for hellofellow.com.**

-   Real-World-Example
-   Demo-Page

Installation
------------

Feel free to use my patterns in your project

`npm install flexcss --save-dev`

Overview
--------

Includes different ready-to-use Javascript Components and Widgets that are **heavily optimized** to be used in a responsive environment.

-   A Form Validation framework for HTML5
    -   supports custom validation
-   Complex Modals
-   Image LightBox (based on Modal)
-   Tooltip
-   Dropdown
-   Off-Canvas Navigation
-   Tabs

All Javascript Components haven been created without external dependencies (almost).

### Polyfills / Dependencies used

-   `Object.assign` (MDN, Polyfill)
-   `Promise` (Polyfill)
-   `fetch` (link)

### Branch Information

-   `master` contains the latest es6 rewrite
-   `hellofellow` version that runs on hellofellow, will be abandoned in the future (and replaced with master).
    -   No pull-requests are accepted here

Browser/Device Support
----------------------

Due the use of Flexbox and other HTML5 features we are limited to IE 10+.

Browser

Version

Safari

7.1+

Google Chrome

30+

Internet Explorer

10+

Firefox

30+

I tested `FlexCss` on different Android and iOS Devices.

Sass/css
--------

The patterns included may be used for prototyping and to get an _idea_ what is possible with flexbox. It's not supposed to be a _generic_ production-ready framework yet (but might become in the future).

### Fonts

`FlexCss` includes a custom font set of fontello (http://fontello.com/), you can disable including this by overwriting `$includeFontello` and set it to `false`

Either way, there is also a mixin called `icon` which you can use to setup a font.

Development
-----------

Requires node to be installed. run `npm install`, and `gulp` to start compiling sources, recompilation is triggered automatically on file change

### jekyll

jekyll is used to create the pages for this project, run `bundle install` for setup and then `bundle exec jekyll serve` to start the local server to read documentation.

### Tests

There is no `100%` coverage yet, but I'm working on it :D.

run `npm test` to run all specs, run `npm test --watch` to start TDD mode.

TODO
----

The Project is in a really early stage and a lot of things have to be improved. Although running in production, it's not 100% ready for a public release. Use at your own risk!

-   API Documentation, more examples
-   Code Cleanup
-   get near to 100% Coverage by specs
-   improve tooling and gulp setup

License
-------

The MIT License (MIT)

Copyright (c) 2015 David Heidrich, hellofellow KG

Any contribution is welcome, just issue a pull-request or bug/feature if you found something :)

hellofellow and the hellofellow logo Copyright © 2013 – 2015 hellofellow KG
