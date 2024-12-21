---
project: lebab
stars: 5633
description: Turn your ES5 code into readable ES6. Lebab does the opposite of what Babel does.
url: https://github.com/lebab/lebab
---

Lebab
=====

**Lebab** transpiles your ES5 code to ES6/ES7. It does exactly the opposite of what Babel does. If you want to understand what Lebab exactly does, **try the live demo.**

Install
-------

Install it using npm:

$ npm install -g lebab

Usage
-----

Convert your old-fashioned code using the `lebab` cli tool, enabling a specific transformation:

$ lebab es5.js -o es6.js --transform let

Or transform an entire directory of files in-place:

# .js files only
$ lebab --replace src/js/ --transform arrow
# For other file extensions, use explicit globbing
$ lebab --replace 'src/js/\*\*/\*.jsx' --transform arrow

For all the possible values for `--transform` option see the detailed docs below or use `--help` from command line.

Features and known limitations
------------------------------

The recommended way of using Lebab is to apply one transform at a time, read what exactly the transform does and what are its limitations, apply it for your code and inspect the diff carefully.

### Safe transforms

These transforms can be applied with relatively high confidence. They use pretty straight-forward and strict rules for changing the code. The resulting code should be almost 100% equivalent of the original code.

-   **arrow** - callbacks to arrow functions
    -   Converts bound functions like `function(){}.bind(this)`
    -   not applied to unbound functions that use `this`
    -   not applied to functions that use `arguments`
    -   not applied to object properties (use `obj-method` transform)
    -   does not remove `that = this` assignments
    -   LIMITATION: can mess up prototype-based classes, run the `class` transform first to prevent this.
-   **arrow-return** - drop return statements in arrow functions
    -   converts immediate return `{ return x; }` to `=> x`
    -   applies to arrow functions and nested arrow functions
    -   LIMITATION only applies to arrow functions (run the `arrow` transform first)
-   **for-of** - for loop to for-of loop
    -   uses name `item` for loop variable when loop body begins with `var item = array[i];`
    -   does not work when no such alias defined at the start of loop body
    -   LIMITATION requires let/const variables (run the `let` transform first)
-   **for-each** - for loop to `Array.forEach()`
    -   uses name `item` for forEach parameter when loop body begins with `var item = array[i];`
    -   does not work when no such alias defined at the start of loop body
    -   adds index parameter when loop body makes use of the index variable.
    -   LIMITATION requires let/const variables (run the `let` transform first)
-   **arg-rest** - use of arguments to function(...args)
    -   does not perform the transform when `args` variable already exists
    -   always names the rest-parameter to `args`
    -   LIMITATION does not transform functions with formal parameters
    -   LIMITATION does not remove uses of `Array.slice.call(arguments)`
-   **arg-spread** - use of apply() to spread operator
    -   recognizes `obj.method.apply(obj, args)`
    -   recognizes `func.apply(undefined, args)`
-   **obj-method** - function values in object to methods
    -   LIMITATION does not convert named function expressions
    -   does not convert arrow-functions
-   **obj-shorthand** - `{foo: foo}` to `{foo}`
    -   ignores numeric and `NaN` properties
    -   does not convert string properties
-   **no-strict** - removal of `"use strict"` directives
    -   does not touch stuff like `x = "use strict";`
-   **exponent** - `Math.pow()` to `**` operator (**ES7**)
    -   Full support for all new syntax from ES7
-   **multi-var** - single `var x,y;` declaration to multiple `var x; var y;` (**refactor**)
    -   Not related to any new syntax feature
    -   EXPERIMENT to see if Lebab could be a more generic refactoring helper

### Unsafe transforms

These transforms should be applied with caution. They either use heuristics which can't guarantee that the resulting code is equivalent of the original code, or they have significant bugs which can result in breaking your code.

-   **let** - `var` to `let`/`const`
    -   never modified variables are converted to `const`
    -   properly recognizes block-scoping
    -   splits single var declaration to multiple `let`/`const` declarations if needed
    -   recognizes vars defined/assigned using destructuring
    -   vars that conflict with block-scoping are not converted
    -   repeated declarations of the same var are not converted
    -   existing `let`/`const` are not converted
    -   BUG fails with repeated variable definitions that use destructuring
    -   BUG fails with closure over a loop variable
    -   BUG fails when function closes over variable declared after function is called
-   **class** - function/prototypes to classes
    -   recognizes `Foo.prototype.method = function(){ ... };`
    -   recognizes `Foo.prototype = { ...methods... };`
    -   recognizes static methods like `Foo.method = function(){ ... };`
    -   recognizes getters/setters defined with `Object.defineProperty()`
    -   recognizes inheritance with `Child.prototype = new Parent()`
    -   recognizes inheritance with `util.inherits(Child, Parent);`
    -   converts superclass constructor calls to `super()`
    -   converts superclass method calls to `super.method()`
    -   LIMITATION does not require super() call in subclass constructor
    -   LIMITATION does not enforce super() call position in subclass constructor
    -   LIMITATION does not support namespaced classes
-   **commonjs** - CommonJS module definition to ES6 modules
    -   converts `var foo = require("foo")` to `import foo from "foo"`
    -   converts `var bar = require("foo").bar` to `import {bar} from "foo"`
    -   converts `var {bar} = require("foo")` to `import {bar} from "foo"`
    -   converts `module.exports = <anything>` to `export default <anything>`
    -   converts `exports.foo = function(){}` to `export function foo(){}`
    -   converts `exports.Foo = class {}` to `export class Foo {}`
    -   converts `exports.foo = 123` to `export var foo = 123`
    -   converts `exports.foo = bar` to `export {bar as foo}`
    -   LIMITATION does not check if named export conflicts with existing variable names
    -   LIMITATION Ignores imports/exports inside nested blocks/functions
    -   LIMITATION only handles `require()` calls in `var` declarations
    -   LIMITATION does not ensure that imported variable is treated as `const`
    -   LIMITATION does not ensure named exports are imported with correct ES6 syntax
-   **template** - string concatenation to template strings
    -   converts variables and arbitrary expressions to `${...}`
    -   BUG removes indentation of multi-line strings
    -   LIMITATION ignores difference between `.toString()` and `.valueOf()`
-   **default-param** - default parameters instead of `a = a || 2`
    -   recognizes `a = a || 2`
    -   recognizes `a = a ? a : 2`
    -   recognizes `a = a === undefined ? 2 : a`
    -   recognizes `a = typeof a === 'undefined' ? 2 : a`
    -   LIMITATION transforming `a = a || 2` does not produce strictly equivalent code
-   **destruct-param** - use destructuring for objects in function parameters
    -   converts `(obj) => obj.a + obj.b` to `({a, b}) => a + b`
    -   does not transform when conflicts with existing variables
    -   does not transform when object properties are modified
    -   LIMITATION Only objects with maximum of 4 properties are transformed
    -   BUG Can conflict with variables introduced by the transform itself
-   **includes** - `array.indexOf(foo) !== -1` to `array.includes(foo)` (**ES7**)
    -   works for both strings and arrays
    -   converts `!== -1` to `array.includes(foo)`
    -   converts `=== -1` to `!array.includes(foo)`
    -   recognizes all kinds of comparisons `>= 0`, `> -1`, etc
    -   recognizes both `indexOf() != -1` and `-1 != indexOf()`
    -   LIMITATION does not detect that indexOf() is called on an actual Array or String.

Programming API
---------------

Simply import and call the `transform()` function:

import {transform} from 'lebab';
const {code, warnings} \= transform(
  'var f = function(a) { return a; };', // code to transform
  \['let', 'arrow', 'arrow-return'\] // transforms to apply
);
console.log(code); // -> "const f = a => a;"

The warnings will be an array of objects like:

\[
  {line: 12, msg: 'Unable to transform var', type: 'let'},
  {line: 45, msg: 'Can not use arguments in arrow function', type: 'arrow'},
\]

Most of the time there won't be any warnings and the array will be empty.

Editor plugins
--------------

Alternatively one can use Lebab through plugins in the following editors:

-   Atom: atom-lebab
-   Sublime: lebab-sublime or Lebab ES6 Transform
-   VSCode: vscode-lebab

What's next?
------------

Which feature should Lebab implement next? Let us know by creating an issue or voicing your opinion in existing one.

Want to contribute? Read how Lebab looks for patterns in syntax trees.
