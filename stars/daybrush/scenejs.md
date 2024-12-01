---
project: scenejs
stars: 2730
description: 🎬 Scene.js is JavaScript & CSS timeline-based animation library
url: https://github.com/daybrush/scenejs
---

Scene.js
--------

🎬 Scene.js is an JavaScript & CSS timeline-based animation library.

**Official Site**  /  **API**  /  **Features**  /  **Examples**  /  **Main Project**

  

                 

🚀 Examples
-----------

-   ClapperBoard Animation
-   Panda eating Bamboo Animation
-   Circle Burst
-   Motion Effect
-   Tree Animation
-   Snow Animation
-   Card Rotation
-   Raindrop Effect
-   Cube
-   Shape
-   Timer

**More Examples**

⚙️ Installation
---------------

$ npm install scenejs

<script src\="//daybrush.com/scenejs/release/latest/dist/scene.min.js"\></script\>

📄 Documents
------------

-   API Documentation
-   Features Documentation

📦 Packages
-----------

Package

Version

Description

**react-scenejs**

A React Component that create JavaScript & CSS timeline-based animation with Scene.js.

**svelte-scenejs**

A Svelte Component that create JavaScript & CSS timeline-based animation with Scene.js.

**vue-scenejs**

A Vue 3 Component that create JavaScript & CSS timeline-based animation with Scene.js.

**vue2-scenejs**

A Vue 2 Component that create JavaScript & CSS timeline-based animation with Scene.js.

**@scenejs/render**

Make a movie of CSS animation through Scene.js.

**@scenejs/effects**

Effect collection library where you can add scene effects to Scene.js.

**@scenejs/timeline**

A library that represents the timeline of Scene.js. You can control time, properties, and items.

**@scenejs/media**

A library for playing or controlling media with Scene.js.

**@scenejs/iframe**

A library that control the animation of iframe with Scene.js.

🎬 Make Scene
-------------

import Scene from "scenejs";

const scene \= new Scene({
  ".class": {
    0: "left: 0px; top: 0px; transform: translate(0px);",
    1: {
      "left": "100px",
      "top": "0px",
      transform: "translate(50px)",
    },
    2: {
      "left": "200px",
      "top": "100px",
      transform: {
        translate: "100px",
      },
    }
  }
}, {
  selector: true,
  easing: "ease-in-out",
}).play();

🎬 Add Media (Audio/Video)
--------------------------

This library supports adding video and audio components to your scene. To add a video or an audio, you need to install @scenejs/media library.

### Add necessary npm package

$ npm i @scenejs/media

### How to use

import MediaScene from '@scenejs/media';

const mediaScene \= new MediaScene();
    mediaScene
        .addMedia("background", "./background.mp3")
        .seek(0, 40.79);
    
    mediaScene
        .addMedia("video", "./video.mp4")
        .seek(0, 40.79)
        .setVolume(1)
        .setPlaySpeed(1)
        .setDelay(startTime);

    scene.setItem("video",mediaScene);

Please note that this library uses the built-in capability of your browser to play audio and video files. Make sure necessary codecs are installed, and the browser supports the video/audio file being added to the project

✨ Effects
---------

-   typing
-   flip
-   flipX
-   flipY
-   shake
-   shakeX
-   shakeY
-   wipeIn
-   wipeOut
-   zoomIn
-   zoomOut
-   blink
-   fadeIn
-   fadeOut
-   transition

🌐 Supported Browsers
---------------------

Internet Explorer

Chrome

FireFox

Safari

Opera

9+(10+ playCSS)

latest

latest

latest

latest

⭐️ Show Your Support
--------------------

Please give a ⭐️ if this project helped you!

👏 Contributing
---------------

If you have any questions or requests or want to contribute to `scenejs` or other packages, please write the issue or give me a Pull Request freely.

### Code Contributors

This project exists thanks to all the people who contribute. \[Contribute\].

Sponsors
--------

🐞 Bug Report
-------------

If you find a bug, please report to us opening a new Issue on GitHub.

📝 License
----------

This project is MIT licensed.

```
MIT License

Copyright (c) 2016 Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
