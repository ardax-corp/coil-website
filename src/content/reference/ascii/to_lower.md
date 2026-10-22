---
slug: "ascii/to_lower"
title: "to_lower"
description: "ASCII lower-case for A..=Z; other bytes unchanged."
module: "ascii"
kind: "fn"
name: "to_lower"
signature: "fn to_lower(byte c) -> byte"
import: "use ascii::{to_lower};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/ascii.hy#L51"
order: 7
---

ASCII lower-case for `A`..=`Z`; other bytes unchanged.

## Parameters

| Name | Type |
|------|------|
| `c` | `byte` |

## Returns

`byte`

## See also

- [`is_space`](/docs/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_digit`](/docs/reference/ascii/is_digit): True for an ASCII decimal digit (0 through 9).
- [`is_hex`](/docs/reference/ascii/is_hex): True for an ASCII hex digit (0-9, a-f, A-F).
- [`is_alpha`](/docs/reference/ascii/is_alpha): True for an ASCII letter (A through Z or a through z).
- [`is_alnum`](/docs/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_print`](/docs/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/docs/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_upper`](/docs/reference/ascii/to_upper): ASCII upper-case for a..=z; other bytes unchanged.
