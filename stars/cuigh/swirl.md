---
project: swirl
stars: 622
description: A web UI for Docker, focused on swarm cluster.
---

SWIRL
=====

**Swirl** is a web management tool for Docker, focused on swarm cluster.

> Warning: v1.0+ is not fully compatible with previous versions, it is recommended to redeploy instead of upgrading directly.

Features
--------

-   Swarm components management
-   Image and container management
-   Compose management with deployment support
-   Service monitoring based on Prometheus and cadvisor
-   Service auto scaling
-   LDAP authentication support
-   Full permission control based on RBAC model
-   Scale out as you want
-   Multiple language support
-   And more...

Snapshots
---------

### Home

### Service list

### Service stats

### Stack list

### Settings

Configuration
-------------

### With config file

All options can be set with `config/app.yml`.

name: swirl
banner: false

web:
  entries:
    - address: :8002
  authorize: '?'

swirl:
  db\_type: mongo
  db\_address: mongodb://localhost:27017/swirl
#  token\_expiry: 30m
#  docker\_api\_version: '1.41'
#  docker\_endpoint: tcp://docker-proxy:2375

log:
  loggers:
  - level: info
    writers: console
  writers:
  - name: console
    type: console
    layout: '\[{L}\]{T}: {M}{N}'

### With environment variables

Only these options can be set by environment variables for now.

Name

Value

DB\_TYPE

mongo(default),bolt

DB\_ADDRESS

mongodb://localhost:27017/swirl

TOKEN\_EXPIRY

30m

DOCKER\_ENDPOINT

tcp://docker-proxy:2375

DOCKER\_API\_VERSION

1.41

### With swarm config

Docker support mounting configuration file through swarm from v17.06, so you can store your config in swarm and mount it to your program.

Deployment
----------

Swirl support two storage engines now: mongo and bolt. **bolt** is suitable for development environment, **Swirl** can only deploy one replica if you use **bolt** storage engine.

### Standalone

Just copy the swirl binary and config directory to the host, and run it.

./swirl

### Docker

-   Use **bolt** storage engine

docker run -d -p 8001:8001 \\
    -v /var/run/docker.sock:/var/run/docker.sock \\
    -v /data/swirl:/data/swirl \\
    -e DB\_TYPE=bolt \\
    -e DB\_ADDRESS=/data/swirl \\
    --name=swirl \\
    cuigh/swirl

-   Use **MongoDB** storage engine

docker run -d -p 8001:8001 \\
    --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \\
    -e DB\_TYPE=mongo \\
    -e DB\_ADDRESS=mongodb://localhost:27017/swirl \\
    --name=swirl \\
    cuigh/swirl

### Docker swarm

-   Use **bolt** storage engine

docker service create \\
  --name=swirl \\
  --publish=8001:8001/tcp \\
  --env DB\_TYPE=bolt \\
  --env DB\_ADDRESS=/data/swirl \\
  --constraint=node.hostname==manager1 \\
  --mount=type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \\
  --mount=type=bind,src=/data/swirl,dst=/data/swirl \\
  cuigh/swirl

-   Use **MongoDB** storage engine

docker service create \\
  --name=swirl \\
  --publish=8001:8001/tcp \\
  --env DB\_ADDRESS=mongodb://localhost:27017/swirl \\
  --constraint=node.role==manager \\
  --mount=type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \\
  cuigh/swirl

### Docker compose

docker stack deploy -c compose.yml swirl

Advanced features
-----------------

**Swirl** use service labels to support some features, the labels in the table below are currently supported.

Name

Description

Examples

swirl.scale

Service auto scaling

`min=1,max=5,cpu=30:50`

Build
-----

To build **Swirl** from source, you need `yarn` and `go(v1.16+)` installed.

$ cd ui 
$ yarn
$ yarn build
$ cd ..
$ go build

License
-------

This product is licensed to you under the MIT License. You may not use this product except in compliance with the License. See LICENSE and NOTICE for more information.
