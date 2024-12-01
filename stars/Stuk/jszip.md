---
project: jszip
stars: 9822
description: Create, read and edit .zip files with Javascript
---

JSZip
=====

A library for creating, reading and editing .zip files with JavaScript, with a lovely and simple API.

See https://stuk.github.io/jszip for all the documentation.

const zip \= new JSZip();

zip.file("Hello.txt", "Hello World\\n");

const img \= zip.folder("images");
img.file("smile.gif", imgData, {base64: true});

zip.generateAsync({type:"blob"}).then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});

/\*
Results in a zip containing
Hello.txt
images/
    smile.gif
\*/

License
-------

JSZip is dual-licensed. You may use it under the MIT license _or_ the GPLv3 license. See LICENSE.markdown.
