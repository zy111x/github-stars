---
project: nanobar
stars: 2841
description: Very lightweight progress bars. No jQuery
url: https://github.com/jacoborus/nanobar
---

Very lightweight progress bars (~699 bytes gzipped).

Compatibility: iE7+ and the rest of the world

Demo
----

See nanobar.jacoborus.codes

Installation
------------

Download and extract the latest release or install with package manager:

Bower:

```
$ bower install nanobar
```

npm:

```
$ npm install nanobar
```

Usage
-----

### Load

Link `nanobar.js` from your html file

<script src\="path/to/nanobar.min.js"\></script\>

or require it:

var Nanobar \= require('path/to/nanobar');

### Generate progressbar

var nanobar \= new Nanobar( options );

**options**

-   `id` `<String>`: (optional) id for **nanobar** div
-   `classname` `<String>`: (optional) class for **nanobar** div
-   `target` `<DOM Element>`: (optional) Where to put the progress bar, **nanobar** will be fixed to top of document if no `target` is passed

### Move bar

Resize the bar with `nanobar.go(percentage)`

**arguments**

-   `percentage` `<Number>` : percentage width of nanobar

Example
-------

Create bar

var options \= {
	classname: 'my-class',
  id: 'my-id',
	target: document.getElementById('myDivId')
};

var nanobar \= new Nanobar( options );

//move bar
nanobar.go( 30 ); // size bar 30%
nanobar.go( 76 ); // size bar 76%

// size bar 100% and and finish
nanobar.go(100);

### Customize bars

Nanobar injects a style tag in your HTML head. Bar divs has class `.bar`, and its containers `.nanobar`, so you can overwrite its values.

Default css:

.nanobar {
  width: 100%;
  height: 4px;
  z-index: 9999;
  top:0
}
.bar {
  width: 0;
  height: 100%;
  transition: height .3s;
  background:#000;
}

You should know what to do with that ;)

  
  

* * *

© 2016 jacoborus - Released under MIT License
