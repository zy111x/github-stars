---
project: tiny-swiper
stars: 1295
description: Ingenious JavaScript Carousel powered by wonderful plugins. Lightweight yet extensible. Import plugins as needed, No more, no less.
url: https://github.com/joe223/tiny-swiper
---

Tiny-Swiper
-----------

Ingenious JavaScript Carousel powered by wonderful plugins with native-like experience. Lightweight yet extensible. Import plugins as needed, No more, no less. Zero dependency, written in TypeScript, used for free and without any attribution.

Looking for more details about APIs and Demos, visit tiny-swiper.js.org

Usage
-----

### Installation

# via npm
$ npm install tiny-swiper --save

# via yarn
$ yarn add tiny-swiper

If you prefer CDN

<script src\="https://unpkg.com/tiny-swiper@latest"\></script\>

### Initialization

Html code:

<!-- Slider main container -->
<div class\="swiper-container"\>
    <!-- Additional required wrapper -->
    <div class\="swiper-wrapper"\>
        <!-- Slides -->
        <div class\="swiper-slide"\>Slide 1</div\>
        <div class\="swiper-slide"\>Slide 2</div\>
        <div class\="swiper-slide"\>Slide 3</div\>
        ...
    </div\>
    <!-- If we need pagination -->
    <div class\="swiper-pagination"\></div\>
</div\>

JavaScript/TypeScript code:

import Swiper, {
    SwiperPluginLazyload,
    SwiperPluginPagination
} from 'tiny-swiper'

Swiper.use(\[ SwiperPluginLazyload, SwiperPluginPagination \])

const swiper \= new Swiper(swiperContainer: HTMLElement | string, parameters?: TinySwiperParameters)

-   `new Swiper()` - initialize swiper with options.
-   `Swiper.use()` - Register plugin.
-   `swiperContainer` - HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.
-   `parameters` - object with Swiper parameters. Optional.

You also can load full-featured Tiny-Swiper:

import Swiper from 'tiny-swiper/lib/index.full.js'

<script src\="https://unpkg.com/tiny-swiper@latest/lib/index.full.js"\></script\>

Browsers support
----------------

All modern browsers are supported, include IE10+.

  
IE / Edge

  
Firefox

  
Chrome

  
Safari

  
iOS Safari

  
Samsung

  
Opera

IE10, IE11, Edge

last 2 versions

last 2 versions

last 2 versions

last 2 versions

last 2 versions

last 2 versions

Contribution
------------

Please make sure to read the Contributing Guide before making a pull request.

Thanks goes to these wonderful people

License
-------

Tiny-Swiper is licensed under a MIT License.
