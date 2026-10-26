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
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/macro.hy#L218"
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
