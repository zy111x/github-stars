---
project: rclone
stars: 47948
description: "rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files
url: https://github.com/rclone/rclone
---

Special thanks to our sponsor:  
  

**Warp is a modern, Rust-based terminal with AI built in so you and your team can build great software, faster.**

Visit warp.dev to learn more.

  

* * *

  

Website | Documentation | Download | Contributing | Changelog | Installation | Forum

Rclone
======

Rclone _("rsync for cloud storage")_ is a command-line program to sync files and directories to and from different cloud storage providers.

Storage providers
-----------------

-   1Fichier 📄
-   Akamai Netstorage 📄
-   Alibaba Cloud (Aliyun) Object Storage System (OSS) 📄
-   Amazon S3 📄
-   ArvanCloud Object Storage (AOS) 📄
-   Backblaze B2 📄
-   Box 📄
-   Ceph 📄
-   China Mobile Ecloud Elastic Object Storage (EOS) 📄
-   Cloudflare R2 📄
-   Citrix ShareFile 📄
-   DigitalOcean Spaces 📄
-   Digi Storage 📄
-   Dreamhost 📄
-   Dropbox 📄
-   Enterprise File Fabric 📄
-   Fastmail Files 📄
-   Files.com 📄
-   FTP 📄
-   GoFile 📄
-   Google Cloud Storage 📄
-   Google Drive 📄
-   Google Photos 📄
-   HDFS (Hadoop Distributed Filesystem) 📄
-   Hetzner Storage Box 📄
-   HiDrive 📄
-   HTTP 📄
-   Huawei Cloud Object Storage Service(OBS) 📄
-   iCloud Drive 📄
-   ImageKit 📄
-   Internet Archive 📄
-   Jottacloud 📄
-   IBM COS S3 📄
-   IONOS Cloud 📄
-   Koofr 📄
-   Leviia Object Storage 📄
-   Liara Object Storage 📄
-   Linkbox 📄
-   Linode Object Storage 📄
-   Magalu Object Storage 📄
-   Mail.ru Cloud 📄
-   Memset Memstore 📄
-   Mega 📄
-   Memory 📄
-   Microsoft Azure Blob Storage 📄
-   Microsoft Azure Files Storage 📄
-   Microsoft OneDrive 📄
-   Minio 📄
-   Nextcloud 📄
-   OVH 📄
-   Blomp Cloud Storage 📄
-   OpenDrive 📄
-   OpenStack Swift 📄
-   Oracle Cloud Storage 📄
-   Oracle Object Storage 📄
-   Outscale 📄
-   ownCloud 📄
-   pCloud 📄
-   Petabox 📄
-   PikPak 📄
-   Pixeldrain 📄
-   premiumize.me 📄
-   put.io 📄
-   Proton Drive 📄
-   QingStor 📄
-   Qiniu Cloud Object Storage (Kodo) 📄
-   Quatrix 📄
-   Rackspace Cloud Files 📄
-   RackCorp Object Storage 📄
-   rsync.net 📄
-   Scaleway 📄
-   Seafile 📄
-   SeaweedFS 📄
-   Selectel Object Storage 📄
-   SFTP 📄
-   SMB / CIFS 📄
-   StackPath 📄
-   Storj 📄
-   SugarSync 📄
-   Synology C2 Object Storage 📄
-   Tencent Cloud Object Storage (COS) 📄
-   Uloz.to 📄
-   Wasabi 📄
-   WebDAV 📄
-   Yandex Disk 📄
-   Zoho WorkDrive 📄
-   The local filesystem 📄

Please see the full list of all storage providers and their features

### Virtual storage providers

These backends adapt or modify other storage providers

-   Alias: rename existing remotes 📄
-   Cache: cache remotes (DEPRECATED) 📄
-   Chunker: split large files 📄
-   Combine: combine multiple remotes into a directory tree 📄
-   Compress: compress files 📄
-   Crypt: encrypt files 📄
-   Hasher: hash files 📄
-   Union: join multiple remotes to work together 📄

Features
--------

-   MD5/SHA-1 hashes checked at all times for file integrity
-   Timestamps preserved on files
-   Partial syncs supported on a whole file basis
-   Copy mode to just copy new/changed files
-   Sync (one way) mode to make a directory identical
-   Bisync (two way) to keep two directories in sync bidirectionally
-   Check mode to check for file hash equality
-   Can sync to and from network, e.g. two different cloud accounts
-   Optional large file chunking (Chunker)
-   Optional transparent compression (Compress)
-   Optional encryption (Crypt)
-   Optional FUSE mount (rclone mount)
-   Multi-threaded downloads to local disk
-   Can serve local or remote files over HTTP/WebDAV/FTP/SFTP/DLNA

Installation & documentation
----------------------------

Please see the rclone website for:

-   Installation
-   Documentation & configuration
-   Changelog
-   FAQ
-   Storage providers
-   Forum
-   ...and more

Downloads
---------

-   https://rclone.org/downloads/

License
-------

This is free software under the terms of the MIT license (check the COPYING file included in this package).
