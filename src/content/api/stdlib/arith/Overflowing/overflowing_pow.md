---
slug: "stdlib/arith/Overflowing/overflowing_pow"
package: "stdlib"
title: "Overflowing::overflowing_pow"
description: "The wrapped a ** exp, and whether it wrapped. Panics with negative exponent when exp < 0, like **."
module: "arith"
kind: "method"
name: "overflowing_pow"
parent: "Overflowing"
signature: "fn overflowing_pow(S a, int exp) -> (S, bool)"
import: "use arith::{Overflowing};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/arith.hy#L156"
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

- [`Overflowing`](/packages/stdlib/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
- [`Overflowing::overflowing_add`](/packages/stdlib/reference/arith/Overflowing/overflowing_add): The wrapped `a + b`, and whether it wrapped.
- [`Overflowing::overflowing_sub`](/packages/stdlib/reference/arith/Overflowing/overflowing_sub): The wrapped `a - b`, and whether it wrapped.
- [`Overflowing::overflowing_mul`](/packages/stdlib/reference/arith/Overflowing/overflowing_mul): The wrapped `a * b`, and whether it wrapped.
- [`Overflowing::overflowing_neg`](/packages/stdlib/reference/arith/Overflowing/overflowing_neg): The wrapped `-a`, and whether it wrapped.
- [`Overflowing::overflowing_shl`](/packages/stdlib/reference/arith/Overflowing/overflowing_shl): `a << (n & 63)`, and whether `n` was outside `0..=63`.
- [`Overflowing::overflowing_shr`](/packages/stdlib/reference/arith/Overflowing/overflowing_shr): `a >> (n & 63)`, and whether `n` was outside `0..=63`.
