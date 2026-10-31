---
slug: "stdlib/fmt/Buf/pad_right"
package: "stdlib"
title: "Buf::pad_right"
description: "Pads the text on the right with fill until it is at least width bytes long, and returns the builder."
module: "fmt"
kind: "method"
name: "pad_right"
parent: "Buf"
signature: "pub fn pad_right(int width, string fill) -> Buf"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/fmt.hy#L95"
order: 6
---

Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.

Called on a `Buf` value as `value.pad_right(…)`.

## Parameters

| Name | Type |
|------|------|
| `width` | `int` |
| `fill` | `string` |

## Returns

`Buf`

## Examples

```coil
use fmt::{Buf};
use tests::assert;
let b = Buf::new();
b.push_str("ab");
assert!(b.pad_right(4, ".").to_string() == "ab..");
```

## See also

- [`Buf`](/packages/stdlib/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::new`](/packages/stdlib/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_str`](/packages/stdlib/reference/fmt/Buf/push_str): Appends `s`.
- [`Buf::push_int`](/packages/stdlib/reference/fmt/Buf/push_int): Appends `n` in decimal.
- [`Buf::push_hex`](/packages/stdlib/reference/fmt/Buf/push_hex): Appends `n` in lowercase hexadecimal, without a `0x` prefix.
- [`Buf::to_string`](/packages/stdlib/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_left`](/packages/stdlib/reference/fmt/Buf/pad_left): Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.
