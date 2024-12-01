---
project: sprint
stars: 4221
description: A tiny, lightning fast jQuery-like library for modern browsers.
---

Sprint.js
=========

Sprint is a high-performance, 5KB (gzipped) DOM library for modern browsers. Sprint notably shines on bandwidth and resource constrained devices such as phones and tablets.

Sprint has a familiar, jQuery-like chainable API:

$("div").addClass("new").append("<p>Hi Sprint</p>");

Philosophy
----------

Sprint is an alternative—not a replacement—for jQuery. jQuery offers more features, handles more edge cases and supports more browsers. Sprint is just a thin layer making the DOM friendlier without sacrificing on performance.

Performance
-----------

Sprint relies on newer APIs supported by modern browsers (read: IE10+) and optimizes a bunch of other things in order to provide you with fast DOM operations.

Here are a few performance tests of some popular methods (Chrome 42, OS X 10.10.3) :

### .add()

→ View on jsperf

### .attr()

→ View on jsperf

### .css()

→ View on jsperf

### .has()

→ View on jsperf

### .map()

→ View on jsperf

### .next()

→ View on jsperf

### .not()

→ View on jsperf

### .parents()

→ View on jsperf

### .position()

→ View on jsperf

### .slice()

→ View on jsperf

### .text()

→ View on jsperf

Thanks to its reduced feature set, Sprint is also a lot faster to parse and execute (about 40 times faster than jQuery).

API
---

The methods supported by Sprint are, for the most part, identical to jQuery's. The few small differences with jQuery are explained below. If nothing is mentioned, you can assume jQuery's documentation applies.

-   add
-   addClass
-   after
-   append
-   appendTo
-   attr
-   before
-   children
-   clone
-   closest
-   css
-   detach
-   each
-   empty
-   eq
-   filter
-   find
-   first
-   get
-   has
-   hasClass
-   height
-   html
-   index
-   insertAfter
-   insertBefore
-   is
-   last
-   map
-   next
-   nextAll
-   nextUntil
-   not
-   off - _no support for selector_
-   offset
-   offsetParent
-   on - _no support for selector and data_
-   parent
-   parents
-   position
-   prop
-   prepend
-   prependTo
-   prev
-   prevAll
-   prevUntil
-   ready
-   remove
-   removeAttr
-   removeClass
-   removeProp
-   replaceAll
-   replaceWith
-   scrollLeft
-   scrollTop
-   siblings
-   size
-   slice
-   text
-   toggleClass - _no support for .toggleClass(\[switch\])_
-   trigger - _no support for Event object and extraParameters_
-   unwrap
-   val
-   width
-   wrap
-   wrapAll
-   wrapInner
