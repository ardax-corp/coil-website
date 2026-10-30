---
slug: "macro/FnDecl/arg_names"
title: "FnDecl::arg_names"
description: "a, b: the parameter names, for forwarding a call."
module: "macro"
kind: "method"
name: "arg_names"
parent: "FnDecl"
signature: "pub fn arg_names() -> string"
import: "use macro::{FnDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/macro.hy#L596"
order: 6
---

`a, b`: the parameter names, for forwarding a call.

Called on a `FnDecl` value as `value.arg_names(…)`.

## Returns

`string`

## See also

- [`FnDecl`](/docs/reference/macro/FnDecl): A function or method handed to an attribute macro.
- [`FnDecl::body_source`](/docs/reference/macro/FnDecl/body_source)
- [`FnDecl::signature`](/docs/reference/macro/FnDecl/signature): `name(T a, U b) -> R`: the signature as written, under a new name.
- [`FnDecl::with_name`](/docs/reference/macro/FnDecl/with_name): The function under another name, with its remaining attributes: `#[other] pub fn name(T a) -> R { body }`.
- [`FnDecl::contract_clauses`](/docs/reference/macro/FnDecl/contract_clauses): The `requires` / `ensures` clauses, each as ` requires …` (empty when there are none).
- [`FnDecl::uses_clause`](/docs/reference/macro/FnDecl/uses_clause): `uses {read, write}` as declared (`uses {}` for none).
- [`FnDecl::call`](/docs/reference/macro/FnDecl/call): A call of `name` with this function's arguments (`self.name(a, b)` for an instance method).
