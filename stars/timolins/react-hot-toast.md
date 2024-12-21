---
project: react-hot-toast
stars: 9910
description: Smoking Hot React Notifications 🔥 
url: https://github.com/timolins/react-hot-toast
---

  

**Smoking hot Notifications for React.**

Lightweight, customizable and beautiful by default.

  

Website · Documentation · Twitter

  

Cooked by Timo Lins 👨‍🍳

  

Features
--------

-   🔥 **Hot by default**
-   🔩 **Easily Customizable**
-   ⏳ **Promise API** - _Automatic loader from a promise_
-   🕊 **Lightweight** - _less than 5kb including styles_
-   ✅ **Accessible**
-   🤯 **Headless Hooks** - _Create your own with `useToaster()`_

Installation
------------

#### With pnpm

pnpm add react-hot-toast

#### With NPM

npm install react-hot-toast

Getting Started
---------------

Add the Toaster to your app first. It will take care of rendering all notifications emitted. Now you can trigger `toast()` from anywhere!

import toast, { Toaster } from 'react-hot-toast';

const notify \= () \=> toast('Here is your toast.');

const App \= () \=> {
  return (
    <div\>
      <button onClick\={notify}\>Make me a toast</button\>
      <Toaster />
    </div\>
  );
};

Documentation
-------------

Find the full API reference on official documentation.
