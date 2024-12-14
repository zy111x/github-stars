---
project: scrollreveal
stars: 22429
description: Animate elements as they scroll into view.
url: https://github.com/jlmakes/scrollreveal
---

  

Animate elements as they scroll into view.

  

Installation
============

Browser
-------

A simple and fast way to get started is to include this script on your page:

<script src\="https://unpkg.com/scrollreveal"\></script\>

This will create the global variable `ScrollReveal`

> Be careful using this method in production. Without specifying a fixed version number, Unpkg may delay your page load while it resolves the latest version. Learn more at unpkg.com

Module
------

$ npm install scrollreveal

#### CommonJS

const ScrollReveal \= require('scrollreveal')

#### ES2015

import ScrollReveal from 'scrollreveal'

  

Usage
=====

Installation provides us with the constructor function `ScrollReveal()`. Calling this function returns the ScrollReveal instance, the “brain” behind the magic.

> ScrollReveal employs the singleton pattern; no matter how many times the constructor is called, it will always return the same instance. This means we can call it anywhere, worry-free.

There’s a lot we can do with this instance, but most of the time we’ll be using the `reveal()` method to create animation. Fundamentally, this is how to use ScrollReveal:

<h1 class\="headline"\>
	Widget Inc.
</h1\>

ScrollReveal().reveal('.headline')

**🔎 See this demo live on JSBin**

  

* * *

### The full documentation can be found at https://scrollrevealjs.org

> If you’re using an older version of ScrollReveal, you can find legacy documentation in the wiki

* * *

  
  

License
=======

**For commercial sites, themes, projects, and applications, keep your source code private/proprietary by purchasing a Commercial License.**

Licensed under the GNU General Public License 3.0 for compatible open source projects and non-commercial use.

  

Copyright 2023 Fisssion LLC
