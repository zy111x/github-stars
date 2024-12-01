---
project: xterm.js
stars: 17789
description: A terminal for the web
---

Xterm.js is a front-end component written in TypeScript that lets applications bring fully-featured terminals to their users in the browser. It's used by popular projects such as VS Code, Hyper and Theia.

Features
--------

-   **Terminal apps just work**: Xterm.js works with most terminal apps such as `bash`, `vim`, and `tmux`, including support for curses-based apps and mouse events.
-   **Performant**: Xterm.js is _really_ fast, it even includes a GPU-accelerated renderer.
-   **Rich Unicode support**: Supports CJK, emojis, and IMEs.
-   **Self-contained**: Requires zero dependencies to work.
-   **Accessible**: Screen reader and minimum contrast ratio support can be turned on.
-   **And much more**: Links, theming, addons, well documented API, etc.

What xterm.js is not
--------------------

-   Xterm.js is not a terminal application that you can download and use on your computer.
-   Xterm.js is not `bash`. Xterm.js can be connected to processes like `bash` and let you interact with them (provide input, receive output).

Getting Started
---------------

First, you need to install the module, we ship exclusively through npm, so you need that installed and then add xterm.js as a dependency by running:

npm install @xterm/xterm

To start using xterm.js on your browser, add the `xterm.js` and `xterm.css` to the head of your HTML page. Then create a `<div id="terminal"></div>` onto which xterm can attach itself. Finally, instantiate the `Terminal` object and then call the `open` function with the DOM object of the `div`.

<!doctype html\>
  <html\>
    <head\>
      <link rel\="stylesheet" href\="node\_modules/@xterm/xterm/css/xterm.css" />
      <script src\="node\_modules/@xterm/xterm/lib/xterm.js"\></script\>
    </head\>
    <body\>
      <div id\="terminal"\></div\>
      <script\>
        var term \= new Terminal();
        term.open(document.getElementById('terminal'));
        term.write('Hello from \\x1B\[1;3;31mxterm.js\\x1B\[0m $ ')
      </script\>
    </body\>
  </html\>

### Importing

The recommended way to load xterm.js is via the ES6 module syntax:

import { Terminal } from '@xterm/xterm';

### Addons

⚠️ _This section describes the new addon format introduced in v3.14.0, see here for the instructions on the old format_

Addons are separate modules that extend the `Terminal` by building on the xterm.js API. To use an addon, you first need to install it in your project:

npm i -S @xterm/addon-web-links

Then import the addon, instantiate it and call `Terminal.loadAddon`:

import { Terminal } from '@xterm/xterm';
import { WebLinksAddon } from '@xterm/addon-web-links';

const terminal \= new Terminal();
// Load WebLinksAddon on terminal, this is all that's needed to get web links
// working in the terminal.
terminal.loadAddon(new WebLinksAddon());

The xterm.js team maintains the following addons, but anyone can build them:

-   `@xterm/addon-attach`: Attaches to a server running a process via a websocket
-   `@xterm/addon-clipboard`: Access the browser's clipboard
-   `@xterm/addon-fit`: Fits the terminal to the containing element
-   `@xterm/addon-image`: Adds image support
-   `@xterm/addon-search`: Adds search functionality
-   `@xterm/addon-serialize`: Serializes the terminal's buffer to a VT sequences or HTML
-   `@xterm/addon-unicode11`: Updates character widths to their unicode11 values
-   `@xterm/addon-web-links`: Adds web link detection and interaction
-   `@xterm/addon-webgl`: Renders xterm.js using a `canvas` element's webgl2 context

Browser Support
---------------

Since xterm.js is typically implemented as a developer tool, only modern browsers are supported officially. Specifically the latest versions of _Chrome_, _Edge_, _Firefox_, and _Safari_.

Xterm.js works seamlessly in Electron apps and may even work on earlier versions of the browsers. These are the versions we strive to keep working.

### Node.js Support

We also publish `xterm-headless` which is a stripped down version of xterm.js that runs in Node.js. An example use case for this is to keep track of a terminal's state where the process is running and using the serialize addon so it can get all state restored upon reconnection.

API
---

The full API for xterm.js is contained within the TypeScript declaration file, use the branch/tag picker in GitHub (`w`) to navigate to the correct version of the API.

Note that some APIs are marked _experimental_, these are added to enable experimentation with new ideas without committing to support it like a normal semver API. Note that these APIs can change radically between versions, so be sure to read release notes if you plan on using experimental APIs.

Releases
--------

Xterm.js follows a monthly release cycle roughly.

All current and past releases are available on this repo's Releases page, you can view the high-level roadmap on the wiki and see what we're working on now by looking through Milestones.

### Beta builds

Our CI releases beta builds to npm for every change that goes into master. Install the latest beta build with:

npm install -S @xterm/xterm@beta

These should generally be stable, but some bugs may slip in. We recommend using the beta build primarily to test out new features and to verify bug fixes.

Contributing
------------

You can read the guide on the wiki to learn how to contribute and set up xterm.js for development.

Real-world uses
---------------

Xterm.js is used in several world-class applications to provide great terminal experiences.

-   **SourceLair**: In-browser IDE that provides its users with fully-featured Linux terminals based on xterm.js.
-   **Microsoft Visual Studio Code**: Modern, versatile, and powerful open source code editor that provides an integrated terminal based on xterm.js.
-   **ttyd**: A command-line tool for sharing terminal over the web, with fully-featured terminal emulation based on xterm.js.
-   **Eclipse Che**: Developer workspace server, cloud IDE, and Eclipse next-generation IDE.
-   **Codenvy**: Cloud workspaces for development teams.
-   **CoderPad**: Online interviewing platform for programmers. Run code in many programming languages, with results displayed by xterm.js.
-   **WebSSH2**: A web based SSH2 client using xterm.js, socket.io, and ssh2.
-   **Spyder Terminal**: A full fledged system terminal embedded on Spyder IDE.
-   **Cloud Commander**: Orthodox web file manager with console and editor.
-   **Next Tech**: Online platform for interactive coding and web development courses. Live container-backed terminal uses xterm.js.
-   **RStudio**: RStudio is an integrated development environment (IDE) for R.
-   **Terminal for Atom**: A simple terminal for the Atom text editor.
-   **Eclipse Orion**: A modern, open source software development environment that runs in the cloud. Code, deploy, and run in the cloud.
-   **Gravitational Teleport**: Gravitational Teleport is a modern SSH server for remotely accessing clusters of Linux servers via SSH or HTTPS.
-   **Hexlet**: Practical programming courses (JavaScript, PHP, Unix, databases, functional programming). A steady path from the first line of code to the first job.
-   **Selenoid UI**: Simple UI for the scalable golang implementation of Selenium Hub named Selenoid. We use XTerm for streaming logs over websockets from docker containers.
-   **Portainer**: Simple management UI for Docker.
-   **SSHy**: HTML5 Based SSHv2 Web Client with E2E encryption utilising xterm.js, SJCL & websockets.
-   **JupyterLab**: An extensible computational environment for Jupyter, supporting interactive data science and scientific computing across all programming languages.
-   **Theia**: Theia is a cloud & desktop IDE framework implemented in TypeScript.
-   **Opshell** Ops Helper tool to make life easier working with AWS instances across multiple organizations.
-   **Proxmox VE**: Proxmox VE is a complete open-source platform for enterprise virtualization. It uses xterm.js for container terminals and the host shell.
-   **Script Runner**: Run scripts (or a shell) in Atom.
-   **Whack Whack Terminal**: Terminal emulator for Visual Studio 2017.
-   **VTerm**: Extensible terminal emulator based on Electron and React.
-   **electerm**: electerm is a terminal/ssh/sftp client(mac, win, linux) based on electron/node-pty/xterm.
-   **Kubebox**: Terminal console for Kubernetes clusters.
-   **Azure Cloud Shell**: Azure Cloud Shell is a Microsoft-managed admin machine built on Azure, for Azure.
-   **atom-xterm**: Atom plugin for providing terminals inside your Atom workspace.
-   **rtty**: Access your terminals from anywhere via the web.
-   **Pisth**: An SFTP and SSH client for iOS.
-   **abstruse**: Abstruse CI is a continuous integration platform based on Node.JS and Docker.
-   **Azure Data Studio**: A data management tool that enables working with SQL Server, Azure SQL DB and SQL DW from Windows, macOS and Linux.
-   **FreeMAN**: A free, cross-platform file manager for power users.
-   **Fluent Terminal**: A terminal emulator based on UWP and web technologies.
-   **Hyper**: A terminal built on web technologies.
-   **Diag**: A better way to troubleshoot problems faster. Capture, share and reapply troubleshooting knowledge so you can focus on solving problems that matter.
-   **GoTTY**: A simple command line tool that shares your terminal as a web application based on xterm.js.
-   **genact**: A nonsense activity generator.
-   **cPanel & WHM**: The hosting platform of choice.
-   **Nutanix**: Nutanix Enterprise Cloud uses xterm in the webssh functionality within Nutanix Calm, and is also looking to move our old noserial (termjs) functionality to xterm.js.
-   **SSH Web Client**: SSH Web Client with PHP.
-   **Juno**: A flexible Julia IDE, based on Atom.
-   **webssh**: Web based ssh client.
-   **info-beamer hosted**: Uses xterm.js to manage digital signage devices from the web dashboard.
-   **Jumpserver**: Jumpserver Luna project, Jumpserver is a bastion server project, Luna use xterm.js for web terminal emulation.
-   **LxdMosaic**: Uses xterm.js to give terminal access to containers through LXD
-   **CodeInterview.io**: A coding interview platform in 25+ languages and many web frameworks. Uses xterm.js to provide shell access.
-   **Bastillion**: Bastillion is an open-source web-based SSH console that centrally manages administrative access to systems.
-   **PHP App Server**: Create lightweight, installable almost-native applications for desktop OSes. ExecTerminal (nicely wraps the xterm.js Terminal), TerminalManager, and RunProcessSDK are self-contained, reusable ES5+ compliant Javascript components.
-   **NgTerminal**: NgTerminal is a web terminal that leverages xterm.js on Angular 7+. You can easily add it into your application by adding `<ng-terminal></ng-terminal>` into your component.
-   **tty-share**: Extremely simple terminal sharing over the Internet.
-   **Ten Hands**: One place to run your command-line tasks.
-   **WebAssembly.sh**: A WebAssembly WASI browser terminal
-   **Gus**: A shared coding pad where you can run Python with xterm.js
-   **Linode**: Linode uses xterm.js to provide users a web console for their Linode instances.
-   **FluffOS**: Active maintained LPMUD driver with websocket support.
-   **x-terminal**: Atom plugin for providing terminals inside your Atom workspace.
-   **CoCalc**: Lots of free software pre-installed, to chat, collaborate, develop, program, publish, research, share, teach, in C++, HTML, Julia, Jupyter, LaTeX, Markdown, Python, R, SageMath, Scala, ...
-   **Dank Domain**: Open source multiuser medieval game supporting old & new terminal emulation.
-   **DockerStacks**: Local LAMP/LEMP development studio
-   **Codecademy**: Uses xterm.js in its courses on Bash.
-   **Laravel Ssh Web Client**: Laravel server inventory with ssh web client to connect at server using xterm.js
-   **Replit**: Collaborative browser based IDE with support for 50+ different languages.
-   **TeleType**: cli tool that allows you to share your terminal online conveniently. Show off mad cli-fu, help a colleague, teach, or troubleshoot.
-   **Intervue**: Pair programming for interviews. Multiple programming languages are supported, with results displayed by xterm.js.
-   **TRASA**: Zero trust access to Web, SSH, RDP, and Database services.
-   **Commas**: Commas is a hackable terminal and command runner.
-   **Devtron**: Software Delivery Workflow For Kubernetes.
-   **NxShell**: An easy to use new terminal for SSH.
-   **gifcast**: Converts an asciinema cast to an animated GIF.
-   **WizardWebssh**: A terminal with Pyqt5 Widget for embedding, which can be used as an ssh client to connect to your ssh servers. It is written in Python, based on tornado, paramiko, and xterm.js.
-   **Wizard Assistant**: Wizard Assistant comes with advanced automation tools, preloaded common and special time-saving commands, and a built-in SSH terminal. Now you can remotely administer, troubleshoot, and analyze any system with ease.
-   **ucli**: Command Line for everyone 👨‍👩‍👧‍👦 at www.ucli.tech.
-   **Tess**: Simple Terminal Fully Customizable for Everyone. Discover more at tessapp.dev
-   **HashiCorp Nomad**: A container orchestrator with the ability to connect to remote tasks via a web interface using websockets and xterm.js.
-   **TermPair**: View and control terminals from your browser with end-to-end encryption
-   **gdbgui**: Browser-based frontend to gdb (gnu debugger)
-   **goormIDE**: Run almost every programming languages with real-time collaboration, live pair programming, and built-in messenger.
-   **FleetDeck**: Remote desktop & virtual terminal
-   **OpenSumi**: A framework helps you quickly build Cloud or Desktop IDE products.
-   **KubeSail**: The Self-Hosting Company - uses xterm to allow users to exec into kubernetes pods and build github apps
-   **WiTTY**: Web-based interactive terminal emulator that allows users to easily record, share, and replay console sessions.
-   **libv86 Terminal Forwarding**: Peer-to-peer SSH for the web, using WebRTC via Bugout for data transfer and v86 for web-based virtualization.
-   **hack.courses**: Interactive Linux and command-line classes using xterm.js to expose a real terminal available for everyone.
-   **Render**: Platform-as-a-service for your apps, websites, and databases using xterm.js to provide a command prompt for user containers and for streaming build and runtime logs.
-   **CloudTTY**: A Friendly Kubernetes CloudShell (Web Terminal).
-   **Go SSH Web Client**: A simple SSH web client using Go, WebSocket and Xterm.js.
-   **web3os**: A decentralized operating system for the next web
-   **Cratecode**: Learn to program for free through interactive online lessons. Cratecode uses xterm.js to give users access to their own Linux environment.
-   **Super Terminal**: It is a http based terminal for developers who dont like repetition and save time.
-   **graSSHopper**: A simple SSH client with file explorer, history and many more features.
-   **DomTerm**: Tiles and tabs. Detachable sessions (like tmux). Remote connections using a nice ssh wrapper with predictive echo. Qt, Electron, Tauri/Wry, or desktop browser front-ends. Choose between xterm.js engine (faster) or native DomTerm (more functionality and graphics) - or both.
-   **Cloudtutor.io**: innovative online learning platform that offers users access to an interactive lab.
-   **Helix Editor Playground**: Online playground for the terminal based helix editor.
-   **Coder**: Self-Hosted Remote Development Environments
-   **Wave Terminal**: An open-source, ai-native, terminal built for seamless workflows.
-   **eva**: Eva is a web application for SSH remote login, developed in Go.
-   **OpenSFTP**: Super beautiful SSH and SFTP integrated workspace client.
-   **balena**: Balena is a full-stack solution for developing, deploying, updating, and troubleshooting IoT Edge devices. We use xterm.js to manage & debug devices on balenaCloud.
-   **Filet Cloud**: The lean and powerful personal cloud ⛅.
-   And much more...

Do you use xterm.js in your application as well? Please open a Pull Request to include it here. We would love to have it on our list. Note: Please add any new contributions to the end of the list only.

License Agreement
-----------------

If you contribute code to this project, you implicitly allow your code to be distributed under the MIT license. You are also implicitly verifying that all code is your original work.

Copyright (c) 2017-2022, The xterm.js authors (MIT License)  
Copyright (c) 2014-2017, SourceLair, Private Company (www.sourcelair.com) (MIT License)  
Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
