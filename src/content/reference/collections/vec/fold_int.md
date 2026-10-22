---
slug: "collections/vec/fold_int"
title: "fold_int"
description: "The same as fold; kept for older code."
module: "collections::vec"
kind: "fn"
name: "fold_int"
signature: "fn fold_int(Vec<int> xs, int init, int -> int -> int folder) -> int"
import: "use collections::vec::{fold_int};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/vec.hy#L2"
order: 1
---

The same as [`fold`](/docs/reference/collections/vec/fold); kept for older code.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<int>` |
| `init` | `int` |
| `folder` | `int -> int -> int` |

## Returns

`int`

## See also

- [`collections::vec::fold`](/docs/reference/collections/vec/fold)
- [`contains`](/docs/reference/collections/vec/contains): Returns true when needle is in xs.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first needle in xs, or -1.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds needle in the ascending vector xs by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns xs with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with mapper applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which pred is true, in order.
- [`first`](/docs/reference/collections/vec/first): Returns the first element, or None when xs is empty.
