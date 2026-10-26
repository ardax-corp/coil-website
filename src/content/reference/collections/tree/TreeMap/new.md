---
slug: "collections/tree/TreeMap/new"
title: "TreeMap::new"
description: "Creates an empty map."
module: "collections::tree"
kind: "static method"
name: "new"
parent: "TreeMap"
signature: "pub static fn new() -> TreeMap<K, V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/tree.hy#L71"
order: 0
---

Creates an empty map.

## Returns

`TreeMap<K, V>`

## Examples

```coil
use collections::tree::{TreeMap};
use tests::assert;
let m: TreeMap<string, int> = TreeMap::new();
assert!(m.is_empty());
```

## See also

- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/docs/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/docs/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
