---
slug: "arith/Overflowing/overflowing_pow"
title: "Overflowing::overflowing_pow"
description: "The wrapped a ** exp, and whether it wrapped. Panics with negative exponent when exp < 0, like **."
module: "arith"
kind: "method"
name: "overflowing_pow"
parent: "Overflowing"
signature: "fn overflowing_pow(S a, int exp) -> (S, bool)"
import: "use arith::{Overflowing};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/arith.hy#L156"
order: 4
---

The wrapped `a ** exp`, and whether it wrapped. Panics with `negative exponent` when `exp < 0`, like `**`.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `exp` | `int` |

## Returns

`(S, bool)`

## See also

- [`Overflowing`](/docs/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
- [`Overflowing::overflowing_add`](/docs/reference/arith/Overflowing/overflowing_add): The wrapped `a + b`, and whether it wrapped.
- [`Overflowing::overflowing_sub`](/docs/reference/arith/Overflowing/overflowing_sub): The wrapped `a - b`, and whether it wrapped.
- [`Overflowing::overflowing_mul`](/docs/reference/arith/Overflowing/overflowing_mul): The wrapped `a * b`, and whether it wrapped.
- [`Overflowing::overflowing_neg`](/docs/reference/arith/Overflowing/overflowing_neg): The wrapped `-a`, and whether it wrapped.
- [`Overflowing::overflowing_shl`](/docs/reference/arith/Overflowing/overflowing_shl): `a << (n & 63)`, and whether `n` was outside `0..=63`.
- [`Overflowing::overflowing_shr`](/docs/reference/arith/Overflowing/overflowing_shr): `a >> (n & 63)`, and whether `n` was outside `0..=63`.
