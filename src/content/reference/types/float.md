---
slug: "types/float"
title: "float"
description: "A 64-bit IEEE-754 floating-point number."
module: "types"
kind: "primitive"
name: "float"
signature: "type float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/types.hy#L69"
order: 1
---

A 64-bit IEEE-754 floating-point number.

Literals need digits on both sides of the point (`1.0`, `3.14`, not `1.`
or `.5`); there is no exponent form. Arithmetic follows IEEE-754 and
never panics: `1.0 / 0.0` is infinity and invalid operations give NaN.
`%` is the remainder with the sign of the left operand, like the `rem`
function.

Casts with `as`: `float as int` truncates toward zero (NaN becomes `0`,
infinities saturate). There is no direct cast between `float` and [`byte`](/docs/reference/types/byte);
go through [`int`](/docs/reference/types/int). Mixing [`int`](/docs/reference/types/int) and `float` in one operator is a type error.

`float` implements [`Num`](/docs/reference/prelude/ops/Num), [`Ord`](/docs/reference/prelude/ops/Ord), [`Eq`](/docs/reference/prelude/ops/Eq) and [`Show`](/docs/reference/prelude/ops/Show), but not [`Integral`](/docs/reference/prelude/ops/Integral).
Math functions such as [`sqrt`](/docs/reference/prelude/math/sqrt) and [`sin`](/docs/reference/prelude/math/sin) are in [`prelude::math`](/docs/reference/prelude/math).

## Examples

```coil
use tests::assert;
let x = 2.5;
assert!(x * 2.0 == 5.0);
assert!(7.5 % 2.0 == 1.5);
assert!(-2.7 as int == -2);
assert!(3 as float + x == 5.5);
assert!(1.0 / 0.0 > 1000000.0);
assert!(show(x) == "2.5");
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`int`](/docs/reference/types/int)
- [`Num`](/docs/reference/prelude/ops/Num)
- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`Integral`](/docs/reference/prelude/ops/Integral)
- [`sqrt`](/docs/reference/prelude/math/sqrt)
- [`sin`](/docs/reference/prelude/math/sin)
- [`prelude::math`](/docs/reference/prelude/math)
