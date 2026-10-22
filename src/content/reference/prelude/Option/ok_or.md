---
slug: "prelude/Option/ok_or"
title: "Option::ok_or"
description: "Ok(value), or Err(err) when None."
module: "prelude"
kind: "method"
name: "ok_or"
parent: "Option"
signature: "pub fn ok_or<E>(E err) -> Result<T, E>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/core.hy#L115"
order: 10
---

`Ok(value)`, or `Err(err)` when [`None`](/docs/reference/prelude/Option#variant-none).

Called on a `Option` value as `value.ok_or(…)`.

## Parameters

| Name | Type |
|------|------|
| `err` | `E` |

## Returns

`Result<T, E>`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is Some.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is None.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or fallback when None.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of f when None.
- [`Option::map`](/docs/reference/prelude/Option/map): Some(f(value)), or None.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): f(value), or fallback when None.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): f(value) (itself an Option), or None.
