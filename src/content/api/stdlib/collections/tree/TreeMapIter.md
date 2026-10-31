---
slug: "stdlib/collections/tree/TreeMapIter"
package: "stdlib"
title: "TreeMapIter"
description: "An in-order iterator over a TreeMap, from TreeMap::iter."
module: "collections::tree"
kind: "class"
name: "TreeMapIter"
signature: "class TreeMapIter<K, V>"
import: "use collections::tree::{TreeMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/tree.hy#L54"
order: 2
---

An in-order iterator over a [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap), from [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter).

## Methods

| Name | Description |
|------|-------------|
| [`next`](/packages/stdlib/reference/collections/tree/TreeMapIter/next) | Returns the entry with the next larger key, or `None` after the last one. |

## Trait implementations

- [`Iterator`](/docs/reference/prelude/Iterator) for `TreeMapIter<K, V>`

## See also

- [`collections::tree::TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap)
- [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter)
- [`Entry`](/packages/stdlib/reference/collections/tree/Entry): One key-value pair, as `TreeMap` iteration yields it.
