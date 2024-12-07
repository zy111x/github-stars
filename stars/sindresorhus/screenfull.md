---
project: screenfull
stars: 7092
description: Simple wrapper for cross-browser usage of the JavaScript Fullscreen API
url: https://github.com/sindresorhus/screenfull
---

screenfull
==========

> Simple wrapper for cross-browser usage of the JavaScript Fullscreen API, which lets you bring the page or any element into fullscreen. Smoothens out the browser implementation differences, so you don't have to.

**This package is ESM. Please familiarize yourself with what that implies.**  
If you cannot use ESM or need to support older browsers without using transpilation, use version 5.2.0.

**Not supported on iPhone**

**This package is feature complete. No new features will be accepted.**

#### Demo

Install
-------

Only 0.7 kB gzipped.

npm install screenfull

Also available on cdnjs _(older version)_.

Why?
----

### Screenfull

import screenfull from 'screenfull';

if (screenfull.isEnabled) {
	screenfull.request();
}

### Vanilla JavaScript

document.fullscreenEnabled \=
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW\_KEYBOARD\_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}

// This is not even entirely comprehensive. There's more.

Support
-------

Supported browsers

**Note:** Safari is supported on desktop and iPad, but not on iPhone. This is a limitation in the browser, not in Screenfull.

Documentation
-------------

### Examples

#### Fullscreen the page

import screenfull from 'screenfull';

document.getElementById('button').addEventListener('click', () \=> {
	if (screenfull.isEnabled) {
		screenfull.request();
	} else {
		// Ignore or do something else
	}
});

#### Fullscreen an element

import screenfull from 'screenfull';

const element \= document.getElementById('target');

document.getElementById('button').addEventListener('click', () \=> {
	if (screenfull.isEnabled) {
		screenfull.request(element);
	}
});

#### Hide navigation user-interface on mobile devices

import screenfull from 'screenfull';

const element \= document.getElementById('target');

document.getElementById('button').addEventListener('click', () \=> {
	if (screenfull.isEnabled) {
		screenfull.request(element, {navigationUI: 'hide'});
	}
});

#### Fullscreen an element with jQuery

import screenfull from 'screenfull';

const element \= $('#target')\[0\]; // Get DOM element from jQuery collection

$('#button').on('click', () \=> {
	if (screenfull.isEnabled) {
		screenfull.request(element);
	}
});

#### Toggle fullscreen on a image with jQuery

import screenfull from 'screenfull';

$('img').on('click', event \=> {
	if (screenfull.isEnabled) {
		screenfull.toggle(event.target);
	}
});

#### Detect fullscreen change

import screenfull from 'screenfull';

if (screenfull.isEnabled) {
	screenfull.on('change', () \=> {
		console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
	});
}

Remove listeners with:

import screenfull from 'screenfull';

screenfull.off('change', callback);

#### Detect fullscreen error

import screenfull from 'screenfull';

if (screenfull.isEnabled) {
	screenfull.on('error', event \=> {
		console.error('Failed to enable fullscreen', event);
	});
}

See the demo for more examples, and view the source.

#### Fullscreen an element with Angular.js

You can use the Angular.js binding to do something like:

<div ngsf-fullscreen\>
	<p\>This is a fullscreen element</p\>
	<button ngsf-toggle-fullscreen\>Toggle fullscreen</button\>
</div\>

#### Fullscreen the page with Angular 2

import {Directive, HostListener} from '@angular/core';
import screenfull from 'screenfull';

@Directive({
	selector: '\[toggleFullscreen\]'
})
export class ToggleFullscreenDirective {
	@HostListener('click') onClick() {
		if (screenfull.isEnabled) {
			screenfull.toggle();
		}
	}
}

<button toggleFullscreen\>Toggle fullscreen<button\>

### API

#### .request(element, options?)

Make an element fullscreen.

Accepts a DOM element and `FullscreenOptions`.

The default element is `<html>`. If called with another element than the currently active, it will switch to that if it's a descendant.

If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).

Keep in mind that the browser will only enter fullscreen when initiated by user events like click, touch, key.

Returns a promise that resolves after the element enters fullscreen.

#### .exit()

Brings you out of fullscreen.

Returns a promise that resolves after the element exits fullscreen.

#### .toggle(element, options?)

Requests fullscreen if not active, otherwise exits.

Accepts a DOM element and `FullscreenOptions`.

Returns a promise that resolves after the element enters/exits fullscreen.

#### .on(event, function)

Events: `'change' | 'error'`

Add a listener for when the browser switches in and out of fullscreen or when there is an error.

#### .off(event, function)

Remove a previously registered event listener.

#### .onchange(function)

Alias for `.on('change', function)`

#### .onerror(function)

Alias for `.on('error', function)`

#### .isFullscreen

Returns a boolean whether fullscreen is active.

#### .element

Returns the element currently in fullscreen, otherwise `undefined`.

#### .isEnabled

Returns a boolean whether you are allowed to enter fullscreen. If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).

#### .raw

Exposes the raw properties (prefixed if needed) used internally: `requestFullscreen`, `exitFullscreen`, `fullscreenElement`, `fullscreenEnabled`, `fullscreenchange`, `fullscreenerror`

FAQ
---

### How can I navigate to a new page when fullscreen?

That's not supported by browsers for security reasons. There is, however, a dirty workaround. Create a seamless iframe that fills the screen and navigate to the page in that instead.

import screenfull from 'screenfull';

document.querySelector('#new-page-button').addEventListener(() \=> {
	const iframe \= document.createElement('iframe')

	iframe.setAttribute('id', 'external-iframe');
	iframe.setAttribute('src', 'https://new-page-website.com');
	iframe.setAttribute('frameborder', 'no');
	iframe.style.position \= 'absolute';
	iframe.style.top \= '0';
	iframe.style.right \= '0';
	iframe.style.bottom \= '0';
	iframe.style.left \= '0';
	iframe.style.width \= '100%';
	iframe.style.height \= '100%';

	document.body.prepend(iframe);
	document.body.style.overflow \= 'hidden';
});

Resources
---------

-   Using the Fullscreen API in web browsers
-   MDN - Fullscreen API
-   W3C Fullscreen spec
-   Building an amazing fullscreen mobile experience
