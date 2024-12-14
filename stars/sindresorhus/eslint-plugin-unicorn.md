---
project: eslint-plugin-unicorn
stars: 4324
description: More than 100 powerful ESLint rules
url: https://github.com/sindresorhus/eslint-plugin-unicorn
---

eslint-plugin-unicorn
=====================

> More than 100 powerful ESLint rules

You might want to check out XO, which includes this plugin.

**Propose or contribute a new rule ➡**

Install
-------

npm install --save-dev eslint eslint-plugin-unicorn

Usage (`eslint.config.js`)
--------------------------

**Requires ESLint `>=8.56.0`.**

Use a preset config or configure each rule in `eslint.config.js`.

If you don't use the preset, ensure you use the same `languageOptions` config as below.

### ES Module (Recommended)

import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default \[
	{
		languageOptions: {
			globals: globals.builtin,
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
		},
		rules: {
			'unicorn/better-regex': 'error',
			'unicorn/…': 'error',
		},
	},
	// …
\];

### CommonJS

'use strict';
const eslintPluginUnicorn \= require('eslint-plugin-unicorn');
const globals \= require('globals');

module.exports \= \[
	{
		languageOptions: {
			globals: globals.builtin,
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
		},
		rules: {
			'unicorn/better-regex': 'error',
			'unicorn/…': 'error',
		},
	},
	// …
\];

Usage (legacy: `.eslintrc.*` or `package.json`)
-----------------------------------------------

Use a preset config or configure each rule in `package.json`.

If you don't use the preset, ensure you use the same `env` and `parserOptions` config as below.

{
	"name": "my-awesome-project",
	"eslintConfig": {
		"env": {
			"es2024": true
		},
		"parserOptions": {
			"ecmaVersion": "latest",
			"sourceType": "module"
		},
		"plugins": \[
			"unicorn"
		\],
		"rules": {
			"unicorn/better-regex": "error",
			"unicorn/…": "error"
		}
	}
}

Rules
-----

💼 Configurations enabled in.  
✅ Set in the `recommended` configuration.  
🔧 Automatically fixable by the `--fix` CLI option.  
💡 Manually fixable by editor suggestions.

Name                                   

Description

💼

🔧

💡

better-regex

Improve regexes by making them shorter, consistent, and safer.

🔧

catch-error-name

Enforce a specific parameter name in catch clauses.

✅

🔧

consistent-destructuring

Use destructured variables over properties.

🔧

💡

consistent-empty-array-spread

Prefer consistent types when spreading a ternary in an array literal.

✅

🔧

consistent-existence-index-check

Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.

✅

🔧

consistent-function-scoping

Move function definitions to the highest possible scope.

✅

custom-error-definition

Enforce correct `Error` subclassing.

🔧

empty-brace-spaces

Enforce no spaces between braces.

✅

🔧

error-message

Enforce passing a `message` value when creating a built-in error.

✅

escape-case

Require escape sequences to use uppercase values.

✅

🔧

expiring-todo-comments

Add expiration conditions to TODO comments.

✅

explicit-length-check

Enforce explicitly comparing the `length` or `size` property of a value.

✅

🔧

💡

filename-case

Enforce a case style for filenames.

✅

import-style

Enforce specific import styles per module.

✅

new-for-builtins

Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.

✅

🔧

no-abusive-eslint-disable

Enforce specifying rules to disable in `eslint-disable` comments.

✅

no-anonymous-default-export

Disallow anonymous functions and classes as the default export.

✅

💡

no-array-callback-reference

Prevent passing a function reference directly to iterator methods.

✅

💡

no-array-for-each

Prefer `for…of` over the `forEach` method.

✅

🔧

💡

no-array-method-this-argument

Disallow using the `this` argument in array methods.

✅

🔧

💡

no-array-push-push

Enforce combining multiple `Array#push()` into one call.

✅

🔧

💡

no-array-reduce

Disallow `Array#reduce()` and `Array#reduceRight()`.

✅

no-await-expression-member

Disallow member access from await expression.

✅

🔧

no-await-in-promise-methods

Disallow using `await` in `Promise` method parameters.

✅

💡

no-console-spaces

Do not use leading/trailing space between `console.log` parameters.

✅

🔧

no-document-cookie

Do not use `document.cookie` directly.

✅

no-empty-file

Disallow empty files.

✅

no-for-loop

Do not use a `for` loop that can be replaced with a `for-of` loop.

✅

🔧

💡

no-hex-escape

Enforce the use of Unicode escapes instead of hexadecimal escapes.

✅

🔧

no-instanceof-array

Require `Array.isArray()` instead of `instanceof Array`.

✅

🔧

no-invalid-fetch-options

Disallow invalid options in `fetch()` and `new Request()`.

✅

no-invalid-remove-event-listener

Prevent calling `EventTarget#removeEventListener()` with the result of an expression.

✅

no-keyword-prefix

Disallow identifiers starting with `new` or `class`.

no-length-as-slice-end

Disallow using `.length` as the `end` argument of `{Array,String,TypedArray}#slice()`.

✅

🔧

no-lonely-if

Disallow `if` statements as the only statement in `if` blocks without `else`.

✅

🔧

no-magic-array-flat-depth

Disallow a magic number as the `depth` argument in `Array#flat(…).`

✅

no-negated-condition

Disallow negated conditions.

✅

🔧

no-negation-in-equality-check

Disallow negated expression in equality check.

✅

💡

no-nested-ternary

Disallow nested ternary expressions.

✅

🔧

no-new-array

Disallow `new Array()`.

✅

🔧

💡

no-new-buffer

Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.

✅

🔧

💡

no-null

Disallow the use of the `null` literal.

✅

🔧

💡

no-object-as-default-parameter

Disallow the use of objects as default parameters.

✅

no-process-exit

Disallow `process.exit()`.

✅

no-single-promise-in-promise-methods

Disallow passing single-element arrays to `Promise` methods.

✅

🔧

💡

no-static-only-class

Disallow classes that only have static members.

✅

🔧

no-thenable

Disallow `then` property.

✅

no-this-assignment

Disallow assigning `this` to a variable.

✅

no-typeof-undefined

Disallow comparing `undefined` using `typeof`.

✅

🔧

💡

no-unnecessary-await

Disallow awaiting non-promise values.

✅

🔧

no-unnecessary-polyfills

Enforce the use of built-in methods instead of unnecessary polyfills.

✅

no-unreadable-array-destructuring

Disallow unreadable array destructuring.

✅

🔧

no-unreadable-iife

Disallow unreadable IIFEs.

✅

no-unused-properties

Disallow unused object properties.

no-useless-fallback-in-spread

Disallow useless fallback when spreading in object literals.

✅

🔧

no-useless-length-check

Disallow useless array length check.

✅

🔧

no-useless-promise-resolve-reject

Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks

✅

🔧

no-useless-spread

Disallow unnecessary spread.

✅

🔧

no-useless-switch-case

Disallow useless case in switch statements.

✅

💡

no-useless-undefined

Disallow useless `undefined`.

✅

🔧

no-zero-fractions

Disallow number literals with zero fractions or dangling dots.

✅

🔧

number-literal-case

Enforce proper case for numeric literals.

✅

🔧

numeric-separators-style

Enforce the style of numeric separators by correctly grouping digits.

✅

🔧

prefer-add-event-listener

Prefer `.addEventListener()` and `.removeEventListener()` over `on`\-functions.

✅

🔧

prefer-array-find

Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.

✅

🔧

💡

prefer-array-flat

Prefer `Array#flat()` over legacy techniques to flatten arrays.

✅

🔧

prefer-array-flat-map

Prefer `.flatMap(…)` over `.map(…).flat()`.

✅

🔧

prefer-array-index-of

Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.

✅

🔧

💡

prefer-array-some

Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.

✅

🔧

💡

prefer-at

Prefer `.at()` method for index access and `String#charAt()`.

✅

🔧

💡

prefer-blob-reading-methods

Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.

✅

prefer-code-point

Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.

✅

💡

prefer-date-now

Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.

✅

🔧

prefer-default-parameters

Prefer default parameters over reassignment.

✅

🔧

💡

prefer-dom-node-append

Prefer `Node#append()` over `Node#appendChild()`.

✅

🔧

prefer-dom-node-dataset

Prefer using `.dataset` on DOM elements over calling attribute methods.

✅

🔧

prefer-dom-node-remove

Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.

✅

🔧

💡

prefer-dom-node-text-content

Prefer `.textContent` over `.innerText`.

✅

💡

prefer-event-target

Prefer `EventTarget` over `EventEmitter`.

✅

prefer-export-from

Prefer `export…from` when re-exporting.

✅

🔧

💡

prefer-global-this

Prefer `globalThis` over `window`, `self`, and `global`.

✅

🔧

prefer-includes

Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.

✅

🔧

💡

prefer-json-parse-buffer

Prefer reading a JSON file as a buffer.

🔧

prefer-keyboard-event-key

Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.

✅

🔧

prefer-logical-operator-over-ternary

Prefer using a logical operator over a ternary.

✅

💡

prefer-math-min-max

Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.

✅

🔧

prefer-math-trunc

Enforce the use of `Math.trunc` instead of bitwise operators.

✅

🔧

💡

prefer-modern-dom-apis

Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.

✅

🔧

prefer-modern-math-apis

Prefer modern `Math` APIs over legacy patterns.

✅

🔧

prefer-module

Prefer JavaScript modules (ESM) over CommonJS.

✅

🔧

💡

prefer-native-coercion-functions

Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.

✅

🔧

prefer-negative-index

Prefer negative index over `.length - index` when possible.

✅

🔧

prefer-node-protocol

Prefer using the `node:` protocol when importing Node.js builtin modules.

✅

🔧

prefer-number-properties

Prefer `Number` static properties over global ones.

✅

🔧

💡

prefer-object-from-entries

Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.

✅

🔧

prefer-optional-catch-binding

Prefer omitting the `catch` binding parameter.

✅

🔧

prefer-prototype-methods

Prefer borrowing methods from the prototype instead of the instance.

✅

🔧

prefer-query-selector

Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.

✅

🔧

prefer-reflect-apply

Prefer `Reflect.apply()` over `Function#apply()`.

✅

🔧

prefer-regexp-test

Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.

✅

🔧

💡

prefer-set-has

Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.

✅

🔧

💡

prefer-set-size

Prefer using `Set#size` instead of `Array#length`.

✅

🔧

prefer-spread

Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.

✅

🔧

💡

prefer-string-raw

Prefer using the `String.raw` tag to avoid escaping `\`.

✅

🔧

prefer-string-replace-all

Prefer `String#replaceAll()` over regex searches with the global flag.

✅

🔧

prefer-string-slice

Prefer `String#slice()` over `String#substr()` and `String#substring()`.

✅

🔧

prefer-string-starts-ends-with

Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.

✅

🔧

💡

prefer-string-trim-start-end

Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.

✅

🔧

prefer-structured-clone

Prefer using `structuredClone` to create a deep clone.

✅

💡

prefer-switch

Prefer `switch` over multiple `else-if`.

✅

🔧

prefer-ternary

Prefer ternary expressions over simple `if-else` statements.

✅

🔧

prefer-top-level-await

Prefer top-level await over top-level promises and async function calls.

✅

💡

prefer-type-error

Enforce throwing `TypeError` in type checking conditions.

✅

🔧

prevent-abbreviations

Prevent abbreviations.

✅

🔧

relative-url-style

Enforce consistent relative URL style.

✅

🔧

💡

require-array-join-separator

Enforce using the separator argument with `Array#join()`.

✅

🔧

require-number-to-fixed-digits-argument

Enforce using the digits argument with `Number#toFixed()`.

✅

🔧

require-post-message-target-origin

Enforce using the `targetOrigin` argument with `window.postMessage()`.

💡

string-content

Enforce better string content.

🔧

💡

switch-case-braces

Enforce consistent brace style for `case` clauses.

✅

🔧

template-indent

Fix whitespace-insensitive template indentation.

✅

🔧

text-encoding-identifier-case

Enforce consistent case for text encoding identifiers.

✅

🔧

💡

throw-new-error

Require `new` when creating an error.

✅

🔧

### Deprecated Rules

See docs/deprecated-rules.md

Preset configs (`eslint.config.js`)
-----------------------------------

See the ESLint docs for more information about extending config files.

**Note**: Preset configs will also enable the correct language options.

### Recommended config

This plugin exports a `recommended` config that enforces good practices.

#### ES Module (Recommended)

import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default \[
		// …
		eslintPluginUnicorn.configs\['flat/recommended'\],
		{
			rules: {
				'unicorn/better-regex': 'warn',
			},
		},
\];

#### CommonJS

'use strict';
const eslintPluginUnicorn \= require('eslint-plugin-unicorn');

module.exports \= \[
		// …
		eslintPluginUnicorn.configs\['flat/recommended'\],
		{
			rules: {
				'unicorn/better-regex': 'warn',
			},
		},
\];

### All config

This plugin exports an `all` that makes use of all rules (except for deprecated ones).

#### ES Module (Recommended)

import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default \[
		// …
		eslintPluginUnicorn.configs\['flat/all'\],
		{
			rules: {
				'unicorn/better-regex': 'warn',
			},
		},
\];

#### CommonJS

'use strict';
const eslintPluginUnicorn \= require('eslint-plugin-unicorn');

module.exports \= \[
		// …
		eslintPluginUnicorn.configs\['flat/all'\],
		{
			rules: {
				'unicorn/better-regex': 'warn',
			},
		},
\];

Legacy preset configs (`.eslintrc.*` or `package.json`)
-------------------------------------------------------

See the ESLint docs for more information about extending deprecated legacy config files.

**Note**: Preset configs will also enable the correct parser options and environment.

### Recommended legacy config

This plugin exports a `recommended` legacy config that enforces good practices.

{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "plugin:unicorn/recommended",
		"rules": {
			"unicorn/better-regex": "warn"
		}
	}
}

### All legacy config

This plugin exports an `all` legacy config that makes use of all rules (except for deprecated ones).

{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "plugin:unicorn/all"
	}
}

Maintainers
-----------

-   Sindre Sorhus
-   Fisker Cheung
-   Bryan Mishkin
-   futpib

### Former

-   Jeroen Engels
-   Sam Verschueren
-   Adam Babcock
