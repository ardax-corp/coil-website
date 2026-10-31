---
slug: "stdlib/collections/collect_ints_inclusive"
package: "stdlib"
title: "collect_ints_inclusive"
description: "Returns the values of the inclusive range a..=b as a Vec<int>."
module: "collections"
kind: "fn"
name: "collect_ints_inclusive"
signature: "fn collect_ints_inclusive(RangeInclusive<int> r) -> Vec<int>"
import: "use collections::{collect_ints_inclusive};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections.hy#L220"
order: 4
---

Returns the values of the inclusive range `a..=b` as a [`Vec<int>`](/docs/reference/prelude/Vec).

## Parameters

| Name | Type |
|------|------|
| `r` | `RangeInclusive<int>` |

## Returns

`Vec<int>`

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`sort`](/packages/stdlib/reference/collections/sort): Returns a sorted copy of `arr`, in ascending order.
- [`sort_by`](/packages/stdlib/reference/collections/sort_by): Returns a copy of `arr` sorted by the value `key` gives each element, in ascending order.
- [`reverse`](/packages/stdlib/reference/collections/reverse): Returns a copy of `arr` in reverse order.
- [`collect_ints`](/packages/stdlib/reference/collections/collect_ints): Returns the values of the range `a..b` as a `Vec<int>`.
