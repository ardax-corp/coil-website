---
slug: "arith/Checked/checked_pow"
title: "Checked::checked_pow"
description: "a ** exp, or None when it does not fit or exp is negative."
module: "arith"
kind: "method"
name: "checked_pow"
parent: "Checked"
signature: "fn checked_pow(S a, int exp) -> Option<S>"
import: "use arith::{Checked};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/arith.hy#L54"
order: 6
---

`a ** exp`, or `None` when it does not fit or `exp` is negative.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |
| `exp` | `int` |

## Returns

`Option<S>`

## See also

- [`Checked`](/docs/reference/arith/Checked): Integer arithmetic that returns None instead of panicking when the result does not fit.
- [`Checked::checked_add`](/docs/reference/arith/Checked/checked_add): a + b, or None when it does not fit.
- [`Checked::checked_sub`](/docs/reference/arith/Checked/checked_sub): a - b, or None when it does not fit.
- [`Checked::checked_mul`](/docs/reference/arith/Checked/checked_mul): a * b, or None when it does not fit.
- [`Checked::checked_div`](/docs/reference/arith/Checked/checked_div): a / b, or None when b is zero or the quotient does not fit.
- [`Checked::checked_rem`](/docs/reference/arith/Checked/checked_rem): a % b, or None when b is zero.
- [`Checked::checked_neg`](/docs/reference/arith/Checked/checked_neg): -a, or None when it does not fit.
- [`Checked::checked_shl`](/docs/reference/arith/Checked/checked_shl): a << n, or None when n is outside 0..=63.
