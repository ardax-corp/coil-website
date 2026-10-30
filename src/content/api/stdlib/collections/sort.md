---
slug: "stdlib/collections/sort"
package: "stdlib"
title: "sort"
description: "Returns a sorted copy of arr, in ascending order."
module: "collections"
kind: "fn"
name: "sort"
signature: "fn sort<T: Ord>(Vec<T> arr) -> Vec<T>"
import: "use collections::{sort};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections.hy#L68"
order: 0
---

Returns a sorted copy of `arr`, in ascending order.

The sort is stable (equal elements keep their order) and takes `O(n log n)`
time. `arr` itself is not changed. Elements need [`Ord`](/docs/reference/prelude/ops/Ord); strings compare by
their UTF-8 bytes, so `"B"` sorts before `"a"`.

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

## Examples

```coil
use collections::{sort};
use tests::assert;
let xs: Vec<int> = [3, 1, 2];
let s = sort(xs);
assert!(s[0] == 1 && s[2] == 3);
assert!(xs[0] == 3);
let words: Vec<string> = ["pear", "Apple", "fig"];
assert!(sort(words)[0] == "Apple");
```

## See also

- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`sort_by`](/packages/stdlib/reference/collections/sort_by): Returns a copy of `arr` sorted by the value `key` gives each element, in ascending order.
- [`reverse`](/packages/stdlib/reference/collections/reverse): Returns a copy of `arr` in reverse order.
- [`collect_ints`](/packages/stdlib/reference/collections/collect_ints): Returns the values of the range `a..b` as a `Vec<int>`.
- [`collect_ints_inclusive`](/packages/stdlib/reference/collections/collect_ints_inclusive): Returns the values of the inclusive range `a..=b` as a `Vec<int>`.
