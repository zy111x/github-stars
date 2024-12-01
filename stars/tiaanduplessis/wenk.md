---
project: wenk
stars: 691
description: :wink: Lightweight pure CSS tooltip for the greater good
url: https://github.com/tiaanduplessis/wenk
---

  

Lightweight pure CSS tooltip for the greater good

  

  

Table of Contents
-----------------

-   About
-   As Seen in
-   Why
-   Install
-   Usage
-   Demo
-   Support
-   Contributing
-   License

About
-----

**Wenk** is a Lightweight tooltip available in pure CSS, cssnext using PostCSS, Less or SCSS.

As Seen in
----------

-   20 Awesome Javascript & CSS Tooltip Libraries
-   Create Minified Tooltips in Pure CSS with Wenk

Why
---

-   It's Lightweight with the **minified version being only 733 bytes when gzipped** 😱
-   It's easy to use
-   It's easy to customize
-   It's pure CSS
-   You're already here

Install
-------

**Install with cdn**

<link rel\="stylesheet" href\="https://unpkg.com/wenk/dist/wenk.css"\>
<!-- Or -->
<link rel\="stylesheet" href\="https://cdn.rawgit.com/tiaanduplessis/wenk/master/dist/wenk.css"\>

**Install with npm**

$ npm install wenk

**Install with yarn**

$ yarn add wenk

Usage
-----

Simply add the `data-wenk` attribute to your HTML with the text you want to display.

<span data-wenk\="This is a tooltip!"\></span\>

You can display the tooltip at different positions using the `data-wenk-pos` attribute or the `.wenk--*` class. The default position is at the top.

<span data-wenk\="I'm to the right!" data-wenk-pos\="right"\>Wenk to the right!</span\>
<span data-wenk\="I'm to the left!" data-wenk-pos\="left"\>Wenk to the left!</span\>
<span data-wenk\="I'm at the bottom!" data-wenk-pos\="bottom"\>Wenk to the button!</span\>
<!-- Or -->
<span class\="wenk--right" data-wenk\="I'm to the right!"\>Wenk to the right!</span\>
<span class\="wenk--left" data-wenk\="I'm to the left!"\>Wenk to the left!</span\>
<span class\="wenk--bottom" data-wenk\="I'm at the bottom!"\>Wenk to the button!</span\>

The width of the tooltip can also easily be changed.

<span data-wenk\="I'm small!" data-wenk-length\="small"\>Small wenk!</span\>
<span data-wenk\="I'm medium!" data-wenk-length\="medium"\>Medium wenk!</span\>
<span data-wenk\="I'm large!" data-wenk-length\="large"\>Large wenk!</span\>
<span data-wenk\="I fit!" data-wenk-length\="fit"\>I fit just right!</span\>
<!-- Or -->
<span data-wenk\="I'm small!" class\="wenk-length--small"\>Small wenk!</span\>
<span data-wenk\="I'm medium!" class\="wenk-length--large"\>Medium wenk!</span\>
<span data-wenk\="I'm large!" class\="wenk-length--large"\>Large wenk!</span\>
<span data-wenk\="I fit!" class\="wenk-length--fit"\>I fit just right!</span\>

You can also align your text within the container

<p\><span data-wenk\="I'm right!" class\="wenk-align--right"\>Wenk to the right!</span\></p\>
<p\><span data-wenk\="I'm center!" class\="wenk-align--center"\>Wenk in the center!</span\></p\>

Demo
----

Check out the demo here.

Support
-------

According to doiuse.com the following browsers are currently missing support:

-   IE (8,10)
-   Opera (12.1)
-   Opera Mini (5.0-8.0)
-   IE Mobile (10)

Contributing
------------

All Contributions are welcome! Please open up an issue if you would like to help out. 😄

License
-------

Licensed under the MIT License.
