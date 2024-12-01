---
project: emoji-mart-vue
stars: 603
description: One component to pick them all 👊🏼
---

> This project has been forked from emoji-mart which was written for React

  
**Emoji Mart (Vue)** is a Slack-like customizable  
emoji picker component for VueJS  
Demo • Changelog  

Installation
------------

`npm install --save emoji-mart-vue`

Components
----------

### Picker

import { Picker } from 'emoji-mart-vue'

<picker set\="emojione" />
<picker @select\="addEmoji" />
<picker title\="Pick your emoji…" emoji\="point\_up" />
<picker :style\="{ position: 'absolute', bottom: '20px', right: '20px' }" />
<picker :i18n\="{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }" />

Prop

Required

Default

Description

**autoFocus**

`false`

Auto focus the search input when mounted

**color**

`#ae65c5`

The top bar anchors select and hover color

**emoji**

`department_store`

The emoji shown when no emojis are hovered, set to an empty string to show nothing

**include**

`[]`

Only load included categories. Accepts I18n categories keys. Order will be respected, except for the `recent` category which will always be the first.

**exclude**

`[]`

Don't load excluded categories. Accepts I18n categories keys.

**custom**

`[]`

Custom emojis

**recent**

Pass your own frequently used emojis as array of string IDs

**emojiSize**

`24`

The emoji width and height

**perLine**

`9`

Number of emojis per line. While there’s no minimum or maximum, this will affect the picker’s width. This will set _Frequently Used_ length as well (`perLine * 4`)

**i18n**

`{…}`

An object containing localized strings

**native**

`false`

Renders the native unicode emoji

**set**

`apple`

The emoji set: `'apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook'`

**sheetSize**

`64`

The emoji sheet size: `16, 20, 32, 64`

**backgroundImageFn**

`((set, sheetSize) => …)`

A Fn that returns that image sheet to use for emojis. Useful for avoiding a request if you have the sheet locally.

**emojisToShowFilter**

`((emoji) => true)`

A Fn to choose whether an emoji should be displayed or not

**showPreview**

`true`

Display preview section

**showSearch**

`true`

Display search section

**showCategories**

`true`

Display categories

**showSkinTones**

`true`

Display skin tones picker

**emojiTooltip**

`false`

Show emojis short name when hovering (title)

**skin**

Forces skin color: `1, 2, 3, 4, 5, 6`

**defaultSkin**

`1`

Default skin color: `1, 2, 3, 4, 5, 6`

**pickerStyles**

Inline styles applied to the root element. Useful for positioning

**title**

`Emoji Mart™`

The title shown when no emojis are hovered

**infiniteScroll**

`true`

Scroll continuously through the categories

Event

Description

**select**

Params: `(emoji) => {}`

**skin-change**

Params: `(skin) => {}`

#### I18n

search: 'Search',
notfound: 'No Emoji Found',
categories: {
  search: 'Search Results',
  recent: 'Frequently Used',
  people: 'Smileys & People',
  nature: 'Animals & Nature',
  foods: 'Food & Drink',
  activity: 'Activity',
  places: 'Travel & Places',
  objects: 'Objects',
  symbols: 'Symbols',
  flags: 'Flags',
  custom: 'Custom',
}

#### Sheet sizes

Sheets are served from unpkg, a global CDN that serves files published to npm.

Set

Size (`sheetSize: 16`)

Size (`sheetSize: 20`)

Size (`sheetSize: 32`)

Size (`sheetSize: 64`)

apple

334 KB

459 KB

1.08 MB

2.94 MB

emojione

315 KB

435 KB

1020 KB

2.33 MB

facebook

322 KB

439 KB

1020 KB

2.50 MB

google

301 KB

409 KB

907 KB

2.17 MB

messenger

325 KB

449 MB

1.05 MB

2.69 MB

twitter

288 KB

389 KB

839 KB

1.82 MB

#### Datasets

While all sets are available by default, you may want to include only a single set data to reduce the size of your bundle.

Set

Size (on disk)

all

570 KB

apple

484 KB

emojione

485 KB

facebook

421 KB

google

483 KB

messenger

197 KB

twitter

484 KB

To use these data files (or any other custom data), use the `NimblePicker` component:

import data from 'emoji-mart-vue/data/messenger.json'
import { NimblePicker } from 'emoji-mart-vue'

<nimble-picker set\="messenger" :data\="data" />

#### Examples of `emoji` object:

{
  id: 'smiley',
  name: 'Smiling Face with Open Mouth',
  colons: ':smiley:',
  text: ':)',
  emoticons: \[
    '=)',
    '=-)'
  \],
  skin: null,
  native: '😃'
}

{
  id: 'santa',
  name: 'Father Christmas',
  colons: ':santa::skin-tone-3:',
  text: '',
  emoticons: \[\],
  skin: 3,
  native: '🎅🏼'
}

{
  id: 'octocat',
  name: 'Octocat',
  colons: ':octocat',
  text: '',
  emoticons: \[\],
  custom: true,
  imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7'
}

### Emoji

import { Emoji } from 'emoji-mart-vue'

<emoji :emoji\="{ id: 'santa', skin: 3 }" :size\="16" />
<emoji emoji\=":santa::skin-tone-3:" :size\="16" />
<emoji emoji\="santa" set\="emojione" :size\="16" />

Prop

Required

Default

Description

**emoji**

✓

Either a string or an `emoji` object

**size**

✓

The emoji width and height.

**native**

`false`

Renders the native unicode emoji

**fallback**

Params: `(emoji) => {}`

**set**

`apple`

The emoji set: `'apple', 'google', 'twitter', 'emojione'`

**sheetSize**

`64`

The emoji sheet size: `16, 20, 32, 64`

**backgroundImageFn**

``((set, sheetSize) => `https://unpkg.com/emoji-datasource@3.0.0/sheet_${set}_${sheetSize}.png`)``

A Fn that returns that image sheet to use for emojis. Useful for avoiding a request if you have the sheet locally.

**skin**

`1`

Skin color: `1, 2, 3, 4, 5, 6`

**tooltip**

`false`

Show emoji short name when hovering (title)

Event

Description

**select**

Params: `(emoji) => {}`

**mouseenter**

Params: `(emoji) => {}`

**mouseleave**

Params: `(emoji) => {}`

#### Unsupported emojis fallback

Certain sets don’t support all emojis (i.e. Messenger & Facebook don’t support `:shrug:`). By default the Emoji component will not render anything so that the emojis’ don’t take space in the picker when not available. When using the standalone Emoji component, you can however render anything you want by providing the `fallback` props.

To have the component render `:shrug:` you would need to:

function emojiFallback(emoji) {
  return \`:${emoji.short\_names\[0\]}:\`
}

<emoji
  set\="messenger"
  emoji\="shrug"
  :size\="24"
  :fallback\="emojiFallback"
/>

Custom emojis
-------------

You can provide custom emojis which will show up in their own category.

import { Picker } from 'emoji-mart-vue'

const customEmojis \= \[
  {
    name: 'Octocat',
    short\_names: \['octocat'\],
    text: '',
    emoticons: \[\],
    keywords: \['github'\],
    imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7'
  }
\]

<picker :custom\="customEmojis" />

Headless search
---------------

The `Picker` doesn’t have to be mounted for you to take advantage of the advanced search results.

import { emojiIndex } from 'emoji-mart-vue'

emojiIndex.search('christmas').map((o) \=> o.native)
// => \[🎄, 🎅🏼, 🔔, 🎁, ⛄️, ❄️\]

### With custom data

import data from 'emoji-mart-vue/data/messenger'
import { NimbleEmojiIndex } from 'emoji-mart-vue'

let emojiIndex \= new NimbleEmojiIndex(data)
emojiIndex.search('christmas')

Storage
-------

By default EmojiMart will store user chosen skin and frequently used emojis in `localStorage`. That can however be overwritten should you want to store these in your own storage.

import { store } from 'emoji-mart-vue'

store.setHandlers({
  getter: (key) \=> {
    // Get from your own storage (sync)
  },

  setter: (key, value) \=> {
    // Persist in your own storage (can be async)
  }
})

Possible keys are:

Key

Value

Description

skin

`1, 2, 3, 4, 5, 6`

frequently

`{ 'astonished': 11, '+1': 22 }`

An object where the key is the emoji name and the value is the usage count

last

'astonished'

(Optional) Used by `frequently` to be sure the latest clicked emoji will always appear in the “Recent” category

Features
--------

### Powerful search

#### Short name, name and keywords

Not only does **Emoji Mart** return more results than most emoji picker, they’re more accurate and sorted by relevance.

#### Emoticons

The only emoji picker that returns emojis when searching for emoticons.

#### Results intersection

For better results, **Emoji Mart** split search into words and only returns results matching both terms.

### Fully customizable

#### Anchors color, title and default emoji

  

#### Emojis sizes and length

#### Default skin color

As the developer, you have control over which skin color is used by default.

It can however be overwritten as per user preference.

#### Multiple sets supported

Apple / Google / Twitter / EmojiOne / Messenger / Facebook

Not opinionated
---------------

**Emoji Mart** doesn’t automatically insert anything into a text input, nor does it show or hide itself. It simply returns an `emoji` object. It’s up to the developer to mount/unmount (it’s fast!) and position the picker. You can use the returned object as props for the `EmojiMart.Emoji` component. You could also use `emoji.colons` to insert text into a textarea or `emoji.native` to use the emoji.

Development
-----------

$ yarn build
$ yarn start
$ yarn storybook

🎩 Hat tips!
------------

Powered by iamcal/emoji-data and inspired by iamcal/js-emoji.  
🙌🏼  Cal Henderson.
