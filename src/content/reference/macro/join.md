---
slug: "macro/join"
title: "join"
description: "Join fragments with sep (the lowering of $(xs) sep *)."
module: "macro"
kind: "fn"
name: "join"
signature: "fn join(Vec<Code> xs, string sep) -> string"
import: "use macro::{join};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/prelude/macro.hy#L30"
order: 12
---

Join fragments with `sep` (the lowering of `$(xs) sep *`).

## Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<Code>` |
| `sep` | `string` |

## Returns

`string`

## See also

- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: `${ident("to_" + n)}`.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (`-` then digits, in range).
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called `name`, or `-1`.
- [`attr_value`](/docs/reference/macro/attr_value): `#[attr(key = "value")]` from an attribute list, or `fallback`.
