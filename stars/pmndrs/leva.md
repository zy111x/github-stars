---
project: leva
stars: 5092
description: 🌋 React-first components GUI
url: https://github.com/pmndrs/leva
---

  

**A GUI you are going to lava.**

Customizable, extensible and beautiful by default.

  

Storybook

  

by Poimandres

  

🚧🚧 This repo is under heavy development 🚧🚧
----------------------------------------------

Features
--------

-   ⭐️ Beautiful by default
-   🎚 More than 12 different kinds of inputs available
-   🧐 Smart input type recognition
-   🔌 Easy-to-make plugins
-   ✅ Keyboard accessible
-   ⚡️ No setup necessary

### Installation

npm i leva

### Quick start

Simply call the `useControls` hook from anywhere in your app:

import { useControls } from 'leva'

function MyComponent() {
  const { name, aNumber } \= useControls({ name: 'World', aNumber: 0 })

  return (
    <div\>
      Hey {name}, hello! {aNumber}
    </div\>
  )
}

NOTE: Using Leva with React 18 will cause a console error about createRoot which you can safely ignore, or fix by following the instructions here: discussion

### Documentation

-   Getting Started
    
-   Inputs
    
-   Configuration
    
-   Styling
    
-   Advanced: Controlled Inputs
    
-   Advanced: Creating Plugins
    

Contributors ✨
--------------

Thanks goes to these wonderful people (emoji key):

  
**Andrew Prifer**  
🤔 💻

  
**Aria**  
🤔

  
**David Bismut**  
🤔 💻

  
**Dmitry Ivakhnenko**  
💻

  
**Gianmarco**  
🤔 💻

  
**Guido Vizoso**  
💻

  
**Han**  
🎨

  
**Ivan Rossi**  
🐛

  
**Laurin Quast**  
💻 🤔

  
**Marco Fugaro**  
🤔

  
**Marco Ludovico Perego**  
🤔

  
**Piotr Monwid-Olechnowicz**  
📖

  
**clementcassajus**  
🎨

  
**thephoenixofthevoid**  
🐛

This project follows the all-contributors specification. Contributions of any kind welcome!
