---
slug: "prelude/Option/and_then"
title: "Option::and_then"
description: "f(value) (itself an Option), or None."
module: "prelude"
kind: "method"
name: "and_then"
parent: "Option"
signature: "pub fn and_then<U>(T -> Option<U> f) -> Option<U>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/core.hy#L79"
order: 6
---

`f(value)` (itself an [`Option`](/docs/reference/prelude/Option)), or [`None`](/docs/reference/prelude/Option#variant-none).

Called on a `Option` value as `value.and_then(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `T -> Option<U>` |

## Returns

`Option<U>`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is `Some`.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is `None`.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or `fallback` when `None`.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of `f` when `None`.
- [`Option::map`](/docs/reference/prelude/Option/map): `Some(f(value))`, or `None`.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): `f(value)`, or `fallback` when `None`.
- [`Option::or`](/docs/reference/prelude/Option/or): This option if it is `Some`, otherwise `other`.
