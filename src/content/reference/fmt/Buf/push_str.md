---
slug: "fmt/Buf/push_str"
title: "Buf::push_str"
description: "Appends s."
module: "fmt"
kind: "method"
name: "push_str"
parent: "Buf"
signature: "pub fn push_str(string s)"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/fmt.hy#L29"
order: 1
---

Appends `s`.

Called on a `Buf` value as `value.push_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## See also

- [`Buf`](/docs/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::new`](/docs/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_int`](/docs/reference/fmt/Buf/push_int): Appends `n` in decimal.
- [`Buf::push_hex`](/docs/reference/fmt/Buf/push_hex): Appends `n` in lowercase hexadecimal, without a `0x` prefix.
- [`Buf::to_string`](/docs/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_left`](/docs/reference/fmt/Buf/pad_left): Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.
- [`Buf::pad_right`](/docs/reference/fmt/Buf/pad_right): Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.
