---
project: Haraka
stars: 5108
description: A fast, highly extensible, and event driven SMTP server
url: https://github.com/haraka/Haraka
---

Haraka - a Node.js Mail Server
------------------------------

Haraka is a highly scalable node.js email server with a modular plugin architecture. Haraka can serve thousands of concurrent connections and deliver thousands of messages per second. Haraka and plugins are written in asynchronous JS and are very fast.

Haraka has very good spam protection (see plugins) and works well as a filtering MTA. It also works well as a MSA running on port 587 with auth and dkim\_sign plugins enabled.

Haraka makes no attempt to be a mail store (like Exchange or Postfix/Exim/Qmail), a LDA, nor an IMAP server (like Dovecot or Courier). Haraka is typically used **with** such systems.

Haraka has a scalable outbound mail delivery engine built in. Mail marked as `relaying` (such as via an `auth` plugin) is automatically queued for outbound delivery.

### Getting Help

-   Join the mailing list (implemented as a Haraka plugin)
-   GitHub Issues

### Screencast

Getting started with Haraka

### Why Use Haraka?

Haraka's plugin architecture provides an easily extensible MTA that complements traditional MTAs that excel at managing mail stores but do not have sufficient filtering.

The plugin system makes it easy to code new features. A typical example is providing qmail-like extended addresses to an Exchange system, whereby you could receive mail as `user-anyword@domain.com`, and yet still have it correctly routed to `user@domain.com`. This is a few lines of code in Haraka.

Plugins are provided for running mail through SpamAssassin, validating HELO names, checking DNS Blocklists, and many others.

### Installing Haraka

Haraka requires node.js to run. Install Haraka with npm:

# If the second command gives "nobody" errors, uncomment & run the next command
# npm -g config set user root
npm install -g Haraka

After installation, use the `haraka` binary to set up the service.

### Running Haraka

First, create the service:

haraka -i /path/to/haraka\_test

That creates the directory `haraka_test` with `config` and `plugin` directories within. It also sets the host name used by Haraka to the output of `hostname`.

If `hostname` is not correct, edit `config/host_list`. For example, to receive mail addressed to `user@domain.com`, add `domain.com` to the `config/host_list` file.

Finally, start Haraka using root permissions:

haraka -c /path/to/haraka\_test

And it will run.

### Configure Haraka

To choose which plugins run, edit `config/plugins`. Plugins control the overall behaviour of Haraka. By default, only messages to domains listed in `config/host_list` will be accepted and then delivered via the `smtp-forward` plugin. Configure the destination in `config/smtp_forward.ini`.

### Read the Fine Manual

haraka -h plugins/$name

The docs detail how each plugin is configured. After editing `config/plugins`, restart Haraka and enjoy!

### Running from git

If you are unable to use npm to install Haraka, you can run from git by following these steps:

First clone the repository:

```
$ git clone https://github.com/haraka/Haraka.git
$ cd Haraka
```

Install Haraka's node.js dependencies locally:

```
$ npm install
```

Edit `config/plugins` and `config/smtp.ini` to specify the plugins and config you want.

Finally run Haraka:

```
$ node haraka.js
```

### License and Author

Haraka is MIT licensed - see the LICENSE file for details.

Haraka is a project started by Matt Sergeant, a 10 year veteran of the email and anti-spam world. Previous projects have been the project leader for SpamAssassin and a hacker on Qpsmtpd.
