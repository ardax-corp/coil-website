---
slug: "prelude/Result/and_then"
title: "Result::and_then"
description: "f(value) (itself a Result), or the same error."
module: "prelude"
kind: "method"
name: "and_then"
parent: "Result"
signature: "pub fn and_then<U>(T -> Result<U, E> f) -> Result<U, E>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/prelude/core.hy#L189"
order: 8
---

`f(value)` (itself a [`Result`](/docs/reference/prelude/Result)), or the same error.

Called on a `Result` value as `value.and_then(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `T -> Result<U, E>` |

## Returns

`Result<U, E>`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is `Ok`.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is `Err`.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The `Ok` value as an `Option`.
- [`Result::err`](/docs/reference/prelude/Result/err): The `Err` value as an `Option`.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The `Ok` value, or `fallback` on `Err`.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The `Ok` value, or `f` applied to the error.
- [`Result::map`](/docs/reference/prelude/Result/map): `Ok(f(value))`, or the same error.
