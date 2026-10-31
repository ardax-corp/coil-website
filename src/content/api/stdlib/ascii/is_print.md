---
slug: "stdlib/ascii/is_print"
package: "stdlib"
title: "is_print"
description: "True for an ASCII printable byte (space through tilde)."
module: "ascii"
kind: "fn"
name: "is_print"
signature: "fn is_print(byte c) -> bool"
import: "use ascii::{is_print};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/ascii.hy#L38"
order: 5
---

True for an ASCII printable byte (space through tilde).

## Parameters

| Name | Type |
|------|------|
| `c` | `byte` |

## Returns

`bool`

## See also

- [`is_space`](/packages/stdlib/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_digit`](/packages/stdlib/reference/ascii/is_digit): True for an ASCII decimal digit (`0` through `9`).
- [`is_hex`](/packages/stdlib/reference/ascii/is_hex): True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`).
- [`is_alpha`](/packages/stdlib/reference/ascii/is_alpha): True for an ASCII letter (`A` through `Z` or `a` through `z`).
- [`is_alnum`](/packages/stdlib/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_ctrl`](/packages/stdlib/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/packages/stdlib/reference/ascii/to_lower): ASCII lower-case for `A`..=`Z`; other bytes unchanged.
- [`to_upper`](/packages/stdlib/reference/ascii/to_upper): ASCII upper-case for `a`..=`z`; other bytes unchanged.
