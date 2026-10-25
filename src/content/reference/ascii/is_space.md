---
slug: "ascii/is_space"
title: "is_space"
description: "True for ASCII space, tab, line feed, or carriage return."
module: "ascii"
kind: "fn"
name: "is_space"
signature: "fn is_space(byte c) -> bool"
import: "use ascii::{is_space};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/ascii.hy#L4"
order: 0
---

True for ASCII space, tab, line feed, or carriage return.

## Parameters

| Name | Type |
|------|------|
| `c` | `byte` |

## Returns

`bool`

## See also

- [`is_digit`](/docs/reference/ascii/is_digit): True for an ASCII decimal digit (`0` through `9`).
- [`is_hex`](/docs/reference/ascii/is_hex): True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`).
- [`is_alpha`](/docs/reference/ascii/is_alpha): True for an ASCII letter (`A` through `Z` or `a` through `z`).
- [`is_alnum`](/docs/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_print`](/docs/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/docs/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/docs/reference/ascii/to_lower): ASCII lower-case for `A`..=`Z`; other bytes unchanged.
- [`to_upper`](/docs/reference/ascii/to_upper): ASCII upper-case for `a`..=`z`; other bytes unchanged.
