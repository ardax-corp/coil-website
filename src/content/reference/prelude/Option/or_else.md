---
slug: "prelude/Option/or_else"
title: "Option::or_else"
description: "This option if it is Some, otherwise the result of f."
module: "prelude"
kind: "method"
name: "or_else"
parent: "Option"
signature: "pub fn or_else(fn() -> Option<T> f) -> Option<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/core.hy#L95"
order: 8
---

This option if it is [`Some`](/docs/reference/prelude/Option#variant-some), otherwise the result of `f`.

Called on a `Option` value as `value.or_else(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn() -> Option<T>` |

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
