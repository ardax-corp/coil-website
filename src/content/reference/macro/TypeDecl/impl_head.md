---
slug: "macro/TypeDecl/impl_head"
title: "TypeDecl::impl_head"
description: "Head of an impl Trait for … for this type: Name, or for a generic type Name<T: bound, U: bound>, every type parameter bounded by bound (\"Show\", \"Ord + Eq\"). Write impl ${trait} for ${t.impl_head(\"Show\")} so a derive covers generic types too."
module: "macro"
kind: "method"
name: "impl_head"
parent: "TypeDecl"
signature: "pub fn impl_head(string bound) -> Code"
import: "use macro::{TypeDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/macro.hy#L430"
order: 2
---

Head of an `impl Trait for …` for this type: `Name`, or for a generic type `Name<T: bound, U: bound>`, every type parameter bounded by `bound` (`"Show"`, `"Ord + Eq"`). Write `impl ${trait} for ${t.impl_head("Show")}` so a derive covers generic types too.

Called on a `TypeDecl` value as `value.impl_head(…)`.

## Parameters

| Name | Type |
|------|------|
| `bound` | `string` |

## Returns

`Code`

## See also

- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
- [`TypeDecl::is_class`](/docs/reference/macro/TypeDecl/is_class)
- [`TypeDecl::self_type`](/docs/reference/macro/TypeDecl/self_type): The type as written in a signature: Name, or Name<T, U> for a generic type.
- [`TypeDecl::is_enum`](/docs/reference/macro/TypeDecl/is_enum)
- [`TypeDecl::fields`](/docs/reference/macro/TypeDecl/fields): Class fields (empty for an enum).
- [`TypeDecl::variants`](/docs/reference/macro/TypeDecl/variants): Enum variants (empty for a class).
- [`TypeDecl::has_attr`](/docs/reference/macro/TypeDecl/has_attr)
- [`TypeDecl::attr_str`](/docs/reference/macro/TypeDecl/attr_str)
