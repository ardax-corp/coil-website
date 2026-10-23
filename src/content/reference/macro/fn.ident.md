---
slug: "macro/fn.ident"
title: "ident"
description: "A name, for splicing generated identifiers: ${ident(\"to_\" + n)}."
module: "macro"
kind: "fn"
name: "ident"
signature: "fn ident(string name) -> Ident"
import: "use macro::{ident};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/macro.hy#L91"
order: 17
---

A name, for splicing generated identifiers: `${ident("to_" + n)}`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`Ident`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with `sep` (the lowering of `$(xs) sep *`).
- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (`-` then digits, in range).
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called `name`, or `-1`.
- [`attr_value`](/docs/reference/macro/attr_value): `#[attr(key = "value")]` from an attribute list, or `fallback`.
