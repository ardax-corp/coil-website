---
slug: "arith/Wrapping/wrapping_pow"
title: "Wrapping::wrapping_pow"
description: "a ** exp modulo 2^64. Panics with negative exponent when exp < 0, like **."
module: "arith"
kind: "method"
name: "wrapping_pow"
parent: "Wrapping"
signature: "fn wrapping_pow(S a, int exp) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/arith.hy#L90"
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

- [`Wrapping`](/docs/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Wrapping::wrapping_add`](/docs/reference/arith/Wrapping/wrapping_add): a + b modulo 2^64.
- [`Wrapping::wrapping_sub`](/docs/reference/arith/Wrapping/wrapping_sub): a - b modulo 2^64.
- [`Wrapping::wrapping_mul`](/docs/reference/arith/Wrapping/wrapping_mul): a * b modulo 2^64.
- [`Wrapping::wrapping_neg`](/docs/reference/arith/Wrapping/wrapping_neg): -a modulo 2^64 (INT_MIN stays INT_MIN).
- [`Wrapping::wrapping_shl`](/docs/reference/arith/Wrapping/wrapping_shl): a << (n & 63): the count is taken modulo 64.
- [`Wrapping::wrapping_shr`](/docs/reference/arith/Wrapping/wrapping_shr): a >> (n & 63): the count is taken modulo 64.
