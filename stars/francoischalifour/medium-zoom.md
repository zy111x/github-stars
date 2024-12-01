---
project: medium-zoom
stars: 3687
description: 🔎🖼 A JavaScript library for zooming images like Medium
---

### medium-zoom

A JavaScript library for zooming images like Medium

  

  
  
**🔬 Playground ・ 🔎 Demo ・ 📚 Storybook**

**Contents**

-   Features
-   Installation
-   Usage
-   API
    -   Selectors
    -   Options
    -   Methods
    -   Attributes
    -   Events
-   Framework integrations
-   Examples
-   Debugging
-   Browser support
-   Contributing
-   License

Features
--------

-   📱 **Responsive** — scale on mobile and desktop
-   🚀 **Performant and lightweight** — optimized to reach 60 fps
-   ⚡️ **High definition support** — load the HD version of your image on zoom
-   🔎 **Flexibility** — apply the zoom to a selection of images
-   🖱 **Mouse, keyboard and gesture friendly** — click anywhere, press a key or scroll away to close the zoom
-   🎂 **Event handling** — trigger events when the zoom enters a new state
-   📦 **Customization** — set your own margin, background and scroll offset
-   🔧 **Pluggable** — add your own features to the zoom
-   💎 **Custom templates** — extend the default look to match the UI of your app
-   🔌 **Framework agnostic** — works with React, Vue, Angular, Svelte, Solid, etc.

Installation
------------

The module is available on the npm registry.

npm install medium-zoom
# or
yarn add medium-zoom

###### Download

-   Normal
-   Minified

###### CDN

-   jsDelivr
-   unpkg
-   esm.sh

Usage
-----

> Try it out in the browser

Import the library as a module:

import mediumZoom from 'medium-zoom'

Or import the library with a script tag:

<script src\="node\_modules/medium-zoom/dist/medium-zoom.min.js"\></script\>

That's it! You don't need to import any CSS styles.

Assuming you add the `data-zoomable` attribute to your images:

mediumZoom('\[data-zoomable\]')

Tip

If you want to control when to inject the Medium Zoom CSS styles, you can use the pure JavaScript bundle:

import mediumZoom from 'medium-zoom/dist/pure'
import 'medium-zoom/dist/style.css'

API
---

mediumZoom(selector?: string | HTMLElement | HTMLElement\[\] | NodeList, options?: object): Zoom

### Selectors

The selector allows attaching images to the zoom. It can be of the following types:

-   CSS selectors
-   `HTMLElement`
-   `NodeList`
-   `Array`

// CSS selector
mediumZoom('\[data-zoomable\]')

// HTMLElement
mediumZoom(document.querySelector('#cover'))

// NodeList
mediumZoom(document.querySelectorAll('\[data-zoomable\]'))

// Array
const images \= \[
  document.querySelector('#cover'),
  ...document.querySelectorAll('\[data-zoomable\]'),
\]

mediumZoom(images)

### Options

The options enable the customization of the zoom. They are defined as an object with the following properties:

Property

Type

Default

Description

`margin`

`number`

`0`

The space outside the zoomed image

`background`

`string`

`"#fff"`

The background of the overlay

`scrollOffset`

`number`

`40`

The number of pixels to scroll to close the zoom

`container`

`string` | `HTMLElement` | `object`

`null`

The viewport to render the zoom in  
Read more →

`template`

`string` | `HTMLTemplateElement`

`null`

The template element to display on zoom  
Read more →

mediumZoom('\[data-zoomable\]', {
  margin: 24,
  background: '#BADA55',
  scrollOffset: 0,
  container: '#zoom-container',
  template: '#zoom-template',
})

### Methods

#### `open({ target?: HTMLElement }): Promise<Zoom>`

Opens the zoom and returns a promise resolving with the zoom.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.open()

_Emits an event `open` on animation start and `opened` when completed._

#### `close(): Promise<Zoom>`

Closes the zoom and returns a promise resolving with the zoom.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.close()

_Emits an event `close` on animation start and `closed` when completed._

#### `toggle({ target?: HTMLElement }): Promise<Zoom>`

Opens the zoom when closed / dismisses the zoom when opened, and returns a promise resolving with the zoom.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.toggle()

#### `attach(...selectors: string[] | HTMLElement[] | NodeList[] | Array[]): Zoom`

Attaches the images to the zoom and returns the zoom.

const zoom \= mediumZoom()

zoom.attach('#image-1', '#image-2')
zoom.attach(
  document.querySelector('#image-3'),
  document.querySelectorAll('\[data-zoomable\]')
)

#### `detach(...selectors: string[] | HTMLElement[] | NodeList[] | Array[]): Zoom`

Releases the images from the zoom and returns the zoom.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.detach('#image-1', document.querySelector('#image-2')) // detach two images
zoom.detach() // detach all images

_Emits an event `detach` on the image._

#### `update(options: object): Zoom`

Updates the options and returns the zoom.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.update({ background: '#BADA55' })

_Emits an event `update` on each image of the zoom._

#### `clone(options?: object): Zoom`

Clones the zoom with provided options merged with the current ones and returns the zoom.

const zoom \= mediumZoom('\[data-zoomable\]', { background: '#BADA55' })

const clonedZoom \= zoom.clone({ margin: 48 })

clonedZoom.getOptions() // => { background: '#BADA55', margin: 48, ... }

#### `on(type: string, listener: () => void, options?: boolean | AddEventListenerOptions): Zoom`

Registers the listener on each target of the zoom.

The same `options` as `addEventListener` are used.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.on('closed', event \=> {
  // the image has been closed
})

zoom.on(
  'open',
  event \=> {
    // the image has been opened (tracked only once)
  },
  { once: true }
)

The zoom object is accessible in `event.detail.zoom`.

#### `off(type: string, listener: () => void, options?: boolean | AddEventListenerOptions): Zoom`

Removes the previously registered listener on each target of the zoom.

The same `options` as `removeEventListener` are used.

const zoom \= mediumZoom('\[data-zoomable\]')

function listener(event) {
  // ...
}

zoom.on('open', listener)
// ...
zoom.off('open', listener)

The zoom object is accessible in `event.detail.zoom`.

#### `getOptions(): object`

Returns the zoom options as an object.

const zoom \= mediumZoom({ background: '#BADA55' })

zoom.getOptions() // => { background: '#BADA55', ... }

#### `getImages(): HTMLElement[]`

Returns the images attached to the zoom as an array of `HTMLElement`s.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.getImages() // => \[HTMLElement, HTMLElement\]

#### `getZoomedImage(): HTMLElement`

Returns the current zoomed image as an `HTMLElement` or `null` if none.

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.getZoomedImage() // => null
zoom.open().then(() \=> {
  zoom.getZoomedImage() // => HTMLElement
})

### Attributes

#### `data-zoom-src`

Specifies the high definition image to open on zoom. This image loads when the user clicks on the source image.

<img src\="image-thumbnail.jpg" data-zoom-src\="image-hd.jpg" alt\="My image" />

### Events

Event

Description

open

Fired immediately when the `open` method is called

opened

Fired when the zoom has finished being animated

close

Fired immediately when the `close` method is called

closed

Fired when the zoom out has finished being animated

detach

Fired when the `detach` method is called

update

Fired when the `update` method is called

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.on('open', event \=> {
  // track when the image is zoomed
})

The zoom object is accessible in `event.detail.zoom`.

Framework integrations
----------------------

Medium Zoom is a JavaScript library that can be used with any framework. Here are some integrations that you can use to get started quickly:

-   React
-   React Markdown
-   Vue
-   Svelte

Examples
--------

Trigger a zoom from another element

const button \= document.querySelector('\[data-action="zoom"\]')
const zoom \= mediumZoom('#image')

button.addEventListener('click', () \=> zoom.open())

Track an event (for analytics)

You can use the `open` event to keep track of how many times a user interacts with your image. This can be useful if you want to gather some analytics on user engagement.

let counter \= 0
const zoom \= mediumZoom('#image-tracked')

zoom.on('open', event \=> {
  console.log(\`"${event.target.alt}" has been zoomed ${++counter} times\`)
})

Detach a zoom once closed

const zoom \= mediumZoom('\[data-zoomable\]')

zoom.on('closed', () \=> zoom.detach(), { once: true })

Attach jQuery elements

jQuery elements are compatible with `medium-zoom` once converted to an array.

mediumZoom($('\[data-zoomable\]').toArray())

Create a zoomable React component

import React, { useRef } from 'react'
import mediumZoom from 'medium-zoom'

export function ImageZoom({ options, ...props }) {
  const zoomRef \= useRef(null)

  function getZoom() {
    if (zoomRef.current \=== null) {
      zoomRef.current \= mediumZoom(options)
    }

    return zoomRef.current
  }

  function attachZoom(image) {
    const zoom \= getZoom()

    if (image) {
      zoom.attach(image)
    } else {
      zoom.detach()
    }
  }

  return <img {...props} ref\={attachZoom} /\>
}

  

You can see more examples including React and Vue, or check out the storybook.

Debugging
---------

### The zoomed image is not visible

The library doesn't provide a `z-index` value on the zoomed image to avoid conflicts with other frameworks. Some frameworks might specify a `z-index` for their elements, which makes the zoomed image not visible.

If that's the case, you can provide a `z-index` value in your CSS:

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}

Browser support
---------------

IE

Edge

Chrome

Firefox

Safari

10\*

12\*

36

34

9

\* _These browsers require a `template` polyfill when using custom templates_.

> Cross-browser testing is sponsored by

Contributing
------------

-   Run `yarn` to install Node dev dependencies
-   Run `yarn start` to build the library in watch mode
-   Run `yarn run storybook` to see your changes at http://localhost:9001

Please read the contributing guidelines for more detailed explanations.

_You can also use npm._

License
-------

MIT © François Chalifour
