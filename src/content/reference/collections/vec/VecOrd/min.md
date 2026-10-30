---
slug: "collections/vec/VecOrd/min"
title: "VecOrd::min"
description: "Returns the smallest element (the first of equal ones), or None when xs is empty."
module: "collections::vec"
kind: "method"
name: "min"
parent: "VecOrd"
signature: "fn min(V xs) -> Option<Item>"
import: "use collections::vec::{VecOrd};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/collections/vec.hy#L395"
order: 0
---

Returns the smallest element (the first of equal ones), or `None` when `xs` is empty.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |

## Returns

`Option<Item>`

## See also

- [`VecOrd`](/docs/reference/collections/vec/VecOrd): Methods on a `Vec<T>` whose elements are [`Ord`].
- [`VecOrd::max`](/docs/reference/collections/vec/VecOrd/max): Returns the largest element (the first of equal ones), or `None` when `xs` is empty.
- [`VecOrd::binary_search`](/docs/reference/collections/vec/VecOrd/binary_search): Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.
