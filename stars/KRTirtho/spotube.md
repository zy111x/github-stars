---
project: spotube
stars: 33358
description: 🎧 Open source Spotify client that doesn't require Premium nor uses Electron! Available for both desktop & mobile!
url: https://github.com/KRTirtho/spotube
---

An open source, cross-platform Spotify client compatible across multiple platforms  
utilizing Spotify's data API and YouTube, Piped.video or JioSaavn as an audio source,  
eliminating the need for Spotify Premium

Btw it's not just another Electron app 😉

* * *

🌃 Features
-----------

-   🚫 No ads, thanks to the use of public & free Spotify and YT Music APIs¹
-   ⬇️ Freely downloadable tracks
-   🖥️ 📱 Cross-platform support
-   🪶 Small size & less data usage
-   🕵️ Anonymous/guest login
-   🕒 Time synced lyrics
-   ✋ No telemetry, diagnostics or user data collection
-   🚀 Native performance
-   📖 Open source/libre software
-   🔉 Playback control is done locally, not on the server

**¹** It is still **recommended** to support creators by engaging with their YouTube channels/Spotify tracks (or preferably by buying their merch/concert tickets/physical media).

### ❌ Unsupported features

-   🗣️ **Spotify Shows & Podcasts:** Shows and Podcasts will **never be supported** because the audio tracks are _only_ available on Spotify and accessing them would require Spotify Premium.
-   🎧 **Spotify Listen Along:** Coming soon!

📜 ⬇️ Installation guide
------------------------

New versions usually release every 3-4 months.  
This handy table lists all the methods you can use to install Spotube:

Platform

Package/Installation Method

Windows

MacOS

Android

  
  

iOS

  

> \*iPA file only. Requires sideloading with AltStore or similar tools.

Flatpak

`flatpak install com.github.KRTirtho.Spotube`

AppImage

AppImage's lacking stability led to it's temporal removal. More information at #1082

Debian/Ubuntu

Then run: `sudo apt install ./Spotube-linux-x86_64.deb`

Arch/Manjaro

With pamac: `sudo pamac install spotube-bin`

With yay: `yay -Sy spotube-bin`

Fedora/OpenSuse

For Fedora: `sudo dnf install ./Spotube-linux-x86_64.rpm`

For OpenSuse: `sudo zypper in ./Spotube-linux-x86_64.rpm`

Linux (tarball)

Macos - Homebrew

brew tap krtirtho/apps
brew install --cask spotube

Windows - Chocolatey

`choco install spotube`

Windows - Scoop

`scoop bucket add extras`

`scoop install spotube`

Windows - WinGet

`winget install --id KRTirtho.Spotube`

### 🔄 Nightly Builds

Grab the latest nightly builds of Spotube from the GitHub Releases.

🕳️ Building from source
------------------------

You can compile Spotube's source code by following these instructions.

👥 The Spotube team
-------------------

-   Kingkor Roy Tirtho - The Founder, Maintainer and Lead Developer
-   RaptaG - The GitHub Moderator and Community Manager
-   Owen Connor - The Cool Discord Moderator
-   Meenbeese - The Android Developer
-   Piotr Rogowski - The MacOS Developer
-   Rusty Apple - The Mysterious Unknown Guy

💼 License
----------

Spotube is open source and licensed under the BSD-4-Clause License.

If you are concerned, you can read the reason of choosing this license.

`[Click to show]` 🙏 Services/Package/Plugin Credits
----------------------------------------------------

### Services

1.  Flutter - Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase
2.  Spotify API - The Spotify Web API is a RESTful API that provides access to Spotify data
3.  Piped - Piped is a privacy friendly alternative YouTube frontend, which is efficient and scalable by design.
4.  YouTube - YouTube is an American online video-sharing platform headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005
5.  JioSaavn - JioSaavn is an Indian online music streaming service and a digital distributor of Bollywood, English and other regional Indian music across the world. Since it was founded in 2007 as Saavn, the company has acquired rights to over 5 crore (50 million) music tracks in 15 languages
6.  SongLink - SongLink is a free smart link service that helps you share music with your audience. It's a one-stop-shop for creating smart links for music, podcasts, and other audio content
7.  LRCLib - A public synced lyric API
8.  Linux - Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution
9.  AUR - AUR stands for Arch User Repository. It is a community-driven repository for Arch-based Linux distributions users
10.  Flatpak - Flatpak is a utility for software deployment and package management for Linux
11.  SponsorBlock - SponsorBlock is an open-source crowdsourced browser extension and open API for skipping sponsor segments in YouTube videos.
12.  Inno Setup - Inno Setup is a free installer for Windows programs by Jordan Russell and Martijn Laan
13.  F-Droid - F-Droid is an installable catalogue of FOSS (Free and Open Source Software) applications for the Android platform. The client makes it easy to browse, install, and keep track of updates on your device
14.  LastFM - Last.fm is a music streaming and discovery platform that helps users discover and share new music. It tracks users' music listening habits across many devices and platforms.

### Dependencies

1.  app\_links - Android App Links, Deep Links, iOs Universal Links and Custom URL schemes handler for Flutter (desktop included).
2.  args - Library for defining parsers for parsing raw command-line arguments into a set of options and values using GNU and POSIX style options.
3.  async - Utility functions and classes related to the 'dart:async' library.
4.  audio\_service - Flutter plugin to play audio in the background while the screen is off.
5.  audio\_service\_mpris - audio\_service platform interface supporting Media Player Remote Interfacing Specification.
6.  audio\_session - Sets the iOS audio session category and Android audio attributes for your app, and manages your app's audio focus, mixing and ducking behaviour.
7.  auto\_size\_text - Flutter widget that automatically resizes text to fit perfectly within its bounds.
8.  bonsoir - A Zeroconf library that allows you to discover network services and to broadcast your own. Based on Apple Bonjour and Android NSD.
9.  buttons\_tabbar - A Flutter package that implements a TabBar where each label is a toggle button.
10.  cached\_network\_image - Flutter library to load and cache network images. Can also be used with placeholder and error widgets.
11.  collection - Collections and utilities functions and classes related to collections.
12.  curved\_navigation\_bar - Stunning Animating Curved Shape Navigation Bar. Adjustable color, background color, animation curve, animation duration.
13.  device\_info\_plus - Flutter plugin providing detailed information about the device (make, model, etc.), and Android or iOS version the app is running on.
14.  dio - A powerful HTTP networking package,supports Interceptors,Aborting and canceling a request,Custom adapters, Transformers, etc.
15.  disable\_battery\_optimization - Flutter plugin to check and disable battery optimizations. Also shows custom steps to disable the optimizations in devices like mi, xiaomi, samsung, oppo, huawei, oneplus etc
16.  drift - Drift is a reactive library to store relational data in Dart and Flutter applications.
17.  duration - Utilities to make working with 'Duration's easier. Formats duration in human readable form and also parses duration in human readable form to Dart's Duration.
18.  encrypt - A set of high-level APIs over PointyCastle for two-way cryptography.
19.  envied - Explicitly reads environment variables into a dart file from a .env file for more security and faster start up times.
20.  file\_picker - A package that allows you to use a native file explorer to pick single or multiple absolute file paths, with extension filtering support.
21.  file\_selector - Flutter plugin for opening and saving files, or selecting directories, using native file selection UI.
22.  fluentui\_system\_icons - Fluent UI System Icons are a collection of familiar, friendly and modern icons from Microsoft.
23.  flutter\_broadcasts - A plugin for sending and receiving broadcasts with Android intents and iOS notifications.
24.  flutter\_cache\_manager - Generic cache manager for flutter. Saves web files on the storages of the device and saves the cache info using sqflite.
25.  flutter\_discord\_rpc - Discord RPC support for Flutter desktop platforms
26.  flutter\_displaymode - A Flutter plugin to set display mode (resolution, refresh rate) on Android platform. Allows to enable high refresh rate on supported devices.
27.  flutter\_feather\_icons - Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and usability.
28.  flutter\_hooks - A flutter implementation of React hooks. It adds a new kind of widget with enhanced code reuse.
29.  flutter\_inappwebview - A Flutter plugin that allows you to add an inline webview, to use an headless webview, and to open an in-app browser window.
30.  flutter\_native\_splash - Customize Flutter's default white native splash screen with background color and splash image. Supports dark mode, full screen, and more.
31.  flutter\_riverpod - A reactive caching and data-binding framework. Riverpod makes working with asynchronous code a breeze.
32.  flutter\_secure\_storage - Flutter Secure Storage provides API to store data in secure storage. Keychain is used in iOS, KeyStore based solution is used in Android.
33.  flutter\_sharing\_intent - A flutter plugin that allow flutter apps to receive photos, videos, text, urls or any other file types from another app.
34.  flutter\_svg - An SVG rendering and widget library for Flutter, which allows painting and displaying Scalable Vector Graphics 1.1 files.
35.  form\_validator - Simplest form validation library for flutter's form field widgets
36.  freezed\_annotation - Annotations for the freezed code-generator. This package does nothing without freezed too.
37.  fuzzywuzzy - An implementation of the popular fuzzywuzzy package in Dart, to suit all your fuzzy string matching/searching needs!
38.  gap - Flutter widgets for easily adding gaps inside Flex widgets such as Columns and Rows or scrolling views.
39.  go\_router - A declarative router for Flutter based on Navigation 2 supporting deep linking, data-driven routes and more
40.  google\_fonts - A Flutter package to use fonts from fonts.google.com. Supports HTTP fetching, caching, and asset bundling.
41.  hive - Lightweight and blazing fast key-value database written in pure Dart. Strongly encrypted using AES-256.
42.  hive\_flutter - Extension for Hive. Makes it easier to use Hive in Flutter apps.
43.  hooks\_riverpod - A reactive caching and data-binding framework. Riverpod makes working with asynchronous code a breeze.
44.  html - APIs for parsing and manipulating HTML content outside the browser.
45.  html\_unescape - A small library for un-escaping HTML. Supports all Named Character References, Decimal Character References and Hexadecimal Character References.
46.  http - A composable, multi-platform, Future-based API for HTTP requests.
47.  image\_picker - Flutter plugin for selecting images from the Android and iOS image library, and taking new pictures with the camera.
48.  intl - Contains code to deal with internationalized/localized messages, date and number formatting and parsing, bi-directional text, and other internationalization issues.
49.  invidious - Invidious API client for Dart and Flutter.
50.  jiosaavn - Unofficial API client for jiosaavn.com
51.  json\_annotation - Classes and helper functions that support JSON code generation via the `json_serializable` package.
52.  local\_notifier - This plugin allows Flutter desktop apps to displaying local notifications.
53.  logger - Small, easy to use and extensible logger which prints beautiful logs.
54.  lrc - A Dart-only package that creates, parses, and handles LRC, which is a format that stores song lyrics.
55.  media\_kit - A cross-platform video player & audio player for Flutter & Dart. Performant, stable, feature-proof & modular.
56.  media\_kit\_libs\_audio - package:media\_kit audio (only) playback native libraries for all platforms.
57.  metadata\_god - Plugin for retrieving and writing audio tags/metadata from audio files
58.  mime - Utilities for handling media (MIME) types, including determining a type from a file extension and file contents.
59.  open\_file - A plug-in that can call native APP to open files with string result in flutter, support iOS(UTI) / android(intent) / PC(ffi) / web(dart:html)
60.  package\_info\_plus - Flutter plugin for querying information about the application package, such as CFBundleVersion on iOS or versionCode on Android.
61.  palette\_generator - Flutter package for generating palette colors from a source image.
62.  path - A string-based path manipulation library. All of the path operations you know and love, with solid support for Windows, POSIX (Linux and Mac OS X), and the web.
63.  path\_provider - Flutter plugin for getting commonly used locations on host platform file systems, such as the temp and app data directories.
64.  permission\_handler - Permission plugin for Flutter. This plugin provides a cross-platform (iOS, Android) API to request and check permissions.
65.  piped\_client - API Client for piped.video
66.  popover - A popover is a transient view that appears above other content onscreen when you tap a control or in an area.
67.  riverpod - A reactive caching and data-binding framework. Riverpod makes working with asynchronous code a breeze.
68.  scroll\_to\_index - Scroll to a specific child of any scrollable widget in Flutter
69.  shared\_preferences - Flutter plugin for reading and writing simple key-value pairs. Wraps NSUserDefaults on iOS and SharedPreferences on Android.
70.  shelf - A model for web server middleware that encourages composition and easy reuse.
71.  shelf\_router - A convenient request router for the shelf web-framework, with support for URL-parameters, nested routers and routers generated from source annotations.
72.  shelf\_web\_socket - A shelf handler that wires up a listener for every connection.
73.  sidebarx - flutter multiplatform navigation sidebar / side navigationbar / drawer widget
74.  simple\_icons - The Simple Icon pack available as Flutter Icons. Provides over 1500 Free SVG icons for popular brands.
75.  skeletonizer - Converts already built widgets into skeleton loaders with no extra effort.
76.  sliver\_tools - A set of useful sliver tools that are missing from the flutter framework
77.  smtc\_windows - Windows `SystemMediaTransportControls` implementation for Flutter giving access to Windows OS Media Control applet.
78.  spotify - An incomplete dart library for interfacing with the Spotify Web API.
79.  sqlite3 - Provides lightweight yet convenient bindings to SQLite by using dart:ffi
80.  sqlite3\_flutter\_libs - Flutter plugin to include native sqlite3 libraries with your app
81.  stroke\_text - A Simple Flutter plugin for applying stroke (border) style to a text widget
82.  system\_theme - A plugin to get the current system theme info. Supports Android, Web, Windows, Linux and macOS
83.  test - A full featured library for writing and running Dart tests across platforms.
84.  timezone - Time zone database and time zone aware DateTime.
85.  titlebar\_buttons - A package which provides most of the titlebar buttons from windows, linux and macos.
86.  tray\_manager - This plugin allows Flutter desktop apps to defines system tray.
87.  url\_launcher - Flutter plugin for launching a URL. Supports web, phone, SMS, and email schemes.
88.  uuid - RFC4122 (v1, v4, v5, v6, v7, v8) UUID Generator and Parser for Dart
89.  version - Provides a simple class for parsing and comparing semantic versions as defined by http://semver.org/
90.  very\_good\_infinite\_list - A library for easily displaying paginated data, created by Very Good Ventures. Great for activity feeds, news feeds, and more.
91.  visibility\_detector - A widget that detects the visibility of its child and notifies a callback.
92.  web\_socket\_channel - StreamChannel wrappers for WebSockets. Provides a cross-platform WebSocketChannel API, a cross-platform implementation of that API that communicates over an underlying StreamChannel.
93.  wikipedia\_api - Wikipedia API for dart and flutter
94.  win32\_registry - A package that provides a friendly Dart API for accessing the Windows Registry.
95.  window\_manager - This plugin allows Flutter desktop apps to resizing and repositioning the window.
96.  youtube\_explode\_dart - A port in dart of the youtube explode library. Supports several API functions without the need of Youtube API Key.
97.  build\_runner - A build system for Dart code generation and modular compilation.
98.  crypto - Implementations of SHA, MD5, and HMAC cryptographic functions.
99.  envied\_generator - Generator for the Envied package. See https://pub.dev/packages/envied.
100.  flutter\_gen\_runner - The Flutter code generator for your assets, fonts, colors, … — Get rid of all String-based APIs.
101.  flutter\_launcher\_icons - A package which simplifies the task of updating your Flutter app's launcher icon.
102.  flutter\_lints - Recommended lints for Flutter apps, packages, and plugins to encourage good coding practices.
103.  hive\_generator - Extension for Hive. Automatically generates TypeAdapters to store any class.
104.  json\_serializable - Automatically generate code for converting to and from JSON by annotating Dart classes.
105.  freezed - Code generation for immutable classes that has a simple syntax/API without compromising on the features.
106.  custom\_lint - Lint rules are a powerful way to improve the maintainability of a project. Custom Lint allows package authors and developers to easily write custom lint rules.
107.  riverpod\_lint - Riverpod\_lint is a developer tool for users of Riverpod, designed to help stop common issues and simplify repetitive tasks.
108.  process\_run - Process run helpers for Linux/Win/Mac and which like feature for finding executables.
109.  pubspec\_parse - Simple package for parsing pubspec.yaml files with a type-safe API and rich error reporting.
110.  pub\_api\_client - An API Client for Pub to interact with public package information.
111.  xml - A lightweight library for parsing, traversing, querying, transforming and building XML documents.
112.  io - Utilities for the Dart VM Runtime including support for ANSI colors, file copying, and standard exit code values.
113.  drift\_dev - Dev-dependency for users of drift. Contains the generator and development tools.
114.  desktop\_webview\_window - Show a webview window on your flutter desktop application.
115.  draggable\_scrollbar - A scrollbar that can be dragged for quickly navigation through a vertical list. Additional option is showing label next to scrollthumb with information about current item.
116.  scrobblenaut - A deadly simple LastFM API Wrapper for Dart. So deadly simple that it's gonna hit the mark.

#### © Copyright Spotube 2024
