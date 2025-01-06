---
project: HEAD
stars: 30005
description: A simple guide to HTML <head> elements
url: https://github.com/joshbuchea/HEAD
---

🤯 HEAD
=======

> A simple guide to HTML `<head>` elements

Table of Contents
-----------------

-   Recommended Minimum
-   Elements
-   Meta
-   Link
-   Icons
-   Social
    -   Facebook Open Graph
    -   Twitter Card
    -   Twitter Privacy
    -   Schema.org
    -   Pinterest
    -   Facebook Instant Articles
    -   OEmbed
    -   QQ/Wechat
-   Browsers / Platforms
    -   Apple iOS
    -   Google Android
    -   Google Chrome
    -   Microsoft Internet Explorer
-   Browsers (Chinese)
    -   360 Browser
    -   QQ Mobile Browser
    -   UC Mobile Browser
-   App Links
-   Other Resources
-   Related Projects
-   Other Formats
-   Translations
-   Contributing
    -   Contributors
-   Author
-   License

Recommended Minimum
-------------------

Below are the essential elements for any web document (websites/apps):

<meta charset\="utf-8"\>
<meta name\="viewport" content\="width=device-width, initial-scale=1"\>
<!--
  The above 2 meta tags \*must\* come first in the <head>
  to consistently ensure proper document rendering.
  Any other head element should come \*after\* these tags.
 -->
<title\>Page Title</title\>

`meta charset` - defines the encoding of the website, `utf-8` is the standard

`meta name="viewport"` - viewport settings related to mobile responsiveness

`width=device-width` - use the physical width of the device (great for mobile!)

`initial-scale=1` - the initial zoom, 1 means no zoom

**⬆ back to top**

Elements
--------

Valid `<head>` elements include `meta`, `link`, `title`, `style`, `script`, `noscript`, and `base`.

These elements provide information for how a document should be perceived, and rendered, by web technologies. e.g. browsers, search engines, bots, etc.

<!--
  Set the character encoding for this document, so that
  all characters within the UTF-8 space (such as emoji)
  are rendered correctly.
\-->
<meta charset\="utf-8"\>

<!-- Set the document's title -->
<title\>Page Title</title\>

<!-- Set the base URL for all relative URLs within the document -->
<base href\="https://example.com/page.html"\>

<!-- Link to an external CSS file -->
<link rel\="stylesheet" href\="styles.css"\>

<!-- Used for adding in-document CSS -->
<style\>
  /\* ... \*/
</style\>

<!-- JavaScript & No-JavaScript tags -->
<script src\="script.js"\></script\>
<script\>
  // function(s) go here
</script\>
<noscript\>
  <!-- No JS alternative -->
</noscript\>

**⬆ back to top**

Meta
----

<!--
  The following 2 meta tags \*must\* come first in the <head>
  to consistently ensure proper document rendering.
  Any other head element should come \*after\* these tags.
\-->
<meta charset\="utf-8"\>
<meta name\="viewport" content\="width=device-width, initial-scale=1"\>

<!--
  Allows control over where resources are loaded from.
  Place as early in the <head> as possible, as the tag  
  only applies to resources that are declared after it.
\-->
<meta http-equiv\="Content-Security-Policy" content\="default-src 'self'"\>

<!-- Name of web application (only should be used if the website is used as an app) -->
<meta name\="application-name" content\="Application Name"\>

<!-- Theme Color for Chrome, Firefox OS and Opera -->
<meta name\="theme-color" content\="#4285f4"\>

<!-- Short description of the document (limit to 150 characters) -->
<!-- This content \*may\* be used as a part of search engine results. -->
<meta name\="description" content\="A description of the page"\>

<!-- Control the behavior of search engine crawling and indexing -->
<meta name\="robots" content\="index,follow"\><!-- All Search Engines -->
<meta name\="googlebot" content\="index,follow"\><!-- Google Specific -->

<!-- Tells Google not to show the sitelinks search box -->
<meta name\="google" content\="nositelinkssearchbox"\>

<!-- Tells Google not to provide a translation for this document -->
<meta name\="google" content\="notranslate"\>

<!-- Verify website ownership -->
<meta name\="google-site-verification" content\="verification\_token"\><!-- Google Search Console -->
<meta name\="yandex-verification" content\="verification\_token"\><!-- Yandex Webmasters -->
<meta name\="msvalidate.01" content\="verification\_token"\><!-- Bing Webmaster Center -->
<meta name\="alexaVerifyID" content\="verification\_token"\><!-- Alexa Console -->
<meta name\="p:domain\_verify" content\="code\_from\_pinterest"\><!-- Pinterest Console-->
<meta name\="norton-safeweb-site-verification" content\="norton\_code"\><!-- Norton Safe Web -->

<!-- Identify the software used to build the document (i.e. - WordPress, Dreamweaver) -->
<meta name\="generator" content\="program"\>

<!-- Short description of your document's subject -->
<meta name\="subject" content\="your document's subject"\>

<!-- Gives a general age rating based on the document's content -->
<meta name\="rating" content\="General"\>

<!-- Allows control over how referrer information is passed -->
<meta name\="referrer" content\="no-referrer"\>

<!-- Disable automatic detection and formatting of possible phone numbers -->
<meta name\="format-detection" content\="telephone=no"\>

<!-- Completely opt out of DNS prefetching by setting to "off" -->
<meta http-equiv\="x-dns-prefetch-control" content\="off"\>

<!-- Specifies the document to appear in a specific frame -->
<meta http-equiv\="Window-Target" content\="\_value"\>

<!-- Geo tags -->
<meta name\="ICBM" content\="latitude, longitude"\>
<meta name\="geo.position" content\="latitude;longitude"\>
<meta name\="geo.region" content\="country\[-state\]"\><!-- Country code (ISO 3166-1): mandatory, state code (ISO 3166-2): optional; eg. content="US" / content="US-NY" -->
<meta name\="geo.placename" content\="city/town"\><!-- eg. content="New York City" -->

<!-- Web Monetization https://webmonetization.org/docs/getting-started -->
<meta name\="monetization" content\="$paymentpointer.example"\>

-   📖 Meta tags that Google understands
-   📖 WHATWG Wiki: MetaExtensions
-   📖 ICBM on Wikipedia
-   📖 Geotagging on Wikipedia

**⬆ back to top**

Link
----

<!-- Points to an external stylesheet -->
<link rel\="stylesheet" href\="https://example.com/styles.css"\>

<!-- Helps prevent duplicate content issues -->
<link rel\="canonical" href\="https://example.com/article/?page=2"\>

<!-- Links to an AMP HTML version of the current document -->
<link rel\="amphtml" href\="https://example.com/path/to/amp-version.html"\>

<!-- Links to a JSON file that specifies "installation" credentials for the web applications -->
<link rel\="manifest" href\="manifest.json"\>

<!-- Links to information about the author(s) of the document -->
<link rel\="author" href\="humans.txt"\>

<!-- Refers to a copyright statement that applies to the link's context -->
<link rel\="license" href\="copyright.html"\>

<!-- Gives a reference to a location in your document that may be in another language -->
<link rel\="alternate" href\="https://es.example.com/" hreflang\="es"\>

<!-- Provides information about an author or another person -->
<link rel\="me" href\="https://google.com/profiles/thenextweb" type\="text/html"\>
<link rel\="me" href\="mailto:name@example.com"\>
<link rel\="me" href\="sms:+15035550125"\>

<!-- Links to a document that describes a collection of records, documents, or other materials of historical interest -->
<link rel\="archives" href\="https://example.com/archives/"\>

<!-- Links to top level resource in an hierarchical structure -->
<link rel\="index" href\="https://example.com/article/"\>

<!-- Provides a self reference - useful when the document has multiple possible references -->
<link rel\="self" type\="application/atom+xml" href\="https://example.com/atom.xml"\>

<!-- The first, last, previous, and next documents in a series of documents, respectively -->
<link rel\="first" href\="https://example.com/article/"\>
<link rel\="last" href\="https://example.com/article/?page=42"\>
<link rel\="prev" href\="https://example.com/article/?page=1"\>
<link rel\="next" href\="https://example.com/article/?page=3"\>

<!-- Used when a 3rd party service is utilized to maintain a blog -->
<link rel\="EditURI" href\="https://example.com/xmlrpc.php?rsd" type\="application/rsd+xml" title\="RSD"\>

<!-- Forms an automated comment when another WordPress blog links to your WordPress blog or post -->
<link rel\="pingback" href\="https://example.com/xmlrpc.php"\>

<!-- Notifies a URL when you link to it on your document -->
<link rel\="webmention" href\="https://example.com/webmention"\>

<!-- Enables posting to your own domain using a Micropub client -->
<link rel\="micropub" href\="https://example.com/micropub"\>

<!-- Open Search -->
<link rel\="search" href\="/open-search.xml" type\="application/opensearchdescription+xml" title\="Search Title"\>

<!-- Feeds -->
<link rel\="alternate" href\="https://feeds.feedburner.com/example" type\="application/rss+xml" title\="RSS"\>
<link rel\="alternate" href\="https://example.com/feed.atom" type\="application/atom+xml" title\="Atom 0.3"\>

<!-- Prefetching, preloading, prebrowsing -->
<!-- More info: https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
<link rel\="dns-prefetch" href\="//example.com/"\>
<link rel\="preconnect" href\="https://www.example.com/"\>
<link rel\="prefetch" href\="https://www.example.com/"\>
<link rel\="prerender" href\="https://example.com/"\>
<link rel\="preload" href\="image.png" as\="image"\>

-   📖 Link Relations

**⬆ back to top**

Icons
-----

<!-- For IE 10 and below -->
<!-- Place favicon.ico in the root directory - no tag necessary -->

<!-- Icon in the highest resolution we need it for -->
<link rel\="icon" sizes\="192x192" href\="/path/to/icon.png"\>

<!-- Apple Touch Icon (reuse 192px icon.png) -->
<link rel\="apple-touch-icon" href\="/path/to/apple-touch-icon.png"\>

<!-- Safari Pinned Tab Icon -->
<link rel\="mask-icon" href\="/path/to/icon.svg" color\="blue"\>

-   📖 All About Favicons (And Touch Icons)
-   📖 Creating Pinned Tab Icons
-   📖 Favicon Cheat Sheet
-   📖 Icons & Browser Colors

**⬆ back to top**

Social
------

### Facebook Open Graph

> Most content is shared to Facebook as a URL, so it's important that you mark up your website with Open Graph tags to take control over how your content appears on Facebook. More about Facebook Open Graph Markup

<meta property\="fb:app\_id" content\="123456789"\>
<meta property\="og:url" content\="https://example.com/page.html"\>
<meta property\="og:type" content\="website"\>
<meta property\="og:title" content\="Content Title"\>
<meta property\="og:image" content\="https://example.com/image.jpg"\>
<meta property\="og:image:alt" content\="A description of what is in the image (not a caption)"\>
<meta property\="og:description" content\="Description Here"\>
<meta property\="og:site\_name" content\="Site Name"\>
<meta property\="og:locale" content\="en\_US"\>
<meta property\="article:author" content\=""\>

-   📖 Open Graph protocol
-   🛠 Test your page with the Facebook Sharing Debugger

### Twitter Card

> With Twitter Cards, you can attach rich photos, videos and media experiences to Tweets, helping to drive traffic to your website. More about Twitter Cards

<meta name\="twitter:card" content\="summary"\>
<meta name\="twitter:site" content\="@site\_account"\>
<meta name\="twitter:creator" content\="@individual\_account"\>
<meta name\="twitter:url" content\="https://example.com/page.html"\>
<meta name\="twitter:title" content\="Content Title"\>
<meta name\="twitter:description" content\="Content description less than 200 characters"\>
<meta name\="twitter:image" content\="https://example.com/image.jpg"\>
<meta name\="twitter:image:alt" content\="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters."\>

-   📖 Getting started with cards — Twitter Developers
-   🛠 Test your page with the Twitter Card Validator

### Twitter Privacy

If you embed tweets in your website, Twitter can use information from your site to tailor content and suggestions to Twitter users. More about Twitter privacy options.

<!-- disallow Twitter from using your site's info for personalization purposes -->
<meta name\="twitter:dnt" content\="on"\>

### Schema.org

<html lang\="" itemscope itemtype\="https://schema.org/Article"\>
    <head\>
      <link rel\="author" href\=""\>
      <link rel\="publisher" href\=""\>
      <meta itemprop\="name" content\="Content Title"\>
      <meta itemprop\="description" content\="Content description less than 200 characters"\>
      <meta itemprop\="image" content\="https://example.com/image.jpg"\>

**Note:** These meta tags require the `itemscope` and `itemtype` attributes to be added to the `<html>` tag.

-   📖 Getting Started - schema.org
-   🛠 Test your page with the Rich Results Test

### Pinterest

Pinterest lets you prevent people from saving things from your website, according to their help center. The `description` is optional.

<meta name\="pinterest" content\="nopin" description\="Sorry, you can't save from my website!"\>

### Facebook Instant Articles

<meta charset\="utf-8"\>
<meta property\="op:markup\_version" content\="v1.0"\>

<!-- The URL of the web version of your article -->
<link rel\="canonical" href\="https://example.com/article.html"\>

<!-- The style to be used for this article -->
<meta property\="fb:article\_style" content\="myarticlestyle"\>

-   📖 Creating Articles - Instant Articles
-   📖 Code Samples - Instant Articles

### OEmbed

<link rel\="alternate" type\="application/json+oembed"
  href\="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=json"
  title\="oEmbed Profile: JSON"\>
<link rel\="alternate" type\="text/xml+oembed"
  href\="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=xml"
  title\="oEmbed Profile: XML"\>

-   📖 oEmbed format

### QQ/Wechat

Users share web pages to qq wechat will have a formatted message

<meta itemprop\="name" content\="share title"\>
<meta itemprop\="image" content\="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png"\>
<meta name\="description" itemprop\="description" content\="share content"\>

-   📖 Code Format Docs

**⬆ back to top**

Browsers / Platforms
--------------------

### Apple iOS

<!-- Smart App Banner -->
<meta name\="apple-itunes-app" content\="app-id=APP\_ID,affiliate-data=AFFILIATE\_ID,app-argument=SOME\_TEXT"\>

<!-- Disable automatic detection and formatting of possible phone numbers -->
<meta name\="format-detection" content\="telephone=no"\>

<!-- Launch Icon (180x180px or larger) -->
<link rel\="apple-touch-icon" href\="/path/to/apple-touch-icon.png"\>

<!-- Launch Screen Image -->
<link rel\="apple-touch-startup-image" href\="/path/to/launch.png"\>

<!-- Launch Icon Title -->
<meta name\="apple-mobile-web-app-title" content\="App Title"\>

<!-- Enable standalone (full-screen) mode -->
<meta name\="apple-mobile-web-app-capable" content\="yes"\>

<!-- Status bar appearance (has no effect unless standalone mode is enabled) -->
<meta name\="apple-mobile-web-app-status-bar-style" content\="black"\>

<!-- iOS app deep linking -->
<meta name\="apple-itunes-app" content\="app-id=APP-ID, app-argument=http/url-sample.com"\>
<link rel\="alternate" href\="ios-app://APP-ID/http/url-sample.com"\>

-   📖 Configuring Web Applications

### Google Android

<meta name\="theme-color" content\="#E64545"\>

<!-- Add to home screen -->
<meta name\="mobile-web-app-capable" content\="yes"\>
<!-- More info: https://developer.chrome.com/multidevice/android/installtohomescreen -->

<!-- Android app deep linking -->
<meta name\="google-play-app" content\="app-id=package-name"\>
<link rel\="alternate" href\="android-app://package-name/http/url-sample.com"\>

### Google Chrome

<link rel\="chrome-webstore-item" href\="https://chrome.google.com/webstore/detail/APP\_ID"\>

<!-- Disable translation prompt -->
<meta name\="google" content\="notranslate"\>

### Microsoft Internet Explorer

<!-- Force IE 8/9/10 to use its latest rendering engine -->
<meta http-equiv\="x-ua-compatible" content\="ie=edge"\>

<!-- Disable automatic detection and formatting of possible phone numbers by Skype Toolbar browser extension -->
<meta name\="skype\_toolbar" content\="skype\_toolbar\_parser\_compatible"\>

<!-- Windows Tiles -->
<meta name\="msapplication-config" content\="/browserconfig.xml"\>

Minimum required xml markup for `browserconfig.xml`:

<?xml version\="1.0" encoding\="utf-8"?>
<browserconfig\>
   <msapplication\>
     <tile\>
        <square70x70logo src\="small.png"/>
        <square150x150logo src\="medium.png"/>
        <wide310x150logo src\="wide.png"/>
        <square310x310logo src\="large.png"/>
     </tile\>
   </msapplication\>
</browserconfig\>

-   📖 Browser configuration schema reference

**⬆ back to top**

Browsers (Chinese)
------------------

### 360 Browser

<!-- Select rendering engine order -->
<meta name\="renderer" content\="webkit|ie-comp|ie-stand"\>

### QQ Mobile Browser

<!-- Locks the screen into the specified orientation -->
<meta name\="x5-orientation" content\="landscape/portrait"\>

<!-- Display this document in fullscreen -->
<meta name\="x5-fullscreen" content\="true"\>

<!-- Document will be displayed in "application mode" (fullscreen, etc.) -->
<meta name\="x5-page-mode" content\="app"\>

### UC Mobile Browser

<!-- Locks the screen into the specified orientation -->
<meta name\="screen-orientation" content\="landscape/portrait"\>

<!-- Display this document in fullscreen -->
<meta name\="full-screen" content\="yes"\>

<!-- UC browser will display images even if in "text mode" -->
<meta name\="imagemode" content\="force"\>

<!-- Document will be displayed in "application mode"(fullscreen, forbidding gesture, etc.) -->
<meta name\="browsermode" content\="application"\>

<!-- Disabled the UC browser's "night mode" for this document -->
<meta name\="nightmode" content\="disable"\>

<!-- Simplify the document to reduce data transfer -->
<meta name\="layoutmode" content\="fitscreen"\>

<!-- Disable the UC browser's feature of "scaling font up when there are many words in this document" -->
<meta name\="wap-font-scale" content\="no"\>

-   📖 UC Browser Docs

**⬆ back to top**

App Links
---------

<!-- iOS -->
<meta property\="al:ios:url" content\="applinks://docs"\>
<meta property\="al:ios:app\_store\_id" content\="12345"\>
<meta property\="al:ios:app\_name" content\="App Links"\>

<!-- Android -->
<meta property\="al:android:url" content\="applinks://docs"\>
<meta property\="al:android:app\_name" content\="App Links"\>
<meta property\="al:android:package" content\="org.applinks"\>

<!-- Web fall back -->
<meta property\="al:web:url" content\="https://applinks.org/documentation"\>

-   📖 App Links

**⬆ back to top**

Other Resources
---------------

-   📖 HTML5 Boilerplate Docs: The HTML
-   📖 HTML5 Boilerplate Docs: Extend and customize

**⬆ back to top**

Related Projects
----------------

-   Atom HTML Head Snippets - Atom package for `HEAD` snippets
-   Sublime Text HTML Head Snippets - Sublime Text package for `HEAD` snippets
-   head-it - CLI interface for `HEAD` snippets
-   vue-head - Manipulating the meta information of the `HEAD` tag for Vue.js

**⬆ back to top**

Other Formats
-------------

-   📄 PDF

**⬆ back to top**

🌐 Translations
---------------

-   🇮🇩 Bahasa
-   🇧🇷 Brazilian Portuguese
-   🇨🇳 Chinese (Simplified)
-   🇩🇪 German
-   🇮🇹 Italian
-   🇯🇵 Japanese
-   🇰🇷 Korean
-   🇷🇺 Russian/Русский
-   🇪🇸 Spanish
-   🇹🇷 Turkish/Türkçe

**⬆ back to top**

🤝 Contributing
---------------

**Open an issue or a pull request to suggest changes or additions.**

### Guide

The **HEAD** repository consists of two branches:

#### 1\. `master`

This branch consists of the `README.md` file that is reflected on the htmlhead.dev website. All changes to the content of the guide should be made in this file.

Please follow these steps for pull requests:

{:.list-style-default}

-   Modify only one tag, or one related set of tags at a time
-   Use double quotes on attributes
-   Don't include a trailing slash in self-closing elements — the HTML5 spec says they're optional
-   Consider including a link to documentation that supports your change

#### 2\. `gh-pages`

This branch is responsible for the htmlhead.dev website. We use Jekyll to deploy the `README.md` markdown file to GitHub Pages. All website related modifications should be made in this branch.

You may find it helpful to review the Jekyll Docs and understand how Jekyll works before working in this branch.

🌟 Contributors
---------------

Check out all the super awesome contributors 🤩

👤 Author
---------

**Josh Buchea**

-   GitHub: @joshbuchea
-   Mastodon: @joshbuchea@hachyderm.io

💛 Support
----------

If this project was helpful for you or your organization, please considering supporting my work directly:

-   💛 Sponsor me on GitHub
-   ⭐️ Star this project on GitHub
-   🐙 Follow me on GitHub
-   🐘 Follow me on Mastodon

Everything helps, thanks! 🙏

— Josh

📝 License
----------

**⬆ back to top**
