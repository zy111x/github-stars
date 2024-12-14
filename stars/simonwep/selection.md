---
project: selection
stars: 2715
description: ✨ Viselect - A high performance and lightweight library to add a visual way of selecting elements, just like on your Desktop. Zero dependencies, super small. Support for major frameworks!
url: https://github.com/simonwep/selection
---

### 

### Visual dom-selection library

### Features 🤘

-   🌟 Modern bundle
-   🔩 Ultra tiny (~4kb)
-   👌 Simple usage
-   ⚡ Highly optimized
-   ✔ Zero dependencies
-   📱 Mobile / touch support
-   🖱 Vertical and horizontal scroll support
-   💪 Hardened (over 3 years old and used in many apps)
-   🖼 Support for major frameworks (WIP)

### Getting started

Check out the documentation for the package you want to use:

-   @viselect/vanilla - To be used with plain JavaScript or TypeScript.
-   @viselect/preact - Preact wrapper.
-   @viselect/react - React wrapper.
-   @viselect/vue - Vue3 wrapper.

> Check out recipes for commonly asked questions and how to solve them using the standard library! For information about events and more check out the vanilla readme!

### Browser support

This library will always produce an ESNext bundle. If you want to support legacy browsers, please use the feature of your bundler to transpile dependencies. In case of webpack and babel (give vite a try, it's awesome) you'll have to install corresponding plugins such as babel-plugin-proposal-optional-chaining and include the dependency from `node_modules` which is normally entirely excluded from being processed.

I do this to provide maximum flexibility and give those who target ESNext a chance to make full use of how this library is bundled. Everything else is just a matter of configuration :)

### Is this library the right choice for me?

Viselect primarily focuses on being a high-performant engine to select elements with various boundaries, behaviors, and modes in your browser. Viselect is to "full-blown libraries" what is popper.js to tippy.js - the _core_ of your feature.

### Development

Use the following commands to work on this locally (we use lerna to manage this):

-   `npm run dev` _\- Spawns a dev-server for all packages. Every framework-dependent package is bundled with the vanilla version._
-   `npm run build` _\- Builds all packages in parallel._
-   `npm run lint:fix` _\- Lints and fixes all errors in all packages._

For the development servers vite is used. It's superb, you should give it a try. To bundle it, we use rollup (which is btw also used by vite behind the scenes) to have full control over how the bundle looks like.

### Releasing a new version

This project is managed via lerna. To bump the version and publish a new one run the following commands:

-   `lerna version`
-   `lerna publish from-package`

### You want to contribute?

That's awesome! Check out the contribution guidelines to get started :)
