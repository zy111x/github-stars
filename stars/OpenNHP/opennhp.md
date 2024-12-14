---
project: opennhp
stars: 13520
description: A lightweight cryptography-driven Zero Trust protocol to safeguard servers and data from attackers by leveraging resource-hiding and encryption algorithms.
url: https://github.com/OpenNHP/opennhp
---

OpenNHP: Zero Trust Network-resource Hiding Protocol
====================================================

**NHP (Network-resource Hiding Protocol)** is a lightweight, cryptography-based Zero Trust protocol designed to safeguard servers and data from attackers by leveraging resource-hiding and encryption. It includes two core sub-protocols:

-   **Network-infrastructure Hiding Protocol (nHP):** Protects servers and applications by concealing domains, IP addresses, and ports.
-   **Data-object Hiding Protocol (dHP):** Ensures data security and privacy by making data "usable but not visible" through cryptographic key negotiation and encryption.

**OpenNHP** is the open source implementation of NHP.

* * *

Challenge: AI transforms the Internet into a "Dark Forest"
----------------------------------------------------------

The rapid evolution of **AI** technologies, particularly large language models (LLMs), is significantly reshaping the cybersecurity landscape. The emergence of **Autonomous Vulnerability Exploitation (AVE)** represents a major leap in the AI era, streamlining the exploitation of vulnerabilities, as highlighted in recent research such as \[1\], \[2\], \[3\] and etc. This development dramatically increases the risk for any exposed network services, reflecting the Dark Forest Hypothesis of the Internet. AI-powered tools are continuously scanning the digital realm, quickly finding and exploiting weaknesses. Consequently, the Internet is evolving into a **"Dark Forest,"** where **visibility equates to vulnerability**.

Gartner research anticipates a sharp rise in AI-driven cyberattacks. To address these threats, CISA recently issued an executive order mandating a 14-day deadline for vulnerability remediation. This shift necessitates a reevaluation of traditional cybersecurity approaches, emphasizing proactive defense, rapid response strategies, and the deployment of network-hiding technologies to protect critical infrastructure.

* * *

Quick Demo: See OpenNHP in Action
---------------------------------

Before diving into the details of OpenNHP, let's start with a quick demonstration of how OpenNHP protects a server from unauthorized access. You can see it in action by accessing the protected server at https://acdemo.opennhp.org.

### 1) The Protected Server is "Invisible" to Unauthenticated Users

By default, any attempt to connect to the protected server will result in a TIME OUT error, as all ports are closed, making the server appear offline and effectively _"invisible."_

Port scanning the server will also return a TIME OUT error.

### 2) After Authentication, the Protected Server Becomes Accessible

OpenNHP supports a variety of authentication methods, such as OAuth, SAML, QR codes, and more. For simplicity, this demo uses a basic username/password authentication service at https://demologin.opennhp.org to demonstrate the process.

Once you click the "Login" button, authentication is completed successfully, and you are redirected to the protected server. At this point, the server becomes _"visible"_ and accessible on your device.

* * *

Vision: Making the Internet Trustworthy
---------------------------------------

The openness of TCP/IP protocols has driven the explosive growth of internet applications but also exposed vulnerabilities, allowing malicious actors to gain unauthorized access and exploit any exposed IP address. Although the OSI network model defines the _5th layer (Session Layer)_ for managing connections, few effective solutions have been implemented to address this.

**NHP**, or the **"Network-resource Hiding Protocol"**, is a lightweight cryptography-driven Zero Trust networking protocol designed to function at the _OSI Session Layer_, which is optimal for managing network visibility and connections. NHP's key objective is to conceal protected resources from unauthorized entities, granting access only to verified, authorized users through continuous verification, contributing to a more trustworthy Internet.

* * *

Solution: OpenNHP Fixes the Network Visibility Control
------------------------------------------------------

**OpenNHP** is the open-source implementation of the NHP protocol. It is cryptography-driven and designed with security-first principles, implementing a true zero-trust architecture at the _OSI Session Layer_.

OpenNHP builds upon earlier research in network hiding technology, utilizing modern cryptographic framework and architecture to ensure security and high performance, thereby overcoming the limitations of previous technologies.

Network Hiding Protocol

1st Generation

2nd Generation

3rd Generation

**Core Technology**

Port Knocking

Single Packet Authorization (SPA)

Network-resource Hiding Protocol (NHP)

**Authentication**

Port sequences

Shared Secrets

Modern Crypto Framework

**Architecture**

No Control Plane

No Control Plane

Scalable Control Plane

**Capability**

Hide Ports

Hide Ports

Hide Ports, IPs and Domains

**Access Control**

IP Level

Port Level

Application Level

**Open Source Projects**

knock _(C)_

fwknop _(C++)_

OpenNHP _(Go)_

> It is crucial to choose a **memory-safe** language like _Go_ for OpenNHP development, as emphasized in the US Government technical report. For a detailed comparison between **SPA and NHP**, refer to the section below.

Security Benefits
-----------------

Since OpenNHP implements Zero Trust principles at the _OSI Session Layer_, it offers significant benefits:

-   Reduces attack surface by hiding infrastructure
-   Prevents unauthorized network reconnaissance
-   Mitigates vulnerability exploitation
-   Stops phishing via encrypted DNS
-   Protects against DDoS attacks
-   Enables fine-grained access control
-   Provides identity-based connection tracking
-   Attack attribution

Architecture
------------

The OpenNHP architecture is inspired by the NIST Zero Trust Architecture standard. It follows a modular design with the 3 core components: **NHP-Server**, **NHP-AC** and **NHP-Agent**, as illustrated in the below diagram.

> Please refer to the OpenNHP Documentation for detailed information about architecture and workflow.

Core: Cryptographic Algorithms
------------------------------

Cryptography is at the heart of OpenNHP, providing robust security, excellent performance, and scalability by utilizing cutting-edge cryptographic algorithms. Below are the key cryptographic algorithms and frameworks employed by OpenNHP:

-   **Elliptic Curve Cryptography (ECC):** Used for efficient public key cryptography.

> Compared to RSA, ECC offers superior efficiency with stronger encryption at shorter key lengths, improving both network transmission and computational performance. The table below highlights the differences in security strength, key lengths, and the key length ratio between RSA and ECC, along with their respective validity periods.

Security Strength (bits)

DSA/RSA Key Length (bits)

ECC Key Length (bits)

Ratio: ECC vs. DSA/RSA

Validity

80

1024

160-223

1:6

Until 2010

112

2048

224-255

1:9

Until 2030

128

3072

256-383

1:12

After 2031

192

7680

384-511

1:20

256

15360

512+

1:30

-   **Noise Protocol Framework:** Enables secure key exchange, message encryption/decryption, and mutual authentication.

> The Noise Protocol is built around the Diffie-Hellman key agreement and provides modern cryptographic solutions like mutual and optional authentication, identity hiding, forward secrecy, and zero round-trip encryption. Proven for its security and performance, it is already used by popular applications like WhatsApp, Slack and WireGuard.

-   **Identity-Based Cryptography (IBC):** Simplifies key distribution at scale.

> Efficient key distribution is essential for implementing Zero Trust. OpenNHP supports both PKI and IBC. While PKI has been widely used for decades, it depends on centralized Certificate Authorities (CA) for identity verification and key management, which can be time-consuming and costly. In contrast, IBC allows for a decentralized and self-governing approach to identity verification and key management, making it more cost-effective for OpenNHP's Zero Trust environment, where billions of devices or servers may need protection and onboarding in real-time.

-   **Certificateless Public Key Cryptography (CL-PKC):** Recommended IBC algorithm

> CL-PKC is a scheme that enhances security by avoiding key escrow and addressing the limitations of Identity-Based Cryptography (IBC). In most IBC systems, a user's private key is generated by a Key Generation Center (KGC), which introduces significant risks. A compromised KGC can lead to the exposure of all users' private keys, requiring full trust in the KGC. CL-PKC mitigates this issue by splitting the key generation process, so the KGC only has knowledge of a partial private key. As a result, CL-PKC combines the strengths of both PKI and IBC, offering stronger security without the drawbacks of centralized key management.

Further reading:

> Please refer to the OpenNHP Documentation for detailed explanation of cryptographic algorithms used in OpenNHP.

Key Features
------------

-   Mitigates vulnerability exploitation by enforcing "deny-all" rules by default
-   Prevents phishing attacks through encrypted DNS resolution
-   Protects against DDoS attacks by hiding infrastructure
-   Enables attack attribution through identity-based connections
-   Default-deny access control for all protected resources
-   Identity and device-based authentication before network access
-   Encrypted DNS resolution to prevent DNS hijacking
-   Distributed infrastructure to mitigate DDoS attacks
-   Scalable architecture with decoupled components
-   Integration with existing identity and access management systems
-   Support for various deployment models (client-to-gateway, client-to-server, etc)
-   Cryptographically secure using modern algorithms (ECC, Noise Protocol, IBC)

Click to expand feature details

-   **Default-deny access control**: All resources are hidden by default, only becoming accessible after authentication and authorization.
-   **Identity and device-based authentication**: Ensures that only known users on approved devices can gain access.
-   **Encrypted DNS resolution**: Prevents DNS hijacking and associated phishing attacks.
-   **DDoS mitigation**: Distributed infrastructure design helps protect against Distributed Denial of Service attacks.
-   **Scalable architecture**: Decoupled components allow for flexible deployment and scaling.
-   **IAM integration**: Works with your existing Identity and Access Management systems.
-   **Flexible deployment**: Supports various models including client-to-gateway, client-to-server, and more.
-   **Strong cryptography**: Utilizes modern algorithms like ECC, Noise Protocol, and IBC for robust security.

Deployment
----------

OpenNHP supports multiple deployment models to suit different use cases:

-   Client-to-Gateway: Secures access to multiple servers behind a gateway
-   Client-to-Server: Directly secures individual servers/applications
-   Server-to-Server: Secures communication between backend services
-   Gateway-to-Gateway: Secures site-to-site connections

> Please refer to the OpenNHP Documentation for detailed deployment instructions.

Comparison between SPA and NHP
------------------------------

The Single Packet Authorization (SPA) protocol is included in the Software Defined Perimeter (SDP) specification released by the Cloud Security Alliance (CSA). NHP improves security, reliability, scalability, and extensibility through a modern cryptographic framework and architecture, as demonstrated in the AHAC research paper.

\-

SPA

NHP

NHP Advantages

**Architecture**

The SPA packet decryption and user/device authentication component is coupled with the network access control component in the SPA server.

NHP-Server (the packet decryption and user/device authentication component) and NHP-AC( the access control component) are decoupled. NHP-Server can be deployed in separate hosts and supports horizontal scaling.

-   Performance: the resource-consuming component NHP-server is separated from the protected server.
-   Scalability: NHP-server can be deployed in distributed or clustered mode.
-   Security: the IP address of the protected server is not visible to the client unless the authentication succeeded.

**Communication**

Single direction

Bi-direction

Better reliability with the status notification of access control

**Cryptographic framework**

Shared Secretes

PKI or IBC, Noise Framework

-   Security: proven secure key exchange mechanism to mitigate the MITM threats
-   Low cost: efficient key distribution for zero trust model
-   Performance: high performance encryption/decryption

**Capability of Hiding network infrastructure**

Only server ports

Domain, IP, and ports

More powerful against various attacks(e.g., vulnerabilities, DNS hijack, and DDoS attacks)

**Extensibility**

None, only for SDP

All-purpose

Support any scenario that needs service darkening

**Interoperability**

Not available

Customizable

NHP can seamlessly integrate with existing protocols (e.g., DNS, FIDO, etc.)

Contributing
------------

We welcome contributions to OpenNHP! Please see our Contributing Guidelines for more information on how to get involved.

License
-------

OpenNHP is released under the Apache 2.0 License.

Contact
-------

-   Project Website: https://github.com/OpenNHP/opennhp
-   Email: opennhp@gmail.com
-   Slack Channel: Join our Slack

For more detailed documentation, please visit our Official Documentation.

References
----------

1.  From Naptime to Big Sleep: Using Large Language Models To Catch Vulnerabilities In Real-World Code, Google Big Sleep team. Google Project Zero. Oct 2024.
2.  LLM Agents can Autonomously Exploit One-day Vulnerabilities. Richard Fang, Rohan Bindu, Akul Gupta, Daniel Kang. arxiv. April 2004.
3.  VulnHuntr: Zero shot vulnerability discovery using LLMs. VulnHuntr Open Source Project: https://github.com/protectai/vulnhuntr.
4.  Software-Defined Perimeter (SDP) Specification v2.0. Jason Garbis, Juanita Koilpillai, Junaid lslam, Bob Flores, Daniel Bailey, Benfeng Chen, Eitan Bremler, Michael Roza, Ahmed Refaey Hussein. _Cloud Security Alliance(CSA)_. Mar 2022.
5.  AHAC: Advanced Network-Hiding Access Control Framework. Mudi Xu, Benfeng Chen, Zhizhong Tan, Shan Chen, Lei Wang, Yan Liu, Tai Io San, Sou Wang Fong, Wenyong Wang, and Jing Feng. _Applied Sciences Journal_. June 2024.
6.  Noise Protocol Framework. https://noiseprotocol.org/
7.  Vulnerability Management Framework project. https://phoenix.security/web-vuln-management/

* * *

🌟 Thank you for your interest in OpenNHP! We look forward to your contributions and feedback.
