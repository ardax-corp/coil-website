---
slug: "prelude/Result/is_ok"
title: "Result::is_ok"
description: "True when this is Ok."
module: "prelude"
kind: "method"
name: "is_ok"
parent: "Result"
signature: "pub fn is_ok() -> bool"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/prelude/core.hy#L125"
order: 0
---

True when this is [`Ok`](/docs/reference/prelude/Result#variant-ok).

Called on a `Result` value as `value.is_ok(…)`.

## Returns

`bool`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is `Err`.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The `Ok` value as an `Option`.
- [`Result::err`](/docs/reference/prelude/Result/err): The `Err` value as an `Option`.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The `Ok` value, or `fallback` on `Err`.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The `Ok` value, or `f` applied to the error.
- [`Result::map`](/docs/reference/prelude/Result/map): `Ok(f(value))`, or the same error.
- [`Result::map_err`](/docs/reference/prelude/Result/map_err): The same value, or `Err(f(error))`.
