---
slug: "prelude/Option/filter"
title: "Option::filter"
description: "This option if its value passes pred, otherwise None."
module: "prelude"
kind: "method"
name: "filter"
parent: "Option"
signature: "pub fn filter(T -> bool pred) -> Option<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/prelude/core.hy#L103"
order: 9
---

This option if its value passes `pred`, otherwise [`None`](/docs/reference/prelude/Option#variant-none).

Called on a `Option` value as `value.filter(…)`.

## Parameters

| Name | Type |
|------|------|
| `pred` | `T -> bool` |

## Returns

`Option<T>`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is Some.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is None.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or fallback when None.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of f when None.
- [`Option::map`](/docs/reference/prelude/Option/map): Some(f(value)), or None.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): f(value), or fallback when None.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): f(value) (itself an Option), or None.
