---
project: validate.js
stars: 2565
description: Lightweight JavaScript form validation library inspired by CodeIgniter.
url: https://github.com/rickharrison/validate.js
---

validate.js
===========

validate.js is a lightweight JavaScript form validation library inspired by CodeIgniter.

Features
--------

-   Validate form fields from over a dozen rules
-   No dependencies
-   Customizable Messages
-   Supply your own validation callbacks for custom rules
-   Chainable customization methods for ease of declaration
-   Works in all major browsers, (even IE6!)
-   Modeled off the CodeIgniter form validation API

How to use
----------

    var validator \= new FormValidator('example\_form', \[{
        name: 'req',
        display: 'required',
        rules: 'required'
    }, {
        name: 'alphanumeric',
        rules: 'alpha\_numeric'
    }, {
        name: 'password',
        rules: 'required'
    }, {
        name: 'password\_confirm',
        display: 'password confirmation',
        rules: 'required|matches\[password\]'
    }, {
        name: 'email',
        rules: 'valid\_email'
    }, {
        name: 'minlength',
        display: 'min length',
        rules: 'min\_length\[8\]'
    }, {
        names: \['fname', 'lname'\],
        rules: 'required|alpha'
    }\], function(errors) {
        if (errors.length \> 0) {
            // Show the errors
        }
    });

Documentation
-------------

You can view everything at http://rickharrison.github.com/validate.js

Browserify
----------

It is published to npm under validate-js

```
npm install validate-js
```

Plugins
-------

jQuery: https://github.com/magizh/validate\_helper

Multi-Language Support
----------------------

jnhwkim's fork added multi-language support viewable at https://github.com/jnhwkim/validate.js

Chinese - https://github.com/chilijung/validate.js

French - https://github.com/Facyla/validate.js

Brazilian Portuguese - https://github.com/fabiowitt/validate.js
