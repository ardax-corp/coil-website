---
slug: "stdlib/collections/tree/TreeMap/empty"
package: "stdlib"
title: "TreeMap::empty"
description: "Creates an empty map; the same as TreeMap::new."
module: "collections::tree"
kind: "static method"
name: "empty"
parent: "TreeMap"
signature: "pub static fn empty() -> TreeMap<K, V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/tree.coil#L80"
order: 1
---

Creates an empty map; the same as [`TreeMap::new`](/packages/stdlib/reference/collections/tree/TreeMap/new).

## Returns

`TreeMap<K, V>`

## See also

- [`TreeMap::new`](/packages/stdlib/reference/collections/tree/TreeMap/new)
- [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::len`](/packages/stdlib/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/packages/stdlib/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/packages/stdlib/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/packages/stdlib/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/packages/stdlib/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
