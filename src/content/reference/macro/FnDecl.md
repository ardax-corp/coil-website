---
slug: "macro/FnDecl"
title: "FnDecl"
description: "A function or method handed to an attribute macro."
module: "macro"
kind: "class"
name: "FnDecl"
signature: "class FnDecl"
import: "use macro::{FnDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/prelude/macro.hy#L476"
order: 10
---

A function or method handed to an attribute macro.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `Ident` |  |
| `params` | `Vec<Param>` |  |
| `ret` | `TypeRef` | Return type as written, or [`unit`](/docs/reference/types/unit) when the function declares none. |
| `type_params` | `Vec<Ident>` |  |
| `attrs` | `Vec<Attr>` | Remaining attributes (the macro's own attribute is removed). |
| `owner` | `string` | Owning class for an `impl` method, else `""`. |
| `is_pub` | `bool` | `pub` (methods; top-level functions are always visible). |
| `is_static` | `bool` |  |
| `is_coro` | `bool` |  |
| `declares_effects` | `bool` | Declares its effects: `pure fn` or `uses {…}`. |
| `is_pure` | `bool` | Spelled `pure fn`. |
| `effects` | `Vec<string>` | The names in `uses {…}`: `read`, `write`, [`net`](/docs/reference/io/net), [`env`](/docs/reference/env), `exec`, [`ffi`](/docs/reference/ffi), [`thread`](/docs/reference/thread), `suspend`, `mutate`. |
| `requires` | `Vec<string>` | `requires` clauses as written after the keyword (`n >= 0` or `n >= 0, "message"`), in order. |
| `ensures` | `Vec<string>` | `ensures` clauses, like `requires`. |
| `docs` | `Vec<string>` |  |
| `body` | `string` | The body block as written, braces included. |
| `source` | `string` | The whole declaration as written (the macro's own attribute removed). |

## Methods

| Name | Description |
|------|-------------|
| [`body_source`](/docs/reference/macro/FnDecl/body_source) |  |
| [`signature`](/docs/reference/macro/FnDecl/signature) | `name(T a, U b) -> R`: the signature as written, under a new name. |
| [`with_name`](/docs/reference/macro/FnDecl/with_name) | The function under another name, with its remaining attributes: `#[other] pub fn name(T a) -> R { body }`. |
| [`contract_clauses`](/docs/reference/macro/FnDecl/contract_clauses) | The `requires` / `ensures` clauses, each as ` requires …` (empty when there are none). |
| [`uses_clause`](/docs/reference/macro/FnDecl/uses_clause) | `uses {read, write}` as declared (`uses {}` for none). |
| [`call`](/docs/reference/macro/FnDecl/call) | A call of `name` with this function's arguments (`self.name(a, b)` for an instance method). |
| [`arg_names`](/docs/reference/macro/FnDecl/arg_names) | `a, b`: the parameter names, for forwarding a call. |

## See also

- [`unit`](/docs/reference/types/unit)
- [`io::net`](/docs/reference/io/net)
- [`env`](/docs/reference/env)
- [`ffi`](/docs/reference/ffi)
- [`thread`](/docs/reference/thread)
- [`Code`](/docs/reference/macro/Code): Generated coil source: declarations, an expression, statements or a type.
- [`Ident`](/docs/reference/macro/Ident): A name as written in source.
- [`Expr`](/docs/reference/macro/Expr): A function-style macro argument as written: `f(1)`, `a + b`, `"text"`.
