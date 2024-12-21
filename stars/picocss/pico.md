---
project: pico
stars: 13987
description: Minimal CSS Framework for semantic HTML
url: https://github.com/picocss/pico
---

Minimal CSS Framework for Semantic HTML
---------------------------------------

A minimalist and lightweight starter kit that prioritizes semantic syntax, making every HTML element responsive and elegant by default.

Write HTML, Add Pico CSS, and Voilà!

What’s new in v2?
-----------------

Pico v2.0 features better accessibility, easier customization with SASS, a complete color palette, a new group component, and 20 precompiled color themes totaling over 100 combinations accessible via CDN.

Read more

A Superpowered HTML Reset
-------------------------

With just the right amount of everything, Pico is great starting point for a clean and lightweight design system.

-   Class-light and Semantic
-   Great Styles with Just CSS
-   Responsive Everything
-   Light or Dark Mode
-   Easy Customization
-   Optimized Performance

Table of contents
-----------------

-   Quick start
-   Class-less version
-   Limitations
-   Documentation
-   Browser Support
-   Contributing
-   Copyright and license

Quick start
-----------

There are 4 ways to get started with pico.css:

### Install manually

Download Pico and link `/css/pico.min.css` in the `<head>` of your website.

<link rel\="stylesheet" href\="css/pico.min.css" />

### Usage from CDN

Alternatively, you can use jsDelivr CDN to link pico.css.

<link rel\="stylesheet" href\="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />

### Install with NPM

npm install @picocss/pico

Or

yarn add @picocss/pico

Then, import Pico into your SCSS file with @use:

@use "pico";

### Install with Composer

composer require picocss/pico

### Starter HTML template

<!doctype html\>
<html lang\="en"\>
  <head\>
    <meta charset\="utf-8"\>
    <meta name\="viewport" content\="width=device-width, initial-scale=1"\>
    <meta name\="color-scheme" content\="light dark" />
    <link rel\="stylesheet" href\="css/pico.min.css"\>
    <title\>Hello world!</title\>
  </head\>
  <body\>
    <main class\="container"\>
      <h1\>Hello world!</h1\>
    </main\>
  </body\>
</html\>

Class-less version
------------------

Pico provides a `.classless` version.

In this version, `<header>`, `<main>`, and `<footer>` inside `<body>` act as containers to define a centered or a fluid viewport.

Use the default `.classless` version if you need centered viewports:

<link
  rel\="stylesheet"
  href\="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css"
/>

Or use the `.fluid.classless` version if you need a fluid container:

<link
  rel\="stylesheet"
  href\="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.fluid.classless.min.css"
/>

Then just write pure HTML, and it should look great:

<!doctype html\>
<html lang\="en"\>
  <head\>
    <meta charset\="utf-8" />
    <meta name\="viewport" content\="width=device-width, initial-scale=1" />
    <meta name\="color-scheme" content\="light dark" />
    <link
      rel\="stylesheet"
      href\="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css"
    />
    <title\>Hello, world!</title\>
  </head\>
  <body\>
    <main\>
      <h1\>Hello, world!</h1\>
    </main\>
  </body\>
</html\>

Limitations
-----------

Pico CSS can be used without custom CSS for quick or small projects. However, it’s designed as a starting point, like a “reset CSS on steroids”. As Pico does not integrate any helpers or utilities `.classes`, this minimal CSS framework requires SCSS or CSS knowledge to build large projects.

Read more

Documentation
-------------

**Getting started**

-   Quick start
-   Version picker `New`
-   Color schemes
-   Class-less version
-   Conditional styling `New`
-   RTL

**Customization**

-   CSS Variables
-   Sass
-   Colors `New`

**Layout**

-   Container
-   Landmarks & section
-   Grid
-   Overflow auto `New`

**Content**

-   Typography
-   Link
-   Button
-   Table

**Forms**

-   Overview
-   Input
-   Textarea
-   Select
-   Checkboxes
-   Radios
-   Switch
-   Range

**Components**

-   Accordion
-   Card
-   Dropdown
-   Group `New`
-   Loading
-   Modal
-   Nav
-   Progress
-   Tooltip

**About**

-   What’s new in v2?
-   Mission
-   Usage scenarios
-   Brand
-   Built With

Browser Support
---------------

Pico CSS is designed and tested for the latest stable Chrome, Firefox, Edge, and Safari releases. It does not support any version of IE, including IE 11.

Contributing
------------

If you are interested in contributing to Pico CSS, please read our contributing guidelines.

Copyright and license
---------------------

Licensed under the MIT License.
