---
slug: "stdlib/collections/set/HashSet"
package: "stdlib"
title: "HashSet"
description: "A set of unique values."
module: "collections::set"
kind: "class"
name: "HashSet"
signature: "class HashSet<T>"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/set.hy#L20"
order: 0
---

A set of unique values.

Values need [`Eq`](/docs/reference/prelude/ops/Eq) and `Hash`. Backed by a `HashMap<T, bool>`.

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/packages/stdlib/reference/collections/set/HashSet/with_capacity) | Create a set with bucket count rounded up to the next power of two (min 8). |
| [`new`](/packages/stdlib/reference/collections/set/HashSet/new) | Empty set with default capacity 8. |

## Methods

| Name | Description |
|------|-------------|
| [`len`](/packages/stdlib/reference/collections/set/HashSet/len) | Number of elements. |
| [`is_empty`](/packages/stdlib/reference/collections/set/HashSet/is_empty) | Returns `true` when the set has no values. |
| [`clear`](/packages/stdlib/reference/collections/set/HashSet/clear) | Remove all elements. |
| [`insert`](/packages/stdlib/reference/collections/set/HashSet/insert) | Insert `x`; returns `true` when newly added. |
| [`contains`](/packages/stdlib/reference/collections/set/HashSet/contains) | True when `x` is present. |
| [`remove`](/packages/stdlib/reference/collections/set/HashSet/remove) | Remove `x`; returns `true` when an element was removed. |

## Examples

```coil
use collections::set::{HashSet};
use tests::assert;
let tags: HashSet<string> = HashSet::new();
assert!(tags.insert("red"));
assert!(!tags.insert("red"));
assert!(tags.contains("red"));
assert!(tags.len() == 1);
```

## See also

- [`Eq`](/docs/reference/prelude/ops/Eq)
