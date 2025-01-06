---
project: workerize
stars: 4376
description: 🏗️ Run a module in a Web Worker.
url: https://github.com/developit/workerize
---

💖 Using Webpack? You want workerize-loader ➡️
----------------------------------------------

Workerize
=========

> Moves a module into a Web Worker, automatically reflecting exported functions as asynchronous proxies.

-   Bundles a tiny, purpose-built RPC implementation into your app
-   If exported module methods are already async, signature is unchanged
-   Supports synchronous and asynchronous worker functions
-   Works beautifully with async/await
-   Just **800 bytes** of gzipped ES3

Install
-------

npm install --save workerize

### Usage

Pass either a function or a string containing code.

**worker.js**:

let worker \= workerize(\`
	export function add(a, b) {
		// block for half a second to demonstrate asynchronicity
		let start = Date.now();
		while (Date.now()-start < 500);
		return a + b;
	}
\`);

(async () \=> {
	console.log('3 + 9 = ', await worker.add(3, 9));
	console.log('1 + 2 = ', await worker.add(1, 2));
})();

### License

MIT License © Jason Miller
