---
slug: "arith/Checked/checked_rem"
title: "Checked::checked_rem"
description: "a % b, or None when b is zero."
module: "arith"
kind: "method"
name: "checked_rem"
parent: "Checked"
signature: "fn checked_rem(S a, S b) -> Option<S>"
import: "use arith::{Checked};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/arith.hy#L48"
order: 4
---

`a % b`, or `None` when `b` is zero.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `b` | `S` |

## Returns

`Option<S>`

## See also

- [`Checked`](/docs/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Checked::checked_add`](/docs/reference/arith/Checked/checked_add): `a + b`, or `None` when it does not fit.
- [`Checked::checked_sub`](/docs/reference/arith/Checked/checked_sub): `a - b`, or `None` when it does not fit.
- [`Checked::checked_mul`](/docs/reference/arith/Checked/checked_mul): `a * b`, or `None` when it does not fit.
- [`Checked::checked_div`](/docs/reference/arith/Checked/checked_div): `a / b`, or `None` when `b` is zero or the quotient does not fit.
- [`Checked::checked_neg`](/docs/reference/arith/Checked/checked_neg): `-a`, or `None` when it does not fit.
- [`Checked::checked_pow`](/docs/reference/arith/Checked/checked_pow): `a ** exp`, or `None` when it does not fit or `exp` is negative.
- [`Checked::checked_shl`](/docs/reference/arith/Checked/checked_shl): `a << n`, or `None` when `n` is outside `0..=63`.
