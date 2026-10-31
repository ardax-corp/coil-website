---
slug: "stdlib/arith/Overflowing/overflowing_shr"
package: "stdlib"
title: "Overflowing::overflowing_shr"
description: "a >> (n & 63), and whether n was outside 0..=63."
module: "arith"
kind: "method"
name: "overflowing_shr"
parent: "Overflowing"
signature: "fn overflowing_shr(S a, int n) -> (S, bool)"
import: "use arith::{Overflowing};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.hy#L162"
order: 6
---

`a >> (n & 63)`, and whether `n` was outside `0..=63`.

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
- [`Overflowing::overflowing_shl`](/packages/stdlib/reference/arith/Overflowing/overflowing_shl): `a << (n & 63)`, and whether `n` was outside `0..=63`.
