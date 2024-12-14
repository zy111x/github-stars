---
project: sanitize.css
stars: 5232
description: A best-practices CSS foundation
url: https://github.com/csstools/sanitize.css
---

sanitize.css
============

sanitize.css is a CSS library that provides consistent, cross-browser default styling of HTML elements alongside useful defaults.

**sanitize.css** is developed alongside normalize.css, which means every normalization is included, and every normalization and opinion are clearly marked and documented.

**sanitize.css** wraps styles in zero-specificity selectors using `:where()`.

Usage
-----

<link href\="https://cdn.skypack.dev/sanitize.css" rel\="stylesheet" />

Learn more about `sanitize.css`.

#### Forms CSS

A separate stylesheet that normalizes form controls without side effects.

<link href\="https://unpkg.com/sanitize.css/forms.css" rel\="stylesheet" />

Learn more about `forms.css`.

#### Assets CSS

A separate stylesheet that applies a comfortable measure to plain documents.

<link href\="https://unpkg.com/sanitize.css/assets.css" rel\="stylesheet" />

Learn more about `assets.css`.

#### Typography CSS

A separate stylesheet that normalizes typography using system interface fonts.

<link href\="https://unpkg.com/sanitize.css/typography.css" rel\="stylesheet" />

Learn more about `typography.css`.

#### Reduce Motion CSS

A separate stylesheet for restricting motion when the user has requested this at system level.

<link href\="https://unpkg.com/sanitize.css/reduce-motion.css" rel\="stylesheet" />

Learn more about `reduce-motion.css`.

#### System-UI

A separate stylesheet that adds support for using `system-ui` in Firefox.

<link href\="https://unpkg.com/sanitize.css/system-ui.css" rel\="stylesheet" />

#### UI-Monospace

A separate stylesheet that adds support for using `ui-monospace` in Chrome, Edge, and Firefox.

<link href\="https://unpkg.com/sanitize.css/ui-monospace.css" rel\="stylesheet" />

Install
-------

npm install sanitize.css --save

#### Webpack Usage

Import sanitize.css in CSS:

@import '~sanitize.css';
@import '~sanitize.css/forms.css';
@import '~sanitize.css/typography.css';

Alternatively, import sanitize.css in JS:

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

In `webpack.config.js`, be sure to use the appropriate loaders:

module.exports \= {
  module: {
    rules: \[
      {
        test: /\\.css$/,
        use: \[ 'style-loader', 'css-loader' \]
      }
    \]
  }
}

**Download**

See https://csstools.github.io/sanitize.css/latest/sanitize.css

What does it do?
----------------

-   Normalizes styles for a wide range of elements.
-   Corrects bugs and common browser inconsistencies.
-   Provides common, useful defaults.
-   Explains what code does using detailed comments.

Browser support
---------------

-   Chrome (last 2)
-   Edge (last 2)
-   Firefox (last 2)
-   Firefox ESR
-   Opera (last 2)
-   Safari (last 2)
-   iOS Safari (last 2)
-   Internet Explorer 9+

Differences
-----------

normalize.css and sanitize.css correct browser bugs while carefully testing and documenting changes. normalize.css styles adhere to css specifications. sanitize.css styles adhere to common developer expectations and preferences. reset.css unstyles all elements. Both sanitize.css and normalize.css are maintained in sync.

Features
--------

##### Box sizing defaults to border-box

\*, ::before, ::after {
  box-sizing: border-box;
}

##### Backgrounds do not repeat by default

\*, ::before, ::after {
  background-repeat: no-repeat;
}

##### Pseudo-elements inherit text decoration and vertical alignment

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

##### Cursors only change to hint non-obvious interfaces

html {
  cursor: default;
}

##### Text has a comfortable line height in all browsers

html {
  line-height: 1.5;
}

##### Tabs appear the same on the web as in a typical editor

html {
  tab-size: 4;
}

##### Words break to prevent overflow

html {
  word-break: break-all;
}

##### Documents do not use a margin for outer padding

body {
  margin: 0;
}

##### Navigation lists do not include a marker style

nav ol, nav ul {
  list-style: none;
  padding: 0;
}

##### Media elements align to the text center of other content

audio, canvas, iframe, img, svg, video {
  vertical-align: middle;
}

##### SVGs fallback to the current text color

svg:not(\[fill\]) {
  fill: currentColor;
}

##### Tables do not include additional border spacing

table {
  border-collapse: collapse;
}

##### Textareas only resize vertically by default

textarea {
  resize: vertical;
}

##### Single taps are dispatched immediately on clickable elements

a, area, button, input, label, select, summary, textarea, \[tabindex\] {
  \-ms-touch-action: manipulation;
  touch-action: manipulation;
}

##### ARIA roles include visual cursor hints

\[aria-busy\="true"\] {
  cursor: progress;
}

\[aria-controls\] {
  cursor: pointer;
}

\[aria-disabled\="true"\], \[disabled\] {
  cursor: default;
}

##### Visually hidden content remains accessible

\[aria-hidden\="false"\]\[hidden\] {
  display: initial;
}

\[aria-hidden\="false"\]\[hidden\]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

* * *

Forms
-----

sanitize.css includes a separate stylesheet for normalizing forms using minimal, standards-like styling.

<link href\="https://unpkg.com/sanitize.css" rel\="stylesheet" />
<link href\="https://unpkg.com/sanitize.css/forms.css" rel\="stylesheet" />

### Forms Features

##### Form controls appear visually consistent and restyle consistently

button, input, select, textarea {
  background-color: transparent;
  border: 1px solid WindowFrame;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  padding: 0.25em 0.375em;
}

\[type\="color"\],
\[type\="range"\] {
  border-width: 0;
  padding: 0;
}

##### Expandable select controls appear visually consistent

select {
  \-moz-appearance: none;
  \-webkit-appearance: none;
  background: no-repeat right center / 1em;
  border-radius: 0;
  padding-right: 1em;
}

select:not(\[multiple\]):not(\[size\]) {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E");
}

::\-ms-expand {
  display: none;
}

##### Placeholders appear visually consistent in Internet Explorer

:\-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.54);
}

Assets
------

sanitize.css includes a separate stylesheet for normalizing restricting the size of assets in all browsers.

<link href\="https://unpkg.com/sanitize.css" rel\="stylesheet" />
<link href\="https://unpkg.com/sanitize.css/assets.css" rel\="stylesheet" />

### Assets Features

##### Assets use a comfortable measure in all browsers

iframe,
img,
input,
select,
textarea {
  height: auto;
  max-width: 100%;
}

Typography
----------

sanitize.css includes a separate stylesheet for normalizing typography using system interface fonts.

<link href\="https://unpkg.com/sanitize.css" rel\="stylesheet" />
<link href\="https://unpkg.com/sanitize.css/typography.css" rel\="stylesheet" />

### Typography Features

##### Typography uses the default system font

html {
  font-family:
    system-ui,
    /\* macOS 10.11-10.12 \*/ -apple-system,
    /\* Windows 6+ \*/ Segoe UI,
    /\* Android 4+ \*/ Roboto,
    /\* Ubuntu 10.10+ \*/ Ubuntu,
    /\* Gnome 3+ \*/ Cantarell,
    /\* KDE Plasma 5+ \*/ Noto Sans,
    /\* fallback \*/ sans-serif,
    /\* macOS emoji \*/ "Apple Color Emoji",
    /\* Windows emoji \*/ "Segoe UI Emoji",
    /\* Windows emoji \*/ "Segoe UI Symbol",
    /\* Linux emoji \*/ "Noto Color Emoji";
}

##### Pre-formatted and code-formatted text uses the monospace system font

code, kbd, pre, samp {
  font-family:
    /\* macOS 10.10+ \*/ Menlo,
    /\* Windows 6+ \*/ Consolas,
    /\* Android 4+ \*/ Roboto Mono,
    /\* Ubuntu 10.10+ \*/ Ubuntu Monospace,
    /\* KDE Plasma 5+ \*/ Noto Mono,
    /\* KDE Plasma 4+ \*/ Oxygen Mono,
    /\* Linux/OpenOffice fallback \*/ Liberation Mono,
    /\* fallback \*/ monospace;
}

Reduce Motion
-------------

sanitize.css includes a separate stylesheet for restricting motion when the user has requested this at a system level.

<link href\="https://unpkg.com/sanitize.css" rel\="stylesheet" />
<link href\="https://unpkg.com/sanitize.css/reduce-motion.css" rel\="stylesheet" />

### Reduce Motion Features

##### Animations, scrolling effects, and transitions are reduced in all browsers

@media (prefers-reduced-motion: reduce) {
  \*,
  ::before,
  ::after {
    animation-delay: \-1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}

Contributing
------------

Please read the contribution guidelines in order to make the contribution process easy and effective for everyone involved.

Acknowledgements
----------------

sanitize.css is a project by Jonathan Neal, built upon normalize.css, a project by Jonathan Neal, co-created with Nicolas Gallagher.
