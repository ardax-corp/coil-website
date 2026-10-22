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
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/map.hy#L429"
order: 0
---

Returns the next entry, or `None` after the last one.

Called on a `HashMapIter` value as `value.next(…)`.

## Returns

`Option<Entry<K, V>>`

## See also

- [`HashMapIter`](/docs/reference/collections/map/HashMapIter): An iterator over the entries of a HashMap, from HashMap::iter.
