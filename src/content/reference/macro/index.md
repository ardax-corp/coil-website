---
slug: "macro/index"
title: "macro"
description: "What a macro receives and returns: Code, Expr, TypeDecl, FnDecl and helpers."
module: "macro"
kind: "module"
name: "macro"
origin: "embedded"
auto: false
order: 14
---

Macros are Coil functions that run at compile time and return code. A derive
receives a [`TypeDecl`](/docs/reference/macro/TypeDecl), an attribute macro an [`FnDecl`](/docs/reference/macro/FnDecl) or [`TypeDecl`](/docs/reference/macro/TypeDecl), and a
function-style macro (`name!(…)`) its arguments as [`Expr`](/docs/reference/macro/Expr). Each returns
[`Code`](/docs/reference/macro/Code), usually built with a `quote` block. See [Macros](/docs/language/macros)
and the [macros tutorial](/docs/manual/tutorial/13-macros).

Written in Coil and shipped inside the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use macro::{Code, Ident};
```

## Types

| Name | Description |
|------|-------------|
| [`Code`](/docs/reference/macro/Code) | Generated coil source: declarations, an expression, statements or a type. |
| [`Ident`](/docs/reference/macro/Ident) | A name as written in source. |
| [`Expr`](/docs/reference/macro/Expr) | A function-style macro argument as written: `f(1)`, `a + b`, `"text"`. |
| [`TypeRef`](/docs/reference/macro/TypeRef) | A type annotation as written (not resolved): [`Vec<int>`](/docs/reference/prelude/Vec), `json::Value`. |
| [`AttrArg`](/docs/reference/macro/AttrArg) | One `key = value` (or positional `value`, with `key == ""`) attribute argument. |
| [`Attr`](/docs/reference/macro/Attr) | `#[name(args)]` on a declaration, field or variant. |
| [`Field`](/docs/reference/macro/Field) | A class field, or a field of a record enum variant. |
| [`Variant`](/docs/reference/macro/Variant) | One enum variant. |
| [`TypeDecl`](/docs/reference/macro/TypeDecl) | A class or enum declaration handed to a derive or attribute macro. |
| [`Param`](/docs/reference/macro/Param) | One function parameter. |
| [`FnDecl`](/docs/reference/macro/FnDecl) | A function or method handed to an attribute macro. |
| [`Reader`](/docs/reference/macro/Reader) | Reads a macro call's input: length-prefixed fields (`<len>:<bytes>`, lists as a count then their items) in constructor order, written by the compiler (`macros::encode`). |

## Functions

| Name | Description |
|------|-------------|
| [`join`](/docs/reference/macro/join) | Join fragments with `sep` (the lowering of `$(xs) sep *`). |
| [`lit`](/docs/reference/macro/lit) | A string literal: `lit("a\"b")` splices as `"a\"b"`. |
| [`lit_int`](/docs/reference/macro/lit_int) | An integer literal. |
| [`raw`](/docs/reference/macro/raw) | Raw source, spliced as is. |
| [`concat`](/docs/reference/macro/concat) | Combine several generated item lists. |
| [`ident`](/docs/reference/macro/ident) | A name, for splicing generated identifiers: `${ident("to_" + n)}`. |
| [`decimal`](/docs/reference/macro/decimal) | A decimal integer the compiler wrote (`-` then digits, in range). |
| [`attr_index`](/docs/reference/macro/attr_index) | Index of the attribute called `name`, or `-1`. |
| [`attr_value`](/docs/reference/macro/attr_value) | `#[attr(key = "value")]` from an attribute list, or `fallback`. |
