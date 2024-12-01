---
project: css-protips
stars: 28461
description: ⚡️ A collection of tips to help take your CSS skills pro 🦾
url: https://github.com/AllThingsSmitty/css-protips
---

CSS Protips
===========

A collection of tips to help take your CSS skills pro.

> For other great lists check out @sindresorhus's curated list of awesome lists.

Table of Contents
-----------------

-   Protips
-   Support
-   Translations
-   Contribution Guidelines

Protips
-------

1.  Use a CSS Reset
2.  Inherit `box-sizing`
3.  Use `unset` Instead of Resetting All Properties
4.  Use `:not()` to Apply/Unapply Borders on Navigation
5.  Check if Font Is Installed Locally
6.  Add `line-height` to `body`
7.  Set `:focus` for Form Elements
8.  Vertically-Center Anything
9.  Use `aspect-ratio` Instead of Height/Width
10.  Comma-Separated Lists
11.  Select Items Using Negative `nth-child`
12.  Use SVG for Icons
13.  Use the "Lobotomized Owl" Selector
14.  Use `max-height` for Pure CSS Sliders
15.  Equal-Width Table Cells
16.  Get Rid of Margin Hacks With Flexbox
17.  Use Attribute Selectors with Empty Links
18.  Control Specificity Better With `:is()`
19.  Style "Default" Links
20.  Intrinsic Ratio Boxes
21.  Style Broken Images
22.  Use `rem` for Global Sizing; Use `em` for Local Sizing
23.  Hide Autoplay Videos That Aren't Muted
24.  Use `:root` for Flexible Type
25.  Set `font-size` on Form Elements for a Better Mobile Experience
26.  Use Pointer Events to Control Mouse Events
27.  Set `display: none` on Line Breaks Used as Spacing
28.  Use `:empty` to Hide Empty HTML Elements

### Use a CSS Reset

CSS resets help enforce style consistency across different browsers with a clean slate for styling elements. There are plenty of reset patterns to find, or you can use a more simplified reset approach:

\*,
\*::before,
\*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

Now elements will be stripped of margins and padding, and `box-sizing` lets you manage layouts with the CSS box model.

#### Demo

Tip

If you follow the Inherit `box-sizing` tip below you might opt to not include the `box-sizing` property in your CSS reset.

back to table of contents

### Inherit `box-sizing`

Let `box-sizing` be inherited from `html`:

html {
  box-sizing: border-box;
}

\*,
\*::before,
\*::after {
  box-sizing: inherit;
}

This makes it easier to change `box-sizing` in plugins or other components that leverage other behavior.

#### Demo

back to table of contents

### Use `unset` Instead of Resetting All Properties

When resetting an element's properties, it's not necessary to reset each individual property:

button {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  outline: none;
  padding: 0;
}

You can specify all of an element's properties using the `all` shorthand. Setting the value to `unset` changes an element's properties to their initial values:

button {
  all: unset;
}

back to table of contents

### Use `:not()` to Apply/Unapply Borders on Navigation

Instead of putting on the border...

/\* add border \*/
.nav li {
  border-right: 1px solid #666;
}

...and then taking it off the last element...

/\* remove border \*/
.nav li:last-child {
  border-right: none;
}

...use the `:not()` pseudo-class to only apply to the elements you want:

.nav li:not(:last-child) {
  border-right: 1px solid #666;
}

Here, the CSS selector is read as a human would describe it.

#### Demo

back to table of contents

### Check if Font Is Installed Locally

You can check if a font is installed locally before fetching it remotely, which is a good performance tip, too.

@font-face {
  font-family: "Dank Mono";
  src:
    /\* Full name \*/
    local("Dank Mono"),
    /\* Postscript name \*/
    local("Dank Mono"),
    /\* Otherwise, download it! \*/
    url("//...a.server/fonts/DankMono.woff");
}

code {
  font-family: "Dank Mono", system-ui-monospace;
}

H/T to Adam Argyle for sharing this protip and demo.

back to table of contents

### Add `line-height` to `body`

You don't need to add `line-height` to each `<p>`, `<h*>`, _et al_. separately. Instead, add it to `body`:

body {
  line-height: 1.5;
}

This way textual elements can inherit from `body` easily.

#### Demo

back to table of contents

### Set `:focus` for Form Elements

Sighted keyboard users rely on focus to determine where keyboard events go in the page. Make focus for form elements stand out and consistent than a browser's default implementation:

a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  box-shadow: none;
  outline: #000 dotted 2px;
  outline-offset: .05em;
}

#### Demo

back to table of contents

### Vertically-Center Anything

No, it's not black magic, you really can center elements vertically. You can do this with flexbox...

html,
body {
  height: 100%;
}

body {
  align-items: center;
  display: flex;
  justify-content: center;
}

...and also with CSS Grid:

body {
  display: grid;
  height: 100vh;
  place-items: center;
}

Tip

Want to center something else? Vertically, horizontally...anything, anytime, anywhere? CSS-Tricks has a nice write-up on doing all of that.

#### Demo

back to table of contents

### Use `aspect-ratio` Instead of Height/Width

The `aspect-ratio` property allows you to easily size elements and maintain consistent width-to-height ratio. This is incredibly useful in responsive web design to prevent layout shift. Use `object-fit` with it to prevent disrupting the layout if the height/width values of images changes.

img {
  aspect-ratio: 16 / 9; /\* width / height \*/
  object-fit: cover;
}

Learn more about the `aspect-ratio` property in this web.dev post.

#### Demo

back to table of contents

### Comma-Separated Lists

Make list items look like a real, comma-separated list:

ul \> li:not(:last-child)::after {
  content: ",";
}

Use the `:not()` pseudo-class and no comma will be added to the last item.

Note

This tip may not be ideal for accessibility, specifically screen readers. And copy/paste from the browser doesn't work with CSS-generated content. Proceed with caution.

back to table of contents

### Select Items Using Negative `nth-child`

Use negative `nth-child` in CSS to select items 1 through n.

li {
  display: none;
}

/\* select items 1 through 3 and display them \*/
li:nth-child(-n+3) {
  display: block;
}

Or, since you've already learned a little about using `:not()`, try:

/\* select all items except the first 3 and display them \*/
li:not(:nth-child(-n+3)) {
  display: block;
}

#### Demo

back to table of contents

### Use SVG for Icons

There's no reason not to use SVG for icons:

.logo {
  background: url("logo.svg");
}

SVG scales well for all resolution types and is supported in all browsers back to IE9. Ditch your .png, .jpg, or .gif-jif-whatev files.

Note

If you have SVG icon-only buttons for sighted users and the SVG fails to load, this will help maintain accessibility:

.no-svg .icon-only::after {
  content: attr(aria-label);
}

back to table of contents

### Use the "Lobotomized Owl" Selector

It may have a strange name but using the universal selector (`*`) with the adjacent sibling selector (`+`) can provide a powerful CSS capability:

\* + \* {
  margin-top: 1.5em;
}

In this example, all elements in the flow of the document that follow other elements will receive `margin-top: 1.5em`.

Tip

For more on the "lobotomized owl" selector, read Heydon Pickering's post on _A List Apart_.

#### Demo

back to table of contents

### Use `max-height` for Pure CSS Sliders

Implement CSS-only sliders using `max-height` with overflow hidden:

.slider {
  max-height: 200px;
  overflow-y: hidden;
  width: 300px;
}

.slider:hover {
  max-height: 600px;
  overflow-y: scroll;
}

The element expands to the `max-height` value on hover and the slider displays as a result of the overflow.

back to table of contents

### Equal-Width Table Cells

Tables can be a pain to work with. Try using `table-layout: fixed` to keep cells at equal width:

.calendar {
  table-layout: fixed;
}

Pain-free table layouts.

#### Demo

back to table of contents

### Get Rid of Margin Hacks With Flexbox

When working with column gutters you can get rid of `nth-`, `first-`, and `last-child` hacks by using flexbox's `space-between` property:

.list {
  display: flex;
  justify-content: space-between;
}

.list .person {
  flex-basis: 23%;
}

Now column gutters always appear evenly-spaced.

back to table of contents

### Use Attribute Selectors with Empty Links

Display links when the `<a>` element has no text value but the `href` attribute has a link:

a\[href^="http"\]:empty::before {
  content: attr(href);
}

That's really convenient.

#### Demo

Note

This tip may not be ideal for accessibility, specifically screen readers. And copy/paste from the browser doesn't work with CSS-generated content. Proceed with caution.

back to table of contents

### Control Specificity Better with `:is()`

The `:is()` pseudo-class is used to target multiple selectors at once, reducing redundancy and enhancing code readability. This is incredibly useful for writing large selectors in a more compact form.

:is(section, article, aside, nav) :is(h1, h2, h3, h4, h5, h6) {
  color: green;
}

The above ruleset is equivalent to the following number selector rules...

section h1, section h2, section h3, section h4, section h5, section h6,
article h1, article h2, article h3, article h4, article h5, article h6,
aside h1, aside h2, aside h3, aside h4, aside h5, aside h6,
nav h1, nav h2, nav h3, nav h4, nav h5, nav h6 {
  color: green;
}

#### Demo

back to table of contents

### Style "Default" Links

Add a style for "default" links:

a\[href\]:not(\[class\]) {
  color: #008000;
  text-decoration: underline;
}

Now links that are inserted via a CMS, which don't usually have a `class` attribute, will have a distinction without generically affecting the cascade.

back to table of contents

### Intrinsic Ratio Boxes

To create a box with an intrinsic ratio, all you need to do is apply top or bottom padding to a div:

.container {
  height: 0;
  padding-bottom: 20%;
  position: relative;
}

.container div {
  border: 2px dashed #ddd;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

Using 20% for padding makes the height of the box equal to 20% of its width. No matter the width of the viewport, the child div will keep its aspect ratio (100% / 20% = 5:1).

#### Demo

back to table of contents

### Style Broken Images

Make broken images more aesthetically-pleasing with a little bit of CSS:

img {
  display: block;
  font-family: sans-serif;
  font-weight: 300;
  height: auto;
  line-height: 2;
  position: relative;
  text-align: center;
  width: 100%;
}

Now add pseudo-elements rules to display a user message and URL reference of the broken image:

img::before {
  content: "We're sorry, the image below is broken :(";
  display: block;
  margin-bottom: 10px;
}

img::after {
  content: "(url: " attr(src) ")";
  display: block;
  font-size: 12px;
}

Tip

Learn more about styling for this pattern in Ire Aderinokun's post.

back to table of contents

### Use `rem` for Global Sizing; Use `em` for Local Sizing

After setting the base font size at the root (`html { font-size: 100%; }`), set the font size for textual elements to `em`:

h2 {
  font-size: 2em;
}

p {
  font-size: 1em;
}

Then set the font-size for modules to `rem`:

article {
  font-size: 1.25rem;
}

aside .module {
  font-size: .9rem;
}

Now each module becomes compartmentalized and easier to style, more maintainable, and flexible.

back to table of contents

### Hide Autoplay Videos That Aren't Muted

This is a great trick for a custom user stylesheet. Avoid overloading a user with sound from a video that autoplays when the page is loaded. If the sound isn't muted, don't show the video:

video\[autoplay\]:not(\[muted\]) {
  display: none;
}

Once again, we're taking advantage of using the `:not()` pseudo-class.

back to table of contents

### Use `:root` for Flexible Type

The type font size in a responsive layout should be able to adjust with each viewport. You can calculate the font size based on the viewport height and width using `:root`:

:root {
  font-size: calc(1vw + 1vh + .5vmin);
}

Now you can utilize the `root em` unit based on the value calculated by `:root`:

body {
  font: 1rem/1.6 sans-serif;
}

#### Demo

back to table of contents

### Set `font-size` on Form Elements for a Better Mobile Experience

To avoid mobile browsers (iOS Safari, _et al_.) from zooming in on HTML form elements when a `<select>` drop-down is tapped, add `font-size` to the selector rule:

input\[type\="text"\],
input\[type\="number"\],
select,
textarea {
  font-size: 16px;
}

back to table of contents

### Use Pointer Events to Control Mouse Events

Pointer events allow you to specify how the mouse interacts with the element it's touching. To disable the default pointer event on a button, for instance:

button:disabled {
  opacity: .5;
  pointer-events: none;
}

It's that simple.

back to table of contents

### Set `display: none` on Line Breaks Used as Spacing

As Harry Roberts pointed out, this can help prevent CMS users from using extra line breaks for spacing:

br + br {
  display: none;
}

back to table of contents

### Use `:empty` to Hide Empty HTML Elements

If you have HTML elements that are empty, i.e., the content has yet to be set either by a CMS or dynamically injected (e.g., `<p class="error-message"></p>`) and it's creating unwanted space on your layout, use the `:empty` pseudo-class to hide the element on the layout.

:empty {
  display: none;
}

Note

Keep in mind that elements with whitespace aren't considered empty, e.g., `<p class="error-message"> </p>`.

back to table of contents

Support
-------

Current versions of Chrome, Firefox, Safari, and Edge.

back to table of contents

Translations
------------

Note

I've had less time available to maintain the growing list of translated tips; adding a new tip requires including it with over a dozen translations. For that reason, translated README files are likely to not include all the tips listed on the main README file.

-   简体中文
-   正體中文
-   Deutsch
-   Español
-   Français
-   λληνικά
-   ગુજરાતી
-   Italiano
-   日本語
-   한국어
-   Polskie
-   Português do Brasil
-   Português do Europe
-   Русский
-   Tiếng Việt

back to table of contents
