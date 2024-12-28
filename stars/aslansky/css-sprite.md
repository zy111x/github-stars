---
project: css-sprite
stars: 732
description: css sprite generator
url: https://github.com/aslansky/css-sprite
---

css-sprite
==========

> A css sprite generator.

> Generates sprites and proper css files out of a directory of images.

> Supports retina sprites.

> Can inline base64 encoded sprites.

css-sprite is now called sprity
===============================

Version 1.0.0 had so many changes, that I decided to also change the name to something a little bit more catchy. So `css-sprite` is called sprity from now on. css-sprite will be deprecated and no development will be done here anymore.

Requirements
------------

Starting with version 0.9 `css-sprite` has no external dependencies

Install
-------

Install with npm

```
npm install css-sprite --save
```

If you want to use `css-sprite` on your cli install with:

```
npm install css-sprite -g
```

Command Line Interface
----------------------

Usage: css-sprite <out\> <src\>... \[options\]

out     path of directory to write sprite file to
src     glob strings to find source images to put into the sprite

Options:
    -b, --base64           create css with base64 encoded sprite (css file will be written to <out\>)
    -c, --css-image-path   http path to images on the web server (relative to css path or absolute path)  \[../images\]
    -f, --format           output format of the sprite (png or jpg)  \[png\]
    -n, --name             name of sprite file without file extension   \[sprite\]
    -p, --processor        output format of the css. one of css, less, sass, scss or stylus  \[css\]
    -t, --template         output template file, overrides processor option
    -r, --retina           generate both retina and standard sprites. src images have to be in retina resolution
    -s, --style            file to write css to, if omitted no css is written
    -w, --watch            continuously create sprite
    --background           background color of the sprite in hex  \[#FFFFFF\]
    --cachebuster          appends a "cache buster" to the background image in the form "?<...>" (random)  \[false\]
    --margin               margin in px between tiles  \[4\]
    --interpolation        Interpolation algorithm used when scaling retina images (nearest-neighbor|moving-average|linear|grid|cubic|lanczos)
    --opacity              background opacity of the sprite. defaults to 0 when png or 100 when jpg  \[0\]
    --orientation          orientation of the sprite image (vertical|horizontal|binary-tree)  \[vertical\]
    --prefix               prefix for the class name used in css (without .)
    --no-sort              disable sorting of layout

Programatic usage
-----------------

```
var sprite = require('css-sprite');
sprite.create(options, cb);
```

### Options

-   **src:** Array or string of globs to find source images to put into the sprite. \[required\]
-   **out:** path of directory to write sprite file to \[process.cwd()\]
-   **base64:** when true instead of creating a sprite writes base64 encoded images to css (css file will be written to `<out>`)
-   **cssPath:** http path to images on the web server (relative to css path or absolute) \[../images\]
-   **format** format of the generated sprite (png or jpg). By default uses png.
-   **name:** name of the sprite file without file extension \[sprite\]
-   **processor:** output format of the css. one of css, less, sass, scss or stylus \[css\]
-   **template:** output template file, overrides processor option (must be a mustache template)
-   **retina:** generate both retina and standard sprites. src images have to be in retina resolution
-   **background** background color of the sprite in hex. Defaults to #FFFFFF
-   **cachebuster** appends a "cache buster" to the background image in the form "?<...>" (random) \[false\]
-   **style:** file to write css to, if omitted no css is written
-   **margin:** margin in px between tiles. (Use an even number if generating retina sprites). \[4\]
-   **opacity** background opacity of the sprite between 0 and 100. Defaults to 0 when png or 100 when jpg
-   **orientation:** orientation of the sprite image (vertical|horizontal|binary-tree) \[vertical\]
-   **prefix:** prefix for the class name used in css (without .) \[icon\]
-   **sort:** enable/disable sorting of layout \[true\]
-   **interpolation** Interpolation algorithm used when scaling retina images to standard definition. Possible values are `nearest-neighbor`,`moving-average`,`linear`,`grid`,`cubic`,`lanczos`. Defaults to `grid`.

### Example

var sprite \= require('css-sprite');
sprite.create({
  src: \['./src/img/\*.png'\],
  out: './dist/img'
  name: 'sprites',
  style: './dist/scss/\_sprites.scss',
  cssPath: '../img',
  processor: 'scss'
}, function () {
  console.log('done');
});

Usage with Gulp
---------------

var gulp \= require('gulp');
var gulpif \= require('gulp-if');
var sprite \= require('css-sprite').stream;

// generate sprite.png and \_sprite.scss
gulp.task('sprites', function () {
  return gulp.src('./src/img/\*.png')
    .pipe(sprite({
      name: 'sprite',
      style: '\_sprite.scss',
      cssPath: './img',
      processor: 'scss'
    }))
    .pipe(gulpif('\*.png', gulp.dest('./dist/img/'), gulp.dest('./dist/scss/')))
});
// generate scss with base64 encoded images
gulp.task('base64', function () {
  return gulp.src('./src/img/\*.png')
    .pipe(sprite({
      base64: true,
      style: '\_base64.scss',
      processor: 'scss'
    }))
    .pipe(gulp.dest('./dist/scss/'));
});

Options to use `css-sprite` with Gulp are the same as for the `sprite.create` function with the exception of `src` and `out`.

Usage with Grunt
----------------

Add `css-sprite` as a dependency to your grunt project and then use something like this in your `gruntfile.js`:

module.exports \= function(grunt) {

  // Project configuration.
  grunt.initConfig({
    css\_sprite: {
      options: {
        'cssPath': '../images',
        'processor': 'css',
        'orientation': 'vertical',
        'margin': 4
      },
      sprite: {
        options: {
          'style': 'dest/css/sprite.css'
        },
        src: \['src/images/\*', 'src/images2/\*'\],
        dest: 'dest/images/sprite.png',
      },
      base64: {
        options: {
          'base64': true
        },
        src: \['src/images/\*'\],
        dest: 'dest/scss/base64.css',
      }
    }
  });

  // Load the plugin that provides the "css-sprite" task.
  grunt.loadNpmTasks('css-sprite');

  // Default task(s).
  grunt.registerTask('default', \['css\_sprite'\]);
};

Options to use `css-sprite` with Grunt are the same as for the `sprite.create` function with the exception of `src` and `out`.

Usage with sass / less / stylus
-------------------------------

#### scss example

@import 'sprite'; // the generated style file (sprite.scss)

// camera icon (camera.png in src directory)
.icon-camera {
  @include sprite($camera);
}

// cart icon (cart.png in src directory)
.icon-cart {
  @include sprite($cart);
}

#### sass example

@import 'sprite' // the generated style file (sprite.sass)

// camera icon (camera.png in src directory)
.icon-camera
  +sprite($camera)

// cart icon (cart.png in src directory)
.icon-cart
  +sprite($cart)

#### less example

@import 'sprite'; // the generated style file (sprite.less)

// camera icon (camera.png in src directory)
.icon-camera {
  .sprite(@camera);
}

// cart icon (cart.png in src directory)
.icon-cart {
  .sprite(@cart);
}

#### stylus example

@import 'sprite' // the generated style file (sprite.styl)

// camera icon (camera.png in src directory)
.icon-camera
  sprite($camera)

// cart icon (cart.png in src directory)
.icon-cart
  sprite($cart)

Using your own template
-----------------------

To use your own mustache template for style file creation pass in the -t option followed by the template path. The following variables are available in the mustache template:

-   **items** -- array of objects with the sprite tiles
    -   **name** -- name of the tile
    -   **x** -- x position
    -   **y** -- y position
    -   **width**
    -   **height**
    -   **offset\_x** -- x offset within the sprite
    -   **offset\_y** -- y offset within the sprite
    -   **class** -- class name of the tile
    -   **px** -- object with pixel values instead of raw data (e.g width: '250px')
        -   **x**, **y**, **offset\_x**, **offset\_y**, **height**, **width**, **total\_height**, **total\_width**
-   **sprite** -- object with information about the sprite itself
    -   **name** -- name of the sprite
    -   **image** -- css path to sprite or base64 encode string
    -   **escaped\_image** -- escaped css path to sprite or base64 encode string
    -   **class** -- class name of the sprite
-   **retina** -- object with information about the retina sprite
    -   **name** -- name of the retina sprite
    -   **image** -- css path to retina sprite
    -   **escaped\_image** -- escaped css path to retina sprite
    -   **class** -- class name of the retina sprite
    -   **total\_width** -- height of the retina sprite (for background-size)
    -   **total\_height** -- width of the retina sprite (for background-size)
    -   **px** -- object with pixel values
        -   **total\_width**, **total\_height**

Please have a look at the included templates to see how they work.