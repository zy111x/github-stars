---
project: waypoints
stars: 10381
description: Waypoints is a library that makes it easy to execute a function whenever you scroll to an element.
url: https://github.com/imakewebthings/waypoints
---

Waypoints
=========

Waypoints is a library that makes it easy to execute a function whenever you scroll to an element.

var waypoint \= new Waypoint({
  element: document.getElementById('thing'),
  handler: function(direction) {
    alert('You have scrolled to a thing')
  }
})

If you're new to Waypoints, check out the Getting Started guide.

Read the full documentation for more details on usage and customization.

Shortcuts
---------

In addition to the normal Waypoints script, extensions exist to make common UI patterns just a little easier to implement:

-   Infinite Scrolling
-   Sticky Elements
-   Inview Detection

Contributing
------------

If you want to report a Waypoints bug or contribute code to the library, please read the Contributing Guidelines. If you need help _using_ Waypoints, please do not open an issue. Instead, ask the question on Stack Overflow and tag it with `#jquery-waypoints`. Be sure to follow the guidelines for asking a good question.

License
-------

Copyright (c) 2011-2014 Caleb Troughton. Licensed under the MIT license.
