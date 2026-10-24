---
slug: "fmt/Buf/push_int"
title: "Buf::push_int"
description: "Appends n in decimal."
module: "fmt"
kind: "method"
name: "push_int"
parent: "Buf"
signature: "pub fn push_int(int n)"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/fmt.hy#L44"
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

- [`Buf`](/docs/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::new`](/docs/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_str`](/docs/reference/fmt/Buf/push_str): Appends `s`.
- [`Buf::push_hex`](/docs/reference/fmt/Buf/push_hex): Appends `n` in lowercase hexadecimal, without a `0x` prefix.
- [`Buf::to_string`](/docs/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_left`](/docs/reference/fmt/Buf/pad_left): Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.
- [`Buf::pad_right`](/docs/reference/fmt/Buf/pad_right): Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.
