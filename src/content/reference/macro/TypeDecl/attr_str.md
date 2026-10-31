---
slug: "macro/TypeDecl/attr_str"
title: "TypeDecl::attr_str"
description: "Method TypeDecl::attr_str."
module: "macro"
kind: "method"
name: "attr_str"
parent: "TypeDecl"
signature: "pub fn attr_str(string attr, string key, string fallback) -> string"
import: "use macro::{TypeDecl};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.hy#L464"
order: 7
---

*No documentation yet.*

Called on a `TypeDecl` value as `value.attr_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `attr` | `string` |
| `key` | `string` |
| `fallback` | `string` |

## Returns

`string`

## See also

- [`TypeDecl`](/docs/reference/macro/TypeDecl): A class or enum declaration handed to a derive or attribute macro.
- [`TypeDecl::is_class`](/docs/reference/macro/TypeDecl/is_class)
- [`TypeDecl::self_type`](/docs/reference/macro/TypeDecl/self_type): The type as written in a signature: `Name`, or `Name<T, U>` for a generic type.
- [`TypeDecl::impl_head`](/docs/reference/macro/TypeDecl/impl_head): Head of an `impl Trait for …` for this type: `Name`, or for a generic type `Name<T: bound, U: bound>`, every type parameter bounded by `bound` (`"Show"`, `"Ord + Eq"`).
- [`TypeDecl::is_enum`](/docs/reference/macro/TypeDecl/is_enum)
- [`TypeDecl::fields`](/docs/reference/macro/TypeDecl/fields): Class fields (empty for an enum).
- [`TypeDecl::variants`](/docs/reference/macro/TypeDecl/variants): Enum variants (empty for a class).
- [`TypeDecl::has_attr`](/docs/reference/macro/TypeDecl/has_attr)
