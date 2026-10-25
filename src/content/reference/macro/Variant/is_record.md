---
slug: "macro/Variant/is_record"
title: "Variant::is_record"
description: "Method Variant::is_record."
module: "macro"
kind: "method"
name: "is_record"
parent: "Variant"
signature: "pub fn is_record() -> bool"
import: "use macro::{Variant};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/macro.hy#L364"
order: 2
---

*No documentation yet.*

Called on a `Variant` value as `value.is_record(…)`.

## Returns

`bool`

## See also

- [`Variant`](/docs/reference/macro/Variant): One enum variant.
- [`Variant::is_unit`](/docs/reference/macro/Variant/is_unit)
- [`Variant::is_tuple`](/docs/reference/macro/Variant/is_tuple)
- [`Variant::arity`](/docs/reference/macro/Variant/arity): Number of payload values (0 for a unit variant).
- [`Variant::has_attr`](/docs/reference/macro/Variant/has_attr)
- [`Variant::attr_str`](/docs/reference/macro/Variant/attr_str)
