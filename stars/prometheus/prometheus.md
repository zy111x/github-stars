---
project: prometheus
stars: 56249
description: The Prometheus monitoring system and time series database.
url: https://github.com/prometheus/prometheus
---

  
Prometheus
=============

Visit prometheus.io for the full documentation, examples and guides.

Prometheus, a Cloud Native Computing Foundation project, is a systems and service monitoring system. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts when specified conditions are observed.

The features that distinguish Prometheus from other metrics and monitoring systems are:

-   A **multi-dimensional** data model (time series defined by metric name and set of key/value dimensions)
-   PromQL, a **powerful and flexible query language** to leverage this dimensionality
-   No dependency on distributed storage; **single server nodes are autonomous**
-   An HTTP **pull model** for time series collection
-   **Pushing time series** is supported via an intermediary gateway for batch jobs
-   Targets are discovered via **service discovery** or **static configuration**
-   Multiple modes of **graphing and dashboarding support**
-   Support for hierarchical and horizontal **federation**

Architecture overview
---------------------

Install
-------

There are various ways of installing Prometheus.

### Precompiled binaries

Precompiled binaries for released versions are available in the _download_ section on prometheus.io. Using the latest production release binary is the recommended way of installing Prometheus. See the Installing chapter in the documentation for all the details.

### Docker images

Docker images are available on Quay.io or Docker Hub.

You can launch a Prometheus container for trying it out with

docker run --name prometheus -d -p 127.0.0.1:9090:9090 prom/prometheus

Prometheus will now be reachable at http://localhost:9090/.

### Building from source

To build Prometheus from source code, You need:

-   Go version 1.17 or greater.
-   NodeJS version 16 or greater.
-   npm version 7 or greater.

Start by cloning the repository:

git clone https://github.com/prometheus/prometheus.git
cd prometheus

You can use the `go` tool to build and install the `prometheus` and `promtool` binaries into your `GOPATH`:

GO111MODULE=on go install github.com/prometheus/prometheus/cmd/...
prometheus --config.file=your\_config.yml

_However_, when using `go install` to build Prometheus, Prometheus will expect to be able to read its web assets from local filesystem directories under `web/ui/static` and `web/ui/templates`. In order for these assets to be found, you will have to run Prometheus from the root of the cloned repository. Note also that these directories do not include the React UI unless it has been built explicitly using `make assets` or `make build`.

An example of the above configuration file can be found here.

You can also build using `make build`, which will compile in the web assets so that Prometheus can be run from anywhere:

make build
./prometheus --config.file=your\_config.yml

The Makefile provides several targets:

-   _build_: build the `prometheus` and `promtool` binaries (includes building and compiling in web assets)
-   _test_: run the tests
-   _test-short_: run the short tests
-   _format_: format the source code
-   _vet_: check the source code for common errors
-   _assets_: build the React UI

### Service discovery plugins

Prometheus is bundled with many service discovery plugins. When building Prometheus from source, you can edit the plugins.yml file to disable some service discoveries. The file is a yaml-formatted list of go import path that will be built into the Prometheus binary.

After you have changed the file, you need to run `make build` again.

If you are using another method to compile Prometheus, `make plugins` will generate the plugins file accordingly.

If you add out-of-tree plugins, which we do not endorse at the moment, additional steps might be needed to adjust the `go.mod` and `go.sum` files. As always, be extra careful when loading third party code.

### Building the Docker image

The `make docker` target is designed for use in our CI system. You can build a docker image locally with the following commands:

make promu
promu crossbuild -p linux/amd64
make npm\_licenses
make common-docker-amd64

Using Prometheus as a Go Library
--------------------------------

### Remote Write

We are publishing our Remote Write protobuf independently at buf.build.

You can use that as a library:

go get buf.build/gen/go/prometheus/prometheus/protocolbuffers/go@latest

This is experimental.

### Prometheus code base

In order to comply with go mod rules, Prometheus release number do not exactly match Go module releases.

For the Prometheus v3.y.z releases, we are publishing equivalent v0.3y.z tags. The y in v0.3y.z is always padded to two digits, with a leading zero if needed.

Therefore, a user that would want to use Prometheus v3.0.0 as a library could do:

go get github.com/prometheus/prometheus@v0.300.0

For the Prometheus v2.y.z releases, we published the equivalent v0.y.z tags.

Therefore, a user that would want to use Prometheus v2.35.0 as a library could do:

go get github.com/prometheus/prometheus@v0.35.0

This solution makes it clear that we might break our internal Go APIs between minor user-facing releases, as breaking changes are allowed in major version zero.

React UI Development
--------------------

For more information on building, running, and developing on the React-based UI, see the React app's README.md.

More information
----------------

-   Godoc documentation is available via pkg.go.dev. Due to peculiarities of Go Modules, v3.y.z will be displayed as v0.3y.z (the y in v0.3y.z is always padded to two digits, with a leading zero if needed), while v2.y.z will be displayed as v0.y.z.
-   See the Community page for how to reach the Prometheus developers and users on various communication channels.

Contributing
------------

Refer to CONTRIBUTING.md

License
-------

Apache License 2.0, see LICENSE.
