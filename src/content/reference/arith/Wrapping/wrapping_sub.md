---
slug: "arith/Wrapping/wrapping_sub"
title: "Wrapping::wrapping_sub"
description: "a - b modulo 2^64."
module: "arith"
kind: "method"
name: "wrapping_sub"
parent: "Wrapping"
signature: "fn wrapping_sub(S a, S b) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/arith.hy#L80"
order: 1
---

`a - b` modulo 2^64.

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
- [`Wrapping::wrapping_mul`](/docs/reference/arith/Wrapping/wrapping_mul): a * b modulo 2^64.
- [`Wrapping::wrapping_neg`](/docs/reference/arith/Wrapping/wrapping_neg): -a modulo 2^64 (INT_MIN stays INT_MIN).
- [`Wrapping::wrapping_pow`](/docs/reference/arith/Wrapping/wrapping_pow): a ** exp modulo 2^64.
- [`Wrapping::wrapping_shl`](/docs/reference/arith/Wrapping/wrapping_shl): a << (n & 63): the count is taken modulo 64.
- [`Wrapping::wrapping_shr`](/docs/reference/arith/Wrapping/wrapping_shr): a >> (n & 63): the count is taken modulo 64.
