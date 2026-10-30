---
slug: "prelude/Option/is_some"
title: "Option::is_some"
description: "True when this is Some."
module: "prelude"
kind: "method"
name: "is_some"
parent: "Option"
signature: "pub fn is_some() -> bool"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/core.hy#L31"
order: 0
---

True when this is [`Some`](/docs/reference/prelude/Option#variant-some).

Called on a `Option` value as `value.is_some(…)`.

## Returns

`bool`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_none`](/docs/reference/prelude/Option/is_none): True when this is `None`.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or `fallback` when `None`.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of `f` when `None`.
- [`Option::map`](/docs/reference/prelude/Option/map): `Some(f(value))`, or `None`.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): `f(value)`, or `fallback` when `None`.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): `f(value)` (itself an `Option`), or `None`.
- [`Option::or`](/docs/reference/prelude/Option/or): This option if it is `Some`, otherwise `other`.
