---
slug: "collections/vec/binary_search"
title: "binary_search"
description: "Finds needle in the ascending vector xs by halving, and returns an index holding it."
module: "collections::vec"
kind: "fn"
name: "binary_search"
signature: "fn binary_search(Vec<int> xs, int needle) -> Option<int>"
import: "use collections::vec::{binary_search};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/vec.hy#L77"
order: 4
---

Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.

`xs` must be sorted ([`collections::sort`](/docs/reference/collections/sort) does that); on an unsorted vector the
result is unreliable. With duplicates, any matching index may be returned.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<int>` |
| `needle` | `int` |

## Returns

`Option<int>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures found_at(xs, needle, result)
```

## Examples

```coil
use collections::vec::{binary_search};
use tests::assert;
let xs: Vec<int> = [1, 3, 5, 7, 9];
assert!((binary_search(xs, 7) ?? -1) == 3);
assert!(binary_search(xs, 4).is_none());
```

## See also

- [`collections::sort`](/docs/reference/collections/sort)
- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as fold; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns true when needle is in xs.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first needle in xs, or -1.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns xs with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with mapper applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which pred is true, in order.
- [`first`](/docs/reference/collections/vec/first): Returns the first element, or None when xs is empty.
