---
project: cheerio
stars: 28854
description: The fast, flexible, and elegant library for parsing and manipulating HTML and XML.
url: https://github.com/cheeriojs/cheerio
---

cheerio
=======

##### The fast, flexible, and elegant library for parsing and manipulating HTML and XML.

  

中文文档 (Chinese Readme)

import \* as cheerio from 'cheerio';
const $ \= cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>

Installation
------------

`npm install cheerio`

Features
--------

**❤ Proven syntax:** Cheerio implements a subset of core jQuery. Cheerio removes all the DOM inconsistencies and browser cruft from the jQuery library, revealing its truly gorgeous API.

**ϟ Blazingly fast:** Cheerio works with a very simple, consistent DOM model. As a result parsing, manipulating, and rendering are incredibly efficient.

**❁ Incredibly flexible:** Cheerio wraps around parse5 for parsing HTML and can optionally use the forgiving htmlparser2. Cheerio can parse nearly any HTML or XML document. Cheerio works in both browser and server environments.

API
---

### Loading

First you need to load in the HTML. This step in jQuery is implicit, since jQuery operates on the one, baked-in DOM. With Cheerio, we need to pass in the HTML document.

// ESM or TypeScript:
import \* as cheerio from 'cheerio';

// In other environments:
const cheerio \= require('cheerio');

const $ \= cheerio.load('<ul id="fruits">...</ul>');

$.html();
//=> <html><head></head><body><ul id="fruits">...</ul></body></html>

### Selectors

Once you've loaded the HTML, you can use jQuery-style selectors to find elements within the document.

#### $( selector, \[context\], \[root\] )

`selector` searches within the `context` scope which searches within the `root` scope. `selector` and `context` can be a string expression, DOM Element, array of DOM elements, or cheerio object. `root`, if provided, is typically the HTML document string.

This selector method is the starting point for traversing and manipulating the document. Like in jQuery, it's the primary method for selecting elements in the document.

$('.apple', '#fruits').text();
//=> Apple

$('ul .pear').attr('class');
//=> pear

$('li\[class=orange\]').html();
//=> Orange

### Rendering

When you're ready to render the document, you can call the `html` method on the "root" selection:

$.root().html();
//=>  <html>
//      <head></head>
//      <body>
//        <ul id="fruits">
//          <li class="apple">Apple</li>
//          <li class="orange">Orange</li>
//          <li class="pear">Pear</li>
//        </ul>
//      </body>
//    </html>

If you want to render the `outerHTML` of a selection, you can use the `outerHTML` prop:

$('.pear').prop('outerHTML');
//=> <li class="pear">Pear</li>

You may also render the text content of a Cheerio object using the `text` method:

const $ \= cheerio.load('This is <em>content</em>.');
$('body').text();
//=> This is content.

### The "DOM Node" object

Cheerio collections are made up of objects that bear some resemblance to browser-based DOM nodes. You can expect them to define the following properties:

-   `tagName`
-   `parentNode`
-   `previousSibling`
-   `nextSibling`
-   `nodeValue`
-   `firstChild`
-   `childNodes`
-   `lastChild`

Screencasts
-----------

https://vimeo.com/31950192

> This video tutorial is a follow-up to Nettut's "How to Scrape Web Pages with Node.js and jQuery", using cheerio instead of JSDOM + jQuery. This video shows how easy it is to use cheerio and how much faster cheerio is than JSDOM + jQuery.

Cheerio in the real world
-------------------------

Are you using cheerio in production? Add it to the wiki!

Sponsors
--------

Does your company use Cheerio in production? Please consider sponsoring this project! Your help will allow maintainers to dedicate more time and resources to its development and support.

**Headlining Sponsors**

**Other Sponsors**

Backers
-------

Become a backer to show your support for Cheerio and help us maintain and improve this open source project.

License
-------

MIT
