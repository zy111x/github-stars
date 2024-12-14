---
project: express-redis-cache
stars: 287
description: A light cache system with Redis for Express
url: https://github.com/rv-kip/express-redis-cache
---

express-redis-cache
===================

Easily cache pages of your app using Express and Redis. _Could be used without Express too._

Install
=======

```
npm install express-redis-cache
```

`express-redis-cache` ships with a CLI utility you can invoke from the console. In order to use it, install `express-redis-cache` globally (might require super user privileges):

```
npm install -g express-redis-cache
```

Upgrade
=======

Read this if you are upgrading from 0.0.8 to 0.1.x,

Usage
=====

Just use it as a middleware in the stack of the route you want to cache.

var app \= express();
var cache \= require('express-redis-cache')();

// replace
app.get('/',
  function (req, res)  { ... });

// by
app.get('/',
  cache.route(),
  function (req, res)  { ... });

This will check if there is a cache entry for this route. If not. it will cache it and serve the cache next time route is called.

Redis connection info
=====================

By default, `redis-express-cache` connects to Redis using localhost as host and nothing as port (using Redis default port 6379). To use different port or host, declare them when you require express-redis-cache. If your Redis server requires password, use the `auth_pass` option.

var cache \= require('express-redis-cache')({
  host: String, port: Number, auth\_pass: REDIS\_PASSWORD
  });

You can pass a Redis client as well:

require('express-redis-cache')({ client: require('redis').createClient() })

You can have several clients if you want to serve from more than one Redis server:

var cache \= require('express-redis-cache');
var client1 \= cache({ host: "...", port: "..." });
var client2 \= cache({ host: "...", port: "..." });
...

Redis Unavailability
--------------------

Should the redis become unavailable, the `express-redis-cache` object will emit errors but will not crash the app. Express.js requests during this time will be bypass cache and will return fresh data.

Once the redis recovers, the caching will begin working again. See example code in the `/example` folder.

Name of the cache entry
=======================

By default, the cache entry name will be `default prefix`:`name` where name's value defaults to req.originalUrl.

app.get('/',
  cache.route(), // cache entry name is \`cache.prefix + "/"\`
  function (req, res)  { ... });

You can specify a custom name like this:

app.get('/',
  cache.route('home'), // cache entry name is now \`cache.prefix + "home"\`
  function (req, res)  { ... });

You can also use the object syntax:

app.get('/',
  cache.route({ name: 'home' }), // cache entry name is \`cache.prefix + "home"\`
  function (req, res)  { ... });

Also, you can use `res.express_redis_cache_name` to specify the name of the entry such as:

app.get('/user/:userid',

  // middleware to define cache name

  function (req, res, next) {
    // set cache name
    res.express\_redis\_cache\_name \= 'user-' + req.params.userid;
    next();
    },

  // cache middleware

  cache.route(),

  // content middleware

  function (req, res) {
    res.render('user');
    }

  );

Conditional caching
===================

You can also use a previous middleware to set whether or not to use the cache by using `res.use_express_redis_cache`:

app.get('/user',

  // middleware to decide if using cache

  function (req, res, next) {
    // Use only cache if user not signed in
    res.use\_express\_redis\_cache \= ! req.signedCookies.user;

    next();
    }.

  cache.route(), // this will be skipped if user is signed in

  function (req, res) {
    res.render('user');
    }
  );

Prefix
======

All entry names are prepended by a prefix. Prefix is set when calling the Constructor.

// Set default prefix to "test". All entry names will begin by "test:"
var cache \= require('express-redis-cache')({ prefix: 'test' });

To know the prefix:

console.log('prefix', cache.prefix);

You can pass a custom prefix when calling `route()`:

app.get('/index.html',
  cache.route('index', { prefix: 'test'  }), // force prefix to be "test", entry name will be "test:index"
  function (req, res)  { ... });

You can also choose not to use prefixes:

app.get('/index.html',
  cache.route({ prefix: false  }), // no prefixing, entry name will be "/index.html"
  function (req, res)  { ... });

Expiration
==========

Unless specified otherwise when calling the Constructor, cache entries don't expire. You can specify a default lifetime when calling the constructor:

// Set default lifetime to 60 seconds for all entries
var cache \= require('express-redis-cache')({ expire: 60 });

You can overwrite the default lifetime when calling `route()`:

app.get('/index.html',
  cache.route({ expire: 5000  }), // cache entry will live 5000 seconds
  function (req, res)  { ... });

// You can also use the number sugar syntax
cache.route(5000);
// Or
cache.route('index', 5000);
// Or
cache.route({ prefix: 'test' }, 5000);

You can also provide a hash of status code / expiration values if you for example want to retry much sooner in failure cases (403/404/500/etc). Status ranges can be specified via `4xx`/`5xx`. You must provide a default value (`xxx`). The most specific rule will be used. For example, if the status code is 200, and there are expirations set for 200, 2xx, and xxx, the expiration for 200 will be used.

app.get('/index.html',
  cache.route({
    expire: {
      200: 5000,
      4xx: 10,
      403: 5000,
      5xx: 10,
      xxx: 1
    }
  }),
  function (req, res)  { ... });

You can also specify

Content Type
============

You can use `express-redis-cache` to cache HTML pages, CSS stylesheets, JSON objects, anything really. Content-types are saved along the cache body and are retrieved using `res._headers['content-type']`. If you want to overwrite that, you can pass a custom type.

app.get('/index.html',
  cache.route({ type: 'text/plain'  }), // force entry type to be "text/plain"
  function (req, res)  { ... });

Events
======

The module emits the following events:

error
-----

You can catch errors by adding a listener:

cache.on('error', function (error) {
  throw new Error('Cache error!');
});

message
-------

`express-redis-cache` logs some information at runtime. You can access it like this:

cache.on('message', function (message) {
  // ...
});

connected
---------

Emitted when the client is connected (or re-connected) to Redis server

cache.on('connected', function () {
  // ....
});

disconnected
------------

Emitted when the client is disconnected from Redis server. When (and if) it reconnects, it will emit a 'connected' event again

cache.on('disconnected', function () {
  // ....
});

**Note** You can get the connexion status at any time by getting the property `cache.connected` which returns a boolean (true = connected, false = disconnected).

deprecated
----------

Warning emitted when stumbled upon a deprecated part of the code

cache.on('deprecated', function (deprecated) {
  console.log('deprecated warning', {
      type: deprecated.type,
      name: deprecated.name,
      substitute: deprecated.substitute,
      file: deprecated.file,
      line: deprecated.line
  });
});

The Entry Model
===============

This is the object synopsis we use to represent a cache entry:

var entry \= {
  body:    String // the content of the cache
  touched: Number // last time cache was set (created or updated) as a Unix timestamp
  expire:  Number // the seconds cache entry lives (-1 if does not expire)
  type: String // the content-type
};

The module
==========

The module exposes a function which instantiates a new instance of a class called ExpressRedisCache.

// This
var cache \= require('express-redis-cache')({ /\* ... \*/ });
// is the same than
var cache \= new (require('express-redis-cache/lib/ExpressRedisCache'))({ /\* ... \*/ });

The constructor
===============

As stated above, call the function exposed by the module to create a new instance of `ExpressRedisCache`,

var cache \= require('express-redis-cache')(/\*\* Object | Undefined \*/ options);

Where `options` is an object that has the following properties:

| Option | Type | Default | Description | | ------------- |----------|-------|----------|--------| | **host** | `String` | `undefined` | Redis server host | **port** | `Number` | `undefined` | Redis server port | **prefix** | `String` | `require('express-redis-cache/package.json').config.prefix` | Default prefix (This will be prepended to all entry names) | | **expire** | `Number` | `undefined` | Default life time of entries in seconds | | **client** | `RedisClient` | `require('redis').createClient({ host: cache.host, port: cache.port })` | A Redis client |

API
===

The `route` method is designed to integrate easily with Express. You can also define your own caching logics using the other methos of the API shown below.

`get` Get cache entries
-----------------------

cache.get(/\*\* Mixed (optional) \*/ query, /\*\* Function( Error, \[Entry\] ) \*/ callback );

To get all cache entries:

cache.get(function (error, entries) {
  if ( error ) throw error;

  entries.forEach(console.log.bind(console));
});

To get a specific entry:

cache.get('home', function (error, entries) {});

To get a specific entry for a given prefix:

cache.get({ name: 'home', prefix: 'test' }, function (error, entries) {});

You can use wildcard:

cache.get('user\*', function (error, entries) {});

`add` Add a new cache entry
---------------------------

cache.add(/\*\* String \*/ name, /\*\* String \*/ body, /\*\* Object (optional) \*\*/ options, /\*\* Function( Error, Entry ) \*/ callback )

Where options is an object that can have the following properties:

-   **expire** `Number` (lifetime of entry in seconds)
-   **type** `String` (the content-type)

Example:

cache.add('user:info', JSON.stringify({ id: 1, email: 'john@doe.com' }), { expire: 60 \* 60 \* 24, type: 'json' },
    function (error, added) {});

`del` Delete a cache entry
--------------------------

cache.del(/\*\* String \*/ name, /\*\* Function ( Error, Number deletions ) \*/ callback);

You can use wildcard (\*) in name.

`size` Get cache size for all entries
-------------------------------------

cache.size(/\*\* Function ( Error, Number bytes ) \*/);

Command line
============

We ship with a CLI. You can invoke it like this: `express-redis-cache`

View cache entries
------------------

express-redis-cache ls

Add cache entry
---------------

express-redis-cache add $name $body $expire --type $type

### Examples

# Cache simple text
express-redis-cache add "test" "This is a test";

# Cache a file
express-redis-cache add "home" "$(cat index.html)";

# Cache a JSON object
express-redis-cache add "user1:location" '{ "lat": 4.7453, "lng": -31.332 }' --type json;

# Cache a text that will expire in one hour
express-redis-cache add "offer" "everything 25% off for the next hour" $(( 60 \* 60 ));

Get single cache entry
----------------------

express-redis-cache get $name
# Example: express-redis-cache get user1:\*
# Output:

Delete cache entry
------------------

express-redis-cache del $name
# Example: express-redis-cache del user1:\*
# Output:

Get total cache size
--------------------

express-redis-cache size
# Output:

Example Code
============

Run the example to see how the caching behaves. You can kill the `redis-server` and the application will respond with non-cached information.

```
npm install
cd example
node example.js
```

Test
====

We use Mocha and Should for the tests. You can invoke tests like this:

```
npm test
```

Test environments
-----------------

You can specify the following environments before running your tests:

export EX\_RE\_CA\_HOST="";
export EX\_RE\_CA\_PORT="";
export EX\_RE\_CA\_PREFIX="";

Contributors
============

-   faceair
-   barwin
-   rv-kip
-   amaurigabriel
-   benmcmeen
-   pwmckenna
-   mattberther
-   ramanpreetnara

* * *

Enjoy!
