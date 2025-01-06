---
project: Modernizr
stars: 25679
description: Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.
url: https://github.com/Modernizr/Modernizr
---

##### Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.

-   Read this file in Portuguese-BR here
    
-   Read this file in Indonesian here
    
-   Read this file in Spanish here
    
-   Read this file in Swedish here
    
-   Read this file in Tamil here
    
-   Read this file in Kannada here
    
-   Read this file in Hindi here
    
-   Our Website is outdated and broken, please DO NOT use it (https://modernizr.com) but rather build your modernizr version from npm.
    
-   Documentation
    
-   Integration tests
    
-   Unit tests
    

Modernizr tests which native CSS3 and HTML5 features are available in the current UA and makes the results available to you in two ways: as properties on a global `Modernizr` object, and as classes on the `<html>` element. This information allows you to progressively enhance your pages with a granular level of control over the experience.

Breaking changes with v4
------------------------

-   Dropped support for node versions <= 10, please upgrade to at least version 12
    
-   Following tests got renamed:
    
    -   `class` to `es6class` to keep in line with the rest of the es-tests
-   Following tests got moved in subdirectories:
    
    -   `cookies`, `indexeddb`, `indexedblob`, `quota-management-api`, `userdata` moved into the storage subdirectory
    -   `audio` moved into the audio subdirectory
    -   `battery` moved into the battery subdirectory
    -   `canvas`, `canvastext` moved into the canvas subdirectory
    -   `customevent`, `eventlistener`, `forcetouch`, `hashchange`, `pointerevents`, `proximity` moved into the event subdirectory
    -   `exiforientation` moved into the image subdirectory
    -   `capture`, `fileinput`, `fileinputdirectory`, `formatattribute`, `input`, `inputnumber-l10n`, `inputsearchevent`, `inputtypes`, `placeholder`, `requestautocomplete`, `validation` moved into the input subdirectory
    -   `svg` moved into the svg subdirectory
    -   `webgl` moved into the webgl subdirectory
-   Following tests got removed:
    
    -   `touchevents`: discussion
    -   `unicode`: discussion
    -   `templatestrings`: duplicate of the es6 detect `stringtemplate`
    -   `contains`: duplicate of the es6 detect `es6string`
    -   `datalistelem`: A dupe of Modernizr.input.list

New Asynchronous Event Listeners
--------------------------------

Often times people want to know when an asynchronous test is done so they can allow their application to react to it. In the past, you've had to rely on watching properties or `<html>` classes. Only events on **asynchronous** tests are supported. Synchronous tests should be handled synchronously to improve speed and to maintain consistency.

The new API looks like this:

// Listen to a test, give it a callback
Modernizr.on("testname", function (result) {
  if (result) {
    console.log("The test passed!");
  } else {
    console.log("The test failed!");
  }
});

We guarantee that we'll only invoke your function once (per time that you call `on`). We are currently not exposing a method for exposing the `trigger` functionality. Instead, if you'd like to have control over async tests, use the `src/addTest` feature, and any test that you set will automatically expose and trigger the `on` functionality.

Getting Started
---------------

-   Clone or download the repository
-   Install project dependencies with `npm install`

Building Modernizr
------------------

### From javascript

Modernizr can be used programmatically via npm:

var modernizr \= require("modernizr");

A `build` method is exposed for generating custom Modernizr builds. Example:

var modernizr \= require("modernizr");

modernizr.build({}, function (result) {
  console.log(result); // the build
});

The first parameter takes a JSON object of options and feature-detects to include. See `lib/config-all.json` for all available options.

The second parameter is a function invoked on task completion.

### From the command-line

We also provide a command line interface for building modernizr. To see all available options run:

./bin/modernizr

Or to generate everything in 'config-all.json' run this with npm:

npm start
//outputs to ./dist/modernizr-build.js

Testing Modernizr
-----------------

To execute the tests using mocha-headless-chrome on the console run:

npm test

You can also run tests in your browser of choice with this command:

npm run serve-gh-pages

and navigate to these two URLs:

http://localhost:8080/test/unit.html
http://localhost:8080/test/integration.html

Integrating Modernizr with Build Tools
--------------------------------------

This section provides guidance on how to integrate Modernizr with various build tools and frameworks, making it easier to use in your projects.

### 1\. Integrating with Webpack

To integrate Modernizr with Webpack, follow these steps:

1.  **Install Modernizr**:
    
    npm install modernizr --save
    
2.  **Create a Modernizr Configuration File**: Create a file named `modernizr-config.js` in your project root:
    
    module.exports \= {
      "feature-detects": \[
        "test/feature1",
        "test/feature2",
        // Add more feature detects as needed
      \]
    };
    
3.  **Update Webpack Configuration**: Modify your Webpack configuration file (e.g., `webpack.config.js`) to include the Modernizr plugin:
    
    const ModernizrWebpackPlugin \= require('modernizr-webpack-plugin');
    
    module.exports \= {
      // Other configurations...
      plugins: \[
        new ModernizrWebpackPlugin({
          "feature-detects": \[
            "test/feature1",
            "test/feature2"
          \]
        })
      \]
    };
    
4.  **Build Your Project**: Run your Webpack build process:
    
    npm run build
    

### 2\. Integrating with Gulp

If you are using Gulp, you can integrate Modernizr as follows:

1.  **Install Modernizr**:
    
    npm install modernizr --save-dev
    
2.  **Create a Gulp Task**: In your `gulpfile.js`, add a task to build Modernizr:
    
    const gulp \= require('gulp');
    const modernizr \= require('modernizr');
    
    gulp.task('modernizr', function() {
      return modernizr.build({
        "feature-detects": \[
          "test/feature1",
          "test/feature2"
        \]
      }).pipe(gulp.dest('dist/'));
    });
    
3.  **Run the Gulp Task**: Execute the task to generate the Modernizr build:
    
    gulp modernizr
    

### 3\. Integrating with Parcel

For projects using Parcel, you can integrate Modernizr as follows:

1.  **Install Modernizr**:
    
    npm install modernizr --save
    
2.  **Create a Modernizr Configuration File**: Similar to the Webpack setup, create a `modernizr-config.js` file:
    
    module.exports \= {
      "feature-detects": \[
        "test/feature1",
        "test/feature2"
      \]
    };
    
3.  **Update Parcel Configuration**: You can use a plugin like `parcel-plugin-modernizr` to integrate Modernizr:
    
    npm install parcel-plugin-modernizr --save-dev
    
4.  **Build Your Project**: Run Parcel to build your project:
    
    parcel build index.html
    

### Conclusion

Integrating Modernizr with your build tools can enhance your web applications by allowing you to detect and respond to the capabilities of the user's browser. Follow the steps above to set up Modernizr with your preferred build tool.

For more information, refer to the Modernizr documentation.

Code of Conduct
---------------

This project adheres to the Open Code of Conduct. By participating, you are expected to honor this code.

License
-------

MIT License
