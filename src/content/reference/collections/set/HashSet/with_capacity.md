---
slug: "collections/set/HashSet/with_capacity"
title: "HashSet::with_capacity"
description: "Create a set with bucket count rounded up to the next power of two (min 8)."
module: "collections::set"
kind: "static method"
name: "with_capacity"
parent: "HashSet"
signature: "pub static fn with_capacity(int cap) -> HashSet<T>"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/set.hy#L26"
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

- [`HashSet`](/docs/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::new`](/docs/reference/collections/set/HashSet/new): Empty set with default capacity 8.
- [`HashSet::len`](/docs/reference/collections/set/HashSet/len): Number of elements.
- [`HashSet::is_empty`](/docs/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/docs/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/docs/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/docs/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
