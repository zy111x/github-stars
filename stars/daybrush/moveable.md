---
project: moveable
stars: 10176
description: Moveable! Draggable! Resizable! Scalable! Rotatable! Warpable! Pinchable! Groupable! Snappable!
url: https://github.com/daybrush/moveable
---

Moveable
--------

Moveable is Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable, Groupable, Snappable

**Github** / **Demo** / **Storybook** / **API** / **Main Project**

Moveable

**Draggable**

**Resizable**

**Scalable**

**Rotatable**

**Warpable**

**Pinchable**

**Groupable**

**Snappable**

**Clippable**

**Roundable**

**OriginDraggable**

**Selecto**

🔥 Features
-----------

-   **Draggable** refers to the ability to drag and move targets.
-   **Resizable** indicates whether the target's width and height can be increased or decreased.
-   **Scalable** indicates whether the target's x and y can be scale of transform.
-   **Rotatable** indicates whether the target can be rotated.
-   **Warpable** indicates whether the target can be warped (distorted, bented).
-   **Pinchable** indicates whether the target can be pinched with draggable, resizable, scalable, rotatable.
-   **Groupable** indicates Whether the targets can be moved in group with draggable, resizable, scalable, rotatable.
-   **Snappable** indicates whether to snap to the guideline.
-   **OriginDraggable**\* indicates Whether to drag origin.
-   **Clippable** indicates Whether to clip the target.
-   **Roundable** indicates Whether to show and drag or double click border-radius.
-   Support SVG Elements (svg, path, line, ellipse, g, rect, ...etc)
-   Support Major Browsers
-   Support 3d Transform

⚙️ Installation
---------------

### npm

$ npm i moveable

### scripts

<script src\="//daybrush.com/moveable/release/latest/dist/moveable.min.js"\></script\>

📄 Documents
------------

-   **Moveable Handbook**
-   **How to use Group**
-   **How to use custom CSS**
-   **How to make custom able**
-   API Documentation

🚀 How to use
-------------

-   All classes of moveable control box and able elements have a `moveable-` prefix. So please don't put `moveable-` class name in target.

import Moveable from "moveable";

const moveable \= new Moveable(document.body, {
    target: document.querySelector(".target"),
    // If the container is null, the position is fixed. (default: parentElement(document.body))
    container: document.body,
    draggable: true,
    resizable: true,
    scalable: true,
    rotatable: true,
    warpable: true,
    // Enabling pinchable lets you use events that
    // can be used in draggable, resizable, scalable, and rotateable.
    pinchable: true, // \["resizable", "scalable", "rotatable"\]
    origin: true,
    keepRatio: true,
    // Resize, Scale Events at edges.
    edge: false,
    throttleDrag: 0,
    throttleResize: 0,
    throttleScale: 0,
    throttleRotate: 0,
});
/\* draggable \*/
moveable.on("dragStart", ({ target, clientX, clientY }) \=> {
    console.log("onDragStart", target);
}).on("drag", ({
    target, transform,
    left, top, right, bottom,
    beforeDelta, beforeDist, delta, dist,
    clientX, clientY,
}) \=> {
    console.log("onDrag left, top", left, top);
    target!.style.left \= \`${left}px\`;
    target!.style.top \= \`${top}px\`;
    // console.log("onDrag translate", dist);
    // target!.style.transform = transform;
}).on("dragEnd", ({ target, isDrag, clientX, clientY }) \=> {
    console.log("onDragEnd", target, isDrag);
});

/\* resizable \*/
moveable.on("resizeStart", ({ target, clientX, clientY }) \=> {
    console.log("onResizeStart", target);
}).on("resize", ({ target, width, height, dist, delta, clientX, clientY }) \=> {
    console.log("onResize", target);
    delta\[0\] && (target!.style.width \= \`${width}px\`);
    delta\[1\] && (target!.style.height \= \`${height}px\`);
}).on("resizeEnd", ({ target, isDrag, clientX, clientY }) \=> {
    console.log("onResizeEnd", target, isDrag);
});

/\* scalable \*/
moveable.on("scaleStart", ({ target, clientX, clientY }) \=> {
    console.log("onScaleStart", target);
}).on("scale", ({
    target, scale, dist, delta, transform, clientX, clientY,
}: OnScale) \=> {
    console.log("onScale scale", scale);
    target!.style.transform \= transform;
}).on("scaleEnd", ({ target, isDrag, clientX, clientY }) \=> {
    console.log("onScaleEnd", target, isDrag);
});

/\* rotatable \*/
moveable.on("rotateStart", ({ target, clientX, clientY }) \=> {
    console.log("onRotateStart", target);
}).on("rotate", ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) \=> {
    console.log("onRotate", dist);
    target!.style.transform \= transform;
}).on("rotateEnd", ({ target, isDrag, clientX, clientY }) \=> {
    console.log("onRotateEnd", target, isDrag);
});

/\* warpable \*/
this.matrix \= \[
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
\];
moveable.on("warpStart", ({ target, clientX, clientY }) \=> {
    console.log("onWarpStart", target);
}).on("warp", ({
    target,
    clientX,
    clientY,
    delta,
    dist,
    multiply,
    transform,
}) \=> {
    console.log("onWarp", target);
    // target.style.transform = transform;
    this.matrix \= multiply(this.matrix, delta);
    target.style.transform \= \`matrix3d(${this.matrix.join(",")})\`;
}).on("warpEnd", ({ target, isDrag, clientX, clientY }) \=> {
    console.log("onWarpEnd", target, isDrag);
});

/\* pinchable \*/
// Enabling pinchable lets you use events that
// can be used in draggable, resizable, scalable, and rotateable.
moveable.on("pinchStart", ({ target, clientX, clientY }) \=> {
    // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
    console.log("onPinchStart");
}).on("pinch", ({ target, clientX, clientY, datas }) \=> {
    // pinch event occur before drag, rotate, scale, resize
    console.log("onPinch");
}).on("pinchEnd", ({ isDrag, target, clientX, clientY, datas }) \=> {
    // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
    console.log("onPinchEnd");
});

📦 Packages
-----------

-   **moveable**: A Vanilla Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
-   **react-moveable**: A React Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
-   **preact-moveable**: A Preact Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
-   **ngx-moveable**: An Angular Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
-   **svelte-moveable**: A Svelte Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
-   **lit-moveable**: A Lit Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
-   **vue-moveable**: A Vue Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
-   **vue3-moveable**: A Vue 3 Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.

⚙️ Developments
---------------

The `moveable` repo is managed as a monorepo with `yarn`.

yarn config set registry https://registry.npmjs.org/

The main project was made with `react` and I used `croact` to make it lighter with umd.

For development and testing, check in packages/react-moveable.

### `npm run storybook`

```
$ yarn
$ npm run packages:build
$ npm run storybook
```

Runs the app in the development mode.  
Open http://localhost:6006 to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

⭐️ Show Your Support
--------------------

Please give a ⭐️ if this project helped you!

👏 Contributing
---------------

If you have any questions or requests or want to contribute to `moveable` or other packages, please write the issue or give me a Pull Request freely.

### Code Contributors

This project exists thanks to all the people who contribute. \[Contribute\].

🐞 Bug Report
-------------

If you find a bug, please report to us opening a new Issue on GitHub.

Sponsors
--------

### Open Collective Financial Contributors

Become a financial contributor and help us sustain our community. \[Contribute\]

#### Individuals

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. \[Contribute\]

📝 License
----------

This project is MIT licensed.

```
MIT License

Copyright (c) 2019 Daybrush

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
