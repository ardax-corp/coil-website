---
slug: "stdlib/collections/vec/VecOps/windows"
package: "stdlib"
title: "VecOps::windows"
description: "Overlapping sliding windows of exactly size. Empty if size <= 0 or size > len."
module: "collections::vec"
kind: "method"
name: "windows"
parent: "VecOps"
signature: "fn windows(V xs, int size) -> Vec<Vec<Item>>"
import: "use collections::vec::{VecOps};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/vec.hy#L89"
order: 14
---

Overlapping sliding windows of exactly `size`. Empty if `size <= 0` or `size > len`.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `size` | `int` |

## Returns

`Vec<Vec<Item>>`

## See also

- [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecOps::map`](/packages/stdlib/reference/collections/vec/VecOps/map): Returns a new vector with `mapper` applied to each element, in order.
- [`VecOps::filter`](/packages/stdlib/reference/collections/vec/VecOps/filter): Returns the elements for which `pred` is `true`, in order.
- [`VecOps::fold`](/packages/stdlib/reference/collections/vec/VecOps/fold): Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc, x)` for each `x`.
- [`VecOps::enumerate`](/packages/stdlib/reference/collections/vec/VecOps/enumerate): Returns `(index, element)` pairs, so `for (i, x) in xs.enumerate()` works.
- [`VecOps::zip`](/packages/stdlib/reference/collections/vec/VecOps/zip): Returns `(xs[i], ys[i])` pairs up to the shorter of the two vectors.
- [`VecOps::any`](/packages/stdlib/reference/collections/vec/VecOps/any): Returns `true` when `pred` holds for some element (`false` when empty).
- [`VecOps::all`](/packages/stdlib/reference/collections/vec/VecOps/all): Returns `true` when `pred` holds for every element (`true` when empty).
