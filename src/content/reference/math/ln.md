---
slug: "math/ln"
title: "ln"
description: "Returns the natural logarithm of x."
module: "math"
kind: "fn"
name: "ln"
signature: "fn ln(float x) -> float"
import: "use math::{ln};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/math.hy#L1048"
order: 5
---

Returns the natural logarithm of `x`.

`0.0` gives negative infinity and a negative `x` gives NaN.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{ln};
use tests::assert;
assert!(ln(1.0) == 0.0);
assert!(ln(2.718281828459045) == 1.0);
```

## See also

- [`floor`](/docs/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/docs/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/docs/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/docs/reference/math/sin): Returns the sine of `x` radians.
