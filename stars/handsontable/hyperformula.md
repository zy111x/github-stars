---
project: hyperformula
stars: 2011
description: HyperFormula is an open-source headless spreadsheet for business web apps. It comes with over 400 formulas, CRUD operations, undo-redo, clipboard support, and sorting.
---

  

**An open-source headless spreadsheet for business web apps**

  

* * *

HyperFormula is a headless spreadsheet built in TypeScript, serving as both a parser and evaluator of spreadsheet formulas. It can be integrated into your browser or utilized as a service with Node.js as your back-end technology.

What HyperFormula can be used for?
----------------------------------

HyperFormula doesn't assume any existing user interface, making it a general-purpose library that can be used in various business applications. Here are some examples:

-   Custom spreadsheet-like app
-   Business logic builder
-   Forms and form builder
-   Educational app
-   Online calculator

Features
--------

-   Function syntax compatible with Microsoft Excel and Google Sheets
-   High-speed parsing and evaluation of spreadsheet formulas
-   A library of ~400 built-in functions
-   Support for custom functions
-   Support for Node.js
-   Support for undo/redo
-   Support for CRUD operations
-   Support for clipboard
-   Support for named expressions
-   Support for data sorting
-   Support for formula localization with 17 built-in languages
-   GPLv3 license
-   Maintained by the team that stands behind the Handsontable data grid

Documentation
-------------

-   Client-side installation
-   Server-side installation
-   Basic usage
-   Configuration options
-   List of built-in functions
-   API Reference

Integrations
------------

-   Integration with React
-   Integration with Angular
-   Integration with Vue
-   Integration with Svelte

Installation and usage
----------------------

Install the library from npm like so:

npm install hyperformula

Once installed, you can use it to develop applications tailored to your specific business needs. Here, we've used it to craft a form that calculates mortgage payments using the `PMT` formula.

import { HyperFormula } from 'hyperformula';

// Create a HyperFormula instance
const hf \= HyperFormula.buildEmpty({ licenseKey: 'gpl-v3' });

// Add an empty sheet
const sheetName \= hf.addSheet('Mortgage Calculator');
const sheetId \= hf.getSheetId(sheetName);

// Enter the mortgage parameters
hf.addNamedExpression('AnnualInterestRate', '8%');
hf.addNamedExpression('NumberOfMonths', 360);
hf.addNamedExpression('LoanAmount', 800000);

// Use the PMT function to calculate the monthly payment
hf.setCellContents({ sheet: sheetId, row: 0, col: 0 }, \[\['Monthly Payment', '=PMT(AnnualInterestRate/12, NumberOfMonths, -LoanAmount)'\]\]);

// Display the result
console.log(\`${hf.getCellValue({ sheet: sheetId, row: 0, col: 0 })}: ${hf.getCellValue({ sheet: sheetId, row: 0, col: 1 })}\`);

Run this code in CodeSandbox

Contributing
------------

Contributions are welcome, but before you make them, please read the Contributing Guide and accept the Contributor License Agreement.

License
-------

HyperFormula is available under two different licenses: GPLv3 and proprietary. The proprietary license can be purchased by contacting our team at Handsontable.

Copyright (c) Handsoncode
