---
slug: "stdlib/tests/matches"
package: "stdlib"
title: "matches!"
description: "Returns whether expr matches the pattern ty, as a bool."
module: "tests"
kind: "macro"
name: "matches"
signature: "macro matches(Expr ty, Expr expr) -> Code"
import: "use tests::{matches};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/tests.coil#L43"
order: 2
---

Returns whether `expr` matches the pattern `ty`, as a [`bool`](/docs/reference/types/bool).

Expands to a `match` with one arm for the pattern and a `default` arm.

Invoke it as `matches!(…)`; the arguments are passed as code (`Expr`), not values.

## Parameters

| Name | Type |
|------|------|
| `ty` | `Expr` |
| `expr` | `Expr` |

## Returns

`Code`

## Examples

```coil
use tests::{assert, matches};
let r: Result<int, string> = Result::Ok(3);
assert!(matches!(Result::Ok(_), r));
assert!(!matches!(Option::Some(_), Option::None));
```

## See also

- [`bool`](/docs/reference/types/bool)
- [`not!`](/packages/stdlib/reference/tests/not): Expands to `!expression`.
- [`eq!`](/packages/stdlib/reference/tests/eq): Expands to `lhs == rhs`.
- [`type!`](/packages/stdlib/reference/tests/type): Expands to `typeof ty`: the type of an expression, as a value that can be compared.
- [`and!`](/packages/stdlib/reference/tests/and): Expands to `lhs && rhs`.
- [`assert!`](/packages/stdlib/reference/tests/assert): Fails the enclosing function with an error when `condition` is false.
