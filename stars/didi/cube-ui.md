---
project: cube-ui
stars: 9142
description: :large_orange_diamond: A fantastic mobile ui lib implement by Vue
url: https://github.com/didi/cube-ui
---

cube-ui
=======

> A fantastic mobile ui lib implement by Vue.

### Links

-   Home
    
-   Docs
    
-   Example
    
-   Application Guide
    

### Communication

### New cube-ui project ?

Recommend use the CLI tools base on vue-cli to init the config and base code:

$ vue init cube-ui/cube-template projectname

### Install

npm install cube-ui --save

### Usage

import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)

#### Use modularized cube-ui

import Vue from 'vue'
import {
  /\* eslint-disable no-unused-vars \*/
  Style,
  Button,
  ActionSheet
} from 'cube-ui'

Vue.use(Button)
Vue.use(ActionSheet)

For more information, please refer to Quick Start

### Development

git clone git@github.com:didi/cube-ui.git
cd cube-ui
npm install
npm run dev
# or run document development
npm run doc-dev

### Changelog

Detailed changes for each release are documented in the release notes.

### DiDi Open Sources

-   Mpx: An enhanced miniprogram framework with data reactivity and deep optimizition.
-   Chameleon/kəˈmiːlɪən/: Unify all platforms(Web/Weex/Mini program) with MVVM. Focus on Write Once Run AnyWhere.
-   mand-mobile: A mobile UI toolkit, based on Vue.js 2, designed for financial scenarios.
-   DoraemonKit/'dɔ:ra:'emɔn/: A full-featured App (iOS & Android) development assistant. You deserve it.
-   Booster: An easy-to-use, lightweight, powerful and extensible quality optimization toolkit designed specially for mobile applications.
-   More repos
