---
slug: "collections/vec/first"
title: "first"
description: "Returns the first element, or None when xs is empty."
module: "collections::vec"
kind: "fn"
name: "first"
signature: "fn first<T>(Vec<T> xs) -> Option<T>"
import: "use collections::vec::{first};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/collections/vec.hy#L247"
order: 8
---

Returns the first element, or `None` when `xs` is empty.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |

## Returns

`Option<T>`

## Examples

```coil
use collections::vec::{first};
use tests::assert;
let xs: Vec<string> = ["a", "b"];
assert!((first(xs) ?? "") == "a");
let none: Vec<int> = Vec::new();
assert!(first(none).is_none());
```

## See also

- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as `fold`; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns `true` when `needle` is in `xs`.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first `needle` in `xs`, or `-1`.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns `xs` with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with `mapper` applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which `pred` is `true`, in order.
- [`last`](/docs/reference/collections/vec/last): Returns the last element, or `None` when `xs` is empty.
