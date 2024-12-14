---
project: Snap.svg
stars: 13975
description: The JavaScript library for modern SVG graphics.
url: https://github.com/adobe-webplatform/Snap.svg
---

Snap.svg ·
==========

A JavaScript SVG library for the modern web. Learn more at snapsvg.io.

Follow us on Twitter.

### Install

-   Bower - `bower install snap.svg`
-   npm - `npm install snapsvg`
-   Manual Minified - https://github.com/adobe-webplatform/Snap.svg/raw/master/dist/snap.svg-min.js
-   Manual Unminified - https://raw.githubusercontent.com/adobe-webplatform/Snap.svg/master/dist/snap.svg.js

### Learn

-   About Snap.svg
-   Getting Started
-   API Reference
-   Slack Room. Invite

### Use

In your HTML file, load simply by:

<script src\="snap.svg-min.js"\></script\>

No other scripts are needed. Both the minified and uncompressed (for development) versions are in the `/dist` folder.

#### webpack

To load with webpack 2.x and 3.x, install Imports Loader (`npm i -D imports-loader`), and add the following to your webpack config:

module: {
  rules: \[
    {
      test: require.resolve('snapsvg/dist/snap.svg.js'),
      use: 'imports-loader?this=>window,fix=>module.exports=0',
    },
  \],
},
resolve: {
  alias: {
    snapsvg: 'snapsvg/dist/snap.svg.js',
  },
},

Then, in any module you’d like to require Snap, use:

```
import Snap from 'snapsvg';
```

### Build

Snap.svg uses Grunt to build.

-   Open the terminal from the Snap.svg directory:

cd Snap.svg

-   Install its command line interface (CLI) globally:

npm install -g grunt-cli

_\*You might need to use `sudo npm`, depending on your configuration._

-   Install dependencies with npm:

npm install

_\*Snap.svg uses Grunt 0.4.0. You might want to read more on their website if you haven’t upgraded since a lot has changed._

-   To build the files run

grunt

-   The results will be built into the `dist` folder.
-   Alternatively type `grunt watch` to have the build run automatically when you make changes to source files.

### Testing

Tests are located in `test` folder. To run tests, simply open `test.html` in there. Automatic tests use PhantomJS to scrap this file, so you can use it as a reference.

Alternatively, install PhantomJS and run command

grunt test

### Contribute

-   Fill out the CLA.
-   Fork the repo.
-   Create a branch:

git checkout -b my\_branch

-   Add your changes.
-   Check that tests are passing
-   Commit your changes:

git commit -am "Added some awesome stuff"

-   Push your branch:

git push origin my\_branch

-   Make a pull request to `dev`(!) branch.

_Note:_ Pull requests to other branches than `dev` or without filled CLA wouldn’t be accepted.
