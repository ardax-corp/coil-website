---
slug: "stdlib/collections/vec/VecOps/map"
package: "stdlib"
title: "VecOps::map"
description: "Returns a new vector with mapper applied to each element, in order."
module: "collections::vec"
kind: "method"
name: "map"
parent: "VecOps"
signature: "fn map<U>(V xs, Item -> U mapper) -> Vec<U>"
import: "use collections::vec::{VecOps};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/vec.hy#L45"
order: 0
---

Returns a new vector with `mapper` applied to each element, in order.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `mapper` | `Item -> U` |

## Returns

`Vec<U>`

## See also

- [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecOps::filter`](/packages/stdlib/reference/collections/vec/VecOps/filter): Returns the elements for which `pred` is `true`, in order.
- [`VecOps::fold`](/packages/stdlib/reference/collections/vec/VecOps/fold): Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc, x)` for each `x`.
- [`VecOps::enumerate`](/packages/stdlib/reference/collections/vec/VecOps/enumerate): Returns `(index, element)` pairs, so `for (i, x) in xs.enumerate()` works.
- [`VecOps::zip`](/packages/stdlib/reference/collections/vec/VecOps/zip): Returns `(xs[i], ys[i])` pairs up to the shorter of the two vectors.
- [`VecOps::any`](/packages/stdlib/reference/collections/vec/VecOps/any): Returns `true` when `pred` holds for some element (`false` when empty).
- [`VecOps::all`](/packages/stdlib/reference/collections/vec/VecOps/all): Returns `true` when `pred` holds for every element (`true` when empty).
- [`VecOps::count`](/packages/stdlib/reference/collections/vec/VecOps/count): Returns how many elements `pred` holds for.
