---
project: mojs
stars: 18552
description: The motion graphics toolbelt for the web
url: https://github.com/mojs/mojs
---

mo · js –
=========

The motion graphics toolbelt for the web.

Intro
-----

**mo · js** is a javascript motion graphics library that is a **fast, retina ready, modular and open source**. In comparison to other libraries, it has a different syntax and code animation structure approach. The declarative API provides you a complete control over the animation, making it customizable with ease.

The library provides **built-in components** to start animating from scratch like html, shape, swirl, burst and stagger, but also bring you tools to help craft your animation in a most natural way. Using mojs on your site will enhance the user experience, enrich your content visually and create **delightful animations** precisely.

Install
-------

### Use with a bundler

Mojs is published on the **NPM registry**, so you can install it through the command line interpreter using your favorite package manager. This is the best way to install the library if you are comfortable with **javascript bundlers** like `webpack` or `rollup`.

# npm
npm install @mojs/core

# yarn
yarn add @mojs/core

Then **import it like any other module** inside your build:

import mojs from '@mojs/core';

new mojs.Html({
  // ...
});

> Using a bundler has **many advantages** like output compression, code splitting, tree shaking, etc., so we encourage you to use this kind of tool with mojs.

### Use with a CDN

To rapidly **include the minified production file** in your web page, load the latest build from your favorite CDN using a generic script markup:

<!-- unpkg -->
<script src\="https://unpkg.com/@mojs/core"\></script\>

<!-- jsdelivr -->
<script src\="https://cdn.jsdelivr.net/npm/@mojs/core"\></script\>

Then instanciate using:

<script\>
  new mojs.Html({
    // ...
  });
</script\>

> By default, if no one is specified, the CDN will automatically target the **@latest** version of mojs and load the **UMD build** from `dist/mo.umd.js`.

User guide
----------

The base documentation you need to get started with mojs.

-   Get started
-   @mojs/player
-   @mojs/curve-editor
-   @mojs/timeline-editor

Learn
-----

Discover the amazing things that mojs can do!

-   Shape & Swirl _(Tutorial)_
-   Burst _(Tutorial)_
-   Icon animations powered by mo.js _(Codrops tutorial)_
-   An Introduction to mo.js _(CSS tricks tutorial)_
-   Playing with @mojs/player and @mojs/curve-editor _(Vimeo video)_
-   Web animations and mo.js _(Youtube video)_

Developer
---------

Get technical informations, open an issue/pull request or join the (amazing) community!

-   API documentation
-   Github
-   Slack workspace _(Not in the workspace yet? Use the invite link 🔓)_

Showcase
--------

-   Motion Graphics for the Web
-   Bubble Layout
-   Sleepy Mole
-   Animocons
-   Love or Hate Modal
-   Mograph
-   Word Reveal
-   Jump and Squash
-   Physical Balls
-   Dust Trail
-   Bubble Modal
-   Bubbles
-   Blast _(click to see)_
-   Simple Burst _(click to see)_
-   Dusty Burst _(click to see)_
-   Twitter Fav _(click to see)_
-   Twitter Fav (stars) _(click to see)_
-   Twitter Fav Firework _(click to see)_
-   Simple Ripple _(click to see)_

Browser support
---------------

-   Chrome 49+
-   Firefox 70+
-   Opera 36+
-   Safari 8+
-   Edge 79+

> Many other browsers may work, but are not extensively tested.

Maintainers
-----------

Since 2019, mojs ecosystem is **maintained and developed** by:

-   Xavier Foucrier
-   Jonas Sandstedt

Contribute
----------

If you want to report a bug or request a new feature/improvement, please **read the project contributors guidelines before**. Thanks for taking time to contribute.
