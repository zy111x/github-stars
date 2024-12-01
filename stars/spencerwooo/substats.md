---
project: substats
stars: 824
description: ( ｀д′) how many followers do i have? how many!
url: https://github.com/spencerwooo/substats
---

### substats

Get started · What's new? · Sponsoring

( ｀д′) _how many followers do i have? how many!_

Get started
-----------

> sub · stats /səb ˈ stats/
> 
> -   a serverless api for getting the number of followers of you in your favourite services

_\*Version 2.0 is still in `beta`, not all features are ported from 1.0. Check below for details 👇_

### Basic

```
https://api.swo.moe
```

You request:

GET /stats/:source/:key

I respond:

{
  source: string,
  key: string,
  failed: true | false,
  count: number | string  // Most often it's a number when source !== 'common'
}

Yep, it's that simple now. ;)

_\*Note that `key` needs to be url encoded, remember this if you are requesting the `feedly`, `inoreader`, or `feedspub` routes._

### Building badges 🎫

Of course! And as a matter of fact, substats works quite well with `shields.io`'s `/dynamic` route. All these badges below are dynamically generated with substat's data:

You can easily create your own badge with our badge builder at substats.swo.moe.

### Advanced - the `/common` route 🍀

What if the source you are trying to use is not supported yet, but it's just a simple `GET` request? In this case, you can use the route:

GET /stats/common?endpoint=<url>&datapath=<path>

Such as:

GET /stats/common/?endpoint=https://api.genshin.dev/domains/cecilia-garden&datapath=rewards.0.details.2.mora

In this case, the `endpoint` is an API url:

```
https://api.genshin.dev/domains/cecilia-garden
```

The response this URL returns looks like:

{
  "name": "Cecilia Garden",
  "type": "Forgery",
  // ...
  "rewards": \[
    {
      "details": \[
        { /\* ... \*/ },
        { /\* ... \*/ },
        {
          "mora": 1125,
        },
      \]
    }
  \]
}

Hence, we provide the `datapath` as `rewards.0.details.2.mora`. (I specifically chose this data as it contains an array to demonstrate how to reference the value `mora` inside the array by index.)

Response from the `endpoint` provided by you is parsed with object-path, and the method for constructing a reference `datapath` to your value in the response is the same.

Try our `/common` route API URL builder here: substats.swo.moe/common.

Supported sources
-----------------

-   afdian
-   bilibili
-   coolapk
-   feedly
-   feedspub
-   github
-   inoreader
-   instagram
-   jike
-   mastodon
-   medium
-   neteasemusic
-   reddit
-   sspai
-   steamgames
-   steamfriends
-   telegram
-   twitter
-   unsplash
-   weibo
-   wikipediazh
-   zhihu
-   juejin
-   yuque

What's new?
-----------

Yes, `substats` is now version `v2.0-beta`! Most of the updates are under-the-hood apart from API formats.

-   Refactored in TypeScript.
-   Updated to CloudFlare's module workers.
-   Worker is built with `esbuild` instead of `webpack`, extra fast!
-   Support for Newsblur has been deprecated (seems nobody uses it).
-   KV storages are now supported, some routes including `instagram` depends on this for storing cookies (wip).
-   Caching is ported to module workers in 2.0 and supported as always.
-   New documentation and query builder.

If you are looking for the multiple source and query functions in 2.0 - it's still under refactor, as `itty-router` does not parse multiple query parameters, blocking this feature here. You can still use the 1.0 route while we wait. README and documentation for v1.0 (deprecated).

Contributing
------------

This is a monorepo managed by `pnpm`. Directory `./worker` holds the Cloudflare Worker module, and `./docs` is a React site for documentation (powered by Vite and Chakra UI). Check the README.md for both packages for details.

Sponsoring
----------

Open-source is hard! If you happen to like this project and want me to keep going, please consider sponsoring me or providing a single donation! Thanks for all the love and support!

🧸 Please donate - 微信/支付宝 · Patreon · 爱发电

License
-------

MIT

_made with ❤️ by spencer woo_
