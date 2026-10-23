---
slug: "macro/FnDecl/signature"
title: "FnDecl::signature"
description: "name(T a, U b) -> R: the signature as written, under a new name."
module: "macro"
kind: "method"
name: "signature"
parent: "FnDecl"
signature: "pub fn signature(string name) -> string"
import: "use macro::{FnDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/macro.hy#L515"
order: 1
---

`name(T a, U b) -> R`: the signature as written, under a new name.

Called on a `FnDecl` value as `value.signature(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`string`

## See also

- [`FnDecl`](/docs/reference/macro/FnDecl): A function or method handed to an attribute macro.
- [`FnDecl::body_source`](/docs/reference/macro/FnDecl/body_source)
- [`FnDecl::with_name`](/docs/reference/macro/FnDecl/with_name): The function under another name, with its remaining attributes: `#[other] pub fn name(T a) -> R { body }`.
- [`FnDecl::contract_clauses`](/docs/reference/macro/FnDecl/contract_clauses): The `requires` / `ensures` clauses, each as ` requires …` (empty when there are none).
- [`FnDecl::uses_clause`](/docs/reference/macro/FnDecl/uses_clause): `uses {read, write}` as declared (`uses {}` for none).
- [`FnDecl::call`](/docs/reference/macro/FnDecl/call): A call of `name` with this function's arguments (`self.name(a, b)` for an instance method).
- [`FnDecl::arg_names`](/docs/reference/macro/FnDecl/arg_names): `a, b`: the parameter names, for forwarding a call.
