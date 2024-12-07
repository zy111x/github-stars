---
project: lightGallery
stars: 6571
description: A customizable, modular, responsive, lightbox gallery plugin. 
url: https://github.com/sachinchoolur/lightGallery
---

lightGallery
============

A customizable, modular, responsive, lightbox gallery plugin. No dependencies.\\ Available for React.js, Angular, Vue.js, and typescript.

Core features
-------------

-   Fully responsive.
-   Modular architecture with built in plugins.
-   Highly optimized for touch devices.
-   Mouse drag supports for desktops.
-   Double-click/Double-tap to see actual size of the image.
-   Animated thumbnails.
-   Social sharing.
-   YouTube Vimeo Wistia and html5 videos Support.
-   20+ Hardware-Accelerated CSS3 transitions.
-   Dynamic mode.
-   Inline gallery.
-   Full screen support.
-   Zoom in/out, Pinch to zoom.
-   Swipe/Drag up/down support to close gallery.
-   Browser history API(deep linking).
-   Responsive images.
-   HTML iframe support.
-   Multiple instances on one page.
-   Easily customizable via CSS (SCSS) and Settings.
-   Smart image preloading and code optimization.
-   Keyboard Navigation for desktop.
-   SVG icons.
-   Accessibility support.
-   Rotate, flip images.
-   And many more.

Documentation
-------------

-   Getting started
-   Settings
-   React
-   Vue.js
-   Angular
-   Demos
-   CodePen

Installation
------------

lightGallery is available on NPM, Yarn, Bower, CDNs, and GitHub. You can use any of the following method to download lightGallery.

-   NPM - NPM is a package manager for the JavaScript programming language. You can install `lightgallery` using the following command
    
    npm install lightgallery
    
-   YARN - Yarn is another popular package manager for the JavaScript programming language. If you prefer you can use Yarn instead of NPM
    
    yarn add lightgallery
    
-   Bower - You can find lightGallery on Bower package manager as well
    
    bower install lightgallery --save
    
-   GitHub - You can also directly download lightgallery from GitHub
    
-   CDN - If you prefer to use a CDN, you can load files via jsdelivr, cdnjs or unpkg
    

#### Include CSS and Javascript files

First of all, include lightgallery.css in the <head> of the document. If you want include any lightGallery plugin such as thumbnails or zoom, you need to include respective css files as well.

Alternatively you can include `lightgallery-bundle.css` which contains lightGallery and all plugin styles instead of separate stylesheets.

If you like you can also import scss files instead of css files from the `scss` folder.

<head\>
    <link type\="text/css" rel\="stylesheet" href\="css/lightgallery.css" />

    <!-- lightgallery plugins -->
    <link type\="text/css" rel\="stylesheet" href\="css/lg-zoom.css" />
    <link type\="text/css" rel\="stylesheet" href\="css/lg-thumbnail.css" />

    <!-- OR -->

    <link type\="text/css" rel\="stylesheet" href\="css/lightgallery-bundle.css" />
</head\>

Then include lightgallery.umd.js into your document. If you want to include any lightgallery plugin you can include it after lightgallery.umd.js.

<body\>
    ....

    <script src\="js/lightgallery.umd.js"\></script\>

    <!-- lightgallery plugins -->
    <script src\="js/plugins/lg-thumbnail.umd.js"\></script\>
    <script src\="js/plugins/lg-zoom.umd.js"\></script\>
</body\>

lightGallery supports AMD, CommonJS and ES6 modules too.

import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

#### The markup

lightgallery does not force you to use any kind of markup. you can use whatever markup you want. Here can find detailed examples of different kinds of markups.

If you know the original size of the media, you can pass it via `data-lg-size="${width}-${height}"` attribute for the initial zoom animation. But, this is completely optional.

<div id\="lightgallery"\>
    <a href\="img/img1.jpg" data-lg-size\="1600-2400"\>
        <img alt\=".." src\="img/thumb1.jpg" />
    </a\>
    <a href\="img/img2.jpg" data-lg-size\="1024-800"\>
        <img alt\=".." src\="img/thumb2.jpg" />
    </a\>
    ...
</div\>

#### Initialize lightGallery

Finally, you need to initiate the gallery by adding the following code.

<script type\="text/javascript"\>
    lightGallery(document.getElementById('lightgallery'), {
        plugins: \[lgZoom, lgThumbnail\],
        speed: 500,
        licenseKey: 'your\_license\_key'
        ... other settings
    });
</script\>

CodePen Demos

#### License Key

You'll receive a license key via email one you purchase a license More info

#### Plugins

As shown above, you need to pass the plugins via settings if you want to use any lightGallery plugins.

If you are including lightGallery files via script tag, please use the same plugins names as follows.

`lgZoom`, `lgAutoplay`, `lgComment`, `lgFullscreen` , `lgHash`, `lgPager`, `lgRotate`, `lgShare`, `lgThumbnail`, `lgVideo`, `lgMediumZoom`

Browser support
---------------

lightGallery supports all major browsers including IE 10 and above.

License
-------

#### Commercial license

If you want to use lightGallery to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Read more about the commercial license

#### Open source license

If you are creating an open source application under a license compatible with the GNU GPL license v3, you may use this project under the terms of the GPLv3.

Support
-------

If you have any questions, suggestions, feedback, please reach out to contact@lightgalleryjs.com or DM me on twitter
