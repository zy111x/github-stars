---
project: homeassistant
stars: 1384
description: Example Home Assistant Configs
url: https://github.com/geekofweek/homeassistant
---

Overview
========

My personal Home Assistant Container configurations with 800+ automations. These are my active automations and configurations that I use every day. Updated frequently as I add more devices and come up with more and more complicated ways to do simple tasks.

Menu
====

| Hubs | Lighting | Climate| Outlets & Switches| Locks | Security | Voice Assistant | Media | Sensors | Cameras | Garage | Vacuum | Blinds | Energy | Appliances | Network | Other Hardware | Software | Retired Devices | Screenshots |

Hubs
----

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

SONOFF Zigbee 3.0 USB Dongle Plus-E

1

USB

Zigbee2MQTT

Used to control all Zigbee smart bulbs and Blinds. ZHA was becoming un-reliable for me so switched to Zigbee2MQTT

Aeotec Z-Stick 7

1

USB

Z-Wave JS

Used to control all Z-Wave Devices. Integrated via zwavejs2mqtt container

Lutron Smart Bridge 2 Pro

1

Ethernet

Lutron Caséta

Controls Lutron Caseta light switches, dimmers, and Pico remotes

Bond Home

1

Wi-Fi

Bond Home

Controls ceiling fans and lights via RF remote control commands. Existing fans are each wired to a single switch that controls both power and light with fan and light controls done via a physical remote. The Bond Home Hub allowed for sending of those RF remote commands via the hub and the local API makes it possible to send said commands from Home Assistant.

Relevant hub configurations can be found within configuration.yaml

Lighting
--------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Philips Hue White and Color Ambiance

7

Zigbee

Zigbee2MQTT

Color changing smart bulbs

Philips Hue White and Color Ambiance LightStrip Plus Dimmable

1

Zigbee

Zigbee2MQTT

Color changing smart led strip. Used as accent lighting

Philips Hue White

9

Zigbee

Zigbee2MQTT

Non color changing smart bulbs

Cree Connected

9

Zigbee

Zigbee2MQTT

Non color changing smart bulbs

Lutron Caseta Wireless Dimmer

17

Lutron Clear Connect

Lutron Caséta

Smart dimmer switches that do not require a neutral wire

Lutron Caseta Wireless Lighting Switch

2

Lutron Clear Connect

Lutron Caséta

Smart on / off light switches

Lutron Caseta Pico Wireless Dimmer Switch

6

Lutron Clear Connect

Lutron Caséta

Decora wall mountable remote (that looks like a dimmer switch). Controls various lights

Lutron Aurora Smart Bulb Dimmer

4

Zigbee

Zigbee2MQTT

Smart Dimmer that attaches to existing Toggle light Switch.

LIFX Mini White

1

Wi-Fi

LIFX

Non color changing Wi-Fi smart bulbs. Used in places where Zigbee is not reliable (detached garage)

Philips Color A19

7

Wi-Fi

WiZ

Color changing Wi-Fi smart bulb. Used for various lights in place of Zigbee, which has not been the most reliable protocol for me.

Many of my automations rely on some form of lighting but many examples can be found in lights.yaml and location.yaml.

Climate
-------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Ecobee 3

1

Wi-Fi

ecobee / Ecobee Thermostat

Used as primary thermostat

Ecobee Room Sensor

9

Ecobee3

Ecobee Binary Sensor

Provides room temperature and room occupancy.

Dyson Pure Hot + Cool Link

1

Wi-Fi

Dyson (Custom Component)

Dyson Fan with Heater and Air Purifier

Temp Sensor Probe DS18b20

1

4 Relay ESP32

ESPHome

Waterproof Temperature sensor, connected directly to ESPHome module

I utilize a number of automations that adjust climate controls. Mostly they can be found in climate.yaml. Ecobee room sensors are heavily used in occupancy.yaml and as conditions in many automations

More detailed information on the ESPhome configuration can be found in here

Outlets & Switches
------------------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Wemo Mini Smart Plug

3

Wi-Fi

Belkin WeMo

Smart outlets utilized to control various devices via powering the outlet on/off (fans, Christmas Tree, etc). These are slowly being phased out

GE Z-Wave Wireless Smart Lighting Control Outdoor Module

4

Z-Wave

Z-Wave JS

Used to control low voltage outdoor lighting transformers, bug zapper, and Christmas lights (Holiday time only)

Remotec Zwave Dry Contact Fixture Module

1

Z-Wave

Z-Wave JS

Used to control gas fireplace

Dome Home Automation Water Shut-Off Valve

1

Z-Wave

Z-Wave JS

Used to shut off Water Main Supply to House in the event of water leak detected or while on Vacation

Kasa Outdoor Smart Plug

1

Wi-Fi

TP-Link Kasa Smart

Used to control outdoor devices, fountain pump, etc.

Kasa Smart Plug Mini with Energy Monitoring

2

Wi-Fi

TP-Link Kasa Smart

Used to control charging and power monitoring of electric bikes

Kasa Smart Plug Mini

4

Wi-Fi

TP-Link Kasa Smart

Used to control various devices, slowing phasing out Wemo in favor of these

Kasa Smart Plug Power Strip

3

Wi-Fi

TP-Link Kasa Smart

Used to control various devices with energy monitoring

Switches and outlets are used in various capacities, some are for lighting and some are for fans type devices. lights.yaml should have some good examples.

Locks
-----

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Schlage Connect Touchscreen Deadbolt

3

Z-Wave

Z-Wave JS

Smart locks used in automations to auto lock / unlock doors

Locks are used mostly as a way to lock / unlock doors based on locations, see location.yaml and locks.yaml for some examples

Security
--------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

GoControl Door/Window Sensor

3

Z-Wave

Z-Wave JS

Door sensors to detect if exterior doors have been opened / closed

GoControl Siren and Strobe

1

Z-Wave

Z-Wave JS

Alarm used for when alarm is triggered or when you want to get someone's attention

Door sensors, motion sensors, and the alarm siren are used in many different ways via alarm.yaml. I've also implemented some of the alarm functions as part of water\_works.yaml.

Voice Assistant
---------------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Amazon Echo

1

Wi-Fi

Home Assistant Cloud

Audio only Voice Assistant

Amazon Echo Dot

7

Wi-Fi

Home Assistant Cloud

Audio only Voice Assistant

Amazon Echo Spot

1

Wi-Fi

Home Assistant Cloud

Voice Assistant with small display

Amazon Echo Show

1

Wi-Fi

Home Assistant Cloud

Voice Assistant with display

Amazon Echo Show 5

1

Wi-Fi

Home Assistant Cloud

Voice Assistant with display

I go for native Echo integration wherever possible, but a few devices are not currently supported where I've had to implement some work arounds via Home Assistant Cloud (previously Emulated Hue). Most of these are just exposed via an input\_boolean and customize.yaml. This allows the ability to have echo turn on or off an input\_boolean in turn triggering an automation.

I also utilized the Amazon Alexa Media Player Custom Component, mostly to pick up the timers into Home Assistant

Media
-----

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Apple TV 4k

6

Wi-Fi

Apple TV

Used for media playback on 4k TVs

Sonos Arc

1

Ethernet

Sonos

TV Soundbar for audio playback and Home Assistant TTS.

Sonos Sub

1

Ethernet

Sonos

Audio playback and Home Assistant TTS

Sonos Play:1

10

Wi-Fi

Sonos

Audio playback and Home Assistant TTS

Sonos One SL

2

Wi-Fi

Sonos

Audio playback and Home Assistant TTS

Sonos Move

2

Wi-Fi

Sonos

Portable Audio playback and Home Assistant TTS

Sonos Roam

1

Wi-Fi

Sonos

Portable Audio playback and Home Assistant TTS

Sonos Beam

2

Wi-Fi

Sonos

TV Soundbar for Audio playback and Home Assistant TTS

Sonos Port

1

Ethernet

Sonos

Audio playback and Home Assistant TTS. Connects Sonos to existing surround sound system

Sonos Connect:AMP

1

Wi-Fi

Sonos

Audio playback and Home Assistant TTS. Connects Sonos to outdoor speakers

Lutron Caseta Pico Remote Control for Audio

3

Lutron Clear Connect

Lutron Caséta

Decora wall mountable remote. Used to control Sonos

Logitech Harmony Hub

3

Wi-Fi

Harmony Hub Remote

Controls various AV equipment and other devices that utilize infrared remotes

Samsung QN75Q80TA

1

Wi-Fi

Samsung Smart TV

75" 4K QLED TV

LG OLED55BXPUA

1

Wi-Fi

LG webOS Smart TV

55" 4K OLED TV

Plex Media Server

1

Ethernet

Plex / Plex Activity Monitor

Media Server

Most media player based automations can be found in media.yaml and some Text to Speech (TTS) based automation in various automations.

Harmony Hubs work via a combination of input\_selects, scripts, and automations in media.yaml.

Sensors
-------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Nest Protect v2 Battery

6

Wi-Fi

Nest

Smoke Alarm and CO Alarm. I realized most of my Smoke Alarms had long suprased the 10 year mark and it was time for some replacements. I usually avoid Google owned products for various reasons, but the Nest Protect line has high praise.

Dome Motion Detector - Light Sensor

8

Z-Wave

Z-Wave JS

Motion and Light Level sensor used to automate around motion events and current room brightness.

GoControl PIR Motion Detector

1

Z-Wave

Z-Wave JS

Motion sensor used to automate around motion events.

ZOOZ 4-in-1 Sensor ZSE40

5

Z-Wave

Z-Wave JS

Motion,temperature, humidity, and light level sensor used to automate around motion events.

Dome Home Automation Leak Sensor

8

Z-Wave

Z-Wave JS

Water sensors used to detect the pressence of water as a preventive measure

Aeon Labs Water Sensor

2

Z-Wave

Z-Wave JS

Water sensors used to detect the pressence of water as a preventive measure

Ecolink Door/Window Sensor

2

Z-Wave

Z-Wave JS

Trial run on Window sensors to stop my blinds from closing when a Window is Open. Starting small but we all know how that will end up. ALL THE WINDOWS!

Flume v2

2

Wi-Fi

Flume

Monitors whole house water consumption based on water meter useage

Water sensors serve one major function, to alert me to the presence of water. Almost all of those automations can be fond via water\_works.yaml

Cameras
-------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Ubiquiti Unifi G4 Doorbell Pro

1

Wi-Fi

Unifi Protect

Automated around binary sensors via person detection or doorbell button press

Ubiquiti Unifi Protect G4 Pro

1

Ethernet

Unifi Protect

4K POE Camera.

Ubiquiti Unifi G4 Bullet

1

Ethernet

Unifi Protect

1440p POE Camera.

Ubiquiti UniFi Video G5 Flex

5

Ethernet

Unifi Protect

1440p POE Camera.

Ubiquiti UniFi Video G3 Flex

1

Ethernet

Unifi Protect

1080p POE Camera.

Ubiquiti UniFi Video G3 Instant

2

Wi-Fi

Unifi Protect

3D Printer Cameras.

Ubiquiti UniFi Video G4 Instant

2

Wi-Fi

Unifi Protect

1440p Wi-Fi Camera.

Unifi Network Video Recorder (UNVR)

1

Ethernet

Unifi Protect

Unifi Protect NVR.

The cameras are used in a number of ways to trigger an action based on person detection, someone ringing the doorbell, and as a UI element. Examples can be found in camera.yaml

I also send camera feeds as a payload on a few iOS notifications, those can mostly be found in camera.yaml

Garage
------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

4 Relay ESP32

1

Wi-Fi

ESPHome

Automated to open / close garage door on location and auto close after specific time intervals

Honeywell Ademco 958 Overhead Door Contacts

1

4 Relay ESP32

ESPHome

Door Sensor used with ESPHome Relay

Similar to locks, the Garage door is mostly automated to open / close based on location and after a set amount of time. Examples can be found in location.yaml and garage.yaml

More detailed information on the ESPhome configuration can be found in here

Vacuum
------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

iRobot j9+ Combo

1

Wi-Fi

iRobot Roomba

Automated to run at specific times based on presence detection

iRobot j7+

1

Wi-Fi

iRobot Roomba

Automated to run at specific times based on presence detection

iRobot i7+

1

Wi-Fi

iRobot Roomba

Automated to run at specific times based on presence detection

iRobot Braava jet 240

1

Bluetooth

NA

Currently not integrated into Home Assistant. Unknown if this can ever be automated

All Roomba related automations can be found in roomba.yaml

Blinds
------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Ikea FYRTUR

10

Zigbee

ZHA

Automated to open and close blinds based on motion, location, and sun elevation

Ikea PRAKTLYSING

2

Zigbee

ZHA

Automated to open and close blinds based on motion, location, and sun elevation

All Blinds related automations can be found in blinds.yaml

Energy
------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

IoTaWatt

1

Wi-Fi

IoTaWatt

Electric power meter that monitors via CT clamps on Mains power and circuit breakers

AccuCT 200A x 25mm split-core

2

IoTaWatt

IoTaWatt

200 Amp CT Clamps for Mains power monitoring

AccuCT 100A x 16mm split-core

2

IoTaWatt

IoTaWatt

100 Amp CT Clamps for Hot Tub and Air Conditioner power monitoring

AccuCT 100A x 16mm split-core

3

IoTaWatt

IoTaWatt

50 Amp CT Clamps for various circuits power monitoring such as Furnace and refrigerator

Utilzing Home Assitant Energy dashboard plus creating sensors and automations for things such as my Hot Tub and Air Conditoner / HVAC system.

Appliances
----------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

LG Washer WT7300CW

1

Wi-Fi

LG ThinQ

Automated for notifications and remaining run time. Currently using a custom component for testing purposes

LG Dryer DLGX7801WE

1

Wi-Fi

LG ThinQ

Automated for notifications and remaining run time. Currently using a custom component for testing purposes

All laundry related automations can be found in laundry.yaml

Network
-------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Ubiquiti UniFi Cloud Key Gen2 Plus

1

Ethernet

Ubiquiti Unifi

Unifi Controller. Presence detection for non household members and devices

Ubiquiti Networks Unifi Next-generation Gateway Pro (UXG-Pro-US)

1

Ethernet

Ubiquiti Unifi

Primary Router. Presence detection for non household members and devices

Ubiquiti Networks UniFi Enterprise PoE - 24 Ports (USW-Enterprise-24-PoE)

1

Ethernet

Ubiquiti Unifi WAP

Primary Network Switch. Presence detection for non household members and devices

Ubiquiti Networks UniFi Switch PRO PoE - 24 Ports (USW-Pro-24-POE)

1

Ethernet

Ubiquiti Unifi WAP

Secondary Network Switch. Presence detection for non household members and devices

Ubiquiti Networks UniFi Switch Enterprise - 8 Ports (USW-Enterprise-8-PoE)

2

Ethernet

Ubiquiti Unifi

Additional Network Switches. Presence detection for non household members and devices

Ubiquiti Networks UniFi Access Point WiFi 6 Enterprise (U6-Enterprise)

3

Ethernet

Ubiquiti Unifi

Wireless Access Point for interior and exterior use. Presence detection for non household members and devices.

Ubiquiti Networks UniFi Access Point WiFi 6 Long-Range (U6-LR-US)

2

Ethernet

Ubiquiti Unifi

Wireless Access Point for interior and exterior use. Presence detection for non household members and devices.

Since I don’t use the network equipment as my primary presence detection method most of the automation is around house guests via location.yaml. The main function of the network equipment is to be network equipment for my fiber internet service.

Other Hardware
--------------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

Intel NUC NUC8i5BEH

1

Ethernet

NA

Primary Linux server. Docker Containers and Plex media server run off this device.

QNAP TS-453D

1

Ethernet

QNAP Sensor

Primary storage array. Configured with 4x Ultrastar 14TB Data Center Hard Disk Drives

QNAP TS-453 Pro

1

Ethernet

QNAP Sensor

Secondary storage array. Configured with 4x WD Red Pro 4TB NAS Hard Disk Drives

Prusa MK4

1

Ethernet

PrusaLink

3D Printer connected to Home Assitant via PrusaLink. Because if you're going to make useless non-sense, might as well double down.

Prusa i3 MK3S+

1

Ethernet

RESTful

3D Printer connected to Home Assitant via the PrusaLink RESTful API running on a Raspberry Pi 4 B. I would be using PrusaLink integration but it's busted for the updated versions of the API. Sometimes I make neat objects to help with Home Automation, but mostly useless stuff for fun.

HP OfficeJet Pro 8025

1

Wi-Fi

Internet Printing Protocol (IPP)

Regualr inkjet printer that works whenever it feels like because it's a printer.

APC 1500VA Back-Up UPS

2

USB / Ethernet

NUT Sensor

Primary Uninterruptible Power Supply (UPS). Connected via the NUT component utlizing to a Linux NUT server

Ulanzi Awtrix Smart Pixel Clock

2

Wi-Fi

MQTT

8x32 RGB LED panel used to display time and various notifications / status. Using the Awtrix Light project to integrate with MQTT and Home Assistant. It also looks super cool.

Software
--------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

iOS App

2

NA

iOS

Used as Home Assistant interface on mobile devices and primary method of presence detection.

Docker

1

Ethernet

Installation on Docker

Home Assistant install runs as a Docker Container

Pi-hole

3

Ethernet / Wi-Fi

Pi-Hole Sensor

Ad blocking. All isntances run as LXC containers on a Proxmox cluster

Home Assistant Management Tool

1

Ethernet

NA

Custom Shell script for managing Home Assistant

The iOS app is used for some notifications within various automations. The native iOS app is the main method of doing any location based automations via location.yaml and many of the conditions I use are based on presence detection of household members.

More detailed information on the custom Home Assistant Managment Tools can be found here.

Retired
-------

| Menu | Screenshots |

Device

Quantity

Connection

Home Assistant

Notes

SONOFF Zigbee 3.0 USB Dongle v2 (Plus-E)

1

USB

ZHA

Used to control all Zigbee smart bulbs and Blinds. Replaced by Home Assistant SkyConnect

Hue Hub v2

1

Ethernet

Philips Hue

Used to control all Zigbee smart bulbs. Replaced by Home Assistant ZHA

IKEA TRÅDFRI

1

Ethernet

IKEA TRÅDFRI

Currently only used to support the IKEA line of blinds. Replaced by Home Assistant ZHA

Vera Plus

1

Ethernet

Vera

Used as a dumb hub to connect Z-Wave devices. Replaced by a Z-Wave Stick

Wink Hub v1

1

Wi-Fi

Wink

Semi retired, using it as a z-wave repeater for Vera. Once upon a time I really loved Wink, but when you don't stock hardware for almost a year and your buisness model is selling hardware... time for that slow ride to the Cloud API in the sky. Not to mention the massive outages when staff clock out and don't fix until morning (forget to renew an expired certificate anyone). It was a fun ride Wink, hopefully your death will not be to slow and painful, but i.am+ wants to watch the world burn... probably.

Quirky + GE Aros Smart Window Air Conditioner

1

Wi-Fi

Wink Climate

No longer used after new HVAC system installed. Cooling effieceny had dropped and was more of an energy hog than actually making a difference in temprature comfort.

Frigidaire Cool Connect Smart Portable Air Conditioner

1

Wi-Fi

Harmony Hub Remote

No longer in daily use after new HVAC system installed. May be brought back into service as needed.

iHome WiFI Smart Plug

2

Wink Hub (Wi-Fi)

Wink Switch

Not using these anymore due to overall poor reliability

Foscam FI9800P

1

Wi-Fi

Foscam IP Camera

Replaced by Unifi G3 Flex

Ubiquiti UniFi Cloud Key

1

Ethernet

Ubiquiti Unifi WAP

Unifi Controller. Replaced by CloudKey gen2 Plus

Ubiquiti UVC-G3 UniFi Video Camera

2

Ethernet

Unifi Protect(Custom Component)

1080p POE Camera. Replaced with G4 versions

MyQ Smart Garage Door Opener

1

Wi-Fi

MyQ Cover

Got fed up with the sheer disrepect this device had for reliability. Would work great for months, then decide it had enough and work when it felt like.

MyQ Home Bridge

1

Wi-Fi

MyQ Cover

See Above

TP-Link Smart Plug HS100

1

Wi-Fi

TP-Link Switch

No longer needed, might re-use at some point

Wink Relay

2

Wi-Fi

Wink

Wall mounted touch screen. Wink interface was rubbish and was replaced with the Home Assistant dashboard. It provides binary sensors for the two push buttons, temperature, and humidity sensors. Doesn't get used much but looks cool. Turns out it was just rubbish and decided to go into an endless reboot loop, on top of the screen already having burn in problems even when not on all the time. Retired to the trash can.

Ubiquiti Networks airGateway LR Wireless AP

1

Wi-Fi

NA

Was used to connect Ubiquiti UVC-G3 UniFi Video Camera to the wireless network where running an ethernet cable wasn't feasible. Connects to POE injector. Replaced by Mesh AP and Switch

Sonos Connect

1

Ethernet

Sonos

Audio playback and Home Assistant TTS. Connects Sonos to existing surround sound system. Now considered a legacy Sonos device

Ubiquiti Networks Unifi AP PRO (UAP-AC-PRO-US)

1

Ethernet

Ubiquiti Unifi WAP

Wireless Access Point for interior and exterior use. Replaced by the Unifi NanoHD.

Ubiquiti Networks Unifi AP Long Range (UAP-AC-LR-US)

1

Ethernet

Ubiquiti Unifi WAP

Wireless Access Point for interior use. Presence detection for non household members and devices.

Insignia - Wi-Fi Garage Door Controller

1

Wi-Fi

HomeKit Controller

Automated to open / close garage door on location and auto close after specific time intervals

Ring Video Doorbell

1

Wi-Fi

Ring / Ring Binary Sensor

Automated around binary sensors via motion or doorbell button press. Replaced with a Version 3 Plus.

iRobot Roomba 650

1

NA

NA

Currently not integrated into Home Assistant. Investigating options for future integration

Lutron Smart Bridge 2

1

Ethernet

Lutron Caseta

Replaced with a Lutron Smart Bridge 2 Pro

Creality Ender 3 V2

1

Wi-Fi

OctoPrint

3D Printer connected to Home Assitant via OctoPrint running on a Raspberry Pi 3 B+. Got tired of messing around with it, I just want to print useless objects with ease

Yamaha RX-V483BL

1

Wi-Fi

Yamaha Network Receivers

Surround Sound Receiver. Works in conjunction with the Sonos Connect, Harmony Hub, Apple TV 4k and various other media devices. Replaced with Sonos Arc System

Ubiquiti Networks UniFi nanoHD (UAP-NANOHD-US)

2

Ethernet

Ubiquiti Unifi

Wireless Access Point for interior and exterior use. Presence detection for non household members and devices. Replaced by WiFi 6 Models

Ubiquiti Networks Unifi AP Lite (UAP-AC-LITE)

1

Ethernet

Ubiquiti Unifi

Wireless Access Point for interior use. Presence detection for non household members and devices. Replaced by WiFi 6 Models

iRobot Roomba 980

1

Wi-Fi

iRobot Roomba

Automated to run at specific times based on presence detection

Ubiquiti Networks Unifi Security Gateway (USG)

1

Ethernet

Ubiquiti Unifi

Primary Router. Presence detection for non household members and devices. Replaced by UXG Pro

Locative iOS App

2

NA

Locative

Put back in retirement since the native iOS app works so well

LUMIMAN LM530

1

Wi-Fi

Tuya

Retired in favor of Philips Wiz line. Tuya integration is hot garbage. Routine issues and an account that expires after 6 monhts.

Apple TV 4

2

Wi-Fi

Apple TV

Used for media playback on TVs. Replaced by newer Apple TVs

Wemo Insight Smart Plug

2

Wi-Fi

Belkin WeMo

Smart outlet utilized to monitor power. Wemo devices started to become unreliable so they are being phased out.

Ubiquiti Networks UniFi Switch - 24 Ports (US-24-250W)

1

Ethernet

Ubiquiti Unifi

Secondary Network Switch. Presence detection for non household members and devices

Ubiquiti Networks 8-Port UniFi Switch (US-8-150W)

2

Ethernet

Ubiquiti Unifi

Additional Network Switches. Presence detection for non household members and devices

Ubiquiti Networks Unifi Access Point WiFi 6 Lite (U6-Lite-US)

2

Ethernet

Ubiquiti Unifi

Wireless Access Point for interior use. Presence detection for non household members and devices.

Ubiquiti Networks Unifi Mesh AP (UAP-AC-M-US)

1

Ethernet

Ubiquiti Unifi

Wireless Mesh Access Point for exterior use. Used in detached garage to provide internet and network traffic for cameras and devices. Presence detection for non household members and devices.

Ubiquiti Networks Unifi AP PRO (UAP-AC-PRO-US)

1

Ethernet

Ubiquiti Unifi

Wireless Access Point for interior and exterior use. Presence detection for non household members and devices.

Zooz Power Switch ZEN15

2

Z-Wave

Z-Wave JS

Realized these would flood the z-wave network with traffic and make it unstable, do not recommend

iRobot Roomba 980

1

Wi-Fi

iRobot Roomba

Automated to run at specific times based on presence detection

Prusa Mini+

1

Ethernet

PrusaLink

3D Printer connected to Home Assitant via PrusaLink.

Ring Video Doorbell 3 Plus

1

Wi-Fi

Ring / Ring Binary Sensor

Automated around binary sensors via motion or doorbell button press. Retired as I am attempting to purge any Cluod based devices, espeically ones with subscriptions.

Screenshots
===========

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |

| Menu |
