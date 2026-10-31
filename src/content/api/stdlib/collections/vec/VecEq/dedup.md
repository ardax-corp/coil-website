---
slug: "stdlib/collections/vec/VecEq/dedup"
package: "stdlib"
title: "VecEq::dedup"
description: "Returns xs with runs of equal neighbours collapsed to one value."
module: "collections::vec"
kind: "method"
name: "dedup"
parent: "VecEq"
signature: "fn dedup(V xs) -> Vec<Item>"
import: "use collections::vec::{VecEq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/vec.coil#L333"
order: 2
---

Returns `xs` with runs of equal neighbours collapsed to one value.

Only adjacent duplicates are removed; sort first to remove all of them.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |

## Returns

`Vec<Item>`

## See also

- [`VecEq`](/packages/stdlib/reference/collections/vec/VecEq): Methods on a `Vec<T>` whose elements are [`Eq`].
- [`VecEq::contains`](/packages/stdlib/reference/collections/vec/VecEq/contains): Returns `true` when `needle` is in `xs`.
- [`VecEq::index_of`](/packages/stdlib/reference/collections/vec/VecEq/index_of): Returns the index of the first `needle` in `xs`, or `None`.
