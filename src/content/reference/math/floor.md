---
slug: "math/floor"
title: "floor"
description: "Returns the largest whole number not greater than x."
module: "math"
kind: "fn"
name: "floor"
signature: "fn floor(float x) -> float"
import: "use math::{floor};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/math.hy#L662"
order: 0
---

Returns the largest whole number not greater than `x`.

`-0.0`, infinities and NaN come back unchanged.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{floor};
use tests::assert;
assert!(floor(2.7) == 2.0);
assert!(floor(-2.1) == -3.0);
assert!(floor(5.0) == 5.0);
```

## See also

- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/docs/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/docs/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/docs/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/docs/reference/math/sin): Returns the sine of `x` radians.
