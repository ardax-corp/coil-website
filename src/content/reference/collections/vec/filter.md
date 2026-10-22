---
slug: "collections/vec/filter"
title: "filter"
description: "Returns the elements for which pred is true, in order."
module: "collections::vec"
kind: "fn"
name: "filter"
signature: "fn filter<T>(Vec<T> xs, T -> bool pred) -> Vec<T>"
import: "use collections::vec::{filter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/vec.hy#L223"
order: 7
---

Returns the elements for which `pred` is `true`, in order.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |
| `pred` | `T -> bool` |

## Returns

`Vec<T>`

## Examples

```coil
use collections::vec::{filter};
use tests::assert;
let xs: Vec<int> = [1, 2, 3, 4];
let even = filter(xs, fn (int x) => x % 2 == 0);
assert!(even.len() == 2 && even[0] == 2);
```

## See also

- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as fold; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns true when needle is in xs.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first needle in xs, or -1.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds needle in the ascending vector xs by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns xs with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with mapper applied to each element, in order.
- [`first`](/docs/reference/collections/vec/first): Returns the first element, or None when xs is empty.
- [`last`](/docs/reference/collections/vec/last): Returns the last element, or None when xs is empty.
