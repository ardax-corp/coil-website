---
slug: "stdlib/arith/Saturating"
package: "stdlib"
title: "Saturating"
description: "Integer arithmetic that clamps to INT_MIN / INT_MAX instead of panicking."
module: "arith"
kind: "trait"
name: "Saturating"
signature: "trait Saturating<S>"
import: "use arith::{Saturating};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.coil#L112"
order: 2
---

Integer arithmetic that clamps to [`INT_MIN`](/packages/stdlib/reference/arith/INT_MIN) / [`INT_MAX`](/packages/stdlib/reference/arith/INT_MAX) instead of panicking.

Implemented for [`int`](/docs/reference/types/int).

## Required methods

| Name | Description |
|------|-------------|
| [`saturating_add`](/packages/stdlib/reference/arith/Saturating/saturating_add) | `a + b` clamped to the type's range. |
| [`saturating_sub`](/packages/stdlib/reference/arith/Saturating/saturating_sub) | `a - b` clamped to the type's range. |
| [`saturating_mul`](/packages/stdlib/reference/arith/Saturating/saturating_mul) | `a * b` clamped to the type's range. |
| [`saturating_pow`](/packages/stdlib/reference/arith/Saturating/saturating_pow) | `a ** exp` clamped to the type's range. |

## Examples

```coil
use arith::{Saturating, INT_MAX, INT_MIN};
use tests::assert;
assert!(INT_MAX.saturating_add(10) == INT_MAX);
assert!(INT_MIN.saturating_sub(1) == INT_MIN);
assert!(4.saturating_mul(5) == 20);
```

## See also

- [`arith::INT_MIN`](/packages/stdlib/reference/arith/INT_MIN)
- [`arith::INT_MAX`](/packages/stdlib/reference/arith/INT_MAX)
- [`int`](/docs/reference/types/int)
- [`Checked`](/packages/stdlib/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Wrapping`](/packages/stdlib/reference/arith/Wrapping): Integer arithmetic that wraps around modulo 2^64 instead of panicking.
- [`Overflowing`](/packages/stdlib/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
