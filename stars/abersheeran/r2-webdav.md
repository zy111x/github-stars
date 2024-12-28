---
project: r2-webdav
stars: 171
description: Use Cloudflare Workers to provide a WebDav interface for Cloudflare R2.
url: https://github.com/abersheeran/r2-webdav
---

r2-webdav
=========

Use Cloudflare Workers to provide a WebDav interface for Cloudflare R2.

Usage
-----

Change wrangler.toml to your own.

\[\[r2\_buckets\]\]
binding = 'bucket' # <~ valid JavaScript variable name, don't change this
bucket\_name = 'webdav'

Then use wrangler to deploy.

wrangler deploy

wrangler secret put USERNAME
wrangler secret put PASSWORD

Development
-----------

With `wrangler`, you can build, test, and deploy your Worker with the following commands:

# run your Worker in an ideal development workflow (with a local server, file watcher & more)
$ npm run dev

# deploy your Worker globally to the Cloudflare network (update your wrangler.toml file for configuration)
$ npm run deploy

Test
----

Use litmus to test.
