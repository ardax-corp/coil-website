---
slug: "macro/TypeRef/head"
title: "TypeRef::head"
description: "The type constructor, e.g. Map."
module: "macro"
kind: "method"
name: "head"
parent: "TypeRef"
signature: "pub fn head() -> string"
import: "use macro::{TypeRef};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/prelude/macro.hy#L227"
order: 2
---

The type constructor, e.g. `Map`.

Called on a `TypeRef` value as `value.head(…)`.

## Returns

`string`

## See also

- [`TypeRef`](/docs/reference/macro/TypeRef): A type annotation as written (not resolved): Vec<int>, json::Value.
- [`TypeRef::str`](/docs/reference/macro/TypeRef/str): The whole annotation, e.g.
- [`TypeRef::src`](/docs/reference/macro/TypeRef/src)
- [`TypeRef::args`](/docs/reference/macro/TypeRef/args): Generic arguments, e.g.
