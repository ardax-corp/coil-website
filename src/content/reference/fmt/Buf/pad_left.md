---
slug: "fmt/Buf/pad_left"
title: "Buf::pad_left"
description: "Pads the text on the left with fill until it is at least width bytes long, and returns the builder."
module: "fmt"
kind: "method"
name: "pad_left"
parent: "Buf"
signature: "pub fn pad_left(int width, string fill) -> Buf"
import: "use fmt::{Buf};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/fmt.hy#L72"
order: 5
---

Pads the text on the left with `fill` until it is at least `width` bytes long, and returns the builder.

`fill` is repeated whole, so a multi-byte `fill` can overshoot `width`. Text
already at least `width` long is unchanged.

Called on a `Buf` value as `value.pad_left(…)`.

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
b.push_int(7);
assert!(b.pad_left(3, "0").to_string() == "007");
```

## See also

- [`Buf`](/docs/reference/fmt/Buf): A string builder: append pieces, then take the text with `to_string`.
- [`Buf::new`](/docs/reference/fmt/Buf/new): Creates an empty builder.
- [`Buf::push_str`](/docs/reference/fmt/Buf/push_str): Appends `s`.
- [`Buf::push_int`](/docs/reference/fmt/Buf/push_int): Appends `n` in decimal.
- [`Buf::push_hex`](/docs/reference/fmt/Buf/push_hex): Appends `n` in lowercase hexadecimal, without a `0x` prefix.
- [`Buf::to_string`](/docs/reference/fmt/Buf/to_string): Returns the text built so far.
- [`Buf::pad_right`](/docs/reference/fmt/Buf/pad_right): Pads the text on the right with `fill` until it is at least `width` bytes long, and returns the builder.
