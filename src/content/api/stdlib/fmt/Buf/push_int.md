---
slug: "stdlib/fmt/Buf/push_int"
package: "stdlib"
title: "Buf::push_int"
description: "Appends n in decimal."
module: "fmt"
kind: "method"
name: "push_int"
parent: "Buf"
signature: "pub fn push_int(int n)"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/fmt.hy#L44"
order: 2
---

Appends `n` in decimal.

Called on a `Buf` value as `value.push_int(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Examples

```coil
use fmt::{Buf};
use tests::assert;
let b = Buf::new();
b.push_int(-7);
assert!(b.to_string() == "-7");
```

## See also

- [`Buf`](/packages/stdlib/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::new`](/packages/stdlib/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_str`](/packages/stdlib/reference/fmt/Buf/push_str): Appends `s`.
- [`Buf::push_hex`](/packages/stdlib/reference/fmt/Buf/push_hex): Appends `n` in lowercase hexadecimal, without a `0x` prefix.
- [`Buf::to_string`](/packages/stdlib/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_left`](/packages/stdlib/reference/fmt/Buf/pad_left): Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.
- [`Buf::pad_right`](/packages/stdlib/reference/fmt/Buf/pad_right): Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.
