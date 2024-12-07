---
project: netbird
stars: 11411
description: Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.
url: https://github.com/netbirdio/netbird
---

**🐣 New Release! Device Posture Checks.** Learn more

  

  
  

**Start using NetBird at netbird.io  
See Documentation  
Join our Slack channel  
**

  

**NetBird combines a configuration-free peer-to-peer private network and a centralized access control system in a single platform, making it easy to create secure private networks for your organization or home.**

**Connect.** NetBird creates a WireGuard-based overlay network that automatically connects your machines over an encrypted tunnel, leaving behind the hassle of opening ports, complex firewall rules, VPN gateways, and so forth.

**Secure.** NetBird enables secure remote access by applying granular access policies while allowing you to manage them intuitively from a single place. Works universally on any infrastructure.

### Open-Source Network Security in a Single Platform

### NetBird on Lawrence Systems (Video)

### Key features

Connectivity

Management

Security

Automation

Platforms

-   Kernel WireGuard

-   Admin Web UI

-   SSO & MFA support

-   Public API

-   Linux

-   Peer-to-peer connections

-   Auto peer discovery and configuration

-   Access control - groups & rules

-   Setup keys for bulk network provisioning

-   Mac

-   Connection relay fallback

-   IdP integrations

-   Activity logging

-   Self-hosting quickstart script

-   Windows

-   Routes to external networks

-   Private DNS

-   Device posture checks

-   IdP groups sync with JWT

-   Android

-   NAT traversal with BPF

-   Multiuser support

-   Peer-to-peer encryption

-   iOS

-   Quantum-resistance with Rosenpass

-   OpenWRT

-   Periodic re-authentication

-   Serverless

-   Docker

### Quickstart with NetBird Cloud

-   Download and install NetBird at https://app.netbird.io/install
-   Follow the steps to sign-up with Google, Microsoft, GitHub or your email address.
-   Check NetBird admin UI.
-   Add more machines.

### Quickstart with self-hosted NetBird

> This is the quickest way to try self-hosted NetBird. It should take around 5 minutes to get started if you already have a public domain and a VM. Follow the Advanced guide with a custom identity provider for installations with different IDPs.

**Infrastructure requirements:**

-   A Linux VM with at least **1CPU** and **2GB** of memory.
-   The VM should be publicly accessible on TCP ports **80** and **443** and UDP ports: **3478**, **49152-65535**.
-   **Public domain** name pointing to the VM.

**Software requirements:**

-   Docker installed on the VM with the docker-compose plugin (Docker installation guide) or docker with docker-compose in version 2 or higher.
-   jq installed. In most distributions Usually available in the official repositories and can be installed with `sudo apt install jq` or `sudo yum install jq`
-   curl installed. Usually available in the official repositories and can be installed with `sudo apt install curl` or `sudo yum install curl`

**Steps**

-   Download and run the installation script:

export NETBIRD\_DOMAIN=netbird.example.com; curl -fsSL https://github.com/netbirdio/netbird/releases/latest/download/getting-started-with-zitadel.sh | bash

-   Once finished, you can manage the resources via `docker-compose`

### A bit on NetBird internals

-   Every machine in the network runs NetBird Agent (or Client) that manages WireGuard.
-   Every agent connects to Management Service that holds network state, manages peer IPs, and distributes network updates to agents (peers).
-   NetBird agent uses WebRTC ICE implemented in pion/ice library to discover connection candidates when establishing a peer-to-peer connection between machines.
-   Connection candidates are discovered with the help of STUN servers.
-   Agents negotiate a connection through Signal Service passing p2p encrypted messages with candidates.
-   Sometimes the NAT traversal is unsuccessful due to strict NATs (e.g. mobile carrier-grade NAT) and a p2p connection isn't possible. When this occurs the system falls back to a relay server called TURN, and a secure WireGuard tunnel is established via the TURN server.

Coturn is the one that has been successfully used for STUN and TURN in NetBird setups.

See a complete architecture overview for details.

### Community projects

-   NetBird installer script
-   NetBird ansible collection by Dominion Solutions

**Note**: The `main` branch may be in an _unstable or even broken state_ during development. For stable versions, see releases.

### Support acknowledgement

In November 2022, NetBird joined the StartUpSecure program sponsored by The Federal Ministry of Education and Research of The Federal Republic of Germany. Together with CISPA Helmholtz Center for Information Security NetBird brings the security best practices and simplicity to private networking.

### Testimonials

We use open-source technologies like WireGuard®, Pion ICE (WebRTC), Coturn, and Rosenpass. We very much appreciate the work these guys are doing and we'd greatly appreciate if you could support them in any way (e.g., by giving a star or a contribution).

### Legal

_WireGuard_ and the _WireGuard_ logo are registered trademarks of Jason A. Donenfeld.
