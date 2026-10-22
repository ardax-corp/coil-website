---
slug: "ascii/index"
title: "ascii"
description: "Classify and convert single ASCII bytes: digits, letters, whitespace, case."
module: "ascii"
kind: "module"
name: "ascii"
origin: "stdlib"
auto: false
order: 18
---

Functions here take and return [`byte`](/docs/reference/types/byte). Bytes outside ASCII are never letters or digits, and case conversion leaves them unchanged. For whole strings, see [`text`](/docs/reference/text).

Part of [coil-stdlib](/packages/stdlib). spool projects get it automatically; with plain `coil`, pass `--root ~/.coil/stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use ascii::{is_space, is_digit};
```

## Functions

| Name | Description |
|------|-------------|
| [`is_space`](/docs/reference/ascii/is_space) | True for ASCII space, tab, line feed, or carriage return. |
| [`is_digit`](/docs/reference/ascii/is_digit) | True for an ASCII decimal digit (`0` through `9`). |
| [`is_hex`](/docs/reference/ascii/is_hex) | True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`). |
| [`is_alpha`](/docs/reference/ascii/is_alpha) | True for an ASCII letter (`A` through `Z` or `a` through `z`). |
| [`is_alnum`](/docs/reference/ascii/is_alnum) | True for an ASCII alphanumeric byte. |
| [`is_print`](/docs/reference/ascii/is_print) | True for an ASCII printable byte (space through tilde). |
| [`is_ctrl`](/docs/reference/ascii/is_ctrl) | True for an ASCII control byte (below space, excluding DEL). |
| [`to_lower`](/docs/reference/ascii/to_lower) | ASCII lower-case for `A`..=`Z`; other bytes unchanged. |
| [`to_upper`](/docs/reference/ascii/to_upper) | ASCII upper-case for `a`..=`z`; other bytes unchanged. |
| [`digit_val`](/docs/reference/ascii/digit_val) | Numeric value of an ASCII decimal digit, or `-1` for another byte. |
| [`hex_val`](/docs/reference/ascii/hex_val) | Numeric value of an ASCII hex digit, or `-1` for another byte. |
| [`hex_digit`](/docs/reference/ascii/hex_digit) | Lowercase hex digit for `0..=15`. |
| [`digit_char`](/docs/reference/ascii/digit_char) | Decimal digit as a one-byte string. |
