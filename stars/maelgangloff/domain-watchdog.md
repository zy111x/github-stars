---
project: domain-watchdog
stars: 190
description: An app that uses RDAP to collect publicly available info about domains, track their history, and purchase them
url: https://github.com/maelgangloff/domain-watchdog
---

**Domain Watchdog**
===================

Your companion in the quest for domain names 🔍  
domainwatchdog.eu »

  

Domain Watchdog is an app that uses RDAP to collect publicly available info about domains, track their history, and purchase them. For more information please check the wiki !

Why use it?
-----------

-   **Historical Tracking**: Know the history of a domain name, from its inception to its release into the public domain.
-   **Detailed Monitoring**: Follow the evolution of a domain name and the entities that manage it in detail.
-   **Auto-purchase Domain**: You want the domain name of your dreams, but it is already taken? Domain Watchdog detects the deletion of the domain name on WHOIS and can trigger the purchase of the domain name via a provider's API

Although the RDAP and WHOIS protocols allow you to obtain precise information about a domain, it is not possible to perform a reverse search to discover a list of domain names associated with an entity. Additionally, accessing a detailed history of events (ownership changes, renewals, etc.) is not feasible with these protocols.

Install
-------

Tip

For more details on the installation procedure, please refer to INSTALL.md.

### Docker Deployment

1.  Clone the repository
2.  Modify environment variables (.env) and add static files to customize your instance (see INSTALL.md)
3.  Pull the latest version of the Domain Watchdog image from Docker Hub.
    
    docker compose pull
    
4.  Start the project in production environment. If you want, you can also build the Docker image to use yourself.
    
    docker compose up
    

By default, the container listens on http://localhost:8080, but you can configure this in environment variables. See the Docker Compose file.

Features
--------

### Auto-purchase domain

A connector is a way to order a domain name. It is important to mention that this project does not act as a payment intermediary. Indeed, the user's credentials are directly used to enable the purchase via the provider's API. To this end, the user gives his consent to define the legal framework in which the use of his account with the provider's API will be made.

The table below lists the supported API connector providers:

Provider

Documentation

Supported

OVH

https://api.ovh.com

**Yes**

GANDI

https://api.gandi.net/docs/domains/

**Yes**

NAMECHEAP

https://www.namecheap.com/support/api/methods/domains/create/

**Yes**

AUTODNS

https://cloud.autodns.com/

**Yes**

If a domain has expired and a connector is linked to the Watchlist, then Domain Watchdog will try to order it via the connector provider's API.

Note: If the same domain name is present on several Watchlists, it is not possible to predict in advance which user will win the domain name. The choice is left to chance.

### Monitoring

A watchlist is a list of domain names, triggers and possibly an API connector.

They allow you to follow the life of the listed domain names and send you a notification when a change has been detected.

A notification to the user is sent when a new event occurs on one of the domain names in the Watchlist. This can be an email or a chat via Webhook (Slack, Mattermost, Discord, ...). An iCalendar export of domain events is possible.

### RDAP search

The latest version of the WHOIS protocol was standardized in 2004 by RFC 3912.1 This protocol allows anyone to retrieve key information concerning a domain name, an IP address, or an entity registered with a registry.

ICANN launched a global vote in 2023 to propose replacing the WHOIS protocol with RDAP. As a result, registries and registrars will no longer be required to support WHOIS from 2025 (_WHOIS Sunset Date_).2

Domain Watchdog uses the RDAP protocol, which will soon be the new standard for retrieving information concerning domain names.

Disclaimer
----------

Important

-   Domain Watchdog is an opensource project distributed under _GNU Affero General Public License v3.0 or later_ license
-   In the internal operation, everything is done to perform the least possible RDAP requests: rate limit, intelligent caching system, etc.
-   Please note that this project is NOT affiliated IN ANY WAY with the API Providers used to order domain names.
-   The project installers are responsible for the use of their own instance.
-   Under no circumstances will the owner of this project be held responsible for other cases over which he has no control.

Useful documentation
--------------------

Note

-   RFC 7482 : Registration Data Access Protocol (RDAP) Query Format
-   RFC 7483 : JSON Responses for the Registration Data Access Protocol (RDAP)
-   RFC 7484 : Finding the Authoritative Registration Data (RDAP) Service

Licensing
---------

This source code of this project is licensed under _GNU Affero General Public License v3.0 or later_. Contributions are welcome as long as they do not contravene the Code of Conduct.

Footnotes
---------

1.  RFC 3912 : WHOIS Protocol Specification. (2004). IETF Datatracker. https://datatracker.ietf.org/doc/html/rfc3912 ↩
    
2.  2023 Global Amendments to the Base gTLD Registry Agreement (RA), Specification 13, and 2013 Registrar Accreditation Agreement (RAA) - ICANN. (2023). https://www.icann.org/resources/pages/global-amendment-2023-en ↩
