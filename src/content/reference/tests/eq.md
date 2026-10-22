---
slug: "tests/eq"
title: "eq!"
description: "Expands to lhs == rhs."
module: "tests"
kind: "macro"
name: "eq"
signature: "macro eq(Expr lhs, Expr rhs) -> Code"
import: "use tests::{eq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/tests.hy#L25"
order: 1
---

Expands to `lhs == rhs`.

Invoke it as `eq!(…)`; the arguments are passed as code (`Expr`), not values.

## Parameters

| Name | Type |
|------|------|
| `lhs` | `Expr` |
| `rhs` | `Expr` |

## Returns

`Code`

## Examples

```coil
use tests::{assert, eq};
assert!(eq!(2 + 2, 4));
```

## See also

- [`not!`](/docs/reference/tests/not): Expands to !expression.
- [`matches!`](/docs/reference/tests/matches): Returns whether expr matches the pattern ty, as a bool.
- [`type!`](/docs/reference/tests/type): Expands to typeof ty: the type of an expression, as a value that can be compared.
- [`and!`](/docs/reference/tests/and): Expands to lhs && rhs.
- [`assert!`](/docs/reference/tests/assert): Fails the enclosing function with an error when condition is false.
