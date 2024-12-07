---
project: butterfly
stars: 4489
description: 🦋Butterfly，A JavaScript/React/Vue2 Diagramming library which concentrate on flow layout field.    (基于JavaScript/React/Vue2的流程图组件)
url: https://github.com/alibaba/butterfly
---

### 一个基于JS的数据驱动的节点式编排组件库

English | 简体中文

✨ 特性
----

-   丰富DEMO，开箱即用
-   全方位管理画布，开发者只需要更专注定制化的需求
-   利用DOM/REACT/VUE来定制元素；灵活性，可塑性，拓展性优秀

🚀DEMO
------

### 本地DEMO

```
git clone git@github.com:alibaba/butterfly.git
npm install
cd example
npm install
npm start
```

### 线上DEMO

小蝴蝶官网

📦 安装
-----

```
npm install butterfly-dag
```

🔨 快速上手
-------

### 引入方式

```
// 完全版，内部包含jquery和lodash
import {Canvas, Group, Node, Edge} from 'butterfly-dag';
import 'butterfly-dag/dist/index.css';

// 如果您引用的项目使用了jquery和lodash，为了缩小项目的体积，我们建议：
import {Canvas, Group, Node, Edge} from 'butterfly-dag/pack/index.js';
import 'butterfly-dag/pack/index.css';
```

### 生成画布

```
import {Canvas} from 'butterfly-dag';
let canvas = new Canvas({
  root: dom,              //canvas的根节点(必传)
  zoomable: true,         //可缩放(可传)
  moveable: true,         //可平移(可传)
  draggable: true,        //节点可拖动(可传)
});
canvas.draw({
  groups: [],  //分组信息
  nodes: [],  //节点信息
  edges: []  // 连线信息
})
```

🔗 API文档
--------

-   _**!!! 3.x的API文档，请移步到**_这里;
-   画布(Canvas)
-   节点组(Group)
-   节点(Node)
-   线(Edge)
-   锚点(Endpoint)
-   缩略图(Minimap)
-   提示 & 菜单(tooltips & menu)
-   布局(Layout)
-   插件
    -   箭头(arrow)
    -   左侧画板(pannel)
    -   快捷键(hotkey)
-   React & Vue支持
    -   React butterfly组件支持 \[不维护，推荐用原生小蝴蝶\]
    -   Vue2 butterfly组件支持

🎨优秀案例
------

⌨️垂直业务React拓展组件
---------------

-   数据/字段映射组件: 适用于做数据字段映射，表字段映射，表格连线等业务

-   表字段血缘/业务血缘: 适用于表级血缘,表字段级血缘,业务链路血缘等业务

-   可视化建模图: 适用于UML，数据库建模，数据仓库建设等业务

-   调度编排图(doing)
-   监控图: 适用于任务流，数据流等业务的状态展示

-   Butterfly-Editor(doing)

🤝如何贡献
------

我们欢迎所有的贡献者，在成为贡献者之前，请先阅读贡献指南。

如果您已经了解，快来Issus或Pull requests成为贡献者吧，让我们和小蝴蝶一起成长，一起变得更好、更棒！
