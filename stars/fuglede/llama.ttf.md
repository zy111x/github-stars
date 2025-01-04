---
project: llama.ttf
stars: 289
description: A font for writing tiny stories
url: https://github.com/fuglede/llama.ttf
---

llama.ttf
=========

A font containing a large language model and inference engine.

What?
-----

A font containing a large language model and inference engine.

Why?
----

What?
-----

Usage
-----

Just download `llama.ttf` and use it like you would any other font, for instance by adding it to `~/.fonts`. Then, use it somewhere where Harfbuzz is used and built with Wasm support.

The simplest way to do that with this is probably to build Harfbuzz with `-Dwasm=enabled`, and build wasm-micro-runtime, then add the resulting shared libraries, `libharfbuzz.so.0.60811.0` and `libiwasm.so` to `LD_PRELOAD` before running a Harfbuzz-based application such as gedit or GIMP; no recompilation of the applications is required.

Demo and more info
------------------

See https://fuglede.github.io/llama.ttf/.
