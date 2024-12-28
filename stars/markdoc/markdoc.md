---
project: markdoc
stars: 7335
description: A powerful, flexible, Markdown-based authoring framework.
url: https://github.com/markdoc/markdoc
---

  
  
  

=========

#### A powerful, flexible, Markdown-based authoring framework.

Markdoc is a Markdown\-based syntax and toolchain for creating custom documentation sites and experiences.  
We designed Markdoc to power Stripe's public docs, our largest and most complex content site.

Installation
------------

To get started with Markdoc, first install the library:

npm install @markdoc/markdoc

or

yarn add @markdoc/markdoc

and import it in your app:

const Markdoc \= require('@markdoc/markdoc');

or if you are using ESM

import Markdoc from '@markdoc/markdoc';

then use `Markdoc` in your app or tool:

const doc \= \`
\# Markdoc README
{% image src="/logo.svg" /%}
\`;

const ast \= Markdoc.parse(doc);
const content \= Markdoc.transform(ast);
return Markdoc.renderers.react(content, React);

Check out our docs for more guidance on how to use Markdoc.

### TypeScript

This is the minimal `tsconfig.json` required to use Markdoc in your TypeScript project:

{
  "compilerOptions": {
    "moduleResolution": "node",
    "target": "esnext", // works with es2015 or greater
    "esModuleInterop": true
  }
}

### React

If you are using React, install Markdoc with:

npm install @markdoc/markdoc react @types/react

Contributing
------------

Contributions and feedback are welcome and encouraged. Check out our contributing guidelines on how to do so.

### Development

1.  Run `npm install`
2.  Run `npm run build`
3.  Run the tests using `npm test`

Code of conduct
---------------

This project has adopted the Stripe Code of conduct.

License
-------

This project uses the MIT license.

Credits
-------

Special shout out to:

-   @marcioAlmada for providing us with the @markdoc GitHub org.
-   @koomen for gifting us https://markdoc.dev.
