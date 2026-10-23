---
slug: "types/bool"
title: "bool"
description: "A boolean: true or false."
module: "types"
kind: "primitive"
name: "bool"
signature: "type bool"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/types.hy#L90"
order: 2
---

A boolean: `true` or `false`.

Conditions in `if` and `while` take a `bool`. `&&` and `||` short-circuit;
`!` negates (it also accepts an [`int`](/docs/reference/types/int), where `0` is false). Booleans
support `==` and `!=` but are not ordered.

Casts with `as`: `bool as int` is `1` or `0`; `int as bool` is `true` for
any non-zero value.

## Examples

```coil
use tests::assert;
let ready = 3 > 2 && !false;
assert!(ready);
assert!(true as int == 1);
assert!(!(0 as bool));
assert!(show(ready) == "true");
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float): A 64-bit IEEE-754 floating-point number.
- [`byte`](/docs/reference/types/byte): An unsigned 8-bit integer in `0..=255`.
- [`string`](/docs/reference/types/string): A UTF-8 text string.
- [`unit`](/docs/reference/types/unit): The type with a single value, `()`, used where there is no meaningful value.
