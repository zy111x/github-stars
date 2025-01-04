---
project: sharp
stars: 29562
description: High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, AVIF and TIFF images. Uses the libvips library.
url: https://github.com/lovell/sharp
---

sharp
=====

The typical use case for this high speed Node-API module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.

It can be used with all JavaScript runtimes that provide support for Node-API v9, including Node.js (^18.17.0 or >= 20.3.0), Deno and Bun.

Resizing an image is typically 4x-5x faster than using the quickest ImageMagick and GraphicsMagick settings due to its use of libvips.

Colour spaces, embedded ICC profiles and alpha transparency channels are all handled correctly. Lanczos resampling ensures quality is not sacrificed for speed.

As well as image resizing, operations such as rotation, extraction, compositing and gamma correction are available.

Most modern macOS, Windows and Linux systems do not require any additional install or runtime dependencies.

Documentation
-------------

Visit sharp.pixelplumbing.com for complete installation instructions, API documentation, benchmark tests and changelog.

Examples
--------

npm install sharp

const sharp \= require('sharp');

### Callback

sharp(inputBuffer)
  .resize(320, 240)
  .toFile('output.webp', (err, info) \=> { ... });

### Promise

sharp('input.jpg')
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then( data \=> { ... })
  .catch( err \=> { ... });

### Async/await

const semiTransparentRedPng \= await sharp({
  create: {
    width: 48,
    height: 48,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 0.5 }
  }
})
  .png()
  .toBuffer();

### Stream

const roundedCorners \= Buffer.from(
  '<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>'
);

const roundedCornerResizer \=
  sharp()
    .resize(200, 200)
    .composite(\[{
      input: roundedCorners,
      blend: 'dest-in'
    }\])
    .png();

readableStream
  .pipe(roundedCornerResizer)
  .pipe(writableStream);

Contributing
------------

A guide for contributors covers reporting bugs, requesting features and submitting code changes.

Licensing
---------

Copyright 2013 Lovell Fuller and others.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
