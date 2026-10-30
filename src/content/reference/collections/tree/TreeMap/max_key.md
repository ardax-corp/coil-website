---
slug: "collections/tree/TreeMap/max_key"
title: "TreeMap::max_key"
description: "Returns the largest key, or fallback when the map is empty."
module: "collections::tree"
kind: "method"
name: "max_key"
parent: "TreeMap"
signature: "pub fn max_key(K fallback) -> K"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/collections/tree.hy#L391"
order: 12
---

Returns the largest key, or `fallback` when the map is empty.

Called on a `TreeMap` value as `value.max_key(…)`.

## Parameters

| Name | Type |
|------|------|
| `fallback` | `K` |

## Returns

`K`

## Examples

```coil
use collections::tree::{TreeMap};
use tests::assert;
let m: TreeMap<int, bool> = TreeMap::new();
m.insert(4, true);
m.insert(9, true);
assert!(m.max_key(-1) == 9);
```

## See also

- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/docs/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
