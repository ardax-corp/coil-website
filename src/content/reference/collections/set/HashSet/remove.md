---
slug: "collections/set/HashSet/remove"
title: "HashSet::remove"
description: "Remove x; returns true when an element was removed."
module: "collections::set"
kind: "method"
name: "remove"
parent: "HashSet"
signature: "pub fn remove(T x) -> bool"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/collections/set.hy#L63"
order: 7
---

Remove `x`; returns `true` when an element was removed.

Called on a `HashSet` value as `value.remove(…)`.

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
- [`HashSet::is_empty`](/docs/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/docs/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/docs/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when `x` is present.
