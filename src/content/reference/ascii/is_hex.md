---
slug: "ascii/is_hex"
title: "is_hex"
description: "True for an ASCII hex digit (0-9, a-f, A-F)."
module: "ascii"
kind: "fn"
name: "is_hex"
signature: "fn is_hex(byte c) -> bool"
import: "use ascii::{is_hex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/ascii.hy#L14"
order: 2
---

True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`).

## Parameters

| Name | Type |
|------|------|
| `c` | `byte` |

## Returns

`bool`

## See also

- [`is_space`](/docs/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_digit`](/docs/reference/ascii/is_digit): True for an ASCII decimal digit (`0` through `9`).
- [`is_alpha`](/docs/reference/ascii/is_alpha): True for an ASCII letter (`A` through `Z` or `a` through `z`).
- [`is_alnum`](/docs/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_print`](/docs/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/docs/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/docs/reference/ascii/to_lower): ASCII lower-case for `A`..=`Z`; other bytes unchanged.
- [`to_upper`](/docs/reference/ascii/to_upper): ASCII upper-case for `a`..=`z`; other bytes unchanged.
