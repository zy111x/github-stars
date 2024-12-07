---
project: glances
stars: 27080
description: Glances an Eye on your system. A top/htop alternative for GNU/Linux, BSD, Mac OS and Windows operating systems.
url: https://github.com/nicolargo/glances
---

Glances - An eye on your system
===============================

Summary
-------

**Glances** is an open-source system cross-platform monitoring tool. It allows real-time monitoring of various aspects of your system such as CPU, memory, disk, network usage etc. It also allows monitoring of running processes, logged in users, temperatures, voltages, fan speeds etc. It also supports container monitoring, it supports different container management systems such as Docker, LXC. The information is presented in an easy to read dashboard and can also be used for remote monitoring of systems via a web interface or command line interface. It is easy to install and use and can be customized to show only the information that you are interested in.

In client/server mode, remote monitoring could be done via terminal, Web interface or API (XML-RPC and RESTful). Stats can also be exported to files or external time/value databases, CSV or direct output to STDOUT.

Glances is written in Python and uses libraries to grab information from your system. It is based on an open architecture where developers can add new plugins or exports modules.

Project sponsorship
-------------------

You can help me to achieve my goals of improving this open-source project or just say "thank you" by:

-   sponsor me using one-time or monthly tier Github sponsors page
-   send me some pieces of bitcoin: 185KN9FCix3svJYp7JQM7hRMfSKyeaJR4X
-   buy me a gift on my wishlist page

Any and all contributions are greatly appreciated.

Requirements
------------

-   `python>=3.9` (use Glances 3.4.x for lower Python version)
-   `psutil` (better with latest version)
-   `defusedxml` (in order to monkey patch xmlrpc)
-   `packaging` (for the version comparison)
-   `orjson` (an optimized alternative to the standard json module)

_Note for Python 2 users_

Glances version 4 or higher do not support Python 2 (and Python 3 < 3.9). Please uses Glances version 3.4.x if you need Python 2 support.

Optional dependencies:

-   `batinfo` (for battery monitoring)
-   `bernhard` (for the Riemann export module)
-   `cassandra-driver` (for the Cassandra export module)
-   `chevron` (for the action script feature)
-   `docker` (for the Containers Docker monitoring support)
-   `elasticsearch` (for the Elastic Search export module)
-   `FastAPI` and `Uvicorn` (for Web server mode)
-   `graphitesender` (For the Graphite export module)
-   `hddtemp` (for HDD temperature monitoring support) \[Linux-only\]
-   `influxdb` (for the InfluxDB version 1 export module)
-   `influxdb-client` (for the InfluxDB version 2 export module)
-   `jinja2` (for templating, used under the hood by FastAPI)
-   `kafka-python` (for the Kafka export module)
-   `netifaces` (for the IP plugin)
-   `nvidia-ml-py` (for the GPU plugin)
-   `pycouchdb` (for the CouchDB export module)
-   `pika` (for the RabbitMQ/ActiveMQ export module)
-   `podman` (for the Containers Podman monitoring support)
-   `potsdb` (for the OpenTSDB export module)
-   `prometheus_client` (for the Prometheus export module)
-   `pygal` (for the graph export module)
-   `pymdstat` (for RAID support) \[Linux-only\]
-   `pymongo` (for the MongoDB export module)
-   `pysnmp-lextudio` (for SNMP support)
-   `pySMART.smartx` (for HDD Smart support) \[Linux-only\]
-   `pyzmq` (for the ZeroMQ export module)
-   `requests` (for the Ports, Cloud plugins and RESTful export module)
-   `sparklines` (for the Quick Plugin sparklines option)
-   `statsd` (for the StatsD export module)
-   `wifi` (for the wifi plugin) \[Linux-only\]
-   `zeroconf` (for the autodiscover mode)

Installation
------------

There are several methods to test/install Glances on your system. Choose your weapon!

### PyPI: Pip, the standard way

Glances is on `PyPI`. By using PyPI, you will be using the latest stable version.

To install Glances, simply use the `pip` command line.

Warning: on modern Linux operating systems, you may have an externally-managed-environment error message when you try to use `pip`. In this case, go to the the PipX section below.

pip install --user glances

_Note_: Python headers are required to install psutil, a Glances dependency. For example, on Debian/Ubuntu **the simplest** is `apt install python3-psutil` or alternatively need to install first the _python-dev_ package and gcc (_python-devel_ on Fedora/CentOS/RHEL). For Windows, just install psutil from the binary installation file.

By default, Glances is installed without the Web interface dependencies. To install it, use the following command:

pip install --user 'glances\[web\]'

For a full installation (with all features):

pip install --user 'glances\[all\]'

To upgrade Glances to the latest version:

pip install --user --upgrade glances

The current develop branch is published to the test.pypi.org package index. If you want to test the develop version (could be instable), enter:

pip install --user -i https://test.pypi.org/simple/ Glances

### PyPI: PipX, the alternative way

Install PipX on your system (apt install pipx on Ubuntu).

Install Glances (with all features):

pipx install 'glances\[all\]'

The glances script will be installed in the ~/.local/bin folder.

### Docker: the cloudy way

Glances Docker images are availables. You can use it to monitor your server and all your containers !

Get the Glances container:

docker pull nicolargo/glances:latest-full

The following tags are availables:

-   _latest-full_ for a full Alpine Glances image (latest release) with all dependencies
-   _latest_ for a basic Alpine Glances (latest release) version with minimal dependencies (FastAPI and Docker)
-   _dev_ for a basic Alpine Glances image (based on development branch) with all dependencies (Warning: may be instable)
-   _ubuntu-latest-full_ for a full Ubuntu Glances image (latest release) with all dependencies
-   _ubuntu-latest_ for a basic Ubuntu Glances (latest release) version with minimal dependencies (FastAPI and Docker)
-   _ubuntu-dev_ for a basic Ubuntu Glances image (based on development branch) with all dependencies (Warning: may be instable)

Run last version of Glances container in _console mode_:

docker run --rm -e TZ="${TZ}" -v /var/run/docker.sock:/var/run/docker.sock:ro -v /run/user/1000/podman/podman.sock:/run/user/1000/podman/podman.sock:ro --pid host --network host -it nicolargo/glances:latest-full

By default, the /etc/glances/glances.conf file is used (based on docker-compose/glances.conf).

Additionally, if you want to use your own glances.conf file, you can create your own Dockerfile:

FROM nicolargo/glances:latest
COPY glances.conf /root/.config/glances/glances.conf
CMD python -m glances -C /root/.config/glances/glances.conf $GLANCES\_OPT

Alternatively, you can specify something along the same lines with docker run options (notice the GLANCES\_OPT environment variable setting parameters for the glances startup command):

docker run -e TZ="${TZ}" -v $HOME/.config/glances/glances.conf:/glances.conf:ro -v /var/run/docker.sock:/var/run/docker.sock:ro -v /run/user/1000/podman/podman.sock:/run/user/1000/podman/podman.sock:ro --pid host -e GLANCES\_OPT="-C /glances.conf" -it nicolargo/glances:latest-full

Where $HOME/.config/glances/glances.conf is a local directory containing your glances.conf file.

Run the container in _Web server mode_:

docker run -d --restart="always" -p 61208-61209:61208-61209 -e TZ="${TZ}" -e GLANCES\_OPT="-w" -v /var/run/docker.sock:/var/run/docker.sock:ro -v /run/user/1000/podman/podman.sock:/run/user/1000/podman/podman.sock:ro --pid host nicolargo/glances:latest-full

For a full list of options, see the Glances Docker documentation page.

### GNU/Linux package

Glances is available on many Linux distributions, so you should be able to install it using your favorite package manager. Be aware that when you use this method the operating system package for Glances may not be the latest version and only basics plugins are enabled.

Note: The Debian package (and all other Debian-based distributions) do not include anymore the JS statics files used by the Web interface (see `issue2021`). If you want to add it to your Glances installation, follow the instructions: `issue2021comment`. In Glances version 4 and higher, the path to the statics file is configurable (see `issue2612`).

### FreeBSD

To install the binary package:

\# pkg install py39-glances

To install Glances from ports:

\# cd /usr/ports/sysutils/py-glances/
# make install clean

### macOS

If you do not want to use the glancesautoinstall script, follow this procedure.

macOS users can install Glances using `Homebrew` or `MacPorts`.

#### Homebrew

$ brew install glances

#### MacPorts

$ sudo port install glances

### Windows

Install Python for Windows (Python 3.4+ ship with pip) and then run the following command:

$ pip install glances

### Android

You need a rooted device and the Termux application (available on the Google Play Store).

Start Termux on your device and enter:

$ apt update
$ apt upgrade
$ apt install clang python
$ pip install fastapi uvicorn jinja2
$ pip install glances

And start Glances:

$ glances

You can also run Glances in server mode (-s or -w) in order to remotely monitor your Android device.

### Source

To install Glances from source:

$ pip install https://github.com/nicolargo/glances/archive/vX.Y.tar.gz

_Note_: Python headers are required to install psutil.

### Chef

An awesome `Chef` cookbook is available to monitor your infrastructure: https://supermarket.chef.io/cookbooks/glances (thanks to Antoine Rouyer)

### Puppet

You can install Glances using `Puppet`: https://github.com/rverchere/puppet-glances

### Ansible

A Glances `Ansible` role is available: https://galaxy.ansible.com/zaxos/glances-ansible-role/

Usage
-----

For the standalone mode, just run:

$ glances

For the Web server mode, run:

$ glances -w

and enter the URL `http://<ip>:61208` in your favorite web browser.

For the client/server mode, run:

$ glances -s

on the server side and run:

$ glances -c <ip\>

on the client one.

You can also detect and display all Glances servers available on your network or defined in the configuration file:

$ glances --browser

You can also display raw stats on stdout:

$ glances --stdout cpu.user,mem.used,load
cpu.user: 30.7
mem.used: 3278204928
load: {'cpucore': 4, 'min1': 0.21, 'min5': 0.4, 'min15': 0.27}
cpu.user: 3.4
mem.used: 3275251712
load: {'cpucore': 4, 'min1': 0.19, 'min5': 0.39, 'min15': 0.27}
...

or in a CSV format thanks to the stdout-csv option:

$ glances --stdout-csv now,cpu.user,mem.used,load
now,cpu.user,mem.used,load.cpucore,load.min1,load.min5,load.min15
2018-12-08 22:04:20 CEST,7.3,5948149760,4,1.04,0.99,1.04
2018-12-08 22:04:23 CEST,5.4,5949136896,4,1.04,0.99,1.04
...

or in a JSON format thanks to the stdout-json option (attribute not supported in this mode in order to have a real JSON object in output):

$ glances --stdout-json cpu,mem
cpu: {"total": 29.0, "user": 24.7, "nice": 0.0, "system": 3.8, "idle": 71.4, "iowait": 0.0, "irq": 0.0, "softirq": 0.0, "steal": 0.0, "guest": 0.0, "guest\_nice": 0.0, "time\_since\_update": 1, "cpucore": 4, "ctx\_switches": 0, "interrupts": 0, "soft\_interrupts": 0, "syscalls": 0}
mem: {"total": 7837949952, "available": 2919079936, "percent": 62.8, "used": 4918870016, "free": 2919079936, "active": 2841214976, "inactive": 3340550144, "buffers": 546799616, "cached": 3068141568, "shared": 788156416}
...

and RTFM, always.

Documentation
-------------

For complete documentation have a look at the readthedocs website.

If you have any question (after RTFM!), please post it on the official Q&A forum.

Gateway to other services
-------------------------

Glances can export stats to: `CSV` file, `JSON` file, `InfluxDB`, `Cassandra`, `CouchDB`, `OpenTSDB`, `Prometheus`, `StatsD`, `ElasticSearch`, `RabbitMQ/ActiveMQ`, `ZeroMQ`, `Kafka`, `Riemann`, `Graphite` and `RESTful` server.

How to contribute ?
-------------------

If you want to contribute to the Glances project, read this wiki page.

There is also a chat dedicated to the Glances developers:

Author
------

Nicolas Hennion (@nicolargo) <nicolas@nicolargo.com\>

License
-------

Glances is distributed under the LGPL version 3 license. See `COPYING` for more details.
