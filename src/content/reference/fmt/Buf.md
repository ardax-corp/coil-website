---
slug: "fmt/Buf"
title: "Buf"
description: "A string builder: append pieces, then take the text with to_string."
module: "fmt"
kind: "class"
name: "Buf"
signature: "class Buf"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/fmt.hy#L18"
order: 0
---

A string builder: append pieces, then take the text with [`to_string`](/docs/reference/fmt/Buf/to_string).

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/docs/reference/fmt/Buf/new) | Creates an empty builder. |

## Methods

| Name | Description |
|------|-------------|
| [`push_str`](/docs/reference/fmt/Buf/push_str) | Appends `s`. |
| [`push_int`](/docs/reference/fmt/Buf/push_int) | Appends `n` in decimal. |
| [`push_hex`](/docs/reference/fmt/Buf/push_hex) | Appends `n` in lowercase hexadecimal, without a `0x` prefix. |
| [`to_string`](/docs/reference/fmt/Buf/to_string) | Returns the text built so far. |
| [`pad_left`](/docs/reference/fmt/Buf/pad_left) | Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder. |
| [`pad_right`](/docs/reference/fmt/Buf/pad_right) | Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder. |

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

- [`Buf::to_string`](/docs/reference/fmt/Buf/to_string)
