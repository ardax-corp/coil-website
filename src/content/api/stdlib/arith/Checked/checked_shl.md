---
slug: "stdlib/arith/Checked/checked_shl"
package: "stdlib"
title: "Checked::checked_shl"
description: "a << n, or None when n is outside 0..=63."
module: "arith"
kind: "method"
name: "checked_shl"
parent: "Checked"
signature: "fn checked_shl(S a, int n) -> Option<S>"
import: "use arith::{Checked};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.hy#L57"
order: 7
---

`a << n`, or `None` when `n` is outside `0..=63`.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `n` | `int` |

## Returns

`Option<S>`

## See also

- [`Checked`](/packages/stdlib/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Checked::checked_add`](/packages/stdlib/reference/arith/Checked/checked_add): `a + b`, or `None` when it does not fit.
- [`Checked::checked_sub`](/packages/stdlib/reference/arith/Checked/checked_sub): `a - b`, or `None` when it does not fit.
- [`Checked::checked_mul`](/packages/stdlib/reference/arith/Checked/checked_mul): `a * b`, or `None` when it does not fit.
- [`Checked::checked_div`](/packages/stdlib/reference/arith/Checked/checked_div): `a / b`, or `None` when `b` is zero or the quotient does not fit.
- [`Checked::checked_rem`](/packages/stdlib/reference/arith/Checked/checked_rem): `a % b`, or `None` when `b` is zero.
- [`Checked::checked_neg`](/packages/stdlib/reference/arith/Checked/checked_neg): `-a`, or `None` when it does not fit.
- [`Checked::checked_pow`](/packages/stdlib/reference/arith/Checked/checked_pow): `a ** exp`, or `None` when it does not fit or `exp` is negative.
