---
slug: "collections/vec/index"
title: "collections::vec"
description: "Functional helpers for Vec: map, filter, fold, chunks, windows, partition, search."
module: "collections::vec"
kind: "module"
name: "collections::vec"
origin: "stdlib"
auto: false
order: 26
---

These are free functions that take the vector first: `map(xs, f)`. The methods on [`Vec`](/docs/reference/prelude/Vec) itself (`push`, `pop`, `len`, …) are in the [prelude](/docs/reference/prelude/Vec).

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::vec::{Partitioned, fold_int};
```

## Types

| Name | Description |
|------|-------------|
| [`Partitioned`](/docs/reference/collections/vec/Partitioned) | Two-bucket result of [`partition`](/docs/reference/collections/vec/partition) (`matched` = pred true, `rest` = pred false). |

## Functions

| Name | Description |
|------|-------------|
| [`fold_int`](/docs/reference/collections/vec/fold_int) | The same as [`fold`](/docs/reference/collections/vec/fold); kept for older code. |
| [`contains`](/docs/reference/collections/vec/contains) | Returns `true` when `needle` is in `xs`. |
| [`index_of`](/docs/reference/collections/vec/index_of) | Returns the index of the first `needle` in `xs`, or `-1`. |
| [`binary_search`](/docs/reference/collections/vec/binary_search) | Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it. |
| [`dedup`](/docs/reference/collections/vec/dedup) | Returns `xs` with runs of equal neighbours collapsed to one value. |
| [`map`](/docs/reference/collections/vec/map) | Returns a new vector with `mapper` applied to each element, in order. |
| [`filter`](/docs/reference/collections/vec/filter) | Returns the elements for which `pred` is `true`, in order. |
| [`first`](/docs/reference/collections/vec/first) | Returns the first element, or `None` when `xs` is empty. |
| [`last`](/docs/reference/collections/vec/last) | Returns the last element, or `None` when `xs` is empty. |
| [`concat`](/docs/reference/collections/vec/concat) | Returns a new vector holding the elements of `a` followed by those of `b`. |
| [`chunks`](/docs/reference/collections/vec/chunks) | Consecutive non-overlapping slices of `size` (last slice may be short). |
| [`windows`](/docs/reference/collections/vec/windows) | Overlapping sliding windows of exact `size`. |
| [`partition`](/docs/reference/collections/vec/partition) | Split `xs` into (`matched`, `rest`) by `pred`. |
| [`fold`](/docs/reference/collections/vec/fold) | Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc)(x)` for each `x`. |
