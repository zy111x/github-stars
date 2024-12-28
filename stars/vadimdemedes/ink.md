---
project: ink
stars: 27397
description: 🌈 React for interactive command-line apps
url: https://github.com/vadimdemedes/ink
---

* * *

  
  
  
  
  

> React for CLIs. Build and test your CLI output using components.

Ink provides the same component-based UI building experience that React offers in the browser, but for command-line apps. It uses Yoga to build Flexbox layouts in the terminal, so most CSS-like props are available in Ink as well. If you are already familiar with React, you already know Ink.

Since Ink is a React renderer, it means that all features of React are supported. Head over to React website for documentation on how to use it. Only Ink's methods will be documented in this readme.

**Note:** This is documentation for Ink 4 and 5. If you're looking for docs on Ink 3, check out this release.

* * *

My open source work is supported by the community ❤️

Install
-------

npm install ink react

Usage
-----

import React, {useState, useEffect} from 'react';
import {render, Text} from 'ink';

const Counter \= () \=> {
	const \[counter, setCounter\] \= useState(0);

	useEffect(() \=> {
		const timer \= setInterval(() \=> {
			setCounter(previousCounter \=> previousCounter + 1);
		}, 100);

		return () \=> {
			clearInterval(timer);
		};
	}, \[\]);

	return <Text color\="green"\>{counter} tests passed</Text\>;
};

render(<Counter />);

You can also check it out live on repl.it sandbox. Feel free to play around with the code and fork this repl at https://repl.it/@vadimdemedes/ink-counter-demo.

Who's Using Ink?
----------------

-   GitHub Copilot for CLI - Just say what you want the shell to do.
-   Cloudflare's Wrangler - The CLI for Cloudflare Workers.
-   Linear - Linear built an internal CLI for managing deployments, configs and other housekeeping tasks.
-   Gatsby - Gatsby is a modern web framework for blazing fast websites.
-   tap - A Test-Anything-Protocol library for JavaScript.
-   Terraform CDK - CDK (Cloud Development Kit) for HashiCorp Terraform.
-   Specify CLI - Automate the distribution of your design tokens.
-   Twilio's SIGNAL - CLI for Twilio's SIGNAL conference. Blog post.
-   Typewriter - Generates strongly-typed Segment analytics clients from arbitrary JSON Schema.
-   Prisma - The unified data layer for modern applications.
-   Blitz - The Fullstack React Framework.
-   New York Times - NYT uses Ink `kyt` - a toolkit that encapsulates and manages the configuration for web apps.
-   tink - Next-generation runtime and package manager.
-   Inkle - Wordle game.
-   loki - Visual regression testing for Storybook.
-   Bit - Build, distribute and collaborate on components.
-   Remirror - Your friendly, world-class editor toolkit.
-   Prime - Open source GraphQL CMS.
-   emoj - Find relevant emojis.
-   emma - Find and install npm packages.
-   npm-check-extras - Check for outdated and unused dependencies, and run update/delete action over selected ones.
-   swiff - Multi-environment command line tools for time-saving web developers.
-   share - Quickly share files.
-   Kubelive - CLI for Kubernetes to provide live data about the cluster and its resources.
-   changelog-view - View changelogs.
-   cfpush - An interactive Cloud Foundry tutorial.
-   startd - Turn your React component into a web app.
-   wiki-cli - Search Wikipedia and read summaries.
-   garson - Build interactive config-based command-line interfaces.
-   git-contrib-calendar - Display a contributions calendar for any git repository.
-   gitgud - An interactive command-line GUI for Git.
-   Autarky - Find and delete old `node_modules` directories in order to free up disk space.
-   fast-cli - Test your download and upload speed.
-   tasuku - Minimal task runner.
-   mnswpr - Minesweeper game.
-   lrn - Learning by repetition.
-   turdle - Wordle game.
-   Shopify CLI - Build apps, themes, and storefronts for Shopify.
-   ToDesktop CLI - An all-in-one platform for building Electron apps.
-   Walle - Full-featured crypto wallet for EVM networks.
-   Sudoku - Sudoku game.
-   Sea Trader - Taipan! inspired trading simulator game.

Contents
--------

-   Getting Started
-   Components
    -   `<Text>`
    -   `<Box>`
    -   `<Newline>`
    -   `<Spacer>`
    -   `<Static>`
    -   `<Transform>`
-   Hooks
    -   `useInput`
    -   `useApp`
    -   `useStdin`
    -   `useStdout`
    -   `useStderr`
    -   `useFocus`
    -   `useFocusManager`
-   API
-   Testing
-   Using React Devtools
-   Useful Components
-   Useful Hooks
-   Examples

Getting Started
---------------

Use create-ink-app to quickly scaffold a new Ink-based CLI.

npx create-ink-app my-ink-cli

Alternatively, create a TypeScript project:

npx create-ink-app --typescript my-ink-cli

Manual JavaScript setup

Ink requires the same Babel setup as you would do for regular React-based apps in the browser.

Set up Babel with a React preset to ensure all examples in this readme work as expected. After installing Babel, install `@babel/preset-react` and insert the following configuration in `babel.config.json`:

npm install --save-dev @babel/preset-react

{
	"presets": \["@babel/preset-react"\]
}

Next, create a file `source.js`, where you'll type code that uses Ink:

import React from 'react';
import {render, Text} from 'ink';

const Demo \= () \=> <Text\>Hello World</Text\>;

render(<Demo />);

Then, transpile this file with Babel:

npx babel source.js -o cli.js

Now you can run `cli.js` with Node.js:

node cli

If you don't like transpiling files during development, you can use import-jsx or @esbuild-kit/esm-loader to `import` a JSX file and transpile it on the fly.

Ink uses Yoga - a Flexbox layout engine to build great user interfaces for your CLIs using familiar CSS-like props you've used when building apps for the browser. It's important to remember that each element is a Flexbox container. Think of it as if each `<div>` in the browser had `display: flex`. See `<Box>` built-in component below for documentation on how to use Flexbox layouts in Ink. Note that all text must be wrapped in a `<Text>` component.

Components
----------

### `<Text>`

This component can display text, and change its style to make it bold, underline, italic or strikethrough.

import {render, Text} from 'ink';

const Example \= () \=> (
	<\>
		<Text color\="green"\>I am green</Text\>
		<Text color\="black" backgroundColor\="white"\>
			I am black on white
		</Text\>
		<Text color\="#ffffff"\>I am white</Text\>
		<Text bold\>I am bold</Text\>
		<Text italic\>I am italic</Text\>
		<Text underline\>I am underline</Text\>
		<Text strikethrough\>I am strikethrough</Text\>
		<Text inverse\>I am inversed</Text\>
	</\>
);

render(<Example />);

**Note:** `<Text>` allows only text nodes and nested `<Text>` components inside of it. For example, `<Box>` component can't be used inside `<Text>`.

#### color

Type: `string`

Change text color. Ink uses chalk under the hood, so all its functionality is supported.

<Text color\="green"\>Green</Text\>
<Text color\="#005cc5"\>Blue</Text>
<Text color\="rgb(232, 131, 136)"\>Red</Text\>

#### backgroundColor

Type: `string`

Same as `color` above, but for background.

<Text backgroundColor\="green" color\="white"\>Green</Text\>
<Text backgroundColor\="#005cc5" color\="white"\>Blue</Text>
<Text backgroundColor\="rgb(232, 131, 136)" color\="white"\>Red</Text\>

#### dimColor

Type: `boolean`  
Default: `false`

Dim the color (emit a small amount of light).

<Text color\="red" dimColor\>
	Dimmed Red
</Text\>

#### bold

Type: `boolean`  
Default: `false`

Make the text bold.

#### italic

Type: `boolean`  
Default: `false`

Make the text italic.

#### underline

Type: `boolean`  
Default: `false`

Make the text underlined.

#### strikethrough

Type: `boolean`  
Default: `false`

Make the text crossed with a line.

#### inverse

Type: `boolean`  
Default: `false`

Inverse background and foreground colors.

<Text inverse color\="yellow"\>
	Inversed Yellow
</Text\>

#### wrap

Type: `string`  
Allowed values: `wrap` `truncate` `truncate-start` `truncate-middle` `truncate-end`  
Default: `wrap`

This property tells Ink to wrap or truncate text if its width is larger than container. If `wrap` is passed (by default), Ink will wrap text and split it into multiple lines. If `truncate-*` is passed, Ink will truncate text instead, which will result in one line of text with the rest cut off.

<Box width\={7}\>
	<Text\>Hello World</Text\>
</Box\>
//=> 'Hello\\nWorld'

// \`truncate\` is an alias to \`truncate-end\`
<Box width\={7}\>
	<Text wrap\="truncate"\>Hello World</Text\>
</Box>
//=> 'Hello…'

<Box width\={7}\>
	<Text wrap\="truncate-middle"\>Hello World</Text\>
</Box\>
//=> 'He…ld'

<Box width\={7}\>
	<Text wrap\="truncate-start"\>Hello World</Text\>
</Box>
//=> '…World'

### `<Box>`

`<Box>` is an essential Ink component to build your layout. It's like `<div style="display: flex">` in the browser.

import {render, Box, Text} from 'ink';

const Example \= () \=> (
	<Box margin\={2}\>
		<Text\>This is a box with margin</Text\>
	</Box\>
);

render(<Example />);

#### Dimensions

##### width

Type: `number` `string`

Width of the element in spaces. You can also set it in percent, which will calculate the width based on the width of parent element.

<Box width\={4}\>
	<Text\>X</Text\>
</Box\>
//=> 'X   '

<Box width\={10}\>
	<Box width\="50%"\>
		<Text\>X</Text\>
	</Box\>
	<Text\>Y</Text\>
</Box\>
//=> 'X    Y'

##### height

Type: `number` `string`

Height of the element in lines (rows). You can also set it in percent, which will calculate the height based on the height of parent element.

<Box height\={4}\>
	<Text\>X</Text\>
</Box\>
//=> 'X\\n\\n\\n'

<Box height\={6} flexDirection\="column"\>
	<Box height\="50%"\>
		<Text\>X</Text\>
	</Box\>
	<Text\>Y</Text\>
</Box\>
//=> 'X\\n\\n\\nY\\n\\n'

##### minWidth

Type: `number`

Sets a minimum width of the element. Percentages aren't supported yet, see facebook/yoga#872.

##### minHeight

Type: `number`

Sets a minimum height of the element. Percentages aren't supported yet, see facebook/yoga#872.

#### Padding

##### paddingTop

Type: `number`  
Default: `0`

Top padding.

##### paddingBottom

Type: `number`  
Default: `0`

Bottom padding.

##### paddingLeft

Type: `number`  
Default: `0`

Left padding.

##### paddingRight

Type: `number`  
Default: `0`

Right padding.

##### paddingX

Type: `number`  
Default: `0`

Horizontal padding. Equivalent to setting `paddingLeft` and `paddingRight`.

##### paddingY

Type: `number`  
Default: `0`

Vertical padding. Equivalent to setting `paddingTop` and `paddingBottom`.

##### padding

Type: `number`  
Default: `0`

Padding on all sides. Equivalent to setting `paddingTop`, `paddingBottom`, `paddingLeft` and `paddingRight`.

<Box paddingTop\={2}\>Top</Box\>
<Box paddingBottom\={2}\>Bottom</Box>
<Box paddingLeft\={2}\>Left</Box\>
<Box paddingRight\={2}\>Right</Box>
<Box paddingX\={2}\>Left and right</Box\>
<Box paddingY\={2}\>Top and bottom</Box>
<Box padding\={2}\>Top, bottom, left and right</Box\>

#### Margin

##### marginTop

Type: `number`  
Default: `0`

Top margin.

##### marginBottom

Type: `number`  
Default: `0`

Bottom margin.

##### marginLeft

Type: `number`  
Default: `0`

Left margin.

##### marginRight

Type: `number`  
Default: `0`

Right margin.

##### marginX

Type: `number`  
Default: `0`

Horizontal margin. Equivalent to setting `marginLeft` and `marginRight`.

##### marginY

Type: `number`  
Default: `0`

Vertical margin. Equivalent to setting `marginTop` and `marginBottom`.

##### margin

Type: `number`  
Default: `0`

Margin on all sides. Equivalent to setting `marginTop`, `marginBottom`, `marginLeft` and `marginRight`.

<Box marginTop\={2}\>Top</Box\>
<Box marginBottom\={2}\>Bottom</Box>
<Box marginLeft\={2}\>Left</Box\>
<Box marginRight\={2}\>Right</Box>
<Box marginX\={2}\>Left and right</Box\>
<Box marginY\={2}\>Top and bottom</Box>
<Box margin\={2}\>Top, bottom, left and right</Box\>

#### Gap

#### gap

Type: `number`  
Default: `0`

Size of the gap between an element's columns and rows. Shorthand for `columnGap` and `rowGap`.

<Box gap\={1} width\={3} flexWrap\="wrap"\>
	<Text\>A</Text\>
	<Text\>B</Text\>
	<Text\>C</Text\>
</Box\>
// A B
//
// C

#### columnGap

Type: `number`  
Default: `0`

Size of the gap between an element's columns.

<Box columnGap\={1}\>
	<Text\>A</Text\>
	<Text\>B</Text\>
</Box\>
// A B

#### rowGap

Type: `number`  
Default: `0`

Size of the gap between element's rows.

<Box flexDirection\="column" rowGap\={1}\>
	<Text\>A</Text\>
	<Text\>B</Text\>
</Box\>
// A
//
// B

#### Flex

##### flexGrow

Type: `number`  
Default: `0`

See flex-grow.

<Box\>
	<Text\>Label:</Text\>
	<Box flexGrow\={1}\>
		<Text\>Fills all remaining space</Text\>
	</Box\>
</Box\>

##### flexShrink

Type: `number`  
Default: `1`

See flex-shrink.

<Box width\={20}\>
	<Box flexShrink\={2} width\={10}\>
		<Text\>Will be 1/4</Text\>
	</Box\>
	<Box width\={10}\>
		<Text\>Will be 3/4</Text\>
	</Box\>
</Box\>

##### flexBasis

Type: `number` `string`

See flex-basis.

<Box width\={6}\>
	<Box flexBasis\={3}\>
		<Text\>X</Text\>
	</Box\>
	<Text\>Y</Text\>
</Box\>
//=> 'X  Y'

<Box width\={6}\>
	<Box flexBasis\="50%"\>
		<Text\>X</Text\>
	</Box\>
	<Text\>Y</Text\>
</Box\>
//=> 'X  Y'

##### flexDirection

Type: `string`  
Allowed values: `row` `row-reverse` `column` `column-reverse`

See flex-direction.

<Box\>
	<Box marginRight\={1}\>
		<Text\>X</Text\>
	</Box\>
	<Text\>Y</Text\>
</Box\>
// X Y

<Box flexDirection\="row-reverse"\>
	<Text\>X</Text\>
	<Box marginRight\={1}\>
		<Text\>Y</Text\>
	</Box>
</Box\>
// Y X

<Box flexDirection\="column"\>
	<Text\>X</Text\>
	<Text\>Y</Text\>
</Box\>
// X
// Y

<Box flexDirection\="column-reverse"\>
	<Text\>X</Text\>
	<Text\>Y</Text>
</Box\>
// Y
// X

##### flexWrap

Type: `string`  
Allowed values: `nowrap` `wrap` `wrap-reverse`

See flex-wrap.

<Box width\={2} flexWrap\="wrap"\>
	<Text\>A</Text\>
	<Text\>BC</Text\>
</Box\>
// A
// B C

<Box flexDirection\="column" height\={2} flexWrap\="wrap"\>
	<Text\>A</Text\>
	<Text\>B</Text\>
	<Text\>C</Text\>
</Box\>
// A C
// B

##### alignItems

Type: `string`  
Allowed values: `flex-start` `center` `flex-end`

See align-items.

<Box alignItems\="flex-start"\>
	<Box marginRight\={1}\>
		<Text\>X</Text\>
	</Box\>
	<Text\>
		A
		<Newline/>
		B
		<Newline/>
		C
	</Text\>
</Box\>
// X A
//   B
//   C

<Box alignItems\="center"\>
	<Box marginRight\={1}\>
		<Text\>X</Text\>
	</Box\>
	<Text\>
		A
		<Newline/\>
		B
		<Newline/\>
		C
	</Text>
</Box\>
//   A
// X B
//   C

<Box alignItems\="flex-end"\>
	<Box marginRight\={1}\>
		<Text\>X</Text\>
	</Box\>
	<Text\>
		A
		<Newline/>
		B
		<Newline/>
		C
	</Text\>
</Box\>
//   A
//   B
// X C

##### alignSelf

Type: `string`  
Default: `auto`  
Allowed values: `auto` `flex-start` `center` `flex-end`

See align-self.

<Box height\={3}\>
	<Box alignSelf\="flex-start"\>
		<Text\>X</Text\>
	</Box\>
</Box\>
// X
//
//

<Box height\={3}\>
	<Box alignSelf\="center"\>
		<Text\>X</Text\>
	</Box\>
</Box>
//
// X
//

<Box height\={3}\>
	<Box alignSelf\="flex-end"\>
		<Text\>X</Text\>
	</Box\>
</Box\>
//
//
// X

##### justifyContent

Type: `string`  
Allowed values: `flex-start` `center` `flex-end` `space-between` `space-around` `space-evenly`

See justify-content.

<Box justifyContent\="flex-start"\>
	<Text\>X</Text\>
</Box\>
// \[X      \]

<Box justifyContent\="center"\>
	<Text\>X</Text\>
</Box>
// \[   X   \]

<Box justifyContent\="flex-end"\>
	<Text\>X</Text\>
</Box\>
// \[      X\]

<Box justifyContent\="space-between"\>
	<Text\>X</Text\>
	<Text\>Y</Text>
</Box\>
// \[X      Y\]

<Box justifyContent\="space-around"\>
	<Text\>X</Text\>
	<Text\>Y</Text\>
</Box\>
// \[  X   Y  \]

<Box justifyContent\="space-evenly"\>
	<Text\>X</Text\>
	<Text\>Y</Text>
</Box\>
// \[   X   Y   \]

#### Visibility

##### display

Type: `string`  
Allowed values: `flex` `none`  
Default: `flex`

Set this property to `none` to hide the element.

##### overflowX

Type: `string`  
Allowed values: `visible` `hidden`  
Default: `visible`

Behavior for an element's overflow in horizontal direction.

##### overflowY

Type: `string`  
Allowed values: `visible` `hidden`  
Default: `visible`

Behavior for an element's overflow in vertical direction.

##### overflow

Type: `string`  
Allowed values: `visible` `hidden`  
Default: `visible`

Shortcut for setting `overflowX` and `overflowY` at the same time.

#### Borders

##### borderStyle

Type: `string`  
Allowed values: `single` `double` `round` `bold` `singleDouble` `doubleSingle` `classic` | `BoxStyle`

Add a border with a specified style. If `borderStyle` is `undefined` (which it is by default), no border will be added. Ink uses border styles from `cli-boxes` module.

<Box flexDirection\="column"\>
	<Box\>
		<Box borderStyle\="single" marginRight\={2}\>
			<Text\>single</Text\>
		</Box\>

		<Box borderStyle\="double" marginRight\={2}\>
			<Text\>double</Text\>
		</Box\>

		<Box borderStyle\="round" marginRight\={2}\>
			<Text\>round</Text\>
		</Box\>

		<Box borderStyle\="bold"\>
			<Text\>bold</Text\>
		</Box\>
	</Box\>

	<Box marginTop\={1}\>
		<Box borderStyle\="singleDouble" marginRight\={2}\>
			<Text\>singleDouble</Text\>
		</Box\>

		<Box borderStyle\="doubleSingle" marginRight\={2}\>
			<Text\>doubleSingle</Text\>
		</Box\>

		<Box borderStyle\="classic"\>
			<Text\>classic</Text\>
		</Box\>
	</Box\>
</Box\>

Alternatively, pass a custom border style like so:

<Box
	borderStyle\={{
		topLeft: '↘',
		top: '↓',
		topRight: '↙',
		left: '→',
		bottomLeft: '↗',
		bottom: '↑',
		bottomRight: '↖',
		right: '←'
	}}
\>
	<Text\>Custom</Text\>
</Box\>

See example in examples/borders.

##### borderColor

Type: `string`

Change border color. Shorthand for setting `borderTopColor`, `borderRightColor`, `borderBottomColor` and `borderLeftColor`.

<Box borderStyle\="round" borderColor\="green"\>
	<Text\>Green Rounded Box</Text\>
</Box\>

##### borderTopColor

Type: `string`

Change top border color. Accepts the same values as `color` in `<Text>` component.

<Box borderStyle\="round" borderTopColor\="green"\>
	<Text\>Hello world</Text\>
</Box\>

##### borderRightColor

Type: `string`

Change right border color. Accepts the same values as `color` in `<Text>` component.

<Box borderStyle\="round" borderRightColor\="green"\>
	<Text\>Hello world</Text\>
</Box\>

##### borderRightColor

Type: `string`

Change right border color. Accepts the same values as `color` in `<Text>` component.

<Box borderStyle\="round" borderRightColor\="green"\>
	<Text\>Hello world</Text\>
</Box\>

##### borderBottomColor

Type: `string`

Change bottom border color. Accepts the same values as `color` in `<Text>` component.

<Box borderStyle\="round" borderBottomColor\="green"\>
	<Text\>Hello world</Text\>
</Box\>

##### borderLeftColor

Type: `string`

Change left border color. Accepts the same values as `color` in `<Text>` component.

<Box borderStyle\="round" borderLeftColor\="green"\>
	<Text\>Hello world</Text\>
</Box\>

##### borderDimColor

Type: `boolean`  
Default: `false`

Dim the border color. Shorthand for setting `borderTopDimColor`, `borderBottomDimColor`, `borderLeftDimColor` and `borderRightDimColor`.

<Box borderStyle\="round" borderDimColor\>
	<Text\>Hello world</Text\>
</Box\>

##### borderTopDimColor

Type: `boolean`  
Default: `false`

Dim the top border color.

<Box borderStyle\="round" borderTopDimColor\>
	<Text\>Hello world</Text\>
</Box\>

##### borderBottomDimColor

Type: `boolean`  
Default: `false`

Dim the bottom border color.

<Box borderStyle\="round" borderBottomDimColor\>
	<Text\>Hello world</Text\>
</Box\>

##### borderLeftDimColor

Type: `boolean`  
Default: `false`

Dim the left border color.

<Box borderStyle\="round" borderLeftDimColor\>
	<Text\>Hello world</Text\>
</Box\>

##### borderRightDimColor

Type: `boolean`  
Default: `false`

Dim the right border color.

<Box borderStyle\="round" borderRightDimColor\>
	<Text\>Hello world</Text\>
</Box\>

##### borderTop

Type: `boolean`  
Default: `true`

Determines whether top border is visible.

##### borderRight

Type: `boolean`  
Default: `true`

Determines whether right border is visible.

##### borderBottom

Type: `boolean`  
Default: `true`

Determines whether bottom border is visible.

##### borderLeft

Type: `boolean`  
Default: `true`

Determines whether left border is visible.

### `<Newline>`

Adds one or more newline (`\n`) characters. Must be used within `<Text>` components.

#### count

Type: `number`  
Default: `1`

Number of newlines to insert.

import {render, Text, Newline} from 'ink';

const Example \= () \=> (
	<Text\>
		<Text color\="green"\>Hello</Text\>
		<Newline />
		<Text color\="red"\>World</Text\>
	</Text\>
);

render(<Example />);

Output:

```
Hello
World
```

### `<Spacer>`

A flexible space that expands along the major axis of its containing layout. It's useful as a shortcut for filling all the available spaces between elements.

For example, using `<Spacer>` in a `<Box>` with default flex direction (`row`) will position "Left" on the left side and will push "Right" to the right side.

import {render, Box, Text, Spacer} from 'ink';

const Example \= () \=> (
	<Box\>
		<Text\>Left</Text\>
		<Spacer />
		<Text\>Right</Text\>
	</Box\>
);

render(<Example />);

In a vertical flex direction (`column`), it will position "Top" to the top of the container and push "Bottom" to the bottom of it. Note, that container needs to be tall to enough to see this in effect.

import {render, Box, Text, Spacer} from 'ink';

const Example \= () \=> (
	<Box flexDirection\="column" height\={10}\>
		<Text\>Top</Text\>
		<Spacer />
		<Text\>Bottom</Text\>
	</Box\>
);

render(<Example />);

### `<Static>`

`<Static>` component permanently renders its output above everything else. It's useful for displaying activity like completed tasks or logs - things that are not changing after they're rendered (hence the name "Static").

It's preferred to use `<Static>` for use cases like these, when you can't know or control the amount of items that need to be rendered.

For example, Tap uses `<Static>` to display a list of completed tests. Gatsby uses it to display a list of generated pages, while still displaying a live progress bar.

import React, {useState, useEffect} from 'react';
import {render, Static, Box, Text} from 'ink';

const Example \= () \=> {
	const \[tests, setTests\] \= useState(\[\]);

	useEffect(() \=> {
		let completedTests \= 0;
		let timer;

		const run \= () \=> {
			// Fake 10 completed tests
			if (completedTests++ < 10) {
				setTests(previousTests \=> \[
					...previousTests,
					{
						id: previousTests.length,
						title: \`Test #${previousTests.length + 1}\`
					}
				\]);

				timer \= setTimeout(run, 100);
			}
		};

		run();

		return () \=> {
			clearTimeout(timer);
		};
	}, \[\]);

	return (
		<\>
			{/\* This part will be rendered once to the terminal \*/}
			<Static items\={tests}\>
				{test \=> (
					<Box key\={test.id}\>
						<Text color\="green"\>✔ {test.title}</Text\>
					</Box\>
				)}
			</Static\>

			{/\* This part keeps updating as state changes \*/}
			<Box marginTop\={1}\>
				<Text dimColor\>Completed tests: {tests.length}</Text\>
			</Box\>
		</\>
	);
};

render(<Example />);

**Note:** `<Static>` only renders new items in `items` prop and ignores items that were previously rendered. This means that when you add new items to `items` array, changes you make to previous items will not trigger a rerender.

See examples/static for an example usage of `<Static>` component.

#### items

Type: `Array`

Array of items of any type to render using a function you pass as a component child.

#### style

Type: `object`

Styles to apply to a container of child elements. See `<Box>` for supported properties.

<Static items\={...} style\={{padding: 1}}\>
	{...}
</Static\>

#### children(item)

Type: `Function`

Function that is called to render every item in `items` array. First argument is an item itself and second argument is index of that item in `items` array.

Note that `key` must be assigned to the root component.

<Static items\={\['a', 'b', 'c'\]}\>
	{(item, index) \=> {
		// This function is called for every item in \['a', 'b', 'c'\]
		// \`item\` is 'a', 'b', 'c'
		// \`index\` is 0, 1, 2
		return (
			<Box key\={index}\>
				<Text\>Item: {item}</Text\>
			</Box\>
		);
	}}
</Static\>

### `<Transform>`

Transform a string representation of React components before they are written to output. For example, you might want to apply a gradient to text, add a clickable link or create some text effects. These use cases can't accept React nodes as input, they are expecting a string. That's what `<Transform>` component does, it gives you an output string of its child components and lets you transform it in any way.

**Note:** `<Transform>` must be applied only to `<Text>` children components and shouldn't change the dimensions of the output, otherwise layout will be incorrect.

import {render, Transform} from 'ink';

const Example \= () \=> (
	<Transform transform\={output \=> output.toUpperCase()}\>
		<Text\>Hello World</Text\>
	</Transform\>
);

render(<Example />);

Since `transform` function converts all characters to upper case, final output that's rendered to the terminal will be "HELLO WORLD", not "Hello World".

When the output wraps to multiple lines, it can be helpful to know which line is being processed.

For example, to implement a hanging indent component, you can indent all the lines except for the first.

import {render, Transform} from 'ink';

const HangingIndent \= ({content, indent \= 4, children, ...props}) \=> (
	<Transform
		transform\={(line, index) \=>
			index \=== 0 ? line : ' '.repeat(indent) + line
		}
		{...props}
	\>
		{children}
	</Transform\>
);

const text \=
	'WHEN I WROTE the following pages, or rather the bulk of them, ' +
	'I lived alone, in the woods, a mile from any neighbor, in a ' +
	'house which I had built myself, on the shore of Walden Pond, ' +
	'in Concord, Massachusetts, and earned my living by the labor ' +
	'of my hands only. I lived there two years and two months. At ' +
	'present I am a sojourner in civilized life again.';

// Other text properties are allowed as well
render(
	<HangingIndent bold dimColor indent\={4}\>
		{text}
	</HangingIndent\>
);

#### transform(outputLine, index)

Type: `Function`

Function which transforms children output. It accepts children and must return transformed children too.

##### children

Type: `string`

Output of child components.

##### index

Type: `number`

The zero-indexed line number of the line currently being transformed.

Hooks
-----

### useInput(inputHandler, options?)

This hook is used for handling user input. It's a more convenient alternative to using `useStdin` and listening to `data` events. The callback you pass to `useInput` is called for each character when user enters any input. However, if user pastes text and it's more than one character, the callback will be called only once and the whole string will be passed as `input`. You can find a full example of using `useInput` at examples/use-input.

import {useInput} from 'ink';

const UserInput \= () \=> {
	useInput((input, key) \=> {
		if (input \=== 'q') {
			// Exit program
		}

		if (key.leftArrow) {
			// Left arrow key pressed
		}
	});

	return …
};

#### inputHandler(input, key)

Type: `Function`

The handler function that you pass to `useInput` receives two arguments:

##### input

Type: `string`

The input that the program received.

##### key

Type: `object`

Handy information about a key that was pressed.

###### key.leftArrow

###### key.rightArrow

###### key.upArrow

###### key.downArrow

Type: `boolean`  
Default: `false`

If an arrow key was pressed, the corresponding property will be `true`. For example, if user presses left arrow key, `key.leftArrow` equals `true`.

###### key.return

Type: `boolean`  
Default: `false`

Return (Enter) key was pressed.

###### key.escape

Type: `boolean`  
Default: `false`

Escape key was pressed.

###### key.ctrl

Type: `boolean`  
Default: `false`

Ctrl key was pressed.

###### key.shift

Type: `boolean`  
Default: `false`

Shift key was pressed.

###### key.tab

Type: `boolean`  
Default: `false`

Tab key was pressed.

###### key.backspace

Type: `boolean`  
Default: `false`

Backspace key was pressed.

###### key.delete

Type: `boolean`  
Default: `false`

Delete key was pressed.

###### key.pageDown

###### key.pageUp

Type: `boolean`  
Default: `false`

If Page Up or Page Down key was pressed, the corresponding property will be `true`. For example, if user presses Page Down, `key.pageDown` equals `true`.

###### key.meta

Type: `boolean`  
Default: `false`

Meta key was pressed.

#### options

Type: `object`

##### isActive

Type: `boolean`  
Default: `true`

Enable or disable capturing of user input. Useful when there are multiple `useInput` hooks used at once to avoid handling the same input several times.

### useApp()

`useApp` is a React hook, which exposes a method to manually exit the app (unmount).

#### exit(error?)

Type: `Function`

Exit (unmount) the whole Ink app.

##### error

Type: `Error`

Optional error. If passed, `waitUntilExit` will reject with that error.

import {useApp} from 'ink';

const Example \= () \=> {
	const {exit} \= useApp();

	// Exit the app after 5 seconds
	useEffect(() \=> {
		setTimeout(() \=> {
			exit();
		}, 5000);
	}, \[\]);

	return …
};

### useStdin()

`useStdin` is a React hook, which exposes stdin stream.

#### stdin

Type: `stream.Readable`  
Default: `process.stdin`

Stdin stream passed to `render()` in `options.stdin` or `process.stdin` by default. Useful if your app needs to handle user input.

import {useStdin} from 'ink';

const Example \= () \=> {
	const {stdin} \= useStdin();

	return …
};

#### isRawModeSupported

Type: `boolean`

A boolean flag determining if the current `stdin` supports `setRawMode`. A component using `setRawMode` might want to use `isRawModeSupported` to nicely fall back in environments where raw mode is not supported.

import {useStdin} from 'ink';

const Example \= () \=> {
	const {isRawModeSupported} \= useStdin();

	return isRawModeSupported ? (
		<MyInputComponent />
	) : (
		<MyComponentThatDoesntUseInput />
	);
};

#### setRawMode(isRawModeEnabled)

Type: `function`

##### isRawModeEnabled

Type: `boolean`

See `setRawMode`. Ink exposes this function to be able to handle Ctrl+C, that's why you should use Ink's `setRawMode` instead of `process.stdin.setRawMode`.

**Warning:** This function will throw unless the current `stdin` supports `setRawMode`. Use `isRawModeSupported` to detect `setRawMode` support.

import {useStdin} from 'ink';

const Example \= () \=> {
	const {setRawMode} \= useStdin();

	useEffect(() \=> {
		setRawMode(true);

		return () \=> {
			setRawMode(false);
		};
	});

	return …
};

### useStdout()

`useStdout` is a React hook, which exposes stdout stream, where Ink renders your app.

#### stdout

Type: `stream.Writable`  
Default: `process.stdout`

import {useStdout} from 'ink';

const Example \= () \=> {
	const {stdout} \= useStdout();

	return …
};

#### write(data)

Write any string to stdout, while preserving Ink's output. It's useful when you want to display some external information outside of Ink's rendering and ensure there's no conflict between the two. It's similar to `<Static>`, except it can't accept components, it only works with strings.

##### data

Type: `string`

Data to write to stdout.

import {useStdout} from 'ink';

const Example \= () \=> {
	const {write} \= useStdout();

	useEffect(() \=> {
		// Write a single message to stdout, above Ink's output
		write('Hello from Ink to stdout\\n');
	}, \[\]);

	return …
};

See additional usage example in examples/use-stdout.

### useStderr()

`useStderr` is a React hook, which exposes stderr stream.

#### stderr

Type: `stream.Writable`  
Default: `process.stderr`

Stderr stream.

import {useStderr} from 'ink';

const Example \= () \=> {
	const {stderr} \= useStderr();

	return …
};

#### write(data)

Write any string to stderr, while preserving Ink's output.

It's useful when you want to display some external information outside of Ink's rendering and ensure there's no conflict between the two. It's similar to `<Static>`, except it can't accept components, it only works with strings.

##### data

Type: `string`

Data to write to stderr.

import {useStderr} from 'ink';

const Example \= () \=> {
	const {write} \= useStderr();

	useEffect(() \=> {
		// Write a single message to stderr, above Ink's output
		write('Hello from Ink to stderr\\n');
	}, \[\]);

	return …
};

### useFocus(options?)

Component that uses `useFocus` hook becomes "focusable" to Ink, so when user presses Tab, Ink will switch focus to this component. If there are multiple components that execute `useFocus` hook, focus will be given to them in the order that these components are rendered in. This hook returns an object with `isFocused` boolean property, which determines if this component is focused or not.

#### options

##### autoFocus

Type: `boolean`  
Default: `false`

Auto focus this component, if there's no active (focused) component right now.

##### isActive

Type: `boolean`  
Default: `true`

Enable or disable this component's focus, while still maintaining its position in the list of focusable components. This is useful for inputs that are temporarily disabled.

##### id

Type: `string`  
Required: `false`

Set a component's focus ID, which can be used to programmatically focus the component. This is useful for large interfaces with many focusable elements, to avoid having to cycle through all of them.

import {render, useFocus, Text} from 'ink';

const Example \= () \=> {
	const {isFocused} \= useFocus();

	return <Text\>{isFocused ? 'I am focused' : 'I am not focused'}</Text\>;
};

render(<Example />);

See example in examples/use-focus and examples/use-focus-with-id.

### useFocusManager()

This hook exposes methods to enable or disable focus management for all components or manually switch focus to next or previous components.

#### enableFocus()

Enable focus management for all components.

**Note:** You don't need to call this method manually, unless you've disabled focus management. Focus management is enabled by default.

import {useFocusManager} from 'ink';

const Example \= () \=> {
	const {enableFocus} \= useFocusManager();

	useEffect(() \=> {
		enableFocus();
	}, \[\]);

	return …
};

#### disableFocus()

Disable focus management for all components. Currently active component (if there's one) will lose its focus.

import {useFocusManager} from 'ink';

const Example \= () \=> {
	const {disableFocus} \= useFocusManager();

	useEffect(() \=> {
		disableFocus();
	}, \[\]);

	return …
};

#### focusNext()

Switch focus to the next focusable component. If there's no active component right now, focus will be given to the first focusable component. If active component is the last in the list of focusable components, focus will be switched to the first active component.

**Note:** Ink calls this method when user presses Tab.

import {useFocusManager} from 'ink';

const Example \= () \=> {
	const {focusNext} \= useFocusManager();

	useEffect(() \=> {
		focusNext();
	}, \[\]);

	return …
};

#### focusPrevious()

Switch focus to the previous focusable component. If there's no active component right now, focus will be given to the first focusable component. If active component is the first in the list of focusable components, focus will be switched to the last component.

**Note:** Ink calls this method when user presses Shift+Tab.

import {useFocusManager} from 'ink';

const Example \= () \=> {
	const {focusPrevious} \= useFocusManager();

	useEffect(() \=> {
		focusPrevious();
	}, \[\]);

	return …
};

#### focus(id)

##### id

Type: `string`

Switch focus to the component with the given `id`. If there's no component with that ID, focus will be given to the next focusable component.

import {useFocusManager, useInput} from 'ink';

const Example \= () \=> {
	const {focus} \= useFocusManager();

	useInput(input \=> {
		if (input \=== 's') {
			// Focus the component with focus ID 'someId'
			focus('someId');
		}
	});

	return …
};

API
---

#### render(tree, options?)

Returns: `Instance`

Mount a component and render the output.

##### tree

Type: `ReactElement`

##### options

Type: `object`

###### stdout

Type: `stream.Writable`  
Default: `process.stdout`

Output stream where app will be rendered.

###### stdin

Type: `stream.Readable`  
Default: `process.stdin`

Input stream where app will listen for input.

###### exitOnCtrlC

Type: `boolean`  
Default: `true`

Configure whether Ink should listen to Ctrl+C keyboard input and exit the app. This is needed in case `process.stdin` is in raw mode, because then Ctrl+C is ignored by default and process is expected to handle it manually.

###### patchConsole

Type: `boolean`  
Default: `true`

Patch console methods to ensure console output doesn't mix with Ink output. When any of `console.*` methods are called (like `console.log()`), Ink intercepts their output, clears main output, renders output from the console method and then rerenders main output again. That way both are visible and are not overlapping each other.

This functionality is powered by patch-console, so if you need to disable Ink's interception of output but want to build something custom, you can use it.

###### debug

Type: `boolean`  
Default: `false`

If `true`, each update will be rendered as a separate output, without replacing the previous one.

#### Instance

This is the object that `render()` returns.

##### rerender(tree)

Replace previous root node with a new one or update props of the current root node.

###### tree

Type: `ReactElement`

// Update props of the root node
const {rerender} \= render(<Counter count\={1} />);
rerender(<Counter count\={2} />);

// Replace root node
const {rerender} \= render(<OldCounter />);
rerender(<NewCounter />);

##### unmount()

Manually unmount the whole Ink app.

const {unmount} \= render(<MyApp />);
unmount();

##### waitUntilExit()

Returns a promise, which resolves when app is unmounted.

const {unmount, waitUntilExit} \= render(<MyApp />);

setTimeout(unmount, 1000);

await waitUntilExit(); // resolves after \`unmount()\` is called

##### clear()

Clear output.

const {clear} \= render(<MyApp />);
clear();

#### measureElement(ref)

Measure the dimensions of a particular `<Box>` element. It returns an object with `width` and `height` properties. This function is useful when your component needs to know the amount of available space it has. You could use it when you need to change the layout based on the length of its content.

**Note:** `measureElement()` returns correct results only after the initial render, when layout has been calculated. Until then, `width` and `height` equal to zero. It's recommended to call `measureElement()` in a `useEffect` hook, which fires after the component has rendered.

##### ref

Type: `MutableRef`

A reference to a `<Box>` element captured with a `ref` property. See Refs for more information on how to capture references.

import {render, measureElement, Box, Text} from 'ink';

const Example \= () \=> {
	const ref \= useRef();

	useEffect(() \=> {
		const {width, height} \= measureElement(ref.current);
		// width = 100, height = 1
	}, \[\]);

	return (
		<Box width\={100}\>
			<Box ref\={ref}\>
				<Text\>This box will stretch to 100 width</Text\>
			</Box\>
		</Box\>
	);
};

render(<Example />);

Testing
-------

Ink components are simple to test with ink-testing-library. Here's a simple example that checks how component is rendered:

import React from 'react';
import {Text} from 'ink';
import {render} from 'ink-testing-library';

const Test \= () \=> <Text\>Hello World</Text\>;
const {lastFrame} \= render(<Test />);

lastFrame() \=== 'Hello World'; //=> true

Check out ink-testing-library for more examples and full documentation.

Using React Devtools
--------------------

Ink supports React Devtools out-of-the-box. To enable integration with React Devtools in your Ink-based CLI, first ensure you have installed the optional `react-devtools-core` dependency, and then run your app with `DEV=true` environment variable:

DEV=true my-cli

Then, start React Devtools itself:

npx react-devtools

After it starts up, you should see the component tree of your CLI. You can even inspect and change the props of components, and see the results immediatelly in the CLI, without restarting it.

**Note**: You must manually quit your CLI via Ctrl+C after you're done testing.

Useful Components
-----------------

-   ink-text-input - Text input.
-   ink-spinner - Spinner.
-   ink-select-input - Select (dropdown) input.
-   ink-link - Link.
-   ink-gradient - Gradient color.
-   ink-big-text - Awesome text.
-   ink-image - Display images inside the terminal.
-   ink-tab - Tab.
-   ink-color-pipe - Create color text with simpler style strings.
-   ink-multi-select - Select one or more values from a list
-   ink-divider - A divider.
-   ink-progress-bar - Progress bar.
-   ink-table - Table.
-   ink-ascii - Awesome text component with more font choices, based on Figlet.
-   ink-markdown - Render syntax highlighted Markdown.
-   ink-quicksearch-input - Select component with fast quicksearch-like navigation.
-   ink-confirm-input - Yes/No confirmation input.
-   ink-syntax-highlight - Code syntax highlighting.
-   ink-form - Form.
-   ink-task-list - Task list.
-   ink-spawn - Spawn child processes.

Useful Hooks
------------

-   ink-use-stdout-dimensions - Subscribe to stdout dimensions.

Examples
--------

The `examples` directory contains a set of real examples. You can run them with:

npm run example examples/\[example name\]
# e.g. npm run example examples/borders

-   Jest - Implementation of basic Jest UI (live demo).
-   Counter - Simple counter that increments every 100ms (live demo).
-   Form with validation - Manage form state using Final Form.
-   Borders - Add borders to `<Box>` component.
-   Suspense - Use React Suspense.
-   Table - Render a table with multiple columns and rows.
-   Focus management - Use `useFocus` hook to manage focus between components.
-   User input - Listen to user input.
-   Write to stdout - Write to stdout bypassing main Ink output.
-   Write to stderr - Write to stderr bypassing main Ink output.
-   Static - Use `<Static>` to render permanent output.
-   Child process - Render output from a child process.

Maintainers
-----------

-   Vadim Demedes
-   Sindre Sorhus
