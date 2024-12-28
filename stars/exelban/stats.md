---
project: stats
stars: 26934
description: macOS system monitor in your menu bar
url: https://github.com/exelban/stats
---

Stats
=====

macOS system monitor in your menu bar

Installation
------------

### Manual

You can download the latest version here. This will download a file called `Stats.dmg`. Open it and move the app to the application folder.

### Homebrew

To install it using Homebrew, open the Terminal app and type:

brew install stats

Requirements
------------

Stats is supported on the released macOS version starting from macOS 10.15 (Catalina).

Features
--------

Stats is an application that allows you to monitor your macOS system.

-   CPU utilization
-   GPU utilization
-   Memory usage
-   Disk utilization
-   Network usage
-   Battery level
-   Fan's control (not maintained)
-   Sensors information (Temperature/Voltage/Power)
-   Bluetooth devices
-   Multiple time zone clock

FAQs
----

### How do you change the order of the menu bar icons?

macOS decides the order of the menu bar items not `Stats` - it may change after the first reboot after installing Stats.

To change the order of any menu bar icon - macOS Mojave (version 10.14) and up.

1.  Hold down ⌘ (command key).
2.  Drag the icon to the desired position on the menu bar.
3.  Release ⌘ (command key)

### What if you don't see sensors (M1 macs)?

Sensors data on the first generation of M1 mac could be obtained only from HID services. It's disabled by default because it consumes a lot of CPU and energy. You can enable it in the Sensors module settings with the option `HID sensors`.

It's only valid for M1 Apple Silicon macs. If you don't see sensors on another mac, please open an issue for that.

### How to show the CPU frequency?

The CPU frequency is available only on Intel-based macs. You need to have installed Intel Power Gadget (IPG) for that. It allows receiving the CPU frequency from the IPG driver. There is no way to obtain a CPU frequency on Apple silicon macs.

### How to reduce energy impact or CPU usage of Stats?

Stats tries to be efficient as it's possible. But reading some data periodically is not a cheap task. Each module has its own "price". So, if you want to reduce energy impact from the Stats you need to disable some Stats modules. The most inefficient modules are Sensors and Bluetooth. Disabling these modules could reduce CPU usage and power efficiency by up to 50% in some cases.

### Why my issue was closed without any response?

Most probably because it's a duplicated issue and there is an answer to the question, report, or proposition. Please use a search by closed issues to get an answer. So, if your issue was closed without any response, most probably it already has a response.

### Fan control

Fan control is in legacy mode. It does not receive any updates or fixes. It's not dropped from the app just because in the old Macs it works pretty acceptable. I'm open to accepting fixed or improvements (via PR) for this feature in case someone would like to help with that. But have no option and time to provide support for this feature.

Supported languages
-------------------

-   English
-   Polski
-   Українська
-   Русский
-   中文 (简体) (thanks to chenguokai, Tai-Zhou, and Jerry)
-   Türkçe (thanks to yusufozgul)
-   한국어 (thanks to escapeanaemia and iamhslee)
-   German (thanks to natterstefan and aneitel)
-   中文 (繁體) (thanks to iamch15542 and jrthsr700tmax)
-   Spanish (thanks to jcconca)
-   Vietnamese (thanks to HXD.VN)
-   French (thanks to RomainLt)
-   Italian (thanks to gmcinalli)
-   Portuguese (Brazil) (thanks to marcelochaves95 and pedroserigatto)
-   Norwegian Bokmål (thanks to rubjo)
-   日本語 (thanks to treastrain)
-   Portuguese (Portugal) (thanks to AdamModus)
-   Czech (thanks to mpl75)
-   Magyar (thanks to moriczr)
-   Bulgarian (thanks to zbrox)
-   Romanian (thanks to razluta)
-   Dutch (thanks to ngohungphuc)
-   Hrvatski (thanks to milotype)
-   Danish (thanks to casperes1996 and aleksanderbl29)
-   Catalan (thanks to davidalonso)
-   Indonesian (thanks to yooody)
-   Hebrew (thanks to BadSugar)
-   Slovenian (thanks to zigapovhe)
-   Greek (thanks to sudoxcess and vaionicle)
-   Persian (thanks to ShawnAlisson)
-   Slovenský (thanks to martinbernat)
-   Thai (thanks to apiphoomchu)
-   Estonian (thanks to postylem)
-   Hindi (thanks to patiljignesh)
-   Finnish (thanks to eightscrow)

You can help by adding a new language or improving the existing translation.

License
-------

MIT License
