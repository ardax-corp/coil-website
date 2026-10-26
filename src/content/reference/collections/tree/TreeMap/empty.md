---
slug: "collections/tree/TreeMap/empty"
title: "TreeMap::empty"
description: "Creates an empty map; the same as TreeMap::new."
module: "collections::tree"
kind: "static method"
name: "empty"
parent: "TreeMap"
signature: "pub static fn empty() -> TreeMap<K, V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/tree.hy#L80"
order: 1
---

Creates an empty map; the same as [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new).

## Returns

`TreeMap<K, V>`

## See also

- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new)
- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::len`](/docs/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/docs/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
