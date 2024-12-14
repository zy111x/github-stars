---
project: unavatar
stars: 1241
description: Get unified user avatar from social networks, including Instagram, SoundCloud, Telegram, Twitter, YouTube & more.
url: https://github.com/microlinkhq/unavatar
---

Welcome to **unavatar.io**, the ultimate avatar service that offers everything you need to easily retrieve user avatars:

-   **Versatile**: A wide range of platforms and services including Facebook, Instagram, YouTube, Twitter, Gravatar, etc., meaning you can rule all of them just querying against unavatar.
    
-   **Speed**: Designed to be fast and efficient, all requests are being cached and delivered +200 global datacenters, allowing you to consume avatars instantly, counting more than 20 millions requests per month.
    
-   **Optimize**: All the images are not only compressed on-the-fly to reduce their size and save bandwith, but also optimized to maintain a high-quality ratio. They are ready for immediate use, enhancing the overall optimization of your website or application.
    
-   **Integration**: The service seamlessly incorporates into your current applications or websites with ease. We offer straightforward documentation and comprehensive support to ensure a quick and effortless onboarding experience.
    

In summary, **unavatar.io** provides versatility, speed, optimization, and effortless integration, making it the ultimate avatar retrieval service.

Quick start
-----------

The service is a single endpoint exposed in **unavatar.io** that can resolve:

-   an **email**: https://unavatar.io/sindresorhus@gmail.com
-   an **username**: https://unavatar.io/kikobeats
-   a **domain**: https://unavatar.io/reddit.com

So, no matter what type of query you use, **unavatar.io** has you covered. You can read more about that in providers.

Query parameters
----------------

### TTL

Type: `number`|`string`  
Default: `'24h'`  
Range: from `'1h'` to `'28d'`

It determines the maximum quantity of time an avatar is considered fresh.

e.g., https://unavatar.io/kikobeats?ttl=1h

When you look up for a user avatar for the very first time, the service will determine it and cache it respecting TTL value.

The same resource will continue to be used until reach TTL expiration. After that, the resource will be computed, and cache as fresh, starting the cycle.

### Fallback

Type: `string`|`boolean`

When it can't be possible to get a user avatar, a fallback image is returned instead, and it can be personalized to fit better with your website or application style.

You can get one from **boringavatars.com**:

e.g., https://unavatar.io/github/37t?fallback=https://source.boringavatars.com/marble/120/1337\_user?colors=264653r,2a9d8f,e9c46a,f4a261,e76f51

or **avatar.vercel.sh**:

e.g., https://unavatar.io/github/37t?fallback=https://avatar.vercel.sh/37t?size=400

or a static image:

e.g., https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4

or even a base64 encoded image. This allows you to return a transparent, base64 encoded 1x1 pixel GIF, which can be useful when you want to use your own background colour or image as a fallback.

e.g., https://unavatar.io/github/37t?fallback=data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==

You can pass `fallback=false` to explicitly disable this behavior. In this case, a _404 Not Found_ HTTP status code will returned when is not possible to get the user avatar.

### JSON

The service returns media content by default.

This is in this way to make easier consume the service from HTML markup.

In case you want to get a JSON payload as response, just pass `json=true`:

e.g., https://unavatar.io/kikobeats?json

Limitations
-----------

For preventing abusive usage, the service has associated a daily rate limit based on requests IP address.

You can verify for your rate limit state checking the following headers in the response:

-   `x-rate-limit-limit`: The maximum number of requests that the consumer is permitted to make per minute.
-   `x-rate-limit-remaining`: The number of requests remaining in the current rate limit window.
-   `x-rate-limit-reset`: The time at which the current rate limit window resets in UTC epoch seconds.

When you reach the API quota limit, you will experience HTTP 429 errors, meaning you need to wait until the API quota reset. If you need more quota, contact us.

Providers
---------

With **unavatar.io**, you can retrieve user avatars based on an **email**, **domain**, or **username**.

The providers are grouped based on which kind of input they can resolve.

Based on that, a subset of providers will be used for resolving the user query, being the avatar resolved the fastest provider that resolve the query successfully.

Alternatively, you can query for an individual provider.

### DeviantArt

Type: `username`

It resolves user avatar against **deviantart.com**.

e.g., https://unavatar.io/deviantart/spyed

### Dribbble

Type: `username`

It resolves user avatar against **dribbble.com**.

e.g., https://unavatar.io/dribbble/omidnikrah

### DuckDuckGo

Type: `domain`

It resolves user avatar using **duckduckgo.com**.

e.g., https://unavatar.io/duckduckgo/gummibeer.dev

### GitHub

Type: `username`

It resolves user avatar against **github.com**.

e.g., https://unavatar.io/github/mdo

### Google

Type: `domain`

It resolves user avatar using **google.com**.

e.g., https://unavatar.io/google/netflix.com

### Gravatar

Type: `email`

It resolves user avatar against **gravatar.com**.

e.g., https://unavatar.io/gravatar/sindresorhus@gmail.com

### Microlink

Type: `domain`

It resolves user avatar using **microlink.io**.

e.g., https://unavatar.io/microlink/microlink.io

### OnlyFans

It resolves user avatar using **onlyfans.com**.

e.g., https://unavatar.io/onlyfans/amandaribas

### Read.cv

Type: `username`

It resolves user avatar against **read.cv**.

e.g., https://unavatar.io/readcv/elenatorro

### SoundCloud

Type: `username`

It resolves user avatar against **soundcloud.com**.

e.g., https://unavatar.io/soundcloud/gorillaz

### Substack

Type: `username`

It resolves user avatar against **substack.com**.

e.g., https://unavatar.io/substack/bankless

### Telegram

Type: `username`

It resolves user avatar against **telegram.com**.

e.g., https://unavatar.io/telegram/drsdavidsoft

### Twitch

Type: `username`

It resolves user avatar against **twitch.tv**.

e.g., https://unavatar.io/twitch/midudev

### X/Twitter

Type: `username`

It resolves user avatar against **x.com**.

e.g., https://unavatar.io/x/kikobeats

### YouTube

Type: `username`

It resolves user avatar against **youtube.com**.

e.g., https://unavatar.io/youtube/casey
