---
slug: "stdlib/fmt/Buf"
package: "stdlib"
title: "Buf"
description: "A string builder: append pieces, then take the text with to_string."
module: "fmt"
kind: "class"
name: "Buf"
signature: "class Buf"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/fmt.coil#L18"
order: 0
---

A string builder: append pieces, then take the text with [`to_string`](/packages/stdlib/reference/fmt/Buf/to_string).

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/fmt/Buf/new) | Creates an empty builder. |

## Methods

| Name | Description |
|------|-------------|
| [`push_str`](/packages/stdlib/reference/fmt/Buf/push_str) | Appends `s`. |
| [`push_int`](/packages/stdlib/reference/fmt/Buf/push_int) | Appends `n` in decimal. |
| [`push_hex`](/packages/stdlib/reference/fmt/Buf/push_hex) | Appends `n` in lowercase hexadecimal, without a `0x` prefix. |
| [`to_string`](/packages/stdlib/reference/fmt/Buf/to_string) | Returns the text built so far. |
| [`pad_left`](/packages/stdlib/reference/fmt/Buf/pad_left) | Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder. |
| [`pad_right`](/packages/stdlib/reference/fmt/Buf/pad_right) | Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder. |

## Examples

```coil
use fmt::{Buf};
use tests::assert;
let b = Buf::new();
b.push_str("id=");
b.push_int(42);
b.push_str(" mask=0x");
b.push_hex(255);
assert!(b.to_string() == "id=42 mask=0xff");
```

## See also

- [`Buf::to_string`](/packages/stdlib/reference/fmt/Buf/to_string)
