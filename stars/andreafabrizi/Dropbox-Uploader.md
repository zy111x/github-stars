---
project: Dropbox-Uploader
stars: 6572
description: Dropbox Uploader is a BASH script which can be used to upload, download, list or delete files from Dropbox, an online file sharing, synchronization and backup service.
url: https://github.com/andreafabrizi/Dropbox-Uploader
---

Dropbox Uploader
================

Dropbox Uploader is a **BASH** script which can be used to upload, download, delete, list files (and more!) from **Dropbox**, an online file sharing, synchronization and backup service.

It's written in BASH scripting language and only needs **cURL**.

You can take a look to the GitHub project page.

**Why use this script?**

-   **Portable:** It's written in BASH scripting and only needs `cURL` (curl is a tool to transfer data from or to a server, available for all operating systems and installed by default in many linux distributions).
-   **Secure:** It's not required to provide your username/password to this script, because it uses the official Dropbox API v2 for the authentication process.

Please refer to the Wiki for tips and additional information about this project. The Wiki is also the place where you can share your scripts and examples related to Dropbox Uploader.

Features
--------

-   Cross platform
-   Support for the official Dropbox API v2
-   No password required or stored
-   Simple step-by-step configuration wizard
-   Simple and chunked file upload
-   File and recursive directory download
-   File and recursive directory upload
-   Shell wildcard expansion (only for upload)
-   Delete/Move/Rename/Copy/List/Share files
-   Create share link
-   Monitor for changes

Getting started
---------------

First, clone the repository using git (recommended):

git clone https://github.com/andreafabrizi/Dropbox-Uploader.git

or download the script manually using this command:

curl "https://raw.githubusercontent.com/andreafabrizi/Dropbox-Uploader/master/dropbox\_uploader.sh" -o dropbox\_uploader.sh

Then give the execution permission to the script and run it:

 $chmod +x dropbox\_uploader.sh
 $./dropbox\_uploader.sh

The first time you run `dropbox_uploader`, you'll be guided through a wizard in order to configure access to your Dropbox. This configuration will be stored in `~/.dropbox_uploader`.

Usage
-----

The syntax is quite simple:

```
./dropbox_uploader.sh [PARAMETERS] COMMAND...

[%%]: Optional param
<%%>: Required param
```

**Available commands:**

-   **upload** <LOCAL\_FILE/DIR ...> <REMOTE\_FILE/DIR>  
    Upload a local file or directory to a remote Dropbox folder.  
    If the file is bigger than 150Mb the file is uploaded using small chunks (default 50Mb); in this case a . (dot) is printed for every chunk successfully uploaded and a \* (star) if an error occurs (the upload is retried for a maximum of three times). Only if the file is smaller than 150Mb, the standard upload API is used, and if the -p option is specified the default curl progress bar is displayed during the upload process.  
    The local file/dir parameter supports wildcards expansion.
    
-   **download** <REMOTE\_FILE/DIR> \[LOCAL\_FILE/DIR\]  
    Download file or directory from Dropbox to a local folder
    
-   **delete** <REMOTE\_FILE/DIR>  
    Remove a remote file or directory from Dropbox
    
-   **move** <REMOTE\_FILE/DIR> <REMOTE\_FILE/DIR>  
    Move or rename a remote file or directory
    
-   **copy** <REMOTE\_FILE/DIR> <REMOTE\_FILE/DIR>  
    Copy a remote file or directory
    
-   **mkdir** <REMOTE\_DIR>  
    Create a remote directory on Dropbox
    
-   **list** \[REMOTE\_DIR\]  
    List the contents of the remote Dropbox folder
    
-   **monitor** \[REMOTE\_DIR\] \[TIMEOUT\]  
    Monitor the remote Dropbox folder for changes. If timeout is specified, at the first change event the function will return.
    
-   **share** <REMOTE\_FILE>  
    Get a public share link for the specified file or directory
    
-   **saveurl** <URL> <REMOTE\_DIR>  
    Download a file from an URL to a Dropbox folder directly (the file is NOT downloaded locally)
    
-   **search** <QUERY> Search for a specific pattern on Dropbox and returns the list of matching files or directories
    
-   **info**  
    Print some info about your Dropbox account
    
-   **space** Print some info about the space usage on your Dropbox account
    
-   **unlink**  
    Unlink the script from your Dropbox account
    

**Optional parameters:**

-   **\-f <FILENAME>**  
    Load the configuration file from a specific file
    
-   **\-s**  
    Skip already existing files when download/upload. Default: Overwrite
    
-   **\-d**  
    Enable DEBUG mode
    
-   **\-q**  
    Quiet mode. Don't show progress meter or messages
    
-   **\-h**  
    Show file sizes in human readable format
    
-   **\-p**  
    Show cURL progress meter
    
-   **\-k**  
    Doesn't check for SSL certificates (insecure)
    
-   **\-x <FILENAME>**  
    Ignores/excludes directories or files from syncing. -x filename -x directoryname.
    

**Examples:**

    ./dropbox\_uploader.sh upload /etc/passwd /myfiles/passwd.old
    ./dropbox\_uploader.sh upload \*.zip /
    ./dropbox\_uploader.sh -x .git upload ./project /
    ./dropbox\_uploader.sh download /backup.zip
    ./dropbox\_uploader.sh delete /backup.zip
    ./dropbox\_uploader.sh mkdir /myDir/
    ./dropbox\_uploader.sh upload "My File.txt" "My File 2.txt"
    ./dropbox\_uploader.sh share "My File.txt"
    ./dropbox\_uploader.sh list

Tested Environments
-------------------

-   GNU Linux
-   FreeBSD 8.3/10.0
-   MacOSX
-   Windows/Cygwin
-   Raspberry Pi
-   QNAP
-   iOS
-   OpenWRT
-   Chrome OS
-   OpenBSD
-   Termux

If you have successfully tested this script on others systems or platforms please let me know!

Running as cron job
-------------------

Dropbox Uploader relies on a different configuration file for each system user. The default configuration file location is `$HOME/.dropbox_uploader`. This means that if you setup the script with your user and then you try to run a cron job as root, it won't work. So, when running this script using cron, please keep in mind the following:

-   Remember to setup the script with the user used to run the cron job
-   Always specify the full script path when running it (e.g. /path/to/dropbox\_uploader.sh)
-   Use always the -f option to specify the full configuration file path, because sometimes in the cron environment the home folder path is not detected correctly (e.g. -f /home/youruser/.dropbox\_uploader)
-   My advice is, for security reasons, to not share the same configuration file with different users

How to setup a proxy
--------------------

To use a proxy server, just set the **https\_proxy** environment variable:

**Linux:**

    export HTTP\_PROXY\_USER=XXXX
    export HTTP\_PROXY\_PASSWORD=YYYY
    export https\_proxy=http://192.168.0.1:8080

**BSD:**

    setenv HTTP\_PROXY\_USER XXXX
    setenv HTTP\_PROXY\_PASSWORD YYYY
    setenv https\_proxy http://192.168.0.1:8080

BASH and Curl installation
--------------------------

**Debian & Ubuntu Linux:**

    sudo apt-get install bash (Probably BASH is already installed on your system)
    sudo apt-get install curl

**BSD:**

    cd /usr/ports/shells/bash && make install clean
    cd /usr/ports/ftp/curl && make install clean

**Cygwin:**  
You need to install these packages:

-   curl
-   ca-certificates
-   dos2unix

Before running the script, you need to convert it using the dos2unix command.

**Build cURL from source:**

-   Download the source tarball from http://curl.haxx.se/download.html
-   Follow the INSTALL instructions

DropShell
---------

DropShell is an interactive DropBox shell, based on DropBox Uploader:

DropShell v0.2
The Intractive Dropbox SHELL
Andrea Fabrizi - andrea.fabrizi@gmail.com

Type help for the list of the available commands.

andrea@Dropbox:/$ ls
 \[D\] 0       Apps
 \[D\] 0       Camera Uploads
 \[D\] 0       Public
 \[D\] 0       scripts
 \[D\] 0       Security
 \[F\] 105843  notes.txt
andrea@DropBox:/ServerBackup$ get notes.txt

Running as Docker Container
---------------------------

First build the docker image:

docker build https://github.com/sircuri/Dropbox-Uploader.git -f Dockerfile -t <TAG\>

or for RaspBerry:

docker build https://github.com/sircuri/Dropbox-Uploader.git -f Dockerfile.pi -t <TAG\>

then, you can run it as following:

docker run -i --rm --user=$(id -u):$(id -g) -v <LOCAL\_CONFIG\_PATH\>:/config -v <YOUR\_DATA\_DIR\_MOUNT\>:/workdir <TAG\> <Arguments\> 

This will store the auth token information in the given local directory in `<LOCAL_CONFIG_PATH>`. To ensure access to your mounted directories it can be important to pass a UID and GID to the docker deamon (as stated in the example by the --user argument)

Using the script with docker makes it also possible to run the script even on windows machines.

To use a proxy, just set the mentioned environment variables via the docker `-e` parameter.

Related projects
----------------

thunar-dropbox: A simple extension to Dropbox Uploader that provides a convenient method to share your Dropbox files with one click!

Upgrading from old dropbox API
------------------------------

Starting September 30th, 2021, Dropbox is updating their API (OAuth scopes, PKCE, refresh tokens, and short-lived access tokens) dropbox\_uploader.sh configurations made with the old API will not longer work after that date. Reconfigure dropbox\_uploader.sh:

-   Go to https://www.dropbox.com/account/connected\_apps, expand your configuration, and click the button 'Disconnect'
-   Rename or delete your configuration file .dropbox\_uploader

Donations
---------

If you want to support this project, please consider donating:

-   PayPal: https://paypal.me/AndreaF83
-   BTC: 1JHCGAMpKqUwBjcT3Kno9Wd5z16K6WKPqG
