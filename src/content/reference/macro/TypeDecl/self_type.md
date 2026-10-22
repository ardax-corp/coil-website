---
slug: "macro/TypeDecl/self_type"
title: "TypeDecl::self_type"
description: "The type as written in a signature: Name, or Name<T, U> for a generic type."
module: "macro"
kind: "method"
name: "self_type"
parent: "TypeDecl"
signature: "pub fn self_type() -> Code"
import: "use macro::{TypeDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/macro.hy#L410"
order: 1
---

The type as written in a signature: `Name`, or `Name<T, U>` for a generic type.

Called on a `TypeDecl` value as `value.self_type(…)`.

## Returns

`Code`

## See also

- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
- [`TypeDecl::is_class`](/docs/reference/macro/TypeDecl/is_class)
- [`TypeDecl::impl_head`](/docs/reference/macro/TypeDecl/impl_head): Head of an `impl Trait for …` for this type: `Name`, or for a generic type `Name<T: bound, U: bound>`, every type parameter bounded by `bound` (`"Show"`, `"Ord + Eq"`).
- [`TypeDecl::is_enum`](/docs/reference/macro/TypeDecl/is_enum)
- [`TypeDecl::fields`](/docs/reference/macro/TypeDecl/fields): Class fields (empty for an enum).
- [`TypeDecl::variants`](/docs/reference/macro/TypeDecl/variants): Enum variants (empty for a class).
- [`TypeDecl::has_attr`](/docs/reference/macro/TypeDecl/has_attr)
- [`TypeDecl::attr_str`](/docs/reference/macro/TypeDecl/attr_str)
