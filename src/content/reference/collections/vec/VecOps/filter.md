---
slug: "collections/vec/VecOps/filter"
title: "VecOps::filter"
description: "Returns the elements for which pred is true, in order."
module: "collections::vec"
kind: "method"
name: "filter"
parent: "VecOps"
signature: "fn filter(V xs, Item -> bool pred) -> Vec<Item>"
import: "use collections::vec::{VecOps};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/vec.hy#L48"
order: 1
---

Returns the elements for which `pred` is `true`, in order.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `pred` | `Item -> bool` |

## Returns

`Vec<Item>`

## See also

- [`VecOps`](/docs/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecOps::map`](/docs/reference/collections/vec/VecOps/map): Returns a new vector with `mapper` applied to each element, in order.
- [`VecOps::fold`](/docs/reference/collections/vec/VecOps/fold): Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc, x)` for each `x`.
- [`VecOps::enumerate`](/docs/reference/collections/vec/VecOps/enumerate): Returns `(index, element)` pairs, so `for (i, x) in xs.enumerate()` works.
- [`VecOps::zip`](/docs/reference/collections/vec/VecOps/zip): Returns `(xs[i], ys[i])` pairs up to the shorter of the two vectors.
- [`VecOps::any`](/docs/reference/collections/vec/VecOps/any): Returns `true` when `pred` holds for some element (`false` when empty).
- [`VecOps::all`](/docs/reference/collections/vec/VecOps/all): Returns `true` when `pred` holds for every element (`true` when empty).
- [`VecOps::count`](/docs/reference/collections/vec/VecOps/count): Returns how many elements `pred` holds for.
