---
slug: "collections/set/HashSet/clear"
title: "HashSet::clear"
description: "Remove all elements."
module: "collections::set"
kind: "method"
name: "clear"
parent: "HashSet"
signature: "pub fn clear()"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/set.hy#L46"
order: 4
---

Remove all elements.

Called on a `HashSet` value as `value.clear(…)`.

## See also

- [`HashSet`](/docs/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::with_capacity`](/docs/reference/collections/set/HashSet/with_capacity): Create a set with bucket count rounded up to the next power of two (min 8).
- [`HashSet::new`](/docs/reference/collections/set/HashSet/new): Empty set with default capacity 8.
- [`HashSet::size`](/docs/reference/collections/set/HashSet/size): Number of elements.
- [`HashSet::is_empty`](/docs/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::insert`](/docs/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/docs/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/docs/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
