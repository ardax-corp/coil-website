---
slug: "stdlib/collections/tree/TreeMap/new"
package: "stdlib"
title: "TreeMap::new"
description: "Creates an empty map."
module: "collections::tree"
kind: "static method"
name: "new"
parent: "TreeMap"
signature: "pub static fn new() -> TreeMap<K, V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/tree.hy#L71"
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

- [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::empty`](/packages/stdlib/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/packages/stdlib/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/packages/stdlib/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/packages/stdlib/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/packages/stdlib/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/packages/stdlib/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
