---
slug: "arith/Wrapping"
title: "Wrapping"
description: "Integer arithmetic that wraps around modulo 2^64 instead of panicking."
module: "arith"
kind: "trait"
name: "Wrapping"
signature: "trait Wrapping<S>"
import: "use arith::{Wrapping};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/arith.hy#L75"
order: 1
---

Integer arithmetic that wraps around modulo 2^64 instead of panicking.

Useful for hashes and checksums. Implemented for [`int`](/docs/reference/types/int).

## Required methods

| Name | Description |
|------|-------------|
| [`wrapping_add`](/docs/reference/arith/Wrapping/wrapping_add) | `a + b` modulo 2^64. |
| [`wrapping_sub`](/docs/reference/arith/Wrapping/wrapping_sub) | `a - b` modulo 2^64. |
| [`wrapping_mul`](/docs/reference/arith/Wrapping/wrapping_mul) | `a * b` modulo 2^64. |
| [`wrapping_neg`](/docs/reference/arith/Wrapping/wrapping_neg) | `-a` modulo 2^64 ([`INT_MIN`](/docs/reference/arith/INT_MIN) stays [`INT_MIN`](/docs/reference/arith/INT_MIN)). |
| [`wrapping_pow`](/docs/reference/arith/Wrapping/wrapping_pow) | `a ** exp` modulo 2^64. |
| [`wrapping_shl`](/docs/reference/arith/Wrapping/wrapping_shl) | `a << (n & 63)`: the count is taken modulo 64. |
| [`wrapping_shr`](/docs/reference/arith/Wrapping/wrapping_shr) | `a >> (n & 63)`: the count is taken modulo 64. |

## Examples

```coil
use arith::{Wrapping, INT_MAX, INT_MIN};
use tests::assert;
assert!(INT_MAX.wrapping_add(1) == INT_MIN);
assert!(1.wrapping_shl(65) == 2);
```

## See also

- [`int`](/docs/reference/types/int)
- [`Checked`](/docs/reference/arith/Checked): Integer arithmetic that returns `None` instead of panicking when the result does not fit.
- [`Saturating`](/docs/reference/arith/Saturating): Integer arithmetic that clamps to `INT_MIN` / `INT_MAX` instead of panicking.
- [`Overflowing`](/docs/reference/arith/Overflowing): Integer arithmetic that returns the wrapped result together with whether it wrapped.
