---
project: jquery-plugin
stars: 33
description: Official TapirGo JQuery plugin
url: https://github.com/TapirGo/jquery-plugin
---

Tapir jQuery plugin
===================

A plugin that makes searching with Tapir a breeze!

Check out the live example

Using the plugin
----------------

1\. Make sure you have jQuery in your site (any version above 1.2 should work).  
2\. Add the `jquery-tapir.min.js` file to your site.  
3\. Call `tapir()` on the element you want the results to appear in (don’t forget to pass your token!).

example:

```

  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <title>Tapir jQuery plugin example</title>
    </head>

    <body>

      <div id="search_results"></div>

      <script src="jquery-1.6.1.min.js"></script>
      <script src="jquery-tapir.min.js"></script>
      <script>
        $('#search_results').tapir({'token': '4dbfc79e3f61b05b53000021'});
      </script>

    </body>
  </html>
```

Options
-------

### Complete

If you pass a function as a `complete`\-option, your function will be executed when the search is complete and the results have been returned, right before they’re appended to the page:

```
$('#search_results').tapir({
  'token': '4dbfc79e3f61b05b53000021',
  'complete' : function() { alert("I'm done searching!"); }
});
```
