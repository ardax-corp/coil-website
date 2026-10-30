---
slug: "prelude/Result/map"
title: "Result::map"
description: "Ok(f(value)), or the same error."
module: "prelude"
kind: "method"
name: "map"
parent: "Result"
signature: "pub fn map<U>(T -> U f) -> Result<U, E>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/core.hy#L173"
order: 6
---

`Ok(f(value))`, or the same error.

Called on a `Result` value as `value.map(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `T -> U` |

## Returns

`Result<U, E>`

## See also

- [`Result`](/docs/reference/prelude/Result): The outcome of an operation that can fail: `Ok(value)` or `Err(error)`.
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is `Ok`.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is `Err`.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The `Ok` value as an `Option`.
- [`Result::err`](/docs/reference/prelude/Result/err): The `Err` value as an `Option`.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The `Ok` value, or `fallback` on `Err`.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The `Ok` value, or `f` applied to the error.
- [`Result::map_err`](/docs/reference/prelude/Result/map_err): The same value, or `Err(f(error))`.
