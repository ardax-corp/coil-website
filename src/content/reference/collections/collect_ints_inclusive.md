---
slug: "collections/collect_ints_inclusive"
title: "collect_ints_inclusive"
description: "Returns the values of the inclusive range a..=b as a Vec<int>."
module: "collections"
kind: "fn"
name: "collect_ints_inclusive"
signature: "fn collect_ints_inclusive(RangeInclusive<int> r) -> Vec<int>"
import: "use collections::{collect_ints_inclusive};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections.hy#L220"
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
- [`sort`](/docs/reference/collections/sort): Returns a sorted copy of arr, in ascending order.
- [`sort_by`](/docs/reference/collections/sort_by): Returns a copy of arr sorted by the value key gives each element, in ascending order.
- [`reverse`](/docs/reference/collections/reverse): Returns a copy of arr in reverse order.
- [`collect_ints`](/docs/reference/collections/collect_ints): Returns the values of the range a..b as a Vec<int>.
