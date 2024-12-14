---
project: tailwind-rn
stars: 4242
description: 🦎 Use Tailwind CSS in React Native projects
url: https://github.com/vadimdemedes/tailwind-rn
---

* * *

tailwind-rn
===========

> Use Tailwind in React Native projects

All styles are generated directly from Tailwind's output, so they're always up-to-date.

-   JIT mode
-   Responsive breakpoints (e.g. `sm`, `md`, `lg`)
-   Dark mode
-   Custom configuration

Migrating from v3.x?

* * *

Install
-------

```
$ npm install tailwind-rn
```

Getting Started
---------------

Run the following command to automatically add `tailwind-rn` to your React Native project:

```
$ npx setup-tailwind-rn
```

It will do most of the setup for you, but you'll have to follow a few more instructions from `setup-tailwind-rn` to finish the process.

Manual setup

1.  Install `tailwind-rn`.

```
$ npm install tailwind-rn
```

1.  Install Tailwind and `concurrently`.

```
$ npm install --save-dev tailwindcss postcss concurrently
```

1.  Create Tailwind config and necessary files.

```
$ npx tailwindcss init
$ echo '@tailwind utilities;' > input.css
```

These commands will create the following files:

-   **tailwind.config.js** - Tailwind configuration file.
-   **input.css** - Entrypoint for Tailwind compiler. It's required to override the output of Tailwind, so that it doesn't generate CSS for resetting browser styles, which will cause `tailwind-rn` to fail.

Disable unsupported utilities by adding this line to your **tailwind.config.js**:

module.exports = {
+	corePlugins: require('tailwind-rn/unsupported-core-plugins')
};

Make sure to configure `content` part of the config in **tailwind.config.js** to point to your JavaScript files to speed up compilation.

1.  Add scripts to build Tailwind styles in package.json.

{
	"scripts": {
+		"build:tailwind": "tailwindcss --input input.css --output tailwind.css --no-autoprefixer && tailwind-rn",
+		"dev:tailwind": "concurrently \\"tailwindcss --input input.css --output tailwind.css --no-autoprefixer --watch\\" \\"tailwind-rn --watch\\""
	}
}

1.  Build Tailwind styles in watch mode.

```
$ npm run dev:tailwind
```

After styles are built, you'll see two more files:

-   **tailwind.css** - CSS generated by Tailwind.
-   **tailwind.json** - The same CSS, but converted into JSON, so that `tailwind-rn` can understand it.

1.  Import `TailwindProvider` and `tailwind.json` in the root of your app and wrap the root of your app with it:

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App \= () \=> (
	<TailwindProvider utilities\={utilities}\>
		<MyComponent />
	</TailwindProvider\>
);

export default App;

1.  Use Tailwind in React Native!

import {useTailwind} from 'tailwind-rn';

const MyComponent \= () \=> {
	const tailwind \= useTailwind();

	return <Text style\={tailwind('text-blue-600')}\>Hello world</Text\>;
};

Usage
-----

Use `useTailwind` React hook and apply any of the supported utilities from Tailwind in your React Native views.

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const Hello \= () \=> {
	const tailwind \= useTailwind();

	return (
		<SafeAreaView style\={tailwind('h-full')}\>
			<View style\={tailwind('pt-12 items-center')}\>
				<View style\={tailwind('bg-blue-200 px-3 py-1 rounded-full')}\>
					<Text style\={tailwind('text-blue-800 font-semibold')}\>
						Hello Tailwind
					</Text\>
				</View\>
			</View\>
		</SafeAreaView\>
	);
};

export default Hello;

`tailwind` function returns a simple object with styles, which can be used in any React Native view, such as `<View>`, `<Text>` and others.

tailwind('pt-12 items-center');
//=> {
//     paddingTop: 48,
//     alignItems: 'center'
//   }

CLI
---

```
$ tailwind-rn --help

  Use Tailwind CSS in React Native projects

  Usage
    $ tailwind-rn [options]

  Options
    -i, --input    Path to CSS file that Tailwind generates (default: tailwind.css)
    -o, --output   Output file (default: tailwind.json)
    -w, --watch    Watch for changes and rebuild as needed

```

Run `tailwind-rn` CLI to transform the CSS generated by Tailwind into a JSON file that can be consumed by `TailwindProvider`. Add `--watch` flag to watch for changes and build styles continuously, which is useful for development.

API
---

### TailwindProvider

#### utilities

Type: `object`

Parsed JSON object of styles generated by `tailwind-rn` CLI stored in `tailwind.json` by default.

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App \= () \=> (
	<TailwindProvider utilities\={utilities}\>
		<MyComponent />
	</TailwindProvider\>
);

#### colorScheme

Type: `string`

Override the default color scheme. Possible values are `light` or `dark`.

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App \= () \=> (
	<TailwindProvider utilities\={utilities} colorScheme\="dark"\>
		<MyComponent />
	</TailwindProvider\>
);

### useTailwind

React hook, which returns a `tailwind` function, that accepts a string with class names. This function returns an object of styles, which can be applied to a React Native view via `style` property.

**Note:** Add `TailwindProvider` above the component where you're using this hook.

import {useTailwind} from 'tailwind-rn';

const MyComponent \= () \=> {
	const tailwind \= useTailwind();

	return <Text style\={tailwind('text-blue-600')}\>Hello world</Text\>;
};

Supported Utilities
-------------------

### Modifiers

-   Responsive Breakpoints (all except multi-range breakpoints)
-   Dark Mode
-   Prefers Reduced Motion
-   Viewport Orientation

### Layout

-   Display (only `hidden` and `flex`)
-   Overflow (only `overflow-hidden`, `overflow-scroll` and `overflow-visible`)
-   Position (only `relative` and `absolute`)
-   Top / Right / Bottom / Left (all except `*-auto`)
-   Z-Index (all except `z-auto`)

### Flexbox

-   Flex Direction
-   Flex Wrap
-   Align Items
-   Align Content
-   Align Self
-   Justify Content
-   Flex
-   Flex Grow
-   Flex Shrink

### Spacing

-   Padding
-   Margin

### Sizing

-   Width (all except `w-auto` and `w-screen`)
-   Min-Width
-   Max-Width
-   Height (all except `h-auto` and `h-screen`)
-   Min-Height (all except `min-h-screen`)
-   Max-Height (only `max-h-full`)

### Typography

-   Font Family (only custom font families that you defined in `tailwind.config.js`)
-   Font Size
-   Font Style
-   Font Weight
-   Font Variant Numeric (only `oldstyle-nums`, `lining-nums`, `tabular-nums` and `proportional-nums`)
-   Letter Spacing (must be used with font size utilities, e.g. `text-lg`)
-   Line Height
-   Text Align
-   Text Color (all except `text-current`)
-   Text Decoration
-   Text Decoration Color
-   Text Decoration Style (all except `decoration-wavy`)
-   Text Transform

### Backgrounds

-   Background Color

### Borders

-   Border Color
-   Border Style (all except `border-current`)
-   Border Width
-   Border Radius

### Effects

-   Opacity

### Interactivity

-   Pointer Events