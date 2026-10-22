---
slug: "collections/tree/TreeMap/iter"
title: "TreeMap::iter"
description: "Returns an iterator over the entries in ascending key order."
module: "collections::tree"
kind: "method"
name: "iter"
parent: "TreeMap"
signature: "pub fn iter() -> TreeMapIter<K, V>"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/tree.hy#L109"
order: 5
---

Returns an iterator over the entries in ascending key order.

`for e in m` does the same; each item is an [`Entry`](/docs/reference/collections/tree/Entry) with `key` and `value`.

Called on a `TreeMap` value as `value.iter(…)`.

## Returns

`TreeMapIter<K, V>`

## See also

- [`collections::tree::Entry`](/docs/reference/collections/tree/Entry)
- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type K to values of type V.
- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as TreeMap::new.
- [`TreeMap::size`](/docs/reference/collections/tree/TreeMap/size): Returns the number of entries.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns true when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores v under k, replacing any value already there.
