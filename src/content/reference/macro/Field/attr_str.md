---
slug: "macro/Field/attr_str"
title: "Field::attr_str"
description: "#[attr(key = \"value\")] on this field, or fallback."
module: "macro"
kind: "method"
name: "attr_str"
parent: "Field"
signature: "pub fn attr_str(string attr, string key, string fallback) -> string"
import: "use macro::{Field};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/prelude/macro.hy#L337"
order: 1
---

`#[attr(key = "value")]` on this field, or `fallback`.

Called on a `Field` value as `value.attr_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `attr` | `string` |
| `key` | `string` |
| `fallback` | `string` |

## Returns

`string`

## See also

- [`Field`](/docs/reference/macro/Field): A class field, or a field of a record enum variant.
- [`Field::has_attr`](/docs/reference/macro/Field/has_attr): True when the field carries `#[name(...)]`.
