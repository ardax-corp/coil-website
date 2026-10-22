---
slug: "collections/tree/TreeMapIter/next"
title: "TreeMapIter::next"
description: "Returns the entry with the next larger key, or None after the last one."
module: "collections::tree"
kind: "method"
name: "next"
parent: "TreeMapIter"
signature: "pub fn next() -> Option<Entry<K, V>>"
import: "use collections::tree::{TreeMapIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/tree.hy#L375"
order: 0
---

Returns the entry with the next larger key, or `None` after the last one.

Called on a `TreeMapIter` value as `value.next(…)`.

## Returns

`Option<Entry<K, V>>`

## See also

- [`TreeMapIter`](/docs/reference/collections/tree/TreeMapIter): An in-order iterator over a `TreeMap`, from `TreeMap::iter`.
