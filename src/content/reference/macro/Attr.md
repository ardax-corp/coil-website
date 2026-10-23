---
slug: "macro/Attr"
title: "Attr"
description: "#[name(args)] on a declaration, field or variant."
module: "macro"
kind: "class"
name: "Attr"
signature: "class Attr"
import: "use macro::{Attr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/macro.hy#L247"
order: 5
---

`#[name(args)]` on a declaration, field or variant.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` |  |
| `args` | `Vec<AttrArg>` |  |

## Methods

| Name | Description |
|------|-------------|
| [`src`](/docs/reference/macro/Attr/src) | The attribute as written: `#[name(key = "v", 2)]`. |
| [`has`](/docs/reference/macro/Attr/has) | True when the attribute has an argument named `key`, or a bare `key`. |
| [`arg`](/docs/reference/macro/Attr/arg) | Value of the `key = value` argument, or `fallback`. |

## See also

- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`AttrArg`](/docs/reference/macro/AttrArg): One `key = value` (or positional `value`, with `key == ""`) attribute argument.
- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
