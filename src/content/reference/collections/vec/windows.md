---
slug: "collections/vec/windows"
title: "windows"
description: "Overlapping sliding windows of exact size. Empty if size <= 0 or size > len."
module: "collections::vec"
kind: "fn"
name: "windows"
signature: "fn windows<T>(Vec<T> xs, int size) -> Vec<Vec<T>>"
import: "use collections::vec::{windows};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/vec.hy#L305"
order: 12
---

Overlapping sliding windows of exact `size`. Empty if `size <= 0` or `size > len`.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |
| `size` | `int` |

## Returns

`Vec<Vec<T>>`

## See also

- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as `fold`; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns `true` when `needle` is in `xs`.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first `needle` in `xs`, or `-1`.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns `xs` with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with `mapper` applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which `pred` is `true`, in order.
- [`first`](/docs/reference/collections/vec/first): Returns the first element, or `None` when `xs` is empty.
