---
slug: "stdlib/tests/not"
package: "stdlib"
title: "not!"
description: "Expands to !expression."
module: "tests"
kind: "macro"
name: "not"
signature: "macro not(Expr expression) -> Code"
import: "use tests::{not};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/tests.hy#L11"
order: 0
---

Expands to `!expression`.

Invoke it as `not!(…)`; the arguments are passed as code (`Expr`), not values.

## Parameters

| Name | Type |
|------|------|
| `expression` | `Expr` |

## Returns

`Code`

## Examples

```coil
use tests::{assert, not};
assert!(not!(1 > 2));
```

## See also

- [`eq!`](/packages/stdlib/reference/tests/eq): Expands to `lhs == rhs`.
- [`matches!`](/packages/stdlib/reference/tests/matches): Returns whether `expr` matches the pattern `ty`, as a `bool`.
- [`type!`](/packages/stdlib/reference/tests/type): Expands to `typeof ty`: the type of an expression, as a value that can be compared.
- [`and!`](/packages/stdlib/reference/tests/and): Expands to `lhs && rhs`.
- [`assert!`](/packages/stdlib/reference/tests/assert): Fails the enclosing function with an error when `condition` is false.
