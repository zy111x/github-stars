---
project: es-toolkit
stars: 7237
description: A modern JavaScript utility library that's 2-3 times faster and up to 97% smaller—a major upgrade to lodash.
url: https://github.com/toss/es-toolkit
---

es-toolkit ·
============

English | 한국어 | 简体中文 | 日本語

es-toolkit is a state-of-the-art, high-performance JavaScript utility library with a small bundle size and strong type annotations.

-   es-toolkit offers a variety of everyday utility functions with modern implementations, such as debounce, delay, chunk, sum, and pick.
-   Designed with performance in mind, es-toolkit achieves 2-3× better performance in modern JavaScript environments.
-   es-toolkit supports tree shaking out of the box, and reduces JavaScript code by up to 97% compared to other libraries.
-   es-toolkit includes built-in TypeScript support, with straightforward yet robust types. It also provides useful type guards such as isNotNil.
-   es-toolkit is utilized by several popular open-source libraries, such as Storybook and ink.
-   es-toolkit is battle-tested with 100% test coverage, ensuring reliability and robustness.

Examples
--------

// import from '@es-toolkit/es-toolkit' in jsr.
import { chunk, debounce } from 'es-toolkit';

const debouncedLog \= debounce(message \=> {
  console.log(message);
}, 300);

// This call will be debounced
debouncedLog('Hello, world!');

const array \= \[1, 2, 3, 4, 5, 6\];
const chunkedArray \= chunk(array, 2);

console.log(chunkedArray);
// Output: \[\[1, 2\], \[3, 4\], \[5, 6\]\]

Contributing
------------

We welcome contribution from everyone in the community. Read below for detailed contribution guide.

CONTRIBUTING

License
-------

MIT © Viva Republica, Inc. See LICENSE for details.
