---
slug: "conv/parse_int_radix"
title: "parse_int_radix"
description: "Parse an optionally signed integer in base radix (10 or 16)."
module: "conv"
kind: "fn"
name: "parse_int_radix"
signature: "fn parse_int_radix(string s, int radix) -> Result<int, string>"
import: "use conv::{parse_int_radix};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/conv.hy#L107"
order: 3
---

Parse an optionally signed integer in base `radix` (10 or 16).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `radix` | `int` |

## Returns

`Result<int, string>`

## See also

- [`int_to_dec`](/docs/reference/conv/int_to_dec): Format an integer in base 10.
- [`int_to_hex`](/docs/reference/conv/int_to_hex): Format an integer in base 16 (lowercase, no prefix).
- [`int_to_bin`](/docs/reference/conv/int_to_bin): Format an integer in base 2 (no prefix).
- [`parse_int`](/docs/reference/conv/parse_int): Parse an optionally signed base-10 integer (surrounding ASCII space skipped).
- [`parse_float`](/docs/reference/conv/parse_float): Parse an optionally signed decimal float with an optional exponent.
