---
slug: "macro/Variant/attr_str"
title: "Variant::attr_str"
description: "Method Variant::attr_str."
module: "macro"
kind: "method"
name: "attr_str"
parent: "Variant"
signature: "pub fn attr_str(string attr, string key, string fallback) -> string"
import: "use macro::{Variant};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/prelude/macro.hy#L380"
order: 5
---

*No documentation yet.*

Called on a `Variant` value as `value.attr_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `attr` | `string` |
| `key` | `string` |
| `fallback` | `string` |

## Returns

`string`

## See also

- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`Variant::is_unit`](/docs/reference/macro/Variant/is_unit)
- [`Variant::is_tuple`](/docs/reference/macro/Variant/is_tuple)
- [`Variant::is_record`](/docs/reference/macro/Variant/is_record)
- [`Variant::arity`](/docs/reference/macro/Variant/arity): Number of payload values (0 for a unit variant).
- [`Variant::has_attr`](/docs/reference/macro/Variant/has_attr)
