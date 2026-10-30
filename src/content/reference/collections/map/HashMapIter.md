---
slug: "collections/map/HashMapIter"
title: "HashMapIter"
description: "An iterator over the entries of a HashMap, from HashMap::iter."
module: "collections::map"
kind: "class"
name: "HashMapIter"
signature: "class HashMapIter<K, V>"
import: "use collections::map::{HashMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/collections/map.hy#L59"
order: 2
---

An iterator over the entries of a [`HashMap`](/docs/reference/collections/map/HashMap), from [`HashMap::iter`](/docs/reference/collections/map/HashMap/iter).

## Methods

| Name | Description |
|------|-------------|
| [`next`](/docs/reference/collections/map/HashMapIter/next) | Returns the next entry, or `None` after the last one. |

## Trait implementations

- [`Iterator`](/docs/reference/prelude/Iterator) for `HashMapIter<K, V>`

## See also

- [`collections::map::HashMap`](/docs/reference/collections/map/HashMap)
- [`HashMap::iter`](/docs/reference/collections/map/HashMap/iter)
- [`Entry`](/docs/reference/collections/map/Entry): One key-value pair, as `HashMap` iteration yields it.
