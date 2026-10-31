---
slug: "stdlib/tests/and"
package: "stdlib"
title: "and!"
description: "Expands to lhs && rhs."
module: "tests"
kind: "macro"
name: "and"
signature: "macro and(Expr lhs, Expr rhs) -> Code"
import: "use tests::{and};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/tests.hy#L60"
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

- [`not!`](/packages/stdlib/reference/tests/not): Expands to `!expression`.
- [`eq!`](/packages/stdlib/reference/tests/eq): Expands to `lhs == rhs`.
- [`matches!`](/packages/stdlib/reference/tests/matches): Returns whether `expr` matches the pattern `ty`, as a `bool`.
- [`type!`](/packages/stdlib/reference/tests/type): Expands to `typeof ty`: the type of an expression, as a value that can be compared.
- [`assert!`](/packages/stdlib/reference/tests/assert): Fails the enclosing function with an error when `condition` is false.
