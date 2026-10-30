---
slug: "stdlib/collections/vec/VecOrd/max"
package: "stdlib"
title: "VecOrd::max"
description: "Returns the largest element (the first of equal ones), or None when xs is empty."
module: "collections::vec"
kind: "method"
name: "max"
parent: "VecOrd"
signature: "fn max(V xs) -> Option<Item>"
import: "use collections::vec::{VecOrd};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/vec.hy#L398"
order: 1
---

Returns the largest element (the first of equal ones), or `None` when `xs` is empty.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |

## Returns

`Option<Item>`

## See also

- [`VecOrd`](/packages/stdlib/reference/collections/vec/VecOrd): Methods on a `Vec<T>` whose elements are [`Ord`].
- [`VecOrd::min`](/packages/stdlib/reference/collections/vec/VecOrd/min): Returns the smallest element (the first of equal ones), or `None` when `xs` is empty.
- [`VecOrd::binary_search`](/packages/stdlib/reference/collections/vec/VecOrd/binary_search): Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.
