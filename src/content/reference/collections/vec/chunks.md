---
slug: "collections/vec/chunks"
title: "chunks"
description: "Consecutive non-overlapping slices of size (last slice may be short). Empty when size <= 0. Name is chunks (no chunk alias)."
module: "collections::vec"
kind: "fn"
name: "chunks"
signature: "fn chunks<T>(Vec<T> xs, int size) -> Vec<Vec<T>>"
import: "use collections::vec::{chunks};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/vec.hy#L283"
order: 11
---

Consecutive non-overlapping slices of `size` (last slice may be short). Empty when `size <= 0`. Name is `chunks` (no `chunk` alias).

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
