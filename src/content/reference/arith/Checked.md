---
slug: "arith/Checked"
title: "Checked"
description: "Integer arithmetic that returns None instead of panicking when the result does not fit."
module: "arith"
kind: "trait"
name: "Checked"
signature: "trait Checked<S>"
import: "use arith::{Checked};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/arith.hy#L34"
order: 0
---

Integer arithmetic that returns `None` instead of panicking when the result does not fit.

Implemented for [`int`](/docs/reference/types/int). Call the methods on a value: `a.checked_add(b)`.

## Required methods

| Name | Description |
|------|-------------|
| [`checked_add`](/docs/reference/arith/Checked/checked_add) | `a + b`, or `None` when it does not fit. |
| [`checked_sub`](/docs/reference/arith/Checked/checked_sub) | `a - b`, or `None` when it does not fit. |
| [`checked_mul`](/docs/reference/arith/Checked/checked_mul) | `a * b`, or `None` when it does not fit. |
| [`checked_div`](/docs/reference/arith/Checked/checked_div) | `a / b`, or `None` when `b` is zero or the quotient does not fit. |
| [`checked_rem`](/docs/reference/arith/Checked/checked_rem) | `a % b`, or `None` when `b` is zero. |
| [`checked_neg`](/docs/reference/arith/Checked/checked_neg) | `-a`, or `None` when it does not fit. |
| [`checked_pow`](/docs/reference/arith/Checked/checked_pow) | `a ** exp`, or `None` when it does not fit or `exp` is negative. |
| [`checked_shl`](/docs/reference/arith/Checked/checked_shl) | `a << n`, or `None` when `n` is outside `0..=63`. |
| [`checked_shr`](/docs/reference/arith/Checked/checked_shr) | `a >> n`, or `None` when `n` is outside `0..=63`. |

## Examples

```coil
use arith::{Checked, INT_MAX};
use tests::assert;
assert!((5.checked_add(3) ?? 0) == 8);
assert!(INT_MAX.checked_add(1).is_none());
assert!(7.checked_div(0).is_none());
assert!(3.checked_pow(40).is_none());
```

## See also

- [`int`](/docs/reference/types/int)
- [`Wrapping`](/docs/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Saturating`](/docs/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Overflowing`](/docs/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
