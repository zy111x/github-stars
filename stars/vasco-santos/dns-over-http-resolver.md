---
project: dns-over-http-resolver
stars: 10
description: DNS over HTTP resolver 
---

dns-over-http-resolver
======================

> DNS over HTTP resolver

Table of contents
-----------------

-   Install
    -   Browser `<script>` tag
-   Usage
    -   options
-   API
    -   resolve(hostname, rrType)
        -   Parameters
        -   Returns
        -   Example
    -   resolve4(hostname)
        -   Parameters
        -   Returns
        -   Example
    -   resolve6(hostname)
        -   Parameters
        -   Returns
        -   Example
    -   resolveTxt(hostname)
        -   Parameters
        -   Returns
        -   Example
    -   getServers()
        -   Returns
        -   Example
    -   setServers(servers)
        -   Parameters
        -   Example
-   Contribute
-   API Docs
-   License
-   Contribution

Install
-------

$ npm i dns-over-http-resolver

### Browser `<script>` tag

Loading this module through a script tag will make it's exports available as `DnsOverHttpResolver` in the global namespace.

<script src\="https://unpkg.com/dns-over-http-resolver/dist/index.min.js"\></script\>

Isomorphic DNS over HTTP resolver using fetch.

API based on Node.js' dns promises API, allowing the native `dns` module to be used if available when relying on this API.

Usage
-----

const DnsOverHttpResolver \= require('dns-over-http-resolver')

const dohResolver \= new DnsOverHttpResolver(options)

Cloudflare and Google DNS servers are used by default. They can be replaced via the API.

You can also use `require('dns').promises` in Node.js in lieu of this module.

### options

You can provide the following options for the DnsOverHttpResolver:

Name

Type

Description

Default

maxCache

`number`

maximum number of cached dns records

100

API
---

### resolve(hostname, rrType)

Uses the DNS protocol to resolve the given host name into a DNS record.

#### Parameters

Name

Type

Description

hostname

`string`

host name to resolve

\[rrType\]

`string`

resource record type (default: 'A')

#### Returns

Type

Description

`Promise<Array<string>>`

returns a Promise resolving a DNS record according to its type

#### Example

const DnsOverHttpResolver \= require('dns-over-http-resolver')
const resolver \= new DnsOverHttpResolver()

const hostname \= 'google.com'
const recordType \= 'TXT'

const dnsRecord \= await resolver.resolve(hostname, recordType)

### resolve4(hostname)

Uses the DNS protocol to resolve the given host name into IPv4 addresses.

#### Parameters

Name

Type

Description

hostname

`string`

host name to resolve

#### Returns

Type

Description

`Promise<Array<string>>`

returns a Promise resolving IPv4 addresses

#### Example

const DnsOverHttpResolver \= require('dns-over-http-resolver')
const resolver \= new DnsOverHttpResolver()

const hostname \= 'google.com'

const address \= await resolver.resolve4(hostname) // \['216.58.212.142'\]

### resolve6(hostname)

Uses the DNS protocol to resolve the given host name into IPv6 addresses.

#### Parameters

Name

Type

Description

hostname

`string`

host name to resolve

#### Returns

Type

Description

`Promise<Array<string>>`

returns a Promise resolving IPv6 addresses

#### Example

const DnsOverHttpResolver \= require('dns-over-http-resolver')
const resolver \= new DnsOverHttpResolver()

const hostname \= 'google.com'

const address \= await resolver.resolve6(hostname) // \['2a00:1450:4001:801::200e'\]

### resolveTxt(hostname)

Uses the DNS protocol to resolve the given host name into a Text Record.

#### Parameters

Name

Type

Description

hostname

`string`

host name to resolve

#### Returns

Type

Description

`Promise<Array<Array<string>>>`

returns a Promise resolving a Text Record

#### Example

const DnsOverHttpResolver \= require('dns-over-http-resolver')
const resolver \= new DnsOverHttpResolver()

const hostname \= 'google.com'

const address \= await resolver.resolveTxt(hostname) // \[\['v=spf1 -all'\]\]

### getServers()

Get an array of the IP addresses currently configured for DNS resolution. These addresses are formatted according to RFC 5952. It can include a custom port.

#### Returns

Type

Description

`Array<string>`

returns array of DNS servers used

#### Example

const DnsOverHttpResolver \= require('dns-over-http-resolver')

const resolver \= new DnsOverHttpResolver()
const servers \= resolver.getServers()

### setServers(servers)

Sets the IP address and port of servers to be used when performing DNS resolution. Note that the servers order will be randomized on each request for load distribution.

#### Parameters

Name

Type

Description

servers

`Array<string>`

Array of RFC 5952 formatted addresses.

#### Example

const DnsOverHttpResolver \= require('dns-over-http-resolver')

const resolver \= new DnsOverHttpResolver()
resolver.setServers(\['https://cloudflare-dns.com/dns-query'\])

Contribute
----------

Feel free to dive in! Open an issue or submit PRs.

API Docs
--------

-   https://vasco-santos.github.io/dns-over-http-resolver

License
-------

Licensed under either of

-   Apache 2.0, (LICENSE-APACHE / http://www.apache.org/licenses/LICENSE-2.0)
-   MIT (LICENSE-MIT / http://opensource.org/licenses/MIT)

Contribution
------------

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
