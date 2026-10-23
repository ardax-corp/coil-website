---
slug: "arith/Overflowing"
title: "Overflowing"
description: "Integer arithmetic that returns the wrapped result together with whether it wrapped."
module: "arith"
kind: "trait"
name: "Overflowing"
signature: "trait Overflowing<S>"
import: "use arith::{Overflowing};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/arith.hy#L141"
order: 3
---

Integer arithmetic that returns the wrapped result together with whether it wrapped.

Implemented for [`int`](/docs/reference/types/int).

## Required methods

| Name | Description |
|------|-------------|
| [`overflowing_add`](/docs/reference/arith/Overflowing/overflowing_add) | The wrapped `a + b`, and whether it wrapped. |
| [`overflowing_sub`](/docs/reference/arith/Overflowing/overflowing_sub) | The wrapped `a - b`, and whether it wrapped. |
| [`overflowing_mul`](/docs/reference/arith/Overflowing/overflowing_mul) | The wrapped `a * b`, and whether it wrapped. |
| [`overflowing_neg`](/docs/reference/arith/Overflowing/overflowing_neg) | The wrapped `-a`, and whether it wrapped. |
| [`overflowing_pow`](/docs/reference/arith/Overflowing/overflowing_pow) | The wrapped `a ** exp`, and whether it wrapped. |
| [`overflowing_shl`](/docs/reference/arith/Overflowing/overflowing_shl) | `a << (n & 63)`, and whether `n` was outside `0..=63`. |
| [`overflowing_shr`](/docs/reference/arith/Overflowing/overflowing_shr) | `a >> (n & 63)`, and whether `n` was outside `0..=63`. |

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
- [`Checked`](/docs/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Wrapping`](/docs/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Saturating`](/docs/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
