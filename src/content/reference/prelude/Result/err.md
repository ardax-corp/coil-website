---
slug: "prelude/Result/err"
title: "Result::err"
description: "The Err value as an Option."
module: "prelude"
kind: "method"
name: "err"
parent: "Result"
signature: "pub fn err() -> Option<E>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/prelude/core.hy#L149"
order: 3
---

The [`Err`](/docs/reference/prelude/Result#variant-err) value as an [`Option`](/docs/reference/prelude/Option).

Called on a `Result` value as `value.err(…)`.

## Returns

`Option<E>`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Option`](/docs/reference/prelude/Option)
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is `Ok`.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is `Err`.
- [`Result::ok`](/docs/reference/prelude/Result/ok): The `Ok` value as an `Option`.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The `Ok` value, or `fallback` on `Err`.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The `Ok` value, or `f` applied to the error.
- [`Result::map`](/docs/reference/prelude/Result/map): `Ok(f(value))`, or the same error.
