---
project: vorpal
stars: 5645
description: Node's framework for interactive CLIs
url: https://github.com/dthree/vorpal
---

Vorpal
======

> Conquer the command-line.

```
              (O)
              <M
   o          <M
  /| ......  /:M\------------------------------------------------,,,,,,
(O)[ vorpal ]::@+}==========================================------------>
  \| ^^^^^^  \:W/------------------------------------------------''''''
   o          <W
              <W
              (O)
```

Vorpal is Node's first framework for building interactive CLI applications. With a simple and powerful API, Vorpal opens the door to a new breed of rich, immersive CLI environments like cash and wat.

Notice
------

This is now an OPEN Open Source project. I am not able to invest a significant amount of time into maintaining Vorpal and so am looking for volunteers who would like to be active maintainers of the project. If you are interested, shoot me a note.

Contents
--------

-   Introduction
-   Getting Started
-   API
-   Extensions
-   FAQ
-   License

Introduction
------------

Inspired by and based on commander.js, Vorpal is a framework for building immersive CLI applications built on an interactive prompt provided by inquirer.js. Vorpal launches Node into an isolated CLI environment and provides a suite of API commands and functionality including:

-   Simple, powerful command creation
-   Supports optional, required and variadic arguments and options
-   Piped commands
-   Persistent command history
-   Built-in help
-   Built-in tabbed auto-completion
-   Command-specific auto-completion
-   Customizable prompts
-   Extensive terminal control
-   Custom event listeners
-   And more

Vorpal supports community extensions, which empower it to do awesome things such as piping commands to less, importing commands live or supporting a built-in REPL.

Made with ❤️ by dthree.

Getting Started
---------------

##### Quick Start

Install `vorpal` into your project:

$ npm install vorpal --save

Create a `.js` file and add the following:

const vorpal \= require('vorpal')();

vorpal
  .command('foo', 'Outputs "bar".')
  .action(function(args, callback) {
    this.log('bar');
    callback();
  });

vorpal
  .delimiter('myapp$')
  .show();

This creates an instance of Vorpal, adds a command which logs "bar", sets the prompt delimiter to say "myapp$", and shows the prompt.

Run your project file. Your Node app has become a CLI:

$ node server.js
myapp~$

Try out your "foo" command.

myapp~$ foo
bar
myapp~$

Now type "help" to see Vorpal's built in commands in addition to "foo":

myapp~$ help

  Commands

    help \[command\]    Provides help for a given command.
    exit \[options\]    Exits instance of Vorpal.
    foo               Outputs "bar".

myapp~$

There's the basics. Once you get the hang of it, follow this tutorial or read on to learn what else Vorpal can do.

##### Community

Questions? Use the `vorpal.js` StackOverflow tag for fast answers that help others, or jump into chat on Gitter.

-   Stack Overflow
-   Gitter Chat
-   Vorpal extensions
-   Projects made with Vorpal
-   Follow @vorpaljs

API
---

##### Command

-   `vorpal.command`
-   `command.description`
-   `command.alias`
-   `command.parse`
-   `command.option`
-   `command.hidden`
-   `command.remove`
-   `command.help`
-   `command.autocomplete`
-   `command.action`
-   `command.cancel`

##### Mode

-   `vorpal.mode`
-   `mode.delimiter`
-   `mode.init`
-   `mode.action`

##### Catch

-   `vorpal.catch`

##### CommandInstance

-   `commandInstance.log`
-   `commandInstance.prompt`
-   `commandInstance.delimiter`

##### UI

-   `ui.delimiter`
-   `ui.input`
-   `ui.imprint`
-   `ui.submit`
-   `ui.cancel`
-   `ui.imprint`
-   `ui.redraw`
-   `ui.redraw.clear`
-   `ui.redraw.done`

##### Vorpal

-   `.parse`
-   `.delimiter`
-   `.show`
-   `.find`
-   `.exec`
-   `.execSync`
-   `.log`
-   `.history`
-   `.localStorage`
-   `.help`
-   `.pipe`
-   `.use`

##### Events

Extensions
----------

You can build your own Vorpal commands and extensions.

-   List of awesome extensions
-   Building your own extension

FAQ
---

-   What is an "immersive CLI app?"
-   Wasn't this called Vantage?

Why Vorpal?
-----------

```
One, two! One, two! and through and through
The vorpal blade went snicker-snack!
He left it dead, and with its head
He went galumphing back.

Lewis Carroll, Jabberwocky
```

##### Life Goals:

-   Build a popular framework based on the Jabberwocky poem.

License
-------

MIT © David Caccavella
