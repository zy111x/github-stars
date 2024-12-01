---
project: stylelint-config-sass-guidelines
stars: 445
description: ⚙ A stylelint config inspired by https://sass-guidelin.es/
---

stylelint-config-sass-guidelines
================================

> A stylelint config inspired by sass-guidelin.es.

This linter has been designed / tested with SCSS syntax based on the SCSS guidelines documented in https://sass-guidelin.es/. It is intended for use with SCSS syntax, not Sass (tab style) syntax.

This config:

-   includes the `stylelint-scss` plugin module and turns on rules for SCSS specific code
-   includes the `@stylistic/stylelint-plugin` plugin module and turns on rules for stylistic settings
-   includes the `postcss-scss` custom syntax module and configures it
-   has a peer dependency on `stylelint`
    -   You'll need to install this package in your project
-   has a peer dependency on `postcss`
    -   You'll need to install this package in your project

Installation
------------

Using NPM

$ npm i -D stylelint postcss stylelint-config-sass-guidelines

Using Yarn

$ yarn add -D stylelint postcss stylelint-config-sass-guidelines

Using PNPM

$ pnpm add -D stylelint postcss stylelint-config-sass-guidelines

Usage
-----

Set your stylelint config to:

{
  "extends": "stylelint-config-sass-guidelines"
}

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example:

{
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "selector-max-compound-selectors": 4,
    "value-no-vendor-prefix": false
  }
}

Documentation
-------------

### Configured lints

This is a list of the lints turned on in this configuration, and what they do.

#### At-Rule

-   `at-rule-disallowed-list`: Specify a list of disallowed at-rules.
    -   `"debug"` Disallow the use of `@debug`.
-   `at-rule-no-unknown`: Disallow unknown at-rules.
-   `at-rule-no-vendor-prefix`: Disallow vendor prefixes for at-rules.

#### Block

-   `block-no-empty`: Disallow empty blocks.

#### Color

-   `color-hex-length`: Always use short hex notation, where available.
-   `color-named`: Colors must never be named.
-   `color-no-invalid-hex`: Hex values must be valid.

#### Declaration Block

-   `declaration-block-single-line-max-declarations`: There should never be more than `1` declaration per line.

#### Declaration Property

-   `declaration-property-value-disallowed-list`: Specify a list of disallowed property and value pairs within declarations.
    -   `^border`: Disallow the use of the word `none` for borders, use `0` instead. The intent of this rule is to enforce consistency, rather than define which is "better."

#### Function

-   `function-url-quotes`: URLs must always be quoted.

#### General

-   `length-zero-no-unit`: Disallow units for zero lengths.
-   `max-nesting-depth`: Limit the allowed nesting depth to `1`. _Ignore_: Nested at-rules `@media`, `@supports`, and `@include`.

#### Media Feature

-   `media-feature-name-no-vendor-prefix`: Disallow vendor prefixes for media feature names.

#### Property

-   `property-no-unknown`: Disallow unknown properties
-   `property-no-vendor-prefix`: Disallow vendor prefixes for properties.
-   `shorthand-property-no-redundant-values`: Disallow redundant values in shorthand properties.

#### Rule

-   `rule-empty-line-before`: There must always be an empty line before multi-line rules. _Except_: Nested rules that are the first of their parent rule. _Ignore_: Rules that come after a comment.

#### SCSS

-   `scss/at-extend-no-missing-placeholder`: Disallow at-extends (`@extend`) with missing placeholders.
-   `scss/at-function-pattern`: SCSS functions must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
-   `scss/at-import-partial-extension-disallowed-list`: Specify list of disallowed file extensions for partial names in `@import` commands.
    -   `.scss`: Disallow the use of the `.scss` file extension in imports.
-   `scss/at-rule-no-unknown`: SCSS mixins must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
-   `scss/dollar-variable-colon-space-after`: Require a single space after the colon in $-variable declarations.
-   `scss/dollar-variable-colon-space-before`: Disallow whitespace before the colon in $-variable declarations.
-   `scss/dollar-variable-pattern`: SCSS variables must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
-   `scss/load-no-partial-leading-underscore`: Disallow leading underscore in partial names in `@import`.
-   `scss/no-global-function-names`: Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
-   `scss/percent-placeholder-pattern`: SCSS `%`\-placeholders must be written in lowercase and match the regex `^[a-z]+([a-z0-9-]+[a-z0-9]+)?$`.
-   `scss/selector-no-redundant-nesting-selector`: Disallow redundant nesting selectors (`&`).

#### Selector

-   `selector-class-pattern`: Selectors must be written in lowercase and match the regex `^(?:u|is|has)-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:-[a-z][a-zA-Z0-9]*)?(?:--[a-z][a-zA-Z0-9]*)?$`.
-   `selector-max-compound-selectors`: Limit the number of compound selectors in a selector to `3`.
-   `selector-max-id`: Disallow id selectors.
-   `selector-no-qualifying-type`: Disallow qualifying a selector by type.
-   `selector-no-vendor-prefix`: Disallow vendor prefixes for selectors.
-   `selector-pseudo-element-colon-notation`: Applicable pseudo-elements must always use the double colon notation.
-   `selector-pseudo-element-no-unknown`: Disallow unknown pseudo-element selectors.

#### Stylistic

-   `@stylistic/block-opening-brace-space-before`: There must always be a single space before the opening brace.
    
-   `@stylistic/color-hex-case`: Hex colors must be written in lowercase.
    
-   `@stylistic/declaration-bang-space-after`: There must never be whitespace after the bang.
    
-   `@stylistic/declaration-bang-space-before`: There must always be a single space before the bang.
    
-   `@stylistic/declaration-block-semicolon-newline-after`: There must always be a newline after the semicolon.
    
-   `@stylistic/declaration-block-semicolon-space-before`: There must never be whitespace before the semicolons.
    
-   `@stylistic/declaration-block-trailing-semicolon`: There must always be a trailing semicolon.
    
-   `@stylistic/declaration-colon-space-after`: There must always be a single space after the colon if the declaration's value is single-line.
    
-   `@stylistic/declaration-colon-space-before`: There must never be whitespace before the colon.
    
-   `@stylistic/function-comma-space-after`: There must always be a single space after the commas in single-line functions.
    
-   `@stylistic/function-parentheses-space-inside`: There must never be whitespace on the inside of the parentheses of functions.
    
-   `@stylistic/indentation`: Indentation should always be 2 spaces.
    
-   `@stylistic/media-feature-parentheses-space-inside`: There must never be whitespace on the inside of the parentheses of media features.
    
-   `@stylistic/no-missing-end-of-source-newline`: Disallow missing end-of-file newlines in non-empty files.
    
-   `@stylistic/number-leading-zero`: There must always be a leading zero.
    
-   `@stylistic/number-no-trailing-zeros`: Disallow trailing zeros in numbers.
    
-   `@stylistic/selector-list-comma-newline-after`: There must always be a newline after the commas of selector lists.
    
-   `@stylistic/string-quotes`: Strings must always be wrapped with single quotes.
    

#### Value

-   `value-no-vendor-prefix`: Disallow vendor prefixes for values.

Changelog
---------

Contributors
------------

stylelint-config-sass-guidelines is maintained by Brett Jankord and contributions from the community. Without the code contributions from all these fantastic people, stylelint-config-sass-guidelines would not exist.

License
-------
