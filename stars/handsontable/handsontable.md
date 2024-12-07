---
project: handsontable
stars: 20106
description: JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡
url: https://github.com/handsontable/handsontable
---

Handsontable is a JavaScript component that combines data grid features with spreadsheet-like UX.  
It provides data binding, data validation, filtering, sorting, and CRUD operations.

* * *

#### Get started with Handsontable

**React** 

**Angular** 

**Vue** 

**Vue 3** 

  **JavaScript** 

* * *

Features
--------

The most popular features of Handsontable:

  ✓  Multiple column sorting  
  ✓  Non-contiguous selection  
  ✓  Filtering data  
  ✓  Export to file  
  ✓  Validating data  
  ✓  Conditional formatting  
  ✓  Merging cells  
  ✓  Freezing rows/columns  
  ✓  Moving rows/columns  
  ✓  Resizing rows/columns  
  ✓  Hiding rows/columns  
  ✓  Context menu  
  ✓  Comments  

Documentation
-------------

-   Developer guides
-   API Reference
-   Changelog
-   Demo

Get started
-----------

### 1\. Install Handsontable

#### Using a package manager

Get Handsontable from npm, Yarn or NuGet.

npm install handsontable

import Handsontable from 'handsontable';

import 'handsontable/dist/handsontable.full.min.css';

#### Using a CDN

<script type\="text/javascript" src\="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js"\></script\>

<link rel\="stylesheet" href\="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css" />

### 2\. Create a container

<div id\="example"\></div\>

### 3\. Initialize your grid

const container \= document.querySelector('#example');
const hot \= new Handsontable(container, {
  data: \[
    \['', 'Tesla', 'Volvo', 'Toyota', 'Ford'\],
    \['2019', 10, 11, 12, 13\],
    \['2020', 20, 11, 14, 13\],
    \['2021', 30, 15, 12, 13\]
  \],
  rowHeaders: true,
  colHeaders: true,
  licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
});

Support
-------

We provide support for developers working with commercial version via contact form or at support@handsontable.com.

If you use a non-commercial version then please ask your tagged question on StackOverflow.

License
-------

Handsontable is a commercial software with two licenses available:

-   Free for non-commercial purposes such as teaching, academic research, and evaluation. Read it here.
-   Commercial license with support and maintenance included. See pricing plans.

License key
-----------

If you use Handsontable in a project that supports your commercial activity, then you must purchase the license key at handsontable.com.

If you use the free for non-commercial license of Handsontable, then pass the phrase `'non-commercial-and-evaluation'`, as described in this documentation.

  
  

Proudly created and maintained by the Handsontable Team.
