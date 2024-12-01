---
project: node-sonos
stars: 704
description: 🔈 Sonos Media Player Interface/Client
---

  
  
  
node-sonos  
  

=========================

**Control your Sonos devices with JavaScript (node.js)**

**node-sonos** gives you the power to control all your Sonos devices from your own apps in JavaScript. Automatically discover your devices on the network and control the playback and queue with instant events announcing change.

Features
--------

-   Device Discovery
-   Queue Control
-   Volume Control
-   Spotify Support
-   Radio
-   Change Events

Install
-------

Published versions (recommended)

```
$ npm install sonos
```

From the repo, living on the edge

```
$ npm install git://github.com/bencevans/node-sonos.git
```

Quick Start
-----------

### Discovering Devices

const { DeviceDiscovery } \= require('sonos')

// event on all found...
DeviceDiscovery((device) \=> {
  console.log('found device at ' + device.host)

  // mute every device...
  device.setMuted(true)
    .then(d \=> console.log(\`${d.host} now muted\`))
})

// find one device
DeviceDiscovery().once('DeviceAvailable', (device) \=> {
  console.log('found device at ' + device.host)

  // get all groups
  device.getAllGroups().then(groups \=> {
    groups.forEach(group \=> {
      console.log(group.Name);
    })
  })
})

### Discovering devices async

const DeviceDiscovery \= require('sonos').AsyncDeviceDiscovery
let discovery \= new DeviceDiscovery()
discovery.discover().then((device, model) \=> {
    // Do stuff, see examples/devicediscovery.js
})

### Controlling Known Devices

const { Sonos } \= require('sonos')

const device \= new Sonos('192.168.1.56');

device.play()
  .then(() \=> console.log('now playing'))

device.getVolume()
  .then((volume) \=> console.log(\`current volume = ${volume}\`))

API
---

-   DeviceDiscovery(\[options\], \[deviceAvailableListener\])
-   Class: DeviceDiscovery(\[options\])
    -   Event: 'DeviceAvailable'
    -   destroy()
-   Class: 'AsyncDeviceDiscovery'
    -   discover(\[options\])
    -   discoverMultiple(\[options\])
-   Class: Sonos(host, \[port\])
    -   currentTrack()
    -   deviceDescription()
    -   flush()
    -   getCurrentState()
    -   getLEDState()
    -   getMusicLibrary(search, options)
    -   getMuted()
    -   getTopology() Doesn't work if you upgraded to Sonos v9.1. Check-out getAllGroups() for some replacement.
    -   getVolume()
    -   getZoneAttrs()
    -   getZoneInfo()
    -   getQueue()
    -   next()
    -   parseDIDL(didl)
    -   pause()
    -   play(uri)
    -   togglePlayback()
    -   previous()
    -   queue(uri, positionInQueue)
    -   queueNext(uri)
    -   request(endpoint, action, body, responseTag)
    -   seek(seconds)
    -   setLEDState(desiredState)
    -   setMuted(muted)
    -   setName(name)
    -   getPlayMode()
    -   setPlayMode(mode)
    -   setVolume(volume)
    -   stop()
    -   setSpotifyRegion(region)
    -   alarmClockService()
        -   ListAlarms()
        -   PatchAlarm(id,options)
        -   SetAlarm(id,enabled)
    -   joinGroup(otherDeviceName)
    -   leaveGroup()
    -   getAllGroups()
    -   startListening(options)
    -   stopListening()
    -   Event: 'CurrentTrack'
    -   Event: 'NextTrack'
    -   Event: 'PlayState' and 'PlaybackStopped'
    -   Event: 'AVTransport'
    -   Event: 'Volume'
    -   Event: 'Muted'
    -   Event: 'RenderingControl'

Documentation
-------------

We tried to add jsdoc info to all functions, and generate documentation from it. /docs

Examples
--------

Additional examples can be found in the /examples directory within the repository.

In The Wild
-----------

node-sonos in use across the interwebs. Missing yours? Add it and send us a pull request!

### Apps

-   **AirSonos** - Apple AirPlay (iOS, OS X) support to all Sonos devices on a network.
-   **sonos-cli** - Command Line Interface for Sonos
-   **sonos2mqtt** - Bridge between Sonos and an MQTT server
-   **homebridge-zp** - Homebridge plugin for Sonos ZonePlayer
-   **ZenMusic** - Control Sonos thru #Slack!
-   **gladys-sonos** - Control Sonos with Gladys a Raspberry Pi Home Assistant
-   **sonos-web** - Sonos controller for your web browser
-   **BudgieStream** - Stream system output to Sonos

### Writeups

-   **How we gave our studio WWE-style entrances using iBeacons and Sonos** - A technical run-down of using futuristic technology for sheer entertainment value

Maintainers
-----------

-   Ben Evans (@bencevans)
-   Stephen Wan (@stephen)
-   Marshall T. Rose (@mrose17)
-   Stephan van Rooij (@svrooij)

Contributors ✨
--------------

Thanks goes to these wonderful people (emoji key):

  
**Ben Evans**  
💻 📖 🤔 🚧

  
**Stephan van Rooij**  
💻 📖 👀 🚧

  
**Scott Seiber**  
💻 ⚠️

  
**Marshall T. Rose**  
💻 🚧

  
**Stephen Wan**  
💻 🚧

  
**Pascal Opitz**  
💻

  
**Shobhit Gupta**  
💻

  
**Martin Giger**  
💻 🐛

  
**Matthias Brünning**  
💻

  
**Erik Baauw**  
💻 🐛

  
**Thomas Mirlacher**  
💻

  
**Tobias Hultman**  
💻

  
**Monsur Hossain**  
💻

  
**Ben A.**  
💻

  
**Manuel Heim**  
💻

  
**Alan Layng**  
💻 🐛

  
**Niels Keurentjes**  
💻

  
**Arnaud Vallat**  
💻

  
**Chris Wiggins**  
💻

  
**Dennis**  
💻

  
**Henrik Tilly**  
💻 🐛

  
**Ian Sutherland**  
💻

  
**Jason Woods**  
💻

  
**Marko Harjula**  
💻

  
**Michaël Dierick**  
💻

  
**Travis Clarke**  
💻

  
**Vincent Klaiber**  
💻

  
**VonRehberg**  
💻

  
**Adam Varga**  
💻

  
**Arjen van der Ende**  
💻

  
**Craig Lonsdale**  
💻

  
**Craig Simpson**  
💻

  
**Denys Vitali**  
💻

  
**Erik Beuschau**  
💻

  
**H. Klages**  
💻 🐛

  
**Keith McKnight**  
💻

  
**Kenneth Geisshirt**  
💻

  
**Kirmani**  
💻

  
**Marc Easen**  
💻

  
**Michael Stegeman**  
💻

  
**Morten Scheel**  
💻

  
**Nathan Wong**  
💻

  
**Sam Daitzman**  
💻

  
**Sammy Griffiths**  
💻

  
**Trevor Sullivan**  
💻

  
**mistaTT**  
💻

  
**wafflegolfing**  
💻

  
**Björn Häggquist**  
💻

  
**wwwizzarrdry**  
🐛

  
**Magnus Lundberg**  
🐛

  
**Nick Dandakis**  
🐛

This project follows the all-contributors specification. Contributions of any kind welcome! You can get added by mentioning the `@all-contributors` bot in a pr or issue.

If we missed you, just go to your (closed) issue or pr and mention the bot to get added.

Issues
------

If you got discovered an issue with this library, please check the issue-tracker. And create an issue if your problem isn't discovered by someone else. If you want to contribute something check out these 'help-wanted' issues.

Questions
---------

The best place to ask your questions is in Discord, we are there to help you. Join us on Discord.

### Unsupported sonos features

There is a great other library to control Sonos with Python, they also have a great list of all possible soap actions here. So if you have anything that you cannot do with node-sonos but that you can with the official app. You could have a look in the above list, or use wireshark to investigate the protocol.

### NPM publish

We try to react to all pull-requests, but if you think we don't respond in time, please don't create a 'sonos-by-xyz' or a 'node-sonos-by-xyz' package on NPM. This might lead to people installing the wrong version.

If you want to publish your own version, please do it as a user-scoped eg. `@svrooij/sonos` package.

1.  Change the top of the readme to state your specific changes.
2.  Change the `name` of the project to `@npm_username/sonos`
3.  Publish it to npm `npm publish --access=public`

Development
-----------

If you want to make this library better, you can follow these steps.

1.  Create a fork
2.  Make changes
3.  (optional) Create tests for the feature or the bug, see sonos.test.js.
4.  Run `SONOS_HOST=192.168.x.x npm run test` to test your code (against an actual sonos device, change the ip)
5.  Check-in your code in a single commit. Make sure your commit starts with `fix:` for a bugfix or `feat:` for a new feature followed by a short description. You can also follow with an empty line followed by a more details description.
6.  Send a pull-request
7.  Hold-on, we will be checking them.

If you already had a fork, make sure it is updated with the latest master so things don't get complicated when we want to merge the PR.

git remote add upstream https://github.com/bencevans/node-sonos.git
git fetch upstream
git checkout master
git rebase upstream/master
git push origin

Licence
-------

MIT © Ben Evans
