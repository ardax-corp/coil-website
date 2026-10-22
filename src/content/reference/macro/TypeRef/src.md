---
slug: "macro/TypeRef/src"
title: "TypeRef::src"
description: "Method TypeRef::src."
module: "macro"
kind: "method"
name: "src"
parent: "TypeRef"
signature: "pub fn src() -> string"
import: "use macro::{TypeRef};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/prelude/macro.hy#L222"
order: 1
---

*No documentation yet.*

Called on a `TypeRef` value as `value.src(…)`.

## Returns

`string`

## See also

- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): Vec<int>, json::Value.
- [`TypeRef::str`](/docs/reference/macro/TypeRef/str): The whole annotation, e.g.
- [`TypeRef::head`](/docs/reference/macro/TypeRef/head): The type constructor, e.g.
- [`TypeRef::args`](/docs/reference/macro/TypeRef/args): Generic arguments, e.g.
