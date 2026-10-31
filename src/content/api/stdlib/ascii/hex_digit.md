---
slug: "stdlib/ascii/hex_digit"
package: "stdlib"
title: "hex_digit"
description: "Lowercase hex digit for 0..=15."
module: "ascii"
kind: "fn"
name: "hex_digit"
signature: "fn hex_digit(int n) -> byte"
import: "use ascii::{hex_digit};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/ascii.hy#L91"
order: 11
---

Lowercase hex digit for `0..=15`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`byte`

## See also

- [`is_space`](/packages/stdlib/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_digit`](/packages/stdlib/reference/ascii/is_digit): True for an ASCII decimal digit (`0` through `9`).
- [`is_hex`](/packages/stdlib/reference/ascii/is_hex): True for an ASCII hex digit (`0`-`9`, `a`-`f`, `A`-`F`).
- [`is_alpha`](/packages/stdlib/reference/ascii/is_alpha): True for an ASCII letter (`A` through `Z` or `a` through `z`).
- [`is_alnum`](/packages/stdlib/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_print`](/packages/stdlib/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/packages/stdlib/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/packages/stdlib/reference/ascii/to_lower): ASCII lower-case for `A`..=`Z`; other bytes unchanged.
