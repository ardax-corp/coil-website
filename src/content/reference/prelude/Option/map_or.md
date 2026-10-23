---
slug: "prelude/Option/map_or"
title: "Option::map_or"
description: "f(value), or fallback when None."
module: "prelude"
kind: "method"
name: "map_or"
parent: "Option"
signature: "pub fn map_or<U>(U fallback, T -> U f) -> U"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/core.hy#L71"
order: 5
---

`f(value)`, or `fallback` when [`None`](/docs/reference/prelude/Option#variant-none).

Called on a `Option` value as `value.map_or(…)`.

## Parameters

| Name | Type |
|------|------|
| `fallback` | `U` |
| `f` | `T -> U` |

## Returns

`U`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is `Some`.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is `None`.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or `fallback` when `None`.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of `f` when `None`.
- [`Option::map`](/docs/reference/prelude/Option/map): `Some(f(value))`, or `None`.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): `f(value)` (itself an `Option`), or `None`.
- [`Option::or`](/docs/reference/prelude/Option/or): This option if it is `Some`, otherwise `other`.
