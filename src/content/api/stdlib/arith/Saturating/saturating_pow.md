---
slug: "stdlib/arith/Saturating/saturating_pow"
package: "stdlib"
title: "Saturating::saturating_pow"
description: "a ** exp clamped to the type's range. Panics with negative exponent when exp < 0, like **."
module: "arith"
kind: "method"
name: "saturating_pow"
parent: "Saturating"
signature: "fn saturating_pow(S a, int exp) -> S"
import: "use arith::{Saturating};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/arith.hy#L124"
order: 3
---

`a ** exp` clamped to the type's range. Panics with `negative exponent` when `exp < 0`, like `**`.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `exp` | `int` |

## Returns

`S`

## See also

- [`Saturating`](/packages/stdlib/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Saturating::saturating_add`](/packages/stdlib/reference/arith/Saturating/saturating_add): `a + b` clamped to the type's range.
- [`Saturating::saturating_sub`](/packages/stdlib/reference/arith/Saturating/saturating_sub): `a - b` clamped to the type's range.
- [`Saturating::saturating_mul`](/packages/stdlib/reference/arith/Saturating/saturating_mul): `a * b` clamped to the type's range.
