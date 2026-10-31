---
slug: "stdlib/fmt/Buf/new"
package: "stdlib"
title: "Buf::new"
description: "Creates an empty builder."
module: "fmt"
kind: "static method"
name: "new"
parent: "Buf"
signature: "pub static fn new() -> Buf"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/fmt.hy#L24"
order: 0
---

Creates an empty builder.

## Returns

`Buf`

## See also

- [`Buf`](/packages/stdlib/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::push_str`](/packages/stdlib/reference/fmt/Buf/push_str): Appends `s`.
- [`Buf::push_int`](/packages/stdlib/reference/fmt/Buf/push_int): Appends `n` in decimal.
- [`Buf::push_hex`](/packages/stdlib/reference/fmt/Buf/push_hex): Appends `n` in lowercase hexadecimal, without a `0x` prefix.
- [`Buf::to_string`](/packages/stdlib/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_left`](/packages/stdlib/reference/fmt/Buf/pad_left): Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.
- [`Buf::pad_right`](/packages/stdlib/reference/fmt/Buf/pad_right): Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.
