---
project: python.js
stars: 191
description: Call python code from node.js
url: https://github.com/monkeycz/python.js
---

python.js
=========

Call python code from node.js.

Usage
-----

var python \= require('python.js');
var os \= python.import('os');

var path \= require('path');

assert(os.path.basename(os.getcwd()) \== path.basename(process.cwd()));

Feature
-------

def test():
	try:
		\## do samething
	except Exception as e:
		raise e
	return 'done'

PYMODULE.test.async \= true;
PYMODULE.test(function (result, error) {
	if (!error)
		console.log(result);
});

Build
-----

### Mac

# for Node.js
node-gyp rebuild --arch=\[ia32/x64\] --target=x.y.z 
# target nodejs version, eg: 0.10.28

# for node-webkit
nw-gyp rebuild --arch=\[ia32/x64\] --target=x.y.z 
# target node-webkit version, eg: 0.8.6

### Windows

# for Node.js
cd python.js\\src
cl /O2 /MT /LD -Febinding.node binding.cc py\_object\_wrapper.cc utils.cc <NODE\_GYP\_ROOT\>\\.node-gyp\\<NODEJS\_VERSION\>\\<NODEJS\_ARCH\>\\node.lib <PYTHON\_ROOT\>\\Python27\\libs\\python27.lib /I<NODE\_GYP\_ROOT\>\\.node-gyp\\<NODEJS\_VERSION\>\\src /I<NODE\_GYP\_ROOT\>\\.node-gyp\\<NODEJS\_VERSION\>\\deps\\uv\\include /I<NODE\_GYP\_ROOT\>\\.node-gyp\\<NODEJS\_VERSION\>\\deps\\v8\\include /I<PYTHON\_ROOT\>\\Python27\\include
copy binding.node <NODE\_MODULES\_ROOT\>\\python.js\\compiled\\<NODEJS\_VERSION\>\\win32\\<NODEJS\_ARCH\>

# for node-webkit
cd python.js\\src
cl /O2 /MT /LD -Febinding.node binding.cc py\_object\_wrapper.cc utils.cc <NW\_GYP\_ROOT\>\\.nw-gyp\\<NODE\_WEBKIT\_VERSION\>\\<NODE\_WEBKIT\_ARCH\>\\nw.lib <PYTHON\_ROOT\>\\Python27\\libs\\python27.lib /I<NW\_GYP\_ROOT\>\\.nw-gyp\\<NODE\_WEBKIT\_VERSION\>\\src /I<NW\_GYP\_ROOT\>\\.nw-gyp\\<NODE\_WEBKIT\_VERSION\>\\deps\\uv\\include /I<NW\_GYP\_ROOT\>\\.nw-gyp\\<NODE\_WEBKIT\_VERSION\>\\deps\\v8\\include /I<PYTHON\_ROOT\>\\Python27\\include
copy binding.node <NODE\_MODULES\_ROOT\>\\python.js\\compiled\\<NODEJS\_VERSION\>\\win32\\<NODE\_WEBKIT\_ARCH\>

Install
-------

npm install python.js

or

npm install <protocol\>://<user\>@<domain\>/<projects\>/python.js.git
# eg: npm install git+ssh://git@example.com/projects/python.js.git

Test
----

node test/jstest.js

Thanks
------

-   Jean-Sébastien Tremblay
-   Chris Dickinson
