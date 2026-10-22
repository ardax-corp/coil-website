---
slug: "fmt/Buf/new"
title: "Buf::new"
description: "Creates an empty builder."
module: "fmt"
kind: "static method"
name: "new"
parent: "Buf"
signature: "pub static fn new() -> Buf"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/fmt.hy#L24"
order: 0
---

Creates an empty builder.

## Returns

`Buf`

## See also

- [`Buf`](/docs/reference/fmt/Buf): A string builder: append pieces, then take the text with to_string.
- [`Buf::push_str`](/docs/reference/fmt/Buf/push_str): Appends s.
- [`Buf::push_int`](/docs/reference/fmt/Buf/push_int): Appends n in decimal.
- [`Buf::push_hex`](/docs/reference/fmt/Buf/push_hex): Appends n in lowercase hexadecimal, without a 0x prefix.
- [`Buf::to_string`](/docs/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_left`](/docs/reference/fmt/Buf/pad_left): Pads the text on the left with fill until it is at least width bytes long, and returns the builder.
- [`Buf::pad_right`](/docs/reference/fmt/Buf/pad_right): Pads the text on the right with fill until it is at least width bytes long, and returns the builder.
