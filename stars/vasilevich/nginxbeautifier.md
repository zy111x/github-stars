---
project: nginxbeautifier
stars: 168
description: Format and beautify nginx config files
---

_nginx_ config file formatter and beautifier
============================================

This Javascript script beautifies and formats Nginx configuration files so that:

-   all lines are indented in an uniform manner, with 4 spaces per level
-   neighbouring empty lines are collapsed to at most two empty lines
-   curly braces placement follows Java convention
-   whitespaces are collapsed, except in comments and quotation marks

Installation
============

NodeJS is needed to run this program.

You can install nginxbeautifier using one of the ways below:
------------------------------------------------------------

### From AUR

#### Using pacaur (or any other way from AUR repository)

```
pacaur -S nginxbeautifier
```

### From NPM repository

```
npm install -g nginxbeautifier
```

### Directly from source

simpley clone our repository and copy the executable to your /usr/bin so you can use it anywhere on the system(unix only).

```
git clone https://github.com/vasilevich/nginxbeautifier
cp nginxbeautifier/nginxbeautifier.js /usr/bin/nginxbeautifier
```

Usage
=====

```
Usage: nginxbeautifier [OPTION]... [FILE]...  
Description: Formats nginx conf files into a more readable format by re-indenting the lines.  
  
Mandatory arguments to long options are mandatory for short options too, Arguments are case insensitive.  
-h, --help,  Show this help text.  
-s, --space,  Amount of spaces to indent with, Can not be used if tabs are specified.  
-t, --tabs,  Amount of tabs to indent with, Can not be used if spaces are specified.  
-dj, --dontjoin, --dont-join,  if set to true, commands such as 'server' and '{' will be on a seperate line, false by default ('server {' )  
-r, --recursive,  scan the whole current folder, and all sub folders recursively.  
-i, --input,  The file to input, is optional if you provide a path after all the arguments.  
-o, --output,  The file to output to, is optional if you provide a path after all the arguments.  
-e, -ext, --extension,  The extension of the config file to look for (.conf by default).  
```

Usage Examples:
---------------

-   `nginxbeautifier -s 4 -r sites-enabled/`
-   `nginxbeautifier -s 4 -r /etc/nginx/sites-enabled/`
-   `nginxbeautifier -s 4 -i /etc/nginx/sites-enabled/site.conf -o /etc/nginx/sites-enabled/newSite.conf`
-   `nginxbeautifier -s 4 -i /etc/nginx/sites-enabled/site.conf`
-   `nginxbeautifier -s 4 -i /etc/nginx/sites-enabled/*`
-   `nginxbeautifier -t 4 -i /etc/nginx/sites-enabled/*`
-   `nginxbeautifier -t 4 /etc/nginx/sites-enabled/*`
-   `nginxbeautifier -t 4 -i /etc/nginx/sites-enabled/* -o /etc/nginx/new-sites-enabled/*`

Credits
-------

Michał Słomkowski - Original code was ported from their project(nginxfmt.py), and also used their readme.md as a template. some methods were rewritten or changed a bit, but most of the code follows their design.

Notes:
------

I am keeping the same licenese format as the one that was given by the owner of the project the code was ported from: Apache 2.0.

Additional related projects you may find interesting:
-----------------------------------------------------

nginxbeautify - derived from this project, and much improved, by adding modularity and much more, by Denys Vitali, you should check it out!
