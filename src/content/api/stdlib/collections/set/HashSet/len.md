---
slug: "stdlib/collections/set/HashSet/len"
package: "stdlib"
title: "HashSet::len"
description: "Number of elements."
module: "collections::set"
kind: "method"
name: "len"
parent: "HashSet"
signature: "pub fn len() -> int"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/set.hy#L36"
order: 2
---

Number of elements.

Called on a `HashSet` value as `value.len(…)`.

## Returns

`int`

## See also

- [`HashSet`](/packages/stdlib/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::with_capacity`](/packages/stdlib/reference/collections/set/HashSet/with_capacity): Create a set with bucket count rounded up to the next power of two (min 8).
- [`HashSet::new`](/packages/stdlib/reference/collections/set/HashSet/new): Empty set with default capacity 8.
- [`HashSet::is_empty`](/packages/stdlib/reference/collections/set/HashSet/is_empty): Returns `true` when the set has no values.
- [`HashSet::clear`](/packages/stdlib/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/packages/stdlib/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/packages/stdlib/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/packages/stdlib/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
