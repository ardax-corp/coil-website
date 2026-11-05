---
slug: "stdlib/collections/vec/VecSum/sum"
package: "stdlib"
title: "VecSum::sum"
description: "Returns the sum of the elements (overflow traps, as + does)."
module: "collections::vec"
kind: "method"
name: "sum"
parent: "VecSum"
signature: "fn sum(V xs) -> Item"
import: "use collections::vec::{VecSum};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/vec.coil#L475"
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

- [`VecSum`](/packages/stdlib/reference/collections/vec/VecSum): `xs.sum()` on `Vec<int>` and `Vec<float>`; an empty vector sums to zero.
