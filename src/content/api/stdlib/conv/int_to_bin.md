---
slug: "stdlib/conv/int_to_bin"
package: "stdlib"
title: "int_to_bin"
description: "Formats n in binary without a prefix; a negative n gets a leading -."
module: "conv"
kind: "fn"
name: "int_to_bin"
signature: "fn int_to_bin(int n) -> string"
import: "use conv::{int_to_bin};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/conv.hy#L107"
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

- [`int_to_dec`](/packages/stdlib/reference/conv/int_to_dec): Formats `n` in decimal; the same as `format("%i", n)`.
- [`int_to_hex`](/packages/stdlib/reference/conv/int_to_hex): Formats `n` in lowercase hexadecimal without a prefix; a negative `n` gets a leading `-`.
- [`parse_int_radix`](/packages/stdlib/reference/conv/parse_int_radix): Parses an integer written in base `radix`, which must be 10 or 16.
- [`parse_int`](/packages/stdlib/reference/conv/parse_int): Parses a decimal integer, such as `"42"`, `" -7 "` or `"+3"`.
- [`parse_float`](/packages/stdlib/reference/conv/parse_float): Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`.
