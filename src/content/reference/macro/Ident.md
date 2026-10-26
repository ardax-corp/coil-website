---
slug: "macro/Ident"
title: "Ident"
description: "A name as written in source."
module: "macro"
kind: "class"
name: "Ident"
signature: "class Ident"
import: "use macro::{Ident};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/macro.hy#L76"
order: 1
---

A name as written in source.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` |  |

## Methods

| Name | Description |
|------|-------------|
| [`str`](/docs/reference/macro/Ident/str) |  |
| [`src`](/docs/reference/macro/Ident/src) |  |

## See also

- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
