---
slug: "collections/set/HashSet"
title: "HashSet"
description: "A set of unique values."
module: "collections::set"
kind: "class"
name: "HashSet"
signature: "class HashSet<T>"
import: "use collections::set::{HashSet};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/collections/set.hy#L20"
order: 0
---

A set of unique values.

Values need [`Eq`](/docs/reference/prelude/ops/Eq) and `Hash`. Backed by a `HashMap<T, bool>`.

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/docs/reference/collections/set/HashSet/with_capacity) | Create a set with bucket count rounded up to the next power of two (min 8). |
| [`new`](/docs/reference/collections/set/HashSet/new) | Empty set with default capacity 8. |

## Methods

| Name | Description |
|------|-------------|
| [`size`](/docs/reference/collections/set/HashSet/size) | Number of elements. |
| [`is_empty`](/docs/reference/collections/set/HashSet/is_empty) | Returns `true` when the set has no values. |
| [`clear`](/docs/reference/collections/set/HashSet/clear) | Remove all elements. |
| [`insert`](/docs/reference/collections/set/HashSet/insert) | Insert `x`; returns `true` when newly added. |
| [`contains`](/docs/reference/collections/set/HashSet/contains) | True when `x` is present. |
| [`remove`](/docs/reference/collections/set/HashSet/remove) | Remove `x`; returns `true` when an element was removed. |

## Examples

```coil
use collections::set::{HashSet};
use tests::assert;
let tags: HashSet<string> = HashSet::new();
assert!(tags.insert("red"));
assert!(!tags.insert("red"));
assert!(tags.contains("red"));
assert!(tags.size() == 1);
```

## See also

- [`Eq`](/docs/reference/prelude/ops/Eq)
