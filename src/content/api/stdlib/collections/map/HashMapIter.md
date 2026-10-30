---
slug: "stdlib/collections/map/HashMapIter"
package: "stdlib"
title: "HashMapIter"
description: "An iterator over the entries of a HashMap, from HashMap::iter."
module: "collections::map"
kind: "class"
name: "HashMapIter"
signature: "class HashMapIter<K, V>"
import: "use collections::map::{HashMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/map.hy#L59"
order: 2
---

An iterator over the entries of a [`HashMap`](/packages/stdlib/reference/collections/map/HashMap), from [`HashMap::iter`](/packages/stdlib/reference/collections/map/HashMap/iter).

## Methods

| Name | Description |
|------|-------------|
| [`next`](/packages/stdlib/reference/collections/map/HashMapIter/next) | Returns the next entry, or `None` after the last one. |

## Trait implementations

- [`Iterator`](/docs/reference/prelude/Iterator) for `HashMapIter<K, V>`

## See also

- [`collections::map::HashMap`](/packages/stdlib/reference/collections/map/HashMap)
- [`HashMap::iter`](/packages/stdlib/reference/collections/map/HashMap/iter)
- [`Entry`](/packages/stdlib/reference/collections/map/Entry): One key-value pair, as `HashMap` iteration yields it.
