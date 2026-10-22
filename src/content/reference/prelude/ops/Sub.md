---
slug: "prelude/ops/Sub"
title: "Sub"
description: "The subtraction operator -."
module: "prelude::ops"
kind: "trait"
name: "Sub"
signature: "trait Sub<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/prelude/ops.hy#L62"
order: 1
---

The subtraction operator `-`.

`a - b` on a type with a `Sub` instance calls `sub(a, b)`. [`int`](/docs/reference/types/int) and
[`float`](/docs/reference/types/float) have builtin instances.

## Required methods

| Name | Description |
|------|-------------|
| [`sub`](/docs/reference/prelude/ops/Sub/sub) | Returns a - b. |

## Examples

```coil
use tests::assert;
class V2 {
    pub x: int,
    pub y: int,
}

impl Sub for V2 {
    pub fn sub(V2 a, V2 b) -> V2 {
        return new V2(a.x - b.x, a.y - b.y);
    }
}

fn main() {
    let d = new V2(5, 5) - new V2(1, 2);
    assert!(d.x == 4);
    assert!(d.y == 3);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator +.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator *.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator /.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator -x.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator %.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator **.
