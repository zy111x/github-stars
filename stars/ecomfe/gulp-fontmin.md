---
project: gulp-fontmin
stars: 79
description: Minify font seamlessly
---

gulp-fontmin
============

> Minify TTF font to SVG, EOT, WOFF with fontmin

Install
-------

```
$ npm install --save-dev gulp-fontmin
```

Usage
-----

var gulp \= require('gulp');
var fontmin \= require('gulp-fontmin');

gulp.task('default', function () {
    return gulp.src('src/fonts/\*.ttf')
        .pipe(fontmin({
            text: '天地玄黄 宇宙洪荒',
        }))
        .pipe(gulp.dest('dist/fonts'));
});

API
---

### fontmin(options)

Options:

-   `text`: A string corresponding glyphs of ttf
-   `onlyChinese`: {boolean} keep chinese only, exclude Latin, number and symbol. Default = false
-   `fontPath`: {string=} location of font file.
-   `hinting`: {boolean=} keep hint info, defaults true.
-   `quiet`: {boolean=} print how many fonts were effected, defaults false.

Practice
--------

### Get needed text from html

function minifyFont(text, cb) {
    gulp
        .src('src/font/\*.ttf')
        .pipe(fontmin({
            text: text
        }))
        .pipe(gulp.dest('dest/font'))
        .on('end', cb);
}

gulp.task('fonts', function(cb) {

    var buffers \= \[\];

    gulp
        .src('index.html')
        .on('data', function(file) {
            buffers.push(file.contents);
        })
        .on('end', function() {
            var text \= Buffer.concat(buffers).toString('utf-8');
            minifyFont(text, cb);
        });

});

Related
-------

-   gulp-fontmin-demo
-   fontmin
-   fontmin-app

License
-------

MIT
