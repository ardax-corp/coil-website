---
slug: "stdlib/arith/Overflowing/overflowing_shl"
package: "stdlib"
title: "Overflowing::overflowing_shl"
description: "a << (n & 63), and whether n was outside 0..=63."
module: "arith"
kind: "method"
name: "overflowing_shl"
parent: "Overflowing"
signature: "fn overflowing_shl(S a, int n) -> (S, bool)"
import: "use arith::{Overflowing};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/arith.hy#L159"
order: 5
---

`a << (n & 63)`, and whether `n` was outside `0..=63`.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `n` | `int` |

## Returns

`(S, bool)`

## See also

- [`Overflowing`](/packages/stdlib/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
- [`Overflowing::overflowing_add`](/packages/stdlib/reference/arith/Overflowing/overflowing_add): The wrapped `a + b`, and whether it wrapped.
- [`Overflowing::overflowing_sub`](/packages/stdlib/reference/arith/Overflowing/overflowing_sub): The wrapped `a - b`, and whether it wrapped.
- [`Overflowing::overflowing_mul`](/packages/stdlib/reference/arith/Overflowing/overflowing_mul): The wrapped `a * b`, and whether it wrapped.
- [`Overflowing::overflowing_neg`](/packages/stdlib/reference/arith/Overflowing/overflowing_neg): The wrapped `-a`, and whether it wrapped.
- [`Overflowing::overflowing_pow`](/packages/stdlib/reference/arith/Overflowing/overflowing_pow): The wrapped `a ** exp`, and whether it wrapped.
- [`Overflowing::overflowing_shr`](/packages/stdlib/reference/arith/Overflowing/overflowing_shr): `a >> (n & 63)`, and whether `n` was outside `0..=63`.
