---
slug: "stdlib/arith/Wrapping/wrapping_add"
package: "stdlib"
title: "Wrapping::wrapping_add"
description: "a + b modulo 2^64."
module: "arith"
kind: "method"
name: "wrapping_add"
parent: "Wrapping"
signature: "fn wrapping_add(S a, S b) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.coil#L77"
order: 0
---

`a + b` modulo 2^64.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `b` | `S` |

## Returns

`S`

## See also

- [`Wrapping`](/packages/stdlib/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Wrapping::wrapping_sub`](/packages/stdlib/reference/arith/Wrapping/wrapping_sub): `a - b` modulo 2^64.
- [`Wrapping::wrapping_mul`](/packages/stdlib/reference/arith/Wrapping/wrapping_mul): `a * b` modulo 2^64.
- [`Wrapping::wrapping_neg`](/packages/stdlib/reference/arith/Wrapping/wrapping_neg): `-a` modulo 2^64 (`INT_MIN` stays `INT_MIN`).
- [`Wrapping::wrapping_pow`](/packages/stdlib/reference/arith/Wrapping/wrapping_pow): `a ** exp` modulo 2^64.
- [`Wrapping::wrapping_shl`](/packages/stdlib/reference/arith/Wrapping/wrapping_shl): `a << (n & 63)`: the count is taken modulo 64.
- [`Wrapping::wrapping_shr`](/packages/stdlib/reference/arith/Wrapping/wrapping_shr): `a >> (n & 63)`: the count is taken modulo 64.
