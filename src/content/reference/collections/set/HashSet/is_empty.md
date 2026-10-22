---
slug: "collections/set/HashSet/is_empty"
title: "HashSet::is_empty"
description: "Method HashSet::is_empty."
module: "collections::set"
kind: "method"
name: "is_empty"
parent: "HashSet"
signature: "pub fn is_empty() -> bool"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections/set.hy#L26"
order: 3
---

*No documentation yet.*

Called on a `HashSet` value as `value.is_empty(…)`.

## Returns

`bool`

## See also

- [`HashSet`](/docs/reference/collections/set/HashSet): Set of unique values backed by HashMap<T, bool>.
- [`HashSet::with_capacity`](/docs/reference/collections/set/HashSet/with_capacity): Create a set with bucket count rounded up to the next power of two (min 8).
- [`HashSet::new`](/docs/reference/collections/set/HashSet/new): Empty set with default capacity 8.
- [`HashSet::size`](/docs/reference/collections/set/HashSet/size): Number of elements.
- [`HashSet::clear`](/docs/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/docs/reference/collections/set/HashSet/insert): Insert x; returns true when newly added.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when x is present.
- [`HashSet::remove`](/docs/reference/collections/set/HashSet/remove): Remove x; returns true when an element was removed.
