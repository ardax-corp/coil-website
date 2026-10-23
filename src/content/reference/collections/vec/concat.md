---
slug: "collections/vec/concat"
title: "concat"
description: "Returns a new vector holding the elements of a followed by those of b."
module: "collections::vec"
kind: "fn"
name: "concat"
signature: "fn concat<T>(Vec<T> a, Vec<T> b) -> Vec<T>"
import: "use collections::vec::{concat};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/collections/vec.hy#L264"
order: 10
---

Returns a new vector holding the elements of `a` followed by those of `b`.

## Parameters

| Name | Type |
|------|------|
| `a` | `Vec<T>` |
| `b` | `Vec<T>` |

## Returns

`Vec<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == a.len() + b.len()
```

## See also

- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as `fold`; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns `true` when `needle` is in `xs`.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first `needle` in `xs`, or `-1`.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns `xs` with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with `mapper` applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which `pred` is `true`, in order.
- [`first`](/docs/reference/collections/vec/first): Returns the first element, or `None` when `xs` is empty.
