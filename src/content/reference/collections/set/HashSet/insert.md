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
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/set.hy#L53"
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
- [`HashSet::size`](/docs/reference/collections/set/HashSet/size): Number of elements.
- [`HashSet::is_empty`](/docs/reference/collections/set/HashSet/is_empty): Returns true when the set has no values.
- [`HashSet::clear`](/docs/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when x is present.
- [`HashSet::remove`](/docs/reference/collections/set/HashSet/remove): Remove x; returns true when an element was removed.
