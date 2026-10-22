---
slug: "collections/merge_range_by"
title: "merge_range_by"
description: "Stable mergesort by key (K: Ord). Input unchanged; equal keys keep order."
module: "collections"
kind: "fn"
name: "merge_range_by"
signature: "fn merge_range_by<T, K: Ord>(Vec<T> buf, Vec<T> tmp, int lo, int mid, int hi, T -> K key) -> int"
import: "use collections::{merge_range_by};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections.hy#L82"
order: 2
---

Stable mergesort by `key` (`K: Ord`). Input unchanged; equal keys keep order.

## Parameters

| Name | Type |
|------|------|
| `buf` | `Vec<T>` |
| `tmp` | `Vec<T>` |
| `lo` | `int` |
| `mid` | `int` |
| `hi` | `int` |
| `key` | `T -> K` |

## Returns

`int`

## See also

- [`merge_range`](/docs/reference/collections/merge_range): Merge buf[lo..mid) and buf[mid..hi) via tmp scratch (stable).
- [`sort`](/docs/reference/collections/sort): Stable bottom-up mergesort for Ord elements (new vector; input unchanged).
- [`reverse`](/docs/reference/collections/reverse): Reverse a copy of arr.
- [`collect_ints`](/docs/reference/collections/collect_ints): Materialize a lazy Range<int> into a dynamic vector.
- [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive): Materialize a lazy inclusive RangeInclusive<int>.
