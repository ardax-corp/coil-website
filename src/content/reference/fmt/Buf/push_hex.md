---
slug: "fmt/Buf/push_hex"
title: "Buf::push_hex"
description: "Appends n in lowercase hexadecimal, without a 0x prefix."
module: "fmt"
kind: "method"
name: "push_hex"
parent: "Buf"
signature: "pub fn push_hex(int n)"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/fmt.hy#L49"
order: 3
---

Appends `n` in lowercase hexadecimal, without a `0x` prefix.

Called on a `Buf` value as `value.push_hex(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## See also

- [`Buf`](/docs/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::new`](/docs/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_str`](/docs/reference/fmt/Buf/push_str): Appends `s`.
- [`Buf::push_int`](/docs/reference/fmt/Buf/push_int): Appends `n` in decimal.
- [`Buf::to_string`](/docs/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_left`](/docs/reference/fmt/Buf/pad_left): Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.
- [`Buf::pad_right`](/docs/reference/fmt/Buf/pad_right): Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.
