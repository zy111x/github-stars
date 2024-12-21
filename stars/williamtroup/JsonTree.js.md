---
project: JsonTree.js
stars: 277
description: 🔗 A lightweight JavaScript library that generates customizable tree views to better visualize, and edit, JSON data.
url: https://github.com/williamtroup/JsonTree.js
---

JsonTree.js


=============

> 🔗 A lightweight JavaScript library that generates customizable tree views to better visualize, and edit, JSON data.
> 
> v4.7.0

  

  
  

What features does JsonTree.js have?
====================================

-   😏 Zero-dependencies and extremely lightweight!
-   🦾 100% TypeScript, allowing greater support for React, Angular, and other libraries!
-   💻 Full API available via public functions.
-   🎏 52 language translations available!
-   📱 Fully styled in CSS/SASS, fully responsive, and compatible with the Bootstrap library!
-   🌈 Full CSS theme support (using :root variables), with dark and light themes.
-   🔍 22 data types supported by default (such as Object, Array, primitive types, and even Sets, Maps, and HTML DOM elements).
-   🔍 Custom data types support.
-   🔨 Import and convert CSV and HTML files to JSON!
-   🔣 Support to show the data types, array/object sizes, comas, and opening/closing symbols!
-   ☑️ Fully configurable per DOM element!
-   📂 Close and open all objects, arrays, sets, maps, and HTML objects.
-   🚀 Clickable values via custom triggers!
-   ⭐ Custom value rendering.
-   📃 Array paging, with configurable column count support (show array objects on different pages)!
-   💥 Compare the property name and index values in multiple page columns!
-   💧 Drag & Drop JSON, CSV, and HTML files support!
-   📋 Copy to clipboard (all JSON, a specific page, a specific JSON value, or selected JSON values).
-   ✏️ Full editing support (double click a value, property, index, or anywhere for everything).
-   🔠 Keyboard navigation keys support!
-   🎥 Toggle between regular and full-screen views.
-   ❓ Assign tooltips to any JSON value!
-   💁 Show value/key memory sizes, page numbers, and status updates in the footer!

  
  

Where can I view the examples?
==============================

You can view all the examples here.  
  

Where can I find the documentation?
===================================

All the documentation can be found here.  
  

What browsers are supported?
============================

All modern browsers (such as Google Chrome, FireFox, and Opera) are fully supported.  
  

What data types are supported?
==============================

-   `boolean` Booleans
-   `number` Numbers
-   `bigint` Big Integers
-   `string` Strings
-   `object` Objects
-   `array` Arrays
-   `date` Dates
-   `float` Floats
-   `null` Nulls
-   `symbol` Symbols
-   `function` Functions
-   `lambda` Lambdas
-   `undefined` Undefined
-   `color` Colors
-   `guid` GUIDs
-   `regexp` RegExps
-   `map` Maps
-   `set` Sets
-   `url` URLs
-   `image` Images
-   `email` Emails
-   `html` HTML
-   `any` Unknown

  
  

What languages are supported?
=============================

-   `af` Afrikaans
-   `ar` Arabic
-   `hy` Armenian
-   `be` Belarusian
-   `bn` Bengali
-   `bg` Bulgarian
-   `ca` Catalan
-   `zh` Chinese (simplified)
-   `da` Danish
-   `nl` Dutch
-   `en` English (default)
-   `eo` Esperanto
-   `et` Estonian
-   `fa` Farsi
-   `fi` Finnish
-   `fr` French
-   `fy` Frisian
-   `gl` Galician
-   `ka` Georgian
-   `de` German
-   `el` Greek
-   `he` Hebrew
-   `hi` Hindi
-   `hu` Hungarian
-   `is` Icelandic
-   `id` Indonesian
-   `ga` Irish
-   `it` Italian
-   `ja` Japanese
-   `ko` Korean
-   `lv` Latvian
-   `lt` Lithuanian
-   `lb` Luxembourgish
-   `ms` Malay
-   `ne` Nepali
-   `no` Norwegian
-   `pl` Polish
-   `pt` Portuguese
-   `ro` Romanian
-   `si` Sinhalese
-   `sk` Slovak
-   `sl` Slovenian
-   `es` Spanish
-   `sv` Swedish
-   `tl` Tagalog
-   `ta` Tamil
-   `zh-tw` Taiwanese
-   `te` Telugu
-   `th` Thai
-   `tr` Turkish
-   `uk` Ukrainian
-   `vi` Vietnamese

  
  

What are the most recent changes?
=================================

To see a list of all the most recent changes, click here.  
  

How do I install JsonTree.js?
=============================

You can install the library with npm into your local modules directory using the following command:

npm install jjsontree.js

Or, you can download the latest zipped up version here.

Or, you can also use the following CDN links:

https://cdn.jsdelivr.net/gh/williamtroup/JsonTree.js@4.7.0/dist/jsontree.min.js
https://cdn.jsdelivr.net/gh/williamtroup/JsonTree.js@4.7.0/dist/jsontree.js.min.css

  
  

How do I get started?
=====================

To get started using JsonTree.js, do the following steps:  
  

### 1\. Prerequisites:

Make sure you include the "DOCTYPE html" tag at the top of your HTML, as follows:

<!DOCTYPE html\>

  

### 2\. Include Files:

<link rel\="stylesheet" href\="dist/jsontree.js.css"\>
<script src\="dist/jsontree.js"\></script\>

  

### 3\. DOM Element Binding:

<div id\="tree-1" data-jsontree-js\="{ 'showObjectSizes': true, 'data': \[ true, false, 5, 10, 'A String' \] }"\>
    Your HTML.
</div\>

To see a list of all the available binding options you can use for "data-jsontree-js", click here.

To see a list of all the available custom triggers you can use for "data-jsontree-js", click here.

  

### 4\. Finishing Up:

That's it! Nice and simple. Please refer to the code if you need more help (fully documented).  
  

How do I go about customizing JsonTree.js?
==========================================

To customize, and get more out of JsonTree.js, please read through the following documentation.  
  

### 1\. Public Functions:

To see a list of all the public functions available, click here.  
  

### 2\. Configuration:

Configuration options allow you to customize how JsonTree.js will function. You can set them as follows:

<script\> 
  $jsontree.setConfiguration( {
      safeMode: false
  } );
</script\>

To see a list of all the available configuration options you can use, click here.