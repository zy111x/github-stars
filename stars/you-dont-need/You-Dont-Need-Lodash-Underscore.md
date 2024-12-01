---
project: You-Dont-Need-Lodash-Underscore
stars: 18822
description: List of JavaScript methods which you can use natively + ESLint Plugin
---

You don't (may not) need Lodash/Underscore
==========================================

Lodash and Underscore are great modern JavaScript utility libraries, and they are widely used by Front-end developers. However, when you are targeting modern browsers, you may find out that there are many methods which are already supported natively thanks to ECMAScript5 \[ES5\] and ECMAScript2015 \[ES6\]. If you want your project to require fewer dependencies, and you know your target browser clearly, then you may not need Lodash/Underscore.

You are welcome to contribute with more items provided below.

-   If you are targeting legacy JavaScript engine with those ES5 methods, you can use es5-shim
    
-   Please note that, the examples used below are just showing you the native alternative of performing certain tasks. For some functions, Lodash provides you more options than native built-ins. This list is not a 1:1 comparison.
    
-   Please send a PR if you want to add or modify the code. No need to open an issue unless it's something big and you want to discuss.
    

Voice of Developers
-------------------

> Make use of native JavaScript object and array utilities before going big.

> —Cody Lindley, Author of jQuery Cookbook and JavaScript Enlightenment

> You probably don't need Lodash. Nice List of JavaScript methods which you can use natively.

> —Daniel Lamb, Computer Scientist, Technical Reviewer of Secrets of the JavaScript Ninja and Functional Programming in JavaScript

> I guess not, but I want it.

> —Tero Parviainen, Author of build-your-own-angular

> I'll admit, I've been guilty of overusing #lodash. Excellent resource.

> —@therebelrobot, Maker of web things, Facilitator for Node.js/io.js

ESLint Plugin
-------------

If you're using ESLint, you can install a plugin that will help you identify places in your codebase where you don't (may not) need Lodash/Underscore.

Install the plugin ...

npm install --save-dev eslint-plugin-you-dont-need-lodash-underscore

... then update your config

"extends" : \["plugin:you-dont-need-lodash-underscore/compatible"\],

For more information, see Configuring the ESLint Plugin

Important

Note that, while many Lodash methods are null safe (e.g. \_.keys, \_.entries), this is not necessarily the case for their Native equivalent. If null safety is critical for your application, we suggest that you take extra precautions \[e.g. consider using the native `Object.keys` as `Object.keys(value || {})`\].

Quick Links
-----------

**Array**

1.  \_.chunk
2.  \_.compact
3.  \_.concat
4.  \_.difference
5.  \_.drop
6.  \_.dropRight
7.  \_.fill
8.  \_.find
9.  \_.findIndex
10.  \_.first
11.  \_.flatten
12.  \_.flattenDeep
13.  \_.fromPairs
14.  \_.head and \_.tail
15.  \_.indexOf
16.  \_.intersection
17.  \_.isArray
18.  \_.isArrayBuffer
19.  \_.join
20.  \_.last
21.  \_.lastIndexOf
22.  \_.reverse
23.  \_.slice
24.  \_.without
25.  \_.initial
26.  \_.pull
27.  \_.unionBy

**Collection\***

Important

Note that most native equivalents are array methods, and will not work with objects. If this functionality is needed and no object method is provided, then Lodash/Underscore might be the better option. Bear in mind however, that all iterable objects can easily be converted to an array by use of the spread operator.

1.  \_.each
2.  \_.every
3.  \_.filter
4.  \_.groupBy
5.  \_.includes
6.  \_.keyBy
7.  \_.map
8.  \_.minBy and \_.maxBy
9.  \_.orderBy
10.  \_.pluck
11.  \_.range
12.  \_.reduce
13.  \_.reduceRight
14.  \_.reject
15.  \_.size
16.  \_.some
17.  \_.sortBy
18.  \_.uniq
19.  \_.uniqWith

**Function**

1.  \_.after
2.  \_.bind
3.  \_.debounce
4.  \_.isFunction
5.  \_.partial
6.  \_.throttle

**Lang**

1.  \_.castArray
2.  .cloneDeep
3.  \_.gt
4.  \_.gte
5.  \_.isDate
6.  \_.isEmpty
7.  \_.isFinite
8.  \_.isInteger
9.  \_.isNaN
10.  \_.isNil
11.  \_.isNull
12.  \_.isUndefined

**Object**

1.  \_.assign
2.  \_.defaults
3.  \_.extend
4.  \_.has
5.  \_.get
6.  \_.invert
7.  \_.isPlainObject
8.  \_.keys
9.  \_.mapKeys
10.  \_.omit
11.  \_.pick
12.  \_.pickBy
13.  \_.toPairs
14.  \_.values

**String**

1.  \_.capitalize
2.  \_.endsWith
3.  \_.isString
4.  \_.lowerFirst
5.  \_.padStart and \_.padEnd
6.  \_.repeat
7.  \_.replace
8.  \_.split
9.  \_.startsWith
10.  \_.template
11.  \_.toLower
12.  \_.toUpper
13.  \_.trim
14.  \_.upperFirst

**Util**

1.  \_.times

**Number**

1.  \_.clamp
2.  \_.inRange
3.  \_.random

Array
-----

### \_.chunk

Creates an array of elements split into groups the length of size.

// Underscore/Lodash
\_.chunk(\['a', 'b', 'c', 'd'\], 2);
// => \[\['a', 'b'\], \['c', 'd'\]\]

\_.chunk(\['a', 'b', 'c', 'd'\], 3);
// => \[\['a', 'b', 'c'\], \['d'\]\]

// Native

const chunk \= (input, size) \=> {
  return input.reduce((arr, item, idx) \=> {
    return idx % size \=== 0
      ? \[...arr, \[item\]\]
      : \[...arr.slice(0, \-1), \[...arr.slice(\-1)\[0\], item\]\];
  }, \[\]);
};

chunk(\['a', 'b', 'c', 'd'\], 2);
// => \[\['a', 'b'\], \['c', 'd'\]\]

chunk(\['a', 'b', 'c', 'd'\], 3);
// => \[\['a', 'b', 'c'\], \['d'\]\]

#### Browser Support for Spread in array literals

46.0 ✔

12.0 ✔

16.0 ✔

✖

37.0 ✔

8.0 ✔

**⬆ back to top**

### \_.compact

Creates an array with all falsy values removed.

// Underscore/Lodash
\_.compact(\[0, 1, false, 2, '', 3\]);
// output: \[1, 2, 3\]

// Native
\[0, 1, false, 2, '', 3\].filter(Boolean)
// output: \[1, 2, 3\]

#### Browser Support for `array.prototype.filter`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.concat

Creates a new array concatenating array with any additional arrays and/or values.

// Underscore/Lodash
var array \= \[1\]
var other \= \_.concat(array, 2, \[3\], \[\[4\]\])

console.log(other)
// output: \[1, 2, 3, \[4\]\]

// Native
var array \= \[1\]
var other \= array.concat(2, \[3\], \[\[4\]\])

console.log(other)
// output: \[1, 2, 3, \[4\]\]

#### Browser Support for `Array.prototype.concat()`

1.0 ✔

✔

1.0 ✔

5.5 ✔

✔

✔

**⬆ back to top**

### \_.difference

Similar to without, but returns the values from array that are not present in the other arrays.

// Underscore/Lodash
console.log(\_.difference(\[1, 2, 3, 4, 5\], \[5, 2, 10\]))
// output: \[1, 3, 4\]

// Native
var arrays \= \[\[1, 2, 3, 4, 5\], \[5, 2, 10\]\];
console.log(arrays.reduce(function(a, b) {
  return a.filter(function(value) {
    return !b.includes(value);
  });
}));
// output: \[1, 3, 4\]

// ES6
let arrays \= \[\[1, 2, 3, 4, 5\], \[5, 2, 10\]\];
console.log(arrays.reduce((a, b) \=> a.filter(c \=> !b.includes(c))));
// output: \[1, 3, 4\]

#### Browser Support for `Array.prototype.reduce()`

✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

**⬆ back to top**

### \_.drop

Creates a slice of array with n elements dropped from the beginning.

// Underscore/Lodash
\_.drop(\[1, 2, 3\]);
// => \[2, 3\]

\_.drop(\[1, 2, 3\], 2);
// => \[3\]

// Native
\[1, 2, 3\].slice(1);
// => \[2, 3\]

\[1, 2, 3\].slice(2);
// => \[3\]

#### Browser Support for `Array.prototype.slice()`

1.0 ✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.dropRight

Creates a slice of array with n elements dropped at the end.

// Underscore/Lodash
\_.dropRight(\[1, 2, 3\]);
// => \[1, 2\]

\_.dropRight(\[1, 2, 3\], 2);
// => \[1\]

// Native
\[1, 2, 3\].slice(0, \-1);
// => \[1, 2\]

\[1, 2, 3\].slice(0, \-2);
// => \[1\]

#### Browser Support for `Array.prototype.slice()`

1.0 ✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.fill

Fills elements of array with value from start up to, but not including, end.

Note

`fill` is a mutable method in both native and Lodash/Underscore.

// Underscore/Lodash
var array \= \[1, 2, 3\]

\_.fill(array, 'a')

console.log(array)
// output: \['a', 'a', 'a'\]

\_.fill(Array(3), 2)
// output: \[2, 2, 2\]

\_.fill(\[4, 6, 8, 10\], '\*', 1, 3)
// output: \[4, '\*', '\*', 10\]

// Native
var array \= \[1, 2, 3\]

array.fill('a')

console.log(array)
// output: \['a', 'a', 'a'\]

Array(3).fill(2)
// output: \[2, 2, 2\]

\[4, 6, 8, 10\].fill('\*', 1, 3)
// output: \[4, '\*', '\*', 10\]

#### Browser Support for `Array.prototype.fill()`

45.0 ✔

✔

31.0 ✔

✖

32.0 ✔

8 ✔

**⬆ back to top**

### \_.find

Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

// Underscore/Lodash
var users \= \[
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
\]

\_.find(users, function (o) { return o.age < 40; })
// output: object for 'barney'

// Native
var users \= \[
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
\]

users.find(function (o) { return o.age < 40; })
// output: object for 'barney'

#### Browser Support for `Array.prototype.find()`

45.0 ✔

✔

25.0 ✔

✖

32.0 ✔

7.1 ✔

**⬆ back to top**

### \_.findIndex

Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

// Underscore/Lodash
var users \= \[
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
\]

var index \= \_.findIndex(users, function (o) { return o.age \>= 40; })
console.log(index)
// output: 1

// Native
var users \= \[
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
\]

var index \= users.findIndex(function (o) { return o.age \>= 40; })
console.log(index)
// output: 1

#### Browser Support for `Array.prototype.findIndex()`

45.0 ✔

✔

25.0 ✔

✖

32.0 ✔

7.1 ✔

**⬆ back to top**

### \_.first

Returns the first element of an array. Passing n will return the first n elements of the array.

// Underscore/Lodash
\_.first(\[1, 2, 3, 4, 5\]);
// => 1

// Underscore
\_.first(\[1, 2, 3, 4, 5\], 2);
// => \[1, 2\]

// Native
\[1, 2, 3, 4, 5\]\[0\];
// => 1
//or
\[\].concat(1, 2, 3, 4, 5).shift()
// => 1
//or
\[\].concat(\[1, 2, 3, 4, 5\]).shift()
// => 1

// Native (works even with potentially undefined/null, like \_.first)
\[\].concat(undefined).shift()
// => undefined

\[1, 2, 3, 4, 5\].slice(0, 2);
// => \[1, 2\]

// Native with ES13
\[1, 2, 3, 4, 5\].at(0)
// => 1
//or
\[\].at(0)
// => undefined

#### Browser Support for `Array.prototype.slice()`

1.0 ✔

✔

1.0 ✔

✔

✔

✔

#### Browser Support for `Array.prototype.at()`

92 ✔

92 ✔

90 ✔

✖

78 ✔

15.4 ✔

**⬆ back to top**

### \_.flatten

Flattens array a single level deep.

// Underscore/Lodash
\_.flatten(\[1, \[2, \[3, \[4\]\], 5\]\]);
// => \[1, 2, \[3, \[4\]\], 5\]

// Native
const flatten \= \[1, \[2, \[3, \[4\]\], 5\]\].reduce( (a, b) \=> a.concat(b), \[\])
// => \[1, 2, \[3, \[4\]\], 5\]

const flatten \= \[\].concat(...\[1, \[2, \[3, \[4\]\], 5\]\])
// => \[1, 2, \[3, \[4\]\], 5\]

// Native(ES2019)
const flatten \= \[1, \[2, \[3, \[4\]\], 5\]\].flat()
// => \[1, 2, \[3, \[4\]\], 5\]

const flatten \= \[1, \[2, \[3, \[4\]\], 5\]\].flatMap(number \=> number)
// => \[1, 2, \[3, \[4\]\], 5\]

#### Browser Support for `Array.prototype.reduce()`

46.0 ✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4 ✔

#### Browser Support for `Array.prototype.flat()`

69 ✔

79 ✔

62 ✔

✖

56 ✔

12 ✔

#### Browser Support for `Array.prototype.flatMap()`

69 ✔

79 ✔

62 ✔

✖

56 ✔

12 ✔

**⬆ back to top**

### \_.flattenDeep

Recursively flattens array.

// Underscore/Lodash
\_.flattenDeep(\[1, \[2, \[3, \[4\]\], 5\]\]);
// => \[1, 2, 3, 4, 5\]

// Native
const flattenDeep \= (arr) \=> Array.isArray(arr)
  ? arr.reduce( (a, b) \=> a.concat(flattenDeep(b)) , \[\])
  : \[arr\]

flattenDeep(\[1, \[\[2\], \[3, \[4\]\], 5\]\])
// => \[1, 2, 3, 4, 5\]

// Native(ES2019)
\[1, \[2, \[3, \[4\]\], 5\]\].flat(Infinity)
// => \[1, 2, 3, 4, 5\]

const flattenDeep \= (arr) \=> arr.flatMap((subArray, index) \=> Array.isArray(subArray) ? flattenDeep(subArray) : subArray)

flattenDeep(\[1, \[\[2\], \[3, \[4\]\], 5\]\])
// => \[1, 2, 3, 4, 5\]

#### Browser Support

46.0 ✔

✔

16.0 ✔

✖

37.0 ✔

7.1 ✔

#### Browser Support for `Array.prototype.flat()`

69 ✔

79 ✔

62 ✔

✖

56 ✔

12 ✔

#### Browser Support for `Array.prototype.flatMap()`

69 ✔

79 ✔

62 ✔

✖

56 ✔

12 ✔

**⬆ back to top**

### \_.fromPairs

Returns an object composed from key-value pairs.

// Underscore/Lodash
\_.fromPairs(\[\['a', 1\], \['b', 2\]\]);
// => { 'a': 1, 'b': 2 }

// Native
const fromPairs \= function(arr) {
  return arr.reduce(function(accumulator, value) {
    accumulator\[value\[0\]\] \= value\[1\];
    return accumulator;
  }, {})
}

// Compact form
const fromPairs \= (arr) \=> arr.reduce((acc, val) \=> (acc\[val\[0\]\] \= val\[1\], acc), {})

fromPairs(\[\['a', 1\], \['b', 2\]\]);
// => { 'a': 1, 'b': 2 }

// Native(ES2019)
Object.fromEntries(\[\['a', 1\], \['b', 2\]\])
// => { 'a': 1, 'b': 2 }

#### Browser Support for `Array.prototype.reduce()`

✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

#### Browser Support for `Object.fromEntries()`

73.0 ✔

79.0 ✔

63.0 ✔

✖

60 ✔

12.1 ✔

**⬆ back to top**

### \_.head and \_.tail

Gets the first element or all but the first element.

const array \= \[1, 2, 3\]

// Underscore: \_.first, \_.head, \_.take
// Lodash: \_.first, \_.head
\_.head(array)
// output: 1

// Underscore: \_.rest, \_.tail, \_.drop
// Lodash: \_.tail
\_.tail(array)
// output: \[2, 3\]

// Native
const \[ head, ...tail \] \= array
console.log(head)
// output: 1
console.log(tail)
// output \[2, 3\]

// Native replacement for \_.head in ES13
array.at(0)
// output: 1

#### Browser Support for Spread in array literals

46.0 ✔

12.0 ✔

16.0 ✔

✖

37.0 ✔

8.0 ✔

#### Browser Support for `Array.prototype.at()`

92 ✔

92 ✔

90 ✔

✖

78 ✔

15.4 ✔

**⬆ back to top**

### \_.indexOf

Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Underscore/Lodash
var array \= \[2, 9, 9\]
var result \= \_.indexOf(array, 2)
console.log(result)
// output: 0

// Native
var array \= \[2, 9, 9\]
var result \= array.indexOf(2)
console.log(result)
// output: 0

#### Browser Support for `Array.prototype.indexOf()`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.intersection

Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays.

// Underscore/Lodash
console.log(\_.intersection(\[1, 2, 3\], \[101, 2, 1, 10\], \[2, 1\]))
// output: \[1, 2\]

// Native
var arrays \= \[\[1, 2, 3\], \[101, 2, 1, 10\], \[2, 1\]\];
console.log(arrays.reduce(function(a, b) {
  return a.filter(function(value) {
    return b.includes(value);
  });
}));
// output: \[1, 2\]

// ES6
let arrays \= \[\[1, 2, 3\], \[101, 2, 1, 10\], \[2, 1\]\];
console.log(arrays.reduce((a, b) \=> a.filter(c \=> b.includes(c))));
// output: \[1, 2\]

#### Browser Support for `Array.prototype.reduce()`

✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

**⬆ back to top**

### \_.takeRight

Creates a slice of array with n elements taken from the end.

Important

Native slice does not behave entirely the same as the `Lodash` method. See example below to understand why.

// Underscore/Lodash
\_.takeRight(\[1, 2, 3\]);
// => \[3\]

\_.takeRight(\[1, 2, 3\], 2);
// => \[2, 3\]

\_.takeRight(\[1, 2, 3\], 5);
// => \[1, 2, 3\]

// Native
\[1, 2, 3\].slice(\-1);
// => \[3\]

\[1, 2, 3\].slice(\-2);
// => \[2, 3\]

\[1, 2, 3\].slice(\-5);
// => \[1, 2, 3\]

// Difference in compatibility

// Lodash
\_.takeRight(\[1, 2, 3\], 0);
// => \[\]

// Native
\[1, 2, 3\].slice(0);
// => \[1, 2, 3\]

#### Browser Support for `Array.prototype.slice()`

1.0 ✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.isArray

Returns true if given value is an array.

// Lodash
var array \= \[\]
console.log(\_.isArray(array))
// output: true

// Native
var array \= \[\]
console.log(Array.isArray(array));
// output: true

#### Browser Support for `Array.isArray()`

5.0 ✔

✔

4.0 ✔

9.0 ✔

10.5 ✔

5.0 ✔

**⬆ back to top**

### \_.isArrayBuffer

Checks if value is classified as an ArrayBuffer object.

// Lodash
\_.isArrayBuffer(new ArrayBuffer(2));
// output: true

// Native
console.log(new ArrayBuffer(2) instanceof ArrayBuffer);
// output: true

Warning

You will get the wrong result if you get `ArrayBuffer` from another realm. See details.

#### Browser Support for `instanceof`

✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.join

Important

Not in Underscore.js

Joins a list of elements in an array with a given separator.

// Lodash
var result \= \_.join(\['one', 'two', 'three'\], '--')
console.log(result)
// output: 'one--two--three'

// Native
var result \= \['one', 'two', 'three'\].join('--')
console.log(result)
// output: 'one--two--three'

#### Browser Support for `Array.prototype.join()`

1.0 ✔

✔

1.0 ✔

5.5 ✔

✔

✔

**⬆ back to top**

### \_.last

Returns the last element of an array. Passing n will return the last n elements of the array.

// Underscore/Lodash
const numbers \= \[1, 2, 3, 4, 5\];
\_.last(numbers);
// => 5

// Underscore
\_.last(numbers, 2);
// => \[4, 5\]

// Native
const numbers \= \[1, 2, 3, 4, 5\];
numbers\[numbers.length \- 1\];
// => 5
//or
numbers.slice(\-1)\[0\];
// => 5
//or
\[\].concat(numbers).pop()
// => 5
//or
numbers.at(\-1);
// => 5

// Native (works even with potentially undefined/null)
\[\].concat(undefined).pop()
// => undefined

numbers.slice(\-2);
// => \[4, 5\]

#### Browser Support for `Array.prototype.concat()`

1.0 ✔

✔

1.0 ✔

5.5 ✔

✔

✔

#### Browser Support for `Array.prototype.at()`

92 ✔

92 ✔

90 ✔

✖

78 ✔

15.4 ✔

**⬆ back to top**

### \_.lastIndexOf

Returns the index of the last occurrence of value in the array, or -1 if value is not present.

// Underscore/Lodash
var array \= \[2, 9, 9, 4, 3, 6\]
var result \= \_.lastIndexOf(array, 9)
console.log(result)
// output: 2

// Native
var array \= \[2, 9, 9, 4, 3, 6\]
var result \= array.lastIndexOf(9)
console.log(result)
// output: 2

#### Browser Support for `Array.prototype.lastIndexOf()`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.reverse

Important

Not in Underscore.js

Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

// Lodash
var array \= \[1, 2, 3\]
console.log(\_.reverse(array))
// output: \[3, 2, 1\]

// Native
var array \= \[1, 2, 3\]
console.log(array.reverse())
// output: \[3, 2, 1\]

Voice from the Lodash author:

> Lodash's `_.reverse` just calls `Array#reverse` and enables composition like `_.map(arrays, _.reverse).` It's exposed on \_ because previously, like `Underscore`, it was only exposed in the chaining syntax. --- jdalton

#### Browser Support for `Array.prototype.reverse()`

✔

✔

1.5 ✔

9 ✔

✔

✔

**⬆ back to top**

### \_.slice

Returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included)

// Lodash
var array \= \[1, 2, 3, 4\]
console.log(\_.slice(array, 1, 3))
// output: \[2, 3\]

// Native
var array \= \[1, 2, 3, 4\]
console.log(array.slice(1, 3));
// output: \[2, 3\]

#### Browser Support for `Array.prototype.slice()`

1.0 ✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.without

Important

Not in Underscore.js

Returns an array where matching items are filtered.

// Lodash
var array \= \[1, 2, 3\]
console.log(\_.without(array, 2))
// output: \[1, 3\]

// Native
var array \= \[1, 2, 3\]
console.log(array.filter(function(value) {
  return value !== 2;
}));
// output: \[1, 3\]

#### Browser Support for `Array.prototype.filter()`

1.0 ✔

✔

1.5 ✔

9 ✔

✔

✔

**⬆ back to top**

### \_.initial

Returns everything but the last entry of the array. Pass n to exclude the last n elements from the result.

// Underscore
var array \= \[5, 4, 3, 2, 1\]
console.log(\_.initial(array, 2))
// output: \[5, 4, 3\]

// Native
var array \= \[5, 4, 3, 2, 1\]
console.log(array.slice(0, \-2));
// output: \[5, 4, 3\]

#### Browser Support for `Array.prototype.slice()`

1.0 ✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.pull

Removes all provided values from the given array using strict equality for comparisons, i.e. ===.

// Lodash
const array \= \[1, 2, 3, 1, 2, 3\];
\_.pull(array, 2, 3);
console.log(array); // output: \[1, 1\]

// Native JS
const array \= \[1, 2, 3, 1, 2, 3\];
function pull(arr, ...removeList){
    var removeSet \= new Set(removeList)
    return arr.filter(function(el){
        return !removeSet.has(el)
    })
}
console.log(pull(array, 2, 3)); // output: \[1, 1\]
console.log(array); // still \[1, 2, 3, 1, 2, 3\]. This is not in place, unlike lodash!

// TypeScript
const array \= \[1, 2, 3, 1, 2, 3\];
const pull \= <T extends unknown\>(sourceArray: T\[\], ...removeList: T\[\]): T\[\] \=> {
  const removeSet \= new Set(removeList);
  return sourceArray.filter(el \=> !removeSet.has(el));
};
console.log(pull(array, 2, 3)); // output: \[1, 1\]
console.log(array); // still \[1, 2, 3, 1, 2, 3\]. This is not in place, unlike lodash!

#### Browser Support for `Array.prototype.filter()`

1.0 ✔

✔

1.5 ✔

9 ✔

✔

✔

#### Browser Support for `Set.prototype.has()`

38 ✔

12 ✔

13 ✔

11 ✔

25 ✔

8 ✔

**⬆ back to top**

### \_.unionBy

Creates an array of unique values, taking an `iteratee` to compute uniqueness with (note that to iterate by a key in an object you must use `x => x.key` instead of `key` for the `iteratee`)

// Lodash
var array1 \= \[2.1\];
var array2 \= \[1.2, 2.3\];
var result \= \_.unionBy(array1, array2, Math.floor)
console.log(result)
// output: \[2.1, 1.2\]

// Native
var array1 \= \[2.1\];
var array2 \= \[1.2, 2.3\];
function unionBy(...arrays) {
    const iteratee \= (arrays).pop();

    if (Array.isArray(iteratee)) {
        return \[\]; // return empty if iteratee is missing
    }

    return \[...arrays\].flat().filter(
        (set \=> (o) \=> set.has(iteratee(o)) ? false : set.add(iteratee(o)))(new Set()),
    );
};
console.log(unionBy(array1, array2, Math.floor))
// output: \[2.1, 1.2\]

#### Browser Support for `Array.prototype.flat()`

69 ✔

79 ✔

62 ✔

✖

56 ✔

12 ✔

#### Browser Support for `Array.isArray()`

5.0 ✔

✔

4.0 ✔

9.0 ✔

10.5 ✔

5.0 ✔

#### Browser Support for `Set.prototype.has()`

38 ✔

12 ✔

13 ✔

11 ✔

25 ✔

8 ✔

**⬆ back to top**

Collection\*
------------

Important

Most native equivalents are array methods, and will not work with objects. If this functionality is needed and no object method is provided, then Lodash/Underscore is the better option.

### \_.each

Iterates over a list of elements, yielding each in turn to an iteratee function.

// Underscore/Lodash
//For arrays
\_.each(\[1, 2, 3\], function (value, index) {
  console.log(value)
})
// output: 1 2 3

//For objects
\_.each({'one':1, 'two':2, 'three':3}, function(value) {
  console.log(value)
})
// output: 1 2 3

// Native
//For arrays
\[1, 2, 3\].forEach(function (value, index) {
  console.log(value)
})
// output: 1 2 3

//For objects
Object.entries({'one':1, 'two':2, 'three':3}).forEach(function(\[key,value\],index) {
  console.log(value)
})
//output: 1 2 3

#### Browser Support for `Array.prototype.forEach()`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

#### Browser Support for `Object.entries().forEach()`

54 ✔

14 ✔

47 ✔

✖

41 ✔

10.1✔

**⬆ back to top**

### \_.every

Tests whether all elements in the array pass the test implemented by the provided function.

// Underscore/Lodash
function isLargerThanTen (element, index, array) {
  return element \>= 10
}
var array \= \[10, 20, 30\]
var result \= \_.every(array, isLargerThanTen)
console.log(result)
// output: true

// Native
function isLargerThanTen (element, index, array) {
  return element \>= 10
}

var array \= \[10, 20, 30\]
var result \= array.every(isLargerThanTen)
console.log(result)
// output: true

#### Browser Support for `Array.prototype.every()`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.filter

Creates a new array with all elements that pass the test implemented by the provided function.

// Underscore/Lodash
function isBigEnough (value) {
  return value \>= 10
}
var array \= \[12, 5, 8, 130, 44\]
var filtered \= \_.filter(array, isBigEnough)
console.log(filtered)
// output: \[12, 130, 44\]

// Native
function isBigEnough (value) {
  return value \>= 10
}
var array \= \[12, 5, 8, 130, 44\]
var filtered \= array.filter(isBigEnough)
console.log(filtered)
// output: \[12, 130, 44\]

#### Browser Support for `Array.prototype.filter()`

✔

✔

1.5 ✔

9 ✔

✔

✔

**⬆ back to top**

### \_.groupBy

Group items by key.

// Underscore/Lodash
var grouped \= \_.groupBy(\['one', 'two', 'three'\], 'length')
console.log(grouped)
// output: {3: \["one", "two"\], 5: \["three"\]}

// Native
var grouped \= \['one', 'two', 'three'\].reduce((r, v, i, a, k \= v.length) \=> ((r\[k\] || (r\[k\] \= \[\])).push(v), r), {})
console.log(grouped)
// output: {3: \["one", "two"\], 5: \["three"\]}

// Native
Object.groupBy(\['one', 'two', 'three'\], ({length}) \=> length)
// output: {3: \["one", "two"\], 5: \["three"\]}

// Underscore/Lodash
var grouped \= \_.groupBy(\[1.3, 2.1, 2.4\], num \=> Math.floor(num))
console.log(grouped)
// output: {1: \[1.3\], 2: \[2.1, 2.4\]}

// Native
var grouped \= \[1.3, 2.1, 2.4\].reduce((r, v, i, a, k \= Math.floor(v)) \=> ((r\[k\] || (r\[k\] \= \[\])).push(v), r), {})
console.log(grouped)
// output: {1: \[1.3\], 2: \[2.1, 2.4\]}

// Native
Object.groupBy(\[1.3, 2.1, 2.4\], num \=> Math.floor(num))
// output: {1: \[1.3\], 2: \[2.1, 2.4\]}

#### Browser Support for `Array.prototype.reduce()`

✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

#### Browser Support for `Object.groupBy()`

117.0 ✔

117.0 ✔

119.0 ✔

✖

103.0 ✔

16.4 ✔

**⬆ back to top**

### \_.includes

Checks if a value is in collection.

var array \= \[1, 2, 3\]
// Underscore/Lodash - also called \_.contains
\_.includes(array, 1)
// output: true

// Native
var array \= \[1, 2, 3\]
array.includes(1)
// output: true

// Native (does not use same value zero)
var array \= \[1, 2, 3\]
array.indexOf(1) \> \-1
// output: true

#### Browser Support for `Array.prototype.includes`

47.0 ✔

14.0 ✔

43.0 ✔

✖

34.0 ✔

9.0 ✔

#### Browser Support for `Array.prototype.indexOf`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.keyBy

Warning

Not in Underscore.js

Creates an object composed of keys generated from the results of running each element of collection through iteratee.

// Lodash
console.log(\_.keyBy(\['a', 'b', 'c'\]))
// output: { a: 'a', b: 'b', c: 'c' }
console.log(\_.keyBy(\[{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }\], 'id'))
// output: { a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } }
console.log(\_.keyBy({ data: { id: 'a1', title: 'abc' }}, 'id'))
// output: { a1: { id: 'a1', title: 'abc' }}

// keyBy for array only
const keyBy \= (array, key) \=> (array || \[\]).reduce((r, x) \=> ({ ...r, \[key ? x\[key\] : x\]: x }), {});

// Native
console.log(keyBy(\['a', 'b', 'c'\]))
// output: { a: 'a', b: 'b', c: 'c' }
console.log(keyBy(\[{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }\], 'id'))
// output: { a1: { id: 'a1', title: 'abc' }, b2: { id: 'b2', title: 'def' } }
console.log(keyBy(Object.values({ data: { id: 'a1', title: 'abc' }}), 'id'))
// output: { a1: { id: 'a1', title: 'abc' }}

// keyBy for array and object
const collectionKeyBy \= (collection, key) \=> {
  const c \= collection || {};
  return c.isArray() ? keyBy(c, key) : keyBy(Object.values(c), key);
}

#### Browser Support for `Array.prototype.reduce()`

✔

12.0 ✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

**⬆ back to top**

### \_.map

Translates all items in an array or object to new array of items.

// Underscore/Lodash
var array1 \= \[1, 2, 3\]
var array2 \= \_.map(array1, function (value, index) {
  return value \* 2
})
console.log(array2)
// output: \[2, 4, 6\]

// Native
var array1 \= \[1, 2, 3\]
var array2 \= array1.map(function (value, index) {
  return value \* 2
})
console.log(array2)
// output: \[2, 4, 6\]

// Underscore/Lodash
var object1 \= { 'a': 1, 'b': 2, 'c': 3 }
var object2 \= \_.map(object1, function (value, index) {
  return value \* 2
})
console.log(object2)
// output: \[2, 4, 6\]

// Native
var object1 \= { 'a': 1, 'b': 2, 'c': 3 }
var object2 \= Object.entries(object1).map(function (\[key, value\], index) {
  return value \* 2
})
console.log(object2)
// output: \[2, 4, 6\]

#### Browser Support for `Object.entries()` and destructuring

✔

✔

1.5 ✔

✖

✔

✔

#### Browser Support for `Array.prototype.map()`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.minBy and \_.maxBy

Use `Array.prototype.reduce()` for find the maximum or minimum collection item

// Underscore/Lodash
var data \= \[{ value: 6 }, { value: 2 }, { value: 4 }\]
var minItem \= \_.minBy(data, 'value')
var maxItem \= \_.maxBy(data, 'value')
console.log(minItem, maxItem)
// output: { value: 2 } { value: 6 }

// Native
var data \= \[{ value: 6 }, { value: 2 }, { value: 4 }\]
var minItem \= data.reduce(function(a, b) { return a.value <= b.value ? a : b }, {})
var maxItem \= data.reduce(function(a, b) { return a.value \>= b.value ? a : b }, {})
console.log(minItem, maxItem)
// output: { value: 2 }, { value: 6 }

Extract a functor and use es2015 for better code

// utils
const makeSelect \= (comparator) \=> (a, b) \=> comparator(a, b) ? a : b
const minByValue \= makeSelect((a, b) \=> a.value <= b.value)
const maxByValue \= makeSelect((a, b) \=> a.value \>= b.value)

// main logic
const data \= \[{ value: 6 }, { value: 2 }, { value: 4 }\]
const minItem \= data.reduce(minByValue, {})
const maxItem \= data.reduce(maxByValue, {})

console.log(minItem, maxItem)
// output: { value: 2 }, { value: 6 }

// or also more universal and little slower variant of minBy
const minBy \= (collection, key) \=> {
  // slower because need to create a lambda function for each call...
  const select \= (a, b) \=> a\[key\] <= b\[key\] ? a : b
  return collection.reduce(select, {})
}

console.log(minBy(data, 'value'))
// output: { value: 2 }

#### Browser Support for `Array.prototype.reduce()`

✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

**⬆ back to top**

### \_.pluck

`array.map` or `_.map` can also be used to replace `_.pluck`. Lodash v4.0 removed `_.pluck` in favor of `_.map` with iteratee shorthand. Details can be found in Changelog

// Underscore/Lodash
var array1 \= \[{name: "Alice"}, {name: "Bob"}, {name: "Jeremy"}\]
var names \= \_.pluck(array1, "name")
console.log(names)
// output: \["Alice", "Bob", "Jeremy"\]

// Native
var array1 \= \[{name: "Alice"}, {name: "Bob"}, {name: "Jeremy"}\]
var names \= array1.map(function(x){
  return x.name
})
console.log(names)
// output: \["Alice", "Bob", "Jeremy"\]

#### Browser Support for `Array.prototype.map()`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.reduce

Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

// Underscore/Lodash
var array \= \[0, 1, 2, 3, 4\]
var result \= \_.reduce(array, function (previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue
})
console.log(result)
// output: 10

// Native
var array \= \[0, 1, 2, 3, 4\]
var result \= array.reduce(function (previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue
})
console.log(result)
// output: 10

#### Browser Support for `Array.prototype.reduce()`

✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

**⬆ back to top**

### \_.range

Creates an array of numbers progressing from start up to.

// Underscore/Lodash
\_.range(4)  // output: \[0, 1, 2, 3\]
\_.range(\-4) // output: \[0, -1, -2, -3\]
\_.range(1, 5)     // output: \[1, 2, 3, 4\]
\_.range(0, 20, 5) // output: \[0, 5, 10, 15\]

// Native ( solution with Array.from )
Array.from({length: 4}, (\_, i) \=> i)  // output: \[0, 1, 2, 3\]
Array.from({length: 4}, (\_, i) \=> \-i) // output: \[-0, -1, -2, -3\]
Array.from({length: 4}, (\_, i) \=> i + 1) // output: \[1, 2, 3, 4\]
Array.from({length: 4}, (\_, i) \=> i \* 5) // output: \[0, 5, 10, 15\]

// Native ( solution with keys() and spread )
\[...Array(4).keys()\]  // output: \[0, 1, 2, 3\]
\[...Array(4).keys()\].map(k \=> \-k) // output: \[-0, -1, -2, -3\]
\[...Array(4).keys()\].map(k \=> k + 1)  // output: \[1, 2, 3, 4\]
\[...Array(4).keys()\].map(k \=> k \* 5)  // output: \[0, 5, 10, 15\]

#### Browser Support for `Array.from()`

45.0 ✔

✔

32.0 ✔

✖

✔

9.0 ✔

#### Browser Support for keys and spread in Array literals

46.0 ✔

12.0 ✔

16.0 ✔

✖

37.0 ✔

7.1 ✔

**⬆ back to top**

### \_.reduceRight

This method is like \_.reduce except that it iterates over elements of collection from right to left.

// Underscore/Lodash
var array \= \[0, 1, 2, 3, 4\]
var result \= \_.reduceRight(array, function (previousValue, currentValue, currentIndex, array) {
  return previousValue \- currentValue
})
console.log(result)
// output: -2

// Native
var array \= \[0, 1, 2, 3, 4\]
var result \= array.reduceRight(function (previousValue, currentValue, currentIndex, array) {
  return previousValue \- currentValue
})
console.log(result)
// output: -2

#### Browser Support for `Array.prototype.reduceRight()`

✔

✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

**⬆ back to top**

### \_.reject

The opposite of \_.filter; this method returns the elements of collection that predicate does not return truthy for.

// Underscore/Lodash
var array \= \[1, 2, 3, 4, 5\];
var result \= \_.reject(array, function (x) {
  return x % 2 \=== 0;
});
// output: \[1, 3, 5\]

// Native
var array \= \[1, 2, 3, 4, 5\];

var reject \= function (arr, predicate) {
  var complement \= function (f) {
    return function (x) {
      return !f(x);
    }
  };

  return arr.filter(complement(predicate));
};
// output: \[1, 3, 5\]

#### Browser Support for `Array.prototype.filter()`

✔

12 ✔

1.5 ✔

9.0 ✔

9.5 ✔

3.0 ✔

**⬆ back to top**

### \_.sample

Gets a random element from `array`.

// Underscore/Lodash
const array \= \[0, 1, 2, 3, 4\]
const result \= \_.sample(array)
console.log(result)
// output: 2

// Native
const array \= \[0, 1, 2, 3, 4\]
const sample \= arr \=> {
  const len \= arr \== null ? 0 : arr.length
  return len ? arr\[Math.floor(Math.random() \* len)\] : undefined
}

const result \= sample(array)
console.log(result)
// output: 2

#### Browser Support for `Array.prototype.length()` and `Math.random()`

✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.size

Returns the number of values in the collection.

// Underscore/Lodash
var result \= \_.size({one: 1, two: 2, three: 3})
console.log(result)
// output: 3

// Native
var result2 \= Object.keys({one: 1, two: 2, three: 3}).length
console.log(result2)
// output: 3

#### Browser Support for `Object.keys()`

5.0 ✔

✔

4.0 ✔

9.0 ✔

12.0 ✔

5.0 ✔

**⬆ back to top**

### \_.some

Tests whether any of the elements in the array pass the test implemented by the provided function.

// Underscore/Lodash
function isLargerThanTen (element, index, array) {
  return element \>= 10
}
var array \= \[10, 9, 8\]
var result \= \_.some(array, isLargerThanTen)
console.log(result)
// output: true

// Native
function isLargerThanTen (element, index, array) {
  return element \>= 10
}

var array \= \[10, 9, 8\]
var result \= array.some(isLargerThanTen)
console.log(result)
// output: true

#### Browser Support for `Array.prototype.some()`

✔

✔

1.5 ✔

✔ 9.0

✔

✔

**⬆ back to top**

### \_.sortBy and \_.orderBy

Sorts an array of object based on an object key provided by a parameter (note this is more limited than Underscore/Lodash).

const fruits \= \[
  {name:"banana", amount: 2},
  {name:"apple", amount: 4},
  {name:"pineapple", amount: 2},
  {name:"mango", amount: 1}
\];

// Underscore
\_.sortBy(fruits, 'name');
// => \[{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}\]

// Lodash
\_.orderBy(fruits, \['name'\],\['asc'\]);
// => \[{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}\]

// Native
const sortBy \= (key) \=> {
  return (a, b) \=> (a\[key\] \> b\[key\]) ? 1 : ((b\[key\] \> a\[key\]) ? \-1 : 0);
};

// The native sort modifies the array in place. \`\_.orderBy\` and \`\_.sortBy\` do not, so we use \`.concat()\` to
// copy the array, then sort.
fruits.concat().sort(sortBy("name"));
// => \[{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}\]

#### Browser Support for `Array.prototype.concat()` and `Array.prototype.sort()`

1.0 ✔

✔

1.0 ✔

5.5 ✔

✔

✔

**⬆ back to top**

### \_.uniq

Produces a duplicate-free version of the array, using === to test object equality.

// Underscore/Lodash
var array \= \[1, 2, 1, 4, 1, 3\]
var result \= \_.uniq(array)
console.log(result)
// output: \[1, 2, 4, 3\]

// Native
var array \= \[1, 2, 1, 4, 1, 3\];
var result \= \[...new Set(array)\];
console.log(result)
// output: \[1, 2, 4, 3\]

#### Browser Support for Spread in array literals

46.0 ✔

12.0 ✔

16.0 ✔

✖

37.0 ✔

8.0 ✔

**⬆ back to top**

Function
--------

### \_.after

Warning

This is an alternative implementation

Creates a version of the function that will only be run after first being called count times. Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.

var notes \= \['profile', 'settings'\]
// Underscore/Lodash
var renderNotes \= \_.after(notes.length, render)
notes.forEach(function (note) {
  console.log(note)
  renderNotes()
})

// Native
notes.forEach(function (note, index) {
  console.log(note)
  if (notes.length \=== (index + 1)) {
    render()
  }
})

#### Browser Support for `Array.prototype.forEach()`

✔

✔

1.5 ✔

9.0 ✔

✔

✔

**⬆ back to top**

### \_.bind

Create a new function that calls _func_ with _thisArg_ and _args_.

var objA \= {
  x: 66,
  offsetX: function(offset) {
    return this.x + offset;
  }
}

var objB \= {
  x: 67
};

// Underscore/Lodash
var boundOffsetX \= \_.bind(objA.offsetX, objB, 0);

// Native
var boundOffsetX \= objA.offsetX.bind(objB, 0);

#### Browser Support for `Function.prototype.bind()`

7.0 ✔

✔

4.0 ✔

9.0 ✔

11.6 ✔

5.1 ✔

**⬆ back to top**

### \_.isFunction

Checks if value is classified as a _Function_ object.

// Lodash
\_.isFunction(console.log);
// => true

\_.isFunction(/abc/);
// => false

// Native
function isFunction(func) {
  return typeof func \=== "function";
}

isFunction(setTimeout);
// => true

isFunction(123);
// => false

#### Browser Support

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.debounce

Create a new function that calls `func` with `thisArg` and `args`.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
  	var context \= this, args \= arguments;
  	clearTimeout(timeout);
  	if (immediate && !timeout) func.apply(context, args);
  	timeout \= setTimeout(function() {
  		timeout \= null;
  		if (!immediate) func.apply(context, args);
  	}, wait);
  };
}

// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150));

#### Browser Support for `debounce`

7.0 ✔

✔

4.0 ✔

9.0 ✔

11.6 ✔

5.1 ✔

**⬆ back to top**

### \_.partial

Create a new function that calls `func` with `args`.

// Lodash
function greet(greeting, name) {
  return greeting + ' ' + name;
}
var sayHelloTo \= \_.partial(greet, 'Hello');
var result \= sayHelloTo('Jose')
console.log(result)
// output: 'Hello Jose'

// Native
function greet(greeting, name) {
  return greeting + ' ' + name;
}
var sayHelloTo \= (...args) \=> greet('Hello', ...args)
var result \= sayHelloTo('Jose')
console.log(result)
// output: 'Hello Jose'

// Native
const partial \= (func, ...boundArgs) \=> (...remainingArgs) \=> func(...boundArgs, ...remainingArgs)
var sayHelloTo \= partial(greet, 'Hello');
var result \= sayHelloTo('Jose')
console.log(result)
// output: 'Hello Jose'

#### Browser Support for Spread

46.0 ✔

12.0 ✔

16.0 ✔

✖

37.0 ✔

8.0 ✔

**⬆ back to top**

### \_.throttle

Create a new function that limits calls to `func` to once every given timeframe.

function throttle(func, timeFrame) {
  var lastTime \= 0;
  return function (...args) {
      var now \= new Date();
      if (now \- lastTime \>= timeFrame) {
          func(...args);
          lastTime \= now;
      }
  };
}

// Avoid running the same function twice within the specified timeframe.
jQuery(window).on('resize', throttle(calculateLayout, 150));

#### Browser Support for `throttle`

5.0 ✔

12.0 ✔

3.0 ✔

9.0 ✔

10.5 ✔

4.0 ✔

**⬆ back to top**

Lang
----

### \_.castArray

Puts the value into an array of length one if it is not already an array.

// Underscore
console.log(\_.castArray(5))
// output: \[5\]
console.log(\_.castArray(\[2\]))
// output: \[2\]

// Native
function castArray(arr) {
  return Array.isArray(arr) ? arr : \[arr\]
}
// output: true
console.log(castArray(5));
// output: \[5\]
console.log(castArray(\[2\]));
// output: \[2\]

#### Browser Support for `Array.isArray()`

5.0 ✔

✔

4.0 ✔

9.0 ✔

10.5 ✔

5.0 ✔

**⬆ back to top**

### \_.cloneDeep

Creates a deep copy by recursively cloning the value.

// Lodash
var objects \= \[{ 'a': 1 }, { 'b': 2 }\];

var clone \= \_.cloneDeep(objects);
console.log(clone\[0\] \=== objects\[0\]);
// output: false

// Native
var objects \= \[{ 'a': 1 }, { 'b': 2 }\];

var clone \= structuredClone(objects);
console.log(clone\[0\] \=== objects\[0\]);
// output: false

#### Browser Support for `structuredClone()`

98.0 ✔

98.0 ✔

94.0 ✔

✖

84.0 ✔

15.4 ✔

**⬆ back to top**

### \_.isDate

Checks if value is classified as a Date object.

// Lodash
console.log(\_.isDate(new Date));
// output: true

// Native
console.log(Object.prototype.toString.call(new Date) \=== "\[object Date\]");
// output: true

#### Browser Support for `String.prototype.toString.call()`

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.gt

Checks if value is greater than other.

// Lodash
console.log(\_.gt(3, 1))
// output: true

// Native
console.log(3 \> 1);
// output: true

#### Browser Support

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.gte

Checks if value is greater than or equal to other.

// Lodash
console.log(\_.gte(3, 1))
// output: true

// Native
console.log(3 \>= 1);
// output: true

#### Browser Support

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.isEmpty

Checks if value is an empty object or collection.

Warning

The Native version does not support evaluating a Set or a Map

// Lodash
console.log(\_.isEmpty(null))
// output: true
console.log(\_.isEmpty(''))
// output: true
console.log(\_.isEmpty({}))
// output: true
console.log(\_.isEmpty(\[\]))
// output: true
console.log(\_.isEmpty({a: '1'}))
// output: false

// Native
const isEmpty \= obj \=> \[Object, Array\].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

console.log(isEmpty(null))
// output: true
console.log(isEmpty(''))
// output: true
console.log(isEmpty({}))
// output: true
console.log(isEmpty(\[\]))
// output: true
console.log(isEmpty({a: '1'}))
// output: false

#### Browser Support for `Array.prototype.includes()`

47.0 ✔

14.0 ✔

43.0 ✔

✖

34.0 ✔

9.0 ✔

**⬆ back to top**

### \_.isFinite

Checks if value is a finite primitive number.

// Lodash
console.log(\_.isFinite('3'))
// output: false
console.log(\_.isFinite(3))
// output: true

// Native
console.log(Number.isFinite('3'))
// output: false
console.log(Number.isFinite(3))
// output: true

#### Browser Support for `Number.isFinite()`

19.0 ✔

✔

16.0 ✔

✖

15.0 ✔

9.0 ✔

**⬆ back to top**

### \_.isInteger

Checks if value is an integer.

// Lodash
console.log(\_.isInteger(3))
// output: true
console.log(\_.isInteger('3'))
// output: false

// Native
console.log(Number.isInteger(3))
// output: true
console.log(Number.isInteger('3'))
// output: false

#### Browser Support for `Number.isInteger()`

✔

12 ✔

16.0 ✔

✖

✔

✔

**⬆ back to top**

### \_.isPlainObject

Checks if value is a plain object, that is, an object created by the Object constructor or one with a \[\[Prototype\]\] of null.

var object \= { 'a': 1, 'b': 2, 'c': 1 };

// Underscore/Lodash
var result \= \_.isPlainObject(object);
console.log(result)
// output: true

function isPlainObject(value) {
  if (typeof value !== 'object' || value \=== null) return false

  if (Object.prototype.toString.call(value) !== '\[object Object\]') return false

  const proto \= Object.getPrototypeOf(value);
  if (proto \=== null) return true

  const Ctor \= Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (
      typeof Ctor \=== 'function' &&
      Ctor instanceof Ctor && Function.prototype.call(Ctor) \=== Function.prototype.call(value)
  );
}

#### Browser Support for `Object.getPrototypeOf()`

5.0 ✔

12.0 ✔

3.5 ✔

✖

12.1 ✔

5.0 ✔

**⬆ back to top**

### \_.isNaN

Checks if a value is NaN.

// Underscore/Lodash
console.log(\_.isNaN(NaN))
// output: true

// Native
console.log(isNaN(NaN))
// output: true

// ES6
console.log(Number.isNaN(NaN))
// output: true

MDN:

> In comparison to the global `isNaN()` function, `Number.isNaN()` doesn't suffer the problem of forcefully converting the parameter to a number. This means it is now safe to pass values that would normally convert to `NaN`, but aren't actually the same value as `NaN`. This also means that only values of the type number, that are also `NaN`, return true. Number.isNaN()

Voice from the Lodash author:

> Lodash's `_.isNaN` is equiv to ES6 `Number.isNaN` which is different than the global `isNaN`. --- jdalton

#### Browser Support for `isNaN`

✔

✔

1.0 ✔

✔

✔

✔

#### Browser Support for `Number.isNaN`

25.0 ✔

✔

15.0 ✔

✖

✔

9.0 ✔

**⬆ back to top**

### \_.isNil

Warning

Not in Underscore.js

Checks if value is null or undefined.

// Lodash
console.log(\_.isNil(null))
// output: true
console.log(\_.isNil(NaN))
// output: false
console.log(\_.isNil(undefined))
// output: true

// Native
console.log(null \== null);
// output: true
console.log(NaN \== null);
// output: false
console.log(undefined \== null)
// output: true

#### Browser Support

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.isNull

Checks if value is null.

// Underscore/Lodash
console.log(\_.isNull(null))
// output: true
console.log(\_.isNull(void 0))
// output: false

// Native
console.log(null \=== null);
// output: true
console.log(void 0 \=== null);
// output: false

#### Browser Support

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.isUndefined

Checks if value is undefined.

// Underscore/Lodash
console.log(\_.isUndefined(a))
// output: true

// Native
console.log(typeof a \=== 'undefined');
// output: true
console.log(a \=== undefined);
// output: true

#### Browser Support

✔

✔

1 ✔

✔

✔

✔

**⬆ back to top**

Object
------

### \_.assign

The method is used to copy the values of all enumerable own properties from one or more source objects to a target object.

// Underscore: \_.extendOwn
// Lodash
function Foo() {
  this.c \= 3;
}
function Bar() {
  this.e \= 5;
}
Foo.prototype.d \= 4;
Bar.prototype.f \= 6;
var result \= \_.assign(new Foo, new Bar);
console.log(result);
// output: { 'c': 3, 'e': 5 }

// Native
function Foo() {
  this.c \= 3;
}
function Bar() {
  this.e \= 5;
}
Foo.prototype.d \= 4;
Bar.prototype.f \= 6;
var result \= Object.assign({}, new Foo, new Bar);
console.log(result);
// output: { 'c': 3, 'e': 5 }

#### Browser Support for `Object.assign()`

45.0 ✔

✔

34.0 ✔

✖

32.0 ✔

9.0 ✔

**⬆ back to top**

### \_.defaults

The method is used to apply new values over an object with default values for keys.

// Underscore: \_.defaults
// Lodash
const newValues \= {a: 3};
const defaultValues \= {a: 1, b: 2}
const appliedValues \= \_.defaults(newValues, defaultValues);
console.log(appliedValues)
// output { a: 3, b: 2 }

// Native
const newValues \= {a: 3};
const defaultValues \= {a: 1, b: 2}
const appliedValues \= Object.assign({}, defaultValues, newValues);
// output { a: 3, b: 2 }

#### Browser Support for `Object.assign()`

45.0 ✔

✔

34.0 ✔

✖

32.0 ✔

9.0 ✔

**⬆ back to top**

### \_.extend

The method is used to copy the values of all enumerable own and inherited properties from one or more source objects to a target object.

// Underscore
// Lodash: \_.assignIn
function Foo() {
  this.c \= 3;
}
function Bar() {
  this.e \= 5;
}
Foo.prototype.d \= 4;
Bar.prototype.f \= 6;
var result \= \_.extend({}, new Foo, new Bar);
console.log(result);
// output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }

// Native
function Foo() {
  this.c \= 3;
}
function Bar() {
  this.e \= 5;
}
Foo.prototype.d \= 4;
Bar.prototype.f \= 6;
var result \= Object.assign({}, new Foo, Foo.prototype, new Bar, Bar.prototype);
console.log(result);
// output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }

//Or using a function
const extend \= (target, ...sources) \=> {
 const length \= sources.length;

  if (length < 1 || target \== null) return target;
  for (let i \= 0; i < length; i++) {
    const source \= sources\[i\];

    for (const key in source) {
      target\[key\] \= source\[key\];
    }
  }
  return target;
};
console.log(extend({}, new Foo, new Bar));
// output: { 'c': 3, 'd': 4, 'e': 5, 'f': 6 }

#### Browser Support for `Object.assign()`

45.0 ✔

✔

34.0 ✔

✖

32.0 ✔

9.0 ✔

**⬆ back to top**

### \_.has

Checks if `key` is a direct property of `object`. Key may be a path of a value separated by `.`

// Lodash
var object \= { a: 1, b: 'settings', c: { d: 'test' } };

var hasA \= \_.has(object, 'a');
var hasCWhichHasD \= \_.has(object, 'c.d')

console.log(hasA);
// output: true
console.log(hasCWhichHasD);
// output: true

// Native
const has \= function (obj, key) {
  var keyParts \= key.split('.');

  return !!obj && (
    keyParts.length \> 1
      ? has(obj\[key.split('.')\[0\]\], keyParts.slice(1).join('.'))
      : hasOwnProperty.call(obj, key)
  );
};

var object \= { a: 1, b: 'settings' };
var result \= has(object, 'a');
// output: true

#### Browser Support for Object .hasOwnProperty

✔

12 ✔

✔

5.5 ✔

5 ✔

3 ✔

**⬆ back to top**

### \_.get

Gets the value at path of object.

Note

If provided path does not exist inside the object js will generate error.

// Lodash
var object \= { a: \[{ b: { c: 3 } }\] };
var result \= \_.get(object, 'a\[0\].b.c', 1);
console.log(result);
// output: 3

// Native (ES6 - IE not supported)
var object \= { a: \[{ b: { c: 3 } }\] };
var { a: \[{ b: { c: result \= 1 } \= {} } \= {}\] \= \[\] } \= object;
console.log(result);
// output: 3

// Native (ES11)
var object \= { a: \[{ b: { c: 3 } }\] };
var result \= object?.a?.\[0\]?.b?.c ?? 1;
console.log(result);
// output: 3

// Native
const get \= (obj, path, defaultValue \= undefined) \=> {
  const travel \= regexp \=>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) \=> (res !== null && res !== undefined ? res\[key\] : res), obj);
  const result \= travel(/\[,\[\\\]\]+?/) || travel(/\[,\[\\\].\]+?/);
  return result \=== undefined || result \=== obj ? defaultValue : result;
};

var object \= { a: \[{ b: { c: 3 } }\] };
var result \= get(object, 'a\[0\].b.c', 1);
// output: 3

#### Browser Support for Object destructing

49.0 ✔

14.0 ✔

41.0 ✔

✖

41.0 ✔

8.0 ✔

#### Browser Support for optional chaining `?.`

80.0 ✔

80.0 ✔

74.0 ✔

✖

67.0 ✔

13.1 ✔

#### Browser Support for nullish coalescing operator `??`

80.0 ✔

80.0 ✔

72.0 ✔

✖

✖

13.1 ✔

**⬆ back to top**

### \_.invert

Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.

var object \= { 'a': 1, 'b': 2, 'c': 1 };

// Underscore/Lodash
var result \= \_.invert(object);
console.log(result)
// output: { '1': 'c', '2': 'b' }

// Native (IE6)
function invert(object) {
  var obj \= {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      obj\[object\[key\]\] \= key;
    }
  }
  return obj;
}
var result \= invert(object);
console.log(result)
// output: { '1': 'c', '2': 'b' }

// Native (IE not supported)
const invert \= object \=> Object.entries(object)
  .reduce((acc, current) \=> {
    acc\[current\[1\]\] \= current\[0\];
    return acc;
  }, {}
);

#### Browser Support

4.0 ✔

✔

2.0 ✔

6.0 ✔

10.0 ✔

3.1 ✔

#### Browser Support for `Object.entries()`

54.0 ✔

14.0 ✔

47.0 ✔

✖

41.0 ✔

10.1 ✔

**⬆ back to top**

### \_.keys

Retrieves all the names of the object's own enumerable properties.

// Underscore/Lodash
var result \= \_.keys({one: 1, two: 2, three: 3})
console.log(result)
// output: \["one", "two", "three"\]

// Native
var result2 \= Object.keys({one: 1, two: 2, three: 3})
console.log(result2)
// output: \["one", "two", "three"\]

#### Browser Support for `Object.keys()`

5.0 ✔

✔

4.0 ✔

9.0 ✔

12.0 ✔

5.0 ✔

**⬆ back to top**

### \_.mapKeys

The opposite of \_.mapValues; this method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).

// Lodash
var result \= \_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
console.log(result)
// output: { 'a1': 1, 'b2': 2 }

// Native (IE6)
function mapKeys(object, cb) {
  var obj \= {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
        var newKey \= cb(object\[key\], key, object);
        obj\[newKey\] \= object\[key\];
    }
  }
  return obj;
}
var result \= mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
console.log(result)
// output: { 'a1': 1, 'b2': 2 }

// Native (IE not supported)
  const mapKeys \= (object, cb) \=> Object.entries(object)
    .reduce((acc, current) \=> {
      const newKey \= cb(current\[1\], current\[0\], object);
      acc\[newKey\] \= current\[1\];
      return acc;
    }, {}
);
const result2 \= mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
console.log(result2)
// output: { 'a1': 1, 'b2': 2 }

#### Browser Support

4.0 ✔

✔

2.0 ✔

6.0 ✔

10.0 ✔

3.1 ✔

#### Browser Support for `Object.entries()`

54.0 ✔

14.0 ✔

47.0 ✔

✖

41.0 ✔

10.1 ✔

**⬆ back to top**

### \_.omit

Returns a copy of the object, filtered to omit the keys specified.

var object \= { 'a': 1, 'b': '2', 'c': 3 };

// Underscore/Lodash
var result \= \_.omit(object, \['a', 'c'\]);
console.log(result)
// output: { 'b': '2' }

// Native
var { a, c, ...result2 } \= object;
console.log(result2)
// output: { 'b': '2' }

#### Browser Support for Spread in object literals

60.0 ✔

79 ✔

55.0 ✔

✖

37.0 ✔

✖

**⬆ back to top**

### \_.pick

Creates an object composed of the object properties predicate returns truthy for.

var object \= { 'a': 1, 'b': '2', 'c': 3 };

// Underscore/Lodash
var result \= \_.pick(object, \['a', 'c', 'x'\]);
console.log(result)
// output: {a: 1, c: 3}

// Native
function pick(object, keys) {
  return keys.reduce((obj, key) \=> {
     if (object && object.hasOwnProperty(key)) {
        obj\[key\] \= object\[key\];
     }
     return obj;
   }, {});
}
var result \= pick(object, \['a', 'c', 'x'\]);
console.log(result)
// output: {a: 1, c: 3}

#### Browser Support

38.0 ✔

✔

13.0 ✔

12.0 ✔

25.0 ✔

7.1 ✔

**⬆ back to top**

### \_.pickBy

Creates an object composed of the object properties predicate returns truthy for.

var object \= { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined };

// Underscore/Lodash
var result \= \_.pickBy(object);
console.log(result)
// output: {a: 1, c: 3}

// Native
function pickBy(object) {
    const obj \= {};
    for (const key in object) {
        if (object\[key\]) {
            obj\[key\] \= object\[key\];
        }
    }
    return obj;
}
var result \= pickBy(object);
console.log(result)
// output: {a: 1, c: 3}

#### Browser Support

✔

✔

✔

6.0 ✔

✔

✔

**⬆ back to top**

### \_.toPairs

Retrieves all the given object's own enumerable property `[ key, value ]` pairs.

// Underscore - also called \_.pairs
// Lodash - also called \_.entries
var result \= \_.toPairs({one: 1, two: 2, three: 3})
console.log(result)
// output: \[\["one", 1\], \["two", 2\], \["three", 3\]\]

// Native
var result2 \= Object.entries({one: 1, two: 2, three: 3})
console.log(result2)
// output: \[\["one", 1\], \["two", 2\], \["three", 3\]\]

#### Browser Support for `Object.entries()`

54.0 ✔

14.0 ✔

47.0 ✔

✖

41.0 ✔

10.1 ✔

**⬆ back to top**

### \_.values

Retrieves all the given object's own enumerable property values.

// Underscore/Lodash
var result \= \_.values({one: 1, two: 2, three: 3})
console.log(result)
// output: \[1, 2, 3\]

// Native
var result2 \= Object.values({one: 1, two: 2, three: 3})
console.log(result2)
// output: \[1, 2, 3\]

#### Browser Support for `Object.values()`

54.0 ✔

14.0 ✔

47.0 ✔

✖

41.0 ✔

10.1 ✔

**⬆ back to top**

String
------

### \_.capitalize

Warning

Not in Underscore.js

Converts the first character of string to upper case and the remaining to lower case.

// Lodash
var result \= \_.capitalize('FRED');
console.log(result);
// => 'Fred'

// Native
const capitalize \= (string) \=> {
  return string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '';
};

var result \= capitalize('FRED');
console.log(result);
// => 'Fred'

#### Browser Support

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.endsWith

Warning

Not in Underscore.js

Checks if string ends with the given target string.

// Lodash
\_.endsWith('abc', 'c');
// => true

\_.endsWith('abc', 'b');
// => false

\_.endsWith('abc', 'b', 2);
// => true

// Native
'abc'.endsWith('c');
// => true

'abc'.endsWith('b');
// => false

'abc'.endsWith('b', 2);
// => true

#### Browser Support for `String.prototype.endsWith()`

41.0 ✔

✔

17.0 ✔

✖

28.0 ✔

9.0 ✔

**⬆ back to top**

### \_.isString

Checks if value is classified as a String primitive or object.

// Lodash
\_.isString('abc');
// => true

\_.isString(123);
// => false

// Native
function isString(str){
  if (str != null && typeof str.valueOf() \=== "string") {
    return true
  }
  return false
}

isString('abc');
// => true

isString(123);
// => false

#### Browser Support

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.lowerFirst

Warning

Not in Underscore.js

Converts the first character of string to lower case.

// Lodash
var result \= \_.lowerFirst('Fred')
console.log(result)
// output: 'fred'

// Native
const lowerFirst \= (string) \=> {
  return string ? string.charAt(0).toLowerCase() + string.slice(1) : ''
}

var result \= lowerFirst('Fred')
console.log(result)
// output: 'fred'

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.padStart and \_.padEnd

Warning

Not in Underscore.js

Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

// Lodash
console.log(\_.padStart('123', 5, '0'))
// output: '00123'

console.log(\_.padEnd('123', 5, '0'))
// output: '12300'

// Native
console.log('123'.padStart(5, '0'))
// output: '00123'

console.log('123'.padEnd(5, '0'))
// output: '12300'

#### Browser Support for `String.prototype.padStart()` and `String.prototype.padEnd()`

57.0 ✔

15.0 ✔

48.0 ✔

✖

44.0 ✔

10.0 ✔

**⬆ back to top**

### \_.repeat

Warning

Not in Underscore.js

Repeats the given string n times.

// Lodash
var result \= \_.repeat('abc', 2)
console.log(result)
// output: 'abcabc'

// Native
var result \= 'abc'.repeat(2)
console.log(result)
// output: 'abcabc'

#### Browser Support for `String.prototype.repeat()`

41.0 ✔

✔

24.0 ✔

✖

28.0 ✔

9.0 ✔

**⬆ back to top**

### \_.replace

Returns a new string with some or all matches of a `pattern` replaced by a `replacement`.

// Lodash
var re \= /apples/gi;
var str \= 'Apples are round, and apples are juicy.';
var newstr \= \_.replace(str, re, 'oranges');
console.log(newstr);
// output: 'oranges are round, and oranges are juicy.'

// Native
var re \= /apples/gi;
var str \= 'Apples are round, and apples are juicy.';
var result \= str.replace(re, 'oranges');
console.log(result);
// output: 'oranges are round, and oranges are juicy.'

#### Browser Support for `String.prototype.replace()`

✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.split

Warning

Not in Underscore.js

Splits string by separator.

// Lodash
var result \= \_.split('a-b-c', '-', 2)
  console.log(result)
// output: \['a','b'\]

// Native
var result \= 'a-b-c'.split('-', 2)
console.log(result)
// output: \['a','b'\]

#### Browser Support for `String.prototype.split()`

✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.startsWith

Warning

Not in Underscore.js

Checks if string starts with the given target string.

// Lodash
var result \= \_.startsWith('abc', 'b', 1)
console.log(result)
// output: true

// Native
var result \= 'abc'.startsWith('b', 1)
console.log(result)
// output: true

#### Browser Support for `String.prototype.startsWith()`

41.0 ✔

✔

17.0 ✔

✖

28.0 ✔

9.0 ✔

**⬆ back to top**

### \_.template

Note

This is an alternative implementation. Native template literals not escape html.

Create a template function.

// Lodash/Underscore
const compiled \= \_.template('hello <%= user %>!');
var result \= compiled({ 'user': 'fred' });
console.log(result);
// output: 'hello fred'

// Native
const templateLiteral \= (value) \=> \`hello ${value.user}\`;
var result \= templateLiteral({ 'user': 'fred' });
console.log(result);
// output: 'hello fred'

#### Browser Support for String (template) literals

41.0 ✔

12.0 ✔

34.0 ✔

✖

28.0 ✔

9.0 ✔

**⬆ back to top**

### \_.toLower

Warning

Not in Underscore.js

Lowercases a given string.

// Lodash
var result \= \_.toLower('FOOBAR')
console.log(result)
// output: 'foobar'

// Native
var result \= 'FOOBAR'.toLowerCase()
console.log(result)
// output: 'foobar'

#### Browser Support for `String.prototype.toLowerCase()`

✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.toUpper

Warning

Not in Underscore.js

Uppercases a given string.

// Lodash
var result \= \_.toUpper('foobar')
console.log(result)
// output: 'FOOBAR'

// Native
var result \= 'foobar'.toUpperCase()
console.log(result)
// output: 'FOOBAR'

#### Browser Support for `String.prototype.toUpperCase()`

✔

✔

1.0 ✔

✔

✔

✔

**⬆ back to top**

### \_.trim

Warning

Not in Underscore.js

Removes the leading and trailing whitespace characters from a string.

// Lodash
var result \= \_.trim(' abc ')
console.log(result)
// output: 'abc'

// Native
var result \= ' abc '.trim()
console.log(result)
// output: 'abc'

#### Browser Support for `String.prototype.trim()`

5.0 ✔

✔

3.5 ✔

9.0 ✔

10.5 ✔

5.0 ✔

**⬆ back to top**

### \_.upperFirst

Warning

Not in Underscore.js

Uppercases the first letter of a given string.

// Lodash
var result \= \_.upperFirst('george')
console.log(result)
// output: 'George'

// Native
const upperFirst \= (string) \=> {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
}

var result \= upperFirst('george')
console.log(result)
// output: 'George'

✔

✔

✔

✔

✔

✔

**⬆ back to top**

Reference
---------

-   Mozilla Developer Network
-   Underscore.js
-   Lodash.js

**⬆ back to top**

### \_.uniqWith

Similar to `_.uniq` except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.

// Lodash
const objects \= \[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }\];
const result \= \_.uniqWith(objects, \_.isEqual);
console.log(result);
// output: \[{ x: 1, y: 2 }, { x: 2, y: 1 }\]

// Native
const uniqWith \= (arr, fn) \=> arr.filter((element, index) \=> arr.findIndex((step) \=> fn(element, step)) \=== index);

const array \= \[1, 2, 2, 3, 4, 5, 2\];
const result \= uniqWith(array, (a, b) \=> a \=== b);
console.log(result);
// output: \[1, 2, 3, 4, 5\]

const objects \= \[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }\];
const result \= uniqWith(objects, (a, b) \=> JSON.stringify(a) \=== JSON.stringify(b));
console.log(result);
// output: \[{ x: 1, y: 2 }, { x: 2, y: 1 }\]

### Browser Support for `Array.prototype.filter()` and `Array.prototype.findIndex()`

45.0 ✔

12.0 ✔

25.0 ✔

✖

32.0 ✔

8.0 ✔

**⬆ back to top**

Util
----

### \_.times

Invokes the iteratee n times, returning an array of the results of each invocation.

// Lodash
var result \= \_.times(10)
console.log(result)
// output: '\[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\]'

// Native
var result \= Array.from({length: 10}, (\_,x) \=> x)
console.log(result)
// output: '\[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\]'

// Native
var result \= \[...Array(10).keys()\]
console.log(result)
// output: '\[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\]'

#### Browser Support for `Array.from()`

45.0 ✔

✔

32.0 ✔

✖

✔

9.0 ✔

**⬆ back to top**

Number
------

### \_.clamp

Clamps number within the inclusive lower and upper bounds.

// Lodash
\_.clamp(\-10, \-5, 5);
// => -5

\_.clamp(10, \-5, 5);
// => 5

\_.clamp(10, \-5);
// => -5

\_.clamp(10, 99);
// => 10

// Native
const clamp \= (number, boundOne, boundTwo) \=> {
  if (!boundTwo) {
    return Math.max(number, boundOne) \=== boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) \=== number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) \=== number) {
    return boundTwo;
  }
  return number;
};

clamp(\-10, \-5, 5);
// => -5

clamp(10, \-5, 5);
// => 5

clamp(10, \-5);
// => -5

clamp(10, 99);
// => 10

#### Browser Support for `Math.min() and Math.max()`

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.inRange

Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.

  // Lodash
  \_.inRange(3, 2, 4);
  // output: true
  \_.inRange(\-3, \-2, \-6);
  // output: true

  //Native
  const inRange \= (num, init, final) \=> {
    if(final \=== undefined){
      final \= init;
      init \= 0;
    }
    return (num \>= Math.min(init, final) && num < Math.max(init, final));
  }

  //Native
  const inRange \= (num, a, b\=0) \=> (Math.min(a,b) <= num && num < Math.max(a,b));

  inRange(3, 2, 4);
  // output: true
  inRange(\-3, \-2, \-6);
  // output: true

#### Browser Support for `Math.min() and Math.max()`

✔

✔

✔

✔

✔

✔

**⬆ back to top**

### \_.random

Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.

  // Lodash
  \_.random(0, 5);
  // => an integer between 0 and 5

  \_.random(5);
  // => also an integer between 0 and 5

  \_.random(5, true);
  // => a floating-point number between 0 and 5

  \_.random(1.2, 5.2);
  // => a floating-point number between 1.2 and 5.2

  //Native ES6
  const random \= (a \= 1, b \= 0) \=> {
    const lower \= Math.min(a, b);
    const upper \= Math.max(a, b);
    return lower + Math.random() \* (upper \- lower);
  };

  const randomInt \= (a \= 1, b \= 0) \=> {
    const lower \= Math.ceil(Math.min(a, b));
    const upper \= Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() \* (upper \- lower + 1))
  };

  random();
  // => a floating-point number between 0 and 1

  random(5);
  // => a floating-point number between 0 and 5

  random(0, 5);
  // => also a floating-point number between 0 and 5

  random(1.2, 5.2);
  // => a floating-point number between 1.2 and 5.2

  randomInt();
  // => just 0 or 1

  randomInt(5);
  // => an integer between 0 and 5

  randomInt(0, 5);
  // => also an integer between 0 and 5

  randomInt(1.2, 5.2);
  // => an integer between 2 and 5

#### Browser Support for `Math.random()`

✔

✔

✔

✔

✔

✔

**⬆ back to top**

Inspired by:
------------

-   You-Dont-Need-jQuery
-   Rui's blog

License
-------

MIT
