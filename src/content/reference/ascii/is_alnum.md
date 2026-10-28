---
slug: "ascii/is_alnum"
title: "is_alnum"
description: "True for an ASCII alphanumeric byte."
module: "ascii"
kind: "fn"
name: "is_alnum"
signature: "fn is_alnum(byte c) -> bool"
import: "use ascii::{is_alnum};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/ascii.hy#L33"
order: 4
---

True for an ASCII alphanumeric byte.

## Parameters

| Name | Type |
|------|------|
| `c` | `byte` |

## Returns

`bool`

## See also

- [`is_space`](/docs/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_digit`](/docs/reference/ascii/is_digit): True for an ASCII decimal digit (`0` through `9`).
- [`is_hex`](/docs/reference/ascii/is_hex): True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`).
- [`is_alpha`](/docs/reference/ascii/is_alpha): True for an ASCII letter (`A` through `Z` or `a` through `z`).
- [`is_print`](/docs/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/docs/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/docs/reference/ascii/to_lower): ASCII lower-case for `A`..=`Z`; other bytes unchanged.
- [`to_upper`](/docs/reference/ascii/to_upper): ASCII upper-case for `a`..=`z`; other bytes unchanged.
