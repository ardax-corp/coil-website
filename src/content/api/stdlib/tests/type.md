---
slug: "stdlib/tests/type"
package: "stdlib"
title: "type!"
description: "Expands to typeof ty: the type of an expression, as a value that can be compared."
module: "tests"
kind: "macro"
name: "type"
signature: "macro type(Expr ty) -> Code"
import: "use tests::{type};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/tests.coil#L53"
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

- [`not!`](/packages/stdlib/reference/tests/not): Expands to `!expression`.
- [`eq!`](/packages/stdlib/reference/tests/eq): Expands to `lhs == rhs`.
- [`matches!`](/packages/stdlib/reference/tests/matches): Returns whether `expr` matches the pattern `ty`, as a `bool`.
- [`and!`](/packages/stdlib/reference/tests/and): Expands to `lhs && rhs`.
- [`assert!`](/packages/stdlib/reference/tests/assert): Fails the enclosing function with an error when `condition` is false.
