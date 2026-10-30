---
slug: "prelude/ops/Eq/ne"
title: "Eq::ne"
description: "Returns true when a and b are not equal. Defaults to !(a == b)."
module: "prelude::ops"
kind: "method"
name: "ne"
parent: "Eq"
signature: "fn ne(T a, T b) -> bool"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/prelude/ops.hy#L485"
order: 1
---

Returns `true` when `a` and `b` are not equal. Defaults to `!(a == b)`.

## Parameters

| Name | Type |
|------|------|
| `a` | `T` |
| `b` | `T` |

## Returns

`bool`

## See also

- [`Eq`](/docs/reference/prelude/ops/Eq): The equality operators `==` and `!=`.
- [`Eq::eq`](/docs/reference/prelude/ops/Eq/eq): Returns `true` when `a` and `b` are equal.
