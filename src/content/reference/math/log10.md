---
slug: "math/log10"
title: "log10"
description: "Returns the base-10 logarithm of x."
module: "math"
kind: "fn"
name: "log10"
signature: "fn log10(float x) -> float"
import: "use math::{log10};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/math.hy#L1121"
order: 7
---

Returns the base-10 logarithm of `x`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{log10};
use tests::assert;
assert!(log10(1000.0) == 3.0);
assert!(log10(0.01) == -2.0);
```

## See also

- [`floor`](/docs/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/docs/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/docs/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`sin`](/docs/reference/math/sin): Returns the sine of `x` radians.
