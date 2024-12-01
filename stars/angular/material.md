---
project: material
stars: 16536
description: Material design for AngularJS
url: https://github.com/angular/material
---

Material Design for AngularJS Apps
==================================

Material Design is a specification for a unified system of visual, motion, and interaction design that adapts across different devices. Our goal is to deliver a lean, lightweight set of AngularJS-native UI elements that implement the material design specification for use in AngularJS single-page applications (SPAs).

**AngularJS Material** is an implementation of Google's Material Design Specification (2014-2017) for AngularJS (v1.x) developers.

For an implementation of the Material Design Specification (2018+), please see the Angular Material project which is built for Angular (v2+) developers.

### End-of-Life

**AngularJS Material support has officially ended as of January 2022.** See what ending support means and read the end of life announcement. Visit material.angular.io for the actively supported Angular Material.

Find details on reporting security issues here.

AngularJS Material includes a rich set of reusable, well-tested, and accessible UI components.

Quick Links:

-   API & Demos
-   Building
-   Installing

Please note that using the latest version of AngularJS Material requires the use of **AngularJS 1.7.2** or higher.

AngularJS Material supports the browser versions defined in the `browserslist` field of our package.json. Find out more on our docs site.

AngularJS Material supports the screen reader versions listed here.

Online Documentation and Demos
------------------------------

  

-   Visit material.angularjs.org online to review the API, see the components in action via live demos, and to read our detailed guides which include the layout system, theming system, typography, and more.
-   Or you can build the documentation and demos locally; see Build Docs & Demos for details.

Building
--------

Developers can build AngularJS Material using NPM and gulp.

First install or update your local project's **npm** dependencies:

npm install

Install Gulp v3 globally:

npm install -g gulp@3

Then run the **gulp** tasks:

# To build \`angular-material.js/.css\` and \`Theme\` files in the \`/dist\` directory
gulp build

# To build the AngularJS Material Docs and Demos in \`/dist/docs\` directory
gulp docs

For development, use the `docs:watch` **NPM** script to run in dev mode:

# To build the AngularJS Material Source, Docs, and Demos in watch mode
npm run docs:watch

For more details on how the build process works and additional commands (available for testing and debugging) developers should read the Build Guide.

Installing Build (Distribution Files)
-------------------------------------

#### NPM

For developers not interested in building the AngularJS Material library... use **NPM** to install and use the AngularJS Material distribution files.

Change to your project's root directory.

# To get the latest stable version, use NPM from the command line.
npm install angular-material --save

# To get the most recent, latest committed-to-master version use:
npm install http://github.com/angular/bower-material#master --save

#### Other Dependency Managers

Visit our distribution repository for more details on how to install and use the AngularJS Material distribution files within your local project.

#### CDN

CDN versions of AngularJS Material are available.

With the Google CDN, you will not need to download local copies of the distribution files. Instead, simply reference the CDN urls to easily use those remote library files. This is especially useful when using online tools such as CodePen or Plunker.

  <head\>

    <!-- AngularJS Material CSS now available via Google CDN; version 1.2.1 used here -->
   <link rel\="stylesheet" href\="https://ajax.googleapis.com/ajax/libs/angular\_material/1.2.1/angular-material.min.css"\>

  </head\>
  <body\>

    <!-- AngularJS Material Dependencies -->
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"\></script\>
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-animate.min.js"\></script\>
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-aria.min.js"\></script\>
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-messages.min.js"\></script\>

    <!-- AngularJS Material Javascript now available via Google CDN; version 1.2.1 used here -->
    <script src\="https://ajax.googleapis.com/ajax/libs/angular\_material/1.2.1/angular-material.min.js"\></script\>
  </body\>

Developers seeking the latest, most-current build versions can use GitCDN.xyz to pull directly from our distribution repository:

  <head\>

    <!-- AngularJS Material CSS using GitCDN to load directly from \`bower-material/master\` -->
    <link rel\="stylesheet" href\="https://gitcdn.xyz/cdn/angular/bower-material/master/angular-material.css"\>

  </head\>
  <body\>

    <!-- AngularJS Material Dependencies -->
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.js"\></script\>
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-animate.js"\></script\>
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-aria.js"\></script\>
    <script src\="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-messages.min.js"\></script\>

    <!-- AngularJS Material Javascript using GitCDN to load directly from \`bower-material/master\` -->
    <script src\="https://gitcdn.xyz/cdn/angular/bower-material/master/angular-material.js"\></script\>

  </body\>

Once you have all the necessary assets installed, add `ngMaterial` and `ngMessages` as dependencies for your app:

angular.module('myApp', \['ngMaterial', 'ngMessages'\]);
