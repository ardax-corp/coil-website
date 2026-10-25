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
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/tree.hy#L402"
order: 0
---

Returns the entry with the next larger key, or `None` after the last one.

Called on a `TreeMapIter` value as `value.next(…)`.

## Returns

`Option<Entry<K, V>>`

## See also

- [`TreeMapIter`](/docs/reference/collections/tree/TreeMapIter): An in-order iterator over a `TreeMap`, from `TreeMap::iter`.
