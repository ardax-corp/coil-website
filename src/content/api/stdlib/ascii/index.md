---
slug: "stdlib/ascii/index"
package: "stdlib"
title: "ascii"
description: "Classify and convert single ASCII bytes: digits, letters, whitespace, case."
module: "ascii"
kind: "module"
name: "ascii"
origin: "stdlib"
auto: false
order: 1
---

Functions here take and return [`byte`](/docs/reference/types/byte). Bytes outside ASCII are never letters or digits, and case conversion leaves them unchanged. For whole strings, see [`text`](/packages/stdlib/reference/text).

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use ascii::{is_space, is_digit};
```

## Functions

| Name | Description |
|------|-------------|
| [`is_space`](/packages/stdlib/reference/ascii/is_space) | True for ASCII space, tab, line feed, or carriage return. |
| [`is_digit`](/packages/stdlib/reference/ascii/is_digit) | True for an ASCII decimal digit (`0` through `9`). |
| [`is_hex`](/packages/stdlib/reference/ascii/is_hex) | True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`). |
| [`is_alpha`](/packages/stdlib/reference/ascii/is_alpha) | True for an ASCII letter (`A` through `Z` or `a` through `z`). |
| [`is_alnum`](/packages/stdlib/reference/ascii/is_alnum) | True for an ASCII alphanumeric byte. |
| [`is_print`](/packages/stdlib/reference/ascii/is_print) | True for an ASCII printable byte (space through tilde). |
| [`is_ctrl`](/packages/stdlib/reference/ascii/is_ctrl) | True for an ASCII control byte (below space, excluding DEL). |
| [`to_lower`](/packages/stdlib/reference/ascii/to_lower) | ASCII lower-case for `A`..=`Z`; other bytes unchanged. |
| [`to_upper`](/packages/stdlib/reference/ascii/to_upper) | ASCII upper-case for `a`..=`z`; other bytes unchanged. |
| [`digit_val`](/packages/stdlib/reference/ascii/digit_val) | Numeric value of an ASCII decimal digit, or `None` for another byte. |
| [`hex_val`](/packages/stdlib/reference/ascii/hex_val) | Numeric value of an ASCII hex digit, or `None` for another byte. |
| [`hex_digit`](/packages/stdlib/reference/ascii/hex_digit) | Lowercase hex digit for `0..=15`. |
| [`digit_char`](/packages/stdlib/reference/ascii/digit_char) | Decimal digit as a one-byte string. |
