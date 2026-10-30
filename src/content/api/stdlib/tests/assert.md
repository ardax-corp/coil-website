---
slug: "stdlib/tests/assert"
package: "stdlib"
title: "assert!"
description: "Fails the enclosing function with an error when condition is false."
module: "tests"
kind: "macro"
name: "assert"
signature: "macro assert(Expr condition) -> Code"
import: "use tests::{assert};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/tests.hy#L91"
order: 5
---

Fails the enclosing function with an error when `condition` is false.

`assert!(cond)` raises the string `Assertion: 'cond' failed`;
`assert!(cond, message)` raises `message` instead. Because it raises rather
than panics, the function it is used in must return a [`Result`](/docs/reference/prelude/Result) (or be a
`test` block or `main`, where a raised error fails the test or the program).

Invoke it as `assert!(…)`; the arguments are passed as code (`Expr`), not values.

## Parameters

| Name | Type |
|------|------|
| `condition` | `Expr` |

## Returns

`Code`

## Examples

```coil
use tests::{assert};
fn check(int n) -> Result<int, string> {
    assert!(n >= 0, "negative input");
    return n * 2;
}

fn main() {
    assert!(check(4)? == 8);
    let failed = match check(-1) {
        Result::Err(msg) => msg == "negative input",
        Result::Ok(_) => false,
    };
    assert!(failed);
}
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`not!`](/packages/stdlib/reference/tests/not): Expands to `!expression`.
- [`eq!`](/packages/stdlib/reference/tests/eq): Expands to `lhs == rhs`.
- [`matches!`](/packages/stdlib/reference/tests/matches): Returns whether `expr` matches the pattern `ty`, as a `bool`.
- [`type!`](/packages/stdlib/reference/tests/type): Expands to `typeof ty`: the type of an expression, as a value that can be compared.
- [`and!`](/packages/stdlib/reference/tests/and): Expands to `lhs && rhs`.
