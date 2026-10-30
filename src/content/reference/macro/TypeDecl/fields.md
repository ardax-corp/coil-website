---
slug: "macro/TypeDecl/fields"
title: "TypeDecl::fields"
description: "Class fields (empty for an enum)."
module: "macro"
kind: "method"
name: "fields"
parent: "TypeDecl"
signature: "pub fn fields() -> Vec<Field>"
import: "use macro::{TypeDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/prelude/macro.hy#L451"
order: 4
---

Class fields (empty for an enum).

Called on a `TypeDecl` value as `value.fields(…)`.

## Returns

`Vec<Field>`

## See also

- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
- [`TypeDecl::is_class`](/docs/reference/macro/TypeDecl/is_class)
- [`TypeDecl::self_type`](/docs/reference/macro/TypeDecl/self_type): The type as written in a signature: `Name`, or `Name<T, U>` for a generic type.
- [`TypeDecl::impl_head`](/docs/reference/macro/TypeDecl/impl_head): Head of an `impl Trait for …` for this type: `Name`, or for a generic type `Name<T: bound, U: bound>`, every type parameter bounded by `bound` (`"Show"`, `"Ord + Eq"`).
- [`TypeDecl::is_enum`](/docs/reference/macro/TypeDecl/is_enum)
- [`TypeDecl::variants`](/docs/reference/macro/TypeDecl/variants): Enum variants (empty for a class).
- [`TypeDecl::has_attr`](/docs/reference/macro/TypeDecl/has_attr)
- [`TypeDecl::attr_str`](/docs/reference/macro/TypeDecl/attr_str)
