---
slug: "collections/set/HashSet/insert"
title: "HashSet::insert"
description: "Insert x; returns true when newly added."
module: "collections::set"
kind: "method"
name: "insert"
parent: "HashSet"
signature: "pub fn insert(T x) -> bool"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/collections/set.hy#L53"
order: 5
---

Insert `x`; returns `true` when newly added.

Called on a `HashSet` value as `value.insert(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `T` |

## Returns

`bool`

## See also

- [`HashSet`](/docs/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::with_capacity`](/docs/reference/collections/set/HashSet/with_capacity): Create a set with bucket count rounded up to the next power of two (min 8).
- [`HashSet::new`](/docs/reference/collections/set/HashSet/new): Empty set with default capacity 8.
- [`HashSet::len`](/docs/reference/collections/set/HashSet/len): Number of elements.
- [`HashSet::is_empty`](/docs/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/docs/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/docs/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
