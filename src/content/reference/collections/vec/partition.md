---
slug: "collections/vec/partition"
title: "partition"
description: "Split xs into (matched, rest) by pred. Order inside each bucket is preserved."
module: "collections::vec"
kind: "fn"
name: "partition"
signature: "fn partition<T>(Vec<T> xs, T -> bool pred) -> Partitioned<T>"
import: "use collections::vec::{partition};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/vec.hy#L348"
order: 13
---

Split `xs` into (`matched`, `rest`) by `pred`. Order inside each bucket is preserved.

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<T>` |
| `pred` | `T -> bool` |

## Returns

`Partitioned<T>`

## See also

- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as fold; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns true when needle is in xs.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first needle in xs, or -1.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds needle in the ascending vector xs by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns xs with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with mapper applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which pred is true, in order.
- [`first`](/docs/reference/collections/vec/first): Returns the first element, or None when xs is empty.
