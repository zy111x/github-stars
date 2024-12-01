---
project: twemoji
stars: 16869
description: Emoji for everyone. https://twemoji.twitter.com/
---

Twitter Emoji (Twemoji)
=======================

A simple library that provides standard Unicode emoji support across all platforms.

**Twemoji v14.0** adheres to the Unicode 14.0 spec and supports the Emoji 14.0 spec. _We do not support custom emoji._

The Twemoji library offers support for all Unicode-defined emoji which are recommended for general interchange (RGI).

Usage
-----

### CDN Support

The folks over at MaxCDN have graciously provided CDN support.

MaxCDN is shut down right now, so in the meanwhile use a different CDN or download the assets. (See Maxcdn has shut down, cdn not working anymore. · Issue #580 · twitter/twemoji).

Use the following in the `<head>` tag of your HTML document(s):

<script src\="https://unpkg.com/twemoji@latest/dist/twemoji.min.js" crossorigin\="anonymous"\></script\>

This guarantees that you will always use the latest version of the library.

If, instead, you'd like to include the latest version explicitly, you can add the following tag:

<script src\="https://unpkg.com/twemoji@14.0.2/dist/twemoji.min.js" integrity\="sha384-ICOlZarapRIX6UjKPcWKEpubjg7lGADN7Y9fYP4DU9zm0aPFhgnP5ef+XFaPyKv+" crossorigin\="anonymous"\></script\>

### Download

If instead you want to download a specific version, please look at the `gh-pages` branch, where you will find the built assets for both our latest and older versions.

API
---

Following are all the methods exposed in the `twemoji` namespace.

### twemoji.parse( ... ) V1

This is the main parsing utility and has 3 overloads per parsing type.

Although there are two kinds of parsing supported by this utility, we recommend you use DOM parsing, explained below. Each type of parsing accepts a callback to generate an image source or an options object with parsing info.

The second kind of parsing is string parsing, explained in the legacy documentation here. This is unrecommended because this method does not sanitize the string or otherwise prevent malicious code from being executed; such sanitization is out of scope.

#### DOM parsing

If the first argument to `twemoji.parse` is an `HTMLElement`, generated image tags will replace emoji that are **inside `#text` nodes only** without compromising surrounding nodes or listeners, and completely avoiding the usage of `innerHTML`.

If security is a major concern, this parsing can be considered the safest option but with a slight performance penalty due to DOM operations that are inevitably _costly_.

var div \= document.createElement('div');
div.textContent \= 'I \\u2764\\uFE0F emoji!';
document.body.appendChild(div);

twemoji.parse(document.body);

var img \= div.querySelector('img');

// note the div is preserved
img.parentNode \=== div; // true

img.src;        // https://twemoji.maxcdn.com/v/latest/72x72/2764.png
img.alt;        // \\u2764\\uFE0F
img.className;  // emoji
img.draggable;  // false

All other overloads described for `string` are available in exactly the same way for DOM parsing.

### Object as parameter

Here's the list of properties accepted by the optional object that can be passed to the `parse` function.

  {
    callback: Function,   // default the common replacer
    attributes: Function, // default returns {}
    base: string,         // default MaxCDN
    ext: string,          // default ".png"
    className: string,    // default "emoji"
    size: string|number,  // default "72x72"
    folder: string        // in case it's specified
                          // it replaces .size info, if any
  }

#### callback

The function to invoke in order to generate image `src`(s).

By default it is a function like the following one:

function imageSourceGenerator(icon, options) {
  return ''.concat(
    options.base, // by default Twitter Inc. CDN
    options.size, // by default "72x72" string
    '/',
    icon,         // the found emoji as code point
    options.ext   // by default ".png"
  );
}

#### base

The default url is the same as `twemoji.base`, so if you modify the former, it will reflect as default for all parsed strings or nodes.

#### ext

The default image extension is the same as `twemoji.ext` which is `".png"`.

If you modify the former, it will reflect as default for all parsed strings or nodes.

#### className

The default `class` for each generated image is `emoji`. It is possible to specify a different one through this property.

##### size

The default asset size is the same as `twemoji.size` which is `"72x72"`.

If you modify the former, it will reflect as default for all parsed strings or nodes.

#### folder

In case you don't want to specify a size for the image. It is possible to choose a folder, as in the case of SVG emoji.

twemoji.parse(genericNode, {
  folder: 'svg',
  ext: '.svg'
});

This will generate urls such `https://twemoji.maxcdn.com/svg/2764.svg` instead of using a specific size based image.

Utilities
---------

Basic utilities / helpers to convert code points to JavaScript surrogates and vice versa.

### twemoji.convert.fromCodePoint()

For a given HEX codepoint, returns UTF-16 surrogate pairs.

twemoji.convert.fromCodePoint('1f1e8');
 // "\\ud83c\\udde8"

### twemoji.convert.toCodePoint()

For given UTF-16 surrogate pairs, returns the equivalent HEX codepoint.

 twemoji.convert.toCodePoint('\\ud83c\\udde8\\ud83c\\uddf3');
 // "1f1e8-1f1f3"

 twemoji.convert.toCodePoint('\\ud83c\\udde8\\ud83c\\uddf3', '~');
 // "1f1e8~1f1f3"

Tips
----

### Inline Styles

If you'd like to size the emoji according to the surrounding text, you can add the following CSS to your stylesheet:

img.emoji {
   height: 1em;
   width: 1em;
   margin: 0 .05em 0 .1em;
   vertical-align: \-0.1em;
}

This will make sure emoji derive their width and height from the `font-size` of the text they're shown with. It also adds just a little bit of space before and after each emoji, and pulls them upwards a little bit for better optical alignment.

### UTF-8 Character Set

To properly support emoji, the document character set must be set to UTF-8. This can be done by including the following meta tag in the document `<head>`

<meta charset\="utf-8"\>

### Exclude Characters (V1)

To exclude certain characters from being replaced by twemoji.js, call twemoji.parse() with a callback, returning false for the specific unicode icon. For example:

twemoji.parse(document.body, {
    callback: function(icon, options, variant) {
        switch ( icon ) {
            case 'a9':      // © copyright
            case 'ae':      // ® registered trademark
            case '2122':    // ™ trademark
                return false;
        }
        return ''.concat(options.base, options.size, '/', icon, options.ext);
    }
});

Legacy API (V1)
---------------

If you're still using our V1 API, you can read our legacy documentation here.

Contributing
------------

The contributing documentation can be found here.

Attribution Requirements
------------------------

As an open source project, attribution is critical from a legal, practical and motivational perspective in our opinion. The graphics are licensed under the CC-BY 4.0 which has a pretty good guide on best practices for attribution.

However, we consider the guide a bit onerous and as a project, will accept a mention in a project README or an 'About' section or footer on a website. In mobile applications, a common place would be in the Settings/About section (for example, see the mobile Twitter application Settings->About->Legal section). We would consider a mention in the HTML/JS source sufficient also.

Community Projects
------------------

-   Twemoji Cheatsheet by @ShahriarKh: An easy-to-use cheatsheet for exploring, copying and downloading emojis!
-   Twemoji Amazing by @SebastianAigner: Use Twemoji using CSS classes (like Font Awesome).
-   Twemoji Ruby by @JollyGoodCode: Use Twemoji in Ruby.
-   Twemoji Utils by @gustavwilliam: Utilities for finding and downloading Twemoji source files.
-   Twemoji for Pencil by @Nathanielnw: Use Twemoji in Pencil.
-   FrwTwemoji - Twemoji in dotnet by @FrenchW: Use Twemoji in any dotnet project (C#, asp.net ...).
-   Emojiawesome - Twemoji for Yellow by @datenstrom: Use Twemoji on your website.
-   EmojiPanel for Twitter by @danielbovey: Insert Twemoji into your tweets on twitter.com.
-   Twitter Color Emoji font by @bderickson: Use Twemoji as your system default font on Linux & OS X.
-   Emojica by @xoudini: An iOS framework allowing you to replace all standard emoji in strings with Twemoji.
-   gwt-twemoji by @nbartels: Use Twemoji in GWT
-   JavaFXEmojiTextFlow by @pavlobu: A JavaFX library allowing you to replace all standard emoji in extended EmojiTextFlow with Twemoji.
-   Vue Twemoji Picker by @kevinfaguiar: A fast plug-n-play Twemoji Picker (+textarea for Twemoji rendering) for Vue.
-   \[Unmaintained\] Twemoji Awesome by @ellekasai: Use Twemoji using CSS classes (like Font Awesome).
-   EmojiOnRoku by @KasperGam: Use Twemoji on Roku!
-   LaTeX Twemoji by @rossel.jost: Use Twemoji in LaTeX.
-   PHP Twemoji by @Astrotomic: Use twemoji within your PHP website project's by replacing standard Emoji with twemoji urls.

Committers and Contributors
---------------------------

-   Justine De Caires (Twitter)
-   Jason Sofonia (Twitter)
-   Bryan Haggerty (ex-Twitter)
-   Nathan Downs (ex-Twitter)
-   Tom Wuttke (ex-Twitter)
-   Andrea Giammarchi (ex-Twitter)
-   Joen Asmussen (WordPress)
-   Marcus Kazmierczak (WordPress)

The goal of this project is to simply provide emoji for everyone. We definitely welcome improvements and fixes, but we may not merge every pull request suggested by the community due to the simple nature of the project.

The rules for contributing are available in the `CONTRIBUTING.md` file.

Thank you to all of our contributors.

License
-------

Copyright 2019 Twitter, Inc and other contributors

Code licensed under the MIT License: http://opensource.org/licenses/MIT

Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/
