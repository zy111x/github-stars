---
project: js-confetti
stars: 1160
description: JS Confetti library that supports emojis 🦄 🎉 ⚡️
url: https://github.com/loonywizard/js-confetti
---

🎉 JavaScript Confetti library
==============================

💥 Supports emojis as confetti  
⚡️ Zero dependencies used  
🦄 Works without any config, yet configurable  
🛠 Has TypeScript typings  
🧩 Confetti speed adapts to user screen width

Links: GitHub | NPM | Demo

Install
-------

You can install library from NPM using yarn or npm

yarn add js-confetti

Alternatively you can download script from CDN

<script src\="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"\></script\>

and then access `JSConfetti` global variable

Usage
-----

Initialize instance of JSConfetti class and call addConfetti method

import JSConfetti from 'js-confetti'

const jsConfetti \= new JSConfetti()

jsConfetti.addConfetti()

_NOTE_ `new JSConfetti()` creates HTML Canvas element and adds it to page, so call it only once!

If need to use custom canvas element, you can pass `canvas` arg to JSConfetti constructor (example)

const canvas \= document.getElementById('your\_custom\_canvas\_id')

const jsConfetti \= new JSConfetti({ canvas })

Customise confetti
------------------

Use emojis as confetti:

jsConfetti.addConfetti({
   emojis: \['🌈', '⚡️', '💥', '✨', '💫', '🌸'\],
})

  

Customize confetti colors:

jsConfetti.addConfetti({
  confettiColors: \[
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
  \],
})

  

Customize confetti radius:

jsConfetti.addConfetti({
  confettiRadius: 6,
})

  

Customize confetti number:

jsConfetti.addConfetti({
  confettiRadius: 6,
  confettiNumber: 500,
})

  

Combine different properties:

jsConfetti.addConfetti({
  emojis: \['🦄'\],
  emojiSize: 100,
  confettiNumber: 30,
})

clearCanvas()
-------------

Call `clearCanvas` method to clear canvas

Example:

const jsConfetti \= new JSConfetti()

jsConfetti.addConfetti()

// ... 
jsConfetti.clearCanvas()

addConfetti Promise
-------------------

`addConfetti` method returns Promise, which is resolved when added confetti dissapears from the user screen due to the gravity physics of confetti

Example:

// async/await
await jsConfetti.addConfetti()
console.log('Confetti animation completed!')

// Promise.then
jsConfetti.addConfetti()
   .then(() \=> console.log('Confetti animation completed!'))

How to run locally
------------------

Install dependencies by Yarn or NPM

yarn install

Run `dev` script with website build

yarn run dev

License
-------

MIT
