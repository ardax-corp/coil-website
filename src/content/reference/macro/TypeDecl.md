---
slug: "macro/TypeDecl"
title: "TypeDecl"
description: "A class or enum declaration handed to a derive or attribute macro."
module: "macro"
kind: "class"
name: "TypeDecl"
signature: "class TypeDecl"
import: "use macro::{TypeDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/prelude/macro.hy#L386"
order: 8
---

A class or enum declaration handed to a derive or attribute macro.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `Ident` |  |
| `kind` | `string` | `"class"` or `"enum"`. |
| `generics` | `Vec<Ident>` |  |
| `field_list` | `Vec<Field>` |  |
| `variant_list` | `Vec<Variant>` |  |
| `attrs` | `Vec<Attr>` |  |
| `repr` | `string` | `#[repr(...)]` backing (`"int"`, …) or the inferred scalar backing, else `""`. |
| `module` | `string` | Module path the declaration lives in (`""` for the entry file). |
| `docs` | `Vec<string>` |  |
| `source` | `string` | The declaration as written (an attribute macro's own attribute removed). |

## Methods

| Name | Description |
|------|-------------|
| [`is_class`](/docs/reference/macro/TypeDecl/is_class) |  |
| [`self_type`](/docs/reference/macro/TypeDecl/self_type) | The type as written in a signature: `Name`, or `Name<T, U>` for a generic type. |
| [`impl_head`](/docs/reference/macro/TypeDecl/impl_head) | Head of an `impl Trait for …` for this type: `Name`, or for a generic type `Name<T: bound, U: bound>`, every type parameter bounded by `bound` (`"Show"`, `"Ord + Eq"`). |
| [`is_enum`](/docs/reference/macro/TypeDecl/is_enum) |  |
| [`fields`](/docs/reference/macro/TypeDecl/fields) | Class fields (empty for an enum). |
| [`variants`](/docs/reference/macro/TypeDecl/variants) | Enum variants (empty for a class). |
| [`has_attr`](/docs/reference/macro/TypeDecl/has_attr) |  |
| [`attr_str`](/docs/reference/macro/TypeDecl/attr_str) |  |

## See also

- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
