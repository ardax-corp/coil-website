---
slug: "ascii/is_digit"
title: "is_digit"
description: "True for an ASCII decimal digit (0 through 9)."
module: "ascii"
kind: "fn"
name: "is_digit"
signature: "fn is_digit(byte c) -> bool"
import: "use ascii::{is_digit};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/ascii.hy#L9"
order: 1
---

True for an ASCII decimal digit (`0` through `9`).

## Parameters

| Name | Type |
|------|------|
| `c` | `byte` |

## Returns

`bool`

## See also

- [`is_space`](/docs/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_hex`](/docs/reference/ascii/is_hex): True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`).
- [`is_alpha`](/docs/reference/ascii/is_alpha): True for an ASCII letter (`A` through `Z` or `a` through `z`).
- [`is_alnum`](/docs/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_print`](/docs/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/docs/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/docs/reference/ascii/to_lower): ASCII lower-case for `A`..=`Z`; other bytes unchanged.
- [`to_upper`](/docs/reference/ascii/to_upper): ASCII upper-case for `a`..=`z`; other bytes unchanged.
