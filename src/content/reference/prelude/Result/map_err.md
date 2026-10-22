---
slug: "prelude/Result/map_err"
title: "Result::map_err"
description: "The same value, or Err(f(error))."
module: "prelude"
kind: "method"
name: "map_err"
parent: "Result"
signature: "pub fn map_err<F>(E -> F f) -> Result<T, F>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/prelude/core.hy#L181"
order: 7
---

The same value, or `Err(f(error))`.

Called on a `Result` value as `value.map_err(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `E -> F` |

## Returns

`Result<T, F>`

## See also

- [`Result`](/docs/reference/prelude/Result): The outcome of an operation that can fail: Ok(value) or Err(error).
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is Ok.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is Err.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The Ok value as an Option.
- [`Result::err`](/docs/reference/prelude/Result/err): The Err value as an Option.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The Ok value, or fallback on Err.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The Ok value, or f applied to the error.
- [`Result::map`](/docs/reference/prelude/Result/map): Ok(f(value)), or the same error.
