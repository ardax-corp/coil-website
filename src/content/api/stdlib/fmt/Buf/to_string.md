---
slug: "stdlib/fmt/Buf/to_string"
package: "stdlib"
title: "Buf::to_string"
description: "Returns the text built so far."
module: "fmt"
kind: "method"
name: "to_string"
parent: "Buf"
signature: "pub fn to_string() -> string"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/fmt.hy#L54"
order: 4
---

Returns the text built so far.

Called on a `Buf` value as `value.to_string(…)`.

## Returns

`string`

## See also

- [`Buf`](/packages/stdlib/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::new`](/packages/stdlib/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_str`](/packages/stdlib/reference/fmt/Buf/push_str): Appends `s`.
- [`Buf::push_int`](/packages/stdlib/reference/fmt/Buf/push_int): Appends `n` in decimal.
- [`Buf::push_hex`](/packages/stdlib/reference/fmt/Buf/push_hex): Appends `n` in lowercase hexadecimal, without a `0x` prefix.
- [`Buf::pad_left`](/packages/stdlib/reference/fmt/Buf/pad_left): Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.
- [`Buf::pad_right`](/packages/stdlib/reference/fmt/Buf/pad_right): Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.
