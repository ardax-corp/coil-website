---
slug: "conv/int_to_dec"
title: "int_to_dec"
description: "Format an integer in base 10."
module: "conv"
kind: "fn"
name: "int_to_dec"
signature: "fn int_to_dec(int n) -> string"
import: "use conv::{int_to_dec};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/conv.hy#L41"
order: 0
---

Format an integer in base 10.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## See also

- [`int_to_hex`](/docs/reference/conv/int_to_hex): Format an integer in base 16 (lowercase, no prefix).
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Format an integer in base 2 (no prefix).
- [`parse_int_radix`](/docs/reference/conv/parse_int_radix): Parse an optionally signed integer in base radix (10 or 16).
- [`parse_int`](/docs/reference/conv/parse_int): Parse an optionally signed base-10 integer (surrounding ASCII space skipped).
- [`parse_float`](/docs/reference/conv/parse_float): Parse an optionally signed decimal float with an optional exponent.
