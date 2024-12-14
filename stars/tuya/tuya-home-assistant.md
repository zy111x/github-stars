---
project: tuya-home-assistant
stars: 887
description: Home Assistant integration for controlling Powered by Tuya  (PBT) devices using Tuya Open API, maintained by the Home Assistant Community and Tuya Developer Team.
url: https://github.com/tuya/tuya-home-assistant
---

Breaking Update:
----------------

Tuya has developed a new HA integration called Smart Life, available for free to developers. Currently in beta testing, it eliminates the need to register a cloud development project on Tuya IoT platform and extend the Tuya cloud development IoT Core Service resources when expired. This significantly lowers the access barrier and enhances user experience. If you're interested, please check the following links to get started with the integration:

-   Smart Life Integration (Beta): https://github.com/tuya/tuya-smart-life
-   Tutorial documentation: https://developer.tuya.com/en/docs/iot/Smart\_Life\_Integration?id=Kd0gk9baikbb7
-   Video Tutorial: https://images.tuyaus.com/content-platform/hestia/16975151956db23d16f4d.mp4

Key Features:

-   The new Smart Life integration is open source, allowing developers to actively contribute and maintain it.
-   Please note that the new Smart Life integration is not compatible with the existing Tuya integration, and device migration is not possible. Users will need to use the new plugin to add devices and configure automation scenarios.
-   The new Smart Life integration supports the same range of products as the Tuya integration.
-   Local control is not yet supported in the new Smart Life Integration.

Tuya Home Assistant Integration Documentation
=============================================

The Tuya Home Assistant integration is developed for controlling **Powered by Tuya (PBT)** devices using the tuya-iot-python-sdk (a python version of Tuya Open API), and maintained by the official Tuya Developer Team and Home Assistant Community.

Important Note
--------------

We are announcing that the **Tuya v2 integration** hosted on this repository is no longer maintained by the Tuya Developer Team. Only the related documentation will be provided in this repository, as shown below:

#### Installation

-   Tuya IoT Platform Configuration Guide
-   Install Tuya Integration

#### Documentation

-   Error Code and Troubleshooting
-   Tuya Integration FAQs
-   Countries/Regions and Data Center
-   Not Supported Device Category

Here is the official Tuya Home Assistant integration.

If you want to contribute to the Tuya integration, please directly create issues or pull requests in the Home Assistant Core repository.

If you want to contribute to the documentation, please create issues or pull requests in this repo.

We really appreciate your contributions and awesome ideas to this project. We are happy to hear your voices at **GitHub Discussions** to make our integration better.

Prerequisites
-------------

-   Your devices need to first be added in the Tuya Smart or Smart Life app.
-   You will also need to create an account in the Tuya IoT Platform. This is a separate account to the one you made for the app. You cannot log in with your app's credentials.

Supported Tuya Device Categories
--------------------------------

Seven primary categories, 50 secondary categories are supported now!

👏 Supported Device Category

🎉 🎉 🎉 Vote for Tuya Integration New Device Driver Support! 🎉🎉🎉

Verified PBT Products List
--------------------------

If you have tested and confirmed any Tuya compatible PBT (Powered by Tuya) device, please help to contribute to Mark Watt Tech's page

It's a collection of known working PBT Products that are compatible with Home Assistant and the Tuya integration.

We appreciate your contribution!

### DISCLAIMER

Mark Watt is not associated with Home Assistant or Tuya. He is a Smart Home and Home Assistant enthusiast, and would like to help make the Tuya integration the best it can be.

Follow us
---------

-   Twitter
-   YouTube
-   Facebook
-   Bilibili
-   Linkedin
-   Discord

Follow us to get more information and leading technology on the Internet of Things, as well as updates and activities on the Tuya IoT Developer Platform

Issue Feedback
--------------

You can give feedback on issues you encounter for the documentation via **GitHub Issue**.

Related Projects
----------------

-   Tuya IoT Python SDK
    
-   Tuya Connector Python
    

LICENSE
-------

For more information, please refer to the LICENSE file.
