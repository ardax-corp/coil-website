---
slug: "macro/AttrArg"
title: "AttrArg"
description: "One key = value (or positional value, with key == \"\") attribute argument."
module: "macro"
kind: "class"
name: "AttrArg"
signature: "class AttrArg"
import: "use macro::{AttrArg};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/macro.hy#L238"
order: 4
---

One `key = value` (or positional `value`, with `key == ""`) attribute argument.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` |  |
| `value` | `string` | Literal value as written (strings without their quotes). |
| `kind` | `string` | `"string"`, `"int"`, `"float"`, `"bool"` or `"ident"`. |

## See also

- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
