---
slug: "collections/sort_by"
title: "sort_by"
description: "Returns a copy of arr sorted by the value key gives each element, in ascending order."
module: "collections"
kind: "fn"
name: "sort_by"
signature: "fn sort_by<T, K: Ord>(Vec<T> arr, T -> K key) -> Vec<T>"
import: "use collections::{sort_by};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections.hy#L149"
order: 1
---

Returns a copy of `arr` sorted by the value `key` gives each element, in ascending order.

Stable: elements with equal keys keep their order. `key` is called for each
comparison, so keep it cheap.

## Parameters

| Name | Type |
|------|------|
| `arr` | `Vec<T>` |
| `key` | `T -> K` |

## Returns

`Vec<T>`

## Examples

```coil
use collections::{sort_by};
use tests::assert;
let words: Vec<string> = ["kiwi", "fig", "banana"];
let by_len = sort_by(words, fn (string w) => w.len());
assert!(by_len[0] == "fig");
assert!(by_len[2] == "banana");
```

## See also

- [`sort`](/docs/reference/collections/sort): Returns a sorted copy of `arr`, in ascending order.
- [`reverse`](/docs/reference/collections/reverse): Returns a copy of `arr` in reverse order.
- [`collect_ints`](/docs/reference/collections/collect_ints): Returns the values of the range `a..b` as a `Vec<int>`.
- [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive): Returns the values of the inclusive range `a..=b` as a `Vec<int>`.
