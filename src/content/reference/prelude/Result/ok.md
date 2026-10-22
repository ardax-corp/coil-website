---
slug: "prelude/Result/ok"
title: "Result::ok"
description: "The Ok value as an Option."
module: "prelude"
kind: "method"
name: "ok"
parent: "Result"
signature: "pub fn ok() -> Option<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/core.hy#L141"
order: 2
---

The [`Ok`](/docs/reference/prelude/Result#variant-ok) value as an [`Option`](/docs/reference/prelude/Option).

Called on a `Result` value as `value.ok(…)`.

## Returns

`Option<T>`

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Option`](/docs/reference/prelude/Option)
- [`Result::is_ok`](/docs/reference/prelude/Result/is_ok): True when this is Ok.
- [`Result::is_err`](/docs/reference/prelude/Result/is_err): True when this is Err.
- [`Result::err`](/docs/reference/prelude/Result/err): The Err value as an Option.
- [`Result::unwrap_or`](/docs/reference/prelude/Result/unwrap_or): The Ok value, or fallback on Err.
- [`Result::unwrap_or_else`](/docs/reference/prelude/Result/unwrap_or_else): The Ok value, or f applied to the error.
- [`Result::map`](/docs/reference/prelude/Result/map): Ok(f(value)), or the same error.
