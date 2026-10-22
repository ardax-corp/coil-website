---
slug: "conv/parse_float"
title: "parse_float"
description: "Parses a decimal float such as \"3.5\", \"-0.25\", \"1e3\" or \"42\"."
module: "conv"
kind: "fn"
name: "parse_float"
signature: "fn parse_float(string s) -> Result<float, string>"
import: "use conv::{parse_float};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/conv.hy#L227"
order: 5
---

Parses a decimal float such as `"3.5"`, `"-0.25"`, `"1e3"` or `"42"`.

Surrounding ASCII whitespace, a sign and an exponent (`e` or `E`) are accepted.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<float, string>`

## Errors

`Err("invalid float")` when `s` is not a number.

## Examples

```coil
use conv::{parse_float};
use tests::assert;
assert!((parse_float("2.5") ?? 0.0) == 2.5);
assert!((parse_float("1e3") ?? 0.0) == 1000.0);
assert!(parse_float("abc").is_err());
```

## See also

- [`int_to_dec`](/docs/reference/conv/int_to_dec): Formats n in decimal; the same as format("%i", n).
- [`int_to_hex`](/docs/reference/conv/int_to_hex): Formats n in lowercase hexadecimal without a prefix; a negative n gets a leading -.
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Formats n in binary without a prefix; a negative n gets a leading -.
- [`parse_int_radix`](/docs/reference/conv/parse_int_radix): Parses an integer written in base radix, which must be 10 or 16.
- [`parse_int`](/docs/reference/conv/parse_int): Parses a decimal integer, such as "42", " -7 " or "+3".
