---
project: synesthesia
stars: 22
description: |-
    null
url: https://github.com/panphora/synesthesia
---

# Synesthesia

> **Note:** The core code of this library was extracted from [https://github.com/panphora/overtype](https://github.com/panphora/overtype)

A lightweight, pluggable syntax-highlighting editor with perfect WYSIWYG alignment using a transparent textarea overlay.

## Features

- 🔌 **Pluggable Parser Architecture** - Easy to add new language support
- 🎯 **Prism.js Integration** - Built-in support for Prism.js syntax highlighting
- 🎨 **Advanced Theme System** - CSS variable-based with built-in themes  
- 📦 **Multiple Build Formats** - ESM, CJS, and IIFE
- ✨ **Perfect Alignment** - Transparent textarea overlay
- 🔍 **TypeScript Support** - Full type definitions included
- 🧪 **Well Tested** - Comprehensive test suite
- 📐 **Zero Dependencies** - Lightweight with no external dependencies

## Quick Start

### Installation

```bash
npm install synesthesia-editor
```

### Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 8090)
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

The dev server runs on **port 8090** and includes:
- Live reload with watch mode
- Demo pages at http://localhost:8090
- Example implementations

### CDN Usage

```html
<script src="https://unpkg.com/synesthesia-editor/dist/synesthesia.min.js"></script>
```

## Usage

### Basic Example

```javascript
import Synesthesia from 'synesthesia-editor';

// Initialize editor
const [editor] = new Synesthesia('#editor', {
  theme: 'solar',
  language: 'javascript',
  fontSize: '14px',
  autoResize: true
});

// API methods
editor.setValue('const hello = "world";');
const content = editor.getValue();
editor.setLanguage('python');
```

### Custom Parser

```javascript
// Create a custom parser
class MyParser extends Synesthesia.Parser {
  static get metadata() {
    return {
      name: 'My Language',
      languages: ['mylang'],
      fileExtensions: ['ml']
    };
  }
  
  parse(text) {
    // Your parsing logic
    let html = this.constructor.escapeHtml(text);
    // Apply syntax highlighting...
    return html;
  }
}

// Register the parser
Synesthesia.parserRegistry.register('mylang', MyParser);
```

### Complete Example with Prism.js

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" rel="stylesheet" />
</head>
<body>
  <div id="editor"></div>

  <!-- Include Prism.js core and language components -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
  <script src="./dist/synesthesia.min.js"></script>

  <script>
    const [editor] = new Synesthesia('#editor', {
      parser: (code) => {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
      }
    });
  </script>
</body>
</html>
```

### Language Support Examples

Synesthesia with Prism.js supports highlighting for many languages including:
- **HTML/XML** - Markup languages
- **CSS** - Stylesheets with media queries and selectors
- **JavaScript** - ES6+, JSX, TypeScript
- **Python** - Classes, async/await, type hints
- **Java** - Generics, streams, lambdas
- **Go** - Goroutines, channels, interfaces

See the [live demo](http://localhost:8090) for interactive examples of each language.

## API Reference

### Constructor

```javascript
new Synesthesia(target, options)
```

**Parameters:**
- `target` - CSS selector string, Element, NodeList, or Array of elements
- `options` - Configuration object

**Options:**
- `language` (string) - Language for syntax highlighting (default: 'plaintext')
- `parser` (function|Parser) - Custom parser function or Parser instance. Can be a function that takes code and returns HTML
- `theme` (string|Theme) - Theme name or theme object (default: 'solar')
- `fontSize` (string) - Font size (default: '14px')
- `lineHeight` (number|string) - Line height (default: 1.6)
- `fontFamily` (string) - Font family
- `padding` (string) - Editor padding (default: '16px')
- `autoResize` (boolean) - Auto-resize to content
- `minHeight` (string) - Minimum height when autoResize is enabled (default: '48px')
- `maxHeight` (string) - Maximum height when autoResize is enabled
- `placeholder` (string) - Placeholder text
- `value` (string) - Initial value
- `onChange` (function) - Change callback
- `onKeydown` (function) - Keydown callback

### Instance Methods

- `getValue()` - Get current editor content
- `setValue(text)` - Set editor content
- `setLanguage(language)` - Change syntax highlighting language
- `setParser(parser)` - Set custom parser
- `focus()` - Focus the editor
- `blur()` - Blur the editor
- `destroy()` - Destroy the instance
- `reinit(options)` - Reinitialize with new options

### Static Methods

- `Synesthesia.init(target, options)` - Initialize instances
- `Synesthesia.getInstance(element)` - Get instance from element
- `Synesthesia.destroyAll()` - Destroy all instances
- `Synesthesia.setTheme(theme)` - Set global theme
- `Synesthesia.createTheme(name, colors)` - Create custom theme

### Parser Registry

```javascript
// Access the global registry
const registry = Synesthesia.parserRegistry;

// Register a parser
registry.register(id, ParserClass);

// Get parser by language
const parser = registry.getByLanguage('javascript');

// Get parser by file extension
const parser = registry.getByExtension('.js');

// List all parsers
const parsers = registry.list();
```

## Parsers

### Built-in Parsers
- **PlainText** - Basic HTML escaping
- **JavaScript** - JavaScript/JSX syntax highlighting

### Using Parser Functions
You can pass a custom parser function directly in the options:

```javascript
const editor = new Synesthesia('#editor', {
  parser: (code) => {
    // Your custom parsing logic
    return highlightedHtml;
  }
});
```

### Prism.js Integration (Recommended)
Synesthesia works seamlessly with Prism.js for extensive language support:

```javascript
const editor = new Synesthesia('#editor', {
  parser: (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});
```

## Themes

Built-in themes:
- `solar` - Light theme
- `cave` - Dark theme

Create custom themes:
```javascript
const myTheme = Synesthesia.createTheme('myTheme', {
  'bg-primary': '#ffffff',
  'text': '#000000',
  'syn-keyword': '#0000ff',
  'syn-string': '#008000',
  // ... more colors
});

Synesthesia.setTheme(myTheme);
```

## Development Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build all distribution formats
- `npm run watch` - Watch and rebuild on changes
- `npm test` - Run test suite
- `npm run serve` - Start HTTP server only

## Browser Support

Modern browsers with ES2020 support.

## License

MIT

## Credits

Synesthesia is the extracted core of the [OverType](https://github.com/panphora/overtype) markdown editor, focused on providing a general-purpose syntax highlighting engine.
