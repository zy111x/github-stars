---
project: bitcoinjs-lib
stars: 5723
description: A javascript Bitcoin library for node.js and browsers.
---

(Logo by @sawaratsuki1004)

(LICENSE for the logo is on SAWARATSUKI Github repo)

A javascript Bitcoin library for node.js and browsers. Written in TypeScript, but committing the JS files to verify.

Released under the terms of the MIT LICENSE.

Should I use this in production?
--------------------------------

If you are thinking of using the _master_ branch of this library in production, **stop**. Master is not stable; it is our development branch, and only tagged releases may be classified as stable.

Can I trust this code?
----------------------

> Don't trust. Verify.

We recommend every user of this library and the bitcoinjs ecosystem audit and verify any underlying code for its validity and suitability, including reviewing any and all of your project's dependencies.

Mistakes and bugs happen, but with your help in resolving and reporting issues, together we can produce open source software that is:

-   Easy to audit and verify,
-   Tested, with test coverage >95%,
-   Advanced and feature rich,
-   Standardized, using prettier and Node `Buffer`'s throughout, and
-   Friendly, with a strong and helpful community, ready to answer questions.

Documentation
-------------

Visit our documentation to explore the available resources. We're continually enhancing our documentation with additional features for an enriched experience. If you need further guidance beyond what our examples offer, don't hesitate to ask for help. We're here to assist you.

You can find a Web UI that covers most of the `psbt.ts`, `transaction.ts` and `p2*.ts` APIs here.

How can I contact the developers outside of Github?
---------------------------------------------------

**Most of the time, this is not appropriate. Creating issues and pull requests in the open will help others with similar issues, so please try to use public issues and pull requests for communication.**

That said, sometimes developers might be open to taking things off the record (ie. You want to share code that you don't want public to get help with it). In that case, please negotiate on the public issues as to where you will contact.

We have created public rooms on IRC (`#bitcoinjs` on `libera.chat`) and Matrix (`#bitcoinjs-dev:matrix.org`). These two channels have been joined together in a Matrix "Space" which has the Matrix room AND an IRC bridge room that can converse with the IRC room. The "Space" is `#bitcoinjs-space:matrix.org`.

Matrix and IRC both have functions for direct messaging, but IRC is not end to end encrypted, so Matrix is recommended for most communication. The official Matrix client maintained by the Matrix core team is called "Element" and can be downloaded here: https://element.io/download (Account creation is free on the matrix.org server, which is the default setting for Element.)

We used to have a Slack. It is dead. If you find it, no one will answer you most likely.

No we will not make a Discord.

Installation
------------

npm install bitcoinjs-lib
# optionally, install a key derivation library as well
npm install ecpair bip32
# ecpair is the ECPair class for single keys
# bip32 is for generating HD keys

Previous versions of the library included classes for key management (ECPair, HDNode(->"bip32")) but now these have been separated into different libraries. This lowers the bundle size significantly if you don't need to perform any crypto functions (converting private to public keys and deriving HD keys).

Typically we support the Node Maintenance LTS version. TypeScript target will be set to the ECMAScript version in which all features are fully supported by current Active Node LTS. However, depending on adoption among other environments (browsers etc.) we may keep the target back a year or two. If in doubt, see the main\_ci.yml for what versions are used by our continuous integration tests.

**WARNING**: We presently don't provide any tooling to verify that the release on `npm` matches GitHub. As such, you should verify anything downloaded by `npm` against your own verified copy.

Usage
-----

Crypto is hard.

When working with private keys, the random number generator is fundamentally one of the most important parts of any software you write. For random number generation, we _default_ to the `randombytes` module, which uses `window.crypto.getRandomValues` in the browser, or Node js' `crypto.randomBytes`, depending on your build system. Although this default is ~OK, there is no simple way to detect if the underlying RNG provided is good enough, or if it is **catastrophically bad**. You should always verify this yourself to your own standards.

This library uses tiny-secp256k1, which uses RFC6979 to help prevent `k` re-use and exploitation. Unfortunately, this isn't a silver bullet. Often, Javascript itself is working against us by bypassing these counter-measures.

Problems in `Buffer (UInt8Array)`, for example, can trivially result in **catastrophic fund loss** without any warning. It can do this through undermining your random number generation, accidentally producing a duplicate `k` value, sending Bitcoin to a malformed output script, or any of a million different ways. Running tests in your target environment is important and a recommended step to verify continuously.

Finally, **adhere to best practice**. We are not an authoritative source of best practice, but, at the very least:

-   Don't reuse addresses.
-   Don't share BIP32 extended public keys ('xpubs'). They are a liability, and it only takes 1 misplaced private key (or a buggy implementation!) and you are vulnerable to **catastrophic fund loss**.
-   Don't use `Math.random` - in any way - don't.
-   Enforce that users always verify (manually) a freshly-decoded human-readable version of their intended transaction before broadcast.
-   Don't _ask_ users to generate mnemonics, or 'brain wallets', humans are terrible random number generators.
-   Lastly, if you can, use Typescript or similar.

### Browser

The recommended method of using `bitcoinjs-lib` in your browser is through browserify.

If you'd like to use a different (more modern) build tool than `browserify`, you can compile just this library and its dependencies into a single JavaScript file:

$ npm install bitcoinjs-lib browserify
$ npx browserify --standalone bitcoin -o bitcoinjs-lib.js <<< "module.exports = require('bitcoinjs-lib');"

Which you can then import as an ESM module:

<script type\="module"\>import "/scripts/bitcoinjs-lib.js"</script\>

#### Using Taproot:

When utilizing Taproot features with bitcoinjs-lib, you may need to include an additional ECC (Elliptic Curve Cryptography) library. The commonly used `tiny-secp256k1` library, however, might lead to compatibility issues due to its reliance on WASM (WebAssembly). The following alternatives may be used instead, though they may be significantly slower for high volume of signing and pubkey deriving operations.

#### Alternatives for ECC Library:

1.  `@bitcoinjs-lib/tiny-secp256k1-asmjs` A version of `tiny-secp256k1` compiled to ASM.js directly from the WASM version, potentially better supported in browsers. This is the slowest option.
2.  `@bitcoinerlab/secp256k1` Another alternative library for ECC functionality. This requires access to the global `BigInt` primitive. For advantages and detailed comparison of these libraries, visit: tiny-secp256k1 GitHub page.

**NOTE**: We use Node Maintenance LTS features, if you need strict ES5, use `--transform babelify` in conjunction with your `browserify` step (using an `es2015` preset).

**WARNING**: iOS devices have problems, use at least buffer@5.0.5 or greater, and enforce the test suites (for `Buffer`, and any other dependency) pass before use.

### Typescript or VSCode users

Type declarations for Typescript are included in this library. Normal installation should include all the needed type information.

Examples
--------

The below examples are implemented as integration tests, they should be very easy to understand. Otherwise, pull requests are appreciated. Some examples interact (via HTTPS) with a 3rd Party Blockchain Provider (3PBP).

-   Taproot Key Spend
-   Create (and broadcast via 3PBP) a taproot script-path spend Transaction - OP\_CHECKSIG
-   Create (and broadcast via 3PBP) a taproot script-path spend Transaction - OP\_CHECKSEQUENCEVERIFY
-   Create (and broadcast via 3PBP) a taproot script-path spend Transaction - OP\_CHECKSIGADD (3-of-3)
-   Generate a random address
-   Import an address via WIF
-   Generate a 2-of-3 P2SH multisig address
-   Generate a SegWit address
-   Generate a SegWit P2SH address
-   Generate a SegWit 3-of-4 multisig address
-   Generate a SegWit 2-of-2 P2SH multisig address
-   Support the retrieval of transactions for an address (3rd party blockchain)
-   Generate a Testnet address
-   Generate a Litecoin address
-   Create a 1-to-1 Transaction
-   Create (and broadcast via 3PBP) a typical Transaction
-   Create (and broadcast via 3PBP) a Transaction with an OP\_RETURN output
-   Create (and broadcast via 3PBP) a Transaction with a 2-of-4 P2SH(multisig) input
-   Create (and broadcast via 3PBP) a Transaction with a SegWit P2SH(P2WPKH) input
-   Create (and broadcast via 3PBP) a Transaction with a SegWit P2WPKH input
-   Create (and broadcast via 3PBP) a Transaction with a SegWit P2PK input
-   Create (and broadcast via 3PBP) a Transaction with a SegWit 3-of-4 P2SH(P2WSH(multisig)) input
-   Create (and broadcast via 3PBP) a Transaction and sign with an HDSigner interface (bip32)
-   Import a BIP32 testnet xpriv and export to WIF
-   Export a BIP32 xpriv, then import it
-   Export a BIP32 xpub
-   Create a BIP32, bitcoin, account 0, external address
-   Create a BIP44, bitcoin, account 0, external address
-   Create a BIP49, bitcoin testnet, account 0, external address
-   Use BIP39 to generate BIP32 addresses
-   Create (and broadcast via 3PBP) a Transaction where Alice can redeem the output after the expiry (in the past)
-   Create (and broadcast via 3PBP) a Transaction where Alice can redeem the output after the expiry (in the future)
-   Create (and broadcast via 3PBP) a Transaction where Alice and Bob can redeem the output at any time
-   Create (but fail to broadcast via 3PBP) a Transaction where Alice attempts to redeem before the expiry
-   Create (and broadcast via 3PBP) a Transaction where Alice can redeem the output after the expiry (in the future) (simple CHECKSEQUENCEVERIFY)
-   Create (but fail to broadcast via 3PBP) a Transaction where Alice attempts to redeem before the expiry (simple CHECKSEQUENCEVERIFY)
-   Create (and broadcast via 3PBP) a Transaction where Bob and Charles can send (complex CHECKSEQUENCEVERIFY)
-   Create (and broadcast via 3PBP) a Transaction where Alice (mediator) and Bob can send after 2 blocks (complex CHECKSEQUENCEVERIFY)
-   Create (and broadcast via 3PBP) a Transaction where Alice (mediator) can send after 5 blocks (complex CHECKSEQUENCEVERIFY)

If you have a use case that you feel could be listed here, please ask for it!

Contributing
------------

See CONTRIBUTING.md.

### Running the test suite

npm test
npm run-script coverage

Complementing Libraries
-----------------------

-   BIP21 - A BIP21 compatible URL encoding library
-   BIP38 - Passphrase-protected private keys
-   BIP39 - Mnemonic generation for deterministic keys
-   BIP32-Utils - A set of utilities for working with BIP32
-   BIP66 - Strict DER signature decoding
-   BIP68 - Relative lock-time encoding library
-   BIP69 - Lexicographical Indexing of Transaction Inputs and Outputs
-   Base58 - Base58 encoding/decoding
-   Base58 Check - Base58 check encoding/decoding
-   Bech32 - A BIP173/BIP350 compliant Bech32/Bech32m encoding library
-   coinselect - A fee-optimizing, transaction input selection module for bitcoinjs-lib.
-   merkle-lib - A performance conscious library for merkle root and tree calculations.
-   minimaldata - A module to check bitcoin policy: SCRIPT\_VERIFY\_MINIMALDATA

Alternatives
------------

-   BCoin
-   Bitcore
-   Cryptocoin

LICENSE MIT
-----------
