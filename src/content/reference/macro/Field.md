---
slug: "macro/Field"
title: "Field"
description: "A class field, or a field of a record enum variant."
module: "macro"
kind: "class"
name: "Field"
signature: "class Field"
import: "use macro::{Field};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/macro.hy#L322"
order: 6
---

A class field, or a field of a record enum variant.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `Ident` |  |
| `ty` | `TypeRef` |  |
| `is_pub` | `bool` |  |
| `attrs` | `Vec<Attr>` |  |
| `docs` | `Vec<string>` |  |

## Methods

| Name | Description |
|------|-------------|
| [`has_attr`](/docs/reference/macro/Field/has_attr) | True when the field carries `#[name(...)]`. |
| [`attr_str`](/docs/reference/macro/Field/attr_str) | `#[attr(key = "value")]` on this field, or `fallback`. |

## See also

- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
