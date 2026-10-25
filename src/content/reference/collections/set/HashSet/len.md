---
slug: "collections/set/HashSet/len"
title: "HashSet::len"
description: "Number of elements."
module: "collections::set"
kind: "method"
name: "len"
parent: "HashSet"
signature: "pub fn len() -> int"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/set.hy#L36"
order: 2
---

Number of elements.

Called on a `HashSet` value as `value.len(…)`.

## Returns

`int`

## See also

- [`HashSet`](/docs/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::with_capacity`](/docs/reference/collections/set/HashSet/with_capacity): Create a set with bucket count rounded up to the next power of two (min 8).
- [`HashSet::new`](/docs/reference/collections/set/HashSet/new): Empty set with default capacity 8.
- [`HashSet::is_empty`](/docs/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/docs/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/docs/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/docs/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
