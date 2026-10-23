---
slug: "macro/TypeRef/args"
title: "TypeRef::args"
description: "Generic arguments, e.g. [string, int]."
module: "macro"
kind: "method"
name: "args"
parent: "TypeRef"
signature: "pub fn args() -> Vec<TypeRef>"
import: "use macro::{TypeRef};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/macro.hy#L232"
order: 3
---

Generic arguments, e.g. `[string, int]`.

Called on a `TypeRef` value as `value.args(…)`.

## Returns

`Vec<TypeRef>`

## See also

- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`TypeRef::str`](/docs/reference/macro/TypeRef/str): The whole annotation, e.g.
- [`TypeRef::src`](/docs/reference/macro/TypeRef/src)
- [`TypeRef::head`](/docs/reference/macro/TypeRef/head): The type constructor, e.g.
