---
project: tailwindcss-motion
stars: 1531
description: tailwindcss-motion is a Tailwind CSS Plugin made at RomboHQ. It’s a simple, yet powerful, animation library with a simple syntax.
url: https://github.com/romboHQ/tailwindcss-motion
---

✨ tailwindcss-motion β ✨
========================

tailwindcss-motion is a Tailwind CSS Plugin made at RomboHQ. It’s a simple, yet powerful, animation library with a simple syntax.

_Motion, without commotion._

⚒️ Installation
---------------

**1\. Install npm package**

npm i -D tailwindcss-motion

**2\. Add into your tailwind.config.js**

// tailwind.config.js

export default {
     content: \[...\],
     theme: {
        extend: {...},
     },
     plugins: \[require('tailwindcss-motion')\],
};

**or,** to use ESM:

import tailwindcssMotion from "tailwindcss-motion";

/\*\* @type {import('tailwindcss').Config} \*/
export default {
     content: \[...\],
     theme: {
          extend: {},
     },
     plugins: \[tailwindcssMotion\],
};

How does it work?
-----------------

We provide a simple syntax to animate any element in your Tailwind project. Instead of defining custom keyframes, we provide utility classes to animate every dimension, inline.

For example, for a slide and fade effect — you simply need `motion-translate-x-in-25 motion-opacity-in-0` or, you can use one of our presets with `motion-preset-fade`

Motion Presets
--------------

We provide a collection of presets to animate your components easily:

### Enter Animation Presets

-   **Fade**: `motion-preset-fade`
-   **Slide**:
    -   Right: `motion-preset-slide-right`
    -   Left: `motion-preset-slide-left`
    -   Up: `motion-preset-slide-up`
    -   Down: `motion-preset-slide-down`
-   **Focus**: `motion-preset-focus`
-   **Blur**:
    -   Right: `motion-preset-blur-right`
    -   Left: `motion-preset-blur-left`
    -   Up: `motion-preset-blur-up`
    -   Down: `motion-preset-blur-down`
-   **Bounce**: `motion-preset-bounce`
-   **Expand**: `motion-preset-expand`
-   **Shrink**: `motion-preset-shrink`
-   **Pop**: `motion-preset-pop`
-   **Compress**: `motion-preset-compress`
-   **Shake**: `motion-preset-shake`
-   **Wiggle**: `motion-preset-wiggle`
-   **Confetti**: `motion-preset-confetti`
-   **Typewriter**: `motion-preset-typewriter-[number of characters]`
-   **Flomoji**: `motion-preset-flomoji`

### Loop Animation Presets

-   **Pulse**: `motion-preset-pulse`
-   **Wobble**: `motion-preset-wobble`
-   **Seesaw**: `motion-preset-seesaw`
-   **Oscillate**: `motion-preset-oscillate`
-   **Stretch**: `motion-preset-stretch`
-   **Float**: `motion-preset-float`
-   **Spin**: `motion-preset-spin`
-   **Blink**: `motion-preset-blink`

### Customizing Presets

You can further customize presets using base animations and modifiers classes.

For example:

-   Add a delay to `motion-preset-fade`:

<div class\="motion-preset-fade motion-delay-500"\></div\>

-   Adjust the duration of `motion-preset-slide-right`:

<div class\="motion-preset-slide-right motion-duration-2000"\></div\>

-   Increase the height of `motion-preset-bounce`:

<div class\="motion-preset-bounce -motion-translate-y-in-150"\></div\>

Base Animations
---------------

Appart from presets, you can create your own custom animations by combining these base classes:

-   **Fade In**: `motion-opacity-in-0`
-   **Slide In**:
    -   From below: `motion-translate-y-in-100`
    -   From above: `-motion-translate-y-in-100`
-   **Scale In**: `motion-scale-in-75`
-   **Rotate In**:
    -   From 180 degrees: `motion-rotate-in-180`
    -   From -90 degrees: `-motion-rotate-in-90`
-   **Blur In**: `motion-blur-in-sm`
-   **Grayscale In**: `motion-grayscale-in`
-   **Background Color Change**: `motion-bg-in-red-500`
-   **Text Color Change**: `motion-text-in-blue-500`

### Combining Animations

You can combine multiple animations on a single element:

<div
  class\="motion-scale-in-75 motion-translate-y-in-100 motion-rotate-in-90"
\></div\>

### Exit animations

For exit animations, simply replace `in` with `out` in the class name.

Loop Animations
---------------

You can create continuous animations by adding loop variants to any base animation class. Simply replace `in` with `loop` in the class name.

### Basic Loop Usage

<div class\="motion-translate-y-loop-25"\></div\>

### Loop Modifiers

Loops support two animation styles controlled by modifiers:

-   `mirror` (default): Animation reverses direction when reaching the end
-   `reset`: Animation resets to starting position when reaching the end

<!-- Mirror animation (default) -->
<div class\="motion-translate-y-loop-25/mirror"\></div\>

<!-- Reset animation -->
<div class\="motion-translate-y-loop-25/reset"\></div\>

### Loop Count

Control how many times the animation repeats using the `motion-loop` utility:

-   `motion-loop-once`: Animation repeats once
-   `motion-loop-twice`: Animation repeats twice
-   `motion-loop-infinite`: Animation repeats indefinitely (default)

<!-- Infinite loop (default) -->
<div class\="motion-translate-y-loop-25"\></div\>

<!-- Loop twice -->
<div class\="motion-translate-y-loop-25 motion-loop-twice"\></div\>

<!-- Loop once -->
<div class\="motion-translate-y-loop-25 motion-loop-once"\></div\>

You can also target specific properties:

<!-- Only loop the translation twice -->
<div class\="motion-translate-y-loop-25 motion-loop-twice/translate"\></div\>

### Combining Loop Animations

Multiple loop animations can be combined:

<div
  class\="motion-scale-loop-75 motion-translate-y-loop-25 motion-rotate-loop-180"
\></div\>

Modifiers
---------

You can customize the duration, delay, timing function, and play state of any animation.

-   **Duration**: `motion-duration-500`
-   **Delay**: `motion-delay-500`
-   **Timing Function**: `motion-timing-spring-bouncy`
-   **Play State**: `motion-paused` or `motion-running`

For example:

<div
  class\="motion-duration-2000 motion-rotate-in-180 motion-opacity-in-0"
\></div\>

This applies a duration of 2000ms to both the rotation and opacity animations.

### Animation Play State

You can pause and resume animations using the play state utilities:

<!-- Pause the animation -->
<div class\="motion-preset-bounce motion-paused"\></div\>

<!-- Resume the animation -->
<div class\="motion-preset-bounce motion-running"\></div\>

### Modifiers for each property

You can apply modifiers to specific properties using a slash `/`.

For example:

<div
  class\="motion-delay-500/rotate motion-rotate-in-180 motion-opacity-in-0"
\></div\>

Here, the delay of 500ms is applied **only** to the rotation, not the opacity.

Ease Functions
--------------

The plugin includes custom timing functions:

a few examples are:

-   `motion-ease-spring-smooth`
-   `motion-ease-spring-snappy`
-   `motion-ease-spring-bouncy`
-   `motion-ease-spring-bounciest`
-   `motion-ease-bounce`
-   `motion-ease-bounce`
-   `motion-ease-in-quart`

Examples
--------

Landing page - https://play.tailwindcss.com/uAuVF8F1vC

Chat dialog - https://play.tailwindcss.com/gjGqEKswjQ

Low Battery Dynamic Island - https://play.tailwindcss.com/tvYFbHtNNQ

Apple Color Swatches - https://play.tailwindcss.com/cvQ3Nk3v8j

Rombo Loop - https://play.tailwindcss.com/MLdegkb9Wq

Emoji Animations - https://play.tailwindcss.com/86s55I4wmC

What's Rombo?
-------------

Rombo is an early-stage company, building tools to help companies build beautiful interactive interfaces. We're starting out with a toolkit for engineers, designers and creative marketers to animate natively inside common Workflows — like Tailwind, Figma, Webflow, Shopify & more to come! Sign up for our waitlist at https://rombo.co/tailwind/#waitlist

More Resources
--------------

-   Bringing Motion to Tailwind CSS: Building an animation plugin at Rombo - Blog post about the creation of this library
-   Animator Builder - Create animations intuitively and export them to Tailwind classes
-   UnoCSS port - Port created by @whatnickcodes
