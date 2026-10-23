---
slug: "prelude/Option/unwrap_or_else"
title: "Option::unwrap_or_else"
description: "The value, or the result of f when None."
module: "prelude"
kind: "method"
name: "unwrap_or_else"
parent: "Option"
signature: "pub fn unwrap_or_else(fn() -> T f) -> T"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/core.hy#L55"
order: 3
---

The value, or the result of `f` when [`None`](/docs/reference/prelude/Option#variant-none).

Called on a `Option` value as `value.unwrap_or_else(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn() -> T` |

## Returns

`T`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is `Some`.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is `None`.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or `fallback` when `None`.
- [`Option::map`](/docs/reference/prelude/Option/map): `Some(f(value))`, or `None`.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): `f(value)`, or `fallback` when `None`.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): `f(value)` (itself an `Option`), or `None`.
- [`Option::or`](/docs/reference/prelude/Option/or): This option if it is `Some`, otherwise `other`.
