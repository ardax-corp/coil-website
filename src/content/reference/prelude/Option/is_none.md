---
slug: "prelude/Option/is_none"
title: "Option::is_none"
description: "True when this is None."
module: "prelude"
kind: "method"
name: "is_none"
parent: "Option"
signature: "pub fn is_none() -> bool"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/core.hy#L39"
order: 1
---

True when this is [`None`](/docs/reference/prelude/Option#variant-none).

Called on a `Option` value as `value.is_none(…)`.

## Returns

`bool`

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Option::is_some`](/docs/reference/prelude/Option/is_some): True when this is `Some`.
- [`Option::unwrap_or`](/docs/reference/prelude/Option/unwrap_or): The value, or `fallback` when `None`.
- [`Option::unwrap_or_else`](/docs/reference/prelude/Option/unwrap_or_else): The value, or the result of `f` when `None`.
- [`Option::map`](/docs/reference/prelude/Option/map): `Some(f(value))`, or `None`.
- [`Option::map_or`](/docs/reference/prelude/Option/map_or): `f(value)`, or `fallback` when `None`.
- [`Option::and_then`](/docs/reference/prelude/Option/and_then): `f(value)` (itself an `Option`), or `None`.
- [`Option::or`](/docs/reference/prelude/Option/or): This option if it is `Some`, otherwise `other`.
