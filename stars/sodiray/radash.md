---
project: radash
stars: 4436
description: Functional utility library - modern, simple, typed, powerful
url: https://github.com/sodiray/radash
---

Radash
======

🔊 `/raw-dash/`

### Functional utility library - modern, simple, typed, powerful

Full Documentation

Install
-------

```
yarn add radash
```

Usage
-----

A very brief kitchen sink. See the full documentation here.

import \* as \_ from 'radash'

const gods \= \[{
  name: 'Ra',
  power: 'sun',
  rank: 100,
  culture: 'egypt'
}, {
  name: 'Loki',
  power: 'tricks',
  rank: 72,
  culture: 'norse'
}, {
  name: 'Zeus',
  power: 'lightning',
  rank: 96,
  culture: 'greek'
}\]

\_.max(gods, g \=> g.rank) // => ra
\_.sum(gods, g \=> g.rank) // => 268
\_.fork(gods, g \=> g.culture \=== 'norse') // => \[\[loki\], \[ra, zeus\]\]
\_.sort(gods, g \=> g.rank) // => \[ra, zeus, loki\]
\_.boil(gods, (a, b) \=> a.rank \> b.rank ? a : b) // => ra

\_.objectify(
  gods, 
  g \=> g.name.toLowerCase(), 
  g \=> \_.pick(g, \['power', 'rank', 'culture'\])
) // => { ra, zeus, loki }

const godName \= \_.get(gods, g \=> g\[0\].name)

const \[err, god\] \= await \_.try(api.gods.findByName)(godName)

const allGods \= await \_.map(gods, async ({ name }) \=> {
  return api.gods.findByName(name)
})

Contributing
------------

Contributions are welcome and appreciated! Check out the contributing guide before you dive in.
