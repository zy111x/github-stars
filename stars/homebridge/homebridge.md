---
project: homebridge
stars: 24223
description: HomeKit support for the impatient.
url: https://github.com/homebridge/homebridge
---

Homebridge
==========

  

**Homebridge** is a lightweight Node.js server you can run on your home network that emulates the iOS HomeKit API. It supports Plugins, which are community-contributed modules that provide a basic bridge from HomeKit to various 3rd-party APIs provided by manufacturers of "smart home" devices.

Since Siri supports devices added through HomeKit, this means that with Homebridge you can ask Siri to control devices that don't have any support for HomeKit at all. For instance, using just some of the available plugins, you can say:

-   _Siri, unlock the back door._ \[pictured to the right\]
-   _Siri, open the garage door._
-   _Siri, turn on the coffee maker._
-   _Siri, turn on the living room lights._
-   _Siri, good morning!_

You can explore all available plugins at the NPM website by searching for the keyword `homebridge-plugin`.

Community
---------

The official Homebridge Discord server and Reddit community are where users can discuss Homebridge and ask for help.

HomeKit communities can also be found on both Discord and Reddit.

Installation
------------

### Raspberry Pi

Official Homebridge Raspberry Pi Image  
Install Homebridge on Raspbian

* * *

### Linux

Debian or Ubuntu Linux | Red Hat, CentOS or Fedora Linux | Arch / Manjaro Linux|Install Homebridge on Arch Linux  

* * *

### macOS

Install Homebridge on macOS

* * *

### Windows 10 / 11

Install Homebridge on Windows 10 / 11 Using Hyper V

* * *

### Docker

Install Homebridge on Docker  
Synology | Unraid | QNAP | TrueNAS Scale

* * *

### Synology DSM

Install Homebridge on Synology DSM 7

### Other Platforms

Other Platforms

Adding Homebridge to iOS
------------------------

1.  Open the Home app on your device.
2.  Tap the Home tab, then tap .
3.  Tap _Add Accessory_, then scan the QR code shown in the Homebridge UI or your Homebridge logs.

If the bridge does not have any accessories yet, you may receive a message saying _Additional Set-up Required_, this is ok, as you add plugins they will show up in the Home app without the need to pair again (except for Cameras and TVs).

Cameras and most TV devices are exposed as separate accessories and each needs to be paired separately. See this wiki article for instructions.

Interacting with your Devices
-----------------------------

Once your device has been added to HomeKit, you should be able to tell Siri to control your devices. However, realize that Siri is a cloud service, and iOS may need some time to synchronize your device information with iCloud.

One final thing to remember is that Siri will almost always prefer its default phrase handling over HomeKit devices. For instance, if you name your Sonos device "Radio" and try saying "Siri, turn on the Radio" then Siri will probably start playing an iTunes Radio station on your phone. Even if you name it "Sonos" and say "Siri, turn on the Sonos", Siri will probably just launch the Sonos app instead. This is why, for instance, the suggested `name` for the Sonos accessory is "Speakers".

Plugin Development
------------------

The https://developers.homebridge.io website contains the Homebridge API reference, available service and characteristic types, and plugin examples.

The Homebridge Plugin Template project provides a base you can use to create your own _platform_ plugin.

There are many existing plugins you can study; you might start with the Homebridge Example Plugins or a plugin that already implements the device type you need.

When writing your plugin, you'll want Homebridge to load it from your development directory instead of publishing it to `npm` each time. Run this command inside your plugin project folder so your global installation of Homebridge can discover it:

npm link

_You can undo this using the `npm unlink` command._

Then start Homebridge in debug mode:

homebridge -D

This will start up Homebridge and load your in-development plugin. Note that you can also direct Homebridge to load your configuration from somewhere besides the default `~/.homebridge`, for example:

homebridge -D -U ~/.homebridge-dev

This is very useful when you are already using your development machine to host a "real" Homebridge instance (with all your accessories) that you don't want to disturb.

Common Issues
-------------

### Home App Says Accessory Already Added

To fix this, Reset Homebridge.

### My iOS App Can't Find Homebridge

Try the following:

1.  Swap between the `Bonjour HAP` and `Ciao` mDNS Advertiser options. See the wiki for more details.
2.  iOS DNS cache has gone stale or gotten misconfigured. To fix this, turn airplane mode on and back off to flush the DNS cache.

### Limitations

-   One bridge can only expose 150 accessories due to a HomeKit limit. You can however run your plugins as a Child Bridge or run Multiple Homebridge Instances to get around this limitation.
-   Once an accessory has been added to the Home app, changing its name via Homebridge won't be automatically reflected in iOS. You must change it via the Home app as well.

Why Homebridge?
---------------

Technically, the device manufacturers should be the ones implementing the HomeKit API. And I'm sure they will - eventually. When they do, this project will be obsolete, and I hope that happens soon. In the meantime, Homebridge is a fun way to get a taste of the future, for those who just can't bear to wait until "real" HomeKit devices are on the market.

Credit
------

Homebridge was originally created by Nick Farina.

The original HomeKit API work was done by Khaos Tian in his HAP-NodeJS project.
