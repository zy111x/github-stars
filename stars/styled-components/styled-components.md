---
project: styled-components
stars: 40577
description: Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅
url: https://github.com/styled-components/styled-components
---

  

**Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅**  
  

* * *

**Upgrading from v5?** See the migration guide.

Utilizing tagged template literals (a recent addition to JavaScript) and the power of CSS, `styled-components` allow you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

const Button \= styled.button\`
  color: grey;
\`;

Alternatively, you may use style objects. This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.

const Button \= styled.button({
  color: 'grey',
});

Equivalent to:

const Button \= styled.button\`
  color: grey;
\`;

`styled-components` is compatible with both React (for web) and React Native – meaning it's the perfect choice even for truly universal apps! See the documentation about React Native for more information.

_Supported by Front End Center. Thank you for making this possible!_

* * *

Docs
----

**See the documentation at styled-components.com/docs** for more information about using `styled-components`!

Quicklinks to some of the most-visited pages:

-   **Getting started**
-   API Reference
-   Theming
-   Server-side rendering
-   Tagged Template Literals explained

* * *

Example
-------

import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title \= styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper \= styled.section\`
  padding: 4em;
  background: papayawhip;
\`;

function MyUI() {
  return (
    // Use them like any other React component – except they're styled!
    <Wrapper\>
      <Title\>Hello World, this is my first styled component!</Title\>
    </Wrapper\>
  );
}

This is what you'll see in your browser:

* * *

Looking for v5?
---------------

The `main` branch is for the most-current version of styled-components, currently v6. For changes targeting v5, please point your PRs at the `legacy-v5` branch.

* * *

Built with `styled-components`
------------------------------

A lot of hard work goes into community libraries, projects, and guides. A lot of them make it easier to get started or help you with your next project! There are also a whole lot of interesting apps and sites that people have built using styled-components.

Make sure to head over to awesome-styled-components to see them all! And please contribute and add your own work to the list so others can find it.

* * *

Contributing
------------

If you want to contribute to `styled-components` please see our contributing and community guidelines, they'll help you get set up locally and explain the whole process.

Please also note that all repositories under the `styled-components` organization follow our Code of Conduct, make sure to review and follow it.

* * *

Badge
-----

Let everyone know you're using _styled-components_ →

\[!\[style: styled-components\](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)\](https://github.com/styled-components/styled-components)

* * *

Contributors
------------

This project exists thanks to all the people who contribute. \[Contribute\].

* * *

Backers
-------

Thank you to all our backers! 🙏 \[Become a backer\]

* * *

Sponsors
--------

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. \[Become a sponsor\]

* * *

License
-------

Licensed under the MIT License, Copyright © 2016-present Glen Maddern and Maximilian Stoiber.

See LICENSE for more information.

* * *

Acknowledgements
----------------

This project builds on a long line of earlier work by clever folks all around the world. We'd like to thank Charlie Somerville, Nik Graf, Sunil Pai, Michael Chan, Andrey Popp, Jed Watson & Andrey Sitnik who contributed ideas, code or inspiration.

Special thanks to @okonet for the fantastic logo.
