---
slug: "collections/map/HashMapIter/next"
title: "HashMapIter::next"
description: "Returns the next entry, or None after the last one."
module: "collections::map"
kind: "method"
name: "next"
parent: "HashMapIter"
signature: "pub fn next() -> Option<Entry<K, V>>"
import: "use collections::map::{HashMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/collections/map.hy#L449"
order: 0
---

Returns the next entry, or `None` after the last one.

Called on a `HashMapIter` value as `value.next(…)`.

## Returns

`Option<Entry<K, V>>`

## See also

- [`HashMapIter`](/docs/reference/collections/map/HashMapIter): An iterator over the entries of a `HashMap`, from `HashMap::iter`.
