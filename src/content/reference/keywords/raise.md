---
slug: "keywords/raise"
title: "raise"
description: "Returns early from the current function with Result::Err(e)."
module: "keywords"
kind: "keyword"
name: "raise"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/keywords.md#L320"
order: 13
---

Returns early from the current function with `Result::Err(e)`.

Using `raise` puts the function in result mode: its successful returns are
wrapped in [`Result::Ok`](/docs/reference/prelude/Result#variant-ok). Each function has one error type, so every `raise`
and `?` in it must agree on `E`. It works as a statement or an expression.

```coil
fn parse_age(int n) -> Result<int, string> {
    if n < 0 {
        raise "age cannot be negative";
    }
    return n;
}
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
