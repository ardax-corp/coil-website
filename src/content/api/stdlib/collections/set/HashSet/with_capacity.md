---
slug: "stdlib/collections/set/HashSet/with_capacity"
package: "stdlib"
title: "HashSet::with_capacity"
description: "Create a set with bucket count rounded up to the next power of two (min 8)."
module: "collections::set"
kind: "static method"
name: "with_capacity"
parent: "HashSet"
signature: "pub static fn with_capacity(int cap) -> HashSet<T>"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/set.hy#L26"
order: 0
---

Create a set with bucket count rounded up to the next power of two (min 8).

## Parameters

| Name | Type |
|------|------|
| `cap` | `int` |

## Returns

`HashSet<T>`

## See also

- [`HashSet`](/packages/stdlib/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::new`](/packages/stdlib/reference/collections/set/HashSet/new): Empty set with default capacity 8.
- [`HashSet::len`](/packages/stdlib/reference/collections/set/HashSet/len): Number of elements.
- [`HashSet::is_empty`](/packages/stdlib/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/packages/stdlib/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/packages/stdlib/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/packages/stdlib/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/packages/stdlib/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
