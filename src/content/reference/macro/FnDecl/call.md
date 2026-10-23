---
slug: "macro/FnDecl/call"
title: "FnDecl::call"
description: "A call of name with this function's arguments (self.name(a, b) for an instance method)."
module: "macro"
kind: "method"
name: "call"
parent: "FnDecl"
signature: "pub fn call(string name) -> string"
import: "use macro::{FnDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/macro.hy#L587"
order: 5
---

A call of `name` with this function's arguments (`self.name(a, b)` for an instance method).

Called on a `FnDecl` value as `value.call(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`string`

## See also

- [`FnDecl`](/docs/reference/macro/FnDecl): A function or method handed to an attribute macro.
- [`FnDecl::body_source`](/docs/reference/macro/FnDecl/body_source)
- [`FnDecl::signature`](/docs/reference/macro/FnDecl/signature): `name(T a, U b) -> R`: the signature as written, under a new name.
- [`FnDecl::with_name`](/docs/reference/macro/FnDecl/with_name): The function under another name, with its remaining attributes: `#[other] pub fn name(T a) -> R { body }`.
- [`FnDecl::contract_clauses`](/docs/reference/macro/FnDecl/contract_clauses): The `requires` / `ensures` clauses, each as ` requires …` (empty when there are none).
- [`FnDecl::uses_clause`](/docs/reference/macro/FnDecl/uses_clause): `uses {read, write}` as declared (`uses {}` for none).
- [`FnDecl::arg_names`](/docs/reference/macro/FnDecl/arg_names): `a, b`: the parameter names, for forwarding a call.
