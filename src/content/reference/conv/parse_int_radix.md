---
slug: "conv/parse_int_radix"
title: "parse_int_radix"
description: "Parses an integer written in base radix, which must be 10 or 16."
module: "conv"
kind: "fn"
name: "parse_int_radix"
signature: "fn parse_int_radix(string s, int radix) -> Result<int, string>"
import: "use conv::{parse_int_radix};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/conv.hy#L146"
order: 3
---

Parses an integer written in base `radix`, which must be 10 or 16.

Surrounding ASCII whitespace and one leading `+` or `-` are accepted. Hex
digits may be either case; there is no `0x` prefix.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `radix` | `int` |

## Returns

`Result<int, string>`

## Errors

`Err("invalid integer")` for empty or non-digit text and `Err("invalid radix")`
for any other `radix`. A value that does not fit in an [`int`](/docs/reference/types/int) currently panics
instead of returning an error (coil-stdlib#53).

## Examples

```coil
use conv::{parse_int_radix};
use tests::assert;
assert!((parse_int_radix("ff", 16) ?? 0) == 255);
assert!((parse_int_radix("-10", 10) ?? 0) == -10);
assert!(parse_int_radix("12", 8).is_err());
```

## See also

- [`int`](/docs/reference/types/int)
- [`int_to_dec`](/docs/reference/conv/int_to_dec): Formats n in decimal; the same as format("%i", n).
- [`int_to_hex`](/docs/reference/conv/int_to_hex): Formats n in lowercase hexadecimal without a prefix; a negative n gets a leading -.
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Formats n in binary without a prefix; a negative n gets a leading -.
- [`parse_int`](/docs/reference/conv/parse_int): Parses a decimal integer, such as "42", " -7 " or "+3".
- [`parse_float`](/docs/reference/conv/parse_float): Parses a decimal float such as "3.5", "-0.25", "1e3" or "42".
