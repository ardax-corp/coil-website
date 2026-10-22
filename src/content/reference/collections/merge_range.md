---
slug: "collections/merge_range"
title: "merge_range"
description: "Merge buf[lo..mid) and buf[mid..hi) via tmp scratch (stable)."
module: "collections"
kind: "fn"
name: "merge_range"
signature: "fn merge_range<T: Ord>(Vec<T> buf, Vec<T> tmp, int lo, int mid, int hi) -> int"
import: "use collections::{merge_range};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections.hy#L4"
order: 0
---

Merge `buf[lo..mid)` and `buf[mid..hi)` via `tmp` scratch (stable).

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<T>` |
| `tmp` | `Vec<T>` |
| `lo` | `int` |
| `mid` | `int` |
| `hi` | `int` |

## Returns

`int`

## See also

- [`sort`](/docs/reference/collections/sort): Stable bottom-up mergesort for Ord elements (new vector; input unchanged).
- [`merge_range_by`](/docs/reference/collections/merge_range_by): Stable mergesort by key (K: Ord).
- [`reverse`](/docs/reference/collections/reverse): Reverse a copy of arr.
- [`collect_ints`](/docs/reference/collections/collect_ints): Materialize a lazy Range<int> into a dynamic vector.
- [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive): Materialize a lazy inclusive RangeInclusive<int>.
