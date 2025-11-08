---
project: spy-spotify
stars: 2264
description: 🎤 Records Spotify to mp3 without ads and adds media tags to the files 🎵
url: https://github.com/jwallet/spy-spotify
---

Spytify is a Spotify recorder for Windows which records Spotify audio without recording or playing ads. It automatically splits songs into separate tracks and records to WAV or MP3 with media metadata, meaning you can easily start enjoying your music offline.

### How does it work?

Spytify records what Spotify outputs, which is a longer process than downloading a Spotify playlist with a tool.

However, Spytify ensures that all tracks will be the official released one, all sound volume normalized and with media tags and album cover. Playlist Downloaders get mostly all tracks from YouTube which means that they can't guarantee the choosen track will fit 100% the one in your playlist and they will all be the same quality.

Spytify encodes to the same quality that Spotify outputs (Spotify Free 160kbps, Spotify Premium 320kbps), so the recorded copy will be indistinguishable from Spotify’s one.

**Spytify is meant to be used with a Spotify free account**, even better a fresh new one (Spotify may monitor your account activities).

### How to install it?

Follow the steps shown in the F.A.Q section : _How to install Spytify?_

### How to use it?

A standard use is to install the Virtual Audio Cable and start a recording session on it using your favorite playlist and let it record overnight, so you avoid waiting for it to end, because Spytify does not download but records. You will then get all your songs automatically split into separate tracks without ads and with metadata.

A recorder requires a good sound card to be able to record good quality, that's why Spytify comes with a Virtual Audio Cable device, if you have issues with your sound card (volume slider and other apps sound affects the recordings, or overall recorded sound quality is worst than Spotify) you can install this virtual device using the **Speakers+** icon in Spytify settings.

Don't forget to hit the F.A.Q. for tips on:

-   _How to install Virtual Audio Cable device for better recording quality?_
-   _How to isolate Spytify and Spotify on a virtual audio device to avoid background noises?_
-   _How to reroute sound/output of a virtual audio device to my main audio device to listen to it?_
-   _How to connect to Spotify API for more accurate media tags?_

### Features

Splits the recorded sound into individual tracks using the artist and track names as the title, like so:

> Artist - Track.mp3

Saves all recordings under the same path:

> ../My Music/

Automatically adds metadata from Last.fm (or Spotify API) to .mp3 file:

-   Last.FM : Spytify won't need to be connected to Spotify. It's safer than Spotify API, however the metadata won't be as accurate as the official API.
-   Spotify API: You need to create your own Spotify API keys and set it in Spytify. Doing this gives better metadata results, however because you are connected to Spotify API, it's easier for them to know that you linked an app that fetches album cover. So you might get a warning from them using this API, but since Spytify does not download directly from Spotify (using the Connect API to receive OGG files which requires Premium), you have less chance to have your account suspended. Anyway, just to be sure, create a new one.

### Requirements

Spytify runs on Windows only.

-   Microsoft Framework (.NET 4.6.1 or higher).
-   Spotify Desktop application.

A **free Spotify account** will work and its recommanded since Spotify may monitor your account, so go create a new one! However, Spotify restricts audio quality to 160 kbps. Having a Premium Spotify subscription will enable recording of up to 320 kbps audio.

Support Spytify
---------------

😃 If you like Spytify, you can help me out for a couple of beers 🍺 or give it a star ⭐

Download
--------
