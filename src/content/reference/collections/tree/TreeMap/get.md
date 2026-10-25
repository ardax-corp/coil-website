---
slug: "collections/tree/TreeMap/get"
title: "TreeMap::get"
description: "Returns the value stored under k, or None when there is none."
module: "collections::tree"
kind: "method"
name: "get"
parent: "TreeMap"
signature: "pub fn get(K k) -> Option<V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/tree.hy#L236"
order: 9
---

Returns the value stored under `k`, or `None` when there is none.

Called on a `TreeMap` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |

## Returns

`Option<V>`

## Examples

```coil
use collections::tree::{TreeMap};
use tests::assert;
let m: TreeMap<string, int> = TreeMap::new();
m.insert("a", 1);
assert!((m.get("a") ?? 0) == 1);
assert!(m.get("b").is_none());
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
