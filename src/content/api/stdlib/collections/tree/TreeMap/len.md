---
slug: "stdlib/collections/tree/TreeMap/len"
package: "stdlib"
title: "TreeMap::len"
description: "Returns the number of entries."
module: "collections::tree"
kind: "method"
name: "len"
parent: "TreeMap"
signature: "pub fn len() -> int"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/tree.hy#L85"
order: 2
---

Returns the number of entries.

Called on a `TreeMap` value as `value.len(…)`.

## Returns

`int`

## See also

- [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap): An ordered map from keys of type `K` to values of type `V`.
- [`TreeMap::new`](/packages/stdlib/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/packages/stdlib/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as `TreeMap::new`.
- [`TreeMap::is_empty`](/packages/stdlib/reference/collections/tree/TreeMap/is_empty): Returns `true` when the map has no entries.
- [`TreeMap::clear`](/packages/stdlib/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/packages/stdlib/reference/collections/tree/TreeMap/insert): Stores `v` under `k`, replacing any value already there.
- [`TreeMap::contains`](/packages/stdlib/reference/collections/tree/TreeMap/contains): Returns `true` when the map has an entry for `k`.
