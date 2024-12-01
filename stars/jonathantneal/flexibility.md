---
project: flexibility
stars: 4327
description: A JavaScript polyfill for Flexbox
---

flexibility
===========

> A JavaScript polyfill for Flexbox

Flexibility is a polyfill for the Flexible Box Layout, commonly known as Flexbox. With Flexibility, you get to design beautiful, flexible layouts on the web without sacrificing the experience in older browsers.

Flexbox lays out, aligns, and distributes elements in a container, even when their size is unknown or dynamic. To better understand Flexbox, read Chris Coyier’s excellent Complete Guide to Flexbox.

To start using Flexbox in Internet Explorer 8 & 9 or any older browser, download the flexibility.js script and include it anywhere on your page.

<script src\="flexibility.js"\></script\>

If you’re only targeting Internet Explorer 10 and lower, add a `-js-display: flex` declaration before any `display: flex` declarations in your CSS, or use PostCSS Flexibility to automate this during your build process.

.container {
	\-js-display: flex;
	display: flex;
}

If you’re targeting other browsers, use the `data-style` attribute to alert these browsers to your changes.

<div data-style\="display: flex;"\></div\>

When you’re ready to polyfill flexbox with JavaScript, use the `flexibility` method on the outermost element you would like to polyfill.

flexibility(document.documentElement);

API
---

The global `flexibility` method contains child functions for use within your own framework.

##### `flexibility.read`

Argument: `Element`

Return flexbox related styles from an element.

##### `flexibility.readAll`

Argument: `Element`

Return a list of flexbox details from a matching element or its descendants.

##### `flexibility.write`

Argument: `Details`

Writes flexbox details back to their respective elements.

##### `flexibility.writeAll`

Argument: `Array`

Writes a list of flexbox details back to their respective elements.

* * *

To learn more about Flexibility, read the support section.

If you experience an issue, read the contributing section before creating an issue.
