---
slug: "collections/tree/TreeMap/get"
title: "TreeMap::get"
description: "Returns the value stored under k, or fallback when there is none."
module: "collections::tree"
kind: "method"
name: "get"
parent: "TreeMap"
signature: "pub fn get(K k, V fallback) -> V"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/tree.hy#L209"
order: 8
---

Returns the value stored under `k`, or `fallback` when there is none.

Called on a `TreeMap` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `fallback` | `V` |

## Returns

`V`

## Examples

```coil
use collections::tree::{TreeMap};
use tests::assert;
let m: TreeMap<int, string> = TreeMap::new();
m.insert(1, "one");
assert!(m.get(1, "?") == "one");
assert!(m.get(2, "?") == "?");
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
