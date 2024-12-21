---
project: undio
stars: 213
description: ⇔ Conventionally and Safely convert between various JavaScript data types
url: https://github.com/unjs/undio
---

⇔ undio
=======

⇔ Conventionally and safely convert between various JavaScript data types.

✅ Features
----------

-   Type-safe usage
-   Runtime-type safety assertion
-   Auto type detection and conversion
-   Tree-shakable and compact build
-   Leverage runtime native performance (+Bun stream utils)

👍 Supported Types
------------------

-   ArrayBuffer
-   Base64
-   Blob
-   DataView
-   Number Array
-   ReadableStream
-   NodeStream
-   Response
-   Text
-   Uint8Array

Usage
-----

Install package:

# ✨ Auto-detect
npx nypm install undio

# npm
npm install undio

# yarn
yarn add undio

# pnpm
pnpm install undio

# bun
bun install undio

Import:

**ESM** (Node.js, Bun)

import {} from "undio";

**CommonJS** (Legacy Node.js)

const {} \= require("undio");

**CDN** (Deno, Bun and Browsers)

import {} from "https://esm.sh/undio";

Auto Convert
------------

Undio automatically detects the input type and uses the proper method to convert it to the expected type.

**Example:**

import { detectType, toText, toReadableStream } from "undio";

// Convert any supported type (auto-detected)
const string \= await toText(value);
const stream \= await toReadableStream(value);

// "ArrayBuffer" | "Blob"| "DataView" | "NumberArray" | "ReadableStream" | "String" | "Uint8Array";
const type \= detectType(value);

Note

Because of stream support, the return type can be a promise. Always make sure to use an `await` before them.

Note

Alternatively you can use low-level `*To*(value)` utils to explicitly convert from one type to another. See all utils section.

Runtime type checking
---------------------

You can use `is*(input)` and `assert*(input)` utils to validate input type.

Note

All conversion utilities use assertions for runtime type safety by default, so you don't need to manually do this.

**Example:**

import { isReadableStream, assertArrayBuffer } from "undio";

if (isReadableStream(value)) {
  /\* do something \*/
}

assertArrayBuffer(value); // Throws an error if value is not ArrayBuffer
// do something

All utils
---------

See all utils

Array Buffer
------------

### `arrayBufferToBase64(arrayBuffer, base64Options)`

Convert from ArrayBuffer to Base64

### `arrayBufferToBlob(arrayBuffer, options?)`

Convert from ArrayBuffer to Blob

### `arrayBufferToDataView(arrayBuffer)`

Convert from ArrayBuffer to DataView

### `arrayBufferToNumberArray(arrayBuffer)`

Convert from ArrayBuffer to Number Array

### `arrayBufferToReadableStream(arrayBuffer)`

Convert from ArrayBuffer to ReadableStream

### `arrayBufferToResponse(arrayBuffer, init?)`

Convert from ArrayBuffer to Response

### `arrayBufferToText(arrayBuffer)`

Convert from ArrayBuffer to Text

### `arrayBufferToUint8Array(arrayBuffer)`

Convert from ArrayBuffer to Uint8Array

### `assertArrayBuffer(input)`

Assert that input is an instance of ArrayBuffer or throw a `TypeError`.

### `isArrayBuffer(input)`

Test if input is an instance of ArrayBuffer and return `true` or `false`.

### `toArrayBuffer(input)`

Convert from any value to ArrayBuffer

Base64
------

### `assertBase64(input, opts?)`

Assert if input matches the Base64 data URL (data:\[\]\[;base64\],) or throw a `TypeError`.

### `base64ToArrayBuffer(string, base64Options?)`

Convert from Base64 to ArrayBuffer

### `base64ToBlob(string, opts?)`

Convert from Base64 to Blob

### `base64ToDataView(string, base64Options?)`

Convert from Base64 to DataView

### `base64ToNumberArray(string, base64Options?)`

Convert from Base64 to Number Array

### `base64ToReadableStream(string, base64Options?)`

Convert from Base64 to ReadableStream

### `base64ToResponse(string)`

Convert from Base64 to Response

### `base64ToText(string, opts?)`

Convert from Base64 to Text

### `base64ToUint8Array(string, base64Options?)`

Convert from Base64 to Uint8Array

### `isBase64DataURL(input)`

Test if input matches the Base64 data URL (data:\[\]\[;base64\],) and return `true` or `false`.

### `toBase64(input)`

Convert from any value to Base64

Blob
----

### `assertBlob(input)`

Assert that input is an instance of Blob or throw a `TypeError`.

### `blobToArrayBuffer(blob)`

Convert from Blob to ArrayBuffer

### `blobToBase64(blob, base64Options)`

Convert from Blob to Base64

### `blobToDataView(blob)`

Convert from Blob to DataView

### `blobToNumberArray(blob)`

Convert from Blob to Number Array

### `blobToReadableStream(blob)`

Convert from Blob to ReadableStream

### `blobToResponse(blob, init?)`

Convert from Blob to Response

### `blobToText(blob)`

Convert from Blob to Text

### `blobToUint8Array(blob)`

Convert from Blob to Uint8Array

### `isBlob(input)`

Test if input is an instance of Blob and return `true` or `false`.

### `toBlob(input)`

Convert from any value to Blob

Data View
---------

### `assertDataView(input)`

Assert that input is an instance of DataView or throw a `TypeError`.

### `dataViewToArrayBuffer(dataView)`

Convert from DataView to ArrayBuffer

### `dataViewToBase64(dataView, base64Options?)`

Convert from DataView to Base64

### `dataViewToBlob(dataView, options?)`

Convert from DataView to Blob

### `dataViewToNumberArray(dataView)`

Convert from DataView to Number Array

### `dataViewToReadableStream(dataView)`

Convert from DataView to ReadableStream

### `dataViewToResponse(dataView, init?)`

Convert from DataView to Response

### `dataViewToText(dataView)`

Convert from DataView to Text

### `dataViewToUint8Array(dataView)`

Convert from DataView to Uint8Array

### `isDataView(input)`

Test if input is an instance of DataView and return `true` or `false`.

### `toDataView(input)`

Convert from any value to DataView

Node Stream
-----------

### `assertNodeStream(input)`

Assert that input is an instance of NodeStream or throw a `TypeError`.

### `isNodeStream(input)`

Test if input is an instance of NodeStream and return `true` or `false`.

### `nodeStreamToArrayBuffer(input)`

Convert from NodeStream to ArrayBuffer

### `nodeStreamToBase64(input, base64Options?)`

Convert from NodeStream to Base64

### `nodeStreamToBlob(input, options?)`

Convert from NodeStream to Blob

### `nodeStreamToDataView(input)`

Convert from NodeStream to DataView

### `nodeStreamToNumberArray(input)`

Convert from NodeStream to Number Array

### `nodeStreamToReadableStream(input)`

Convert from NodeStream to ReadableStream

### `nodeStreamToResponse(input, init?)`

Convert from NodeStream to Response

### `nodeStreamToText(input)`

Convert from NodeStream to Text

### `nodeStreamToUint8Array(input)`

Convert from NodeStream to Uint8Array

Number Array
------------

### `assertNumberArray(input)`

Assert that input is an instance of Number Array or throw a `TypeError`.

### `isNumberArray(input)`

Test if input is an instance of Number Array and return `true` or `false`.

### `numberArrayToArrayBuffer(numberArray)`

Convert from Number Array to ArrayBuffer

### `numberArrayToBase64(numberArray, base64Options?)`

Convert from Number Array to Base64

### `numberArrayToBlob(numberArray, options?)`

Convert from Number Array to Blob

### `numberArrayToDataView(numberArray)`

Convert from Number Array to DataView

### `numberArrayToReadableStream(numberArray)`

Convert from Number Array to ReadableStream

### `numberArrayToText(numberArray)`

Convert from Number Array to Text

### `numberArrayToUint8Array(numberArray)`

Convert from Number Array to Uint8Array

### `toNumberArray(input)`

Convert from any value to Number Array

Readable Stream
---------------

### `assertReadableStream(input)`

Assert that input is an instance of ReadableStream or throw a `TypeError`.

### `isReadableStream(input)`

Test if input is an instance of ReadableStream and return `true` or `false`.

### `readableStreamToArrayBuffer(readableStream)`

Convert from ReadableStream to ArrayBuffer

### `readableStreamToBase64(readableStream, base64Options?)`

Convert from ReadableStream to Base64

### `readableStreamToBlob(readableStream, options?)`

Convert from ReadableStream to Blob

### `readableStreamToDataView(readableStream)`

Convert from ReadableStream to DataView

### `readableStreamToNumberArray(readableStream)`

Convert from ReadableStream to Number Array

### `readableStreamToText(readableStream)`

Convert from ReadableStream to Text

### `readableStreamToUint8Array(readableStream)`

Convert from ReadableStream to Uint8Array

### `toReadableStream(input)`

Convert from any value to ReadableStream

### `toResponse(input)`

Convert from any value to Response

Response
--------

### `assertResponse(input)`

Assert that input is an instance of Response or throw a `TypeError`.

### `isResponse(input)`

Test if input is an instance of Response and return `true` or `false`.

### `responseToArrayBuffer(response)`

Convert from Response to ArrayBuffer

### `responseToBase64(response, base64Options?)`

Convert from Response to Base64

### `responseToBlob(response)`

Convert from Response to Blob

### `responseToDataView(response)`

Convert from Response to DataView

### `responseToNumberArray(response)`

Convert from Response to Number Array

### `responseToReadableStream(response)`

Convert from Response to ReadableStreamReadableStream\]

### `responseToText(response)`

Convert from Response to Text

### `responseToUint8Array(response)`

Convert from Response to Uint8Array

String
------

### `toText(input)`

Convert from any value to Text

Text
----

### `assertText(input)`

Assert that input is an instance of Text or throw a `TypeError`.

### `isText(input)`

Test if input is an instance of Text and return `true` or `false`.

### `textToArrayBuffer(string)`

Convert from Text to ArrayBuffer

### `textToBase64(string, opts?)`

Convert from Text to Base64

### `textToBlob(string, options?)`

Convert from Text to Blob

### `textToDataView(string)`

Convert from Text to DataView

### `textToNumberArray(string)`

Convert from Text to Number Array

### `textToReadableStream(string)`

Convert from Text to ReadableStream

### `textToUint8Array(string)`

Convert from Text to Uint8Array

Uint8 Array
-----------

### `assertUint8Array(input)`

Assert that input is an instance of Uint8Array or throw a `TypeError`.

### `isUint8Array(input)`

Test if input is an instance of Uint8Array and return `true` or `false`.

### `toUint8Array(input)`

Convert from any value to Uint8Array

### `uint8ArrayToArrayBuffer(uint8Array)`

Convert from Uint8Array to ArrayBuffer

### `uint8ArrayToBase64(uint8Array, base64Options?)`

Convert from Uint8Array to Base64

### `uint8ArrayToBlob(uint8Array, options?)`

Convert from Uint8Array to Blob

### `uint8ArrayToDataView(uint8Array)`

Convert from Uint8Array to DataView

### `uint8ArrayToNumberArray(uint8Array)`

Convert from Uint8Array to Number Array

### `uint8ArrayToReadableStream(uint8Array)`

Convert from Uint8Array to ReadableStream

### `uint8ArrayToResponse(uint8Array, init?)`

Convert from Uint8Array to Response

### `uint8ArrayToText(uint8Array)`

Convert from Uint8Array to Text

### `convertTo(toType, input, fromType?)`

Convert from any value to any supported data type

### `detectType(input)`

### `numberArrayToResponse(numberArray, init?)`

Convert from Number Array to Response

### `readableStreamToResponse(readableStream, init?)`

Convert from ReadableStream to Response

### `textToResponse(string, init?)`

Development
-----------

local development

-   Clone this repository
-   Install the latest LTS version of Node.js
-   Enable Corepack using `corepack enable`
-   Install dependencies using `pnpm install`
-   Run interactive tests using `pnpm dev`

License
-------

Published under the MIT license. Made by community 💛  
  

* * *

_🤖 auto updated with automd_
