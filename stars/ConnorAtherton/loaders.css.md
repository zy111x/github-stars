---
project: loaders.css
stars: 10223
description: Delightful, performance-focused pure css loading animations.
url: https://github.com/ConnorAtherton/loaders.css
---

Loaders.css
===========

Delightful and performance-focused pure css loading animations.

### What is this?

See the demo

A collection of loading animations written entirely in css. Each animation is limited to a small subset of css properties in order to avoid expensive painting and layout calculations.

I've posted links below to some fantastic articles that go into this in a lot more detail.

### Install

```
bower install loaders.css
```

```
npm i --save loaders.css
```

### Usage

##### Standard

-   Include `loaders.min.css`
-   Create an element and add the animation class (e.g. `<div class="loader-inner ball-pulse"></div>`)
-   Insert the appropriate number of `<div>`s into that element

##### jQuery (optional)

-   Include `loaders.min.css`, jQuery, and `loaders.css.js`
-   Create an element and add the animation class (e.g. `<div class="loader-inner ball-pulse"></div>`)
-   `loaders.js` is a simple helper to inject the correct number of div elements for each animation
-   To initialise loaders that are added after page load select the div and call `loaders` on them (e.g. `$('.loader-inner').loaders()`)
-   Enjoy

### Customising

##### Changing the background color

Add styles to the correct child `div` elements

.ball-grid-pulse \> div {
  background-color: orange;
}

##### Changing the loader size

Use a 2D Scale `transform`

.loader-small .loader-inner {
  transform: scale(0.5, 0.5);
}

### Browser support

Check the can I use tables. All recent versions of the major browsers are supported and it has support back to IE9.

Note: The loaders aren't run through autoprefixer, see this issue.

IE 11

Firefox 36

Chrome 41

Safari 8

✔

✔

✔

✔

### Contributing

Pull requests are welcome! Create another file in `src/animations` and load it in `src/loader.scss`.

In a separate tab run `gulp --require coffee-script/register`. Open `demo/demo.html` in a browser to see your animation running.

### Further research

-   http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
-   http://aerotwist.com/blog/pixels-are-expensive/
-   http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
-   http://frontendbabel.info/articles/webpage-rendering-101/

### Inspired by loaders.css

A few other folks have taken loaders and ported them elsewhere.

-   **React** - Jon Jaques built a React demo you can check out here
-   **Vue** - Kirill Khoroshilov loaders wrapped into components vue-loaders
-   **Angular** - the-corman created some directives for angular, as did Masadow in this pr
-   **Ember** - Stanislav Romanov created an Ember addon ember-cli-loaders for using Loaders.css in Ember applications
-   **iOS** - ninjaprox and ontovnik
-   **Android** - Jack Wang created a library and technofreaky created an app

### Licence

The MIT License (MIT)

Copyright (c) 2016 Connor Atherton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.