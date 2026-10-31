---
slug: "macro/FnDecl/contract_clauses"
title: "FnDecl::contract_clauses"
description: "The requires / ensures clauses, each as requires … (empty when there are none)."
module: "macro"
kind: "method"
name: "contract_clauses"
parent: "FnDecl"
signature: "pub fn contract_clauses() -> string"
import: "use macro::{FnDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.hy#L560"
order: 3
---

The `requires` / `ensures` clauses, each as ` requires …` (empty when there are none).

Called on a `FnDecl` value as `value.contract_clauses(…)`.

## Returns

`string`

## See also

- [`FnDecl`](/docs/reference/macro/FnDecl): A function or method handed to an attribute macro.
- [`FnDecl::body_source`](/docs/reference/macro/FnDecl/body_source)
- [`FnDecl::signature`](/docs/reference/macro/FnDecl/signature): `name(T a, U b) -> R`: the signature as written, under a new name.
- [`FnDecl::with_name`](/docs/reference/macro/FnDecl/with_name): The function under another name, with its remaining attributes: `#[other] pub fn name(T a) -> R { body }`.
- [`FnDecl::uses_clause`](/docs/reference/macro/FnDecl/uses_clause): `uses {read, write}` as declared (`uses {}` for none).
- [`FnDecl::call`](/docs/reference/macro/FnDecl/call): A call of `name` with this function's arguments (`self.name(a, b)` for an instance method).
- [`FnDecl::arg_names`](/docs/reference/macro/FnDecl/arg_names): `a, b`: the parameter names, for forwarding a call.
