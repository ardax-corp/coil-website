---
slug: "stdlib/collections/map/HashMapIter/next"
package: "stdlib"
title: "HashMapIter::next"
description: "Returns the next entry, or None after the last one."
module: "collections::map"
kind: "method"
name: "next"
parent: "HashMapIter"
signature: "pub fn next() -> Option<Pair<K, V>>"
import: "use collections::map::{HashMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/map.coil#L572"
order: 0
---

Returns the next entry, or `None` after the last one.

Called on a `HashMapIter` value as `value.next(…)`.

## Returns

`Option<Pair<K, V>>`

## See also

- [`HashMapIter`](/packages/stdlib/reference/collections/map/HashMapIter): An iterator over the entries of a `HashMap`, from `HashMap::iter`.
