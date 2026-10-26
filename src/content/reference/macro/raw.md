---
slug: "macro/raw"
title: "raw"
description: "Raw source, spliced as is."
module: "macro"
kind: "fn"
name: "raw"
signature: "fn raw(string text) -> Code"
import: "use macro::{raw};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/prelude/macro.hy#L66"
order: 15
---

Raw source, spliced as is.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`Code`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with `sep` (the lowering of `$(xs) sep *`).
- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: `${ident("to_" + n)}`.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (`-` then digits, in range).
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called `name`, or `-1`.
- [`attr_value`](/docs/reference/macro/attr_value): `#[attr(key = "value")]` from an attribute list, or `fallback`.
