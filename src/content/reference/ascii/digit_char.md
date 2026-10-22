---
slug: "ascii/digit_char"
title: "digit_char"
description: "Decimal digit as a one-byte string. Callers must pass 0..=9."
module: "ascii"
kind: "fn"
name: "digit_char"
signature: "fn digit_char(int d) -> string"
import: "use ascii::{digit_char};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/ascii.hy#L104"
order: 12
---

Decimal digit as a one-byte string. Callers must pass `0..=9`.

## Parameters

| Name | Type |
|------|------|
| `d` | `int` |

## Returns

`string`

## See also

- [`is_space`](/docs/reference/ascii/is_space): True for ASCII space, tab, line feed, or carriage return.
- [`is_digit`](/docs/reference/ascii/is_digit): True for an ASCII decimal digit (0 through 9).
- [`is_hex`](/docs/reference/ascii/is_hex): True for an ASCII hex digit (0-9, a-f, A-F).
- [`is_alpha`](/docs/reference/ascii/is_alpha): True for an ASCII letter (A through Z or a through z).
- [`is_alnum`](/docs/reference/ascii/is_alnum): True for an ASCII alphanumeric byte.
- [`is_print`](/docs/reference/ascii/is_print): True for an ASCII printable byte (space through tilde).
- [`is_ctrl`](/docs/reference/ascii/is_ctrl): True for an ASCII control byte (below space, excluding DEL).
- [`to_lower`](/docs/reference/ascii/to_lower): ASCII lower-case for A..=Z; other bytes unchanged.
