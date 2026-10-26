---
slug: "macro/TypeRef/str"
title: "TypeRef::str"
description: "The whole annotation, e.g. Map<string, int>."
module: "macro"
kind: "method"
name: "str"
parent: "TypeRef"
signature: "pub fn str() -> string"
import: "use macro::{TypeRef};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/prelude/macro.hy#L218"
order: 0
---

The whole annotation, e.g. `Map<string, int>`.

Called on a `TypeRef` value as `value.str(…)`.

## Returns

`string`

## See also

- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): `Vec<int>`, `json::Value`.
- [`TypeRef::src`](/docs/reference/macro/TypeRef/src)
- [`TypeRef::head`](/docs/reference/macro/TypeRef/head): The type constructor, e.g.
- [`TypeRef::args`](/docs/reference/macro/TypeRef/args): Generic arguments, e.g.
