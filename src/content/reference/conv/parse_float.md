---
slug: "conv/parse_float"
title: "parse_float"
description: "Parse an optionally signed decimal float with an optional exponent."
module: "conv"
kind: "fn"
name: "parse_float"
signature: "fn parse_float(string s) -> Result<float, string>"
import: "use conv::{parse_float};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/conv.hy#L156"
order: 5
---

Parse an optionally signed decimal float with an optional exponent.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<float, string>`

## See also

- [`int_to_dec`](/docs/reference/conv/int_to_dec): Format an integer in base 10.
- [`int_to_hex`](/docs/reference/conv/int_to_hex): Format an integer in base 16 (lowercase, no prefix).
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Format an integer in base 2 (no prefix).
- [`parse_int_radix`](/docs/reference/conv/parse_int_radix): Parse an optionally signed integer in base radix (10 or 16).
- [`parse_int`](/docs/reference/conv/parse_int): Parse an optionally signed base-10 integer (surrounding ASCII space skipped).
