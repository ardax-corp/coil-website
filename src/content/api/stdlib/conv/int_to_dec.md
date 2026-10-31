---
slug: "stdlib/conv/int_to_dec"
package: "stdlib"
title: "int_to_dec"
description: "Formats n in decimal; the same as format(\"%i\", n)."
module: "conv"
kind: "fn"
name: "int_to_dec"
signature: "fn int_to_dec(int n) -> string"
import: "use conv::{int_to_dec};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/conv.coil#L49"
order: 0
---

Formats `n` in decimal; the same as `format("%i", n)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## Examples

```coil
use conv::{int_to_dec};
use tests::assert;
assert!(int_to_dec(-42) == "-42");
```

## See also

- [`int_to_hex`](/packages/stdlib/reference/conv/int_to_hex): Formats `n` in lowercase hexadecimal without a prefix; a negative `n` gets a leading `-`.
- [`int_to_bin`](/packages/stdlib/reference/conv/int_to_bin): Formats `n` in binary without a prefix; a negative `n` gets a leading `-`.
- [`parse_int_radix`](/packages/stdlib/reference/conv/parse_int_radix): Parses an integer written in base `radix`, which must be 10 or 16.
- [`parse_int`](/packages/stdlib/reference/conv/parse_int): Parses a decimal integer, such as `"42"`, `" -7 "` or `"+3"`.
- [`parse_float`](/packages/stdlib/reference/conv/parse_float): Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`.
