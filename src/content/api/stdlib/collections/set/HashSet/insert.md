---
slug: "stdlib/collections/set/HashSet/insert"
package: "stdlib"
title: "HashSet::insert"
description: "Insert x; returns true when newly added."
module: "collections::set"
kind: "method"
name: "insert"
parent: "HashSet"
signature: "pub fn insert(T x) -> bool"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/set.coil#L53"
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

- [`HashSet`](/packages/stdlib/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::with_capacity`](/packages/stdlib/reference/collections/set/HashSet/with_capacity): Creates an empty set with room for `cap` values before it grows.
- [`HashSet::new`](/packages/stdlib/reference/collections/set/HashSet/new): Creates an empty set.
- [`HashSet::len`](/packages/stdlib/reference/collections/set/HashSet/len): Number of elements.
- [`HashSet::is_empty`](/packages/stdlib/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/packages/stdlib/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::contains`](/packages/stdlib/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/packages/stdlib/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
