---
project: disposable-email-domains
stars: 3191
description: a list of disposable and temporary email address domains
url: https://github.com/disposable-email-domains/disposable-email-domains
---

List of disposable email domains
================================

This repo contains a list of disposable and temporary email address domains often used to register dummy users in order to spam or abuse some services.

We cannot guarantee all of these can still be considered disposable but we do basic checking so chances are they were disposable at one point in time.

Allowlist
=========

The file allowlist.conf gathers email domains that are often identified as disposable but in fact are not.

Contributing
============

Feel free to create PR with additions or request removal of some domain (with reasons).

**Specifically, please cite in your PR where one can generate a disposable email address which uses that domain, so the maintainers can verify it.**

Please add new disposable domains directly into disposable\_email\_blocklist.conf in the same format (only second level domains on new line without @), then run maintain.sh. The shell script will help you convert uppercase to lowercase, sort, remove duplicates and remove allowlisted domains.

License
=======

You can copy, modify, distribute and use the work, even for commercial purposes, all without asking permission.

Changelog
=========

-   2/11/21 We created a github org account and transferred the repository to it.
    
-   4/18/19 @di joined as a core maintainer of this project. Thank you!
    
-   7/31/17 @deguif joined as a core maintainer of this project. Thanks!
    
-   12/6/16 - Available as PyPI module thanks to @di
    
-   7/27/16 - Converted all domains to the second level. This means that starting from this commit the implementers should take care of matching the second level domain names properly i.e. `@xxx.yyy.zzz` should match `yyy.zzz` in blocklist where `zzz` is a public suffix. More info in #46
    
-   9/2/14 - First commit 393c21f5
    

Example Usage
=============

TOC: Python, PHP, Go, Ruby on Rails, NodeJS, C#, bash, Java, Swift

### Python

with open('disposable\_email\_blocklist.conf') as blocklist:
    blocklist\_content \= {line.rstrip() for line in blocklist.readlines()}
if email.partition('@')\[2\] in blocklist\_content:
    message \= "Please enter your permanent email address."
    return (False, message)
else:
    return True

Available as PyPI module thanks to @di

\>>\> from disposable\_email\_domains import blocklist
\>>\> 'bearsarefuzzy.com' in blocklist
True

### PHP

contributed by @txt3rob, @deguif, @pjebs and @Wruczek

1.  Make sure the passed email is valid. You can check that with filter\_var
2.  Make sure you have the mbstring extension installed on your server

function isDisposableEmail($email, $blocklist\_path = null) {
    if (!$blocklist\_path) $blocklist\_path = \_\_DIR\_\_ . '/disposable\_email\_blocklist.conf';
    $disposable\_domains = file($blocklist\_path, FILE\_IGNORE\_NEW\_LINES | FILE\_SKIP\_EMPTY\_LINES);
    $domain = mb\_strtolower(explode('@', trim($email))\[1\]);
    return in\_array($domain, $disposable\_domains);
}

Alternatively check out Composer package https://github.com/elliotjreed/disposable-emails-filter-php.

### Go

contributed by @pjebs

import ("bufio"; "os"; "strings";)
var disposableList \= make(map\[string\]struct{}, 3500)
func init() {
	f, \_ := os.Open("disposable\_email\_blocklist.conf")
	for scanner := bufio.NewScanner(f); scanner.Scan(); {
		disposableList\[scanner.Text()\] \= struct{}{}
	}
	f.Close()
}

func isDisposableEmail(email string) (disposable bool) {
	segs := strings.Split(email, "@")
	\_, disposable \= disposableList\[strings.ToLower(segs\[len(segs)\-1\])\]
	return
}

Alternatively check out Go package https://github.com/rocketlaunchr/anti-disposable-email.

### Ruby on Rails

contributed by @MitsunChieh

In the resource model, usually it is `user.rb`:

before\_validation :reject\_email\_blocklist

def reject\_email\_blocklist
  blocklist \= File.read('config/disposable\_email\_blocklist.conf').split("\\n")

  if blocklist.include?(email.split('@')\[1\])
    errors\[:email\] << 'invalid email'
    return false
  else
    return true
  end
end

### Node.js

contributed by @boywithkeyboard

import { readFile } from 'node:fs/promises'

let blocklist

async function isDisposable(email) {
  if (!blocklist) {
    const content \= await readFile('disposable\_email\_blocklist.conf', { encoding: 'utf-8' })

    blocklist \= content.split('\\r\\n').slice(0, \-1)
  }

  return blocklist.includes(email.split('@')\[1\])
}

Alternatively check out NPM package https://github.com/mziyut/disposable-email-domains-js.

### C#

private static readonly Lazy<HashSet<string\>\> \_emailBlockList \= new Lazy<HashSet<string\>\>(() \=>
{
  var lines \= File.ReadLines("disposable\_email\_blocklist.conf")
    .Where(line \=> !string.IsNullOrWhiteSpace(line) && !line.TrimStart().StartsWith("//"));
  return new HashSet<string\>(lines, StringComparer.OrdinalIgnoreCase);
});

private static bool IsBlocklisted(string domain) \=> \_emailBlockList.Value.Contains(domain);

...

var addr \= new MailAddress(email);
if (IsBlocklisted(addr.Host)))
  throw new ApplicationException("Email is blocklisted.");

### Bash

```
#!/bin/bash

# This script checks if an email address is temporary.

# Read blocklist file into a bash array
mapfile -t blocklist < disposable_email_blocklist.conf

# Check if email domain is in blocklist
if [[ " ${blocklist[@]} " =~ " ${email#*@} " ]]; then
    message="Please enter your permanent email address."
    return_value=false
else
    return_value=true
fi

# Return result
echo "$return_value"
```

### Java

Code assumes that you have added `disposable_email_blocklist.conf` next to your class as classpath resource.

private static final Set<String\> DISPOSABLE\_EMAIL\_DOMAINS;

static {
    Set<String\> domains = new HashSet<>();
    try (BufferedReader in = new BufferedReader(
            new InputStreamReader(
                EMailChecker.class.getResourceAsStream("disposable\_email\_blocklist.conf"), StandardCharsets.UTF\_8))) {
        String line;
        while ((line = in.readLine()) != null) {
            line = line.trim();
            if (line.isEmpty()) {
                continue;
            }
            
            domains.add(line);
        }
    } catch (IOException ex) {
        LOG.error("Failed to load list of disposable email domains.", ex);
    }
    DISPOSABLE\_EMAIL\_DOMAINS = domains;
}

public static boolean isDisposable(String email) throws AddressException {
    InternetAddress contact = new InternetAddress(email);
    return isDisposable(contact);
}

public static boolean isDisposable(InternetAddress contact) throws AddressException {
    String address = contact.getAddress();
    int domainSep = address.indexOf('@');
    String domain = (domainSep >= 0) ? address.substring(domainSep + 1) : address;
    return DISPOSABLE\_EMAIL\_DOMAINS.contains(domain);
}

### Swift

contributed by @1998code

func checkBlockList(email: String, completion: @escaping (Bool) \-> Void) {
    let url \= URL(string: "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/master/disposable\_email\_blocklist.conf")!
    let task \= URLSession.shared.dataTask(with: url) { data, response, error in
        if let data \= data {
            if let string \= String(data: data, encoding: .utf8) {
                let lines \= string.components(separatedBy: "\\n")
                for line in lines {
                    if email.contains(line) {
                        completion(true)
                        return
                    }
                }
            }
        }
        completion(false)
    }
    task.resume()
}
