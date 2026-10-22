---
slug: "collections/reverse"
title: "reverse"
description: "Reverse a copy of arr."
module: "collections"
kind: "fn"
name: "reverse"
signature: "fn reverse<T>(Vec<T> arr) -> Vec<T> ensures result.len() == arr.len()"
import: "use collections::{reverse};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections.hy#L146"
order: 3
---

Reverse a copy of `arr`.

## Parameters

| Name | Type |
|------|------|
| `arr` | `Vec<T>` |

## Returns

`Vec<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == arr.len()
```

## See also

- [`merge_range`](/docs/reference/collections/merge_range): Merge buf[lo..mid) and buf[mid..hi) via tmp scratch (stable).
- [`sort`](/docs/reference/collections/sort): Stable bottom-up mergesort for Ord elements (new vector; input unchanged).
- [`merge_range_by`](/docs/reference/collections/merge_range_by): Stable mergesort by key (K: Ord).
- [`collect_ints`](/docs/reference/collections/collect_ints): Materialize a lazy Range<int> into a dynamic vector.
- [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive): Materialize a lazy inclusive RangeInclusive<int>.
