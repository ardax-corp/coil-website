---
slug: "collections/set/HashSet/new"
title: "HashSet::new"
description: "Empty set with default capacity 8."
module: "collections::set"
kind: "static method"
name: "new"
parent: "HashSet"
signature: "pub static fn new() -> HashSet<T>"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections/set.hy#L17"
order: 1
---

Empty set with default capacity 8.

## Returns

`HashSet<T>`

## See also

- [`HashSet`](/docs/reference/collections/set/HashSet): Set of unique values backed by HashMap<T, bool>.
- [`HashSet::with_capacity`](/docs/reference/collections/set/HashSet/with_capacity): Create a set with bucket count rounded up to the next power of two (min 8).
- [`HashSet::size`](/docs/reference/collections/set/HashSet/size): Number of elements.
- [`HashSet::is_empty`](/docs/reference/collections/set/HashSet/is_empty)
- [`HashSet::clear`](/docs/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/docs/reference/collections/set/HashSet/insert): Insert x; returns true when newly added.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when x is present.
- [`HashSet::remove`](/docs/reference/collections/set/HashSet/remove): Remove x; returns true when an element was removed.
