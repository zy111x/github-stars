---
project: MetingJS
stars: 1300
description: :cake: A powerful plugin connect APlayer and Meting
url: https://github.com/metowolf/MetingJS
---

Requirement
-----------

https://github.com/MoePlayer/APlayer

Version

API Status

APlayer

1.2.x

Supported

2.0.x

Latest

CDN
---

-   https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js
-   https://unpkg.com/meting@2.0.1/dist/Meting.min.js

Quick Start
-----------

<!-- require APlayer -->
<link rel\="stylesheet" href\="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"\>
<script src\="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"\></script\>
<!-- require MetingJS -->
<script src\="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"\></script\>

<meting-js
	server\="netease"
	type\="playlist"
	id\="60198"\>
</meting-js\>

https://music.163.com/#/playlist?id=60198

<meting-js
	auto\="https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html"\>
</meting-js\>

https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html

<meting-js
	name\="rainymood"
	artist\="rainymood"
	url\="https://rainymood.com/audio1110/0.m4a"
	cover\="https://rainymood.com/i/badge.jpg"\>
</meting-js\>

for self-hosted media

<meting-js
	name\="rainymood"
	artist\="rainymood"
	url\="https://rainymood.com/audio1110/0.m4a"
	cover\="https://rainymood.com/i/badge.jpg"
	fixed\="true"\>
	<pre hidden\>
		\[00:00.00\]This
		\[00:04.01\]is
		\[00:08.02\]lyric
	</pre\>
</meting-js\>

Fixed mode with Lyric text

Option
------

option

default

description

id

**require**

song id / playlist id / album id / search keyword

server

**require**

music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu`

type

**require**

`song`, `playlist`, `album`, `search`, `artist`

auto

options

music link, support: `netease`, `tencent`, `xiami`

fixed

`false`

enable fixed mode

mini

`false`

enable mini mode

autoplay

`false`

audio autoplay

theme

`#2980b9`

main color

loop

`all`

player loop play, values: 'all', 'one', 'none'

order

`list`

player play order, values: 'list', 'random'

preload

`auto`

values: 'none', 'metadata', 'auto'

volume

`0.7`

default volume, notice that player will remember user setting, default volume will not work after user set volume themselves

mutex

`true`

prevent to play multiple player at the same time, pause other players when this player start play

lrc-type

`0`

lyric type

list-folded

`false`

indicate whether list should folded at first

list-max-height

`340px`

list max height

storage-name

`metingjs`

localStorage key that store player setting

Documentation for APlayer can be found at https://aplayer.js.org/#/home?id=options

Advanced
--------

MetingJS allow you to use self-hosted API, more information about Meting.

<script\>
var meting\_api\='http://example.com/api.php?server=:server&type=:type&id=:id&auth=:auth&r=:r';
</script\>

<script src\="dist/Meting.min.js"\></script\>

Browser support
---------------

Browsers without native custom element support require a polyfill.

-   Chrome
-   Firefox
-   Safari
-   Internet Explorer 11
-   Microsoft Edge

Author
------

**MetingJS** © metowolf, Released under the MIT License.  

> Blog @meto · GitHub @metowolf · Twitter @metowolf · Telegram Channel @metooooo
