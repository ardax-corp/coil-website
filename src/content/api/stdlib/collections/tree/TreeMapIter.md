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
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/tree.coil#L54"
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
- [`Pair`](/packages/stdlib/reference/collections/tree/Pair): One key-value pair, as `TreeMap` iteration yields it.
