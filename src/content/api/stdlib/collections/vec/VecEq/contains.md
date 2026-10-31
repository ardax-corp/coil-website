---
slug: "stdlib/collections/vec/VecEq/contains"
package: "stdlib"
title: "VecEq::contains"
description: "Returns true when needle is in xs."
module: "collections::vec"
kind: "method"
name: "contains"
parent: "VecEq"
signature: "fn contains(V xs, Item needle) -> bool"
import: "use collections::vec::{VecEq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/vec.hy#L325"
order: 0
---

Returns `true` when `needle` is in `xs`.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `needle` | `Item` |

## Returns

`bool`

## See also

- [`VecEq`](/packages/stdlib/reference/collections/vec/VecEq): Methods on a `Vec<T>` whose elements are [`Eq`].
- [`VecEq::index_of`](/packages/stdlib/reference/collections/vec/VecEq/index_of): Returns the index of the first `needle` in `xs`, or `None`.
- [`VecEq::dedup`](/packages/stdlib/reference/collections/vec/VecEq/dedup): Returns `xs` with runs of equal neighbours collapsed to one value.
