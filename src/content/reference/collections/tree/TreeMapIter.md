---
slug: "collections/tree/TreeMapIter"
title: "TreeMapIter"
description: "An in-order iterator over a TreeMap, from TreeMap::iter."
module: "collections::tree"
kind: "class"
name: "TreeMapIter"
signature: "class TreeMapIter<K, V>"
import: "use collections::tree::{TreeMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/tree.hy#L54"
order: 2
---

An in-order iterator over a [`TreeMap`](/docs/reference/collections/tree/TreeMap), from [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter).

## Methods

| Name | Description |
|------|-------------|
| [`next`](/docs/reference/collections/tree/TreeMapIter/next) | Returns the entry with the next larger key, or `None` after the last one. |

## Trait implementations

- [`Iterator`](/docs/reference/prelude/Iterator) for `TreeMapIter<K, V>`

## See also

- [`collections::tree::TreeMap`](/docs/reference/collections/tree/TreeMap)
- [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter)
- [`Entry`](/docs/reference/collections/tree/Entry): One key-value pair, as `TreeMap` iteration yields it.
