---
slug: "macro/attr_index"
title: "attr_index"
description: "Index of the attribute called name, or -1."
module: "macro"
kind: "fn"
name: "attr_index"
signature: "fn attr_index(Vec<Attr> attrs, string name) -> int"
import: "use macro::{attr_index};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/macro.hy#L300"
order: 19
---

Index of the attribute called `name`, or `-1`.

## Parameters

| Name | Type |
|------|------|
| `attrs` | `Vec<Attr>` |
| `name` | `string` |

## Returns

`int`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with `sep` (the lowering of `$(xs) sep *`).
- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: `${ident("to_" + n)}`.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (`-` then digits, in range).
- [`attr_value`](/docs/reference/macro/attr_value): `#[attr(key = "value")]` from an attribute list, or `fallback`.
