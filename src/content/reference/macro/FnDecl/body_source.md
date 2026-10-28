---
slug: "macro/FnDecl/body_source"
title: "FnDecl::body_source"
description: "Method FnDecl::body_source."
module: "macro"
kind: "method"
name: "body_source"
parent: "FnDecl"
signature: "pub fn body_source() -> string"
import: "use macro::{FnDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/prelude/macro.hy#L510"
order: 0
---

*No documentation yet.*

Called on a `FnDecl` value as `value.body_source(…)`.

## Returns

`string`

## See also

- [`FnDecl`](/docs/reference/macro/FnDecl): A function or method handed to an attribute macro.
- [`FnDecl::signature`](/docs/reference/macro/FnDecl/signature): `name(T a, U b) -> R`: the signature as written, under a new name.
- [`FnDecl::with_name`](/docs/reference/macro/FnDecl/with_name): The function under another name, with its remaining attributes: `#[other] pub fn name(T a) -> R { body }`.
- [`FnDecl::contract_clauses`](/docs/reference/macro/FnDecl/contract_clauses): The `requires` / `ensures` clauses, each as ` requires …` (empty when there are none).
- [`FnDecl::uses_clause`](/docs/reference/macro/FnDecl/uses_clause): `uses {read, write}` as declared (`uses {}` for none).
- [`FnDecl::call`](/docs/reference/macro/FnDecl/call): A call of `name` with this function's arguments (`self.name(a, b)` for an instance method).
- [`FnDecl::arg_names`](/docs/reference/macro/FnDecl/arg_names): `a, b`: the parameter names, for forwarding a call.
