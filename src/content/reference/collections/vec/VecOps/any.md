---
slug: "collections/vec/VecOps/any"
title: "VecOps::any"
description: "Returns true when pred holds for some element (false when empty)."
module: "collections::vec"
kind: "method"
name: "any"
parent: "VecOps"
signature: "fn any(V xs, Item -> bool pred) -> bool"
import: "use collections::vec::{VecOps};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/vec.hy#L61"
order: 5
---

Returns `true` when `pred` holds for some element (`false` when empty).

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `pred` | `Item -> bool` |

## Returns

`bool`

## See also

- [`VecOps`](/docs/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecOps::map`](/docs/reference/collections/vec/VecOps/map): Returns a new vector with `mapper` applied to each element, in order.
- [`VecOps::filter`](/docs/reference/collections/vec/VecOps/filter): Returns the elements for which `pred` is `true`, in order.
- [`VecOps::fold`](/docs/reference/collections/vec/VecOps/fold): Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc, x)` for each `x`.
- [`VecOps::enumerate`](/docs/reference/collections/vec/VecOps/enumerate): Returns `(index, element)` pairs, so `for (i, x) in xs.enumerate()` works.
- [`VecOps::zip`](/docs/reference/collections/vec/VecOps/zip): Returns `(xs[i], ys[i])` pairs up to the shorter of the two vectors.
- [`VecOps::all`](/docs/reference/collections/vec/VecOps/all): Returns `true` when `pred` holds for every element (`true` when empty).
- [`VecOps::count`](/docs/reference/collections/vec/VecOps/count): Returns how many elements `pred` holds for.
