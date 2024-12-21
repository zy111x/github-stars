---
project: webpack
stars: 64898
description: A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.
url: https://github.com/webpack/webpack
---

  
  

  

webpack
=======

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

Table of Contents
-----------------

1.  Install
2.  Introduction
3.  Concepts
4.  Contributing
5.  Support
6.  Core Team
7.  Sponsoring
8.  Premium Partners
9.  Other Backers and Sponsors
10.  Gold Sponsors
11.  Silver Sponsors
12.  Bronze Sponsors
13.  Backers
14.  Special Thanks

Install
-------

Install with npm:

npm install --save-dev webpack

Install with yarn:

yarn add webpack --dev

Introduction
------------

Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

**TL;DR**

-   Bundles ES Modules, CommonJS, and AMD modules (even combined).
-   Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
-   Dependencies are resolved during compilation, reducing the runtime size.
-   Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
-   Highly modular plugin system to do whatever else your application requires.

### Get Started

Check out webpack's quick **Get Started** guide and the other guides.

### Browser Compatibility

Webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). Webpack also needs `Promise` for `import()` and `require.ensure()`. If you want to support older browsers, you will need to load a polyfill before using these expressions.

Concepts
--------

### Plugins

Webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface. This makes webpack very **flexible**.

Name

Status

Install Size

Description

mini-css-extract-plugin

Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.

compression-webpack-plugin

Prepares compressed versions of assets to serve them with Content-Encoding

html-webpack-plugin

Simplifies creation of HTML files (`index.html`) to serve your bundles

pug-plugin

Renders Pug files to HTML, extracts JS and CSS from sources specified directly in Pug.

### Loaders

Webpack enables the use of loaders to preprocess files. This allows you to bundle **any static resource** way beyond JavaScript. You can easily write your own loaders using Node.js.

Loaders are activated by using `loadername!` prefixes in `require()` statements, or are automatically applied via regex from your webpack configuration.

#### Files

Name

Status

Install Size

Description

val-loader

Executes code as module and considers exports as JS code

#### JSON

Name

Status

Install Size

Description

Loads and transpiles a CSON file

#### Transpiling

Name

Status

Install Size

Description

Loads ES2015+ code and transpiles to ES5 using Babel

Loads TypeScript like JavaScript

Loads CoffeeScript like JavaScript

#### Templating

Name

Status

Install Size

Description

Exports HTML as string, requires references to static resources

Loads Pug templates and returns a function

Compiles Pug to a function or HTML string, useful for use with Vue, React, Angular

Compiles Markdown to HTML

Loads and transforms a HTML file using PostHTML

Compiles Handlebars to HTML

#### Styling

Name

Status

Install Size

Description

`<style>`

Add exports of a module as style to DOM

Loads CSS file with resolved imports and returns CSS code

Loads and compiles a LESS file

Loads and compiles a Sass/SCSS file

Loads and compiles a Stylus file

Loads and transforms a CSS/SSS file using PostCSS

#### Frameworks

Name

Status

Install Size

Description

Loads and compiles Vue Components

Process HTML & CSS with preprocessor of choice and `require()` Web Components like first-class modules

Loads and compiles Angular 2 Components

Riot official webpack loader

Official Svelte loader

### Performance

Webpack uses async I/O and has multiple caching levels. This makes webpack fast and incredibly **fast** on incremental compilations.

### Module Formats

Webpack supports ES2015+, CommonJS and AMD modules **out of the box**. It performs clever static analysis on the AST of your code. It even has an evaluation engine to evaluate simple expressions. This allows you to **support most existing libraries** out of the box.

### Code Splitting

Webpack allows you to split your codebase into multiple chunks. Chunks are loaded asynchronously at runtime. This reduces the initial loading time.

### Optimizations

Webpack can do many optimizations to **reduce the output size of your JavaScript** by deduplicating frequently used modules, minifying, and giving you full control of what is loaded initially and what is loaded at runtime through code splitting. It can also make your code chunks **cache friendly** by using hashes.

Contributing
------------

**We want contributing to webpack to be fun, enjoyable, and educational for anyone, and everyone.** We have a vibrant ecosystem that spans beyond this single repo. We welcome you to check out any of the repositories in our organization or webpack-contrib organization which houses all of our loaders and plugins.

Contributions go far beyond pull requests and commits. Although we love giving you the opportunity to put your stamp on webpack, we also are thrilled to receive a variety of other contributions including:

-   Documentation updates, enhancements, designs, or bugfixes
-   Spelling or grammar fixes
-   README.md corrections or redesigns
-   Adding unit, or functional tests
-   Triaging GitHub issues -- especially determining whether an issue still persists or is reproducible.
-   Searching #webpack on twitter and helping someone else who needs help
-   Teaching others how to contribute to one of the many webpack's repos!
-   Blogging, speaking about, or creating tutorials about one of webpack's many features.
-   Helping others in our webpack gitter channel.

To get started have a look at our documentation on contributing.

If you are worried or don't know where to start, you can **always** reach out to Sean Larkin (@TheLarkInn) on Twitter or simply submit an issue and a maintainer can help give you guidance!

We have also started a series on our Medium Publication called The Contributor's Guide to webpack. We welcome you to read it and post any questions or responses if you still need help.

_Looking to speak about webpack?_ We'd **love** to review your talk abstract/CFP! You can email it to webpack \[at\] opencollective \[dot\] com and we can give pointers or tips!!!

### Creating your own plugins and loaders

If you create a loader or plugin, we would <3 for you to open source it, and put it on npm. We follow the `x-loader`, `x-webpack-plugin` naming convention.

Support
-------

We consider webpack to be a low-level tool used not only individually but also layered beneath other awesome tools. Because of its flexibility, webpack isn't always the _easiest_ entry-level solution, however we do believe it is the most powerful. That said, we're always looking for ways to improve and simplify the tool without compromising functionality. If you have any ideas on ways to accomplish this, we're all ears!

If you're just getting started, take a look at our new docs and concepts page. This has a high level overview that is great for beginners!!

Looking for webpack 1 docs? Please check out the old wiki, but note that this deprecated version is no longer supported.

If you want to discuss something or just need help, here is our Gitter room where there are always individuals looking to help out!

If you are still having difficulty, we would love for you to post a question to StackOverflow with the webpack tag. It is much easier to answer questions that include your webpack.config.js and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

If you are twitter savvy you can tweet #webpack with your question and someone should be able to reach out and help also.

If you have discovered a 🐜 or have a feature suggestion, feel free to create an issue on GitHub.

### License

Core Team
---------

  
Tobias Koppers

Core

  

Founder of webpack

  
Johannes Ewald

Loaders & Plugins

  

Early adopter of webpack

  
Sean T. Larkin

Public Relations

  

Founder of the core team

  
Kees Kluskens

Development

  

Sponsor

  

Sponsoring
----------

Most of the core team members, webpack contributors and contributors in the ecosystem do this open source work in their free time. If you use webpack for a serious task, and you'd like us to invest more time on it, please donate. This project increases your income/productivity too. It makes development and applications faster and it reduces the required bandwidth.

This is how we use the donations:

-   Allow the core team to work on webpack
-   Thank contributors if they invested a large amount of time in contributing
-   Support projects in the ecosystem that are of great value for users
-   Support projects that are voted most (work in progress)
-   Infrastructure cost
-   Fees for money handling

Premium Partners
----------------

Other Backers and Sponsors
--------------------------

Before we started using OpenCollective, donations were made anonymously. Now that we have made the switch, we would like to acknowledge these sponsors (and the ones who continue to donate using OpenCollective). If we've missed someone, please send us a PR, and we'll add you to this list.

Gold Sponsors
-------------

Become a gold sponsor and get your logo on our README on GitHub with a link to your site.

Silver Sponsors
---------------

Become a silver sponsor and get your logo on our README on GitHub with a link to your site.

Bronze Sponsors
---------------

Become a bronze sponsor and get your logo on our README on GitHub with a link to your site.

Backers
-------

Become a backer and get your image on our README on GitHub with a link to your site.

Special Thanks to
-----------------

(In chronological order)

-   @google for Google Web Toolkit (GWT), which aims to compile Java to JavaScript. It features a similar Code Splitting as webpack.
-   @medikoo for modules-webmake, which is a similar project. webpack was born because I wanted Code Splitting for modules-webmake. Interestingly the Code Splitting issue is still open (thanks also to @Phoscur for the discussion).
-   @substack for browserify, which is a similar project and source for many ideas.
-   @jrburke for require.js, which is a similar project and source for many ideas.
-   @defunctzombie for the browser-field spec, which makes modules available for node.js, browserify and webpack.
-   Every early webpack user, which contributed to webpack by writing issues or PRs. You influenced the direction...
-   @shama, @jhnns and @sokra for maintaining this project
-   Everyone who has written a loader for webpack. You are the ecosystem...
-   Everyone I forgot to mention here, but also influenced webpack.
