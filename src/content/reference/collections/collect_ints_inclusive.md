---
slug: "collections/collect_ints_inclusive"
title: "collect_ints_inclusive"
description: "Materialize a lazy inclusive RangeInclusive<int>."
module: "collections"
kind: "fn"
name: "collect_ints_inclusive"
signature: "fn collect_ints_inclusive(RangeInclusive<int> r) -> Vec<int>"
import: "use collections::{collect_ints_inclusive};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections.hy#L169"
order: 5
---

Materialize a lazy inclusive [`RangeInclusive<int>`](/docs/reference/prelude/RangeInclusive).

## Parameters

| Name | Type |
|------|------|
| `r` | `RangeInclusive<int>` |

## Returns

`Vec<int>`

## See also

- [`RangeInclusive`](/docs/reference/prelude/RangeInclusive)
- [`merge_range`](/docs/reference/collections/merge_range): Merge buf[lo..mid) and buf[mid..hi) via tmp scratch (stable).
- [`sort`](/docs/reference/collections/sort): Stable bottom-up mergesort for Ord elements (new vector; input unchanged).
- [`merge_range_by`](/docs/reference/collections/merge_range_by): Stable mergesort by key (K: Ord).
- [`reverse`](/docs/reference/collections/reverse): Reverse a copy of arr.
- [`collect_ints`](/docs/reference/collections/collect_ints): Materialize a lazy Range<int> into a dynamic vector.
