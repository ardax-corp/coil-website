---
slug: "macro/Reader"
title: "Reader"
description: "Reads a macro call's input: length-prefixed fields (<len>:<bytes>, lists as a count then their items) in constructor order, written by the compiler (macros::encode)."
module: "macro"
kind: "class"
name: "Reader"
signature: "class Reader"
import: "use macro::{Reader};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/macro.hy#L613"
order: 11
---

Reads a macro call's input: length-prefixed fields (`<len>:<bytes>`, lists as a count then their items) in constructor order, written by the compiler (`macros::encode`).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | `Vec<byte>` |  |
| `pos` | `int` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`over`](/docs/reference/macro/Reader/over) |  |

## Methods

| Name | Description |
|------|-------------|
| [`str`](/docs/reference/macro/Reader/str) | One field. |
| [`int`](/docs/reference/macro/Reader/int) | A field holding a decimal integer, possibly negative. |
| [`bool`](/docs/reference/macro/Reader/bool) |  |
| [`strings`](/docs/reference/macro/Reader/strings) |  |
| [`ident`](/docs/reference/macro/Reader/ident) |  |
| [`expr`](/docs/reference/macro/Reader/expr) | A macro argument: kind, text, then its value (kind, text, exponent). |
| [`exprs`](/docs/reference/macro/Reader/exprs) |  |
| [`idents`](/docs/reference/macro/Reader/idents) |  |
| [`type_ref`](/docs/reference/macro/Reader/type_ref) |  |
| [`type_refs`](/docs/reference/macro/Reader/type_refs) |  |
| [`attrs`](/docs/reference/macro/Reader/attrs) |  |
| [`field`](/docs/reference/macro/Reader/field) |  |
| [`fields`](/docs/reference/macro/Reader/fields) |  |
| [`variants`](/docs/reference/macro/Reader/variants) |  |
| [`type_decl`](/docs/reference/macro/Reader/type_decl) |  |
| [`fn_decl`](/docs/reference/macro/Reader/fn_decl) |  |

## See also

- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
