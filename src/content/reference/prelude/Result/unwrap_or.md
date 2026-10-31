---
slug: "prelude/Result/unwrap_or"
title: "Result::unwrap_or"
description: "The Ok value, or fallback on Err."
module: "prelude"
kind: "method"
name: "unwrap_or"
parent: "Result"
signature: "pub fn unwrap_or(T fallback) -> T"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/core.coil#L157"
order: 4
---

The [`Ok`](/docs/reference/prelude/Result#variant-ok) value, or `fallback` on [`Err`](/docs/reference/prelude/Result#variant-err).

Called on a `Result` value as `value.unwrap_or(…)`.

## Parameters

| Name | Type |
|------|------|
| `fallback` | `T` |

## Returns

`T`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is `Ok`.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is `Err`.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The `Ok` value as an `Option`.
- [`Result::err`](/docs/reference/prelude/Result/err): The `Err` value as an `Option`.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The `Ok` value, or `f` applied to the error.
- [`Result::map`](/docs/reference/prelude/Result/map): `Ok(f(value))`, or the same error.
- [`Result::map_err`](/docs/reference/prelude/Result/map_err): The same value, or `Err(f(error))`.
