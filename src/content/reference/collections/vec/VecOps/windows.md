---
slug: "collections/vec/VecOps/windows"
title: "VecOps::windows"
description: "Overlapping sliding windows of exactly size. Empty if size <= 0 or size > len."
module: "collections::vec"
kind: "method"
name: "windows"
parent: "VecOps"
signature: "fn windows(V xs, int size) -> Vec<Vec<Item>>"
import: "use collections::vec::{VecOps};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/vec.hy#L89"
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

- [`VecOps`](/docs/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecOps::map`](/docs/reference/collections/vec/VecOps/map): Returns a new vector with `mapper` applied to each element, in order.
- [`VecOps::filter`](/docs/reference/collections/vec/VecOps/filter): Returns the elements for which `pred` is `true`, in order.
- [`VecOps::fold`](/docs/reference/collections/vec/VecOps/fold): Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc, x)` for each `x`.
- [`VecOps::enumerate`](/docs/reference/collections/vec/VecOps/enumerate): Returns `(index, element)` pairs, so `for (i, x) in xs.enumerate()` works.
- [`VecOps::zip`](/docs/reference/collections/vec/VecOps/zip): Returns `(xs[i], ys[i])` pairs up to the shorter of the two vectors.
- [`VecOps::any`](/docs/reference/collections/vec/VecOps/any): Returns `true` when `pred` holds for some element (`false` when empty).
- [`VecOps::all`](/docs/reference/collections/vec/VecOps/all): Returns `true` when `pred` holds for every element (`true` when empty).
