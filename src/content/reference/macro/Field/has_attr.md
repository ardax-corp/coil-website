---
slug: "macro/Field/has_attr"
title: "Field::has_attr"
description: "True when the field carries #[name(...)]."
module: "macro"
kind: "method"
name: "has_attr"
parent: "Field"
signature: "pub fn has_attr(string name) -> bool"
import: "use macro::{Field};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/macro.hy#L332"
order: 0
---

True when the field carries `#[name(...)]`.

Called on a `Field` value as `value.has_attr(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`bool`

## See also

- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Field::attr_str`](/docs/reference/macro/Field/attr_str): `#[attr(key = "value")]` on this field, or `fallback`.
