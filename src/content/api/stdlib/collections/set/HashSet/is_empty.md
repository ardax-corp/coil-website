---
slug: "stdlib/collections/set/HashSet/is_empty"
package: "stdlib"
title: "HashSet::is_empty"
description: "Returns true when the set has no values."
module: "collections::set"
kind: "method"
name: "is_empty"
parent: "HashSet"
signature: "pub fn is_empty() -> bool"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/set.coil#L41"
order: 3
---

Returns `true` when the set has no values.

Called on a `HashSet` value as `value.is_empty(…)`.

## Returns

`bool`

## See also

- [`HashSet`](/packages/stdlib/reference/collections/set/HashSet): A set of unique values.
- [`HashSet::with_capacity`](/packages/stdlib/reference/collections/set/HashSet/with_capacity): Creates an empty set with room for `cap` values before it grows.
- [`HashSet::new`](/packages/stdlib/reference/collections/set/HashSet/new): Creates an empty set.
- [`HashSet::len`](/packages/stdlib/reference/collections/set/HashSet/len): Number of elements.
- [`HashSet::clear`](/packages/stdlib/reference/collections/set/HashSet/clear): Remove all elements.
- [`HashSet::insert`](/packages/stdlib/reference/collections/set/HashSet/insert): Insert `x`; returns `true` when newly added.
- [`HashSet::contains`](/packages/stdlib/reference/collections/set/HashSet/contains): True when `x` is present.
- [`HashSet::remove`](/packages/stdlib/reference/collections/set/HashSet/remove): Remove `x`; returns `true` when an element was removed.
