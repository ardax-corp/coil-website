---
slug: "collections/tree/TreeMap/contains"
title: "TreeMap::contains"
description: "Returns true when the map has an entry for k."
module: "collections::tree"
kind: "method"
name: "contains"
parent: "TreeMap"
signature: "pub fn contains(K k) -> bool"
import: "use collections::tree::{TreeMap};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/tree.hy#L182"
order: 7
---

Returns `true` when the map has an entry for `k`.

Called on a `TreeMap` value as `value.contains(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |

## Returns

`bool`

## See also

- [`TreeMap`](/docs/reference/collections/tree/TreeMap): An ordered map from keys of type K to values of type V.
- [`TreeMap::new`](/docs/reference/collections/tree/TreeMap/new): Creates an empty map.
- [`TreeMap::empty`](/docs/reference/collections/tree/TreeMap/empty): Creates an empty map; the same as TreeMap::new.
- [`TreeMap::size`](/docs/reference/collections/tree/TreeMap/size): Returns the number of entries.
- [`TreeMap::is_empty`](/docs/reference/collections/tree/TreeMap/is_empty): Returns true when the map has no entries.
- [`TreeMap::clear`](/docs/reference/collections/tree/TreeMap/clear): Removes every entry.
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter): Returns an iterator over the entries in ascending key order.
- [`TreeMap::insert`](/docs/reference/collections/tree/TreeMap/insert): Stores v under k, replacing any value already there.
