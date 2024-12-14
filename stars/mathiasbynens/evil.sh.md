---
project: evil.sh
stars: 2161
description: :speak_no_evil: Subtle and not-so-subtle shell tweaks that will slowly drive people insane.
url: https://github.com/mathiasbynens/evil.sh
---

`evil.sh` (aka. `devili.sh`)
============================

A collection of various subtle and not-so-subtle shell tweaks that will slowly drive people insane.

Feel like trolling a colleague? Just add `source ~/evil.sh` to their `.bash_profile` and watch the chaos ensue. Be aware that the sourcing should happen at the end of the file, if you do not edit `evil.sh` before doing so, as `evil.sh` disables `alias` and `unalias`.

Contributions
-------------

Evil suggestions and pull requests are welcome. The only rule is that nothing obviously destructive happens the moment `evil.sh` is sourced. Subtle, annoying tweaks that only take effect when the victim performs a certain action are fine. On the other hand, a patch that adds `rm -rfv /` to `evil.sh` will be rejected.

See also
--------

-   `evil.js`
-   `evil.css`

Credits
-------

Mathias Bynens

Jan Moesen

License
-------

Public domain.

Obligatory disclaimer
---------------------

`evil.sh` is purely for entertainment purposes. I’m not responsible for anything you do with `evil.sh`.
