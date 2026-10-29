---
slug: "prelude/ops/Rem"
title: "Rem"
description: "The remainder operator %."
module: "prelude::ops"
kind: "trait"
name: "Rem"
signature: "trait Rem<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/prelude/ops.hy#L191"
order: 5
---

The remainder operator `%`.

`a % b` on a type with a `Rem` instance calls `rem(a, b)`. [`int`](/docs/reference/types/int) and
[`float`](/docs/reference/types/float) have builtin instances. The [`int`](/docs/reference/types/int) result has the sign of `a`
(`-7 % 2` is `-1`) and `% 0` panics with `division by zero`.

## Required methods

| Name | Description |
|------|-------------|
| [`rem`](/docs/reference/prelude/ops/Rem/rem) | Returns the remainder of `a / b`. |

## Examples

```coil
use tests::assert;
class Hours {
    pub h: int,
}

impl Rem for Hours {
    pub fn rem(Hours a, Hours b) -> Hours {
        return new Hours(a.h % b.h);
    }
}

fn main() {
    let t = new Hours(27) % new Hours(24);
    assert!(t.h == 3);
    assert!(-7 % 2 == -1);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator `**`.
