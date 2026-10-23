---
slug: "prelude/Option/unwrap_or"
title: "Option::unwrap_or"
description: "The value, or fallback when None. x ?? fallback is the same."
module: "prelude"
kind: "method"
name: "unwrap_or"
parent: "Option"
signature: "pub fn unwrap_or(T fallback) -> T"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/core.hy#L47"
order: 2
---

The value, or `fallback` when [`None`](/docs/reference/prelude/Option#variant-none). `x ?? fallback` is the same.

Called on a `Option` value as `value.unwrap_or(…)`.

## Parameters

| Name | Type |
|------|------|
| `fallback` | `T` |

## Returns

`T`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is `Some`.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is `None`.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of `f` when `None`.
- [`Option::map`](/docs/reference/prelude/Option/map): `Some(f(value))`, or `None`.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): `f(value)`, or `fallback` when `None`.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): `f(value)` (itself an `Option`), or `None`.
- [`Option::or`](/docs/reference/prelude/Option/or): This option if it is `Some`, otherwise `other`.
