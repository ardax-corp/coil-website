---
slug: "macro/concat"
title: "concat"
description: "Combine several generated item lists."
module: "macro"
kind: "fn"
name: "concat"
signature: "fn concat(Vec<Code> parts) -> Code"
import: "use macro::{concat};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/macro.hy#L71"
order: 16
---

Combine several generated item lists.

## Parameters

| Name | Type |
|------|------|
| `parts` | `Vec<Code>` |

## Returns

`Code`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with `sep` (the lowering of `$(xs) sep *`).
- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: `${ident("to_" + n)}`.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (`-` then digits, in range).
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called `name`, or `-1`.
- [`attr_value`](/docs/reference/macro/attr_value): `#[attr(key = "value")]` from an attribute list, or `fallback`.
