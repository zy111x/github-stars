---
project: aws4fetch
stars: 639
description: A compact AWS client and signing utility for modern JS environments
url: https://github.com/mhart/aws4fetch
---

aws4fetch
=========

A compact (6.4kb minified, 2.5kb gzipped) AWS client for environments that support `fetch` and `SubtleCrypto` – that is, modern web browsers and JS platforms like Cloudflare Workers. Also retries requests with an exponential backoff with full jitter strategy by default.

Example
=======

import { AwsClient } from 'aws4fetch'

const aws \= new AwsClient({ accessKeyId: MY\_ACCESS\_KEY, secretAccessKey: MY\_SECRET\_KEY })

// https://docs.aws.amazon.com/lambda/latest/dg/API\_Invoke.html
const LAMBDA\_FN\_API \= 'https://lambda.us-east-1.amazonaws.com/2015-03-31/functions'

async function invokeMyLambda(event) {
  const res \= await aws.fetch(\`${LAMBDA\_FN\_API}/my-lambda/invocations\`, { body: JSON.stringify(event) })

  // \`res\` is a standard Response object: https://developer.mozilla.org/en-US/docs/Web/API/Response
  return res.json()
}

invokeMyLambda({my: 'event'}).then(json \=> console.log(json))

You can see a more detailed example, a Cloudflare Worker script you can use as a replacement for API Gateway, in the `example` directory.

API
===

`aws4fetch` exports two classes: `AwsClient` and `AwsV4Signer`

`new AwsClient(options)`
------------------------

You can use the same instance of `AwsClient` for all your service calls as the service and region will be determined at fetch time – or you can create separate instances if you have different needs, eg no retrying for some service.

import { AwsClient } from 'aws4fetch'

const aws \= new AwsClient({
  accessKeyId,     // required, akin to AWS\_ACCESS\_KEY\_ID
  secretAccessKey, // required, akin to AWS\_SECRET\_ACCESS\_KEY
  sessionToken,    // akin to AWS\_SESSION\_TOKEN if using temp credentials
  service,         // AWS service, by default parsed at fetch time
  region,          // AWS region, by default parsed at fetch time
  cache,           // credential cache, defaults to \`new Map()\`
  retries,         // number of retries before giving up, defaults to 10, set to 0 for no retrying
  initRetryMs,     // defaults to 50 – timeout doubles each retry
})

### `Promise<Response> aws.fetch(input[, init])`

Has the same signature as the global fetch function

import { AwsClient } from 'aws4fetch'

const aws \= new AwsClient(opts)

async function doFetch() {

  const response \= await aws.fetch(url, {

    method,  // if not supplied, will default to 'POST' if there's a body, otherwise 'GET'
    headers, // standard JS object literal, or Headers instance
    body,    // optional, String or ArrayBuffer/ArrayBufferView – ie, remember to stringify your JSON

    // and any other standard fetch options, eg keepalive, etc

    // optional, largely if you want to override options in the AwsClient instance
    aws: {
      signQuery,          // set to true to sign the query string instead of the Authorization header
      accessKeyId,        // same as in AwsClient constructor above
      secretAccessKey,    // same as in AwsClient constructor above
      sessionToken,       // same as in AwsClient constructor above
      service,            // same as in AwsClient constructor above
      region,             // same as in AwsClient constructor above
      cache,              // same as in AwsClient constructor above
      datetime,           // defaults to now, to override use the form '20150830T123600Z'
      appendSessionToken, // set to true to add X-Amz-Security-Token after signing, defaults to true for iot
      allHeaders,         // set to true to force all headers to be signed instead of the defaults
      singleEncode,       // set to true to only encode %2F once (usually only needed for testing)
    },
  })

  console.log(await response.json())
}

NB: Due to the way bodies are handled in `Request` instances, it's faster to invoke the function as above – using a URL as the `input` argument and passing the `body` in the `init` argument – instead of the form of invocation that uses a `Request` object directly as `input`.

If you don't know which URL to call for the AWS service you want, the full list of AWS endpoints can be found here: https://docs.aws.amazon.com/general/latest/gr/rande.html

And the APIs are documented here: https://docs.aws.amazon.com/ (the REST APIs are usually documented under "API Reference" for each service)

### `Promise<Request> aws.sign(input[, init])`

Returns a Promise that resolves to an AWS4 signed `Request` – has the same signature as `fetch`. Use this to create a `Request` you can send using `fetch()` yourself.

import { AwsClient } from 'aws4fetch'

const aws \= new AwsClient(opts)

async function doFetch() {

  const request \= await aws.sign(url, {

    method,  // if not supplied, will default to 'POST' if there's a body, otherwise 'GET'
    headers, // standard JS object literal, or Headers instance
    body,    // optional, String or ArrayBuffer/ArrayBufferView – ie, remember to stringify your JSON

    // and any other standard fetch options, eg keepalive, etc

    // optional, largely if you want to override options in the AwsClient instance
    aws: {
      signQuery,          // set to true to sign the query string instead of the Authorization header
      accessKeyId,        // same as in AwsClient constructor above
      secretAccessKey,    // same as in AwsClient constructor above
      sessionToken,       // same as in AwsClient constructor above
      service,            // same as in AwsClient constructor above
      region,             // same as in AwsClient constructor above
      cache,              // same as in AwsClient constructor above
      datetime,           // defaults to now, to override use the form '20150830T123600Z'
      appendSessionToken, // set to true to add X-Amz-Security-Token after signing, defaults to true for iot
      allHeaders,         // set to true to force all headers to be signed instead of the defaults
      singleEncode,       // set to true to only encode %2F once (usually only needed for testing)
    },
  })

  const response \= await fetch(request)

  console.log(await response.json())
}

`new AwsV4Signer(options)`
--------------------------

The underlying signing class for a request – use this if you just want to deal with the raw AWS4 signed method/url/headers/body.

import { AwsV4Signer } from 'aws4fetch'

const signer \= new AwsV4Signer({
  url,                // required, the AWS endpoint to sign
  accessKeyId,        // required, akin to AWS\_ACCESS\_KEY\_ID
  secretAccessKey,    // required, akin to AWS\_SECRET\_ACCESS\_KEY
  sessionToken,       // akin to AWS\_SESSION\_TOKEN if using temp credentials
  method,             // if not supplied, will default to 'POST' if there's a body, otherwise 'GET'
  headers,            // standard JS object literal, or Headers instance
  body,               // optional, String or ArrayBuffer/ArrayBufferView – ie, remember to stringify your JSON
  signQuery,          // set to true to sign the query string instead of the Authorization header
  service,            // AWS service, by default parsed at fetch time
  region,             // AWS region, by default parsed at fetch time
  cache,              // credential cache, defaults to \`new Map()\`
  datetime,           // defaults to now, to override use the form '20150830T123600Z'
  appendSessionToken, // set to true to add X-Amz-Security-Token after signing, defaults to true for iot
  allHeaders,         // set to true to force all headers to be signed instead of the defaults
  singleEncode,       // set to true to only encode %2F once (usually only needed for testing)
})

### `Promise<{ method, url, headers, body }> signer.sign()`

Actually perform the signing of the request and return a Promise that resolves to an object containing the signed method, url, headers and body.

`method` will be a `String`, `url` will be an instance of `URL`, `headers` will be an instance of `Headers` and `body` will unchanged from the argument you supply to the constructor.

import { AwsV4Signer } from 'aws4fetch'

const signer \= new AwsV4Signer(opts)

async function sign() {
  const { method, url, headers, body } \= await signer.sign()

  console.log(method, url, \[...headers\], body)
}

### `Promise<String> signer.authHeader()`

Returns a Promise that resolves to the signed string to use in the `Authorization` header

Used by the `sign()` method – you shouldn't need to access this directly unless you're constructing your own requests.

### `Promise<String> signer.signature()`

Returns a Promise that resolves to the hex signature

Used by the `sign()` method – you shouldn't need to access this directly unless you're constructing your own requests.

Installation
============

With npm do:

```
npm install aws4fetch
```