---
slug: "arith/Wrapping/wrapping_mul"
title: "Wrapping::wrapping_mul"
description: "a * b modulo 2^64."
module: "arith"
kind: "method"
name: "wrapping_mul"
parent: "Wrapping"
signature: "fn wrapping_mul(S a, S b) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/arith.hy#L83"
order: 2
---

`a * b` modulo 2^64.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `b` | `S` |

## Returns

`S`

## See also

- [`Wrapping`](/docs/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Wrapping::wrapping_add`](/docs/reference/arith/Wrapping/wrapping_add): a + b modulo 2^64.
- [`Wrapping::wrapping_sub`](/docs/reference/arith/Wrapping/wrapping_sub): a - b modulo 2^64.
- [`Wrapping::wrapping_neg`](/docs/reference/arith/Wrapping/wrapping_neg): -a modulo 2^64 (INT_MIN stays INT_MIN).
- [`Wrapping::wrapping_pow`](/docs/reference/arith/Wrapping/wrapping_pow): a ** exp modulo 2^64.
- [`Wrapping::wrapping_shl`](/docs/reference/arith/Wrapping/wrapping_shl): a << (n & 63): the count is taken modulo 64.
- [`Wrapping::wrapping_shr`](/docs/reference/arith/Wrapping/wrapping_shr): a >> (n & 63): the count is taken modulo 64.
