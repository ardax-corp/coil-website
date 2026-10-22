---
slug: "conv/int_to_bin"
title: "int_to_bin"
description: "Formats n in binary without a prefix; a negative n gets a leading -."
module: "conv"
kind: "fn"
name: "int_to_bin"
signature: "fn int_to_bin(int n) -> string"
import: "use conv::{int_to_bin};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/conv.hy#L106"
order: 2
---

Formats `n` in binary without a prefix; a negative `n` gets a leading `-`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## Examples

```coil
use conv::{int_to_bin};
use tests::assert;
assert!(int_to_bin(5) == "101");
```

## See also

- [`int_to_dec`](/docs/reference/conv/int_to_dec): Formats `n` in decimal; the same as `format("%i", n)`.
- [`int_to_hex`](/docs/reference/conv/int_to_hex): Formats `n` in lowercase hexadecimal without a prefix; a negative `n` gets a leading `-`.
- [`parse_int_radix`](/docs/reference/conv/parse_int_radix): Parses an integer written in base `radix`, which must be 10 or 16.
- [`parse_int`](/docs/reference/conv/parse_int): Parses a decimal integer, such as `"42"`, `" -7 "` or `"+3"`.
- [`parse_float`](/docs/reference/conv/parse_float): Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`.
