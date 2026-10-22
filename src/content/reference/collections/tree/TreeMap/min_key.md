---
slug: "collections/tree/TreeMap/min_key"
title: "TreeMap::min_key"
description: "Returns the smallest key, or fallback when the map is empty."
module: "collections::tree"
kind: "method"
name: "min_key"
parent: "TreeMap"
signature: "pub fn min_key(K fallback) -> K"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/tree.hy#L344"
order: 10
---

Returns the smallest key, or `fallback` when the map is empty.

Called on a `TreeMap` value as `value.min_key(…)`.

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
assert!(m.min_key(-1) == -1);
m.insert(4, true);
m.insert(2, true);
assert!(m.min_key(-1) == 2);
```

## See also

- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type K to values of type V.
- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as TreeMap::new.
- [`TreeMap::size`](/docs/reference/collections/tree/TreeMap/size): Returns the number of entries.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns true when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores v under k, replacing any value already there.
