---
project: big.js
stars: 4900
description: A small, fast JavaScript library for arbitrary-precision decimal arithmetic.
url: https://github.com/MikeMcl/big.js
---

big.js
======

**A small, fast JavaScript library for arbitrary-precision decimal arithmetic.**

Features
--------

-   Simple API
-   Faster, smaller and easier-to-use than JavaScript versions of Java's BigDecimal
-   Only 6 KB minified
-   Replicates the `toExponential`, `toFixed` and `toPrecision` methods of JavaScript Numbers
-   Stores values in an accessible decimal floating point format
-   Comprehensive documentation and test set
-   No dependencies
-   Uses ECMAScript 3 only, so works in all browsers

The little sister to bignumber.js and decimal.js. See here for some notes on the difference between them.

Install
-------

The library is the single JavaScript file _big.js_ or the ES module _big.mjs_.

### Browsers

Add Big to global scope:

<script src\='path/to/big.js'\></script\>

ES module:

<script type\='module'\>
import Big from './path/to/big.mjs';

Get a minified version from a CDN:

<script src\='https://cdn.jsdelivr.net/npm/big.js@6.2.2/big.min.js'\></script\>

### Node.js

$ npm install big.js

CommonJS:

const Big \= require('big.js');

ES module:

import Big from 'big.js';

### Deno

import Big from 'https://raw.githubusercontent.com/mikemcl/big.js/v6.2.2/big.mjs';
import Big from 'https://unpkg.com/big.js@6.2.2/big.mjs';

Use
---

_In the code examples below, semicolons and `toString` calls are not shown._

The library exports a single constructor function, `Big`.

A Big number is created from a primitive number, string, or other Big number.

x \= new Big(123.4567)
y \= Big('123456.7e-3')                 // 'new' is optional
z \= new Big(x)
x.eq(y) && x.eq(z) && y.eq(z)          // true

In Big strict mode, creating a Big number from a primitive number is disallowed.

Big.strict \= true
x \= new Big(1)                         // TypeError: \[big.js\] Invalid number
y \= new Big('1.0000000000000001')
y.toNumber()                           // Error: \[big.js\] Imprecise conversion

A Big number is immutable in the sense that it is not changed by its methods.

0.3 \- 0.1                              // 0.19999999999999998
x \= new Big(0.3)
x.minus(0.1)                           // "0.2"
x                                      // "0.3"

The methods that return a Big number can be chained.

x.div(y).plus(z).times(9).minus('1.234567801234567e+8').plus(976.54321).div('2598.11772')
x.sqrt().div(y).pow(3).gt(y.mod(z))    // true

Like JavaScript's Number type, there are `toExponential`, `toFixed` and `toPrecision` methods.

x \= new Big(255.5)
x.toExponential(5)                     // "2.55500e+2"
x.toFixed(5)                           // "255.50000"
x.toPrecision(5)                       // "255.50"

The arithmetic methods always return the exact result except `div`, `sqrt` and `pow` (with negative exponent), as these methods involve division.

The maximum number of decimal places and the rounding mode used to round the results of these methods is determined by the value of the `DP` and `RM` properties of the `Big` number constructor.

Big.DP \= 10
Big.RM \= Big.roundHalfUp

x \= new Big(2);
y \= new Big(3);
z \= x.div(y)                           // "0.6666666667"
z.sqrt()                               // "0.8164965809"
z.pow(\-3)                              // "3.3749999995"
z.times(z)                             // "0.44444444448888888889"
z.times(z).round(10)                   // "0.4444444445"

The value of a Big number is stored in a decimal floating point format in terms of a coefficient, exponent and sign.

x \= new Big(\-123.456);
x.c                                    // \[1,2,3,4,5,6\]    coefficient (i.e. significand)
x.e                                    // 2                exponent
x.s                                    // -1               sign

For advanced usage, multiple Big number constructors can be created, each with an independent configuration.

For further information see the API reference documentation.

Minify
------

To minify using, for example, npm and terser

$ npm install -g terser

$ terser big.js -c -m -o big.min.js

Test
----

The _test_ directory contains the test scripts for each Big number method.

The tests can be run with Node.js or a browser.

Run all the tests:

$ npm test

Test a single method:

$ node test/toFixed

For the browser, see _runner.html_ and _test.html_ in the _test/browser_ directory.

_big-vs-number.html_ is a old application that enables some of the methods of big.js to be compared with those of JavaScript's Number type.

TypeScript
----------

The DefinitelyTyped project has a Typescript type definitions file for big.js.

$ npm install --save-dev @types/big.js

Any questions about the TypeScript type definitions file should be addressed to the DefinitelyTyped project.

Licence
-------

MIT

Contributors
------------

Financial supporters
--------------------

Thank you to all who have supported this project via Open Collective, particularly Coinbase.
