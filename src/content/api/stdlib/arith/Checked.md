---
slug: "stdlib/arith/Checked"
package: "stdlib"
title: "Checked"
description: "Integer arithmetic that returns None instead of panicking when the result does not fit."
module: "arith"
kind: "trait"
name: "Checked"
signature: "trait Checked<S>"
import: "use arith::{Checked};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.coil#L34"
order: 0
---

Integer arithmetic that returns `None` instead of panicking when the result does not fit.

Implemented for [`int`](/docs/reference/types/int). Call the methods on a value: `a.checked_add(b)`.

## Required methods

| Name | Description |
|------|-------------|
| [`checked_add`](/packages/stdlib/reference/arith/Checked/checked_add) | `a + b`, or `None` when it does not fit. |
| [`checked_sub`](/packages/stdlib/reference/arith/Checked/checked_sub) | `a - b`, or `None` when it does not fit. |
| [`checked_mul`](/packages/stdlib/reference/arith/Checked/checked_mul) | `a * b`, or `None` when it does not fit. |
| [`checked_div`](/packages/stdlib/reference/arith/Checked/checked_div) | `a / b`, or `None` when `b` is zero or the quotient does not fit. |
| [`checked_rem`](/packages/stdlib/reference/arith/Checked/checked_rem) | `a % b`, or `None` when `b` is zero. |
| [`checked_neg`](/packages/stdlib/reference/arith/Checked/checked_neg) | `-a`, or `None` when it does not fit. |
| [`checked_pow`](/packages/stdlib/reference/arith/Checked/checked_pow) | `a ** exp`, or `None` when it does not fit or `exp` is negative. |
| [`checked_shl`](/packages/stdlib/reference/arith/Checked/checked_shl) | `a << n`, or `None` when `n` is outside `0..=63`. |
| [`checked_shr`](/packages/stdlib/reference/arith/Checked/checked_shr) | `a >> n`, or `None` when `n` is outside `0..=63`. |

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
- [`Wrapping`](/packages/stdlib/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Saturating`](/packages/stdlib/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Overflowing`](/packages/stdlib/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
