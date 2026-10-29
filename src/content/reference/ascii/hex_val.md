---
slug: "ascii/hex_val"
title: "hex_val"
description: "Numeric value of an ASCII hex digit, or None for another byte."
module: "ascii"
kind: "fn"
name: "hex_val"
signature: "fn hex_val(byte c) -> Option<int>"
import: "use ascii::{hex_val};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/ascii.hy#L77"
order: 10
---

Numeric value of an ASCII hex digit, or `None` for another byte.

## Parameters

| Name | Type |
|------|------|
| `c` | `byte` |

## Returns

`Option<int>`

## See also

- [`is_space`](/docs/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_digit`](/docs/reference/ascii/is_digit): True for an ASCII decimal digit (`0` through `9`).
- [`is_hex`](/docs/reference/ascii/is_hex): True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`).
- [`is_alpha`](/docs/reference/ascii/is_alpha): True for an ASCII letter (`A` through `Z` or `a` through `z`).
- [`is_alnum`](/docs/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_print`](/docs/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/docs/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/docs/reference/ascii/to_lower): ASCII lower-case for `A`..=`Z`; other bytes unchanged.
