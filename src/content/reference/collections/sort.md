---
slug: "collections/sort"
title: "sort"
description: "Stable bottom-up mergesort for Ord elements (new vector; input unchanged). Strings sort by their UTF-8 bytes (\"B\" before \"a\", a prefix first)."
module: "collections"
kind: "fn"
name: "sort"
signature: "fn sort<T: Ord>(Vec<T> arr) -> Vec<T> ensures result.len() == arr.len()"
import: "use collections::{sort};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/collections.hy#L52"
order: 1
---

Stable bottom-up mergesort for [`Ord`](/docs/reference/prelude/ops/Ord) elements (new vector; input unchanged). Strings sort by their UTF-8 bytes (`"B"` before `"a"`, a prefix first).

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

- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`merge_range`](/docs/reference/collections/merge_range): Merge buf[lo..mid) and buf[mid..hi) via tmp scratch (stable).
- [`merge_range_by`](/docs/reference/collections/merge_range_by): Stable mergesort by key (K: Ord).
- [`reverse`](/docs/reference/collections/reverse): Reverse a copy of arr.
- [`collect_ints`](/docs/reference/collections/collect_ints): Materialize a lazy Range<int> into a dynamic vector.
- [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive): Materialize a lazy inclusive RangeInclusive<int>.
