---
slug: "stdlib/arith/Checked/checked_add"
package: "stdlib"
title: "Checked::checked_add"
description: "a + b, or None when it does not fit."
module: "arith"
kind: "method"
name: "checked_add"
parent: "Checked"
signature: "fn checked_add(S a, S b) -> Option<S>"
import: "use arith::{Checked};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.coil#L36"
order: 0
---

`a + b`, or `None` when it does not fit.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `b` | `S` |

## Returns

`Option<S>`

## See also

- [`Checked`](/packages/stdlib/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Checked::checked_sub`](/packages/stdlib/reference/arith/Checked/checked_sub): `a - b`, or `None` when it does not fit.
- [`Checked::checked_mul`](/packages/stdlib/reference/arith/Checked/checked_mul): `a * b`, or `None` when it does not fit.
- [`Checked::checked_div`](/packages/stdlib/reference/arith/Checked/checked_div): `a / b`, or `None` when `b` is zero or the quotient does not fit.
- [`Checked::checked_rem`](/packages/stdlib/reference/arith/Checked/checked_rem): `a % b`, or `None` when `b` is zero.
- [`Checked::checked_neg`](/packages/stdlib/reference/arith/Checked/checked_neg): `-a`, or `None` when it does not fit.
- [`Checked::checked_pow`](/packages/stdlib/reference/arith/Checked/checked_pow): `a ** exp`, or `None` when it does not fit or `exp` is negative.
- [`Checked::checked_shl`](/packages/stdlib/reference/arith/Checked/checked_shl): `a << n`, or `None` when `n` is outside `0..=63`.
