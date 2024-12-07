---
project: bowser
stars: 5520
description: a browser detector
url: https://github.com/bowser-js/bowser
---

Bowser
------

A small, fast and rich-API browser/platform/engine detector for both browser and node.

-   **Small.** Use plain ES5-version which is ~4.8kB gzipped.
-   **Optimized.** Use only those parsers you need — it doesn't do useless work.
-   **Multi-platform.** It's browser- and node-ready, so you can use it in any environment.

Don't hesitate to support the project on Github or OpenCollective if you like it ❤️ Also, contributors are always welcome!

Contents
========

-   Overview
-   Use cases

Overview
========

The library is made to help to detect what browser your user has and gives you a convenient API to filter the users somehow depending on their browsers. Check it out on this page: https://bowser-js.github.io/bowser-online/.

### ⚠️ Version 2.0 breaking changes ⚠️

Version 2.0 has drastically changed the API. All available methods are on the docs page.

_For legacy code, check out the 1.x branch and install it through `npm install bowser@1.9.4`._

Use cases
=========

First of all, require the library. This is a UMD Module, so it will work for AMD, TypeScript, ES6, and CommonJS module systems.

const Bowser \= require("bowser"); // CommonJS

import \* as Bowser from "bowser"; // TypeScript

import Bowser from "bowser"; // ES6 (and TypeScript with --esModuleInterop enabled)

By default, the exported version is the _ES5 transpiled version_, which **do not** include any polyfills.

In case you don't use your own `babel-polyfill` you may need to have pre-built bundle with all needed polyfills. So, for you it's suitable to require bowser like this: `require('bowser/bundled')`. As the result, you get a ES5 version of bowser with `babel-polyfill` bundled together.

You may need to use the source files, so they will be available in the package as well.

Browser props detection
-----------------------

Often we need to pick users' browser properties such as the name, the version, the rendering engine and so on. Here is an example how to do it with Bowser:

const browser \= Bowser.getParser(window.navigator.userAgent);

console.log(\`The current browser name is "${browser.getBrowserName()}"\`);
// The current browser name is "Internet Explorer"

or

const browser \= Bowser.getParser(window.navigator.userAgent);
console.log(browser.getBrowser());

// outputs
{
  name: "Internet Explorer"
  version: "11.0"
}

or

console.log(Bowser.parse(window.navigator.userAgent));

// outputs
{
  browser: {
    name: "Internet Explorer"
    version: "11.0"
  },
  os: {
    name: "Windows"
    version: "NT 6.3"
    versionName: "8.1"
  },
  platform: {
    type: "desktop"
  },
  engine: {
    name: "Trident"
    version: "7.0"
  }
}

Filtering browsers
------------------

You could want to filter some particular browsers to provide any special support for them or make any workarounds. It could look like this:

const browser \= Bowser.getParser(window.navigator.userAgent);
const isValidBrowser \= browser.satisfies({
  // declare browsers per OS
  windows: {
    "internet explorer": ">10",
  },
  macos: {
    safari: ">10.1"
  },

  // per platform (mobile, desktop or tablet)
  mobile: {
    safari: '>=9',
    'android browser': '>3.10'
  },

  // or in general
  chrome: "~20.1.1432",
  firefox: ">31",
  opera: ">=22",

  // also supports equality operator
  chrome: "=20.1.1432", // will match particular build only

  // and loose-equality operator
  chrome: "~20",        // will match any 20.\* sub-version
  chrome: "~20.1"       // will match any 20.1.\* sub-version (20.1.19 as well as 20.1.12.42-alpha.1)
});

Settings for any particular OS or platform has more priority and redefines settings of standalone browsers. Thus, you can define OS or platform specific rules and they will have more priority in the end.

More of API and possibilities you will find in the `docs` folder.

### Browser names for `.satisfies()`

By default you are supposed to use the full browser name for `.satisfies`. But, there's a short way to define a browser using short aliases. The full list of aliases can be found in the file.

Similar Projects
----------------

-   Kong - A C# port of Bowser.

Contributors
------------

### Code Contributors

This project exists thanks to all the people who contribute. \[Contribute\].

### Financial Contributors

Become a financial contributor and help us sustain our community. \[Contribute\]

#### Individuals

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. \[Contribute\]

License
-------

Licensed as MIT. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
