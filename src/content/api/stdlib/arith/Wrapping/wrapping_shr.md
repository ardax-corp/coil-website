---
slug: "stdlib/arith/Wrapping/wrapping_shr"
package: "stdlib"
title: "Wrapping::wrapping_shr"
description: "a >> (n & 63): the count is taken modulo 64."
module: "arith"
kind: "method"
name: "wrapping_shr"
parent: "Wrapping"
signature: "fn wrapping_shr(S a, int n) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/arith.hy#L96"
order: 6
---

`a >> (n & 63)`: the count is taken modulo 64.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `n` | `int` |

## Returns

`S`

## See also

- [`Wrapping`](/packages/stdlib/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Wrapping::wrapping_add`](/packages/stdlib/reference/arith/Wrapping/wrapping_add): `a + b` modulo 2^64.
- [`Wrapping::wrapping_sub`](/packages/stdlib/reference/arith/Wrapping/wrapping_sub): `a - b` modulo 2^64.
- [`Wrapping::wrapping_mul`](/packages/stdlib/reference/arith/Wrapping/wrapping_mul): `a * b` modulo 2^64.
- [`Wrapping::wrapping_neg`](/packages/stdlib/reference/arith/Wrapping/wrapping_neg): `-a` modulo 2^64 (`INT_MIN` stays `INT_MIN`).
- [`Wrapping::wrapping_pow`](/packages/stdlib/reference/arith/Wrapping/wrapping_pow): `a ** exp` modulo 2^64.
- [`Wrapping::wrapping_shl`](/packages/stdlib/reference/arith/Wrapping/wrapping_shl): `a << (n & 63)`: the count is taken modulo 64.
