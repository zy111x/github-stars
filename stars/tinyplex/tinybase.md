---
project: tinybase
stars: 3922
description: The reactive data store for local‑first apps.
url: https://github.com/tinyplex/tinybase
---

The _reactive_ data store for local-first apps.
-----------------------------------------------

_NEW!_ v5.4 release

"The One With Durable Objects!"

Get started

Try the demos

Read the docs

* * *

It's _Reactive_
---------------

TinyBase lets you listen to changes made to any part of your data. This means your app will be fast, since you only spend rendering cycles on things that change. The optional bindings to React and pre-built components let you easily build fully reactive UIs on top of TinyBase. You even get a built-in undo stack, and developer tools!

It's _Database-Like_
--------------------

Consumer app? Enterprise app? Or even a game? Model key-value data and tabular data with optional typed schematization, whatever its data structures. There are built-in indexing, metric aggregation, and tabular relationships APIs - and a powerful query engine to select, join, filter, and group data (reactively!) without SQL.

It _Synchronizes_
-----------------

TinyBase has native CRDT support, meaning that you can deterministically synchronize and merge data across multiple sources, clients, and servers. And although TinyBase is an in-memory data store, you can easily persist your data to file, browser storage, IndexedDB, SQLite or PostgreSQL databases, and more.

It's Built For A _Local-First_ World
------------------------------------

TinyBase works anywhere that JavaScript does, but it's especially great for local-first apps: where data is stored locally on the user's device and that can be run offline. It's tiny by name, tiny by nature: just 5.3kB - 11.4kB and with no dependencies - yet 100% tested, fully documented, and of course, open source!

* * *

TinyBase works great on its own, but also plays well with friends.
------------------------------------------------------------------

React

IndexedDB

PostgreSQL

PGlite

SQLite

Expo SQLite

Cloudflare

ElectricSQL

Turso

PowerSync

PartyKit

YJS

CR-SQLite

Automerge

(Baffled by all these logos? Check out our architectural options guide to make sense of it all!)

* * *

  

* * *

Start with a simple key-value store.
------------------------------------

Creating a `Store` requires just a simple call to the `createStore` function. Once you have one, you can easily set `Values` in it by unique `Id`. And of course you can easily get them back out again.

Read more about using keyed value data in The Basics guide.

import {createStore} from 'tinybase';

const store \= createStore()
  .setValues({employees: 3})
  .setValue('open', true);

console.log(store.getValues());
// -> {employees: 3, open: true}

Level up to use tabular data.
-----------------------------

For other types of data applications, a tabular data structure is more useful. TinyBase lets you set and get nested `Table`, `Row`, or `Cell` data, by unique `Id` - and in the same `Store` as the keyed values!

Read more about setting and changing data in The Basics guide.

store
  .setTable('pets', {fido: {species: 'dog'}})
  .setCell('pets', 'fido', 'color', 'brown');

console.log(store.getRow('pets', 'fido'));
// -> {species: 'dog', color: 'brown'}

Register granular listeners.
----------------------------

The magic starts to happen when you register listeners on a `Value`, `Table`, `Row`, or `Cell`. They get called when any part of that object changes. You can also use wildcards - useful when you don't know the `Id` of the objects that might change.

Read more about listeners in the Listening To Stores guide.

const listenerId \= store.addTableListener('pets', () \=>
  console.log('changed'),
);

store.setCell('pets', 'fido', 'sold', false);
// -> 'changed'

store.delListener(listenerId);

Call hooks to bind to data.
---------------------------

If you're using React in your application, the optional `ui-react` module provides hooks to bind to the data in a `Store`.

More magic! The `useCell` hook in this example fetches the dog's color. But it also registers a listener on that cell that will fire and re-render the component whenever the value changes.

Basically you simply describe what data you want in your user interface and TinyBase will take care of the whole lifecycle of updating it for you.

Read more about the using hooks in the Using React Hooks guide.

import React from 'react';
import {createRoot} from 'react-dom/client';
import {useCell} from 'tinybase/ui-react';

const App1 \= () \=> {
  const color \= useCell('pets', 'fido', 'color', store);
  return <\>Color: {color}</\>;
};

const app \= document.createElement('div');
const root \= createRoot(app);
root.render(<App1 />);
console.log(app.innerHTML);
// -> 'Color: brown'

store.setCell('pets', 'fido', 'color', 'walnut');
console.log(app.innerHTML);
// -> 'Color: walnut'

root.unmount();

Pre-built reactive components.
------------------------------

The `ui-react` module provides bare React components that let you build up a fully reactive user interface based on a `Store`.

For web applications in particular, the new `ui-react-dom` module provides pre-built components for tabular display of your data, with lots of customization and interactivity options.

Try them out in the UI Components demos, and read more about the underlying `ui-react` module in the Building UIs guides.

An inspector for your data.
---------------------------

If you are building a web application, the new `Inspector` component lets you overlay a view of the data in your `Store`, `Indexes`, `Relationships`, and so on. You can even edit the data in place and see it update in your app immediately.

Read more about this powerful new tool in the Inspecting Data guide.

Apply schemas to tables & values.
---------------------------------

By default, a `Store` can contain any arbitrary `Value`, and a `Row` can contain any arbitrary `Cell`. But you can add a `ValuesSchema` or a `TablesSchema` to a `Store` to ensure that the values are always what you expect: constraining their types, and providing defaults.

In this example, we set a new `Row` without the `sold` `Cell` in it. The schema ensures it's present with default of `false`.

Read more about schemas in the Schemas guide.

store.setTablesSchema({
  pets: {
    species: {type: 'string'},
    color: {type: 'string'},
    sold: {type: 'boolean', default: false},
  },
});

store.setRow('pets', 'polly', {species: 'parrot'});
console.log(store.getRow('pets', 'polly'));
// -> {species: 'parrot', sold: false}

store.delTablesSchema();

Synchronize between devices.
----------------------------

The `MergeableStore` type acts as a native CRDT, letting you merge data and synchronize it between clients and systems - or even a server. The synchronization protocol can run over WebSockets, the browser BroadcastChannel, or your own custom synchronization medium.

Read more about these techniques in the Synchronization guides.

import {WebSocketServer, WebSocket} from 'ws';
import {createMergeableStore} from 'tinybase';
import {createWsServer} from 'tinybase/synchronizers/synchronizer-ws-server';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';

// On a server machine:
const server \= createWsServer(
  new WebSocketServer({port: 8040}),
);

// On a client machine:
const store1 \= createMergeableStore();
const synchronizer1 \= await createWsSynchronizer(
  store1,
  new WebSocket('ws://localhost:8040'),
);
await synchronizer1.startSync();

// ...

synchronizer1.destroy();
server.destroy();

Persist to storage, databases, & more.
--------------------------------------

You can easily persist a `Store` between browser page reloads or sessions. You can also synchronize it with a web endpoint, or (if you're using TinyBase in an appropriate environment), load and save it to a file. You can bind TinyBase to various flavors of database, or to Yjs and Automerge CRDT documents.

Read more about persisters in the Persistence guides.

import {createSessionPersister} from 'tinybase/persisters/persister-browser';

const persister \= createSessionPersister(store, 'demo');
await persister.save();

console.log(sessionStorage.getItem('demo'));
// ->
\`
\[
  {
    "pets":{
      "fido":{"species":"dog","color":"walnut","sold":false},
      "polly":{"species":"parrot","sold":false}
    }
  },
  {"employees":3,"open":true}
\]
\`;

persister.destroy();
sessionStorage.clear();

Build complex queries with TinyQL.
----------------------------------

The `Queries` object lets you query data across tables, with filtering and aggregation - using a SQL-adjacent syntax called TinyQL.

Accessors and listeners let you sort and paginate the results efficiently, making building rich tabular interfaces easier than ever.

In this example, we have two tables: of pets and their owners. They are joined together by the pet's ownerId `Cell`. We select the pet's species, and the owner's state, and then aggregate the prices for the combinations.

We access the results by descending price, essentially answering the question: "which is the highest-priced species, and in which state?"

Needless to say, the results are reactive too! You can add listeners to queries just as easily as you do to raw tables.

Read more about `Queries` in the v2.0 Release Notes, the Using Queries guide, and the Car Analysis demo and Movie Database demo.

import {createQueries} from 'tinybase';

store
  .setTable('pets', {
    fido: {species: 'dog', ownerId: '1', price: 5},
    rex: {species: 'dog', ownerId: '2', price: 4},
    felix: {species: 'cat', ownerId: '2', price: 3},
    cujo: {species: 'dog', ownerId: '3', price: 4},
  })
  .setTable('owners', {
    1: {name: 'Alice', state: 'CA'},
    2: {name: 'Bob', state: 'CA'},
    3: {name: 'Carol', state: 'WA'},
  });

const queries \= createQueries(store);
queries.setQueryDefinition(
  'prices',
  'pets',
  ({select, join, group}) \=> {
    select('species');
    select('owners', 'state');
    select('price');
    join('owners', 'ownerId');
    group('price', 'avg').as('avgPrice');
  },
);

queries
  .getResultSortedRowIds('prices', 'avgPrice', true)
  .forEach((rowId) \=> {
    console.log(queries.getResultRow('prices', rowId));
  });
// -> {species: 'dog', state: 'CA', avgPrice: 4.5}
// -> {species: 'dog', state: 'WA', avgPrice: 4}
// -> {species: 'cat', state: 'CA', avgPrice: 3}

queries.destroy();

Define metrics and aggregations.
--------------------------------

A `Metrics` object makes it easy to keep a running aggregation of `Cell` values in each `Row` of a `Table`. This is useful for counting rows, but also supports averages, ranges of values, or arbitrary aggregations.

In this example, we create a new table of the pet species, and keep a track of which is most expensive. When we add horses to our pet store, the listener detects that the highest price has changed.

Read more about `Metrics` in the Using Metrics guide.

import {createMetrics} from 'tinybase';

store.setTable('species', {
  dog: {price: 5},
  cat: {price: 4},
  worm: {price: 1},
});

const metrics \= createMetrics(store);
metrics.setMetricDefinition(
  'highestPrice', // metricId
  'species', //      tableId to aggregate
  'max', //          aggregation
  'price', //        cellId to aggregate
);

console.log(metrics.getMetric('highestPrice'));
// -> 5

metrics.addMetricListener('highestPrice', () \=>
  console.log(metrics.getMetric('highestPrice')),
);
store.setCell('species', 'horse', 'price', 20);
// -> 20

metrics.destroy();

Create indexes for fast lookups.
--------------------------------

An `Indexes` object makes it easy to look up all the `Row` objects that have a certain value in a `Cell`.

In this example, we create an index on the `species` `Cell` values. We can then get the the list of distinct `Cell` value present for that index (known as 'slices'), and the set of `Row` objects that match each value.

`Indexes` objects are reactive too. So you can set listeners on them just as you do for the data in the underlying `Store`.

Read more about `Indexes` in the Using Indexes guide.

import {createIndexes} from 'tinybase';

const indexes \= createIndexes(store);
indexes.setIndexDefinition(
  'bySpecies', // indexId
  'pets', //      tableId to index
  'species', //   cellId to index
);

console.log(indexes.getSliceIds('bySpecies'));
// -> \['dog', 'cat'\]
console.log(indexes.getSliceRowIds('bySpecies', 'dog'));
// -> \['fido', 'rex', 'cujo'\]

indexes.addSliceIdsListener('bySpecies', () \=>
  console.log(indexes.getSliceIds('bySpecies')),
);
store.setRow('pets', 'lowly', {species: 'worm'});
// -> \['dog', 'cat', 'worm'\]

indexes.destroy();

Model table relationships.
--------------------------

A `Relationships` object lets you associate a `Row` in a local `Table` with the `Id` of a `Row` in a remote `Table`. You can also reference a table to itself to create linked lists.

In this example, the `species` `Cell` of the `pets` `Table` is used to create a relationship to the `species` `Table`, so that we can access the price of a given pet.

Like everything else, you can set listeners on `Relationships` too.

Read more about `Relationships` in the Using Relationships guide.

import {createRelationships} from 'tinybase';

const relationships \= createRelationships(store);
relationships.setRelationshipDefinition(
  'petSpecies', // relationshipId
  'pets', //       local tableId to link from
  'species', //    remote tableId to link to
  'species', //    cellId containing remote key
);

console.log(
  store.getCell(
    relationships.getRemoteTableId('petSpecies'),
    relationships.getRemoteRowId('petSpecies', 'fido'),
    'price',
  ),
);
// -> 5

relationships.destroy();

Set checkpoints for an undo stack.
----------------------------------

A `Checkpoints` object lets you set checkpoints on a `Store`. Move forward and backward through them to create undo and redo functions.

In this example, we set a checkpoint, then sell one of the pets. Later, the pet is brought back to the shop, and we go back to that checkpoint to revert the store to its previous state.

Read more about `Checkpoints` in the Using Checkpoints guide.

import {createCheckpoints} from 'tinybase';

const checkpoints \= createCheckpoints(store);

store.setCell('pets', 'felix', 'sold', false);
checkpoints.addCheckpoint('pre-sale');

store.setCell('pets', 'felix', 'sold', true);
console.log(store.getCell('pets', 'felix', 'sold'));
// -> true

checkpoints.goBackward();
console.log(store.getCell('pets', 'felix', 'sold'));
// -> false

Type definitions & ORM-like APIs
--------------------------------

TinyBase has comprehensive type definitions, and even offers definitions that infer API types from the data schemas you apply.

Furthermore, you can easily create TypeScript `.d.ts` definitions that model your data and encourage type-safety when reading and writing data - as well as `.ts` implementations that provide ORM-like methods for your named tables.

Read more about type support in the TinyBase And TypeScript guide.

const tools \= createTools(store);
const \[dTs, ts\] \= tools.getStoreApi('shop');

// -- shop.d.ts --
/\* Represents the 'pets' Table. \*/
export type PetsTable \= {\[rowId: Id\]: PetsRow};
/\* Represents a Row when getting the content of the 'pets' Table. \*/
export type PetsRow \= {species: string /\* ... \*/};
//...

// -- shop.ts --
export const createShop: typeof createShopDecl \= () \=> {
  //...
};

Did we say tiny?
----------------

If you use the basic `store` module alone, you'll only add a gzipped _5.3kB_ to your app. Incrementally add the other modules as you need more functionality, or get it all for _11.4kB_.

The optional `ui-react` module is just _4.9kB_, the ui-react-dom components are another _2.6kB_, and everything is super fast. Life is easy when you have zero dependencies!

Read more about how TinyBase is structured and packaged in the Architecture guide.

 

Minified .js.gz

Source .js

tinybase/store (minimal)

5.3kB

52.5kB

tinybase (complete)

11.4kB

119.4kB

ui-react

4.9kB

53.6kB

ui-react-dom

2.6kB

20.4kB

Well tested and documented.
---------------------------

TinyBase has _100.0%_ test coverage, including the code throughout the documentation - even on this page! The guides, demos, and API examples are designed to make it as easy as possible for you to get your TinyBase-powered app up and running.

Read more about how TinyBase is tested in the Unit Testing guide.

 

Total

Tested

Coverage

Lines

2,290

2,290

100.0%

Statements

2,474

2,474

100.0%

Functions

988

988

100.0%

Branches

856

856

100.0%

Tests

7,464

Assertions

33,201

* * *

Proud to be sponsored by:
-------------------------

Excited to be used by:
----------------------

* * *

Get started

Try the demos

Read the docs

* * *

About
-----

Modern apps deserve better. Why trade reactive user experiences to be able to use relational data? Or sacrifice features for bundle size? And why does the cloud do all the work anyway?

Building TinyBase was originally an interesting exercise for me in API design, minification, and documentation. But now it has taken on a life of its own, and has grown beyond my wildest expectations.

It could not have been built without these great projects and friends, and I hope you enjoy using it as much as I do building it!

The story
---------
