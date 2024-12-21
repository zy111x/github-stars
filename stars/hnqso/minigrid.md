---
project: minigrid
stars: 1782
description: 📏 Minimal 2kb zero dependency cascading grid layout
url: https://github.com/hnqso/minigrid
---

Minigrid
========

Minigrid is a minimal 2kb zero dependency cascading grid layout.

Website & Documentation: http://alves.im/minigrid.

Demo
----

There's a simple example on jsbin.

Installation
------------

Using **NPM**

```
npm install minigrid --save
```

Or 1998 script tag from unpkg:

```
<script src="https://unpkg.com/minigrid@3.1.1/dist/minigrid.min.js"></script>
```

Usage
-----

It works on a grid container with a group of grid items.

```
<div class="cards">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```

Then:

```
var grid = new Minigrid({
  container: '.cards',
  item: '.card',
  gutter: 6
});
grid.mount();
```

### Limitation

Minigrid was built having in mind "cards" with same width and different heights. If your cards have different width sizes or you need more power Minigrid might not be right for you.

Contributing
------------

Plese see CONTRIBUTING.

License
-------

MIT © 2016 Henrique Alves
