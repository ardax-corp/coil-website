---
slug: "conv/parse_int"
title: "parse_int"
description: "Parses a decimal integer, such as \"42\", \" -7 \" or \"+3\"."
module: "conv"
kind: "fn"
name: "parse_int"
signature: "fn parse_int(string s) -> Result<int, string>"
import: "use conv::{parse_int};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/conv.hy#L207"
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
digit. See [`parse_int_radix`](/docs/reference/conv/parse_int_radix) for the overflow caveat.

## Examples

```coil
use conv::{parse_int};
use tests::assert;
assert!((parse_int(" 42 ") ?? 0) == 42);
let bad = match parse_int("4x2") {
    Result::Err(e) => e,
    Result::Ok(_) => "",
};
assert!(bad == "invalid integer");
```

## See also

- [`conv::parse_int_radix`](/docs/reference/conv/parse_int_radix)
- [`int_to_dec`](/docs/reference/conv/int_to_dec): Formats `n` in decimal; the same as `format("%i", n)`.
- [`int_to_hex`](/docs/reference/conv/int_to_hex): Formats `n` in lowercase hexadecimal without a prefix; a negative `n` gets a leading `-`.
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Formats `n` in binary without a prefix; a negative `n` gets a leading `-`.
- [`parse_float`](/docs/reference/conv/parse_float): Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`.
