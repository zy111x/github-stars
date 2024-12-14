---
project: icons
stars: 215
description: Collection of icons and logos maintained by the selfh.st team
url: https://github.com/selfhst/icons
---

selfh.st Dashboard Icons
========================

selfh.st/icons is a repository of project assets initially built as a data store for the collection of icons displayed in the selfh.st/apps application directory. It has been made publicly available and expanded to include icons spanning all technology services to be leveraged by anyone looking to populate dashboards, documentation, and other visual mediums.

While users are free to browse the contents of the repository, the icon directory located at selfh.st contains functionality (display, filter, sort, and search) better suited for browsing the collection.

Table of Contents
-----------------

-   Requests and Contributions
-   Icon Details
    -   Links
        -   Base URL
        -   Reference
        -   Formats
    -   Light Versions
    -   Sizes
-   Sources
-   Acknowledgements
-   Disclaimer

Requests and Contributions
--------------------------

The collection of icons and logos found in this repository are maintained solely by the _selfh.st_ team. Pull requests will not be considered or accepted, although forks are encouraged for those who wish to use these icons as a starting point for their own collections.

New icon requests, updates, and issues with existing icons can be raised via the repository's Discussions page. The _selfh.st_ team is committed to acknowledging all requests in a timely manner.

Icon Details
------------

### Links

Links can be easily obtained through browsing the selfh.st/icons directory and clicking on a corresponding format for a given icon, which will automatically copy a link to that icon and format to the clipboard.

An icon link consists of three values, each of which is described in further detail below:

-   Base URL
-   Reference
-   Format

A complete icon link will look like this:

```
https://<Base URL>/<Format>/<Reference Name>.<Format>
```

For example, the icon URL for the PNG version of the Immich icon would be:

```
https://cdn.jsdelivr.net/gh/selfhst/icons/png/immich.png
```

#### Base URL

The project leverages jsDelivr, a free and reliable CDN for GitHub repositories, to provide links to each icon. Use the base URL below as the start point for all assets located in the repository.

-   https://cdn.jsdelivr.net/gh/selfhst/icons/

#### Reference (Name)

Icons are referred to by a value stored as their **Reference**. To convert an icon to its **Reference** name, convert all letters in the project name to lowercase and replace all non-alphanumeric characters with hyphens (-).

See the examples below for further reference.

-   Immich → immich
-   Home Assistant → home-assistant
-   Zigbee2MQTT → zigbee2mqtt

#### Formats

Icons are available in three possible formats:

-   SVG
-   PNG
-   WebP

When available, SVG is the preferred starting point for icons and later converted into PNG and WebP formats. However, not all projects provide SVG icons. When this occurs, PNG is used as the starting point.

### Light Versions

Not all icons and logos are suited for webpages with dark backgrounds. If this occurs and an SVG format is available, the icon is converted to lighter colors and can be referenced by appending _\-light_ to the end of the icon's Reference name.

For example:

-   ansible → ansible-light
-   affine → affine-light

The selfh.st/icons directory has a toggle to display light versions when available.

### Size

All icons are made available in a 1:1 aspect ratio. The majority are converted into a 512x512 square when possible to do so without comprimising quality. Occasionally, icons with SVGs heavily relying on strokes or those without SVG versions may be found in smaller or larger sizes.

Sources
-------

Most icons are sourced directly from a project's code repository or website. Occasionally, the sites below are leveraged when quality icons cannot be obtained directly from the source.

-   Wikipedia
-   walkxcode/dashboard-icons
-   Iconduck

Acknowledgements
----------------

Some of the concepts implemented in the execution of this collection were inspired by the work done by the team at walkxcode/dashboard-icons - the initial source for icons at selfh.st/apps. As we quickly outgrew the team's available icons and pace of delivery, we loosely modeled the building of this collection after their own to ensure a seamless transition.

The FitSelectionToArtboard script found in creold/illustrator-scripts is also utilized to easily resize assets when required.

Disclaimer
----------

The icons found in this repository are the property of their respective owners/entities and not affiliated with or represented by _selfh.st_. Access to the icons from this repository is offered free of charge and bound by the usage outlined by the project's license.