---
slug: "stdlib/collections/set/HashSet/with_capacity"
package: "stdlib"
title: "HashSet::with_capacity"
description: "Creates an empty set with room for cap values before it grows."
module: "collections::set"
kind: "static method"
name: "with_capacity"
parent: "HashSet"
signature: "pub static fn with_capacity(int cap) -> HashSet<T>"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/set.coil#L26"
order: 0
---

Creates an empty set with room for `cap` values before it grows.

## Parameters

| Name | Type |
|------|------|
| `cap` | `int` |

## Returns

`HashSet<T>`

## See also

- [`HashSet`](/packages/stdlib/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::new`](/packages/stdlib/reference/collections/set/HashSet/new): Creates an empty set.
- [`HashSet::len`](/packages/stdlib/reference/collections/set/HashSet/len): Number of elements.
- [`HashSet::is_empty`](/packages/stdlib/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/packages/stdlib/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/packages/stdlib/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/packages/stdlib/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/packages/stdlib/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
