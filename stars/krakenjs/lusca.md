---
project: lusca
stars: 1786
description: Application security for express apps.
url: https://github.com/krakenjs/lusca
---

lusca
=====

Web application security middleware.

Usage
-----

var express \= require('express'),
	app \= express(),
	session \= require('express-session'),
	lusca \= require('lusca');

//this or other session management will be required
app.use(session({
	secret: 'abc',
	resave: true,
	saveUninitialized: true
}));

app.use(lusca({
    csrf: true,
    csp: { /\* ... \*/},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    hsts: {maxAge: 31536000, includeSubDomains: true, preload: true},
    xssProtection: true,
    nosniff: true,
    referrerPolicy: 'same-origin'
}));

Setting any value to `false` will disable it. Alternately, you can opt into methods one by one:

app.use(lusca.csrf());
app.use(lusca.csp({ /\* ... \*/}));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.p3p('ABCDEF'));
app.use(lusca.hsts({ maxAge: 31536000 }));
app.use(lusca.xssProtection(true));
app.use(lusca.nosniff());
app.use(lusca.referrerPolicy('same-origin'));

**Please note that you must use express-session, cookie-session, their express 3.x alternatives, or other session object management in order to use lusca.**

API
---

### lusca.csrf(options)

-   `key` String - Optional. The name of the CSRF token added to the model. Defaults to `_csrf`.
-   `secret` String - Optional. The key to place on the session object which maps to the server side token. Defaults to `_csrfSecret`.
-   `impl` Function - Optional. Custom implementation to generate a token.
-   `cookie` String|Object - Optional. If set, a cookie with the name and/or options you provide will be set with the CSRF token. If the value is a string, it'll be used as the cookie name.
-   `cookie.name` String - Required if cookie is an object and `angular` is not true. The CSRF cookie name to set.
-   `cookie.options` Object - Optional. A valid Express cookie options object.
-   `angular` Boolean - Optional. Shorthand setting to set `lusca` up to use the default settings for CSRF validation according to the AngularJS docs. Can be used with `cookie.options`.
-   `blocklist` Array or String - Optional. Allows defining a set of routes that will not have csrf protection. All others will.  
    Example configuration:
    
    ```
    blocklist: [{path: '/details', type: 'exact'}, {path: '/summary', type: 'startWith'}]
    //If match type is 'exact', route will get blocklisted only if it matches req.path exactly
    //If match type is 'startsWith', Lusca will check if req.path starts with the specified path
    
    For backwards compatiblity, following configuration is supported as well. It will be evaluated using the 'startsWith' match type.
    blocklist: '/details';
    blocklist: ['/details', '/summary'];
    ```
    
-   `allowlist` Array or String - Optional. Allows defining a set of routes that will have csrf protection. All others will not.  
    Configuration is similar to `blocklist` config

Notes: The app can use either a `blocklist` or a `allowlist`, not both. By default, all post routes are allowlisted.

Enables Cross Site Request Forgery (CSRF) headers.

If enabled, the CSRF token must be in the payload when modifying data or you will receive a _403 Forbidden_. To send the token you'll need to echo back the `_csrf` value you received from the previous request.

Furthermore, parsers must be registered before lusca.

### lusca.csp(options)

-   `options.policy` String, Object, or an Array - Object definition of policy. Valid policies examples include:
    -   `{"default-src": "*"}`
    -   `"referrer no-referrer"`
    -   `[{ "img-src": "'self' http:" }, "block-all-mixed-content"]`
-   `options.reportOnly` Boolean - Enable report only mode.
-   `options.reportUri` String - URI where to send the report data
-   `options.styleNonce` Boolean - Enable nonce for inline style-src, access from `res.locals.nonce`
-   `options.scriptNonce` Boolean - Enable nonce for inline script-src, access from `res.locals.nonce`

Enables Content Security Policy (CSP) headers.

#### Example Options

// Everything but images can only come from own domain (excluding subdomains)
{
  policy: {
    'default-src': '\\'self\\'',
    'img-src': '\*'
  }
}

See the MDN CSP usage page for more information on available policy options.

### lusca.xframe(value)

-   `value` String - Required. The value for the header, e.g. DENY, SAMEORIGIN or ALLOW-FROM uri.

Enables X-FRAME-OPTIONS headers to help prevent Clickjacking.

### lusca.p3p(value)

-   `value` String - Required. The compact privacy policy.

Enables Platform for Privacy Preferences Project (P3P) headers.

### lusca.hsts(options)

-   `options.maxAge` Number - Required. Number of seconds HSTS is in effect.
-   `options.includeSubDomains` Boolean - Optional. Applies HSTS to all subdomains of the host
-   `options.preload` Boolean - Optional. Adds preload flag

Enables HTTP Strict Transport Security for the host domain. The preload flag is required for HSTS domain submissions to Chrome's HSTS preload list.

### lusca.xssProtection(options)

-   `options.enabled` Boolean - Optional. If the header is enabled or not (see header docs). Defaults to `1`.
-   `options.mode` String - Optional. Mode to set on the header (see header docs). Defaults to `block`.

Enables X-XSS-Protection headers to help prevent cross site scripting (XSS) attacks in older IE browsers (IE8)

### lusca.nosniff()

Enables X-Content-Type-Options header to prevent MIME-sniffing a response away from the declared content-type.

### lusca.referrerPolicy(value)

-   `value` String - Optional. The value for the header, e.g. `origin`, `same-origin`, `no-referrer`. Defaults to \`\` (empty string).

Enables Referrer-Policy header to control the Referer header.
