---
slug: "macro/FnDecl/uses_clause"
title: "FnDecl::uses_clause"
description: "uses {read, write} as declared (uses {} for none)."
module: "macro"
kind: "method"
name: "uses_clause"
parent: "FnDecl"
signature: "pub fn uses_clause() -> string"
import: "use macro::{FnDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/macro.hy#L572"
order: 4
---

`uses {read, write}` as declared (`uses {}` for none).

Called on a `FnDecl` value as `value.uses_clause(…)`.

## Returns

`string`

## See also

- [`FnDecl`](/docs/reference/macro/FnDecl): A function or method handed to an attribute macro.
- [`FnDecl::body_source`](/docs/reference/macro/FnDecl/body_source)
- [`FnDecl::signature`](/docs/reference/macro/FnDecl/signature): `name(T a, U b) -> R`: the signature as written, under a new name.
- [`FnDecl::with_name`](/docs/reference/macro/FnDecl/with_name): The function under another name, with its remaining attributes: `#[other] pub fn name(T a) -> R { body }`.
- [`FnDecl::contract_clauses`](/docs/reference/macro/FnDecl/contract_clauses): The `requires` / `ensures` clauses, each as ` requires …` (empty when there are none).
- [`FnDecl::call`](/docs/reference/macro/FnDecl/call): A call of `name` with this function's arguments (`self.name(a, b)` for an instance method).
- [`FnDecl::arg_names`](/docs/reference/macro/FnDecl/arg_names): `a, b`: the parameter names, for forwarding a call.
