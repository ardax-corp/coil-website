---
slug: "stdlib/arith/Saturating/saturating_add"
package: "stdlib"
title: "Saturating::saturating_add"
description: "a + b clamped to the type's range."
module: "arith"
kind: "method"
name: "saturating_add"
parent: "Saturating"
signature: "fn saturating_add(S a, S b) -> S"
import: "use arith::{Saturating};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/arith.hy#L114"
order: 0
---

`a + b` clamped to the type's range.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `b` | `S` |

## Returns

`S`

## See also

- [`Saturating`](/packages/stdlib/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Saturating::saturating_sub`](/packages/stdlib/reference/arith/Saturating/saturating_sub): `a - b` clamped to the type's range.
- [`Saturating::saturating_mul`](/packages/stdlib/reference/arith/Saturating/saturating_mul): `a * b` clamped to the type's range.
- [`Saturating::saturating_pow`](/packages/stdlib/reference/arith/Saturating/saturating_pow): `a ** exp` clamped to the type's range.
