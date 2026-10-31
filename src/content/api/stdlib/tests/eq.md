---
slug: "stdlib/tests/eq"
package: "stdlib"
title: "eq!"
description: "Expands to lhs == rhs."
module: "tests"
kind: "macro"
name: "eq"
signature: "macro eq(Expr lhs, Expr rhs) -> Code"
import: "use tests::{eq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/tests.hy#L25"
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

- [`not!`](/packages/stdlib/reference/tests/not): Expands to `!expression`.
- [`matches!`](/packages/stdlib/reference/tests/matches): Returns whether `expr` matches the pattern `ty`, as a `bool`.
- [`type!`](/packages/stdlib/reference/tests/type): Expands to `typeof ty`: the type of an expression, as a value that can be compared.
- [`and!`](/packages/stdlib/reference/tests/and): Expands to `lhs && rhs`.
- [`assert!`](/packages/stdlib/reference/tests/assert): Fails the enclosing function with an error when `condition` is false.
