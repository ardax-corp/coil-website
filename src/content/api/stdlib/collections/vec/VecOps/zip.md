---
slug: "stdlib/collections/vec/VecOps/zip"
package: "stdlib"
title: "VecOps::zip"
description: "Returns (xs[i], ys[i]) pairs up to the shorter of the two vectors."
module: "collections::vec"
kind: "method"
name: "zip"
parent: "VecOps"
signature: "fn zip<U>(V xs, Vec<U> ys) -> Vec<(Item, U)>"
import: "use collections::vec::{VecOps};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/vec.coil#L58"
order: 4
---

Returns `(xs[i], ys[i])` pairs up to the shorter of the two vectors.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `ys` | `Vec<U>` |

## Returns

`Vec<(Item, U)>`

## See also

- [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecOps::map`](/packages/stdlib/reference/collections/vec/VecOps/map): Returns a new vector with `mapper` applied to each element, in order.
- [`VecOps::filter`](/packages/stdlib/reference/collections/vec/VecOps/filter): Returns the elements for which `pred` is `true`, in order.
- [`VecOps::fold`](/packages/stdlib/reference/collections/vec/VecOps/fold): Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc, x)` for each `x`.
- [`VecOps::enumerate`](/packages/stdlib/reference/collections/vec/VecOps/enumerate): Returns `(index, element)` pairs, so `for (i, x) in xs.enumerate()` works.
- [`VecOps::any`](/packages/stdlib/reference/collections/vec/VecOps/any): Returns `true` when `pred` holds for some element (`false` when empty).
- [`VecOps::all`](/packages/stdlib/reference/collections/vec/VecOps/all): Returns `true` when `pred` holds for every element (`true` when empty).
- [`VecOps::count`](/packages/stdlib/reference/collections/vec/VecOps/count): Returns how many elements `pred` holds for.
