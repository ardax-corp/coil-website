---
slug: "collections/vec/VecOrd/binary_search"
title: "VecOrd::binary_search"
description: "Finds needle in the ascending vector xs by halving, and returns an index holding it."
module: "collections::vec"
kind: "method"
name: "binary_search"
parent: "VecOrd"
signature: "fn binary_search(V xs, Item needle) -> Option<int>"
import: "use collections::vec::{VecOrd};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/vec.hy#L404"
order: 2
---

Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.

`xs` must be sorted ([`collections::sort`](/docs/reference/collections/sort) does that); on an unsorted vector the
result is unreliable. With duplicates, any matching index may be returned.

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |
| `needle` | `Item` |

## Returns

`Option<int>`

## See also

- [`collections::sort`](/docs/reference/collections/sort)
- [`VecOrd`](/docs/reference/collections/vec/VecOrd): Methods on a `Vec<T>` whose elements are [`Ord`].
- [`VecOrd::min`](/docs/reference/collections/vec/VecOrd/min): Returns the smallest element (the first of equal ones), or `None` when `xs` is empty.
- [`VecOrd::max`](/docs/reference/collections/vec/VecOrd/max): Returns the largest element (the first of equal ones), or `None` when `xs` is empty.
