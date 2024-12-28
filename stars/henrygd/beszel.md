---
project: beszel
stars: 3993
description: Lightweight server monitoring hub with historical data, docker stats, and alerts.
url: https://github.com/henrygd/beszel
---

Beszel
======

Beszel is a lightweight server monitoring platform that includes Docker statistics, historical data, and alert functions.

It has a friendly web interface, simple configuration, and is ready to use out of the box. It supports automatic backup, multi-user, OAuth authentication, and API access.

Features
--------

-   **Lightweight**: Smaller and less resource-intensive than leading solutions.
-   **Simple**: Easy setup, no need for public internet exposure.
-   **Docker stats**: Tracks CPU, memory, and network usage history for each container.
-   **Alerts**: Configurable alerts for CPU, memory, disk, bandwidth, temperature, and status.
-   **Multi-user**: Users manage their own systems. Admins can share systems across users.
-   **OAuth / OIDC**: Supports many OAuth2 providers. Password auth can be disabled.
-   **Automatic backups**: Save and restore data from disk or S3-compatible storage.
-   **REST API**: Use or update your data in your own scripts and applications.

Architecture
------------

Beszel consists of two main components: the **hub** and the **agent**.

-   **Hub**: A web application built on PocketBase that provides a dashboard for viewing and managing connected systems.
-   **Agent**: Runs on each system you want to monitor, creating a minimal SSH server to communicate system metrics to the hub.

Getting started
---------------

The quick start guide and other documentation is available on our website, beszel.dev. You'll be up and running in a few minutes.

Screenshots
-----------

Supported metrics
-----------------

-   **CPU usage** - Host system and Docker / Podman containers.
-   **Memory usage** - Host system and containers. Includes swap and ZFS ARC.
-   **Disk usage** - Host system. Supports multiple partitions and devices.
-   **Disk I/O** - Host system. Supports multiple partitions and devices.
-   **Network usage** - Host system and containers.
-   **Temperature** - Host system sensors.
-   **GPU usage / temperature / power draw** - Nvidia and AMD only. Must use binary agent.

License
-------

Beszel is licensed under the MIT License. See the LICENSE file for more details.