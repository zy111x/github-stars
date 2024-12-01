---
project: tiny-slider
stars: 5262
description: Vanilla javascript slider for all purposes.
url: https://github.com/ganlanyuan/tiny-slider
---

Tiny Slider 2
=============

Tiny slider for all purposes, inspired by Owl Carousel.

Demos

Test results

_Previous versions_: v1, v0

**Warning**: tiny-slider works with static content and it works in the browser only. If the HTML is loaded dynamically, make sure to call `tns()` after its loading.

Contents
--------

-   What's new
-   Features
-   Install
-   Usage
-   Options
-   Responsive options
-   Methods
-   Custom Events
-   Fallback
-   Browser Support
-   Support
-   License

What's new
----------

-   Using `%` instead of `px` (No more recalculation of each slide width on window resize)
-   Using CSS Mediaqueries if supported
-   Save browser capability values to localStorage, so they will not be recheck again until browser get upgraded or user clear the localStorage manually.
-   More options available for `responsive`. (Start from v2.1.0, issue 53)
-   Insert `controls` and `nav` _before_ slider instead of after (issue 4)
-   Move `autoplay` button out of `nav` container. (Start from v2.1.0)
-   Some selector changes in `tiny-slider.scss`

_Migrating to v2_

-   Update `controls` and / or `nav` styles based on their position changes.
-   Update the `slider selectors` accordingly if used in your CSS or JS.
-   Update styles related to `autoplay` button.

_top↑_

Features
--------

 

Carousel \*

Gallery

Horizontal \*

Vertical

Percentage Width \*

Fixed Width

Auto Width

Loop

✓

✓

✓

✓

✓

Rewind

✓

✓

✓

✓

 

Slide by

✓

✓

✓

✓

 

Gutter

✓

✓

✓

✓

✓

Edge padding

✓

✓

✓

✓

 

Center (v2.9.2+)

✓

✓

✓

 

 

Responsive

✓

✓

✓

✓

✓

Lazyload

✓

✓

✓

✓

✓

Autoplay

✓

✓

✓

✓

✓

Auto height

✓

✓

✓

✓

✓

Touch/drag

✓

✓

✓

✓

✓

Arrow keys

✓

✓

✓

✓

✓

Customize controls/nav

✓

✓

✓

✓

✓

Accessibility

✓

✓

✓

✓

✓

Respond to DOM visibility changes

✓

✓

✓

✓

✓

Custom events

✓

✓

✓

✓

✓

Nested

✓

✓

✓

✓

✓

\* Default

_top↑_

Install
-------

`bower install tiny-slider` or `npm install tiny-slider`

Usage
-----

#### 1\. Add CSS (and IE8 polyfills if needed)

<link rel\="stylesheet" href\="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"\>
<!--\[if (lt IE 9)\]><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.helper.ie8.js"></script><!\[endif\]-->

#### 2\. Add markup

<div class\="my-slider"\>
  <div\></div\>
  <div\></div\>
  <div\></div\>
</div\>
<!-- or ul.my-slider > li -->

#### 3\. Call tns()

Option A: Add tiny-slider.js to your page:

<script src\="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"\></script\>
<!-- NOTE: prior to v2.2.1 tiny-slider.js need to be in <body> -->

Option B: Import `tns` via `webpack` or `rollup`:

// yourScript.js
import { tns } from "./node\_modules/tiny-slider/src/tiny-slider"

Option C: Import `tns` directly start from v2.8.2

<script type\="module"\>
  import {tns} from './src/tiny-slider.js';

  var slider \= tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });
  </script\>

_top↑_

Options
-------

Option

Type

Description

`container`

Node | String

Default: `'.slider'`.  
The slider container element or selector.

`mode`

"carousel" | "gallery"

Default: "carousel".  
Controls animation behaviour.  
With `carousel` everything slides to the side, while `gallery` uses fade animations and changes all slides at once.

`axis`

"horizontal" | "vertical"

Default: "horizontal".  
The axis of the slider.

`items`

positive number

Default: 1.  
Number of slides being displayed in the viewport.  
If slides less or equal than `items`, the slider won't be initialized.

`gutter`

positive integer

Default: 0.  
Space between slides (in "px").

`edgePadding`

positive integer

Default: 0.  
Space on the outside (in "px").

`fixedWidth`

positive integer | false

Default: false.  
Controls `width` attribute of the slides.

`autoWidth`

Boolean

Default: false.  
If `true`, the width of each slide will be its natural width as a `inline-block` box.

`viewportMax` (was `fixedWidthViewportWidth`)

positive integer | false

Default: false.  
Maximum viewport width for `fixedWidth`/`autoWidth`.

`slideBy`

positive number | "page"

Default: 1.  
Number of slides going on one "click".

`center` (v2.9.2+)

Boolean

Default: false.  
Center the active slide in the viewport.

`controls`

Boolean

Default: true.  
Controls the display and functionalities of `controls` components (prev/next buttons). If `true`, display the `controls` and add all functionalities.  
For better accessibility, when a prev/next button is focused, user will be able to control the slider using left/right arrow keys.

`controlsPosition`

"top" | "bottom"

Default: "top".  
Controls `controls` position.

`controlsText`

(Text | Markup) Array

Default: \["prev", "next"\].  
Text or markup in the prev/next buttons.

`controlsContainer`

Node | String | false

Default: false.  
The container element/selector around the prev/next buttons.  
`controlsContainer` must have at least 2 child elements.

`prevButton`

Node | String | false

Default: false.  
Customized previous buttons.  
This option will be ignored if `controlsContainer` is a Node element or a CSS selector.

`nextButton`

Node | String | false

Default: false.  
Customized next buttons.  
This option will be ignored if `controlsContainer` is a Node element or a CSS selector.

`nav`

Boolean

Default: true.  
Controls the display and functionalities of `nav` components (dots). If `true`, display the `nav` and add all functionalities.

`navPosition`

"top" | "bottom"

Default: "top".  
Controls `nav` position.

`navContainer`

Node | String | false

Default: false.  
The container element/selector around the dots.  
`navContainer` must have at least same number of children as the slides.

`navAsThumbnails`

Boolean

Default: false.  
Indicate if the dots are thumbnails. If `true`, they will always be visible even when more than 1 slides displayed in the viewport.

`arrowKeys`

Boolean

Default: false.  
Allows using arrow keys to switch slides.

`speed`

positive integer

Default: 300.  
Speed of the slide animation (in "ms").

`autoplay`

Boolean

Default: false.  
Toggles the automatic change of slides.

`autoplayPosition`

"top" | "bottom"

Default: "top".  
Controls `autoplay` position.

`autoplayTimeout`

positive integer

Default: 5000.  
Time between 2 `autoplay` slides change (in "ms").

`autoplayDirection`

"forward" | "backward"

Default: "forward".  
Direction of slide movement (ascending/descending the slide index).

`autoplayText`

Array (Text | Markup)

Default: \["start", "stop"\].  
Text or markup in the autoplay start/stop button.

`autoplayHoverPause`

Boolean

Default: false.  
Stops sliding on mouseover.

`autoplayButton`

Node | String | false

Default: false.  
The customized autoplay start/stop button or selector.

`autoplayButtonOutput`

Boolean

Default: true.  
Output `autoplayButton` markup when `autoplay` is true but a customized `autoplayButton` is not provided.

`autoplayResetOnVisibility`

Boolean

Default: true.  
Pauses the sliding when the page is invisible and resumes it when the page become visiable again. (Page Visibility API)

`animateIn`

String

Default: "tns-fadeIn".  
Name of intro animation `class`.

`animateOut`

String

Default: "tns-fadeOut".  
Name of outro animation `class`.

`animateNormal`

String

Default: "tns-normal".  
Name of default animation `class`.

`animateDelay`

positive integer | false

Default: false.  
Time between each `gallery` animation (in "ms").

`loop`

Boolean

Default: true.  
Moves throughout all the slides seamlessly.

`rewind`

Boolean

Default: false.  
Moves to the opposite edge when reaching the first or last slide.

`autoHeight`

Boolean

Default: false.  
Height of slider container changes according to each slide's height.

`responsive`

Object: {  
 breakpoint: {  
  key: value  
 }  
} | false

Default: false.  
Breakpoint: Integer.  
Defines options for different viewport widths (see Responsive Options).  

`lazyload`

Boolean

Default: false.  
Enables lazyloading images that are currently not viewed, thus saving bandwidth (see demo).  
NOTE:  
\+ Class `.tns-lazy-img` need to be set on every image you want to lazyload if option `lazyloadSelector` is not specified;  
\+ `data-src` attribute with its value of the real image `src` is required;  
\+ `width` attribute for every image is required for `autoWidth` slider.

`lazyloadSelector` (v2.9.1+)

String

Default: `'.tns-lazy-img'`.  
The CSS selector for lazyload images.

`touch`

Boolean

Default: true.  
Activates input detection for touch devices.

`mouseDrag`

Boolean

Default: false.  
Changing slides by dragging them.

`swipeAngle`

positive integer | Boolean

Default: 15.  
Swipe or drag will not be triggered if the angle is not inside the range when set.

`preventActionWhenRunning` (v2.9.1+)

Boolean

Default: false.  
Prevent next transition while slider is transforming.

`preventScrollOnTouch` (v2.9.1+)

"auto" | "force" | false

Default: false.  
Prevent page from scrolling on `touchmove`. If set to "auto", the slider will first check if the touch direction matches the slider axis, then decide whether prevent the page scrolling or not. If set to "force", the slider will always prevent the page scrolling.

`nested`

"inner" | "outer" | false

Default: false.  
Define the relationship between nested sliders. (see demo)  
Make sure you run the inner slider first, otherwise the height of the inner slider container will be wrong.

`freezable`

Boolean

Default: true.  
Indicate whether the slider will be frozen (`controls`, `nav`, `autoplay` and other functions will stop work) when all slides can be displayed in one page.

`disable`

Boolean

Default: false.  
Disable slider.

`startIndex`

positive integer

Default: 0.  
The initial `index` of the slider.

`onInit`

Function | false

Default: false.  
Callback to be run on initialization.

`useLocalStorage`

Boolean

Default: true.  
Save browser capability variables to localStorage and without detecting them everytime the slider runs if set to `true`.

`nonce`

String / false

Default: false.  
Optional Nonce attribute for inline style tag to allow slider usage without \`unsafe-inline Content Security Policy source.

NOTE: Prior to v2.0.2, options "container", "controlsContainer", "navContainer" and "autoplayButton" still need to be DOM elements. E.g. container: document.querySelector('.my-slider')

_top↑_

Responsive options
------------------

The following options can be redefined in `responsive` field: `startIndex`, `items`, `slideBy`, `speed`, `autoHeight`, `fixedWidth`, `edgePadding`, `gutter`, `center`, `controls`, `controlsText`, `nav`, `autoplay`, `autoplayHoverPause`, `autoplayResetOnVisibility`, `autoplayText`, `autoplayTimeout`, `touch`, `mouseDrag`, `arrowKeys`, `disable`

<script\>
  var slider = tns({
    container: '.my-slider',
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });
</script\>

NOTE:

-   The breakpoints behave like `(min-width: breakpoint)` in CSS, so an undefined option will be inherited from previous small breakpoints.
-   `fixedWidth` can only be changed to other positive integers. It can't be changed to negative integer, 0 or other data type. _top↑_

Methods
-------

The slider returns a slider object with some properties and methods once it's initialized:

{
  version: version, // tiny-slider version
  getInfo: info(),
  events: events, // Object
  goTo: goTo(),
  play: play(),
  pause: pause(),
  isOn: isOn, // Boolean
  updateSliderHeight: updateInnerWrapperHeight(),
  refresh: initSliderTransform(),
  destroy: destroy(),
  rebuild: rebuild()
}

To get the slider information, you can either use the `getInfo()` method or subscribe to an Event. Both return an Object:

{
                container: container, // slider container
               slideItems: slideItems, // slides list
             navContainer: navContainer, // nav container
                 navItems: navItems, // dots list
        controlsContainer: controlsContainer, // controls container
              hasControls: hasControls, // indicate if controls exist
               prevButton: prevButton, // previous button
               nextButton: nextButton, // next button
                    items: items, // items on a page
                  slideBy: slideBy // items slide by
               cloneCount: cloneCount, // cloned slide count
               slideCount: slideCount, // original slide count
            slideCountNew: slideCountNew, // total slide count after initialization
                    index: index, // current index
              indexCached: indexCached, // previous index
             displayIndex: getCurrentSlide(), // display index starts from 1
               navCurrent: navCurrent, // current dot index
         navCurrentCached: navCurrentCached, // previous dot index
                    pages: pages, // visible nav indexes
              pagesCached: pagesCached,
                    sheet: sheet,
                    event: e || {}, // event object if available
};

#### getInfo

Get slider information.

slider.getInfo();

document.querySelector('.next-button').onclick \= function () {
  // get slider info
  var info \= slider.getInfo(),
      indexPrev \= info.indexCached,
      indexCurrent \= info.index;

  // update style based on index
  info.slideItems\[indexPrev\].classList.remove('active');
  info.slideItems\[indexCurrent\].classList.add('active');
};

#### goTo

Go to specific slide by number or keywords.

slider.goTo(3);
slider.goTo('prev');
slider.goTo('next');
slider.goTo('first');
slider.goTo('last');

document.querySelector('.goto-button').onclick \= function () {
  slider.goTo(3);
};

#### play

Programmatically start slider autoplay when `autoplay: true`.

slider.play();

#### pause

Programmatically stop slider autoplay when `autoplay: true`.

slider.pause();

#### updateSliderHeight

Manually adjust slider height when `autoHeight` is `true`.

slider.updateSliderHeight();

#### destroy

Destroy the slider.

slider.destroy();

#### rebuild

Rebuild the slider after destroy.

slider \= slider.rebuild();
// this method returns a new slider Object with the same options with the original slider

Custom Events
-------------

Available events include: `indexChanged`, `transitionStart`, `transitionEnd`, `newBreakpointStart`, `newBreakpointEnd`, `touchStart`, `touchMove`, `touchEnd`, `dragStart`, `dragMove` and `dragEnd`.

var customizedFunction \= function (info, eventName) {
  // direct access to info object
  console.log(info.event.type, info.container.id);
}

// bind function to event
slider.events.on('transitionEnd', customizedFunction);

// remove function binding
slider.events.off('transitionEnd', customizedFunction);

_top↑_

#### Fallback

.no-js .your-slider { overflow-x: auto; }
.no-js .your-slider \> div { float: none; }

Browser Support
---------------

**Desktop:** Firefox 8+ ✓ Chrome 15+ ✓ (Should works on _Chrome 4-14_ as well, but I couldn't test it.) Safari 4+ ✓ Opera 12.1+ ✓ IE 8+ ✓

**Mobile:** Android Browser 4.2+ ✓ Chrome Mobile 63+ ✓ Firefox Mobile 28+ ✓ Maxthon 4+ ✓

Support
-------

  
Live tests and Automated Tests  
  
  
Live tests, Screenshots and Automated Tests  
  
Cdnjs  
Images on demo page are from https://unsplash.com/.

License
-------

This project is available under the MIT license.
