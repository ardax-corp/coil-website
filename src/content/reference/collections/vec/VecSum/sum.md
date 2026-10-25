---
slug: "collections/vec/VecSum/sum"
title: "VecSum::sum"
description: "Returns the sum of the elements (overflow traps, as + does)."
module: "collections::vec"
kind: "method"
name: "sum"
parent: "VecSum"
signature: "fn sum(V xs) -> Item"
import: "use collections::vec::{VecSum};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/vec.hy#L474"
order: 0
---

Returns the sum of the elements (overflow traps, as `+` does).

## Parameters

| Name | Type |
|------|------|
| `xs` | `V` |

## Returns

`Item`

## See also

- [`VecSum`](/docs/reference/collections/vec/VecSum): `xs.sum()` on `Vec<int>` and `Vec<float>`; an empty vector sums to zero.
