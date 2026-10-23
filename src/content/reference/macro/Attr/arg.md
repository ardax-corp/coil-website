---
slug: "macro/Attr/arg"
title: "Attr::arg"
description: "Value of the key = value argument, or fallback."
module: "macro"
kind: "method"
name: "arg"
parent: "Attr"
signature: "pub fn arg(string key, string fallback) -> string"
import: "use macro::{Attr};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/macro.hy#L289"
order: 2
---

Value of the `key = value` argument, or `fallback`.

Called on a `Attr` value as `value.arg(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |
| `fallback` | `string` |

## Returns

`string`

## See also

- [`Attr`](/docs/reference/macro/Attr): `#[name(args)]` on a declaration, field or variant.
- [`Attr::src`](/docs/reference/macro/Attr/src): The attribute as written: `#[name(key = "v", 2)]`.
- [`Attr::has`](/docs/reference/macro/Attr/has): True when the attribute has an argument named `key`, or a bare `key`.
