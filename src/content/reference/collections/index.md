---
slug: "collections/index"
title: "collections"
description: "The collections module."
module: "collections"
kind: "module"
name: "collections"
origin: "stdlib"
auto: false
order: 17
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::{merge_range, sort};
```

## Modules

| Module | Description |
|--------|-------------|
| [`collections::bitset`](/docs/reference/collections/bitset) |  |
| [`collections::deque`](/docs/reference/collections/deque) |  |
| [`collections::list`](/docs/reference/collections/list) |  |
| [`collections::map`](/docs/reference/collections/map) |  |
| [`collections::set`](/docs/reference/collections/set) |  |
| [`collections::tree`](/docs/reference/collections/tree) |  |
| [`collections::vec`](/docs/reference/collections/vec) |  |

## Functions

| Name | Description |
|------|-------------|
| [`merge_range`](/docs/reference/collections/merge_range) | Merge `buf[lo..mid)` and `buf[mid..hi)` via `tmp` scratch (stable). |
| [`sort`](/docs/reference/collections/sort) | Stable bottom-up mergesort for [`Ord`](/docs/reference/prelude/ops/Ord) elements (new vector; input unchanged). |
| [`merge_range_by`](/docs/reference/collections/merge_range_by) | Stable mergesort by `key` (`K: Ord`). |
| [`reverse`](/docs/reference/collections/reverse) | Reverse a copy of `arr`. |
| [`collect_ints`](/docs/reference/collections/collect_ints) | Materialize a lazy [`Range<int>`](/docs/reference/prelude/Range) into a dynamic vector. |
| [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive) | Materialize a lazy inclusive [`RangeInclusive<int>`](/docs/reference/prelude/RangeInclusive). |
