---
slug: "tests/type"
title: "type!"
description: "Expands to typeof ty: the type of an expression, as a value that can be compared."
module: "tests"
kind: "macro"
name: "type"
signature: "macro type(Expr ty) -> Code"
import: "use tests::{type};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/tests.hy#L53"
order: 3
---

Expands to `typeof ty`: the type of an expression, as a value that can be compared.

Invoke it as `type!(…)`; the arguments are passed as code (`Expr`), not values.

## Parameters

| Name | Type |
|------|------|
| `ty` | `Expr` |

## Returns

`Code`

## See also

- [`not!`](/docs/reference/tests/not): Expands to !expression.
- [`eq!`](/docs/reference/tests/eq): Expands to lhs == rhs.
- [`matches!`](/docs/reference/tests/matches): Returns whether expr matches the pattern ty, as a bool.
- [`and!`](/docs/reference/tests/and): Expands to lhs && rhs.
- [`assert!`](/docs/reference/tests/assert): Fails the enclosing function with an error when condition is false.
