---
slug: "collections/collect_ints"
title: "collect_ints"
description: "Materialize a lazy Range<int> into a dynamic vector."
module: "collections"
kind: "fn"
name: "collect_ints"
signature: "fn collect_ints(Range<int> r) -> Vec<int>"
import: "use collections::{collect_ints};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections.hy#L160"
order: 4
---

Materialize a lazy [`Range<int>`](/docs/reference/prelude/Range) into a dynamic vector.

## Parameters

| Name | Type |
|------|------|
| `r` | `Range<int>` |

## Returns

`Vec<int>`

## See also

- [`Range`](/docs/reference/prelude/Range)
- [`merge_range`](/docs/reference/collections/merge_range): Merge buf[lo..mid) and buf[mid..hi) via tmp scratch (stable).
- [`sort`](/docs/reference/collections/sort): Stable bottom-up mergesort for Ord elements (new vector; input unchanged).
- [`merge_range_by`](/docs/reference/collections/merge_range_by): Stable mergesort by key (K: Ord).
- [`reverse`](/docs/reference/collections/reverse): Reverse a copy of arr.
- [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive): Materialize a lazy inclusive RangeInclusive<int>.
