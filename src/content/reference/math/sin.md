---
slug: "math/sin"
title: "sin"
description: "Returns the sine of x radians."
module: "math"
kind: "fn"
name: "sin"
signature: "fn sin(float x) -> float"
import: "use math::{sin};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/math.hy#L1508"
order: 8
---

Returns the sine of `x` radians.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{sin};
use num::{PI, abs};
use tests::assert;
assert!(sin(0.0) == 0.0);
assert!(abs(sin(PI / 2.0) - 1.0) < 0.000000000000001);
```

## See also

- [`floor`](/docs/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/docs/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/docs/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/docs/reference/math/log10): Returns the base-10 logarithm of `x`.
