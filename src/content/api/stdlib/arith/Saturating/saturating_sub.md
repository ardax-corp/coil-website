---
slug: "stdlib/arith/Saturating/saturating_sub"
package: "stdlib"
title: "Saturating::saturating_sub"
description: "a - b clamped to the type's range."
module: "arith"
kind: "method"
name: "saturating_sub"
parent: "Saturating"
signature: "fn saturating_sub(S a, S b) -> S"
import: "use arith::{Saturating};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.hy#L117"
order: 1
---

`a - b` clamped to the type's range.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `b` | `S` |

## Returns

`S`

## See also

- [`Saturating`](/packages/stdlib/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Saturating::saturating_add`](/packages/stdlib/reference/arith/Saturating/saturating_add): `a + b` clamped to the type's range.
- [`Saturating::saturating_mul`](/packages/stdlib/reference/arith/Saturating/saturating_mul): `a * b` clamped to the type's range.
- [`Saturating::saturating_pow`](/packages/stdlib/reference/arith/Saturating/saturating_pow): `a ** exp` clamped to the type's range.
