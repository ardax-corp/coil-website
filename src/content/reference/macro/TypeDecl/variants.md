---
slug: "macro/TypeDecl/variants"
title: "TypeDecl::variants"
description: "Enum variants (empty for a class)."
module: "macro"
kind: "method"
name: "variants"
parent: "TypeDecl"
signature: "pub fn variants() -> Vec<Variant>"
import: "use macro::{TypeDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/macro.hy#L456"
order: 5
---

Enum variants (empty for a class).

Called on a `TypeDecl` value as `value.variants(…)`.

## Returns

`Vec<Variant>`

## See also

- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
- [`TypeDecl::is_class`](/docs/reference/macro/TypeDecl/is_class)
- [`TypeDecl::self_type`](/docs/reference/macro/TypeDecl/self_type): The type as written in a signature: Name, or Name<T, U> for a generic type.
- [`TypeDecl::impl_head`](/docs/reference/macro/TypeDecl/impl_head): Head of an impl Trait for … for this type: Name, or for a generic type Name<T: bound, U: bound>, every type parameter bounded by bound ("Show", "Ord + Eq").
- [`TypeDecl::is_enum`](/docs/reference/macro/TypeDecl/is_enum)
- [`TypeDecl::fields`](/docs/reference/macro/TypeDecl/fields): Class fields (empty for an enum).
- [`TypeDecl::has_attr`](/docs/reference/macro/TypeDecl/has_attr)
- [`TypeDecl::attr_str`](/docs/reference/macro/TypeDecl/attr_str)
