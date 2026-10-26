---
slug: "macro/Attr/has"
title: "Attr::has"
description: "True when the attribute has an argument named key, or a bare key."
module: "macro"
kind: "method"
name: "has"
parent: "Attr"
signature: "pub fn has(string key) -> bool"
import: "use macro::{Attr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/macro.hy#L279"
order: 1
---

True when the attribute has an argument named `key`, or a bare `key`.

Called on a `Attr` value as `value.has(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## Returns

`bool`

## See also

- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Attr::src`](/docs/reference/macro/Attr/src): The attribute as written: `#[name(key = "v", 2)]`.
- [`Attr::arg`](/docs/reference/macro/Attr/arg): Value of the `key = value` argument, or `fallback`.
