---
slug: "macro/Attr/src"
title: "Attr::src"
description: "The attribute as written: #[name(key = \"v\", 2)]."
module: "macro"
kind: "method"
name: "src"
parent: "Attr"
signature: "pub fn src() -> string"
import: "use macro::{Attr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/prelude/macro.hy#L254"
order: 0
---

The attribute as written: `#[name(key = "v", 2)]`.

Called on a `Attr` value as `value.src(…)`.

## Returns

`string`

## See also

- [`Attr`](/docs/reference/macro/Attr): #[name(args)] on a declaration, field or variant.
- [`Attr::has`](/docs/reference/macro/Attr/has): True when the attribute has an argument named key, or a bare key.
- [`Attr::arg`](/docs/reference/macro/Attr/arg): Value of the key = value argument, or fallback.
