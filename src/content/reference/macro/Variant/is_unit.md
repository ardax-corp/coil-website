---
slug: "macro/Variant/is_unit"
title: "Variant::is_unit"
description: "Method Variant::is_unit."
module: "macro"
kind: "method"
name: "is_unit"
parent: "Variant"
signature: "pub fn is_unit() -> bool"
import: "use macro::{Variant};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/prelude/macro.hy#L356"
order: 0
---

*No documentation yet.*

Called on a `Variant` value as `value.is_unit(…)`.

## Returns

`bool`

## See also

- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`Variant::is_tuple`](/docs/reference/macro/Variant/is_tuple)
- [`Variant::is_record`](/docs/reference/macro/Variant/is_record)
- [`Variant::arity`](/docs/reference/macro/Variant/arity): Number of payload values (0 for a unit variant).
- [`Variant::has_attr`](/docs/reference/macro/Variant/has_attr)
- [`Variant::attr_str`](/docs/reference/macro/Variant/attr_str)
