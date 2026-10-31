---
slug: "stdlib/arith/Wrapping/wrapping_pow"
package: "stdlib"
title: "Wrapping::wrapping_pow"
description: "a ** exp modulo 2^64. Panics with negative exponent when exp < 0, like **."
module: "arith"
kind: "method"
name: "wrapping_pow"
parent: "Wrapping"
signature: "fn wrapping_pow(S a, int exp) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.coil#L90"
order: 4
---

`a ** exp` modulo 2^64. Panics with `negative exponent` when `exp < 0`, like `**`.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `exp` | `int` |

## Returns

`S`

## See also

- [`Wrapping`](/packages/stdlib/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Wrapping::wrapping_add`](/packages/stdlib/reference/arith/Wrapping/wrapping_add): `a + b` modulo 2^64.
- [`Wrapping::wrapping_sub`](/packages/stdlib/reference/arith/Wrapping/wrapping_sub): `a - b` modulo 2^64.
- [`Wrapping::wrapping_mul`](/packages/stdlib/reference/arith/Wrapping/wrapping_mul): `a * b` modulo 2^64.
- [`Wrapping::wrapping_neg`](/packages/stdlib/reference/arith/Wrapping/wrapping_neg): `-a` modulo 2^64 (`INT_MIN` stays `INT_MIN`).
- [`Wrapping::wrapping_shl`](/packages/stdlib/reference/arith/Wrapping/wrapping_shl): `a << (n & 63)`: the count is taken modulo 64.
- [`Wrapping::wrapping_shr`](/packages/stdlib/reference/arith/Wrapping/wrapping_shr): `a >> (n & 63)`: the count is taken modulo 64.
