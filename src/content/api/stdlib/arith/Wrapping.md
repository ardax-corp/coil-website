---
slug: "stdlib/arith/Wrapping"
package: "stdlib"
title: "Wrapping"
description: "Integer arithmetic that wraps around modulo 2^64 instead of panicking."
module: "arith"
kind: "trait"
name: "Wrapping"
signature: "trait Wrapping<S>"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/arith.coil#L75"
order: 1
---

Integer arithmetic that wraps around modulo 2^64 instead of panicking.

Useful for hashes and checksums. Implemented for [`int`](/docs/reference/types/int).

## Required methods

| Name | Description |
|------|-------------|
| [`wrapping_add`](/packages/stdlib/reference/arith/Wrapping/wrapping_add) | `a + b` modulo 2^64. |
| [`wrapping_sub`](/packages/stdlib/reference/arith/Wrapping/wrapping_sub) | `a - b` modulo 2^64. |
| [`wrapping_mul`](/packages/stdlib/reference/arith/Wrapping/wrapping_mul) | `a * b` modulo 2^64. |
| [`wrapping_neg`](/packages/stdlib/reference/arith/Wrapping/wrapping_neg) | `-a` modulo 2^64 ([`INT_MIN`](/packages/stdlib/reference/arith/INT_MIN) stays [`INT_MIN`](/packages/stdlib/reference/arith/INT_MIN)). |
| [`wrapping_pow`](/packages/stdlib/reference/arith/Wrapping/wrapping_pow) | `a ** exp` modulo 2^64. |
| [`wrapping_shl`](/packages/stdlib/reference/arith/Wrapping/wrapping_shl) | `a << (n & 63)`: the count is taken modulo 64. |
| [`wrapping_shr`](/packages/stdlib/reference/arith/Wrapping/wrapping_shr) | `a >> (n & 63)`: the count is taken modulo 64. |

## Examples

```coil
use arith::{Wrapping, INT_MAX, INT_MIN};
use tests::assert;
assert!(INT_MAX.wrapping_add(1) == INT_MIN);
assert!(1.wrapping_shl(65) == 2);
```

## See also

- [`int`](/docs/reference/types/int)
- [`Checked`](/packages/stdlib/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Saturating`](/packages/stdlib/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Overflowing`](/packages/stdlib/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
