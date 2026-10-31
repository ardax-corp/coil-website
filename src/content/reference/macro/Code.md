---
slug: "macro/Code"
title: "Code"
description: "Generated coil source: declarations, an expression, statements or a type."
module: "macro"
kind: "class"
name: "Code"
signature: "class Code"
import: "use macro::{Code};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.coil#L19"
order: 0
---

Generated coil source: declarations, an expression, statements or a type.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `text` | `string` |  |

## Methods

| Name | Description |
|------|-------------|
| [`src`](/docs/reference/macro/Code/src) |  |

## See also

- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
