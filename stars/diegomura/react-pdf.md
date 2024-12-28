---
project: react-pdf
stars: 15112
description: 📄  Create PDF files using React
url: https://github.com/diegomura/react-pdf
---

React renderer for creating PDF files on the browser and server

Lost?
-----

This package is used to _create_ PDFs using React. If you wish to _display_ existing PDFs, you may be looking for react-pdf.

How to install
--------------

yarn add @react-pdf/renderer

How it works
------------

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles \= StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument \= () \=> (
  <Document\>
    <Page size\="A4" style\={styles.page}\>
      <View style\={styles.section}\>
        <Text\>Section #1</Text\>
      </View\>
      <View style\={styles.section}\>
        <Text\>Section #2</Text\>
      </View\>
    </Page\>
  </Document\>
);

### `Web.` Render in DOM

import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

const App \= () \=> (
  <PDFViewer\>
    <MyDocument />
  </PDFViewer\>
);

ReactDOM.render(<App />, document.getElementById('root'));

### `Node.` Save in a file

import React from 'react';
import ReactPDF from '@react-pdf/renderer';

ReactPDF.render(<MyDocument />, \`${\_\_dirname}/example.pdf\`);

Contributors
------------

This project exists thanks to all the people who contribute. Looking to contribute? Please check our \[contribute\] document for more details about how to setup a development environment and submitting code.

Sponsors
--------

Thank you to all our sponsors! \[Become a sponsors\]

Backers
-------

Thank you to all our backers! \[Become a backer\]

License
-------

MIT © Diego Muracciole

* * *
