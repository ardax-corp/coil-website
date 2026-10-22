---
slug: "collections/vec/map"
title: "map"
description: "Returns a new vector with mapper applied to each element, in order."
module: "collections::vec"
kind: "fn"
name: "map"
signature: "fn map<T, U>(Vec<T> xs, T -> U mapper) -> Vec<U>"
import: "use collections::vec::{map};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/vec.hy#L202"
order: 6
---

Returns a new vector with `mapper` applied to each element, in order.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |
| `mapper` | `T -> U` |

## Returns

`Vec<U>`

## Examples

```coil
use collections::vec::{map};
use string::{format};
use tests::assert;
let xs: Vec<int> = [1, 2, 3];
let squares = map(xs, fn (int x) => x * x);
assert!(squares[2] == 9);
let labels = map(xs, fn (int x) => format("#%i", x));
assert!(labels[0] == "#1");
```

## See also

- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as `fold`; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns `true` when `needle` is in `xs`.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first `needle` in `xs`, or `-1`.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns `xs` with runs of equal neighbours collapsed to one value.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which `pred` is `true`, in order.
- [`first`](/docs/reference/collections/vec/first): Returns the first element, or `None` when `xs` is empty.
- [`last`](/docs/reference/collections/vec/last): Returns the last element, or `None` when `xs` is empty.
