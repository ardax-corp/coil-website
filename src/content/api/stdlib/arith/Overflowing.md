---
slug: "stdlib/arith/Overflowing"
package: "stdlib"
title: "Overflowing"
description: "Integer arithmetic that returns the wrapped result together with whether it wrapped."
module: "arith"
kind: "trait"
name: "Overflowing"
signature: "trait Overflowing<S>"
import: "use arith::{Overflowing};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/arith.hy#L141"
order: 3
---

Integer arithmetic that returns the wrapped result together with whether it wrapped.

Implemented for [`int`](/docs/reference/types/int).

## Required methods

| Name | Description |
|------|-------------|
| [`overflowing_add`](/packages/stdlib/reference/arith/Overflowing/overflowing_add) | The wrapped `a + b`, and whether it wrapped. |
| [`overflowing_sub`](/packages/stdlib/reference/arith/Overflowing/overflowing_sub) | The wrapped `a - b`, and whether it wrapped. |
| [`overflowing_mul`](/packages/stdlib/reference/arith/Overflowing/overflowing_mul) | The wrapped `a * b`, and whether it wrapped. |
| [`overflowing_neg`](/packages/stdlib/reference/arith/Overflowing/overflowing_neg) | The wrapped `-a`, and whether it wrapped. |
| [`overflowing_pow`](/packages/stdlib/reference/arith/Overflowing/overflowing_pow) | The wrapped `a ** exp`, and whether it wrapped. |
| [`overflowing_shl`](/packages/stdlib/reference/arith/Overflowing/overflowing_shl) | `a << (n & 63)`, and whether `n` was outside `0..=63`. |
| [`overflowing_shr`](/packages/stdlib/reference/arith/Overflowing/overflowing_shr) | `a >> (n & 63)`, and whether `n` was outside `0..=63`. |

## Examples

```coil
use arith::{Overflowing, INT_MAX, INT_MIN};
use tests::assert;
let (v, wrapped) = INT_MAX.overflowing_add(1);
assert!(v == INT_MIN && wrapped);
let (w, again) = 2.overflowing_mul(3);
assert!(w == 6 && !again);
```

## See also

- [`int`](/docs/reference/types/int)
- [`Checked`](/packages/stdlib/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Wrapping`](/packages/stdlib/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Saturating`](/packages/stdlib/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
