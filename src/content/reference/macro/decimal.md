---
slug: "macro/decimal"
title: "decimal"
description: "A decimal integer the compiler wrote (- then digits, in range)."
module: "macro"
kind: "fn"
name: "decimal"
signature: "fn decimal(string text) -> int"
import: "use macro::{decimal};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.hy#L190"
order: 18
---

A decimal integer the compiler wrote (`-` then digits, in range).

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`int`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with `sep` (the lowering of `$(xs) sep *`).
- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: `${ident("to_" + n)}`.
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called `name`, or `-1`.
- [`attr_value`](/docs/reference/macro/attr_value): `#[attr(key = "value")]` from an attribute list, or `fallback`.
