---
project: webassembly
stars: 152
description: A WebAssembly Monorepo
url: https://github.com/saschazar21/webassembly
---

📦 WebAssembly Monorepo
=======================

> A Monorepo for dependency-free WebAssembly projects. Supports browser, web worker and Node.js runtimes.

All of the listed packages below will work on their own—without any external dependencies. The only precondition is to also include the `.wasm` file into the distribution, when using a bundler like Webpack or Rollup, etc.

Packages
--------

-   **`@saschazar/wasm-avif`** - decodes and encodes raw RGB(A) image data from/into an AVIF\-encoded image.
-   **`@saschazar/wasm-exif`** - reads JPEG-encoded data and returns the included EXIF as JavaScript object.
-   **`@saschazar/wasm-heif`** - decodes a HEIF/HEIC\-encoded image and returns raw RGB data.
-   **`@saschazar/wasm-image-loader`** - decodes JPEG- & PNG-encoded image data and resizes it, if desired.
-   **`@saschazar/wasm-mean-color`** - calculates the mean color from raw RGB/A image data and returns it as hex string.
-   **`@saschazar/wasm-mozjpeg`** - encodes raw RGB image data into JPEG using the MozJPEG encoder.
-   **`@saschazar/wasm-webp`** - decodes and encodes raw RGB(A) image data from/into the WebP format.

License
-------

Licensed under the MIT license.

Copyright ©️ 2020—2021 Sascha Zarhuber
