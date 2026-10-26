---
slug: "prelude/Option/map"
title: "Option::map"
description: "Some(f(value)), or None."
module: "prelude"
kind: "method"
name: "map"
parent: "Option"
signature: "pub fn map<U>(T -> U f) -> Option<U>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/prelude/core.hy#L63"
order: 4
---

`Some(f(value))`, or [`None`](/docs/reference/prelude/Option#variant-none).

Called on a `Option` value as `value.map(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `T -> U` |

## Returns

`Option<U>`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is `Some`.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is `None`.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or `fallback` when `None`.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of `f` when `None`.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): `f(value)`, or `fallback` when `None`.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): `f(value)` (itself an `Option`), or `None`.
- [`Option::or`](/docs/reference/prelude/Option/or): This option if it is `Some`, otherwise `other`.
