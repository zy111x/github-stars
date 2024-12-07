---
project: superjson
stars: 4208
description: Safely serialize JavaScript expressions to a superset of JSON, which includes Dates, BigInts, and more.
url: https://github.com/flightcontrolhq/superjson
---

Safely serialize JavaScript expressions to a superset of JSON, which includes Dates, BigInts, and more.

Key features
------------

-   🍱 Reliable serialization and deserialization
-   🔐 Type safety with autocompletion
-   🐾 Negligible runtime footprint
-   💫 Framework agnostic
-   🛠 Perfect fix for Next.js's serialisation limitations in `getServerSideProps` and `getInitialProps`

Backstory
---------

At Blitz, we have struggled with the limitations of JSON. We often find ourselves working with `Date`, `Map`, `Set` or `BigInt`, but `JSON.stringify` doesn't support any of them without going through the hassle of converting manually!

Superjson solves these issues by providing a thin wrapper over `JSON.stringify` and `JSON.parse`.

Sponsors
--------

Superjson logo by NUMI:

Getting started
---------------

Install the library with your package manager of choice, e.g.:

```
yarn add superjson
```

Basic Usage
-----------

The easiest way to use Superjson is with its `stringify` and `parse` functions. If you know how to use `JSON.stringify`, you already know Superjson!

Easily stringify any expression you’d like:

import superjson from 'superjson';

const jsonString \= superjson.stringify({ date: new Date(0) });

// jsonString === '{"json":{"date":"1970-01-01T00:00:00.000Z"},"meta":{"values":{date:"Date"}}}'

And parse your JSON like so:

const object \= superjson.parse<
{ date: Date }
\>(jsonString);

// object === { date: new Date(0) }

Advanced Usage
--------------

For cases where you want lower level access to the `json` and `meta` data in the output, you can use the `serialize` and `deserialize` functions.

One great use case for this is where you have an API that you want to be JSON compatible for all clients, but you still also want to transmit the meta data so clients can use superjson to fully deserialize it.

For example:

const object \= {
  normal: 'string',
  timestamp: new Date(),
  test: /superjson/,
};

const { json, meta } \= superjson.serialize(object);

/\*
json = {
  normal: 'string',
  timestamp: "2020-06-20T04:56:50.293Z",
  test: "/superjson/",
};
// note that \`normal\` is not included here; \`meta\` only has special cases
meta = {
  values: {
    timestamp: \['Date'\],
    test: \['regexp'\],
  }
};
\*/

Using with Next.js
------------------

The `getServerSideProps`, `getInitialProps`, and `getStaticProps` data hooks provided by Next.js do not allow you to transmit Javascript objects like Dates. It will error unless you convert Dates to strings, etc.

Thankfully, Superjson is a perfect tool to bypass that limitation!

### Next.js SWC Plugin (experimental, v13 or above)

Next.js SWC plugins are experimental, but promise a significant speedup. To use the SuperJSON SWC plugin, install it and add it to your `next.config.js`:

yarn add next-superjson-plugin

// next.config.js
module.exports \= {
  experimental: {
    swcPlugins: \[
      \[
        'next-superjson-plugin',
        {
          excluded: \[\],
        },
      \],
    \],
  },
};

### Next.js (stable Babel transform)

Install the library with your package manager of choice, e.g.:

yarn add babel-plugin-superjson-next

Add the plugin to your .babelrc. If you don't have one, create it.

{
  "presets": \["next/babel"\],
  "plugins": \[
    ...
    "superjson-next" // 👈
  \]
}

Done! Now you can safely use all JS datatypes in your `getServerSideProps` / etc. .

API
---

### serialize

Serializes any JavaScript value into a JSON-compatible object.

#### Examples

const object \= {
  normal: 'string',
  timestamp: new Date(),
  test: /superjson/,
};

const { json, meta } \= serialize(object);

Returns **`json` and `meta`, both JSON-compatible values.**

deserialize
-----------

Deserializes the output of Superjson back into your original value.

#### Examples

const { json, meta } \= serialize(object);

deserialize({ json, meta });

Returns **`your original value`**.

### stringify

Serializes and then stringifies your JavaScript value.

#### Examples

const object \= {
  normal: 'string',
  timestamp: new Date(),
  test: /superjson/,
};

const jsonString \= stringify(object);

Returns **`string`**.

### parse

Parses and then deserializes the JSON string returned by `stringify`.

#### Examples

const jsonString \= stringify(object);

parse(jsonString);

Returns **`your original value`**.

* * *

Superjson supports many extra types which JSON does not. You can serialize all these:

type

supported by standard JSON?

supported by Superjson?

`string`

✅

✅

`number`

✅

✅

`boolean`

✅

✅

`null`

✅

✅

`Array`

✅

✅

`Object`

✅

✅

`undefined`

❌

✅

`bigint`

❌

✅

`Date`

❌

✅

`RegExp`

❌

✅

`Set`

❌

✅

`Map`

❌

✅

`Error`

❌

✅

`URL`

❌

✅

Recipes
-------

SuperJSON by default only supports built-in data types to keep bundle-size as low as possible. Here are some recipes you can use to extend to non-default data types.

Place them in some central utility file and make sure they're executed before any other `SuperJSON` calls. In a Next.js project, `_app.ts` would be a good spot for that.

### `Decimal.js` / `Prisma.Decimal`

import { Decimal } from 'decimal.js';

SuperJSON.registerCustom<Decimal, string\>(
  {
    isApplicable: (v): v is Decimal \=> Decimal.isDecimal(v),
    serialize: v \=> v.toJSON(),
    deserialize: v \=> new Decimal(v),
  },
  'decimal.js'
);

Contributors ✨
--------------

Thanks goes to these wonderful people (emoji key):

  
**Dylan Brookes**  
💻 📖 🎨 ⚠️

  
**Simon Knott**  
💻 🤔 ⚠️ 📖

  
**Brandon Bayer**  
🤔

  
**Jeremy Liberman**  
⚠️ 💻

  
**Joris**  
💻

  
**tomhooijenga**  
💻 🐛

  
**Ademílson F. Tonato**  
⚠️

  
**Piotr Monwid-Olechnowicz**  
🤔

  
**Alex Johansson**  
💻 ⚠️

  
**Simon Edelmann**  
🐛 💻 🤔

  
**Sam Garson**  
🐛

  
**Mark Hughes**  
🐛

  
**Lxxyx**  
💻

  
**Máximo Mussini**  
💻

  
**Peter Dekkers**  
🐛

  
**Gabe O'Leary**  
📖

  
**Benjamin**  
📖

  
**Ionut-Cristian Florescu**  
🐛

  
**Chris Johnson**  
📖

  
**Nicholas Chiang**  
🐛 💻

  
**Datner**  
💻

  
**ruessej**  
🐛

  
**JH.Lee**  
📖

  
**narumincho**  
💻

  
**Markus Greystone**  
🐛

  
**darthmaim**  
💻

  
**Max Malm**  
📖

  
**Tyler Collier**  
📖

  
**Nick Quebbeman**  
📖

  
**Tom MacWright**  
🐛 💻

  
**Peter Budai**  
🐛

This project follows the all-contributors specification. Contributions of any kind welcome!

See also
--------

Other libraries that aim to solve a similar problem:

-   Serialize JavaScript by Eric Ferraiuolo
-   devalue by Rich Harris
-   next-json by Daniele Ricci
