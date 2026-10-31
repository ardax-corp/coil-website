---
slug: "prelude/Option/or"
title: "Option::or"
description: "This option if it is Some, otherwise other."
module: "prelude"
kind: "method"
name: "or"
parent: "Option"
signature: "pub fn or(Option<T> other) -> Option<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/core.hy#L87"
order: 7
---

This option if it is [`Some`](/docs/reference/prelude/Option#variant-some), otherwise `other`.

Called on a `Option` value as `value.or(…)`.

## Parameters

| Name | Type |
|------|------|
| `other` | `Option<T>` |

## Returns

`Option<T>`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is `Some`.
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is `None`.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or `fallback` when `None`.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of `f` when `None`.
- [`Option::map`](/docs/reference/prelude/Option/map): `Some(f(value))`, or `None`.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): `f(value)`, or `fallback` when `None`.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): `f(value)` (itself an `Option`), or `None`.
