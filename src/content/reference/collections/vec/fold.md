---
slug: "collections/vec/fold"
title: "fold"
description: "Combines the elements left to right: starts from init and replaces the accumulator with folder(acc)(x) for each x."
module: "collections::vec"
kind: "fn"
name: "fold"
signature: "fn fold(Vec<int> xs, int init, int -> int -> int folder) -> int"
import: "use collections::vec::{fold};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/vec.hy#L377"
order: 14
---

Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc)(x)` for each `x`.

`folder` is curried: it takes the accumulator and returns a function of the
element. Only [`Vec<int>`](/docs/reference/prelude/Vec) is supported for now.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<int>` |
| `init` | `int` |
| `folder` | `int -> int -> int` |

## Returns

`int`

## Examples

```coil
use collections::vec::{fold};
use tests::assert;
let xs: Vec<int> = [1, 2, 3, 4];
let total = fold(xs, 0, fn (int acc) => fn (int x) use (acc) => acc + x);
assert!(total == 10);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as fold; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns true when needle is in xs.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first needle in xs, or -1.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds needle in the ascending vector xs by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns xs with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with mapper applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which pred is true, in order.
