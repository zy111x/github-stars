---
project: china-id-card-validator
stars: 14
description: Validator for China's ID Card.
url: https://github.com/jysperm/china-id-card-validator
---

china-id-card-validator
-----------------------

中华人民共和国公民身份号码验证工具。

References:

-   GB 11643 公民身份号码
-   GB/T 2260 中华人民共和国行政区划代码
-   维基百科：最长寿者

Example:

```
validator = require 'china-id-card-validator'

assert.equal validator('11010519491231002X'), true
assert.equal validator('11010519491231ABCD'), false
```
