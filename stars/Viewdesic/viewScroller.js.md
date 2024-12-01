---
project: viewScroller.js
stars: 303
description: Improve your websites using fullpage scrolling
---

viewScroller.js
===============

This is small and easy to use solution that allows you to create fullpage scrolling websites.

-   Live demo

If you like it, please, donate it!

Documentation
-------------

-   Introduction
-   Compatibility
-   Installation
-   Libraries
-   Define HTML structure
-   Navigation
-   Initialization
-   Parameters
-   Functions
-   Callbacks
-   Classes
-   Layouts
-   Reporting issues
-   Websites using viewScroller.js
-   Donations
-   License & Copyrights

Introduction
------------

This plugin helps you create amazing one-page scrolling application with minimal effort.

Any suggestions about features and others acpects of this plugin would be appreciated! Don't hesitate contact me at \[my web site\] (http://www.viewdesic.com/) or via e-mail.

Compatibility
-------------

viewScroller.js works on all modern browsers (and some old ones for example IE 8-9) on any device like mobile phones, tablets and desktop computers.

It uses CSS3 transitions and jQuery animations depends on browser abilities. It's important because some old browsers like IE8 has no CSS3 support.

viewScroller.js has been tested also on Browserstack.

Installation
------------

You can just download .zip pack of this plugin from my official viewScroller.js site.

This pack includes all necessary files to start:

-   jQuery library (1.6 minimum)
-   jQuery mousewheel (3.1.13 minimum)
-   jQuery easing (1.3 minimum)
-   viewScroller.css
-   viewScroller.min.css
-   viewScroller.js
-   viewScroller.min.js
-   index.html (main sample website using the viewScroller plugin)
-   examples.css (styles for all examples)

-   examples dictionary (includes all examples)

###Moreover, you can install this plugin using:

// Bower
bower install viewscroller.js

// NuGet
PM\> Install-Package viewScroller

Libraries
---------

If you want to use viewScroller.js remember that your HTML file must have `<!DOCTYPE html>` definition.

There are some other definitions you must declared in your HTML file:

**inside `<head>` section:**

<link rel\="stylesheet" type\="text/css" href\="viewScroller.css"\>

or minified version:

<link rel\="stylesheet" type\="text/css" href\="viewScroller.min.css"\>

**before the end of `<body>` section:**

<script src\="jquery-3.1.0.min.js"\></script\>
<script src\="jquery.easing.min.js"\></script\>
<script src\="jquery.mousewheel.min.js"\></script\>

or you can use CDN links for these jQuery libraries.

**after that you can put the main viewScroller.js script:**

<script src\="viewScroller.js"\></script\>

or minified version:

<script src\="viewScroller.min.js"\></script\>

Define HTML structure
---------------------

The main node of the structure is `<div class="mainbag"></div>` inside which you can declare rest of the structure.

This example defines HTML structure with 3 mainviews (marked with vs-anchor attribute ex.: 'firstview', 'secondview', 'thirdview') and 3 subviews inside second view (marked with vs-anchor attribute ex.: 'firstsubview', 'secondsubview', 'thirdsubview'):

<div class\="mainbag"\>
	<div vs-anchor\="firstview" class\="mainview"\>View 1</div\>
	<div vs-anchor\="secondview" class\="mainview"\>
		<div class\="subbag"\>
			<div vs-anchor\="firstsubview" class\="subview"\>Subview A</div\>
			<div vs-anchor\="secondsubview" class\="subview"\>Subview B</div\>
			<div vs-anchor\="thirdsubview" class\="subview"\>Subview C</div\>
		</div\>
	</div\>
	<div vs-anchor\="thirdview" class\="mainview"\>View 3</div\>
</div\>

**Remember:**

-   Each mainview div must have class `.mainview` and each subview div must have class `.subview`.
-   All subviews must be placed inside `<div class="subbag"></div>` wrapper.
-   Each view (mainview and subview) must have it's own `vs-anchor` attribute which is equivalent of ID attribute and it's value must be unique in the whole document. This attribute enables us to navigate views.
-   You can also use `section` or `article` elements for mainview or subview sections

Navigation
----------

To create navigation over specific mainviews or subviews use `<a href>` elements, for example:

**For mainviews:**

<a href\="#firstview" class\="vs-anchor"\>View 1</a\>
<a href\="#secondview" class\="vs-anchor"\>View 2</a\>
<a href\="#thirdview" class\="vs-anchor"\>View 3</a\>

**For subviews:**

<div class\="vs-center-wrap"\>
	<div class\="vs-center"\>
		Subview A
		<div class\="pos"\>
			<input type\="button" value\="Previous subview" class\="vs-subview-prev"\>
			<a href\="#subview-a" class\="vs-anchor"\>Subview A</a\>
			<a href\="#subview-b" class\="vs-anchor"\>Subview B</a\>
			<a href\="#subview-c" class\="vs-anchor"\>Subview C</a\>
			<input type\="button" value\="Next subview" class\="vs-subview-next"\>
		</div\>
	</div\>
	...
</div\>

You must know that each `<a href ...>` element must have `vs-anchor` class.

To create navigation for changing mainviews you have to use `vs-mainview-prev` or `vs-mainview-next` class, for example:

<button class\="vs-mainview-prev"\>prev mainview</button\>
<button class\="vs-mainview-next"\>next mainview</button\>

or

<a href\="#" class\="vs-mainview-prev"\>prev mainview</a\>
<a href\="#" class\="vs-mainview-next"\>next mainview</a\>

To create navigation for changing subviews you have to use `vs-subview-prev` or `vs-subview-next` class, for example:

<button class\="vs-subview-prev"\>prev subview</button\>
<button class\="vs-subview-next"\>next subview</button\>

or

<a href\="#" class\="vs-subview-prev"\>prev subview</a\>
<a href\="#" class\="vs-subview-next"\>next subview</a\>

Moreover you can change views programmatically using built-in functions:

**Show next/previous mainview:**

`$.fn.viewScroller.showMainView('next' / 'prev');`  
example:  
`$.fn.viewScroller.showMainView('next');`

**Show next/previous subview:**

`$.fn.viewScroller.showSubView(bag-number, 'next' / 'prev');`  
example:

var currentBagNbr \= $.fn.viewScroller.getCurrentBagNbr();
$.fn.viewScroller.showSubView(currentBagIndex, 'next' / 'prev');

**Show specific view using anchor name:**

`$.fn.viewScroller.showView(anchor);`  
example:  
`$.fn.viewScroller.showView('subview-b');`

Center content of the view
--------------------------

You can center a content inside each view using predefined classes `.vs-center-wrap` and `.vs-center`:

<div vs-anchor\="firstview" class\="mainview"\>
	<div class\="vs-center-wrap"\>
        <div class\="vs-center"\>
			View 1
		</div\>
	</div\>
...
</div\>

or you can use classes from examples.css such as `.box` and `.info`:

<div class\="box"\>
	<div class\="info"\>
		View 1
	</div\>
</div\>

For more information look at the examples' source code. \[the official project website\] (http://www.viewdesic.com/viewscroller/index.html).

Initialization
--------------

To start using viewScroller.js plugin you have to define it like this:

$(document).ready(function() {
	$('.mainbag').viewScroller();
});

You can define many parameters of viewScroller.js directly inside the init function, for example:

$('.mainbag').viewScroller({
	useScrollbar: false, // Use scrollbar to change views
	changeWhenAnim: false, // Change views when they are changing
	loopMainViews: true, // Change horizontal views (mainviews) in loop mode
	loopSubViews: true	// Change vertical views (subviews) in loop mode
});

Parameters
----------

List of all parameters to use inside the viewScroller.js init function:

$('.mainbag').viewScroller({
	// Animation
	animSpeedMainView: 700, // Animation speed of mainviews: 0 - fastest
	animSpeedSubView: 700, // Animation speed of subviews: 0 - fastest
	animEffectMainView: 'easeInOutCubic', // Animation effect of mainviews change - jQuery (easing)
	animEffectSubView: 'easeInOutCubic', // Animation effect of subviews change - jQuery (easing)
	animEffectMainViewCss3: 'ease', // Animation effect of mainviews change - CSS3 (easing)
	animEffectSubViewCss3: 'ease', // Animation effect of subviews change - CSS3 (easing)

	// Steering
	useKeyboard: true, // Use keyboard to change views
	useScrollbar: false, // Use scrollbar to change views
	changeWhenAnim: true, // Change views when they are changing
	loopMainViews: false, // Change horizontal views (mainviews) in loop mode
	loopSubViews: false, // Change vertical views (subviews) in loop mode
	fitToView: true, // Will the browser fit to the closest view (works if the useScrollbar option is true)
	timeToFit: 1000, // Time between stop scrolling and start fitting to the closest view

	// Mainbag dimension
	fixedWidth: 0, // (in px) width of the mainbag - if 0 - then width = 100% of window (in px) = .mainbag { width: XXX }
	spaceMainBag: 0, // (in px) a total value of the right and the left CSS margin dimensions of the .mainbag, for example: if .mainbag { left: XXX, right: YYY} then spaceMainBag = XXX + YYY

	// Callbacks
	beforeChange: null, // Callback which is called before views change
	afterChange: null, // Callback which is called after views change
	beforeResize: null, // Callback which is called before browser window resize
	afterResize: null // Callback which is called after browser window resize
});

Functions
---------

List of all functions to change the most important parameters:

-   setAnimSpeedMainView(value)

ex.: `$.fn.viewScroller.setAnimSpeedMainView(300);`

-   setAnimSpeedSubView(value)

ex.: `$.fn.viewScroller.setAnimSpeedSubView(300);`

-   setAnimEffectMainView(easing\_func\_name)

ex.: `$.fn.viewScroller.setAnimEffectMainView('easeInOutCubic');`

-   setAnimEffectSubView(easing\_func\_name)

ex.: `$.fn.viewScroller.setAnimEffectSubView('easeInOutCubic');`

-   setAnimEffectMainViewCss3(easing\_func\_name)

ex.: `$.fn.viewScroller.setAnimEffectMainViewCss3('ease');`

-   setAnimEffectSubViewCss3(easing\_func\_name)

ex.: `$.fn.viewScroller.setAnimEffectSubViewCss3('ease');`

-   setUseKeyboard(true/false)

ex.: `$.fn.viewScroller.setUseKeyboard(true);`

-   setUseScrollbar(true/false)

ex.: `$.fn.viewScroller.setUseScrollbar(false);`

-   setChangeWhenAnim(true/false)

ex.: `$.fn.viewScroller.setChangeWhenAnim(true);`

-   setLoopSubViews(true/false)

ex.: `$.fn.viewScroller.setLoopSubViews(true);`

-   setLoopMainViews(true/false)

ex.: `$.fn.viewScroller.setLoopMainViews(true);`

-   setFitToView(true/false)

ex.: `$.fn.viewScroller.setFitToView(true);`

-   setTimeToFit(value)

ex.: `$.fn.viewScroller.setTimeToFit(800);`

-   setFixedWidth(value)

ex.: `$.fn.viewScroller.setFixedWidth(140);`

-   setSpaceMainBag(value)

ex.: `$.fn.viewScroller.setSpaceMainBag(140);`

Callbacks
---------

There are four predefined callbacks.

You can use it to take some action, for example:

$('.mainbag').viewScroller({
	beforeChange: function() { // Defines own callback before views change
		console.log('beforeChange fired!');
	},
	afterChange: function() { // Defines own callback after views change
		console.log('afterChange fired!');
	},
	beforeResize: function() { // Defines own callback before browser window resize
		console.log('beforeResize fired!');
	},
	afterResize: function() { // Defines own callback after browser window resize
		console.log('afterResize fired!');
	}
});

There is a possibility to cancel views change by returning `false` on the beforeChange function:

$('.mainbag').viewScroller({
	beforeChange: function() {
		return false; // It means that views changing will be terminated
	}
});

Predefined classes
------------------

List of all predefined classes:

var mainbag\_sel \= '.mainbag', // mainbag class
	subbag\_sel \= '.subbag', // subbag class
	mainview\_sel \= '.mainview', // mainview class
	subview\_sel \= '.subview', // subview class
	anchor\_sel \= '.vs-anchor', // Any anchor class
	active\_sel \= '.vs-active', // Active view class
	center\_sel \= '.vs-center', // Any content class inside a view
	subviewprev\_sel \= '.vs-subview-prev', // Class for the element which changes current subview to the previous subview
	subviewnext\_sel \= '.vs-subview-next', // Class for the element which changes current subview to the next subview
	mainviewprev\_sel \= '.vs-mainview-prev', // Class for the element which changes current mainview to the previous mainview
	mainviewnext\_sel \= '.vs-mainview-next', // Class for the element which changes current mainview to the next mainview
	getallmainviews\_sel \= mainbag\_sel + '>' + mainview\_sel, // Select all mainviews from the mainbag

**Remember that if you want to change some of the classes inside viewScroller.js file you need to change it in your HTML structure also.**

Layouts
-------

You can use viewScroller.js in different layouts.

Look at these examples: (.mainbag - class that includes HTML scrolling views stucture)

### Layout 1 (Live demo)

**space from the left window corner: 100px, width of mainbag = rest space of the window**

$('.mainbag').css({
	'left': '100px'
});
$.fn.viewScroller.setSpaceMainBag(100); // Sets 100px space

### Layout 2 (Live demo)

**space from the right window corner: 100px, width of mainbag = rest space of the window**

$('.mainbag').css({
	'right': '0px'
});
$.fn.viewScroller.setSpaceMainBag(100); // Sets 100px space

### Layout 3 (Live demo)

**space from the right window corner: 100px, space from the left window corner: 100px, width of mainbag = rest space of the window**

$('.mainbag').css({
	'right': '100px',
	'left': '100px'
});
$.fn.viewScroller.setSpaceMainBag(280); // Sets 200px space

### Layout 4 (Live demo)

**space from the right window corner: 100px, width of mainbag is fixed = 350px**

// Sets fixed width of mainview
$.fn.viewScroller.setFixedWidth(350);

// Sets dimension
$('.mainbag').css({
	'right': '100px'
});
$.fn.viewScroller.setSpaceMainBag(0); // Sets to 0 because of fixed width and right margin

Note: Only when the main HTML structure is set to the right, you must use setSpaceMainBag function with 0 value.

### Layout 5 (Live demo)

**space from the left window corner: 100px, width of mainbag is fixed = 350px**

// Sets fixed width of mainview
$.fn.viewScroller.setFixedWidth(350);

// Sets dimension
$('.mainbag').css({
	'left': '100px'
});
$.fn.viewScroller.setSpaceMainBag(100); // Sets to 100px because of fixed width and left margin

### Layout 6 (Live demo)

**fullscreen, width of mainbag = 100% window width**

$('.mainbag').viewScroller({
});

Note: When you use the fullscreen layout you don't have to declare any dimension parameters.

Different height of views
-------------------------

You can define a custom height of each mainview.

To set the custom height of mainviews just use viewsHeight property, ex.:

(Live demo)

$('.mainbag').viewScroller({
    viewsHeight: \[200, 0, 300, 1600, ...\]
	/\* Sets height:
	\* 200px for firstview
	\* 0 - means 100vh for secondview
    \* 300px for thirdview
	\* 1600px for fourthview
	...
	\*/
});

Note: If you use viewsHeight property just remember to declare height value for all the mainviews.

**If you want to set 100vh for some of the view, just put 0 value.**

Reporting issues
----------------

If you have some issue with this plugin just report it on the GitHub.

You can also use \[jsFiddle\] (https://jsfiddle.net/Viewdesic/50s38drr/) to reproduce this issue.

Websites using viewScroller.js
------------------------------

If you want to use viewScroller.js plugin on your site, let me know.

I will put your site address listed below :)

Donations
---------

If you like viewScroller.js just donate it to keep these projects alive!

License & Copyrights
--------------------

\[The MIT License\] (http://opensource.org/licenses/MIT)

Copyright (c) 2016 Marcin Gierczak <marcin.gierczak@viewdesic.com\>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

###IMPORTANT! **If you want to make any modification in js/css files remember to kept intact all copyright comments.**

**If you minify js/css files remember to put copyright information at the begining of these files.**
