---
slug: "tests/and"
title: "and!"
description: "Expands to lhs && rhs."
module: "tests"
kind: "macro"
name: "and"
signature: "macro and(Expr lhs, Expr rhs) -> Code"
import: "use tests::{and};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/tests.hy#L60"
order: 4
---

Expands to `lhs && rhs`.

Invoke it as `and!(…)`; the arguments are passed as code (`Expr`), not values.

## Parameters

| Name | Type |
|------|------|
| `lhs` | `Expr` |
| `rhs` | `Expr` |

## Returns

`Code`

## See also

- [`not!`](/docs/reference/tests/not): Expands to `!expression`.
- [`eq!`](/docs/reference/tests/eq): Expands to `lhs == rhs`.
- [`matches!`](/docs/reference/tests/matches): Returns whether `expr` matches the pattern `ty`, as a `bool`.
- [`type!`](/docs/reference/tests/type): Expands to `typeof ty`: the type of an expression, as a value that can be compared.
- [`assert!`](/docs/reference/tests/assert): Fails the enclosing function with an error when `condition` is false.
