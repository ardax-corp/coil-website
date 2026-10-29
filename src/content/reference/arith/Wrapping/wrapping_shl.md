---
slug: "arith/Wrapping/wrapping_shl"
title: "Wrapping::wrapping_shl"
description: "a << (n & 63): the count is taken modulo 64."
module: "arith"
kind: "method"
name: "wrapping_shl"
parent: "Wrapping"
signature: "fn wrapping_shl(S a, int n) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/arith.hy#L93"
order: 5
---

`a << (n & 63)`: the count is taken modulo 64.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `n` | `int` |

## Returns

`S`

## See also

- [`Wrapping`](/docs/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Wrapping::wrapping_add`](/docs/reference/arith/Wrapping/wrapping_add): `a + b` modulo 2^64.
- [`Wrapping::wrapping_sub`](/docs/reference/arith/Wrapping/wrapping_sub): `a - b` modulo 2^64.
- [`Wrapping::wrapping_mul`](/docs/reference/arith/Wrapping/wrapping_mul): `a * b` modulo 2^64.
- [`Wrapping::wrapping_neg`](/docs/reference/arith/Wrapping/wrapping_neg): `-a` modulo 2^64 (`INT_MIN` stays `INT_MIN`).
- [`Wrapping::wrapping_pow`](/docs/reference/arith/Wrapping/wrapping_pow): `a ** exp` modulo 2^64.
- [`Wrapping::wrapping_shr`](/docs/reference/arith/Wrapping/wrapping_shr): `a >> (n & 63)`: the count is taken modulo 64.
