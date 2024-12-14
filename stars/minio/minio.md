---
project: minio
stars: 48843
description: MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 license.
url: https://github.com/minio/minio
---

MinIO Quickstart Guide
======================

MinIO is a High Performance Object Storage released under GNU Affero General Public License v3.0. It is API compatible with Amazon S3 cloud storage service. Use MinIO to build high performance infrastructure for machine learning, analytics and application data workloads. To learn more about what MinIO is doing for AI storage, go to AI storage documentation.

This README provides quickstart instructions on running MinIO on bare metal hardware, including container-based installations. For Kubernetes environments, use the MinIO Kubernetes Operator.

Container Installation
----------------------

Use the following commands to run a standalone MinIO server as a container.

Standalone MinIO servers are best suited for early development and evaluation. Certain features such as versioning, object locking, and bucket replication require distributed deploying MinIO with Erasure Coding. For extended development and production, deploy MinIO with Erasure Coding enabled - specifically, with a _minimum_ of 4 drives per MinIO server. See MinIO Erasure Code Overview for more complete documentation.

### Stable

Run the following command to run the latest stable image of MinIO as a container using an ephemeral data volume:

podman run -p 9000:9000 -p 9001:9001 \\
  quay.io/minio/minio server /data --console-address ":9001"

The MinIO deployment starts using default root credentials `minioadmin:minioadmin`. You can test the deployment using the MinIO Console, an embedded object browser built into MinIO Server. Point a web browser running on the host machine to http://127.0.0.1:9000 and log in with the root credentials. You can use the Browser to create buckets, upload objects, and browse the contents of the MinIO server.

You can also connect using any S3-compatible tool, such as the MinIO Client `mc` commandline tool. See Test using MinIO Client `mc` for more information on using the `mc` commandline tool. For application developers, see https://min.io/docs/minio/linux/developers/minio-drivers.html to view MinIO SDKs for supported languages.

> NOTE: To deploy MinIO on with persistent storage, you must map local persistent directories from the host OS to the container using the `podman -v` option. For example, `-v /mnt/data:/data` maps the host OS drive at `/mnt/data` to `/data` on the container.

macOS
-----

Use the following commands to run a standalone MinIO server on macOS.

Standalone MinIO servers are best suited for early development and evaluation. Certain features such as versioning, object locking, and bucket replication require distributed deploying MinIO with Erasure Coding. For extended development and production, deploy MinIO with Erasure Coding enabled - specifically, with a _minimum_ of 4 drives per MinIO server. See MinIO Erasure Code Overview for more complete documentation.

### Homebrew (recommended)

Run the following command to install the latest stable MinIO package using Homebrew. Replace `/data` with the path to the drive or directory in which you want MinIO to store data.

brew install minio/stable/minio
minio server /data

> NOTE: If you previously installed minio using `brew install minio` then it is recommended that you reinstall minio from `minio/stable/minio` official repo instead.

brew uninstall minio
brew install minio/stable/minio

The MinIO deployment starts using default root credentials `minioadmin:minioadmin`. You can test the deployment using the MinIO Console, an embedded web-based object browser built into MinIO Server. Point a web browser running on the host machine to http://127.0.0.1:9000 and log in with the root credentials. You can use the Browser to create buckets, upload objects, and browse the contents of the MinIO server.

You can also connect using any S3-compatible tool, such as the MinIO Client `mc` commandline tool. See Test using MinIO Client `mc` for more information on using the `mc` commandline tool. For application developers, see https://min.io/docs/minio/linux/developers/minio-drivers.html/ to view MinIO SDKs for supported languages.

### Binary Download

Use the following command to download and run a standalone MinIO server on macOS. Replace `/data` with the path to the drive or directory in which you want MinIO to store data.

wget https://dl.min.io/server/minio/release/darwin-amd64/minio
chmod +x minio
./minio server /data

The MinIO deployment starts using default root credentials `minioadmin:minioadmin`. You can test the deployment using the MinIO Console, an embedded web-based object browser built into MinIO Server. Point a web browser running on the host machine to http://127.0.0.1:9000 and log in with the root credentials. You can use the Browser to create buckets, upload objects, and browse the contents of the MinIO server.

You can also connect using any S3-compatible tool, such as the MinIO Client `mc` commandline tool. See Test using MinIO Client `mc` for more information on using the `mc` commandline tool. For application developers, see https://min.io/docs/minio/linux/developers/minio-drivers.html to view MinIO SDKs for supported languages.

GNU/Linux
---------

Use the following command to run a standalone MinIO server on Linux hosts running 64-bit Intel/AMD architectures. Replace `/data` with the path to the drive or directory in which you want MinIO to store data.

wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
./minio server /data

The following table lists supported architectures. Replace the `wget` URL with the architecture for your Linux host.

Architecture

URL

64-bit Intel/AMD

https://dl.min.io/server/minio/release/linux-amd64/minio

64-bit ARM

https://dl.min.io/server/minio/release/linux-arm64/minio

64-bit PowerPC LE (ppc64le)

https://dl.min.io/server/minio/release/linux-ppc64le/minio

The MinIO deployment starts using default root credentials `minioadmin:minioadmin`. You can test the deployment using the MinIO Console, an embedded web-based object browser built into MinIO Server. Point a web browser running on the host machine to http://127.0.0.1:9000 and log in with the root credentials. You can use the Browser to create buckets, upload objects, and browse the contents of the MinIO server.

You can also connect using any S3-compatible tool, such as the MinIO Client `mc` commandline tool. See Test using MinIO Client `mc` for more information on using the `mc` commandline tool. For application developers, see https://min.io/docs/minio/linux/developers/minio-drivers.html to view MinIO SDKs for supported languages.

> NOTE: Standalone MinIO servers are best suited for early development and evaluation. Certain features such as versioning, object locking, and bucket replication require distributed deploying MinIO with Erasure Coding. For extended development and production, deploy MinIO with Erasure Coding enabled - specifically, with a _minimum_ of 4 drives per MinIO server. See MinIO Erasure Code Overview for more complete documentation.

Microsoft Windows
-----------------

To run MinIO on 64-bit Windows hosts, download the MinIO executable from the following URL:

https://dl.min.io/server/minio/release/windows-amd64/minio.exe

Use the following command to run a standalone MinIO server on the Windows host. Replace `D:\` with the path to the drive or directory in which you want MinIO to store data. You must change the terminal or powershell directory to the location of the `minio.exe` executable, _or_ add the path to that directory to the system `$PATH`:

minio.exe server D:\\

The MinIO deployment starts using default root credentials `minioadmin:minioadmin`. You can test the deployment using the MinIO Console, an embedded web-based object browser built into MinIO Server. Point a web browser running on the host machine to http://127.0.0.1:9000 and log in with the root credentials. You can use the Browser to create buckets, upload objects, and browse the contents of the MinIO server.

You can also connect using any S3-compatible tool, such as the MinIO Client `mc` commandline tool. See Test using MinIO Client `mc` for more information on using the `mc` commandline tool. For application developers, see https://min.io/docs/minio/linux/developers/minio-drivers.html to view MinIO SDKs for supported languages.

> NOTE: Standalone MinIO servers are best suited for early development and evaluation. Certain features such as versioning, object locking, and bucket replication require distributed deploying MinIO with Erasure Coding. For extended development and production, deploy MinIO with Erasure Coding enabled - specifically, with a _minimum_ of 4 drives per MinIO server. See MinIO Erasure Code Overview for more complete documentation.

Install from Source
-------------------

Use the following commands to compile and run a standalone MinIO server from source. Source installation is only intended for developers and advanced users. If you do not have a working Golang environment, please follow How to install Golang. Minimum version required is go1.21

go install github.com/minio/minio@latest

The MinIO deployment starts using default root credentials `minioadmin:minioadmin`. You can test the deployment using the MinIO Console, an embedded web-based object browser built into MinIO Server. Point a web browser running on the host machine to http://127.0.0.1:9000 and log in with the root credentials. You can use the Browser to create buckets, upload objects, and browse the contents of the MinIO server.

You can also connect using any S3-compatible tool, such as the MinIO Client `mc` commandline tool. See Test using MinIO Client `mc` for more information on using the `mc` commandline tool. For application developers, see https://min.io/docs/minio/linux/developers/minio-drivers.html to view MinIO SDKs for supported languages.

> NOTE: Standalone MinIO servers are best suited for early development and evaluation. Certain features such as versioning, object locking, and bucket replication require distributed deploying MinIO with Erasure Coding. For extended development and production, deploy MinIO with Erasure Coding enabled - specifically, with a _minimum_ of 4 drives per MinIO server. See MinIO Erasure Code Overview for more complete documentation.

MinIO strongly recommends _against_ using compiled-from-source MinIO servers for production environments.

Deployment Recommendations
--------------------------

### Allow port access for Firewalls

By default MinIO uses the port 9000 to listen for incoming connections. If your platform blocks the port by default, you may need to enable access to the port.

### ufw

For hosts with ufw enabled (Debian based distros), you can use `ufw` command to allow traffic to specific ports. Use below command to allow access to port 9000

ufw allow 9000

Below command enables all incoming traffic to ports ranging from 9000 to 9010.

ufw allow 9000:9010/tcp

### firewall-cmd

For hosts with firewall-cmd enabled (CentOS), you can use `firewall-cmd` command to allow traffic to specific ports. Use below commands to allow access to port 9000

firewall-cmd --get-active-zones

This command gets the active zone(s). Now, apply port rules to the relevant zones returned above. For example if the zone is `public`, use

firewall-cmd --zone=public --add-port=9000/tcp --permanent

Note that `permanent` makes sure the rules are persistent across firewall start, restart or reload. Finally reload the firewall for changes to take effect.

firewall-cmd --reload

### iptables

For hosts with iptables enabled (RHEL, CentOS, etc), you can use `iptables` command to enable all traffic coming to specific ports. Use below command to allow access to port 9000

iptables -A INPUT -p tcp --dport 9000 -j ACCEPT
service iptables restart

Below command enables all incoming traffic to ports ranging from 9000 to 9010.

iptables -A INPUT -p tcp --dport 9000:9010 -j ACCEPT
service iptables restart

Test MinIO Connectivity
-----------------------

### Test using MinIO Console

MinIO Server comes with an embedded web based object browser. Point your web browser to http://127.0.0.1:9000 to ensure your server has started successfully.

> NOTE: MinIO runs console on random port by default, if you wish to choose a specific port use `--console-address` to pick a specific interface and port.

### Things to consider

MinIO redirects browser access requests to the configured server port (i.e. `127.0.0.1:9000`) to the configured Console port. MinIO uses the hostname or IP address specified in the request when building the redirect URL. The URL and port _must_ be accessible by the client for the redirection to work.

For deployments behind a load balancer, proxy, or ingress rule where the MinIO host IP address or port is not public, use the `MINIO_BROWSER_REDIRECT_URL` environment variable to specify the external hostname for the redirect. The LB/Proxy must have rules for directing traffic to the Console port specifically.

For example, consider a MinIO deployment behind a proxy `https://minio.example.net`, `https://console.minio.example.net` with rules for forwarding traffic on port :9000 and :9001 to MinIO and the MinIO Console respectively on the internal network. Set `MINIO_BROWSER_REDIRECT_URL` to `https://console.minio.example.net` to ensure the browser receives a valid reachable URL.

Dashboard

Creating a bucket

Test using MinIO Client `mc`
----------------------------

`mc` provides a modern alternative to UNIX commands like ls, cat, cp, mirror, diff etc. It supports filesystems and Amazon S3 compatible cloud storage services. Follow the MinIO Client Quickstart Guide for further instructions.

Upgrading MinIO
---------------

Upgrades require zero downtime in MinIO, all upgrades are non-disruptive, all transactions on MinIO are atomic. So upgrading all the servers simultaneously is the recommended way to upgrade MinIO.

> NOTE: requires internet access to update directly from https://dl.min.io, optionally you can host any mirrors at https://my-artifactory.example.com/minio/

-   For deployments that installed the MinIO server binary by hand, use `mc admin update`

mc admin update <minio alias, e.g., myminio\>

-   For deployments without external internet access (e.g. airgapped environments), download the binary from https://dl.min.io and replace the existing MinIO binary let's say for example `/opt/bin/minio`, apply executable permissions `chmod +x /opt/bin/minio` and proceed to perform `mc admin service restart alias/`.
    
-   For installations using Systemd MinIO service, upgrade via RPM/DEB packages **parallelly** on all servers or replace the binary lets say `/opt/bin/minio` on all nodes, apply executable permissions `chmod +x /opt/bin/minio` and process to perform `mc admin service restart alias/`.
    

### Upgrade Checklist

-   Test all upgrades in a lower environment (DEV, QA, UAT) before applying to production. Performing blind upgrades in production environments carries significant risk.
-   Read the release notes for MinIO _before_ performing any upgrade, there is no forced requirement to upgrade to latest release upon every release. Some release may not be relevant to your setup, avoid upgrading production environments unnecessarily.
-   If you plan to use `mc admin update`, MinIO process must have write access to the parent directory where the binary is present on the host system.
-   `mc admin update` is not supported and should be avoided in kubernetes/container environments, please upgrade containers by upgrading relevant container images.
-   **We do not recommend upgrading one MinIO server at a time, the product is designed to support parallel upgrades please follow our recommended guidelines.**

Explore Further
---------------

-   MinIO Erasure Code Overview
-   Use `mc` with MinIO Server
-   Use `minio-go` SDK with MinIO Server
-   The MinIO documentation website

Contribute to MinIO Project
---------------------------

Please follow MinIO Contributor's Guide

License
-------

-   MinIO source is licensed under the GNU AGPLv3.
-   MinIO documentation is licensed under CC BY 4.0.
-   License Compliance
