---
slug: "stdlib/conv/parse_int"
package: "stdlib"
title: "parse_int"
description: "Parses a decimal integer, such as \"42\", \" -7 \" or \"+3\"."
module: "conv"
kind: "fn"
name: "parse_int"
signature: "fn parse_int(string s) -> Result<int, string>"
import: "use conv::{parse_int};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/conv.hy#L213"
order: 4
---

Parses a decimal integer, such as `"42"`, `" -7 "` or `"+3"`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<int, string>`

## Errors

`Err("invalid integer")` when `s` is empty or has a character that is not a
digit, and `Err("overflow")` when the value does not fit in an [`int`](/docs/reference/types/int).

## Examples

```coil
use conv::{parse_int};
use tests::assert;
assert!((parse_int(" 42 ").ok() ?? 0) == 42);
let bad = match parse_int("4x2") {
    Result::Err(e) => e,
    Result::Ok(_) => "",
};
assert!(bad == "invalid integer");
```

## See also

- [`int`](/docs/reference/types/int)
- [`int_to_dec`](/packages/stdlib/reference/conv/int_to_dec): Formats `n` in decimal; the same as `format("%i", n)`.
- [`int_to_hex`](/packages/stdlib/reference/conv/int_to_hex): Formats `n` in lowercase hexadecimal without a prefix; a negative `n` gets a leading `-`.
- [`int_to_bin`](/packages/stdlib/reference/conv/int_to_bin): Formats `n` in binary without a prefix; a negative `n` gets a leading `-`.
- [`parse_int_radix`](/packages/stdlib/reference/conv/parse_int_radix): Parses an integer written in base `radix`, which must be 10 or 16.
- [`parse_float`](/packages/stdlib/reference/conv/parse_float): Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`.
