---
slug: "stdlib/collections/map/HashMapIter/next"
package: "stdlib"
title: "HashMapIter::next"
description: "Returns the next entry, or None after the last one."
module: "collections::map"
kind: "method"
name: "next"
parent: "HashMapIter"
signature: "pub fn next() -> Option<Entry<K, V>>"
import: "use collections::map::{HashMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/map.hy#L449"
order: 0
---

Returns the next entry, or `None` after the last one.

Called on a `HashMapIter` value as `value.next(…)`.

## Returns

`Option<Entry<K, V>>`

## See also

- [`HashMapIter`](/packages/stdlib/reference/collections/map/HashMapIter): An iterator over the entries of a `HashMap`, from `HashMap::iter`.
