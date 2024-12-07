---
project: localForage
stars: 24988
description: 💾 Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API.
url: https://github.com/localForage/localForage
---

localForage
===========

localForage is a fast and simple storage library for JavaScript. localForage improves the offline experience of your web app by using asynchronous storage (IndexedDB or WebSQL) with a simple, `localStorage`\-like API.

localForage uses localStorage in browsers with no IndexedDB or WebSQL support. See the wiki for detailed compatibility info.

To use localForage, just drop a single JavaScript file into your page:

<script src\="localforage/dist/localforage.js"\></script\>
<script\>localforage.getItem('something', myCallback);</script\>

Try the live example.

Download the latest localForage from GitHub, or install with npm:

npm install localforage

Support
-------

Lost? Need help? Try the localForage API documentation. localForage API文档也有中文版。

If you're having trouble using the library, running the tests, or want to contribute to localForage, please look through the existing issues for your problem first before creating a new one. If you still need help, feel free to file an issue.

How to use localForage
======================

Callbacks vs Promises
---------------------

Because localForage uses async storage, it has an async API. It's otherwise exactly the same as the localStorage API.

localForage has a dual API that allows you to either use Node-style callbacks or Promises. If you are unsure which one is right for you, it's recommended to use Promises.

Here's an example of the Node-style callback form:

localforage.setItem('key', 'value', function (err) {
  // if err is non-null, we got an error
  localforage.getItem('key', function (err, value) {
    // if err is non-null, we got an error. otherwise, value is the value
  });
});

And the Promise form:

localforage.setItem('key', 'value').then(function () {
  return localforage.getItem('key');
}).then(function (value) {
  // we got our value
}).catch(function (err) {
  // we got an error
});

Or, use `async`/`await`:

try {
    const value \= await localforage.getItem('somekey');
    // This code runs once the value has been loaded
    // from the offline store.
    console.log(value);
} catch (err) {
    // This code runs if there were any errors.
    console.log(err);
}

For more examples, please visit the API docs.

Storing Blobs, TypedArrays, and other JS objects
------------------------------------------------

You can store any type in localForage; you aren't limited to strings like in localStorage. Even if localStorage is your storage backend, localForage automatically does `JSON.parse()` and `JSON.stringify()` when getting/setting values.

localForage supports storing all native JS objects that can be serialized to JSON, as well as ArrayBuffers, Blobs, and TypedArrays. Check the API docs for a full list of types supported by localForage.

All types are supported in every storage backend, though storage limits in localStorage make storing many large Blobs impossible.

Configuration
-------------

You can set database information with the `config()` method. Available options are `driver`, `name`, `storeName`, `version`, `size`, and `description`.

Example:

localforage.config({
    driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'myApp',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : 'some description'
});

**Note:** you must call `config()` _before_ you interact with your data. This means calling `config()` before using `getItem()`, `setItem()`, `removeItem()`, `clear()`, `key()`, `keys()` or `length()`.

Multiple instances
------------------

You can create multiple instances of localForage that point to different stores using `createInstance`. All the configuration options used by `config` are supported.

var store \= localforage.createInstance({
  name: "nameHere"
});

var otherStore \= localforage.createInstance({
  name: "otherName"
});

// Setting the key on one of these doesn't affect the other.
store.setItem("key", "value");
otherStore.setItem("key", "value2");

RequireJS
---------

You can use localForage with RequireJS:

define(\['localforage'\], function(localforage) {
    // As a callback:
    localforage.setItem('mykey', 'myvalue', console.log);

    // With a Promise:
    localforage.setItem('mykey', 'myvalue').then(console.log);
});

TypeScript
----------

If you have the `allowSyntheticDefaultImports` compiler option set to `true` in your tsconfig.json (supported in TypeScript v1.8+), you should use:

import localForage from "localforage";

Otherwise you should use one of the following:

import \* as localForage from "localforage";
// or, in case that the typescript version that you are using
// doesn't support ES6 style imports for UMD modules like localForage
import localForage \= require("localforage");

Framework Support
-----------------

If you use a framework listed, there's a localForage storage driver for the models in your framework so you can store data offline with localForage. We have drivers for the following frameworks:

-   AngularJS
-   Angular 4 and up
-   Backbone
-   Ember
-   Vue
-   NuxtJS

If you have a driver you'd like listed, please open an issue to have it added to this list.

Custom Drivers
--------------

You can create your own driver if you want; see the `defineDriver` API docs.

There is a list of custom drivers on the wiki.

Working on localForage
======================

You'll need node/npm and bower.

To work on localForage, you should start by forking it and installing its dependencies. Replace `USERNAME` with your GitHub username and run the following:

# Install bower globally if you don't have it:
npm install -g bower

# Replace USERNAME with your GitHub username:
git clone git@github.com:USERNAME/localForage.git
cd localForage
npm install
bower install

Omitting the bower dependencies will cause the tests to fail!

Running Tests
-------------

You need PhantomJS installed to run local tests. Run `npm test` (or, directly: `grunt test`). Your code must also pass the linter.

localForage is designed to run in the browser, so the tests explicitly require a browser environment. Local tests are run on a headless WebKit (using PhantomJS).

When you submit a pull request, tests will be run against all browsers that localForage supports on Travis CI using Sauce Labs.

Library Size
------------

As of version 1.7.3 the payload added to your app is rather small. Served using gzip compression, localForage will add less than 10k to your total bundle size:

minified

\`~29kB\`

gzipped

\`~8.8kB\`

brotli'd

\`~7.8kB\`

License
=======

This program is free software; it is distributed under an Apache License.

* * *

Copyright (c) 2013-2016 Mozilla (Contributors).
