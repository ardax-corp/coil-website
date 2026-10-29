---
slug: "collections/tree/TreeMap/is_empty"
title: "TreeMap::is_empty"
description: "Returns true when the map has no entries."
module: "collections::tree"
kind: "method"
name: "is_empty"
parent: "TreeMap"
signature: "pub fn is_empty() -> bool"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/tree.hy#L90"
order: 3
---

Returns `true` when the map has no entries.

Called on a `TreeMap` value as `value.is_empty(…)`.

## Returns

`bool`

## See also

- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::len`](/docs/reference/collections/tree/TreeMap/len): Returns the number of entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/docs/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
