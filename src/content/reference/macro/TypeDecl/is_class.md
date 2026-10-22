---
slug: "macro/TypeDecl/is_class"
title: "TypeDecl::is_class"
description: "Method TypeDecl::is_class."
module: "macro"
kind: "method"
name: "is_class"
parent: "TypeDecl"
signature: "pub fn is_class() -> bool"
import: "use macro::{TypeDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/prelude/macro.hy#L404"
order: 0
---

*No documentation yet.*

Called on a `TypeDecl` value as `value.is_class(…)`.

## Returns

`bool`

## See also

- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
- [`TypeDecl::self_type`](/docs/reference/macro/TypeDecl/self_type): The type as written in a signature: Name, or Name<T, U> for a generic type.
- [`TypeDecl::impl_head`](/docs/reference/macro/TypeDecl/impl_head): Head of an impl Trait for … for this type: Name, or for a generic type Name<T: bound, U: bound>, every type parameter bounded by bound ("Show", "Ord + Eq").
- [`TypeDecl::is_enum`](/docs/reference/macro/TypeDecl/is_enum)
- [`TypeDecl::fields`](/docs/reference/macro/TypeDecl/fields): Class fields (empty for an enum).
- [`TypeDecl::variants`](/docs/reference/macro/TypeDecl/variants): Enum variants (empty for a class).
- [`TypeDecl::has_attr`](/docs/reference/macro/TypeDecl/has_attr)
- [`TypeDecl::attr_str`](/docs/reference/macro/TypeDecl/attr_str)
