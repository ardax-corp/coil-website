---
slug: "macro/lit_int"
title: "lit_int"
description: "An integer literal."
module: "macro"
kind: "fn"
name: "lit_int"
signature: "fn lit_int(int n) -> Code"
import: "use macro::{lit_int};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/prelude/macro.hy#L61"
order: 14
---

An integer literal.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Code`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with `sep` (the lowering of `$(xs) sep *`).
- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: `${ident("to_" + n)}`.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (`-` then digits, in range).
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called `name`, or `-1`.
- [`attr_value`](/docs/reference/macro/attr_value): `#[attr(key = "value")]` from an attribute list, or `fallback`.
