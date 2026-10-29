---
slug: "collections/vec/VecEq/index_of"
title: "VecEq::index_of"
description: "Returns the index of the first needle in xs, or None."
module: "collections::vec"
kind: "method"
name: "index_of"
parent: "VecEq"
signature: "fn index_of(V xs, Item needle) -> Option<int>"
import: "use collections::vec::{VecEq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/vec.hy#L328"
order: 1
---

Returns the index of the first `needle` in `xs`, or `None`.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `needle` | `Item` |

## Returns

`Option<int>`

## See also

- [`VecEq`](/docs/reference/collections/vec/VecEq): Methods on a `Vec<T>` whose elements are [`Eq`].
- [`VecEq::contains`](/docs/reference/collections/vec/VecEq/contains): Returns `true` when `needle` is in `xs`.
- [`VecEq::dedup`](/docs/reference/collections/vec/VecEq/dedup): Returns `xs` with runs of equal neighbours collapsed to one value.
