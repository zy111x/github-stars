---
project: wtf
stars: 15941
description: The personal information dashboard for your terminal
url: https://github.com/wtfutil/wtf
---

WTF (aka 'wtfutil') is the personal information dashboard for your terminal, providing at-a-glance access to your very important but infrequently-needed stats and data.

Used by thousands of developers and tech people around the world, WTF is free and open-source. To support the continued use and development of WTF, please consider sponsoring WTF via GitHub Sponsors.

### Are you a contributor or sponsor?

Awesome! See here for how you can change the exit message, the message WTF shows when quitting, to something special just for you.

Sponsored by
------------

**Warp.dev**  

**Robusta.dev**  

**Airbrake**  

* * *

-   Installation
    -   Installing via Homebrew
    -   Installing via MacPorts
    -   Installing a Binary
    -   Installing from Source
    -   Running via Docker
-   Communication
    -   GitHub Discussions
    -   Twitter
-   Documentation
-   Modules
-   Getting Bugs Fixed or Features Added
-   Contributing to the Source Code
    -   Adding Dependencies
-   Contributing to the Documentation
-   Contributors
-   Acknowledgements

Installation
------------

### Installing via Homebrew

The simplest way from Homebrew:

brew install wtfutil

wtfutil

That version can sometimes lag a bit, as recipe updates take time to get accepted into `homebrew-core`. If you always want the bleeding edge of releases, you can tap it:

brew tap wtfutil/wtfutil
brew install wtfutil

wtfutil

### Installing via MacPorts

You can also install via MacPorts:

sudo port selfupdate
sudo port install wtfutil

wtfutil

### Installing a Binary

Download the latest binary from GitHub.

WTF is a stand-alone binary. Once downloaded, copy it to a location you can run executables from (ie: `/usr/local/bin/`), and set the permissions accordingly:

chmod a+x /usr/local/bin/wtfutil

and you should be good to go.

### Installing from Source

If you want to run the build command from within your `$GOPATH`:

# Set the Go proxy
export GOPROXY="https://proxy.golang.org,direct"

# Disable the Go checksum database
export GOSUMDB=off

# Enable Go modules
export GO111MODULE=on

go get -u github.com/wtfutil/wtf
cd $GOPATH/src/github.com/wtfutil/wtf
make install
make run

If you want to run the build command from a folder that is not in your `$GOPATH`:

# Set the Go proxy
export GOPROXY="https://proxy.golang.org,direct"

go get -u github.com/wtfutil/wtf
cd $GOPATH/src/github.com/wtfutil/wtf
make install
make run

### Installing from Source using Docker

All building is done inside a docker container. You can then copy the binary to your local machine.

curl -o Dockerfile.build https://raw.githubusercontent.com/wtfutil/wtf/master/Dockerfile.build
docker build -f Dockerfile.build -t wtfutil --build-arg=version=master .
docker create --name wtf\_build wtfutil
docker cp wtf\_build:/usr/local/bin/wtfutil ~/.local/bin
docker rm wtf\_build

**Note:** WTF is _only_ compatible with Go versions **1.16.0** or later (due to the use of Go modules and newer standard library functions). If you would like to use `gccgo` to compile, you _must_ use `gccgo-9` or later which introduces support for Go modules.

### Installing via Arch User Repository

Arch Linux users can utilise the wtfutil package to build it from source, or wtfutil-bin to install pre-built binaries.

Running via Docker
------------------

You can run `wtf` inside a docker container:

# download or create the Dockerfile
curl -o Dockerfile https://raw.githubusercontent.com/wtfutil/wtf/master/Dockerfile

# build the docker container
docker build -t wtfutil .

# or for a particular tag or branch
docker build --build-arg=version=v0.25.0 -t wtfutil .

# run the container
docker run -it wtfutil

# run container with a local config file
docker run -it -v path/to/config.yml:/config/config.yml wtfutil --config=/config/config.yml

Communication
-------------

### GitHub Discussions

Conversations, ideas, discussions are done on GitHub Discussions.

Formerly they were on Slack; that channel has been deprecated.

### Twitter

Also, follow on Twitter for news and latest updates.

Documentation
-------------

See https://wtfutil.com for the definitive documentation. Here's some short-cuts:

-   Installation
-   Configuration
-   Module Documentation

Modules
-------

Modules are the chunks of functionality that make WTF useful. Modules are added and configured by including their configuration values in your `config.yml` file. The documentation for each module describes how to configure them.

Some interesting modules you might consider adding to get you started:

-   DigitalOcean
-   GitHub
-   Google Calendar
-   HackerNews
-   Have I Been Pwned
-   NewRelic
-   OpsGenie
-   Security
-   Transmission
-   Trello

Getting Bugs Fixed or Features Added
------------------------------------

WTF is open-source software, informally maintained by a small collection of volunteers who come and go at their leisure. There are absolutely no guarantees that, even if an issue is opened for them, bugs will be fixed or features added.

If there is a bug that you really need to have fixed or a feature you really want to have implemented, you can greatly increase your chances of that happening by creating a bounty on BountySource to provide an incentive for someone to tackle it.

Contributing to the Source Code
-------------------------------

First, kindly read Talk, then code by Dave Cheney. It's great advice and will often save a lot of time and effort.

Next, kindly read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

Then create your branch, write your code, submit your PR, and join the rest of the awesome people who've contributed their time and effort towards WTF. Without their contributors, WTF wouldn't be possible.

Don't worry if you've never written Go before, or never contributed to an open source project before, or that your code won't be good enough. For a surprising number of people WTF has been their first Go project, or first open source contribution. If you're here, and you've read this far, you're the right stuff.

Contributing to the Documentation
---------------------------------

Documentation now lives in its own repository here: https://github.com/wtfutil/wtfdocs.

Please make all additions and updates to documentation in that repository.

### Adding Dependencies

Dependency management in WTF is handled by Go modules. Please check out that page for more details on how Go modules work.

Contributors
------------

  
**Chris Cummer**  

  
**Anand Sudhir Prayaga**  

  
**Hossein Mehrabi**  

  
**FengYa**  

  
**deltax**  

  
**Bill Keenan**  

  
**June S**  

  
**liyiheng**  

  
**baustinanki**  

  
**lucus lee**  

  
**Mike Lloyd**  

  
**Sergio Rubio**  

  
**Farhad Farahi**  

  
**Lasantha Kularatne**  

  
**Mark Old**  

  
**flw**  

  
**David Barda**  

  
**Geoff Lee**  

  
**George Opritescu**  

  
**Grazfather**  

  
**Michael Cordell**  

  
**Patrick José Pereira**  

  
**sherod taylor**  

  
**Andrew Scott**  

  
**Lassi Piironen**  

  
**BlackWebWolf**  

  
**andrewzolotukhin**  

  
**Leon Stigter**  

  
**Amr Tamimi**  

  
**Jagdeep Singh**  

  
**Lineu Felipe**  

  
**Konstantin**  

  
**Brendan O'Leary**  

  
**bertl4398**  

  
**Ferenc-**  

  
**Rohan Verma**  

  
**Tim Fitzgerald**  

  
**Federico Ruggi**  

  
**Craig Woodward**  

  
**ReadmeCritic**  

  
**Eugene**  

  
**Kenny Wu**  

  
**Renán Romero**  

  
**Bastian Groß**  

  
**nicholas-eden**  

  
**Dan Rabinowitz**  

  
**David Missmann**  

  
**Mathias Weber**  

  
**TheRedSpy15**  

  
**Harald Nordgren**  

  
**Matei Alexandru Gardus**  

  
**Sean Smith**  

  
**Halil Kaskavalci**  

  
**Johan Denoyer**  

  
**Jelle Vink**  

  
**Devin Collins**  

  
**Danne Stayskal**  

  
**Max Beizer**  

  
**E:V:A**  

  
**Gabriel**  

  
**Andrew Scibek**  

  
**FriedCosey**  

  
**Michele Gerarduzzi**  

  
**Jack Morris**  

  
**foorb**  

  
**Levi Baber**  

  
**Graham Anderson**  

  
**Romain Bossart**  

  
**Kirill Motkov**  

  
**Brian Choromanski**  

  
**Sean DuBois**  

  
**Gary Kim**  

  
**Dylan**  

  
**Dmytro Prokhorenkov**  

  
**Elliot**  

  
**chenrui**  

  
**Andrew Suderman**  

  
**Bob 'Wombat' Hogg**  

  
**Christopher Hall**  

  
**Heitor Neiva**  

  
**Herby Gillot**  

  
**James Canning**  

  
**jeffz**  

  
**Mikkel Jeppesen Juhl**  

  
**Erik**  

  
**Nate Yourchuck**  

  
**Casey Primozic**  

  
**Alvaro \[Andor\]**  

  
**Joel Valentine**  

  
**Viktor Braun**  

  
**ChrisDBrown**  

  
**Narendra L**  

  
**ibaum**  

  
**Tim Scheuermann**  

  
**Indradhanush Gupta**  

  
**Victor Hugo Avelar Ossorio**  

  
**Steven Whitehead**  

  
**Lawrence Craft**  

  
**Avi Press**  

  
**Sarah Kraßnigg**  

  
**Jason Schweier**  

  
**Massa**  

  
**Vighnesh SK**  

  
**Alex Fornuto**  

  
**stevenwhitehead**  

  
**Johan Denoyer**  

  
**Albert Salim**  

  
**Ricardo N Feliciano**  

  
**Omer Davutoglu**  

  
**Hemu**  

  
**Dan Bent**  

  
**C123R**  

  
**Matjaž Depolli**  

  
**Toon Schoenmakers**  

  
**TDHTTTT**  

  
**jottr**  

  
**Nikolay Mateev**  

  
**Charlie Wang**  

  
**liyiheng**  

  
**Bjoern Weidlich**  

  
**Scott Hansen**  

  
**David Bond**  

  
**Yvonnick Esnault**  

  
**Vinícius Letério**  

  
**Adriano**  

  
**Jon Hadfield**  

  
**Tejas Shah**  

  
**Frederik Mogensen**  

  
**Risto Saarelma**  

  
**Sam Roberts**  

  
**gerchardon**  

  
**Matt**  

  
**R.I.Pienaar**  

  
**Frederik Mogensen**  

  
**aeter**  

  
**Tim Hwang**  

  
**Ying Fan Chong**  

  
**Martin Johns**  

  
**Jamie Tanna**  

  
**Todd Trimble**  

  
**Mitchell Hanberg**  

  
**Miha Frangež**  

  
**Sahil Dhiman**  

  
**Pingzhou | 平舟**  

  
**Yuval Goldberg**  

  
**David Bouchare**  

  
**Fredrik Steen**  

  
**zye1996**  

  
**Pierre Gaxatte**  

  
**Christian Frichot**  

  
**Lukas Kämmerling**  

  
**Antoine Meillet**  

  
**Christian Clauss**  

  
**Gibran Herrera**  

  
**Mahmud Ridwan**  

  
**tadeas**  

  
**tnwei**  

  
**Ginner**  

  
**Olivier Cloux**  

  
**Dogukan Turan**  

  
**Devendra Laulkar**  

  
**nont**  

  
**Kyrylo Silin**  

  
**Yoshihisa Mochihara**  

  
**thuan1412**  

  
**Siddhant Sinha**  

  
**Julien Midedji**  

  
**Igor Zibarev**  

  
**Eng Zer Jun**  

  
**Quentin Champ**  

  
**Igbanam Ogbuluijah**  

  
**Guney Can Gokoglu**  

  
**Des Preston**  

  
**Labesse Kévin**  

  
**Asad**  

  
**markcaudill**  

  
**Fabian Geiger**  

  
**Duncan Hutty**  

  
**Gábor Lipták**  

  
**Albert Fung**  

  
**pliski**  

  
**Peter Krantz**  

  
**bashbunni**  

  
**Ronald Record**  

  
**Crash129**  

  
**Chad Harp**  

  
**Kirill Troitskiy**  

  
**Axel H.**  

Acknowledgments
---------------

The inspiration for `WTF` came from Monica Dinculescu's tiny-care-terminal.

WTF is built atop tcell and tview, fantastic projects both. WTF is built, packaged, and deployed via GoReleaser.
