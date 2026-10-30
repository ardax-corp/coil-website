---
slug: "macro/attr_value"
title: "attr_value"
description: "#[attr(key = \"value\")] from an attribute list, or fallback."
module: "macro"
kind: "fn"
name: "attr_value"
signature: "fn attr_value(Vec<Attr> attrs, string attr, string key, string fallback) -> string"
import: "use macro::{attr_value};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/prelude/macro.hy#L312"
order: 20
---

`#[attr(key = "value")]` from an attribute list, or `fallback`.

## Parameters

| Name | Type |
|------|------|
| `attrs` | `Vec<Attr>` |
| `attr` | `string` |
| `key` | `string` |
| `fallback` | `string` |

## Returns

`string`

## See also

- [`join`](/docs/reference/macro/join): Join fragments with `sep` (the lowering of `$(xs) sep *`).
- [`lit`](/docs/reference/macro/lit): A string literal: `lit("a\"b")` splices as `"a\"b"`.
- [`lit_int`](/docs/reference/macro/lit_int): An integer literal.
- [`raw`](/docs/reference/macro/raw): Raw source, spliced as is.
- [`concat`](/docs/reference/macro/concat): Combine several generated item lists.
- [`ident`](/docs/reference/macro/fn.ident): A name, for splicing generated identifiers: `${ident("to_" + n)}`.
- [`decimal`](/docs/reference/macro/decimal): A decimal integer the compiler wrote (`-` then digits, in range).
- [`attr_index`](/docs/reference/macro/attr_index): Index of the attribute called `name`, or `-1`.
