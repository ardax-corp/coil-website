---
slug: "arith/Checked/checked_neg"
title: "Checked::checked_neg"
description: "-a, or None when it does not fit."
module: "arith"
kind: "method"
name: "checked_neg"
parent: "Checked"
signature: "fn checked_neg(S a) -> Option<S>"
import: "use arith::{Checked};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/arith.hy#L51"
order: 5
---

`-a`, or `None` when it does not fit.

## Parameters

| Name | Type |
|------|------|
| `a` | `S` |

## Returns

`Option<S>`

## See also

- [`Checked`](/docs/reference/arith/Checked): Integer arithmetic that returns None instead of panicking when the result does not fit.
- [`Checked::checked_add`](/docs/reference/arith/Checked/checked_add): a + b, or None when it does not fit.
- [`Checked::checked_sub`](/docs/reference/arith/Checked/checked_sub): a - b, or None when it does not fit.
- [`Checked::checked_mul`](/docs/reference/arith/Checked/checked_mul): a * b, or None when it does not fit.
- [`Checked::checked_div`](/docs/reference/arith/Checked/checked_div): a / b, or None when b is zero or the quotient does not fit.
- [`Checked::checked_rem`](/docs/reference/arith/Checked/checked_rem): a % b, or None when b is zero.
- [`Checked::checked_pow`](/docs/reference/arith/Checked/checked_pow): a ** exp, or None when it does not fit or exp is negative.
- [`Checked::checked_shl`](/docs/reference/arith/Checked/checked_shl): a << n, or None when n is outside 0..=63.
