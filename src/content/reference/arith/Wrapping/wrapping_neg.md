---
slug: "arith/Wrapping/wrapping_neg"
title: "Wrapping::wrapping_neg"
description: "-a modulo 2^64 (INT_MIN stays INT_MIN)."
module: "arith"
kind: "method"
name: "wrapping_neg"
parent: "Wrapping"
signature: "fn wrapping_neg(S a) -> S"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/arith.hy#L86"
order: 3
---

`-a` modulo 2^64 ([`INT_MIN`](/docs/reference/arith/INT_MIN) stays [`INT_MIN`](/docs/reference/arith/INT_MIN)).

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |

## Returns

`S`

## See also

- [`arith::INT_MIN`](/docs/reference/arith/INT_MIN)
- [`Wrapping`](/docs/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Wrapping::wrapping_add`](/docs/reference/arith/Wrapping/wrapping_add): `a + b` modulo 2^64.
- [`Wrapping::wrapping_sub`](/docs/reference/arith/Wrapping/wrapping_sub): `a - b` modulo 2^64.
- [`Wrapping::wrapping_mul`](/docs/reference/arith/Wrapping/wrapping_mul): `a * b` modulo 2^64.
- [`Wrapping::wrapping_pow`](/docs/reference/arith/Wrapping/wrapping_pow): `a ** exp` modulo 2^64.
- [`Wrapping::wrapping_shl`](/docs/reference/arith/Wrapping/wrapping_shl): `a << (n & 63)`: the count is taken modulo 64.
- [`Wrapping::wrapping_shr`](/docs/reference/arith/Wrapping/wrapping_shr): `a >> (n & 63)`: the count is taken modulo 64.
