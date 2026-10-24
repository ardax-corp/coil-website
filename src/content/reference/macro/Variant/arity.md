---
slug: "macro/Variant/arity"
title: "Variant::arity"
description: "Number of payload values (0 for a unit variant)."
module: "macro"
kind: "method"
name: "arity"
parent: "Variant"
signature: "pub fn arity() -> int"
import: "use macro::{Variant};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/prelude/macro.hy#L369"
order: 3
---

Number of payload values (0 for a unit variant).

Called on a `Variant` value as `value.arity(…)`.

## Returns

`int`

## See also

- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`Variant::is_unit`](/docs/reference/macro/Variant/is_unit)
- [`Variant::is_tuple`](/docs/reference/macro/Variant/is_tuple)
- [`Variant::is_record`](/docs/reference/macro/Variant/is_record)
- [`Variant::has_attr`](/docs/reference/macro/Variant/has_attr)
- [`Variant::attr_str`](/docs/reference/macro/Variant/attr_str)
