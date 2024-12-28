---
project: metascraper
stars: 2372
description: Get unified metadata from websites using Open Graph, Microdata, RDFa, Twitter Cards, JSON-LD, HTML, and more.
url: https://github.com/microlinkhq/metascraper
---

  
  
  

=========

> A library to easily get unified metadata from websites using Open Graph, Microdata, RDFa, Twitter Cards, JSON-LD, HTML, and more.

What is it
----------

The **metascraper** library allows you to easily scrape metadata from an article on the web using Open Graph metadata, regular HTML metadata, and series of fallbacks.

It follows a few principles:

-   Have a high accuracy for online articles by default.
-   Make it simple to add new rules or override existing ones.
-   Don't restrict rules to CSS selectors or text accessors.

Getting started
---------------

Let's extract accurate information from the following website:

First, **metascraper** expects you provide the HTML markup behind the target URL.

There are multiple ways to get the HTML markup. In our case, we are going to run a programmatic headless browser to simulate real user navigation, so the data obtained will be close to a real-world example.

const getHTML \= require('html-get')

/\*\*
 \* \`browserless\` will be passed to \`html-get\`
 \* as driver for getting the rendered HTML.
 \*/
const browserless \= require('browserless')()

const getContent \= async url \=> {
  // create a browser context inside the main Chromium process
  const browserContext \= browserless.createContext()
  const promise \= getHTML(url, { getBrowserless: () \=> browserContext })
  // close browser resources before return the result
  promise.then(() \=> browserContext).then(browser \=> browser.destroyContext())
  return promise
}

/\*\*
 \* \`metascraper\` is a collection of tiny packages,
 \* so you can just use what you actually need.
 \*/
const metascraper \= require('metascraper')(\[
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
\])

/\*\*
 \* The main logic
 \*/
getContent('https://microlink.io')
  .then(metascraper)
  .then(metadata \=> console.log(metadata))
  .then(browserless.close)
  .then(process.exit)

The output will be something like:

{
  "author": "Microlink HQ",
  "date": "2022-07-10T22:53:04.856Z",
  "description": "Enter a URL, receive information. Normalize metadata. Get HTML markup. Take a screenshot. Identify tech stack. Generate a PDF. Automate web scraping. Run Lighthouse",
  "image": "https://cdn.microlink.io/logo/banner.jpeg",
  "logo": "https://cdn.microlink.io/logo/trim.png",
  "publisher": "Microlink",
  "title": "Turns websites into data — Microlink",
  "url": "https://microlink.io/"
}

What data it detects
--------------------

> **Note**: Custom metadata detection can be defined using a rule bundle.

Here is an example of the metadata that **metascraper** can detect:

-   `audio` — e.g. _https://cf-media.sndcdn.com/U78RIfDPV6ok.128.mp3_  
    A audio URL that best represents the article.
    
-   `author` — e.g. _Noah Kulwin_  
    A human-readable representation of the author's name.
    
-   `date` — e.g. _2016-05-27T00:00:00.000Z_  
    An ISO 8601 representation of the date the article was published.
    
-   `description` — e.g. _Venture capitalists are raising money at the fastest rate..._  
    The publisher's chosen description of the article.
    
-   `video` — e.g. _https://assets.entrepreneur.com/content/preview.mp4_  
    A video URL that best represents the article.
    
-   `image` — e.g. _https://assets.entrepreneur.com/content/3x2/1300/20160504155601-GettyImages-174457162.jpeg_  
    An image URL that best represents the article.
    
-   `lang` — e.g. _en_  
    An ISO 639-1 representation of the url content language.
    
-   `logo` — e.g. _https://entrepreneur.com/favicon180x180.png_  
    An image URL that best represents the publisher brand.
    
-   `publisher` — e.g. _Fast Company_  
    A human-readable representation of the publisher's name.
    
-   `title` — e.g. _Meet Wall Street's New A.I. Sheriffs_  
    The publisher's chosen title of the article.
    
-   `url` — e.g. _http://motherboard.vice.com/read/google-wins-trial-against-oracle-saves-9-billion_  
    The URL of the article.
    

How it works
------------

**metascraper** is built out of rules bundles.

It was designed to be easy to adapt. You can compose your own transformation pipeline using existing rules or write your own.

Rules bundles are a collection of HTML selectors around a determinate property. When you load the library, implicitly it is loading core rules.

Each set of rules load a set of selectors in order to get a determinate value.

These rules are sorted with priority: The first rule that resolve the value successfully, stop the rest of rules for get the property. Rules are sorted intentionally from specific to more generic.

Rules work as fallback between them:

-   If the first rule fails, then it fallback in the second rule.
-   If the second rule fails, time to third rule.
-   etc

**metascraper** do that until finish all the rule or find the first rule that resolves the value.

Importing rules
---------------

**metascraper** exports a constructor that need to be initialized providing a collection of rules to load:

const metascraper \= require('metascraper')(\[
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
\])

Again, the order of rules are loaded are important: Just the first rule that resolve the value will be applied.

Use the first parameter to pass custom options specific per each rules bundle:

const metascraper \= require('metascraper')(\[
  require('metascraper-clearbit')({
    size: 256,
    format: 'jpg'
  })
\])

Rules bundles
-------------

?> Can't find the rules bundle that you want? Let's open an issue to create it.

### Official

> Rules bundles maintained by metascraper maintainers.

**Core essential**

-   metascraper-audio – Get audio property from HTML markup.
-   metascraper-author – Get author property from HTML markup.
-   metascraper-date – Get date property from HTML markup.
-   metascraper-description – Get description property from HTML markup.
-   metascraper-feed – Get RSS/Atom feed URL from HTML markup.
-   metascraper-image – Get image property from HTML markup.
-   metascraper-iframe – Get iframe for embedding content for the supported providers.
-   metascraper-lang – Get lang property from HTML markup.
-   metascraper-logo – Get logo property from HTML markup.
-   metascraper-logo-favicon – Metascraper logo favicon fallback.
-   metascraper-media-provider – Get specific video provider url (Facebook/Twitter/Vimeo/etc).
-   metascraper-publisher – Get publisher property from HTML markup.
-   metascraper-readability – A Mozilla readability connector for metascraper.
-   metascraper-title – Get title property from HTML markup.
-   metascraper-url – Get url property from HTML markup.
-   metascraper-video – Get video property from HTML markup.

**Vendor specific**

-   metascraper-amazon – Metascraper integration with Amazon.
-   metascraper-clearbit – Metascraper integration with Clearbit Logo API.
-   metascraper-instagram – Metascraper integration for Instagram.
-   metascraper-manifest – Metascraper integration for detecting PWA Web app manifests.
-   metascraper-soundcloud – Metascraper integration with SoundCloud.
-   metascraper-telegram – Metascraper integration with Telegram.
-   metascraper-uol – Metascraper integration for uol.com URLs.
-   metascraper-spotify – Metascraper integration with Spotify.
-   metascraper-x – Metascraper integration with x.com.
-   metascraper-youtube – Metascraper integration with YouTube.

### Community

> Rules bundles maintained by individual users.

-   metascraper-address – Get schema.org formatted address.
-   metascraper-shopping – Get product information from HTML markup on merchant websites.

See CONTRIBUTING for adding your own module!

API
---

### constructor(rules)

Create a new **metascraper** instance declaring the rules bundle to be used explicitly.

#### rules

Type: `Array`

The collection of rules bundle to be loaded.

### metascraper(options)

Call the instance for extracting content based on rules bundle provided at the constructor.

#### options

#### url

_Required_  
Type: `String`

The URL associated with the HTML markup.

It is used for resolve relative links that can be present in the HTML markup.

it can be used as fallback field for different rules as well.

##### html

Type: `String`

The HTML markup for extracting the content.

##### htmlDom

Type: `object`

The DOM representation of the HTML markup. When it's not provided, it's get from the `html` parameter.

#### rules

Type: `Array`

You can pass additional rules to add on execution time.

These rules will be merged with your loaded rules at the beginning.

#### validateUrl

Type: `boolean`  
Default: `true`

Ensure the URL provided is validated as a WHATWG URL API compliant.

Environment Variables
---------------------

#### METASCRAPER\_RE2

Type: `boolean`  
Default: `true`

It attemptt to load re2 to use instead of RegExp.

Benchmark
---------

To give you an idea of how accurate **metascraper** is, here is a comparison of similar libraries:

Library

metascraper

html-metadata

node-metainspector

open-graph-scraper

unfluff

Correct

**95.54%**

**74.56%**

**61.16%**

**66.52%**

**70.90%**

Incorrect

1.79%

1.79%

0.89%

6.70%

10.27%

Missed

2.68%

23.67%

37.95%

26.34%

8.95%

A big part of the reason for **metascraper**'s higher accuracy is that it relies on a series of fallbacks for each piece of metadata, instead of just looking for the most commonly-used, spec-compliant pieces of metadata, like Open Graph.

**metascraper**'s default settings are targetted specifically at parsing online articles, which is why it's able to be more highly-tuned than the other libraries for that purpose.

If you're interested in the breakdown by individual pieces of metadata, check out the full comparison summary, or dive into the raw result data for each library.

License
-------

**metascraper** © Microlink, released under the MIT License.  
Authored and maintained by Microlink with help from contributors.

> microlink.io · GitHub microlinkhq · X @microlinkhq
