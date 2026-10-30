---
slug: "stdlib/collections/tree/TreeMap/iter"
package: "stdlib"
title: "TreeMap::iter"
description: "Returns an iterator over the entries in ascending key order."
module: "collections::tree"
kind: "method"
name: "iter"
parent: "TreeMap"
signature: "pub fn iter() -> TreeMapIter<K, V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/tree.hy#L109"
order: 5
---

Returns an iterator over the entries in ascending key order.

`for e in m` does the same; each item is an [`Entry`](/packages/stdlib/reference/collections/tree/Entry) with `key` and `value`.

Called on a `TreeMap` value as `value.iter(…)`.

## Returns

`TreeMapIter<K, V>`

## See also

- [`collections::tree::Entry`](/packages/stdlib/reference/collections/tree/Entry)
- [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/packages/stdlib/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/packages/stdlib/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/packages/stdlib/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::is_empty`](/packages/stdlib/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/packages/stdlib/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::insert`](/packages/stdlib/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
