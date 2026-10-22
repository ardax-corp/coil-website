---
slug: "prelude/Result/unwrap_or_else"
title: "Result::unwrap_or_else"
description: "The Ok value, or f applied to the error."
module: "prelude"
kind: "method"
name: "unwrap_or_else"
parent: "Result"
signature: "pub fn unwrap_or_else(E -> T f) -> T"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/prelude/core.hy#L165"
order: 5
---

The [`Ok`](/docs/reference/prelude/Result#variant-ok) value, or `f` applied to the error.

Called on a `Result` value as `value.unwrap_or_else(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `E -> T` |

## Returns

`T`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is Ok.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is Err.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The Ok value as an Option.
- [`Result::err`](/docs/reference/prelude/Result/err): The Err value as an Option.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The Ok value, or fallback on Err.
- [`Result::map`](/docs/reference/prelude/Result/map): Ok(f(value)), or the same error.
- [`Result::map_err`](/docs/reference/prelude/Result/map_err): The same value, or Err(f(error)).
