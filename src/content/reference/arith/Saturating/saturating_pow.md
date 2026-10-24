---
slug: "arith/Saturating/saturating_pow"
title: "Saturating::saturating_pow"
description: "a ** exp clamped to the type's range. Panics with negative exponent when exp < 0, like **."
module: "arith"
kind: "method"
name: "saturating_pow"
parent: "Saturating"
signature: "fn saturating_pow(S a, int exp) -> S"
import: "use arith::{Saturating};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/arith.hy#L124"
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

- [`Saturating`](/docs/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Saturating::saturating_add`](/docs/reference/arith/Saturating/saturating_add): `a + b` clamped to the type's range.
- [`Saturating::saturating_sub`](/docs/reference/arith/Saturating/saturating_sub): `a - b` clamped to the type's range.
- [`Saturating::saturating_mul`](/docs/reference/arith/Saturating/saturating_mul): `a * b` clamped to the type's range.
