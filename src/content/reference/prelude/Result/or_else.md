---
slug: "prelude/Result/or_else"
title: "Result::or_else"
description: "This result if it is Ok, otherwise f(error)."
module: "prelude"
kind: "method"
name: "or_else"
parent: "Result"
signature: "pub fn or_else<F>(E -> Result<T, F> f) -> Result<T, F>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/prelude/core.hy#L197"
order: 9
---

This result if it is [`Ok`](/docs/reference/prelude/Result#variant-ok), otherwise `f(error)`.

Called on a `Result` value as `value.or_else(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `E -> Result<T, F>` |

## Returns

`Result<T, F>`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is `Ok`.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is `Err`.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The `Ok` value as an `Option`.
- [`Result::err`](/docs/reference/prelude/Result/err): The `Err` value as an `Option`.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The `Ok` value, or `fallback` on `Err`.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The `Ok` value, or `f` applied to the error.
- [`Result::map`](/docs/reference/prelude/Result/map): `Ok(f(value))`, or the same error.
