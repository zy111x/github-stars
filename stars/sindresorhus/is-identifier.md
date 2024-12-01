---
project: is-identifier
stars: 24
description: Check if a string is a valid JavaScript identifier
---

is-identifier
=============

> Check if a string is a valid JavaScript identifier

Install
-------

npm install is-identifier

Usage
-----

import isIdentifier from 'is-identifier';

isIdentifier('foo');
//=> true

isIdentifier('1kg');
//=> false

isIdentifier('await'); // Reserved identifier
//=> false

Note

Although `globalThis`, `Infinity`, `NaN`, and `undefined` are properties of the global object and not identifiers, they are treated as reserved here because they should generally not be used as identifiers.

API
---

### isIdentifier(value)

Returns a boolean for whether the given value is a valid JavaScript identifier.

Related
-------

-   to-valid-identifier - Convert a string to a valid JavaScript identifier
-   identifier-regex - Regular expression for matching valid JavaScript identifiers
-   reserved-identifiers - Provides a list of reserved identifiers for JavaScript
