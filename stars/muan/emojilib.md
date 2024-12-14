---
project: emojilib
stars: 1674
description: Emoji keyword library.
url: https://github.com/muan/emojilib
---

emojilib
========

Make emoji searchable with this keyword library.

Install
-------

```
npm install emojilib --save
```

Usage
-----

\> require("emojilib")
{
  '😀': \[
    'grinning\_face',
    'face',
    'smile',
    'happy',
    'joy',
    ':D',
    'grin'
  \],
  '😃': \[
    'grinning\_face\_with\_big\_eyes',
    'face',
    'happy',
    'joy',
    'haha',
  ...
}

If you are looking for the unicode emoji dataset, including version, grouping, ordering, and skin tone support flag, check out `unicode-emoji-json`.

Migrating from 2.x
------------------

Previously:

\> var emoji \= require("emojilib")
\> emoji.lib
{
  "grinning": {
    "keywords": \["face", "smile", "happy", "joy"\],
    "char": "😀",
    "fitzpatrick\_scale": false,
    "category": "people"
  },
  ...
}

Now, merge keywords with other metadata from `unicode-emoji-json`:

\> var data \= require('unicode-emoji-json')
\> var keywordSet \= require('emojilib')
\> for (const emoji in data) {
data\[emoji\]\['keywords'\] \= keywordSet\[emoji\]
}
\> data\['😀'\]
{
  name: 'grinning face',
  slug: 'grinning\_face',
  group: 'Smileys & Emotion',
  emoji\_version: '1.0',
  unicode\_version: '1.0',
  skin\_tone\_support: false,
  keywords: \[ 'grinning\_face', 'face', 'smile', 'happy', 'joy', ':D', 'grin' \]
}

* * *

Previously:

\> var emoji \= require("emojilib")
\> emoji.ordered
\[ 'grinning', 'grimacing', 'grin', 'joy', 'smiley', 'smile', 'sweat\_smile', ...\]

Now this data can be found in `unicode-emoji-json`:

\> var orderedEmoji \= require('unicode-emoji-json/data-ordered-emoji')
\['😀', '😃', '😄', '😁', '😆', '😅',...\]

* * *

Previously:

\> var emoji \= require("emojilib")
\> emoji.fitzpatrick\_scale\_modifiers
\[ '🏻', '🏼', '🏽', '🏾', '🏿' \]

Now this data can be found in `unicode-emoji-json`:

\> require('unicode-emoji-json/data-emoji-components')
{
  light\_skin\_tone: '🏻',
  medium\_light\_skin\_tone: '🏼',
  medium\_skin\_tone: '🏽',
  medium\_dark\_skin\_tone: '🏾',
  dark\_skin\_tone: '🏿',
  red\_hair: '🦰',
  curly\_hair: '🦱',
  white\_hair: '🦳',
  bald: '🦲'
}

Previously:

\> require("emojilib").lib\['v'\].fitzpatrick\_scale
true

\> require("emojilib").lib\['turtle'\].fitzpatrick\_scale
false

Now this data can be found in `unicode-emoji-json`:

\> require('unicode-emoji-json')\['✌️'\].skin\_tone\_support
true
\> require('unicode-emoji-json')\['🐢'\].skin\_tone\_support
false

Development
-----------

See `CONTRIBUTING.md`.
