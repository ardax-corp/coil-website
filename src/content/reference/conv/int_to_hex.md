---
slug: "conv/int_to_hex"
title: "int_to_hex"
description: "Formats n in lowercase hexadecimal without a prefix; a negative n gets a leading -."
module: "conv"
kind: "fn"
name: "int_to_hex"
signature: "fn int_to_hex(int n) -> string"
import: "use conv::{int_to_hex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/conv.hy#L78"
order: 1
---

Formats `n` in lowercase hexadecimal without a prefix; a negative `n` gets a leading `-`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## Examples

```coil
use conv::{int_to_hex};
use tests::assert;
assert!(int_to_hex(255) == "ff");
```

## See also

- [`int_to_dec`](/docs/reference/conv/int_to_dec): Formats `n` in decimal; the same as `format("%i", n)`.
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Formats `n` in binary without a prefix; a negative `n` gets a leading `-`.
- [`parse_int_radix`](/docs/reference/conv/parse_int_radix): Parses an integer written in base `radix`, which must be 10 or 16.
- [`parse_int`](/docs/reference/conv/parse_int): Parses a decimal integer, such as `"42"`, `" -7 "` or `"+3"`.
- [`parse_float`](/docs/reference/conv/parse_float): Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`.
