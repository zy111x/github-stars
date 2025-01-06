---
project: tinykeys
stars: 3819
description: A tiny (~650 B) & modern library for keybindings.
url: https://github.com/jamiebuilds/tinykeys
---

`tinykeys`
==========

> A tiny (~650 B) & modern library for keybindings. See Demo

Install
-------

npm install --save tinykeys

Or for a CDN version, you can use it on unpkg.com

Usage
-----

import { tinykeys } from "tinykeys" // Or \`window.tinykeys\` using the CDN version

tinykeys(window, {
  "Shift+D": () \=> {
    alert("The 'Shift' and 'd' keys were pressed at the same time")
  },
  "y e e t": () \=> {
    alert("The keys 'y', 'e', 'e', and 't' were pressed in order")
  },
  "$mod+(\[0-9\])": event \=> {
    event.preventDefault()
    alert(\`Either 'Control+${event.key}' or 'Meta+${event.key}' were pressed\`)
  },
})

Alternatively, if you want to only create the keybinding handler, and register it as an event listener yourself:

import { createKeybindingsHandler } from "tinykeys"

let handler \= createKeybindingsHandler({
  "Shift+D": () \=> {
    alert("The 'Shift' and 'd' keys were pressed at the same time")
  },
  "y e e t": () \=> {
    alert("The keys 'y', 'e', 'e', and 't' were pressed in order")
  },
  "$mod+KeyD": event \=> {
    event.preventDefault()
    alert("Either 'Control+d' or 'Meta+d' were pressed")
  },
})

window.addEventListener("keydown", handler)

### React Hooks Example

If you're using tinykeys within a component, you should also make use of the returned `unsubscribe()` function.

import { useEffect } from "react"
import { tinykeys } from "tinykeys"

function useKeyboardShortcuts() {
  useEffect(() \=> {
    let unsubscribe \= tinykeys(window, {
      // ...
    })
    return () \=> {
      unsubscribe()
    }
  })
}

Commonly used `key`'s and `code`'s
----------------------------------

Keybindings will be matched against `KeyboardEvent.key` and`KeyboardEvent.code` which may have some names you don't expect.

Windows

macOS

`key`

`code`

N/A

`Command` / `⌘`

`Meta`

`MetaLeft` / `MetaRight`

`Alt`

`Option` / `⌥`

`Alt`

`AltLeft` / `AltRight`

`Control`

`Control` / `^`

`Control`

`ControlLeft` / `ControlRight`

`Shift`

`Shift`

`Shift`

`ShiftLeft` / `ShiftRight`

`Space`

`Space`

N/A

`Space`

`Enter`

`Return`

`Enter`

`Enter`

`Esc`

`Esc`

`Escape`

`Escape`

`1`, `2`, etc

`1`, `2`, etc

`1`, `2`, etc

`Digit1`, `Digit2`, etc

`a`, `b`, etc

`a`, `b`, etc

`a`, `b`, etc

`KeyA`, `KeyB`, etc

`-`

`-`

`-`

`Minus`

`=`

`=`

`=`

`Equal`

`+`

`+`

`+`

`Equal`\*

Something missing? Check out the key logger on the demo website

> _\* Some keys will have the same code as others because they appear on the same key on the keyboard. Keep in mind how this is affected by international keyboards which may have different layouts._

Key aliases
-----------

In some instances, tinykeys will alias keys depending on the platform to simplify cross-platform keybindings on international keyboards.

### `AltGraph` (modifier)

On Windows, on many non-US standard keyboard layouts, there is a key named `Alt Gr` or `AltGraph` in the browser, in some browsers, pressing `Control+Alt` will report `AltGraph` as being pressed instead.

Similarly on macOS, the `Alt` (`Option`) key will sometimes be reported as the `AltGraph` key.

**Note:** The purpose of the `Alt Gr` key is to type "Alternate Graphics" so you will often want to use the `event.code` (`KeyS`) for letters instead of `event.key` (`S`)

tinykeys(window, {
  "Control+Alt+KeyS": event \=> {
    // macOS: \`Control+Alt+S\` or \`Control+AltGraph+S\`
    // Windows: \`Control+Alt+S\` or \`Control+AltGraph+S\` or \`AltGraph+S\`
  },
  "$mod+Alt+KeyS": event \=> {
    // macOS: \`Meta+Alt+S\` or \`Meta+AltGraph+S\`
    // Windows: \`Control+Alt+S\` or \`Control+AltGraph+S\` or \`AltGraph+S\`
  },
})

Keybinding Syntax
-----------------

Keybindings are made up of a **_sequence_** of **_presses_**.

A **_press_** can be as simple as a single **_key_** which matches against `KeyboardEvent.code` and `KeyboardEvent.key` (case-insensitive).

// Matches \`event.key\`:
"d"
// Matches: \`event.code\`:
"KeyD"

Presses can optionally be prefixed with **_modifiers_** which match against any valid value to `KeyboardEvent.getModifierState()`.

"Control+d"
"Meta+d"
"Shift+D"
"Alt+KeyD"
"Meta+Shift+D"

There is also a special `$mod` modifier that makes it easy to support cross platform keybindings:

-   Mac: `$mod` = `Meta` (⌘)
-   Windows/Linux: `$mod` = `Control`

"$mod+D" // Meta/Control+D
"$mod+Shift+D" // Meta/Control+Shift+D

Alternatively, you can use parenthesis to use case-sensitive regular expressions to match multiple keys.

"$mod+(\[0-9\])" // $mod+0, $mod+1, $mod+2, etc...
// equivalent regex: /^\[0-9\]$/

### Keybinding Sequences

Keybindings can also consist of several key presses in a row:

"g i" // i.e. "Go to Inbox"
"g a" // i.e. "Go to Archive"
"ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight B A"

Each press can optionally be prefixed with modifier keys:

"$mod+K $mod+1" // i.e. "Toggle Level 1"
"$mod+K $mod+2" // i.e. "Toggle Level 2"
"$mod+K $mod+3" // i.e. "Toggle Level 3"

Each press in the sequence must be pressed within 1000ms of the last.

### Display the keyboard sequence

You can use the `parseKeybinding` method to get a structured representation of a keyboard shortcut. It can be useful when you want to display it in a fancier way than a plain string.

import { parseKeybinding } from "tinykeys"

let parsedShortcut \= parseKeybinding("$mod+Shift+K $mod+1")

Results into:

\[
  \[\["Meta", "Shift"\], "K"\],
  \[\["Meta"\], "1"\],
\]

Additional Configuration Options
--------------------------------

You can configure the behavior of tinykeys in a couple ways using a third `options` parameter.

tinykeys(
  window,
  {
    M: toggleMute,
  },
  {
    event: "keyup",
    capture: true,
  },
)

### `options.event`

Valid values: `"keydown"`, `"keyup"`

Key presses will listen to this event (default: `"keydown"`).

> **Note:** Do not pass `"keypress"`, it is deprecated in browsers.

### `options.timeout`

Keybinding sequences will wait this long between key presses before cancelling (default: `1000`).

> **Note:** Setting this value too low (i.e. `300`) will be too fast for many of your users.
