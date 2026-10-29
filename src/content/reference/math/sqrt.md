---
slug: "math/sqrt"
title: "sqrt"
description: "Returns the square root of x, correctly rounded."
module: "math"
kind: "fn"
name: "sqrt"
signature: "fn sqrt(float x) -> float"
import: "use math::{sqrt};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/math.hy#L710"
order: 2
---

Returns the square root of `x`, correctly rounded.

Negative `x` gives NaN; `-0.0` gives `-0.0`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{sqrt};
use tests::assert;
assert!(sqrt(9.0) == 3.0);
assert!(sqrt(2.0) == 1.4142135623730951);
assert!(sqrt(-1.0) != sqrt(-1.0));
```

## See also

- [`floor`](/docs/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/docs/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/docs/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/docs/reference/math/sin): Returns the sine of `x` radians.
