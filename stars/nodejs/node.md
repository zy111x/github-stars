---
project: node
stars: 108438
description: Node.js JavaScript runtime ✨🐢🚀✨
url: https://github.com/nodejs/node
---

Node.js
=======

Node.js is an open-source, cross-platform JavaScript runtime environment.

For information on using Node.js, see the Node.js website.

The Node.js project uses an open governance model. The OpenJS Foundation provides support for the project.

Contributors are expected to act in a collaborative manner to move the project forward. We encourage the constructive exchange of contrary opinions and compromise. The TSC reserves the right to limit or block contributors who repeatedly act in ways that discourage, exhaust, or otherwise negatively affect other participants.

**This project has a Code of Conduct.**

Table of contents
-----------------

-   Support
-   Release types
    -   Download
        -   Current and LTS releases
        -   Nightly releases
        -   API documentation
    -   Verifying binaries
-   Building Node.js
-   Security
-   Contributing to Node.js
-   Current project team members
    -   TSC (Technical Steering Committee)
    -   Collaborators
    -   Triagers
    -   Release keys
-   License

Support
-------

Looking for help? Check out the instructions for getting support.

Release types
-------------

-   **Current**: Under active development. Code for the Current release is in the branch for its major version number (for example, v22.x). Node.js releases a new major version every 6 months, allowing for breaking changes. This happens in April and October every year. Releases appearing each October have a support life of 8 months. Releases appearing each April convert to LTS (see below) each October.
-   **LTS**: Releases that receive Long Term Support, with a focus on stability and security. Every even-numbered major version will become an LTS release. LTS releases receive 12 months of _Active LTS_ support and a further 18 months of _Maintenance_. LTS release lines have alphabetically-ordered code names, beginning with v4 Argon. There are no breaking changes or feature additions, except in some special circumstances.
-   **Nightly**: Code from the Current branch built every 24-hours when there are changes. Use with caution.

Current and LTS releases follow semantic versioning. A member of the Release Team signs each Current and LTS release. For more information, see the Release README.

### Download

Binaries, installers, and source tarballs are available at https://nodejs.org/en/download/.

#### Current and LTS releases

https://nodejs.org/download/release/

The latest directory is an alias for the latest Current release. The latest-_codename_ directory is an alias for the latest release from an LTS line. For example, the latest-hydrogen directory contains the latest Hydrogen (Node.js 18) release.

#### Nightly releases

https://nodejs.org/download/nightly/

Each directory and filename includes the version (e.g., `v22.0.0`), followed by the UTC date (e.g., `20240424` for April 24, 2024), and the short commit SHA of the HEAD of the release (e.g., `ddd0a9e494`). For instance, a full directory name might look like `v22.0.0-nightly20240424ddd0a9e494`.

#### API documentation

Documentation for the latest Current release is at https://nodejs.org/api/. Version-specific documentation is available in each release directory in the _docs_ subdirectory. Version-specific documentation is also at https://nodejs.org/download/docs/.

### Verifying binaries

Download directories contain a `SHASUMS256.txt` file with SHA checksums for the files.

To download `SHASUMS256.txt` using `curl`:

curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt

To check that downloaded files match the checksum, use `sha256sum`:

sha256sum -c SHASUMS256.txt --ignore-missing

For Current and LTS, the GPG detached signature of `SHASUMS256.txt` is in `SHASUMS256.txt.sig`. You can use it with `gpg` to verify the integrity of `SHASUMS256.txt`. You will first need to import the GPG keys of individuals authorized to create releases.

See Release keys for commands to import active release keys.

Next, download the `SHASUMS256.txt.sig` for the release:

curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt.sig

Then use `gpg --verify SHASUMS256.txt.sig SHASUMS256.txt` to verify the file's signature.

Building Node.js
----------------

See BUILDING.md for instructions on how to build Node.js from source and a list of supported platforms.

Security
--------

For information on reporting security vulnerabilities in Node.js, see SECURITY.md.

Contributing to Node.js
-----------------------

-   Contributing to the project
-   Working Groups
-   Strategic initiatives
-   Technical values and prioritization

Current project team members
----------------------------

For information about the governance of the Node.js project, see GOVERNANCE.md.

### TSC (Technical Steering Committee)

#### TSC voting members

-   aduh95 - **Antoine du Hamel** <duhamelantoine1995@gmail.com\> (he/him)
-   anonrig - **Yagiz Nizipli** <yagiz@nizipli.com\> (he/him)
-   benjamingr - **Benjamin Gruenbaum** <benjamingr@gmail.com\>
-   BridgeAR - **Ruben Bridgewater** <ruben@bridgewater.de\> (he/him)
-   gireeshpunathil - **Gireesh Punathil** <gpunathi@in.ibm.com\> (he/him)
-   jasnell - **James M Snell** <jasnell@gmail.com\> (he/him)
-   joyeecheung - **Joyee Cheung** <joyeec9h3@gmail.com\> (she/her)
-   legendecas - **Chengzhong Wu** <legendecas@gmail.com\> (he/him)
-   marco-ippolito - **Marco Ippolito** <marcoippolito54@gmail.com\> (he/him)
-   mcollina - **Matteo Collina** <matteo.collina@gmail.com\> (he/him)
-   mhdawson - **Michael Dawson** <midawson@redhat.com\> (he/him)
-   RafaelGSS - **Rafael Gonzaga** <rafael.nunu@hotmail.com\> (he/him)
-   richardlau - **Richard Lau** <rlau@redhat.com\>
-   ronag - **Robert Nagy** <ronagy@icloud.com\>
-   ruyadorno - **Ruy Adorno** <ruy@vlt.sh\> (he/him)
-   ShogunPanda - **Paolo Insogna** <paolo@cowtech.it\> (he/him)
-   targos - **Michaël Zasso** <targos@protonmail.com\> (he/him)
-   tniessen - **Tobias Nießen** <tniessen@tnie.de\> (he/him)

#### TSC regular members

-   apapirovski - **Anatoli Papirovski** <apapirovski@mac.com\> (he/him)
-   BethGriggs - **Beth Griggs** <bethanyngriggs@gmail.com\> (she/her)
-   bnoordhuis - **Ben Noordhuis** <info@bnoordhuis.nl\>
-   cjihrig - **Colin Ihrig** <cjihrig@gmail.com\> (he/him)
-   codebytere - **Shelley Vohr** <shelley.vohr@gmail.com\> (she/her)
-   GeoffreyBooth - **Geoffrey Booth** <webadmin@geoffreybooth.com\> (he/him)
-   MoLow - **Moshe Atlow** <moshe@atlow.co.il\> (he/him)
-   Trott - **Rich Trott** <rtrott@gmail.com\> (he/him)

TSC emeriti members

#### TSC emeriti members

-   addaleax - **Anna Henningsen** <anna@addaleax.net\> (she/her)
-   ChALkeR - **Сковорода Никита Андреевич** <chalkerx@gmail.com\> (he/him)
-   chrisdickinson - **Chris Dickinson** <christopher.s.dickinson@gmail.com\>
-   danbev - **Daniel Bevenius** <daniel.bevenius@gmail.com\> (he/him)
-   danielleadams - **Danielle Adams** <adamzdanielle@gmail.com\> (she/her)
-   evanlucas - **Evan Lucas** <evanlucas@me.com\> (he/him)
-   fhinkel - **Franziska Hinkelmann** <franziska.hinkelmann@gmail.com\> (she/her)
-   Fishrock123 - **Jeremiah Senkpiel** <fishrock123@rocketmail.com\> (he/they)
-   gabrielschulhof - **Gabriel Schulhof** <gabrielschulhof@gmail.com\>
-   gibfahn - **Gibson Fahnestock** <gibfahn@gmail.com\> (he/him)
-   indutny - **Fedor Indutny** <fedor@indutny.com\>
-   isaacs - **Isaac Z. Schlueter** <i@izs.me\>
-   joshgav - **Josh Gavant** <josh.gavant@outlook.com\>
-   mmarchini - **Mary Marchini** <oss@mmarchini.me\> (she/her)
-   mscdex - **Brian White** <mscdex@mscdex.net\>
-   MylesBorins - **Myles Borins** <myles.borins@gmail.com\> (he/him)
-   nebrius - **Bryan Hughes** <bryan@nebri.us\>
-   ofrobots - **Ali Ijaz Sheikh** <ofrobots@google.com\> (he/him)
-   orangemocha - **Alexis Campailla** <orangemocha@nodejs.org\>
-   piscisaureus - **Bert Belder** <bertbelder@gmail.com\>
-   RaisinTen - **Darshan Sen** <raisinten@gmail.com\> (he/him)
-   rvagg - **Rod Vagg** <r@va.gg\>
-   sam-github - **Sam Roberts** <vieuxtech@gmail.com\>
-   shigeki - **Shigeki Ohtsu** <ohtsu@ohtsu.org\> (he/him)
-   thefourtheye - **Sakthipriyan Vairamani** <thechargingvolcano@gmail.com\> (he/him)
-   TimothyGu - **Tiancheng "Timothy" Gu** <timothygu99@gmail.com\> (he/him)
-   trevnorris - **Trevor Norris** <trev.norris@gmail.com\>

### Collaborators

-   abmusse - **Abdirahim Musse** <abdirahim.musse@ibm.com\>
-   addaleax - **Anna Henningsen** <anna@addaleax.net\> (she/her)
-   aduh95 - **Antoine du Hamel** <duhamelantoine1995@gmail.com\> (he/him) - Support me
-   anonrig - **Yagiz Nizipli** <yagiz@nizipli.com\> (he/him) - Support me
-   apapirovski - **Anatoli Papirovski** <apapirovski@mac.com\> (he/him)
-   atlowChemi - **Chemi Atlow** <chemi@atlow.co.il\> (he/him)
-   Ayase-252 - **Qingyu Deng** <i@ayase-lab.com\>
-   bengl - **Bryan English** <bryan@bryanenglish.com\> (he/him)
-   benjamingr - **Benjamin Gruenbaum** <benjamingr@gmail.com\>
-   BethGriggs - **Beth Griggs** <bethanyngriggs@gmail.com\> (she/her)
-   bnb - **Tierney Cyren** <hello@bnb.im\> (they/them)
-   bnoordhuis - **Ben Noordhuis** <info@bnoordhuis.nl\>
-   BridgeAR - **Ruben Bridgewater** <ruben@bridgewater.de\> (he/him)
-   cclauss - **Christian Clauss** <cclauss@me.com\> (he/him)
-   cjihrig - **Colin Ihrig** <cjihrig@gmail.com\> (he/him)
-   codebytere - **Shelley Vohr** <shelley.vohr@gmail.com\> (she/her)
-   cola119 - **Kohei Ueno** <kohei.ueno119@gmail.com\> (he/him)
-   daeyeon - **Daeyeon Jeong** <daeyeon.dev@gmail.com\> (he/him)
-   debadree25 - **Debadree Chatterjee** <debadree333@gmail.com\> (he/him)
-   deokjinkim - **Deokjin Kim** <deokjin81.kim@gmail.com\> (he/him)
-   edsadr - **Adrian Estrada** <edsadr@gmail.com\> (he/him)
-   ErickWendel - **Erick Wendel** <erick.workspace@gmail.com\> (he/him)
-   Ethan-Arrowood - **Ethan Arrowood** <ethan@arrowood.dev\> (he/him)
-   F3n67u - **Feng Yu** <F3n67u@outlook.com\> (he/him)
-   fhinkel - **Franziska Hinkelmann** <franziska.hinkelmann@gmail.com\> (she/her)
-   Flarna - **Gerhard Stöbich** <deb2001-github@yahoo.de\> (he/they)
-   gabrielschulhof - **Gabriel Schulhof** <gabrielschulhof@gmail.com\>
-   gengjiawen - **Jiawen Geng** <technicalcute@gmail.com\>
-   GeoffreyBooth - **Geoffrey Booth** <webadmin@geoffreybooth.com\> (he/him)
-   gireeshpunathil - **Gireesh Punathil** <gpunathi@in.ibm.com\> (he/him)
-   guybedford - **Guy Bedford** <guybedford@gmail.com\> (he/him)
-   H4ad - **Vinícius Lourenço Claro Cardoso** <contact@viniciusl.com.br\> (he/him)
-   HarshithaKP - **Harshitha K P** <harshitha014@gmail.com\> (she/her)
-   himself65 - **Zeyu "Alex" Yang** <himself65@outlook.com\> (he/him)
-   jakecastelli - **Jake Yuesong Li** <jake.yuesong@gmail.com\> (he/him)
-   JakobJingleheimer - **Jacob Smith** <jacob@frende.me\> (he/him)
-   jasnell - **James M Snell** <jasnell@gmail.com\> (he/him)
-   jazelly - **Jason Zhang** <xzha4350@gmail.com\> (he/him)
-   jkrems - **Jan Krems** <jan.krems@gmail.com\> (he/him)
-   joyeecheung - **Joyee Cheung** <joyeec9h3@gmail.com\> (she/her)
-   juanarbol - **Juan José Arboleda** <soyjuanarbol@gmail.com\> (he/him)
-   JungMinu - **Minwoo Jung** <nodecorelab@gmail.com\> (he/him)
-   KhafraDev - **Matthew Aitken** <maitken033380023@gmail.com\> (he/him)
-   kvakil - **Keyhan Vakil** <kvakil@sylph.kvakil.me\>
-   legendecas - **Chengzhong Wu** <legendecas@gmail.com\> (he/him)
-   lemire - **Daniel Lemire** <daniel@lemire.me\>
-   Linkgoron - **Nitzan Uziely** <linkgoron@gmail.com\>
-   LiviaMedeiros - **LiviaMedeiros** <livia@cirno.name\>
-   ljharb - **Jordan Harband** <ljharb@gmail.com\>
-   lpinca - **Luigi Pinca** <luigipinca@gmail.com\> (he/him)
-   lukekarrys - **Luke Karrys** <luke@lukekarrys.com\> (he/him)
-   Lxxyx - **Zijian Liu** <lxxyxzj@gmail.com\> (he/him)
-   marco-ippolito - **Marco Ippolito** <marcoippolito54@gmail.com\> (he/him) - Support me
-   marsonya - **Akhil Marsonya** <akhil.marsonya27@gmail.com\> (he/him)
-   MattiasBuelens - **Mattias Buelens** <mattias@buelens.com\> (he/him)
-   mcollina - **Matteo Collina** <matteo.collina@gmail.com\> (he/him) - Support me
-   meixg - **Xuguang Mei** <meixuguang@gmail.com\> (he/him)
-   mhdawson - **Michael Dawson** <midawson@redhat.com\> (he/him)
-   mildsunrise - **Alba Mendez** <me@alba.sh\> (she/her)
-   MoLow - **Moshe Atlow** <moshe@atlow.co.il\> (he/him)
-   MrJithil - **Jithil P Ponnan** <jithil@outlook.com\> (he/him)
-   ovflowd - **Claudio Wunder** <cwunder@gnome.org\> (he/they)
-   panva - **Filip Skokan** <panva.ip@gmail.com\> (he/him)
-   pimterry - **Tim Perry** <pimterry@gmail.com\> (he/him)
-   pmarchini - **Pietro Marchini** <pietro.marchini94@gmail.com\> (he/him)
-   Qard - **Stephen Belanger** <admin@stephenbelanger.com\> (he/him)
-   RafaelGSS - **Rafael Gonzaga** <rafael.nunu@hotmail.com\> (he/him)
-   richardlau - **Richard Lau** <rlau@redhat.com\>
-   rluvaton - **Raz Luvaton** <rluvaton@gmail.com\> (he/him)
-   ronag - **Robert Nagy** <ronagy@icloud.com\>
-   ruyadorno - **Ruy Adorno** <ruy@vlt.sh\> (he/him)
-   santigimeno - **Santiago Gimeno** <santiago.gimeno@gmail.com\>
-   ShogunPanda - **Paolo Insogna** <paolo@cowtech.it\> (he/him)
-   srl295 - **Steven R Loomis** <srl295@gmail.com\>
-   StefanStojanovic - **Stefan Stojanovic** <stefan.stojanovic@janeasystems.com\> (he/him)
-   sxa - **Stewart X Addison** <sxa@redhat.com\> (he/him)
-   targos - **Michaël Zasso** <targos@protonmail.com\> (he/him)
-   theanarkh - **theanarkh** <theratliter@gmail.com\> (he/him)
-   tniessen - **Tobias Nießen** <tniessen@tnie.de\> (he/him)
-   trivikr - **Trivikram Kamat** <trivikr.dev@gmail.com\>
-   Trott - **Rich Trott** <rtrott@gmail.com\> (he/him)
-   UlisesGascon - **Ulises Gascón** <ulisesgascongonzalez@gmail.com\> (he/him)
-   vmoroz - **Vladimir Morozov** <vmorozov@microsoft.com\> (he/him)
-   VoltrexKeyva - **Mohammed Keyvanzadeh** <mohammadkeyvanzade94@gmail.com\> (he/him)
-   watilde - **Daijiro Wachi** <daijiro.wachi@gmail.com\> (he/him)
-   zcbenz - **Cheng Zhao** <zcbenz@gmail.com\> (he/him)
-   ZYSzys - **Yongsheng Zhang** <zyszys98@gmail.com\> (he/him)

Emeriti

### Collaborator emeriti

-   ak239 - **Aleksei Koziatinskii** <ak239spb@gmail.com\>
-   andrasq - **Andras** <andras@kinvey.com\>
-   AndreasMadsen - **Andreas Madsen** <amwebdk@gmail.com\> (he/him)
-   AnnaMag - **Anna M. Kedzierska** <anna.m.kedzierska@gmail.com\>
-   antsmartian - **Anto Aravinth** <anto.aravinth.cse@gmail.com\> (he/him)
-   aqrln - **Alexey Orlenko** <eaglexrlnk@gmail.com\> (he/him)
-   AshCripps - **Ash Cripps** <email@ashleycripps.co.uk\>
-   bcoe - **Ben Coe** <bencoe@gmail.com\> (he/him)
-   bmeck - **Bradley Farias** <bradley.meck@gmail.com\>
-   bmeurer - **Benedikt Meurer** <benedikt.meurer@gmail.com\>
-   boneskull - **Christopher Hiller** <boneskull@boneskull.com\> (he/him)
-   brendanashworth - **Brendan Ashworth** <brendan.ashworth@me.com\>
-   bzoz - **Bartosz Sosnowski** <bartosz@janeasystems.com\>
-   calvinmetcalf - **Calvin Metcalf** <calvin.metcalf@gmail.com\>
-   ChALkeR - **Сковорода Никита Андреевич** <chalkerx@gmail.com\> (he/him)
-   chrisdickinson - **Chris Dickinson** <christopher.s.dickinson@gmail.com\>
-   claudiorodriguez - **Claudio Rodriguez** <cjrodr@yahoo.com\>
-   danbev - **Daniel Bevenius** <daniel.bevenius@gmail.com\> (he/him)
-   danielleadams - **Danielle Adams** <adamzdanielle@gmail.com\> (she/her)
-   DavidCai1993 - **David Cai** <davidcai1993@yahoo.com\> (he/him)
-   davisjam - **Jamie Davis** <davisjam@vt.edu\> (he/him)
-   devnexen - **David Carlier** <devnexen@gmail.com\>
-   devsnek - **Gus Caplan** <me@gus.host\> (they/them)
-   digitalinfinity - **Hitesh Kanwathirtha** <digitalinfinity@gmail.com\> (he/him)
-   dmabupt - **Xu Meng** <dmabupt@gmail.com\> (he/him)
-   dnlup - **dnlup** <dnlup.dev@gmail.com\>
-   eljefedelrodeodeljefe - **Robert Jefe Lindstaedt** <robert.lindstaedt@gmail.com\>
-   estliberitas - **Alexander Makarenko** <estliberitas@gmail.com\>
-   eugeneo - **Eugene Ostroukhov** <eostroukhov@google.com\>
-   evanlucas - **Evan Lucas** <evanlucas@me.com\> (he/him)
-   firedfox - **Daniel Wang** <wangyang0123@gmail.com\>
-   Fishrock123 - **Jeremiah Senkpiel** <fishrock123@rocketmail.com\> (he/they)
-   gdams - **George Adams** <gadams@microsoft.com\> (he/him)
-   geek - **Wyatt Preul** <wpreul@gmail.com\>
-   gibfahn - **Gibson Fahnestock** <gibfahn@gmail.com\> (he/him)
-   glentiki - **Glen Keane** <glenkeane.94@gmail.com\> (he/him)
-   hashseed - **Yang Guo** <yangguo@chromium.org\> (he/him)
-   hiroppy - **Yuta Hiroto** <hello@hiroppy.me\> (he/him)
-   iansu - **Ian Sutherland** <ian@iansutherland.ca\>
-   iarna - **Rebecca Turner** <me@re-becca.org\>
-   imran-iq - **Imran Iqbal** <imran@imraniqbal.org\>
-   imyller - **Ilkka Myller** <ilkka.myller@nodefield.com\>
-   indutny - **Fedor Indutny** <fedor@indutny.com\>
-   isaacs - **Isaac Z. Schlueter** <i@izs.me\>
-   italoacasas - **Italo A. Casas** <me@italoacasas.com\> (he/him)
-   JacksonTian - **Jackson Tian** <shyvo1987@gmail.com\>
-   jasongin - **Jason Ginchereau** <jasongin@microsoft.com\>
-   jbergstroem - **Johan Bergström** <bugs@bergstroem.nu\>
-   jdalton - **John-David Dalton** <john.david.dalton@gmail.com\>
-   jhamhader - **Yuval Brik** <yuval@brik.org.il\>
-   joaocgreis - **João Reis** <reis@janeasystems.com\>
-   joesepi - **Joe Sepi** <sepi@joesepi.com\> (he/him)
-   joshgav - **Josh Gavant** <josh.gavant@outlook.com\>
-   julianduque - **Julian Duque** <julianduquej@gmail.com\> (he/him)
-   kfarnung - **Kyle Farnung** <kfarnung@microsoft.com\> (he/him)
-   kunalspathak - **Kunal Pathak** <kunal.pathak@microsoft.com\>
-   kuriyosh - **Yoshiki Kurihara** <yosyos0306@gmail.com\> (he/him)
-   lance - **Lance Ball** <lball@redhat.com\> (he/him)
-   Leko - **Shingo Inoue** <leko.noor@gmail.com\> (he/him)
-   lucamaraschi - **Luca Maraschi** <luca.maraschi@gmail.com\> (he/him)
-   lundibundi - **Denys Otrishko** <shishugi@gmail.com\> (he/him)
-   lxe - **Aleksey Smolenchuk** <lxe@lxe.co\>
-   maclover7 - **Jon Moss** <me@jonathanmoss.me\> (he/him)
-   mafintosh - **Mathias Buus** <mathiasbuus@gmail.com\> (he/him)
-   matthewloring - **Matthew Loring** <mattloring@google.com\>
-   Mesteery - **Mestery** <mestery@protonmail.com\> (he/him)
-   micnic - **Nicu Micleușanu** <micnic90@gmail.com\> (he/him)
-   mikeal - **Mikeal Rogers** <mikeal.rogers@gmail.com\>
-   miladfarca - **Milad Fa** <mfarazma@redhat.com\> (he/him)
-   misterdjules - **Julien Gilli** <jgilli@netflix.com\>
-   mmarchini - **Mary Marchini** <oss@mmarchini.me\> (she/her)
-   monsanto - **Christopher Monsanto** <chris@monsan.to\>
-   MoonBall - **Chen Gang** <gangc.cxy@foxmail.com\>
-   mscdex - **Brian White** <mscdex@mscdex.net\>
-   MylesBorins - **Myles Borins** <myles.borins@gmail.com\> (he/him)
-   not-an-aardvark - **Teddy Katz** <teddy.katz@gmail.com\> (he/him)
-   ofrobots - **Ali Ijaz Sheikh** <ofrobots@google.com\> (he/him)
-   Olegas - **Oleg Elifantiev** <oleg@elifantiev.ru\>
-   orangemocha - **Alexis Campailla** <orangemocha@nodejs.org\>
-   othiym23 - **Forrest L Norvell** <ogd@aoaioxxysz.net\> (they/them/themself)
-   oyyd - **Ouyang Yadong** <oyydoibh@gmail.com\> (he/him)
-   petkaantonov - **Petka Antonov** <petka\_antonov@hotmail.com\>
-   phillipj - **Phillip Johnsen** <johphi@gmail.com\>
-   piscisaureus - **Bert Belder** <bertbelder@gmail.com\>
-   pmq20 - **Minqi Pan** <pmq2001@gmail.com\>
-   PoojaDurgad - **Pooja D P** <Pooja.D.P@ibm.com\> (she/her)
-   princejwesley - **Prince John Wesley** <princejohnwesley@gmail.com\>
-   psmarshall - **Peter Marshall** <petermarshall@chromium.org\> (he/him)
-   puzpuzpuz - **Andrey Pechkurov** <apechkurov@gmail.com\> (he/him)
-   RaisinTen - **Darshan Sen** <raisinten@gmail.com\> (he/him)
-   refack - **Refael Ackermann (רפאל פלחי)** <refack@gmail.com\> (he/him/הוא/אתה)
-   rexagod - **Pranshu Srivastava** <rexagod@gmail.com\> (he/him)
-   rickyes - **Ricky Zhou** <0x19951125@gmail.com\> (he/him)
-   rlidwka - **Alex Kocharin** <alex@kocharin.ru\>
-   rmg - **Ryan Graham** <r.m.graham@gmail.com\>
-   robertkowalski - **Robert Kowalski** <rok@kowalski.gd\>
-   romankl - **Roman Klauke** <romaaan.git@gmail.com\>
-   ronkorving - **Ron Korving** <ron@ronkorving.nl\>
-   RReverser - **Ingvar Stepanyan** <me@rreverser.com\>
-   rubys - **Sam Ruby** <rubys@intertwingly.net\>
-   rvagg - **Rod Vagg** <rod@vagg.org\>
-   ryzokuken - **Ujjwal Sharma** <ryzokuken@disroot.org\> (he/him)
-   saghul - **Saúl Ibarra Corretgé** <s@saghul.net\>
-   sam-github - **Sam Roberts** <vieuxtech@gmail.com\>
-   sebdeckers - **Sebastiaan Deckers** <sebdeckers83@gmail.com\>
-   seishun - **Nikolai Vavilov** <vvnicholas@gmail.com\>
-   shigeki - **Shigeki Ohtsu** <ohtsu@ohtsu.org\> (he/him)
-   shisama - **Masashi Hirano** <shisama07@gmail.com\> (he/him)
-   silverwind - **Roman Reiss** <me@silverwind.io\>
-   starkwang - **Weijia Wang** <starkwang@126.com\>
-   stefanmb - **Stefan Budeanu** <stefan@budeanu.com\>
-   tellnes - **Christian Tellnes** <christian@tellnes.no\>
-   thefourtheye - **Sakthipriyan Vairamani** <thechargingvolcano@gmail.com\> (he/him)
-   thlorenz - **Thorsten Lorenz** <thlorenz@gmx.de\>
-   TimothyGu - **Tiancheng "Timothy" Gu** <timothygu99@gmail.com\> (he/him)
-   trevnorris - **Trevor Norris** <trev.norris@gmail.com\>
-   tunniclm - **Mike Tunnicliffe** <m.j.tunnicliffe@gmail.com\>
-   vdeturckheim - **Vladimir de Turckheim** <vlad2t@hotmail.com\> (he/him)
-   vkurchatkin - **Vladimir Kurchatkin** <vladimir.kurchatkin@gmail.com\>
-   vsemozhetbyt - **Vse Mozhet Byt** <vsemozhetbyt@gmail.com\> (he/him)
-   watson - **Thomas Watson** <w@tson.dk\>
-   whitlockjc - **Jeremy Whitlock** <jwhitlock@apache.org\>
-   XadillaX - **Khaidi Chu** <i@2333.moe\> (he/him)
-   yashLadha - **Yash Ladha** <yash@yashladha.in\> (he/him)
-   yhwang - **Yihong Wang** <yh.wang@ibm.com\>
-   yorkie - **Yorkie Liu** <yorkiefixer@gmail.com\>
-   yosuke-furukawa - **Yosuke Furukawa** <yosuke.furukawa@gmail.com\>

Collaborators follow the Collaborator Guide in maintaining the Node.js project.

### Triagers

-   atlowChemi - **Chemi Atlow** <chemi@atlow.co.il\> (he/him)
-   Ayase-252 - **Qingyu Deng** <i@ayase-lab.com\>
-   bmuenzenmeyer - **Brian Muenzenmeyer** <brian.muenzenmeyer@gmail.com\> (he/him)
-   CanadaHonk - **Oliver Medhurst** <honk@goose.icu\> (they/them)
-   daeyeon - **Daeyeon Jeong** <daeyeon.dev@gmail.com\> (he/him)
-   F3n67u - **Feng Yu** <F3n67u@outlook.com\> (he/him)
-   gireeshpunathil - **Gireesh Punathil** <gpunathi@in.ibm.com\> (he/him)
-   iam-frankqiu - **Frank Qiu** <iam.frankqiu@gmail.com\> (he/him)
-   KevinEady - **Kevin Eady** <kevin.c.eady@gmail.com\> (he/him)
-   kvakil - **Keyhan Vakil** <kvakil@sylph.kvakil.me\>
-   marsonya - **Akhil Marsonya** <akhil.marsonya27@gmail.com\> (he/him)
-   meixg - **Xuguang Mei** <meixuguang@gmail.com\> (he/him)
-   mertcanaltin - **Mert Can Altin** <mertgold60@gmail.com\>
-   preveen-stack - **Preveen Padmanabhan** <wide4head@gmail.com\> (he/him)
-   VoltrexKeyva - **Mohammed Keyvanzadeh** <mohammadkeyvanzade94@gmail.com\> (he/him)

Triagers follow the Triage Guide when responding to new issues.

### Release keys

Primary GPG keys for Node.js Releasers (some Releasers sign with subkeys):

-   **Antoine du Hamel** <duhamelantoine1995@gmail.com\> `C0D6248439F1D5604AAFFB4021D900FFDB233756`
-   **Juan José Arboleda** <soyjuanarbol@gmail.com\> `DD792F5973C6DE52C432CBDAC77ABFA00DDBF2B7`
-   **Marco Ippolito** <marcoippolito54@gmail.com\> `CC68F5A3106FF448322E48ED27F5E38D5B0A215F`
-   **Michaël Zasso** <targos@protonmail.com\> `8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600`
-   **Rafael Gonzaga** <rafael.nunu@hotmail.com\> `890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4`
-   **Richard Lau** <rlau@redhat.com\> `C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C`
-   **Ruy Adorno** <ruyadorno@hotmail.com\> `108F52B48DB57BB0CC439B2997B01419BD92F80A`
-   **Ulises Gascón** <ulisesgascongonzalez@gmail.com\> `A363A499291CBBC940DD62E41F10027AF002F8B0`

To import the full set of trusted release keys (including subkeys possibly used to sign releases):

gpg --keyserver hkps://keys.openpgp.org --recv-keys C0D6248439F1D5604AAFFB4021D900FFDB233756 # Antoine du Hamel
gpg --keyserver hkps://keys.openpgp.org --recv-keys DD792F5973C6DE52C432CBDAC77ABFA00DDBF2B7 # Juan José Arboleda
gpg --keyserver hkps://keys.openpgp.org --recv-keys CC68F5A3106FF448322E48ED27F5E38D5B0A215F # Marco Ippolito
gpg --keyserver hkps://keys.openpgp.org --recv-keys 8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 # Michaël Zasso
gpg --keyserver hkps://keys.openpgp.org --recv-keys 890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4 # Rafael Gonzaga
gpg --keyserver hkps://keys.openpgp.org --recv-keys C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C # Richard Lau
gpg --keyserver hkps://keys.openpgp.org --recv-keys 108F52B48DB57BB0CC439B2997B01419BD92F80A # Ruy Adorno
gpg --keyserver hkps://keys.openpgp.org --recv-keys A363A499291CBBC940DD62E41F10027AF002F8B0 # Ulises Gascón

See Verifying binaries for how to use these keys to verify a downloaded file.

Other keys used to sign some previous releases

-   **Beth Griggs** <bethanyngriggs@gmail.com\> `4ED778F539E3634C779C87C6D7062848A1AB005C`
-   **Bryan English** <bryan@bryanenglish.com\> `141F07595B7B3FFE74309A937405533BE57C7D57`
-   **Chris Dickinson** <christopher.s.dickinson@gmail.com\> `9554F04D7259F04124DE6B476D5A82AC7E37093B`
-   **Colin Ihrig** <cjihrig@gmail.com\> `94AE36675C464D64BAFA68DD7434390BDBE9B9C5`
-   **Danielle Adams** <adamzdanielle@gmail.com\> `1C050899334244A8AF75E53792EF661D867B9DFA` `74F12602B6F1C4E913FAA37AD3A89613643B6201`
-   **Evan Lucas** <evanlucas@me.com\> `B9AE9905FFD7803F25714661B63B535A4C206CA9`
-   **Gibson Fahnestock** <gibfahn@gmail.com\> `77984A986EBC2AA786BC0F66B01FBB92821C587A`
-   **Isaac Z. Schlueter** <i@izs.me\> `93C7E9E91B49E432C2F75674B0A78B0A6C481CF6`
-   **Italo A. Casas** <me@italoacasas.com\> `56730D5401028683275BD23C23EFEFE93C4CFFFE`
-   **James M Snell** <jasnell@keybase.io\> `71DCFD284A79C3B38668286BC97EC7A07EDE3FC1`
-   **Jeremiah Senkpiel** <fishrock@keybase.io\> `FD3A5288F042B6850C66B31F09FE44734EB7990E`
-   **Juan José Arboleda** <soyjuanarbol@gmail.com\> `61FC681DFB92A079F1685E77973F295594EC4689`
-   **Julien Gilli** <jgilli@fastmail.fm\> `114F43EE0176B71C7BC219DD50A3051F888C628D`
-   **Myles Borins** <myles.borins@gmail.com\> `C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8`
-   **Rod Vagg** <rod@vagg.org\> `DD8F2338BAE7501E3DD5AC78C273792F7D83545D`
-   **Ruben Bridgewater** <ruben@bridgewater.de\> `A48C2BEE680E841632CD4E44F07496B3EB3C1762`
-   **Shelley Vohr** <shelley.vohr@gmail.com\> `B9E2F5981AA6E0CD28160D9FF13993A75599653C`
-   **Timothy J Fontaine** <tjfontaine@gmail.com\> `7937DFD2AB06298B2293C3187D33FF9D0246406D`

### Security release stewards

When possible, the commitment to take slots in the security release steward rotation is made by companies in order to ensure individuals who act as security stewards have the support and recognition from their employer to be able to prioritize security releases. Security release stewards manage security releases on a rotation basis as outlined in the security release process.

-   Datadog
    -   bengl - **Bryan English** <bryan@bryanenglish.com\> (he/him)
-   NodeSource
    -   juanarbol - **Juan José Arboleda** <soyjuanarbol@gmail.com\> (he/him)
    -   RafaelGSS - **Rafael Gonzaga** <rafael.nunu@hotmail.com\> (he/him)
-   Platformatic
    -   mcollina - **Matteo Collina** <matteo.collina@gmail.com\> (he/him)
-   Red Hat / IBM
    -   joesepi - **Joe Sepi** <joesepi@ibm.com\> (he/him)
    -   mhdawson - **Michael Dawson** <midawson@redhat.com\> (he/him)

License
-------

Node.js is available under the MIT License. Node.js also includes external libraries that are available under a variety of licenses. See LICENSE for the full license text.
