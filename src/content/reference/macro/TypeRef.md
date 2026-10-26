---
slug: "macro/TypeRef"
title: "TypeRef"
description: "A type annotation as written (not resolved): Vec<int>, json::Value."
module: "macro"
kind: "class"
name: "TypeRef"
signature: "class TypeRef"
import: "use macro::{TypeRef};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/macro.hy#L210"
order: 3
---

A type annotation as written (not resolved): [`Vec<int>`](/docs/reference/prelude/Vec), `json::Value`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `text` | `string` |  |
| `head_name` | `string` |  |
| `arg_refs` | `Vec<TypeRef>` |  |

## Methods

| Name | Description |
|------|-------------|
| [`str`](/docs/reference/macro/TypeRef/str) | The whole annotation, e.g. |
| [`src`](/docs/reference/macro/TypeRef/src) |  |
| [`head`](/docs/reference/macro/TypeRef/head) | The type constructor, e.g. |
| [`args`](/docs/reference/macro/TypeRef/args) | Generic arguments, e.g. |

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
