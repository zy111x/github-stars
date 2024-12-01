---
project: spotlight
stars: 1620
description: Web's most easy to integrate lightbox gallery library. Super-lightweight, outstanding performance, no dependencies.
url: https://github.com/nextapps-de/spotlight
---

==

### Web's most easy to integrate lightbox gallery library. Super-lightweight, outstanding performance, no dependencies.

Demo  •  Getting Started  •  Gallery Groups  •  Options  •  Styling  •  API  •  Changelog

Whats new in 0.7.0?
-------------------

The new version includes tons of fixes, new features and improvements which was collected over the last two years. Read the Changelog to get all new features.

### Live Demo:

https://nextapps-de.github.io/spotlight/

Spotlight runs out of the box:

-   No additional Javascript coding
-   No additional HTML snippets
-   No additional CSS resources
-   No additional icons/assets
-   No additional handling of dynamic content and event listener

Features
--------

-   Video Support
-   Mounting HTML node fragments as slides (you can add just everything as a slide!)
-   Gallery groups:
    -   group images to specific galleries
    -   group options inheritance
-   Toolbar & Gallery tools:
    -   Fullscreen
    -   Zoom in/out
    -   Toggle resize
    -   Switch theme
    -   Autoslide
    -   Download
    -   Progress Bar
    -   Page
    -   Title (also inherits from image "alt"-attribute)
    -   Description
    -   Customizable button
-   Adaptive responsive images (by viewport size, pixel ratio and available internet bandwidth)
-   Auto-fit images and videos (as "contain" or as "cover")
-   Custom Controls
-   Fully configurable via markup
-   Loading Spinner
-   Smart Preloading (prefetch next image including cancellation)
-   Customize via standard options
-   Simply customize via markup (data-attributes)
-   Built-in animations
-   Custom themes
-   Custom animations
-   Supported controls:
    -   Keyboard
    -   Touch
    -   Mouse (Move + Wheel)
-   Back-Button (Android)
-   Callbacks (onclick, onshow, onclose, onchange)
-   Global API for programmatic usage

**Technical properties:**

-   Outstanding performance
-   Memory optimized, tiny footprint, fully cleans up
-   Event capturing (just one single global event listener)
-   Bind additional global event listener dynamically:
    -   install when gallery opens
    -   cleanup when gallery was closed
-   No dependencies, no jQuery
-   Fully Responsive
-   Touch-friendly mobile support
-   Super-lightweight, all in all just 9kb gzip (js + css + html + icons)
-   Support for ES6 module system

#### Pending Feature Suggestions:

-   Inline Gallery
-   Pinch Zoom Support
-   2-Panel-Paging Strategy
-   Swipe down to close

Getting Started
---------------

**Get Latest Stable Build (Recommended):**

**Bundle:** (all assets bundled into one single file: js + css + html + icons)

spotlight.bundle.js

Download

https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/dist/spotlight.bundle.js

  
**Non-Bundled:** (js and css are separated, css includes icons as base64)

spotlight.min.js

Download

https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/dist/js/spotlight.min.js

spotlight.min.css

Download

https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/dist/css/spotlight.min.css

  
**Sources:** (not bundled at all, images as url to original resources)

ES6 Modules

Download

The _/src/js_ folder of this Github repository

LESS Files (source)

Download

The _/src/css_ folder of this Github repository

spotlight.css (compiled)

Download

https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/src/css/spotlight.css

src.zip

Download

Download all source files including image original resources.

**Get Latest (NPM):**

npm install spotlight.js

**Get Latest Nightly (Do not use for production!):**

Just exchange the version number from the URLs above with "master", e.g.: "/spotlight/**0.7.8**/dist/" into "/spotlight/**master**/dist".

> If you are using markup on anchor elements to inject the library, then it is recommended to load the lib inside your head section of the document. Because that will better prevent the original behavior of the anchor tag (e.g. when library wasn't fully loaded on page start).

### Use Bundled Version

The bundled version includes all assets like js, css, html and icon images as base64.

<html\>
<head\>
    <script src\="spotlight.bundle.js"\></script\>
</head\>
<body\></body\>
</html\>

### Use Non-Bundled Version

The non-bundled version needs to load js and css separately (css also includes icons as base64).

<html\>
<head\>
    <link rel\="stylesheet" href\="spotlight.min.css"\>
    <script src\="spotlight.min.js"\></script\>
</head\>
<body\></body\>
</html\>

### Preload Library / Async Load

> If you are using markup on anchor elements to inject the library, then it is recommended to load the lib inside your head section of the document. Read example above.

Just add a link tag to the header sections which indicated to preload the script. Right before the body is closing add your site scripts. Depending on your code you may need to load them in the right order.

<html\>
<head\>
    <title\></title\>
    <link rel\="preload" href\="spotlight.bundle.js" as\="script"\>
</head\>
<body\>
    <!--
    
    HTML CONTENT
    
    -->
    <!-- BOTTOM OF BODY -->
    <script src\="spotlight.bundle.js" defer\></script\>
    <!-- YOUR SCRIPT -->
    <script src\="my-script.js" defer\></script\>
</body\>
</html\>

You can also load the non-bundled version in the same way.

> In rare situations it might produce a short flashing/reflow after page load, depending on your stack. Moving the script tag into the head section will solve this issue. Also try to use the non-bundled version.

### ES6 Modules

The ES6 modules are located in `src/js/`. You need to load the stylesheet file explicitly (includes icons as base64).

<head\>
    <link rel\="stylesheet" href\="dist/css/spotlight.min.css"\>
</head\>

<script type\="module"\>
  import Spotlight from "./src/js/spotlight.js";
</script\>

You can also load modules via CDN, e.g.:

<script type\="module"\>
  import Spotlight from "https://unpkg.com/spotlight@0.7.8/src/js/spotlight.js";
</script\>

The ES6 modules are not minified. Please use your favored bundler or build tool for this purpose.

Basic Usage (Markup)
--------------------

#### Anchor + Images

The most simple way is the combination of img tags as preview images (thumbs) wrapped in an anchor element which points to the fully sized image. The advantage of this workaround is it fully falls back to a classical behavior. It is the universal markup language which all web tools already understand. Therefore, it may have some advantages for SEO also.

Just add the class _**spotlight**_ to an anchor element accordingly, e.g.:

<a class\="spotlight" href\="img1.jpg"\>
    <img src\="thumb1.jpg"\>
</a\>
<a class\="spotlight" href\="img2.jpg"\>
    <img src\="thumb2.jpg"\>
</a\>
<a class\="spotlight" href\="img3.jpg"\>
    <img src\="thumb3.jpg"\>
</a\>

This also works with dynamically loaded content. There is no need to inject listeners on new elements. Instead, Spotlight make use of global event capturing.

#### Non-Anchor Elements

Alternatively you can use non-anchor elements also:

<div class\="spotlight" data-src\="img1.jpg"\>
    <!-- image or any other elements -->
</a\>

Pretty much the same like anchors but uses _**data-src**_ instead of _**href**_.

### Gallery-Groups

Grouping galleries is useful when you have multiple images on your page which should be separated into groups, instead of adding all images to one single gallery when opened.

Give one of the outer wrapping element the class _**spotlight-group**_, e.g.:

<!-- Group 1 -->
<div class\="spotlight-group"\>
    <a class\="spotlight" href\="dog1.jpg"\>
        <img src\="dog1-thumb.jpg"\>
    </a\>
    <a class\="spotlight" href\="dog2.jpg"\>
        <img src\="dog2-thumb.jpg"\>
    </a\>
    <a class\="spotlight" href\="dog3.jpg"\>
        <img src\="dog3-thumb.jpg"\>
    </a\>
</div\>
<!-- Group 2 -->
<div class\="spotlight-group"\>
    <a class\="spotlight" href\="cat1.jpg"\>
        <img src\="cat1-thumb.jpg"\>
    </a\>
    <a class\="spotlight" href\="cat2.jpg"\>
        <img src\="cat2-thumb.jpg"\>
    </a\>
    <a class\="spotlight" href\="cat3.jpg"\>
        <img src\="cat3-thumb.jpg"\>
    </a\>
</div\>

Each of these groups now opens in its own gallery.

Gallery-Groups are also useful to declare global configuration as markup just once (group options inheritance).

Basic Usage (API)
-----------------

Also you can programmatically use Spotlight via the library API. This way does not require any dependant HTML elements (e.g. the classname "spotlight").

Define a gallery group as follows:

var gallery \= \[
    { src: "cat1.jpg" },
    { src: "cat2.jpg" },
    { src: "cat3.jpg" }
\];

Show gallery with default options:

Spotlight.show(gallery /\*, options \*/);

Options
-------

Pass options declarative via data-attributes in the HTML markup or use the Spotlight API.

> When using markup follow these style: `data-option="value"` (change _option_ and _value_ accordingly), e.g.: `<a class="spotlight" data-preload="false"></a>`.

> When using API follow thse style `{ option: value }` (change _option_ and _value_ accordingly), e.g.: `{ preload: false }`.

You can either apply the following data-attributes to the _**spotlight-group**_ wrapper element or apply them separately to each _**spotlight**_ anchor element (that also overrides inherited group definitions).

When using API the _**spotlight-group**_ is represented by the options payload, also you can assign attributes separately to each gallery entry (that also overrides inherited group definitions).

Option        

Values

Description

Default

class

string

Set a classname to this gallery instance to apply custom styles besides themes independently.

null

media

"image"  
"video"  
"node"

Sets the the type of the media which should be added to the page.

image

animation

string  
Array<string>  
"fade"  
"slide"  
"scale"  

Change animation (use built-ins or custom classname)  
**Note:** Markup as comma-separated list, e.g: `data-animation="slide,fade,scale"`.

slide, fade, scale

control

string  
Array<string>

Show/hide control elements as "whitelisted" through a comma-separated list, e.g. `data-control="autofit,page,fullscreen"`

page, zoom, autofit, fullscreen, close

page

true / false

Show/hide page in the toolbar

true

fullscreen

true / false

Show/hide fullscreen button (automatically hides when not supported by the browser)

true

zoom

true / false

Show/hide both zoom buttons in the toolbar

true

zoom-in

true / false

Show/hide zoom-in button in the toolbar

true

zoom-out

true / false

Show/hide zoom-out button in the toolbar

true

autofit

true / false

Show/hide autofit button in the toolbar

true

close

true / false

Show/hide the close icon in the toolbar

true

theme

true / false

Show/hide theme button

false

play

true / false / number

Show/hide play button. When passing a numeric value it will be used as a delay in seconds between each tick.

false

autoslide

true / false

Autoslide when opening gallery.

false

progress

true / false

Show/hide the animated autoslide progress bar

true

infinite

true / false

Restart from beginning when no slides left

false

autohide

true / false / number

Enable/disable automatically hide controls when inactive, also set cooldown time in seconds.

7

theme

string  
"white"

The classname of your custom theme. The theme "white" is a built-in theme.

null

title

string / false

Set image title or hide it  
**Note:** When using image elements, this attribute will also inherit automatically from `<img alt="...">` as well as from `<img title="...">`. To prevent this behavior you can set `data-title="false"` explicitly. This will hide the title regardless of any image alt-attributes.

null

description

string / false

Set image description or hide it

null

spinner

true / false

Enable/disable the spinner. When disabled the image will not hide until it is fully loaded, that could be useful for progressive jpeg.

true

button

str

Enable/disable a button in the footer section, also set button text.  
**Note:** When using as markup you have to provide a click target for the button or you can assign an `onclick` callback via options when used programmatically.

null

button-href

str

When using a button as markup you can provide a click target for the button, e.g. `<a button="click me" button-href="https://domain.com">`.

null

### Additional Image Options

Option        

Values

Description

Default

src-{size}

src-1200  
src-2400  
src-3800  
...

The tag/key represents the size of the image **longest** side. The content contains the path or url to the image (e.g. `data-src-800="image_800x400.jpg"`).

null

preload

true / false

Enable/disable preloading of the next image

true

fit

"contain"  
"cover"

Auto-fit the media either as "contain" or as "cover"

contain

download

true / false

Show/hide the download icon in the toolbar

false

### Additional Video Options

Most of these options for a video are inherited by the attributes of a standard video element.

Option        

Values

Description

Default

src-{format}

src-webm  
src-ogg  
src-mp4  
...

The tag/key represents the format of the video. The content contains the path or url to the video (e.g. `data-src-webm="video.webm"`).

null

fit

"contain"  
"cover"

Auto-fit the media either as "contain" or as "cover"

contain

autoplay

true  
false

Start the video immediately.

false

muted

true  
false

Start playing as muted.

false

preload

true  
false

Preload the video.

false

controls

true  
false

Show/hide the video controls.

true

inline

true  
false

Make the video player inline (equal to "playsinline").

false

poster

string

The path or URL to the preview image.

null

### API-only Options

Option        

Values

Description

Default

index

number

Sets the starting index when showing the gallery by using the Spotlight API. The index starts from 1.

1

onchange

function(index, options)

Pass a callback function which is get fired every time when a page/slide has changed. The first parameter holds the new page index, the second parameter provides the inherited option payload for this page.  
**Note:** The image may not have been fully loaded when the event is fired (preloading phase). The index starts from 1.

null

onshow  
onclose

function(index)

These callback functions are called when opening or closing the gallery (the first parameter holds the current page index).

null

onclick

function(index, options)

A callback function which is getting fired when the optional button in the footer sections was clicked. The first parameter holds the current page index, the second parameter provides the inherited option payload for this page.

null

### Example: Options & Group Inheritance (Markup)

<div class\="spotlight-group" data-title\="Group title" data-animation\="fade" data-control\="autofit,close"\>
    <a class\="spotlight" href\="cat1.jpg" data-title\="This is a title" data-theme\="white"\>
        <img src\="cat1-thumb.jpg"\>
    </a\>
    <a class\="spotlight" href\="cat2.jpg" data-description\="This is a description"\>
        <img src\="cat2-thumb.jpg"\>
    </a\>
    <a class\="spotlight" href\="cat3.jpg" data-button\="Click me" data-button-href\="javascript:alert('clicked')"\>
        <img src\="cat3-thumb.jpg" alt\="This is also a title"\>
    </a\>
    <a class\="spotlight" href\="cat4.jpg" data-title\="false" data-fit\="cover"\>
      <img src\="cat4-thumb.jpg" alt\="This title is hidden"\>
    </a\>
</div\>

**Note:** The 2nd image gets the title "Group title" from the group attributes, on the last image the title is explicitly set to be hidden.

> Control elements and animations has to be **whitelisted** as a comma-separated list when specified. Do not forget to add the "close" control, otherwise you need to provide another way to close the gallery, e.g. via the button in the footer (see the demo page bottom example).

### Example: Options & Group Inheritance (API)

Same result as above but as code:

Spotlight.show(\[{
    src: "cat1.jpg",
    title: "This is a title",
    theme: "white"
},{
    src: "cat2.jpg",
    description: "This is a description",
},{
    src: "cat3.jpg",
    button: "Click me",
    onclick: function(){ alert("clicked"); },
    title: "This is also a title"
},{
    src: "cat4.jpg",
    title: false,
    fit: "cover"
}\],{
    // Group Definitions:
    title: "Group title",
    animation: "fade",
    control: "autofit,close"
});

Adaptive Responsive Images
--------------------------

> This feature will improve overall performance of your page/application a lot, especially for mobile devices and bad internet connections.

You can declare a set of the same image in multiple dimensions and quality. Spotlight will pick the optimal version by taking into account:

1.  The browsers max resolution
2.  The device screen pixel ratio
3.  The available internet connection bandwidth

### Example: Markup

Save your images in several sizes and resolutions and assign the **longest** dimension of both sides (width, height) like this:

<a class\="spotlight" href\="cat1.jpg" 
                     data-src-800\="cat1\_800.jpg" 
                     data-src-1200\="cat1\_1200.jpg" 
                     data-src-2400\="cat1\_2400.jpg" 
                     data-src-3800\="cat1\_3800.jpg"\>
    <img src\="cat1-thumb.jpg"\>
</a\>

When clicked on it Spotlight will pick the optimum choice.

This markup completely falls back to standard browser behavior when something goes wrong, also it is SEO friendly.

### Example: API

Same result as above but as code:

Spotlight.show(\[{
    // the default "href" version as fallback isn't required here
    "src-800": "cat1\_800.jpg",
    "src-1200": "cat1\_1200.jpg",
    "src-2400": "cat1\_2400.jpg",
    "src-3800": "cat1\_3800.jpg"
}\]);

Support Video
-------------

> All data-attributes for markup a video is inherited by the attributes of a standard video element.

Considering you want to add a standard video element like this as a slide:

<video poster\="preview.jpg" muted preload controls autoplay playsinline\="false"\>
    <source src\="video.mp4" type\="video/mp4"\>
    <source src\="video.ogv" type\="video/ogg"\>
    <source src\="video.webm" type\="video/webm"\>
</video\>

### Example: Markup

You need a markup like this to represent the video from above:

<a class\="spotlight" data-media\="video"
                     data-src-webm\="video.webm"
                     data-src-ogg\="video.ogv"
                     data-src-mp4\="video.mp4"
                     data-poster\="preview.jpg"
                     data-autoplay\="true"
                     data-muted\="true"
                     data-preload\="true"
                     data-controls\="true"
                     data-inline\="false"\>
  <img src\="preview.jpg"\>
</a\>

### Example: API

Same result as above but as code:

Spotlight.show(\[{
  
  "media": "video",
  "src-webm": "video.webm",
  "src-ogg": "video.ogv",
  "src-mp4": "video.mp4",
  "poster": "preview.jpg",
  "autoplay": true,
  "muted": true,
  "preload": true,
  "controls": true,
  "inline": false
}\]);

Custom Controls
---------------

> You can add custom controls to the header toolbar by API usage only.

The basic concept is very straight forward. You just need to assign a unique classname along with an event listener. Basically you have to follow these steps.

1.  Initialize the Spotlight gallery manually **once** to make the template available for extensions:

Spotlight.init();

The gallery automatically initialize when first time open, so you can also add custom control inside the "onshow" callback.

1.  Add the custom control and pass a click handler (returns the button element):

var button \= Spotlight.addControl("my-control", function(event){
    // handle click event
    console.log("button clicked");
});

1.  Define a CSS class to style your button:

/\* your control name will be prefixed by "spl-" automatically \*/
.spl-my-control{
    background-image: url(icon.svg);
    background-size: 22px;
}

> Important: custom control classes gets always css-prefixed by "spl-" automatically to prevent classname collision!

Removing an added control:

Spotlight.removeControl("my-control");

### Advanced Example (Like Button)

Let's take a useful example of dynamically adding a "like button" in the toolbar. You can see a live demo of this example on the demo page (bottom section).

Providing a gallery as normal and add a custom attribute "like", which stores the current like state of each image.

const gallery \= \[{

    src: "image1.jpg",
    like: false
},{
    src: "image2.jpg",
    like: false,
},{
    src: "image3.jpg",
    like: false
}\];

Define a CSS class to style your button, e.g.:

/\* custom classes are always prefixed by "spl-" automatically \*/
.spl-like{
    background-image: url(heart-outline.svg);
    background-size: 22px;
}
/\* optionally, additional state to toggle the button: \*/
.spl-like.on{
    background-image: url(heart.svg);
}

> Please keep in mind, when your custom control has the name "like" the corresponding classname always gets prefixed by "spl-" and becomes "spl-like" to prevent classname collision. Do not name your control in prefixed style like "spl-like", because that will prefix this also (and becomes "spl-spl-like").

We need some variables to store some state which is used in the callback handler later:

// store the button element to apply dom changes to it
let like;
// store the current index
let slide \= 0;

Implement a click event handler of the like button, e.g.:

function handler(event){
  
    // get the current like state
    // at this point we use the stored last index from the variable "slide"
    const current\_like\_state \= !gallery\[slide\].like;
  
    // toggles the current like state
    gallery\[slide\].like \= current\_like\_state;
  
    // assign the state as class to visually represent the current like state
    this.classList.toggle("on");
  
    if(current\_like\_state){
  
      // do something if liked ...
    }
    else{
  
      // do something if unliked ...
    }
}

> The keyword `this` corresponds to the current clicked element (the like icon in this example).

Finally, create the gallery and provide some callbacks to insert the custom control dynamically:

Spotlight.show(gallery, {

    // fires when gallery opens
    onshow: function(index){

        // the method "addControl" returns the new created control element
        like \= Spotlight.addControl("like", handler);
    },
    // fires when gallery change to another page
    onchange: function(index, options){

        // store the current index for the button listener
        // the slide index start from 1 (as "page 1")
        slide \= index \- 1;

        // initially apply the stored like state when slide is openened
        // at this point we use the stored like element
        like.classList.toggle("on", gallery\[slide\].like);
    },
    // fires when gallery is requested to close
    onclose: function(index){

        // remove the custom button, so you are able
        // to open next gallery without this custom control
        Spotlight.removeControl("like");
    }
});

You did not need to remove the custom control everytime. When all your galleries have this custom control, then simply add the control after you call `Spotlight.init()` once.

Initialize the Spotlight gallery once:

Spotlight.init();

Add the custom control once:

like \= Spotlight.addControl("like", handler);

Open the gallery and just provide an "onchange" handler:

Spotlight.show(gallery, {
    onchange: function(index, options){
        slide \= index \- 1;
        like.classList.toggle("on", gallery\[slide\].like);
    }
});

That is the same custom like button from above example, just shorter but also non-dynamically added for all gallery instances.

Embedding Node Fragments
------------------------

> With node fragments you can simply add everything as a slide. This way you can create your own full customized slides with its own interactions inside them.

You can use this feature completely by markup by providing a query selector as "src" which points to a node in your document.

### Using Auto-Mount / Auto-Unmount

> This workaround is also compatible if you are using server-side rendering.

You can use a hidden backstore optionally which holds the fragments to be inserted as a slide, e.g.:

<div style\="display: none"\>
    <div id\="fragment" style\="width: 100%"\>
        <h1\>Embedded Node Fragment</h1\>
        <p\>Any HTML Content...</p\>
    </div\>
</div\>

Provide a **dom query selector** as "src" which points to a node in your document:

<a class\="spotlight" data-media\="node" data-src\="#fragment"\>
    Click here to open
</a\>

When closing the gallery or change the page to another slide, the fragment will automatically move back to its original position (the hidden backstore in this example).

### Custom Slides (API)

You can add nodes as slide which are not part of the document via the API (e.g. fragments, templates, offscreen nodes). Also, you can create an iframe to load extern contents.

#### Example: Youtube Video

You can create your own fragments/templates and add the root node directly as "src":

Spotlight.show(\[{
    media: "node",
    src: (function(){
        const iframe \= document.createElement("iframe");
        iframe.src \= "https://www.youtube.com/embed/tgbNymZ7vqY";
        return iframe;
    }())
}\]);

#### Example: Templating Engine

Or use your preferred templating engine and add the root node as "src":

Mikado(template).mount(root).render(data);

Spotlight.show(\[{
    media: "node",
    src: root
}\]);

Spotlight API
-------------

Define a gallery group as follows:

var gallery \= \[{
    title: "Image 1",
    description: "This is a description.",
    src: "gallery/london-1758181.jpg"
},{
    title: "Image 2",
    description: "This is a description.",
    src: "gallery/sea-1975403.jpg"
},{
    title: "Image 3",
    description: "This is a description.",
    src: "gallery/newport-beach-2089906.jpg"
}\];

Show gallery with default options:

Spotlight.show(gallery);

Show gallery with custom options:

Spotlight.show(gallery, {
    index: 2,
    theme: "white",
    autohide: false,
    control: \["autofit", "zoom", "close"\]
});

Close gallery:

Spotlight.close();

Next slide:

Spotlight.next();

Previous slide:

Spotlight.prev();

Goto slide:

Spotlight.goto(3);

Zoom to:

Spotlight.zoom(1.5);

Toggle theme:

Spotlight.theme();

Set theme:

Spotlight.theme("white");

Spotlight.theme("dark");

Toggle fullscreen:

Spotlight.fullscreen();

Set fullscreen:

Spotlight.fullscreen(true);

Spotlight.fullscreen(false);

Toggle autofit:

Spotlight.autofit();

Set autofit:

Spotlight.autofit(true);

Spotlight.autofit(false);

Toggle menu:

Spotlight.menu();

Set menu:

Spotlight.menu(true);

Spotlight.menu(false);

Download current image:

Spotlight.download();

#### Example ES6:

import Spotlight from "./spotlight.js";

Spotlight.show(
    \[ /\* Gallery \*/ \], 
    { /\* Options \*/ }
);

You can also import any of the Spotlight methods just as you need:

import { show, close, goto } from "./spotlight.js";

show(\[/\* Gallery \*/\], {/\* Options \*/});
// ....
goto(5);
// ....
close();

> Modern build tools will apply dead code elimination when just importing methods your application needs.

Custom Styling
--------------

To add custom styling just override CSS classes accordingly:

#spotlight { /\* main font styles, background \*/ }
.spl-page { /\* current page (toolbar) \*/ }
.spl-fullscreen { /\* button fullscreen (toolbar) \*/ }
.spl-autofit { /\* button autofit (toolbar) \*/ }
.spl-zoom-out { /\* button zoom out (toolbar) \*/ }
.spl-zoom-in { /\* button zoom in (toolbar) \*/ }
.spl-theme { /\* button theme (toolbar) \*/ }
.spl-play { /\* button autoplay (toolbar) \*/ }
.spl-download { /\* button download (toolbar) \*/ }
.spl-close { /\* button close (toolbar) \*/ }
.spl-prev { /\* button page prev \*/ }
.spl-next { /\* button page next \*/ }
.spl-spinner { /\* preloading spinner \*/ }
.spl-spinner.spin { /\* show spinner \*/ }
.spl-spinner.error { /\* show loading error \*/ }
.spl-title { /\* image title \*/ }
.spl-description { /\* image description \*/ }
.spl-button { /\* button footer \*/ }
.spl-header { /\* the header wrapping element \*/ }
.spl-footer { /\* the footer wrapping element \*/ }

Themes
------

**Customize builtin themes**

Use the same classes as above:

#spotlight.white .spl-title{
    /\* image title in white theme \*/
}

#spotlight{
    /\* main background in dark theme \*/
}

**Create New Themes**

Define styles, e.g. for the custom theme name "my-theme":

.my-theme .spl-title{
    /\* image title in custom theme \*/
}
.my-theme{
    /\* main background in custom theme \*/
}

Apply custom theme via markdown:

<a class\="spotlight" href\="cat.jpg" data-theme\="my-theme"\>
    <img src\="cat\_thumb.jpg"\>
</a\>

Or apply custom theme via API:

Spotlight.show(\[ /\* Gallery \*/ \],{
    theme: "my-theme"
});

You could also set themes per image separately:

Spotlight.show(\[
    { src: "cat1.jpg" }, // default theme
    { src: "cat2.jpg", theme: "my-theme" },
    { src: "cat3.jpg", theme: "white" }
\]);

#### CSS Class

If you like to apply styles independently besides themes you can simply do that by adding a class during initialization:

Spotlight.show(\[
    { src: "cat1.jpg" }, // default theme
    { src: "cat2.jpg", theme: "my-theme" },
    { src: "cat3.jpg", theme: "white" }
\],{
    class: "custom"
});

In your stylesheet you can apply you custom styles, .e.g.:

#spotlight.custom .spl-title{
    font-size: 15px;
}

Custom Animations
-----------------

> Important: The style class for a custom animation describes the **hidden state** of an image.

You can define your own custom animation by:

**1.** Define the styles in default state (when image is shown), e.g.:

.spl-pane \> \*{
    filter: grayscale(0);
    transition: filter 1s ease-out,
                opacity 0.5s ease-out;
}

**2.** Define styles for the **hidden state** of the transition by adding a custom classname:

.spl-pane .my-animation{
    filter: grayscale(1);
    opacity: 0;
}

Apply custom animation via markdown:

<a class\="spotlight" href\="cat.jpg" data-animation\="my-animation"\>
    <img src\="cat\_thumb.jpg"\>
</a\>

Or apply custom animation via API:

Spotlight.show(\[ /\* Gallery \*/ \],{
    animation: "my-animation"
});

You could also set animations per image separately:

Spotlight.show(\[
    { src: "cat1.jpg" }, // default animation
    { src: "cat2.jpg", animation: "my-animation" },
    { src: "cat3.jpg", animation: "slide,fade" }
\]);

#### Use different animations for galleries

The example above will apply the animation to all instances of your gallery. When you want to add specific animation to each gallery you need to add a `class` in your options:

Spotlight.show(\[
    { src: "cat1.jpg" },
    { src: "cat2.jpg" },
    { src: "cat3.jpg" }
\],{
  animation: "my-animation",
  class: "custom"
});

Then, add your classname (context selector) to your CSS for the _**visible**_ state of the animation:

.custom .spl-pane \> \*{
    filter: grayscale(0);
    transition: filter 1s ease-out,
                opacity 0.5s ease-out;
}

Now you can assign different animations to each gallery.

Custom Builds
-------------

Go to the root directory of Spotlight and run:

npm install

Perform a build:

npm run build

The final build is located in the `dist/` folder.

* * *

Copyright 2019-2021 Nextapps GmbH  
Released under the Apache 2.0 License
