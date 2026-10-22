---
slug: "conv/parse_int"
title: "parse_int"
description: "Parse an optionally signed base-10 integer (surrounding ASCII space skipped)."
module: "conv"
kind: "fn"
name: "parse_int"
signature: "fn parse_int(string s) -> Result<int, string>"
import: "use conv::{parse_int};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/conv.hy#L151"
order: 4
---

Parse an optionally signed base-10 integer (surrounding ASCII space skipped).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<int, string>`

## See also

- [`int_to_dec`](/docs/reference/conv/int_to_dec): Format an integer in base 10.
- [`int_to_hex`](/docs/reference/conv/int_to_hex): Format an integer in base 16 (lowercase, no prefix).
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Format an integer in base 2 (no prefix).
- [`parse_int_radix`](/docs/reference/conv/parse_int_radix): Parse an optionally signed integer in base radix (10 or 16).
- [`parse_float`](/docs/reference/conv/parse_float): Parse an optionally signed decimal float with an optional exponent.
