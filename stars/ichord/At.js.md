---
project: At.js
stars: 5288
description: Add Github like mentions autocomplete to your application.
url: https://github.com/ichord/At.js
---

⚠️ Announcement ⚠️
------------------

**This project was no longer maintained.** **You could use zurb tribute instead.**

* * *

**An autocompletion library to autocomplete mentions, smileys etc. just like on Github!**  

#### Notice

At.js now **depends on** Caret.js.  
Please read **CHANGELOG.md** for more details if you are going to update to new version.

### Demo

http://ichord.github.com/At.js

### Documentation

https://github.com/ichord/At.js/wiki

### Compatibility

-   `textarea` - Chrome, Safari, Firefox, IE7+ (maybe IE6)
-   `contentEditable` - Chrome, Safari, Firefox, IE9+

### Features Preview

-   Support IE 7+ for **textarea**.
-   Supports HTML5 **contentEditable** elements (NOT including IE 8)
-   Can listen to any character and not just '@'. Can set up multiple listeners for different characters with different behavior and data
-   Listener events can be bound to multiple inputors.
-   Format returned data using templates
-   Keyboard controls in addition to mouse
    -   `Tab` or `Enter` keys select the value
    -   `Up` and `Down` navigate between values (and `Ctrl-P` and `Ctrl-N` also)
    -   `Right` and `left` will re-search the keyword.
-   Custom data handlers and template renderers using a group of configurable callbacks
-   Supports AMD

### Requirements

-   jQuery >= 1.7.0.
-   Caret.js (You can use `Component` or `Bower` to install it.)

### Integrating with your Application

Simply include the following files in your HTML and you are good to go.

<link href\="css/jquery.atwho.css" rel\="stylesheet"\>
<script src\="http://code.jquery.com/jquery.js"\></script\>
<script src\="js/jquery.caret.js"\></script\>
<script src\="js/jquery.atwho.js"\></script\>

$('#inputor').atwho({
    at: "@",
    data:\['Peter', 'Tom', 'Anne'\]
})

#### Bower & Component

For installing using Bower you can use `jquery.atwho` and for Component please use `ichord/At.js`.

#### Rails

You can include At.js in your `Rails` application using the gem jquery-atwho-rails.

### Core Team Members

-   @ichord (twitter)
