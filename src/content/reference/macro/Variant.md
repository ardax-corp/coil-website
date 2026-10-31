---
slug: "macro/Variant"
title: "Variant"
description: "One enum variant. shape is \"unit\", \"tuple\" (payload in tuple) or \"record\" (payload in fields)."
module: "macro"
kind: "class"
name: "Variant"
signature: "class Variant"
import: "use macro::{Variant};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.coil#L344"
order: 7
---

One enum variant. `shape` is `"unit"`, `"tuple"` (payload in `tuple`) or `"record"` (payload in `fields`).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `Ident` |  |
| `shape` | `string` |  |
| `tuple` | `Vec<TypeRef>` |  |
| `fields` | `Vec<Field>` |  |
| `value` | `string` | Scalar discriminant as written (`200`, `"ok"`), or `""`. |
| `attrs` | `Vec<Attr>` |  |
| `docs` | `Vec<string>` |  |

## Methods

| Name | Description |
|------|-------------|
| [`is_unit`](/docs/reference/macro/Variant/is_unit) |  |
| [`is_tuple`](/docs/reference/macro/Variant/is_tuple) |  |
| [`is_record`](/docs/reference/macro/Variant/is_record) |  |
| [`arity`](/docs/reference/macro/Variant/arity) | Number of payload values (0 for a unit variant). |
| [`has_attr`](/docs/reference/macro/Variant/has_attr) |  |
| [`attr_str`](/docs/reference/macro/Variant/attr_str) |  |

## See also

- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
