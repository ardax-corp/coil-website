---
slug: "macro/Variant/has_attr"
title: "Variant::has_attr"
description: "Method Variant::has_attr."
module: "macro"
kind: "method"
name: "has_attr"
parent: "Variant"
signature: "pub fn has_attr(string name) -> bool"
import: "use macro::{Variant};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/macro.hy#L376"
order: 4
---

*No documentation yet.*

Called on a `Variant` value as `value.has_attr(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`bool`

## See also

- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`Variant::is_unit`](/docs/reference/macro/Variant/is_unit)
- [`Variant::is_tuple`](/docs/reference/macro/Variant/is_tuple)
- [`Variant::is_record`](/docs/reference/macro/Variant/is_record)
- [`Variant::arity`](/docs/reference/macro/Variant/arity): Number of payload values (0 for a unit variant).
- [`Variant::attr_str`](/docs/reference/macro/Variant/attr_str)
