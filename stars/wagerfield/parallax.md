---
project: parallax
stars: 16503
description: Parallax Engine that reacts to the orientation of a smart device
---

Parallax Engine that reacts to the orientation of a smart device. Where no gyroscope or motion detection hardware is available, the position of the cursor is used instead.

Check out the **demo** to see it in action!

Table of Contents
=================

-   1\. Getting started
    -   1.1 Installation
    -   1.2 Preparations
    -   1.3 Run Parallax
-   2\. Configuration
    -   2.1 Programmatic vs Declarative
    -   2.2 Configuration Options
-   3\. Methods
-   4\. Development
    -   4.1 Running the Project
    -   4.2 Opening an Issue
    -   4.3 Known Issues
-   5\. FAQ
-   6\. Information
    -   6.1 License
    -   6.2 Contributors

1\. Getting started
===================

1.1 Installation
----------------

### 1.1 a) Using the CDN

1.  Add `<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>` to your markup
2.  Done!

Many thanks to the fine folks over at cdnjs for hosting our library.

### 1.1 b) Beginners

1.  Head over to the releases Section
2.  Download `compiled.zip` from the latest release
3.  Extract the ZIP archive and locate the `parallax.js` and `parallax.min.js` files
    -   Use `parallax.js` if you want to snoop around in the code
    -   Use `parallax.min.js` for deployment, because it has a smaller file size
4.  Copy the file of your choice into your project directory
5.  So far, so good!

### 1.1 c) Professionals

`npm i -s parallax-js`

You will then find the source code in `node_modules/parallax-js/src/parallax.js` and the browserified, babelified, uglified, production-ready version in `node_modules/parallax-js/dist/parallax.min.js`

1.2 Preparations
----------------

### Include the Script

If you use the compiled version, either downloaded from the releases page, or copied from the `dist` folder, include the script like any other Javascript library:  
`<script src="path/to/parallax.js"></script>`

Of course, when you've installed via npm, and use browserify/babel, you can also simply do:  
`import Parallax from 'parallax-js'` or  
`const Parallax = require('parallax-js')`

### Create your HTML elements

Each Parallax.js instance needs a container element, the scene. You're free to identify it by any means you want, but for now, let's use an ID:

<div id\="scene"\>
</div\>

Per default, all direct child elements of the scene will become moving objects, the layers. You can change this to a custom query selector, but again, we're going with the easiest approach for now:

<div id\="scene"\>
  <div\>My first Layer!</div\>
  <div\>My second Layer!</div\>
</div\>

While all other options and parameters are optional, with sane defaults, and can be set programatically, each layer needs a `data-depth` attribute. The movement applied to each layer will be multiplied by its depth attribute.

<div id\="scene"\>
  <div data-depth\="0.2"\>My first Layer!</div\>
  <div data-depth\="0.6"\>My second Layer!</div\>
</div\>

1.3 Run Parallax
----------------

As soon as your DOM is ready and loaded, you can create a new Parallax.js instance, providing your scene element as first parameter.

var scene \= document.getElementById('scene');
var parallaxInstance \= new Parallax(scene);

That's it, you're running Parallax.js now!

2\. Configuration
=================

2.1 Programmatic vs Declarative
-------------------------------

Most configuration settings can be declared either as data-value attribute of the scene element, or property of the configuration object. The programmatic approach will take priority over the data-value attributes set in the HTML.  
Some options can also be set at run-time via instance methods.

Declarative:

<div data-relative-input\="true" id\="scene"\>
  <div data-depth\="0.2"\>My first Layer!</div\>
  <div data-depth\="0.6"\>My second Layer!</div\>
</div\>

Programmatic:

var scene \= document.getElementById('scene');
var parallaxInstance \= new Parallax(scene, {
  relativeInput: true
});

Using Methods at Runtime:

parallaxInstance.friction(0.2, 0.2);

2.2 Configuration Options
-------------------------

### relativeInput

Property: **relativeInput**  
Attribute: **data-relative-input**

Value: _boolean_  
Default: _false_

Makes mouse input relative to the position of the scene element.  
No effect when gyroscope is used.

### clipRelativeInput

Property: **clipRelativeInput**  
Attribute: **data-clip-relative-input**

Value: _boolean_  
Default: _false_

Clips mouse input to the bounds of the scene. This means the movement stops as soon as the edge of the scene element is reached by the cursor.  
No effect when gyroscope is used, or `hoverOnly` is active.

### hoverOnly

Property: **hoverOnly**  
Attribute: **data-hover-only**

Value: _boolean_  
Default: _false_

Parallax will only be in effect while the cursor is over the scene element, otherwise all layers move back to their initial position. Works best in combination with `relativeInput`.  
No effect when gyroscope is used.

### inputElement

Property: **inputElement**  
Attribute: **data-input-element**  
Method: **setInputElement(HTMLElement)**

Value: _null_ or _HTMLElement_ / _String_  
Default: _null_

Allows usage of a different element for cursor input.  
The configuration property expects an HTMLElement, the data value attribute a query selector string.  
Will only work in combination with `relativeInput`, setting `hoverOnly` might make sense too.  
No effect when gyroscope is used.

### calibrateX & calibrateY

Property: **calibrateX** & **calibrateY**  
Attribute: **data-calibrate-x** & **data-calibrate-y**  
Method: **calibrate(x, y)**

Value: _boolean_  
Default: _false_ for X, _true_ for Y

Caches the initial X/Y axis value on initialization and calculates motion relative to this.  
No effect when cursor is used.

### invertX & invertY

Property: **invertX** & **invertY**  
Attribute: **data-invert-x** & **data-invert-y**  
Method: **invert(x, y)**

Value: _boolean_  
Default: _true_

Inverts the movement of the layers relative to the input. Setting both of these values to _false_ will cause the layers to move with the device motion or cursor.

### limitX & limitY

Property: **limitX** & **limitY**  
Attribute: **data-limit-x** & **data-limit-y**  
Method: **limit(x, y)**

Value: _false_ or _integer_  
Default: _false_

Limits the movement of layers on the respective axis. Leaving this value at false gives complete freedom to the movement.

### scalarX & scalarY

Property: **scalarX** & **scalarY**  
Attribute: **data-scalar-x** & **data-scalar-y**  
Method: **scalar(x, y)**

Value: _float_  
Default: _10.0_

Multiplies the input motion by this value, increasing or decreasing the movement speed and range.

### frictionX & frictionY

Property: **frictionX** & **frictionY**  
Attribute: **data-friction-x** & **data-friction-y**  
Method: **friction(x, y)**

Value: _float_ between _0_ and _1_  
Default: _0.1_

Amount of friction applied to the layers. At _1_ the layers will instantly go to their new positions, everything below 1 adds some easing.  
The default value of _0.1_ adds some sensible easing. Try _0.15_ or _0.075_ for some difference.

### originX & originY

Property: **originX** & **originY**  
Attribute: **data-origin-x** & **data-origin-y**  
Method: **origin(x, y)**

Value: _float_ between _0_ and _1_  
Default: _0.5_

X and Y origin of the mouse input. The default of _0.5_ refers to the center of the screen or element, _0_ is the left (X axis) or top (Y axis) border, 1 the right or bottom.  
No effect when gyroscope is used.

### precision

Property: **precision**  
Attribute: **data-precision**

Value: _integer_  
Default: _1_

Decimals the element positions will be rounded to. _1_ is a sensible default which you should not need to change in the next few years, unless you have a very interesting and unique setup.

### selector

Property: **selector**  
Attribute: **data-selector**

Value: _null_ or _string_  
Default: _null_

String that will be fed to querySelectorAll on the scene element to select the layer elements. When _null_, will simply select all direct child elements.  
Use `.layer` for legacy behaviour, selecting only child elements having the class name _layer_.

### pointerEvents

Property: **pointerEvents**  
Attribute: **data-pointer-events**

Value: _boolean_  
Default: _false_

Set to _true_ to enable interactions with the scene and layer elements. When set to the default of _false_, the CSS attribute `pointer-events: none` will be applied for performance reasons.  
Setting this to _true_ alone will not be enough to fully interact with all layers, since they will be overlapping. You have to either set `position: absolute` on all layer child elements, or keep **pointerEvents** at _false_ and set `pointer-events: all` for the interactable elements only.

### onReady

Property: **onReady**

Value: _null_ or _function_  
Default: _null_

Callback function that will be called as soon as the Parallax instance has finished its setup. This might currently take up to 1000ms (`calibrationDelay * 2`).

3\. Methods
===========

In addition to the configuration methods outlined in the section above, there are a few more publicly accessible methods:

### enable()

Enables a disabled Parallax instance.

### disable()

Disables a running Parallax instance.

### destroy()

Completely destroys a Parallax instance, allowing it to be garbage collected.

### version()

Returns the version number of the Parallax library.

4\. Development
===============

4.1 Running the Project
-----------------------

1.  Clone the Repository `git clone git@github.com:wagerfield/parallax.git`
2.  Open the working directory `cd parallax`
3.  Install dependencies `npm install`
4.  Run development server `gulp watch`
5.  Open http://localhost:9000/ in browser

4.2 Opening an Issue
--------------------

If you need help relating the direct usage of this library in a project of yours, provide us with a working, running example of your work. This can be a GitHub repository, a ZIP file containing your work, a project on CodePen or JSFiddle, you name it.  
_Do not complain about something not working without giving us some way to help you._ Thank you!

4.3 Known Issues
----------------

### SVG-Bug in MS Edge

It seems MS Edge does not support the `children` or `querySelectorAll` methods for SVG elements.

### Animation running really slow

Depending on your site, the GPU might have a bit too much to do. You can try adding the CSS definition `will-change: transform` to the layer elements to speed things up. Use sparingly!

### Gyroscope not working on Android

Android will only allow access to the gyroscope o secure origins (that is, with `https` protocol).

### Gyroscope not working on iOS

Because gyroscope data had been abused to track users, it's disabled on iDevices by default and needs to be enabled by the users. You can try asking for permission via DeviceOrientationEvent.requestPermission.

Do something like:

DeviceOrientationEvent
  .requestPermission()
  .then(() \=> {
    new Parallax(scene)
  })

### Unable to manually set position of layers

Since this often lead to issues, this library forces the positioning of the layers to be absolute. If you need to override this, add `!important` to your CSS positioning.

5\. FAQ
=======

### How can I use this Library with jQuery?

jQuery will not prevent you from using this library in any way. If you want to use jQuery for selecting your Parallax scene element, you can do so too.

var scene \= $('#scene').get(0);
var parallaxInstance \= new Parallax(scene);

### How can I interact with my layers?

Check out the section on the configuration option `pointerEvents` above.

### How do I get the demo files to work?

Either download compiled\_with\_examples.zip from the GitHub Releases section, or follow section 4.1

6\. Information
===============

6.1 License
-----------

This project is licensed under the terms of the MIT License. Enjoy!

6.2 Authors
-----------

Matthew Wagerfield: @wagerfield  
René Roth: Website