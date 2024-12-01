---
project: vue-virtual-keyboard
stars: 64
description: ⌨️ Vue Virtual Keyboard
url: https://github.com/CodeDaraW/vue-virtual-keyboard
---

Vue Virtual Keyboard | English Doc
==================================

一个基于`Vue.js`的虚拟键盘组件。

Demo
----

在线Demo

安装
--

npm install https://github.com/CodeDaraW/vue-virtual-keyboard.git

使用
--

### ES6

<style\>
    #app {
        width: 680px;
        margin: 20px auto;
        font-family: Verdana, Sans-Serif;
    }
    h1 {
        color: #42b983;
        font-weight: bold;
    }
    textarea {
        display: block;
        width: 100%;
        min-height: 100px;
        padding: 0;
        margin: 20px 0;
        font-size: 16px;
    }
</style\>
<template\>
    <div id\="app"\>
        <h1\>Just Enter Text:</h3\>
        <textarea type\="text" v-model\="keyboardText"\></textarea\>
        <keyboard :keyboard-text.sync\="keyboardText"\></keyboard\>
    </div\>
</template\>

<script\>
import Keyboard from 'vue-virtual-keyboard/src/components/Keyboard'
export default {
    data() {
        return {
            keyboardText: ""
        }
    },
    components: {
        Keyboard
    }
}
</script\>

### CommonJS

```
var Keyboard = require('vue-virtual-keyboard/src/components/Keyboard');
```

构建
--

# 安装依赖
npm install

# 在 localhost:8080 启动本地服务器并支持热更新
npm run dev

# 构建
npm run build

# 单元测试
npm run unit

# e2e测试
npm run e2e

# 进行所有测试
npm test

协议
--

The MIT License
