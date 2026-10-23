---
slug: "collections/tree/TreeMap/size"
title: "TreeMap::size"
description: "Returns the number of entries."
module: "collections::tree"
kind: "method"
name: "size"
parent: "TreeMap"
signature: "pub fn size() -> int"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/tree.hy#L85"
order: 2
---

Returns the number of entries.

Called on a `TreeMap` value as `value.size(…)`.

## Returns

`int`

## See also

- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/docs/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
