---
project: afterglow-theme
stars: 2112
description: [DEPRECATED] A minimal dark Theme for Sublime Text 2 and 3
---

DEPRECATED
==========

Afterglow is a minimal dark Theme for Sublime Text 2 and 3. Also it is a syntax color scheme. The theme is based on the great theme Spacegray. The syntax color scheme is mostly derived from idlefingers.

**Special thanks** to Max Riveiro @kavu for add a lot of icons for sidebar to this repository.

Design & Colors
---------------

#### Afterglow default

View a larger screenshot

#### Afterglow blue

View a larger screenshot

#### Afterglow magenta

View a larger screenshot

#### Afterglow orange

View a larger screenshot

#### Afterglow green

View a larger screenshot

_The font used in the screenshots is **Inconsolata -g**._

Installation
------------

### Package Control

The easiest way to install is using Sublime Package Control.

-   Open `Command Palette` using menu item `Tools -> Command Palette...`, or `Cmd+Shift+P` (OS X) `Ctrl+Shift+P` (Win/Linux)
-   Type `Package Control: Install Package`
-   Search `Theme - Afterglow`

### Git Installation

Locate your Sublime Text `Packages directory` by using the menu item `Preferences -> Browse Packages...`.

Then, clone the repository using this command:

```
git clone https://github.com/Yabatadesign/afterglow-theme/ "Theme - Afterglow"
```

### Manual installation

-   Download the .zip package from GitHub.
-   Unzip the files and rename the folder to `Theme - Afterglow`
-   Find your `Packages` directory using the menu item `Preferences -> Browse Packages...`
-   Copy the folder into your Sublime Text `Packages` directory.

Activating the Theme
--------------------

Activate this theme and color scheme by modifying your user preferences file, which you can find using the menu item `Sublime Text -> Preferences -> Settings - User`.

Then add the following code settings, depending on the theme you choose. **(After activating the theme, you must restart Sublime Text.)**

### Settings for Afterglow

{
    "theme": "Afterglow.sublime-theme",
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
}

### Settings for Afterglow-blue

{
    "theme": "Afterglow-blue.sublime-theme",
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
}

### Settings for Afterglow-magenta

{
    "theme": "Afterglow-magenta.sublime-theme",
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
}

### Settings for Afterglow-orange

{
    "theme": "Afterglow-orange.sublime-theme",
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
}

### Settings for Afterglow-green

{
    "theme": "Afterglow-green.sublime-theme",
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow.tmTheme"
}

Configuration
-------------

### Sidebar icons

**New:** Now Afterglow theme support sidebar icons.

Don't like the icons? Just add this to your preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "sidebar\_no\_icon": true
}

Don't like the folder icon? Just add this to your preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "folder\_no\_icon": true
}

### Tab Height Size Options

You can change the height of the file tabs (medium or small) by adding either to your preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "tabs\_medium": true
}

or

{
    "tabs\_small": true
}

### Sidebar Size Options

You can change the font size of the sidebar and the row padding.

#### Sidebar font size

To **change the font size** (12, 13 or 14; default size is 11), you must add this to your preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "sidebar\_size\_12": true
}

or

{
    "sidebar\_size\_13": true
}

or

{
    "sidebar\_size\_14": true
}

#### Sidebar row padding size

To **change the row padding** (medium or large), you must add this to your preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "sidebar\_row\_padding\_medium": true
}

or

{
    "sidebar\_row\_padding\_large": true
}

### Statusbar font size

To **change the font size** (12, 13 or 14; default size is 11), you must add this to your preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "statusbar\_size\_12": true
}

or

{
    "statusbar\_size\_13": true
}

or

{
    "statusbar\_size\_14": true
}

### Status bar brighter

If you prefer that the status bar has a brighter color, you have to add this in your user preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "status\_bar\_brighter": true
}

### Color inactive tabs

You can highlight the color of inactive tabs, adding this to the user preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "color\_inactive\_tabs": true
}

### Horizontal padding tabs

Through the user preferences file, you can modify the horizontal padding of tabs. It works on all three types of height tabs (default, "tabs\_medium" and "tabs\_small").

You must add this to your user preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "tabs\_padding\_medium": true
}

or

{
    "tabs\_padding\_small": true
}

### Non-italic tab labels on Windows

On Windows, tab labels are displayed in _italic_ font. If you don't like that, you can add this to the user preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "tabs\_label\_not\_italic": true
}

Color schemes
-------------

### Afterglow - Monokai

Besides color scheme by default, you can use the color scheme `Afterglow - Monokai` based on the original `Monokai`, slightly modified to be consistent with the Theme colors.

You must add this in your user preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow-monokai.tmTheme"
}

### Afterglow - Twilight

If you prefer, you can use the color scheme `Afterglow - Twilight` (very slightly modified from the original), adding this to the user preferences file `Sublime Text -> Preferences -> Settings - User`:

{
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow-twilight.tmTheme"
}

### Markdown

**NEW:** This color scheme support **Github Flavored Markdown**.

#### To enable Afterglow for Markdown

(I highly recommend installing Sublime Markdown Extending plugin.)

First, **open a markdown(.md) file**, then navigate to `Sublime Text -> Preferences -> Settings - More -> Syntax Specific - User` in the menu bar.

Add to your current settings or replace with the following:

{
    "color\_scheme": "Packages/Theme - Afterglow/Afterglow-markdown.tmTheme",
    "draw\_centered": true,
    "draw\_indent\_guides": false,
    "trim\_trailing\_white\_space\_on\_save": false,
    "word\_wrap": true,
    "wrap\_width": 80  // Sets the # of characters per line
}

Dock Icon
---------

You can also download a replacement icon for Sublime Text here.

Retina Resolution UI
--------------------

Afterglow Theme support retina display.
