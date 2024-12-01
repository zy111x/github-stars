---
project: undici
stars: 6298
description: An HTTP/1.1 client, written from scratch for Node.js
url: https://github.com/nodejs/undici
---

undici
======

An HTTP/1.1 client, written from scratch for Node.js.

> Undici means eleven in Italian. 1.1 -> 11 -> Eleven -> Undici. It is also a Stranger Things reference.

How to get involved
-------------------

Have a question about using Undici? Open a Q&A Discussion or join our official OpenJS Slack channel.

Looking to contribute? Start by reading the contributing guide

Install
-------

```
npm i undici
```

Benchmarks
----------

The benchmark is a simple getting data example using a 50 TCP connections with a pipelining depth of 10 running on Node 22.11.0.

```
┌────────────────────────┬─────────┬────────────────────┬────────────┬─────────────────────────┐
│  Tests                 │ Samples │ Result             │ Tolerance  │ Difference with slowest │
├────────────────────────┼─────────┼────────────────────┼────────────┼─────────────────────────┤
│  'axios'               │ 15      │ '5708.26 req/sec'  │ '± 2.91 %' │ '-'                     │
│  'http - no keepalive' │ 10      │ '5809.80 req/sec'  │ '± 2.30 %' │ '+ 1.78 %'              │
│  'request'             │ 30      │ '5828.80 req/sec'  │ '± 2.91 %' │ '+ 2.11 %'              │
│  'undici - fetch'      │ 40      │ '5903.78 req/sec'  │ '± 2.87 %' │ '+ 3.43 %'              │
│  'node-fetch'          │ 10      │ '5945.40 req/sec'  │ '± 2.13 %' │ '+ 4.15 %'              │
│  'got'                 │ 35      │ '6511.45 req/sec'  │ '± 2.84 %' │ '+ 14.07 %'             │
│  'http - keepalive'    │ 65      │ '9193.24 req/sec'  │ '± 2.92 %' │ '+ 61.05 %'             │
│  'superagent'          │ 35      │ '9339.43 req/sec'  │ '± 2.95 %' │ '+ 63.61 %'             │
│  'undici - pipeline'   │ 50      │ '13364.62 req/sec' │ '± 2.93 %' │ '+ 134.13 %'            │
│  'undici - stream'     │ 95      │ '18245.36 req/sec' │ '± 2.99 %' │ '+ 219.63 %'            │
│  'undici - request'    │ 50      │ '18340.17 req/sec' │ '± 2.84 %' │ '+ 221.29 %'            │
│  'undici - dispatch'   │ 40      │ '22234.42 req/sec' │ '± 2.94 %' │ '+ 289.51 %'            │
└────────────────────────┴─────────┴────────────────────┴────────────┴─────────────────────────┘
```

Quick Start
-----------

import { request } from 'undici'

const {
  statusCode,
  headers,
  trailers,
  body
} \= await request('http://localhost:3000/foo')

console.log('response received', statusCode)
console.log('headers', headers)

for await (const data of body) { console.log('data', data) }

console.log('trailers', trailers)

Body Mixins
-----------

The `body` mixins are the most common way to format the request/response body. Mixins include:

-   `.arrayBuffer()`
-   `.blob()`
-   `.bytes()`
-   `.json()`
-   `.text()`

Note

The body returned from `undici.request` does not implement `.formData()`.

Example usage:

import { request } from 'undici'

const {
  statusCode,
  headers,
  trailers,
  body
} \= await request('http://localhost:3000/foo')

console.log('response received', statusCode)
console.log('headers', headers)
console.log('data', await body.json())
console.log('trailers', trailers)

_Note: Once a mixin has been called then the body cannot be reused, thus calling additional mixins on `.body`, e.g. `.body.json(); .body.text()` will result in an error `TypeError: unusable` being thrown and returned through the `Promise` rejection._

Should you need to access the `body` in plain-text after using a mixin, the best practice is to use the `.text()` mixin first and then manually parse the text to the desired format.

For more information about their behavior, please reference the body mixin from the Fetch Standard.

Common API Methods
------------------

This section documents our most commonly used API methods. Additional APIs are documented in their own files within the docs folder and are accessible via the navigation list on the left side of the docs site.

### `undici.request([url, options]): Promise`

Arguments:

-   **url** `string | URL | UrlObject`
-   **options** `RequestOptions`
    -   **dispatcher** `Dispatcher` - Default: getGlobalDispatcher
    -   **method** `String` - Default: `PUT` if `options.body`, otherwise `GET`

Returns a promise with the result of the `Dispatcher.request` method.

Calls `options.dispatcher.request(options)`.

See Dispatcher.request for more details, and request examples for examples.

### `undici.stream([url, options, ]factory): Promise`

Arguments:

-   **url** `string | URL | UrlObject`
-   **options** `StreamOptions`
    -   **dispatcher** `Dispatcher` - Default: getGlobalDispatcher
    -   **method** `String` - Default: `PUT` if `options.body`, otherwise `GET`
-   **factory** `Dispatcher.stream.factory`

Returns a promise with the result of the `Dispatcher.stream` method.

Calls `options.dispatcher.stream(options, factory)`.

See Dispatcher.stream for more details.

### `undici.pipeline([url, options, ]handler): Duplex`

Arguments:

-   **url** `string | URL | UrlObject`
-   **options** `PipelineOptions`
    -   **dispatcher** `Dispatcher` - Default: getGlobalDispatcher
    -   **method** `String` - Default: `PUT` if `options.body`, otherwise `GET`
-   **handler** `Dispatcher.pipeline.handler`

Returns: `stream.Duplex`

Calls `options.dispatch.pipeline(options, handler)`.

See Dispatcher.pipeline for more details.

### `undici.connect([url, options]): Promise`

Starts two-way communications with the requested resource using HTTP CONNECT.

Arguments:

-   **url** `string | URL | UrlObject`
-   **options** `ConnectOptions`
    -   **dispatcher** `Dispatcher` - Default: getGlobalDispatcher
-   **callback** `(err: Error | null, data: ConnectData | null) => void` (optional)

Returns a promise with the result of the `Dispatcher.connect` method.

Calls `options.dispatch.connect(options)`.

See Dispatcher.connect for more details.

### `undici.fetch(input[, init]): Promise`

Implements fetch.

-   https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
-   https://fetch.spec.whatwg.org/#fetch-method

Basic usage example:

import { fetch } from 'undici'

const res \= await fetch('https://example.com')
const json \= await res.json()
console.log(json)

You can pass an optional dispatcher to `fetch` as:

import { fetch, Agent } from 'undici'

const res \= await fetch('https://example.com', {
  // Mocks are also supported
  dispatcher: new Agent({
    keepAliveTimeout: 10,
    keepAliveMaxTimeout: 10
  })
})
const json \= await res.json()
console.log(json)

#### `request.body`

A body can be of the following types:

-   ArrayBuffer
-   ArrayBufferView
-   AsyncIterables
-   Blob
-   Iterables
-   String
-   URLSearchParams
-   FormData

In this implementation of fetch, `request.body` now accepts `Async Iterables`. It is not present in the Fetch Standard.

import { fetch } from 'undici'

const data \= {
  async \*\[Symbol.asyncIterator\]() {
    yield 'hello'
    yield 'world'
  },
}

await fetch('https://example.com', { body: data, method: 'POST', duplex: 'half' })

FormData besides text data and buffers can also utilize streams via Blob objects:

import { openAsBlob } from 'node:fs'

const file \= await openAsBlob('./big.csv')
const body \= new FormData()
body.set('file', file, 'big.csv')

await fetch('http://example.com', { method: 'POST', body })

#### `request.duplex`

-   `'half'`

In this implementation of fetch, `request.duplex` must be set if `request.body` is `ReadableStream` or `Async Iterables`, however, even though the value must be set to `'half'`, it is actually a _full_ duplex. For more detail refer to the Fetch Standard.

#### `response.body`

Nodejs has two kinds of streams: web streams, which follow the API of the WHATWG web standard found in browsers, and an older Node-specific streams API. `response.body` returns a readable web stream. If you would prefer to work with a Node stream you can convert a web stream using `.fromWeb()`.

import { fetch } from 'undici'
import { Readable } from 'node:stream'

const response \= await fetch('https://example.com')
const readableWebStream \= response.body
const readableNodeStream \= Readable.fromWeb(readableWebStream)

#### Specification Compliance

This section documents parts of the Fetch Standard that Undici does not support or does not fully implement.

##### Garbage Collection

-   https://fetch.spec.whatwg.org/#garbage-collection

The Fetch Standard allows users to skip consuming the response body by relying on garbage collection to release connection resources. Undici does not do the same. Therefore, it is important to always either consume or cancel the response body.

Garbage collection in Node is less aggressive and deterministic (due to the lack of clear idle periods that browsers have through the rendering refresh rate) which means that leaving the release of connection resources to the garbage collector can lead to excessive connection usage, reduced performance (due to less connection re-use), and even stalls or deadlocks when running out of connections.

// Do
const headers \= await fetch(url)
  .then(async res \=> {
    for await (const chunk of res.body) {
      // force consumption of body
    }
    return res.headers
  })

// Do not
const headers \= await fetch(url)
  .then(res \=> res.headers)

However, if you want to get only headers, it might be better to use `HEAD` request method. Usage of this method will obviate the need for consumption or cancelling of the response body. See MDN - HTTP - HTTP request methods - HEAD for more details.

const headers \= await fetch(url, { method: 'HEAD' })
  .then(res \=> res.headers)

##### Forbidden and Safelisted Header Names

-   https://fetch.spec.whatwg.org/#cors-safelisted-response-header-name
-   https://fetch.spec.whatwg.org/#forbidden-header-name
-   https://fetch.spec.whatwg.org/#forbidden-response-header-name
-   wintercg/fetch#6

The Fetch Standard requires implementations to exclude certain headers from requests and responses. In browser environments, some headers are forbidden so the user agent remains in full control over them. In Undici, these constraints are removed to give more control to the user.

### `undici.upgrade([url, options]): Promise`

Upgrade to a different protocol. See MDN - HTTP - Protocol upgrade mechanism for more details.

Arguments:

-   **url** `string | URL | UrlObject`
-   **options** `UpgradeOptions`
    -   **dispatcher** `Dispatcher` - Default: getGlobalDispatcher
-   **callback** `(error: Error | null, data: UpgradeData) => void` (optional)

Returns a promise with the result of the `Dispatcher.upgrade` method.

Calls `options.dispatcher.upgrade(options)`.

See Dispatcher.upgrade for more details.

### `undici.setGlobalDispatcher(dispatcher)`

-   dispatcher `Dispatcher`

Sets the global dispatcher used by Common API Methods.

### `undici.getGlobalDispatcher()`

Gets the global dispatcher used by Common API Methods.

Returns: `Dispatcher`

### `undici.setGlobalOrigin(origin)`

-   origin `string | URL | undefined`

Sets the global origin used in `fetch`.

If `undefined` is passed, the global origin will be reset. This will cause `Response.redirect`, `new Request()`, and `fetch` to throw an error when a relative path is passed.

setGlobalOrigin('http://localhost:3000')

const response \= await fetch('/api/ping')

console.log(response.url) // http://localhost:3000/api/ping

### `undici.getGlobalOrigin()`

Gets the global origin used in `fetch`.

Returns: `URL`

### `UrlObject`

-   **port** `string | number` (optional)
-   **path** `string` (optional)
-   **pathname** `string` (optional)
-   **hostname** `string` (optional)
-   **origin** `string` (optional)
-   **protocol** `string` (optional)
-   **search** `string` (optional)

Specification Compliance
------------------------

This section documents parts of the HTTP/1.1 specification that Undici does not support or does not fully implement.

### Expect

Undici does not support the `Expect` request header field. The request body is always immediately sent and the `100 Continue` response will be ignored.

Refs: https://tools.ietf.org/html/rfc7231#section-5.1.1

### Pipelining

Undici will only use pipelining if configured with a `pipelining` factor greater than `1`. Also it is important to pass `blocking: false` to the request options to properly pipeline requests.

Undici always assumes that connections are persistent and will immediately pipeline requests, without checking whether the connection is persistent. Hence, automatic fallback to HTTP/1.0 or HTTP/1.1 without pipelining is not supported.

Undici will immediately pipeline when retrying requests after a failed connection. However, Undici will not retry the first remaining requests in the prior pipeline and instead error the corresponding callback/promise/stream.

Undici will abort all running requests in the pipeline when any of them are aborted.

-   Refs: https://tools.ietf.org/html/rfc2616#section-8.1.2.2
-   Refs: https://tools.ietf.org/html/rfc7230#section-6.3.2

### Manual Redirect

Since it is not possible to manually follow an HTTP redirect on the server-side, Undici returns the actual response instead of an `opaqueredirect` filtered one when invoked with a `manual` redirect. This aligns `fetch()` with the other implementations in Deno and Cloudflare Workers.

Refs: https://fetch.spec.whatwg.org/#atomic-http-redirect-handling

Workarounds
-----------

### Network address family autoselection.

If you experience problem when connecting to a remote server that is resolved by your DNS servers to a IPv6 (AAAA record) first, there are chances that your local router or ISP might have problem connecting to IPv6 networks. In that case undici will throw an error with code `UND_ERR_CONNECT_TIMEOUT`.

If the target server resolves to both a IPv6 and IPv4 (A records) address and you are using a compatible Node version (18.3.0 and above), you can fix the problem by providing the `autoSelectFamily` option (support by both `undici.request` and `undici.Agent`) which will enable the family autoselection algorithm when establishing the connection.

Collaborators
-------------

-   **Daniele Belardi**, https://www.npmjs.com/~dnlup
-   **Ethan Arrowood**, https://www.npmjs.com/~ethan\_arrowood
-   **Matteo Collina**, https://www.npmjs.com/~matteo.collina
-   **Matthew Aitken**, https://www.npmjs.com/~khaf
-   **Robert Nagy**, https://www.npmjs.com/~ronag
-   **Szymon Marczak**, https://www.npmjs.com/~szmarczak
-   **Tomas Della Vedova**, https://www.npmjs.com/~delvedor

### Releasers

-   **Ethan Arrowood**, https://www.npmjs.com/~ethan\_arrowood
-   **Matteo Collina**, https://www.npmjs.com/~matteo.collina
-   **Robert Nagy**, https://www.npmjs.com/~ronag
-   **Matthew Aitken**, https://www.npmjs.com/~khaf

License
-------

MIT
