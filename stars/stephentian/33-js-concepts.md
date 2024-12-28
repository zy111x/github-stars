---
project: 33-js-concepts
stars: 15128
description: :scroll: 每个 JavaScript 工程师都应懂的33个概念 @leonardomso
url: https://github.com/stephentian/33-js-concepts
---

  
  
  
JavaScript开发者应懂的33个概念  

=================================

简介
--

这个项目是为了帮助开发者掌握 JavaScript 概念而创立的。它不是必备，但在未来学习（JavaScript）中，可以作为一篇指南。

> 本篇文章是参照 @leonardomso 创立，英文版项目地址在这里。 由于原版资源都要翻墙，所以本人创立一个中文版，附上关于这些概念在国内的一些文章和视频。 若有觉得更好的文章或者视频，可以贡献出来，觉得有误的，请联系我删除。

更新
--

若有觉得更好的文章或者视频，可以贡献出来，觉得有误的，请联系我删除。

-   文章的排序优化，前面的文章是介绍概念，后面的文章是深入解读。
-   将原文的 "高阶函数" 和 "map, reduce, filter" 合并为 "map, reduce, filter 等高阶函数"
-   增加 "promise" 概念(替换删除的 "高阶函数")
-   2018-10-24 更新：@BuptStEve 贡献的三篇关于" 函数式编程 "方面的文章
-   2018-12-04 更新：@haner199401 贡献的 @冴羽 "JavaScript 深入之从原型到原型链"

* * *

目录
--

1.  **调用堆栈**
2.  **原始类型**
3.  **值类型和引用类型**
4.  **隐式, 显式, 名义和鸭子类型**
5.  **\== 与 ===, typeof 与 instanceof**
6.  **this, call, apply 和 bind**
7.  **函数作用域, 块级作用域和词法作用域**
8.  **闭包**
9.  **map, reduce, filter 等高阶函数**
10.  **表达式和语句**
11.  **变量提升**
12.  **Promise**
13.  **立即执行函数, 模块化, 命名空间**
14.  **递归**
15.  **算法**
16.  **数据结构**
17.  **消息队列和事件循环**
18.  **setTimeout, setInterval 和 requestAnimationFrame**
19.  **继承, 多态和代码复用**
20.  **按位操作符, 类数组对象和类型化数组**
21.  **DOM 树和渲染过程**
22.  **new 与构造函数, instanceof 与实例**
23.  **原型继承与原型链**
24.  **Object.create 和 Object.assign**
25.  **工厂函数和类**
26.  **设计模式**
27.  **Memoization**
28.  **纯函数, 函数副作用和状态变化**
29.  **耗性能操作和时间复杂度**
30.  **JavaScript 引擎**
31.  **二进制, 十进制, 十六进制, 科学记数法**
32.  **偏函数, 柯里化, Compose 和 Pipe**
33.  **代码整洁之道**

* * *

1\. 调用堆栈
--------

### 文章

-   📖 Call Stack — MDN
-   📖 \[译\] JavaScript 如何工作：对引擎、运行时、调用堆栈的概述 —— 掘金
-   📖 \[译\] 理解 JavaScript 中的执行上下文和执行栈 —— 掘金
-   📖 这一次，彻底弄懂 JavaScript 执行机制 —— 掘金
-   📖 解读 JavaScript 之引擎、运行时和堆栈调用 —— 开源中国
-   📖 Tasks, microtasks, queues and schedules —— Jake Archibald
-   📖 Tasks, microtasks, queues and schedules（译） —— 掘金

### 视频

-   📺 What is the event loop anyway? —— 腾讯视频(英文字幕)
-   📺 Understanding The JavaScript Call Stack, Event Queue, Event Table, & Event Loop —— Bilibili
-   📺 JS 中的变量提升、堆栈内存及闭包详解 —— Acfun
-   📺 事件循环模型 —— PHP 中文网
-   📺 Javascript: the Call Stack explained — Coding Blocks India
-   📺 The JS Call Stack Explained In 9 Minutes — Colt Steele
-   📺 JavaScript Execution Stack — Codecademy
-   📺 What is the Call Stack? — Eric Traub
-   📺 The Call Stack — Kevin Drumm
-   📺 Understanding JavaScript Execution — Codesmith
-   📺 Call Stack & Event Loop — movies com

**⬆️ 返回目录**

* * *

2\. 原始类型
--------

### 文章

-   📖 原始数据 —— MDN
-   📖 \[译\]JavaScript 是怎样编码数字的 —— SegmentFault
-   📖 每一个 JavaScript 开发者应该了解的浮点知识 —— 颜海镜
-   📖 JavaScript 标准参考教程(基本语法之数值) —— 阮一峰
-   📖 The Secret Life of JavaScript Primitives —— Angus Croll

### 视频

-   📺 javascript 六种数据类型 —— 慕课网
-   📺 javascript 视频教程(数据类型) —— PHP 中文网
-   📺 JavaScript Reference vs Primitive Types — Academind
-   📺 JavaScript Primitive Types — Simon Sez IT
-   📺 Javascript Primitive and Reference Types — Baljeet Singh
-   📺 Value Types and Reference Types in JavaScript — Programming with Mosh
-   📺 JavaScript Primitive Data Types — Avelx
-   📺 Everything you never wanted to know about JavaScript numbers — Bartek Szopka

**⬆️ 返回目录**

* * *

3\. 值类型和引用类型
------------

### 文章

-   📖 ECMAScript 引用类型 —— W3school
-   📖 js 中的值类型和引用类型的区别 —— 博客园
-   📖 JavaScript 的值传递和引用传递 —— FunDebug
-   📖 Primitive Types & Reference Types in JavaScript —— Bran van der Meer
-   📖 JavaScript: Passing by Value or by Reference —— CSDN
-   📖 js 值引用和值复制 —— SegmentFault
-   📖 js- 引用和复制(传值和传址) —— CSDN

### 视频

-   📺 Javascript Pass by Value vs Pass by Reference — techsith
-   📺 JavaScript Value vs Reference Types — Programming with Mosh

**⬆️ 返回目录**

* * *

4\. 隐式, 显式, 名义和鸭子类型
-------------------

### 文章

-   📖 ECMAScript 类型转换 —— W3school
-   📖 JavaScript 的怪癖 1：隐式类型转换 —— justjavac
-   📖 JavaScript 运算符规则与隐式类型转换详解 —— 掘金
-   📖 聊一聊 JS 中的隐式类型转换 —— SegmentFault
-   📖 有趣的 JavaScript 隐式类型转换 —— 博客园
-   📖 JavaScript 显式类型转换与隐式类型转换 —— CSDN
-   📖 你不知道的 JavaScript（中卷）强制类型转换 —— 简书
-   📖 你懂 JavaScript 嗎？#8 強制轉型 —— cythilya
-   📖 动态类型语言和鸭子类型 —— 曾探
-   📖 Nominal & Structural Typing —— flow
-   📖 What exactly is Type Coercion in Javascript? —— stackoverflow
-   📖 You Don't Know JS: Types & Grammar —— github

### 视频

-   📺 javascript 隐式转换 —— 慕课网
-   📺 Javascript 基础加强-类型转换 —— 黑马程序员

**⬆️ 返回目录**

* * *

5\. == vs ===, typeof vs instanceof
-----------------------------------

### 文章

-   📖 JavaScript 中的相等性判断 —— MDN
-   📖 js 中 == 和 === 的区别 —— 掘金
-   📖 \== vs === in Javascript —— CSDN
-   📖 深入理解 javascript 之 typeof 和 instanceof —— CSDN
-   📖 JavaScript 的 typeof 的用途 —— justjavac
-   📖 一张图看懂 Function 和 Object 的关系及简述 instanceof 运算符 —— 掘金
-   📖 浅谈 instanceof 和 typeof 的实现原理 —— 掘金
-   📖 typeof 和 instanceOf 的区别

**⬆️ 返回目录**

* * *

6\. this, call, apply 和 bind
----------------------------

### 文章

-   📖 Javascript 的 this 用法 —— 阮一峰
-   📖 学会 JS 的 this 这一篇就够了，根本不用记 —— 慕课网
-   📖 \[译\] this（他喵的）到底是什么 — 理解 JavaScript 中的 this、call、apply 和 bind —— 掘金
-   📖 this、apply、call、bind —— 掘金
-   📖 使用 call、apply 和 bind 解决 js 中烦人的 this，事件绑定时的 this 和传参问题 —— 博客园
-   📖 call、apply 和 bind 的原生实现 —— github

### 视频

-   📺 JavaScript 关于 this 关键字解释 —— 爱奇艺
-   📺 JS 关于作用域闭包和 this 的综合面试题 —— 百度视频
-   📺 js 面向对象闭包数组 12.函数中的 this —— 乐视视频
-   📺 1.3.10-this 指向及 this 应用 —— 乐视视频
-   📺 珠峰培训 JavaScript 开发课程：关于 this 关键字、闭包作用域 —— 网易云课堂

**⬆️ 返回目录**

* * *

7\. 函数作用域, 块级作用域和词法作用域
----------------------

### 文章

-   📖 变量作用域与解构赋值 —— 廖雪峰
-   📖 学习 Javascript 闭包（Closure） —— 阮一峰
-   📖 JavaScript 中词法作用域、闭包与跳出闭包 —— SegmentFault
-   📖 JavaScript 深入之词法作用域和动态作用域 —— 掘金
-   📖 深入理解闭包之前置知识 → 作用域与词法作用域 —— 掘金
-   📖 What is lexical scope? —— stackoverflow
-   📖 You Don't Know JS: Scope & Closures —— Kyle Simpson

**⬆️ 返回目录**

* * *

8\. 闭包
------

### 文章

-   📖 闭包 —— MDN
-   📖 ECMAScript 闭包（closure）—— w3school
-   📖 学习 Javascript 闭包（Closure） —— 阮一峰
-   📖 闭包 —— 廖雪峰
-   📖 一次性搞懂 JavaScript 闭包 —— 简书
-   📖 JavaScript 闭包 —— SegmentFault
-   📖 js 匿名自执行函数中闭包的高级使用 —— 掘金
-   📖 高效使用 JavaScript 闭包 —— 掘金
-   📖 深入理解 JavaScript 原型与闭包 —— 王福朋

### 视频

-   📺 JavaScript 闭包和闭包面试题 —— 爱奇艺
-   📺 js 面向对象闭包数组 11.闭包 —— 乐视
-   📺 白贺翔\_函数(闭包) —— 乐视

**⬆️ 返回目录**

* * *

9\. map, reduce, filter 等高阶函数
-----------------------------

### 文章

-   📖 高阶函数 —— 廖雪峰
-   📖 ES5 中新增的 Array 方法详细说明 —— 张鑫旭
-   📖 一张图看懂 JavaScript 中数组的迭代方法：forEach、map、filter、reduce、every、some —— 掘金
-   📖 Transducing（上）－《JavaScript 轻量级函数式编程》 —— SegmentFault
-   📖 JavaScript 函数式编程（三） —— @BuptStEve

**⬆️ 返回目录**

* * *

10\. 表达式和语句
-----------

### 文章

-   📖 js 表达式与语句 —— 博客园
-   📖 JS 表达式和语句的区别 —— SegmentFault
-   📖 JavaScript 中的表达式（expression）和语句/声明（statement） —— CSDN
-   📖 重讀 Axel 的 Javascript 中的 Expression vs Statement 一文 —— SegmentFault
-   📖 Expressions versus statements in JavaScript —— Dr. Axel

**⬆️ 返回目录**

* * *

11\. 变量提升
---------

### 文章

-   📖 JavaScript 变量提升 —— 菜鸟教程
-   📖 ES6 变量作用域与提升：变量的生命周期详解 —— 掘金
-   📖 \[翻译\] JavaScript Scoping and Hoisting —— SegmentFault
-   📖 JavaScript Scoping and Hoisting —— Ben Cherry

**⬆️ 返回目录**

* * *

12\. Promise
------------

### 文章

-   📖 使用 promises —— MDN
-   📖 Promise —— MDN
-   📖 Promise — 廖雪峰
-   📖 JavaScript Promise：去而复返 —— 司徒正美
-   📖 (上面的原文)JavaScript Promise：简介 —— Web Fundamentals
-   📖 1 分钟读完《10 分钟学会 JavaScript 的 Async/Await》 —— justjavac
-   📖 JavaScript Promise 迷你书（中文版）
-   📖 JavaScript 进阶之路——认识和使用 Promise，重构你的 Js 代码 —— 博客园

### 视频

-   📺 Promise 入门 —— 慕课网

**⬆️ 返回目录**

* * *

13\. 立即执行函数, 模块化, 命名空间
----------------------

### 文章

-   📖 Javascript 模块化编程（一）：模块的写法 —— 阮一峰
-   📖 javascript 模块化编程-详解立即执行函数表达式 —— 简书
-   📖 Javascript 的匿名函数与自执行 —— 掘金
-   📖 前端模块化——技术选型 —— SegmentFault
-   📖 谈谈 Js 前端模块化规范 —— SegmentFault
-   📖 函数声明与函数表达式的区别 —— 伯乐在线

**⬆️ 返回目录**

* * *

14\. 递归
-------

### 文章

-   📖 求解释 js 递归 —— SegmentFault
-   📖 JavaScript 中的递归 —— 掘金
-   📖 递归（上）－《JavaScript 轻量级函数式编程》 —— 掘金
-   📖 递归（下）－《JavaScript 轻量级函数式编程》 —— 掘金
-   📖 尾调用和尾递归 —— 掘金
-   📖 几个经典递归问题用 js 实现 —— CSDN
-   📖 递归函数的几个例子 —— CSDN

**⬆️ 返回目录**

* * *

15\. 算法
-------

### 文章

-   📖 十大经典排序算法总结（JavaScript 描述） —— 掘金
-   📖 在 JavaScript 中学习数据结构与算法 —— 掘金
-   📖 JS 中可能用得到的全部的排序算法 —— 掘金
-   📖 JS 家的排序算法 —— 简书
-   📖 前端常见算法的 JS 实现 —— SegmentFault
-   📖 前端面试中的常见的算法问题 ——蒲小花的博客

### 视频

-   📺 Javascript 实现二叉树算法 —— 慕课网

**⬆️ 返回目录**

* * *

16\. 数据结构
---------

### 文章

-   📖 来我们浅谈一下 js 的数据结构 —— 简书
-   📖 JavaScript 中的算法与数据结构 —— 简书
-   📖 学 JS 必看-JavaScript 数据结构深度剖析 —— 大道至简的博客
-   📖 js 中基础数据结构数组去重问题 —— 掘金

### 视频

-   📺 📺 JavaScript 数据结构-运算符 —— 乐视

**⬆️ 返回目录**

* * *

17\. 消息队列和事件循环
--------------

### 文章

-   📖 并发模型与事件循环 —— MDN
-   📖 JavaScript 运行机制详解：再谈 Event Loop —— 阮一峰
-   📖 深入理解 JavaScript 事件循环 —— 博客园
-   📖 深入浅出 Javascript 事件循环机制 —— 知乎
-   📖 JS 事件循环机制（event loop）之宏任务、微任务 —— SegmentFault
-   📖 JavaScript：彻底理解同步、异步和事件循环 —— SegmentFault
-   📖 从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理 —— 掘金

**⬆️ 返回目录**

* * *

18\. setTimeout, setInterval 和 requestAnimationFrame
----------------------------------------------------

### 文章

-   📖 Window setTimeout() 方法 —— 菜鸟教程
-   📖 Window setInterval() 方法 —— 菜鸟教程
-   📖 关于 setTimeout —— 掘金
-   📖 你不知道的 Javascript：有趣的 setTimeout —— 掘金
-   📖 原来你是这样的 setTimeout —— 掘金
-   📖 setTimeout() 和 setInterval() 本质区别在哪里？ —— SegmentFault
-   book: window.requestAnimationFrame —— MDN
-   📖 requestAnimationFrame 知多少？ —— 博客园
-   📖 CSS3 动画那么强，requestAnimationFrame 还有毛线用？ —— 张鑫旭
-   📖 「JavaScript 定时器」setInterval、setTimeout 和 requestAnimationFrame 浅析 —— SegmentFault
-   📖 翻译：setInterval 与 requestAnimationFrame 的时间间隔测试 —— SegmentFault
-   📖 阿里前端面试题：requestAnimationFrame 实现类似 setInterval 的计时器 —— SegmentFault

### 视频

-   📺 setTimeout 和 setInterval —— 优酷

**⬆️ 返回目录**

* * *

19\. 继承, 多态和代码复用
----------------

### 文章

-   📖 JS 面向对象编程之：封装、继承、多态 —— 博客园
-   📖 Javascript 的继承与多态 —— 简书
-   📖 js:面向对象编程，带你认识封装、继承和多态 —— 掘金
-   📖 JavaScript 中的“多继承” —— 掘金
-   📖 代码复用模式 —— github
-   📖 深入理解 JavaScript：代码复用模式(推荐篇) —— 汤姆大叔
-   📖 深入理解 JavaScript：代码复用模式(避免篇) —— 汤姆大叔

**⬆️ 返回目录**

* * *

20\. 按位操作符, 类数组对象和类型化数组
-----------------------

### 文章

-   📖 按位操作符 —— MDN
-   📖 类数组对象 —— MDN
-   📖 类型化数组 —— MDN
-   📖 JavaScript ArrayBuffer 浅析 —— 博客园

**⬆️ 返回目录**

* * *

21\. DOM 树和渲染过程
---------------

### 文章

-   📖 如何创建一个 DOM 树 —— MDN
-   📖 HTML DOM 节点 —— W3school
-   📖 DOM 概述 —— 阮一峰
-   📖 《JavaScript 闯关记》之 DOM（上）—— 简书
-   📖 《JavaScript 闯关记》之 DOM（下）—— 简书
-   📖 掌握 DOM 操作 —— 掘金
-   📖 操作 DOM —— 廖雪峰
-   📖 原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的 —— 掘金

### 视频

-   📺 DOM 探索之基础详解篇 —— 慕课网
-   📺 DOM 事件探秘 —— 慕课网
-   📺 jQuery 基础(二)DOM 篇 —— 慕课网
-   📺 JS 操作 DOM 对象属性和方法 —— 爱奇艺

**⬆️ 返回目录**

* * *

22\. new 与构造函数, instanceof 与实例
------------------------------

### 文章

-   📖 构造函数与 new 命令 —— 阮一峰
-   📖 Javascript 面向对象编程（二）：构造函数的继承 —— 阮一峰
-   📖 完整原型链详细图解(构造函数、原型、实例化对象) —— CSDN
-   📖 JavaScript 中构造函数与 new 操作符的实例详解 —— PHP 中文网
-   📖 构造函数、实例、原型、原型链之间的关系 —— CSDN
-   📖 深入理解 JS—instanceof 和原型链 —— CSDN
-   📖 前端基础进阶（九）：详解面向对象、构造函数、原型与原型链 —— 简书
-   📖 js 用 new 实例化对象与直接调用的 this 的区别 —— 简书
-   📖 JavaScript 并非所有的东西都是对象 —— justjavac
-   📖 JavaScript instanceof 运算符深入剖析 —— IBM

### 视频

-   📺 改良版的构造函数 —— 乐视

**⬆️ 返回目录**

* * *

23\. 原型继承与原型链
-------------

### 文章

-   📖 继承与原型链 —— MDN
-   📖 构造函数、原型与原型链 —— github
-   📖 原型及原型链 —— github(1269 Star)
-   📖 理清 javascript 中的面向对象(一) 原型继承 —— SegmentFault
-   📖 JavaScript：继承和原型链(译) —— justjavac
-   📖 三张图搞懂 JavaScript 的原型对象与原型链 —— 博客园
-   📖 一张图让你搞懂 JavaScript 的继承与原型链 —— CSDN
-   📖 JS 高级--原型链(一看就懂，但 18 岁以下请绕道) —— CSDN
-   📖 原型继承 —— 廖雪峰
-   📖 JS 原型链与继承别再被问倒了 —— 掘金
-   📖 征服 JavaScript 面试系列：类继承和原型继承的区别 —— 掘金
-   📖 JavaScript 深入之从原型到原型链 —— 冴羽
-   📖 深入理解 JavaScript 原型与闭包 —— 王福朋

### 视频

-   📺 JS 高级-07-原型链继承 —— 乐视
-   📺 JS 原型对象和原型链简介 —— 腾讯视频

**⬆️ 返回目录**

* * *

24\. Object.create 和 Object.assign
----------------------------------

### 文章

-   📖 Object.create —— MDN
-   📖 Object.assign —— MDN
-   📖 Object.create vs Object.assign —— 慕课网手记
-   📖 JS 中的 Object.assign()、Object.create()、Object.defineProperty() —— CSDN
-   📖 Object-Assign-Deep —— github

**⬆️ 返回目录**

* * *

25\. 工厂函数和类
-----------

### 文章

-   📖 类 —— MDN
-   📖 类和实例 —— 廖雪峰
-   📖 Javascript 定义类（class）的三种方法 —— 阮一峰
-   📖 【译】ES6 的工厂函数 —— 掘金
-   📖 JavaScript 创建对象之单例、工厂、构造函数模式 —— 掘金

**⬆️ 返回目录**

* * *

26\. 设计模式
---------

### 文章

-   📖 JavaScript 设计模式 —— 掘金
-   📖 学用 JavaScript 设计模式 —— 极客学院
-   📖 \[面试专题\]JS 设计模式 —— SegmentFault
-   📖 JavaScript Patterns 中译本 —— github

### 视频

-   📺 HTML5 课程大纲 2-11JS 设计模式

**⬆️ 返回目录**

* * *

27\. Memoization
----------------

### 文章

-   📖 JavaScript Memoization —— 司徒正美
-   📖 memoization 提升递归效率 —— 博客园
-   📖 如何提升 JavaScript 的递归效率 —— 51CTO
-   📖 JavaScript 高级技巧 Memoization —— SegmentFaut

**⬆️ 返回目录**

* * *

28\. 纯函数, 函数副作用和状态变化
--------------------

### 文章

-   📖 纯函数(Pure Function) —— React.js 小书
-   📖 JavaScript Functional Programming：纯函数 —— 宁皓网
-   📖 js 函数的副作用分析 —— 脚本之家
-   📖 如何使用纯函数式 JavaScript 处理脏副作用 —— 掘金
-   📖 原生 JavaScript 实现 state 状态管理系统 —— 博客园
-   📖 JavaScript 函数式编程 —— @BuptStEve

**⬆️ 返回目录**

* * *

29\. 耗性能操作和时间复杂度
----------------

### 文章

-   📖 时间复杂度 O(log n) 意味着什么？ —— 掘金
-   📖 算法的时间复杂度和空间复杂度 —— 掘金
-   📖 算法（一）时间复杂度 —— 掘金
-   📖 Big O Search Algorithms in JavaScript —— Bradley Braithwaite
-   📖 Time Complexity Analysis in JavaScript — Jennifer Bland

**⬆️ 返回目录**

* * *

30\. JavaScript 引擎
------------------

### 文章

-   📖 javascript 引擎 —— 百度百科
-   📖 V8(JavaScript 引擎) —— 百度百科
-   📖 图解搞懂 JavaScript 引擎 Event Loop —— 掘金3
-   📖 V8 JavaScript 引擎：高性能的 ES2015+ —— justjavac
-   📖 10 分钟理解 JS 引擎的执行机制 —— SegmentFaut
-   📖 V8 javascript 引擎 —— 博客园

**⬆️ 返回目录**

* * *

31\. 二进制, 十六进制, 十进制, 科学记数法
--------------------------

### 文章

-   📖 二、八、十、十六进制转换(图解篇) —— 博客园
-   📖 JavaScript 读写二进制数据 —— 掘金

### 视频

-   📺 二进制、十进制、十六进制互相转化很难吗？ —— 百度视频

**⬆️ 返回目录**

* * *

32\. 偏函数, 柯里化, Compose 和 Pipe
-----------------------------

### 文章

-   📖 Javascript 函数式编程之偏函数 —— CSDN
-   📖 JavaScript 专题之偏函数 —— SegmentFault
-   📖 柯里化和偏函数有什么区别？ —— SegmentFault
-   📖 Javascript 偏函数与柯里化 —— CSDN
-   📖 柯里化(curry) —— JS 函数式编程指南
-   📖 代码组合(compose) —— JS 函数式编程指南
-   📖 关于 javascript 函数式编程中 compose 的实现 —— SegmentFault
-   📖 实现 compose 的五种思路 —— SegmentFault
-   📖 JavaScript 函数式编程之函数组合函数 compose 和 pipe 的实现 —— SegmentFault
-   📖 JavaScript 轻量级函数式编程-第 4 章:组合函数 ——掘金
-   📖 JavaScript 函数式编程（二） —— @BuptStEve

**⬆️ 返回目录**

* * *

33\. 代码整洁之道
-----------

### 文章

-   📖 \[译\] JavaScript 代码整洁之道 —— 边城
-   📖 Javascript 编程风格 —— 阮一峰
-   📖 重构 - 代码整洁之道 —— 掘金
-   📖 让你的代码更简短，更整洁，更易读的 ES6 小技巧 —— 掘金
-   📖 Web 前端：11 个让你代码整洁的原则 —— 伯乐在线
-   📖 Clean Code concepts adapted for JavaScript —— ryanmcdermott

  

**⬆️ 返回目录**

* * *
