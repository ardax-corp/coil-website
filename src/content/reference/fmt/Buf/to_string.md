---
slug: "fmt/Buf/to_string"
title: "Buf::to_string"
description: "Returns the text built so far."
module: "fmt"
kind: "method"
name: "to_string"
parent: "Buf"
signature: "pub fn to_string() -> string"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/fmt.hy#L54"
order: 4
---

Returns the text built so far.

Called on a `Buf` value as `value.to_string(…)`.

## Returns

`string`

## See also

- [`Buf`](/docs/reference/fmt/Buf): A string builder: append pieces, then take the text with to_string.
- [`Buf::new`](/docs/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_str`](/docs/reference/fmt/Buf/push_str): Appends s.
- [`Buf::push_int`](/docs/reference/fmt/Buf/push_int): Appends n in decimal.
- [`Buf::push_hex`](/docs/reference/fmt/Buf/push_hex): Appends n in lowercase hexadecimal, without a 0x prefix.
- [`Buf::pad_left`](/docs/reference/fmt/Buf/pad_left): Pads the text on the left with fill until it is at least width bytes long, and returns the builder.
- [`Buf::pad_right`](/docs/reference/fmt/Buf/pad_right): Pads the text on the right with fill until it is at least width bytes long, and returns the builder.
