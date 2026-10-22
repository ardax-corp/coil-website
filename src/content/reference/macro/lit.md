---
slug: "macro/lit"
title: "lit"
description: "A string literal: lit(\"a\\\"b\") splices as \"a\\\"b\"."
module: "macro"
kind: "fn"
name: "lit"
signature: "fn lit(string s) -> Code"
import: "use macro::{lit};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/macro.hy#L44"
order: 13
---

A string literal: `lit("a\"b")` splices as `"a\"b"`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Code`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with sep (the lowering of $(xs) sep *).
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: ${ident("to_" + n)}.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (- then digits, in range).
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called name, or -1.
- [`attr_value`](/docs/reference/macro/attr_value): #[attr(key = "value")] from an attribute list, or fallback.
