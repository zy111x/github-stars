---
project: handsontable
stars: 20218
description: JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡
url: https://github.com/handsontable/handsontable
---

  
  
  
  

### Handsontable is a JavaScript Data Grid with a spreadsheet-like look and feel.

Use it with JavaScript, TypeScript, or frameworks such as React, Angular, and Vue. With its spreadsheet-like editing features, it’s perfect for building data-rich internal apps. It allows users to enter, edit, validate, and process data from various sources. Common use cases include resource planning software (ERP), inventory management systems, digital platforms, and data modeling applications.

Website   —   Documentation   —   Themes   —   API   —   Community

  

  

  

✨ Key Features
--------------

  ✅  Built-in themes  
  ✅  Flexible API  
  ✅  Virtualization  
  ✅  IME support  
  ✅  Internationalization  
  ✅  RTL support  
  ✅  Accessibility  
  ✅  Keyboard shortcuts  
  ✅  Sorting data  
  ✅  Filtering data  
  ✅  400 built-in formulas  
  ✅  Configurable selection  
  ✅  Data validation  
  ✅  Conditional formatting  
  ✅  Merged cells  
  ✅  Frozen rows and columns  
  ✅  Hiding rows and columns  
  ✅  Right-click context menu  

  

🪄 Installation
---------------

Below, you'll find the installation guide for the JavaScript component. If you're using a specific framework, refer to its dedicated wrapper for installation instructions:

-   React functional component
-   React class component
-   Angular
-   Vue

* * *

### Install with npm

You can also use Yarn, NuGet or load the package from CDN.

npm install handsontable

### Provide an HTML container

<!-- Set the container's ID and apply the desired theme -->
<div id\="handsontable-example" class\="ht-theme-main-dark-auto"\></div\>

### Setup

import Handsontable from 'handsontable';
// Base CSS rules
import 'handsontable/styles/handsontable.min.css';
// Main theme variables
import 'handsontable/styles/ht-theme-main.min.css';

const element \= document.getElementById('handsontable-grid');

new Handsontable(element, {
  data: \[
    { company: 'Tagcat', country: 'United Kingdom', rating: 4.4 },
    { company: 'Zoomzone', country: 'Japan', rating: 4.5 },
    { company: 'Meeveo', country: 'United States', rating: 4.6 },
  \],
  columns: \[
    { data: 'company', title: 'Company', width: 100 },
    { data: 'country', title: 'Country', width: 170, type: 'dropdown', source: \['United Kingdom', 'Japan', 'United States'\] },
    { data: 'rating', title: 'Rating', width: 100, type: 'numeric' },
  \],
  rowHeaders: true,
  navigableHeaders: true,
  tabNavigation: true,
  multiColumnSorting: true,
  headerClassName: 'htLeft',
  licenseKey: 'non-commercial-and-evaluation',
});

### CDN-based setup

  Show/Hide code  
If your environment does not support imports, you can use the code below to quickly set up and run a data grid with basic configuration options.  
  

<!DOCTYPE html\>
<html lang\="en"\>
  <head\>
    <meta charset\="UTF-8" />
    <meta name\="viewport" content\="width=device-width, initial-scale=1.0" />
    <title\>Handsontable - JavaScript Data Grid Example</title\>
    <link
      rel\="stylesheet"
      href\="https://cdn.jsdelivr.net/npm/handsontable/styles/handsontable.min.css"
    />
    <link
      rel\="stylesheet"
      href\="https://cdn.jsdelivr.net/npm/handsontable/styles/ht-theme-main.min.css"
    />
  </head\>
  <body\>
    <div id\="handsontable-grid" class\="ht-theme-main"\></div\>
    <script src\="https://cdn.jsdelivr.net/gh/handsontable/handsontable/dist/handsontable.full.min.js"\></script\>
    <script\>
      const element \= document.getElementById("handsontable-grid");

      new Handsontable(element, {
        data: \[
          { company: "Tagcat", country: "United Kingdom", rating: 4.4 },
          { company: "Zoomzone", country: "Japan", rating: 4.5 },
          { company: "Meeveo", country: "United States", rating: 4.6 },
        \],
        columns: \[
          { data: "company", title: "Company", width: 100 },
          { data: "country", title: "Country", width: 170, type: "dropdown", source: \["United Kingdom", "Japan", "United States"\] },
          { data: "rating", title: "Rating", width: 100, type: "numeric" },
        \],
        rowHeaders: true,
        navigableHeaders: true,
        tabNavigation: true,
        multiColumnSorting: true,
        headerClassName: "htLeft",
        licenseKey: "non-commercial-and-evaluation",
      });
    </script\>
  </body\>
</html\>

  

🚀 Resources
------------

-   Website
-   Demo
-   Documentation
-   npm
-   CDN
-   Forum
-   Blog
-   Contact support team
-   Get a quote

  

🤔 Is Handsontable a Data Grid or a Spreadsheet?
------------------------------------------------

Handsontable is a data grid component written in JavaScript, not a spreadsheet. However, it brings in many features typically found in spreadsheet software. We designed it this way because spreadsheet-like patterns are often the most user-friendly when it comes to data entry and management.

### Spreadsheet-like features in Handsontable:

-   Keyboard shortcuts compliant with either Google Sheets or Excel
-   400 spreadsheet formulas via native integration with HyperFormula
-   Keyboard navigation across headers that can be disabled, making only cells navigable
-   TAB navigation across cells that can be disabled
-   Built-in undo-redo functionality
-   Powerful clipboard capabilities for copy-paste operations
-   Ability to scroll the grid within the container (`div`) or window
-   Data binding in the form of an array of objects or arrays of arrays
-   Built-in cell editors like a date picker or dropdown list

At first glance, it might seem that a data table, spreadsheet, and data grid are just different names for the same thing - an interactive table displaying data. In reality, these tools serve different purposes and offer distinct functionalities, designed to meet specific needs. Handsontable sits comfortably in the data grid category while incorporating many of the best aspects of spreadsheet software.

  

🛟 Support
----------

**We're here to help!**

If you're using Handsontable with a free, non-commercial license, you can:

-   Join the conversation on GitHub Discussions to share ideas, suggest features, or discuss changes.
-   Report any bugs you find on our GitHub Issue Board.
-   Connect with other developers and find answers on our Developer Forum.

If you have a commercial license, feel free to contact us directly at support@handsontable.com or use our contact form.

  

📖 Licenses
-----------

Handsontable is available under two licensing options, allowing you to choose the one that best fits your needs. Each license comes with its own terms and conditions, as outlined below:

### ① Free license for non-commercial use, and evaluation purposes

This license is available for non-commercial purposes such as teaching, academic research, or evaluation. It allows you to use Handsontable free of charge under the terms specified in the non-commercial license agreement.  
Learn more here.

### ② Commercial license

For commercial use, a paid license is required. This license includes support and maintenance to ensure you get the most out of Handsontable. The commercial license can be purchased directly from Handsoncode or through an authorized reseller. See the pricing page for details.

  

🔑 License Key
--------------

For projects covered by the free non-commercial license, simply use the phrase `'non-commercial-and-evaluation'` as your license key.

If you're using Handsontable in a project that supports commercial activities, you'll need to purchase a license key at handsontable.com/pricing. You can find more details in our documentation.

  

🙌 Contributing
---------------

Contributions are welcome, but before you make them, please read the Contributing Guide and accept the Contributor License Agreement.

  
  

Created and maintained by the Handsontable Team 👋

* * *

© 2012 - 2024 Handsoncode
