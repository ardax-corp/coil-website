---
slug: "keywords/result"
title: "result"
description: "The value being returned, inside an ensures clause."
module: "keywords"
kind: "keyword"
name: "result"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/keywords.md#L1249"
order: 56
---

The value being returned, inside an `ensures` clause.

For a function returning [`Result<T, E>`](/docs/reference/prelude/Result), `result` is the whole [`Result`](/docs/reference/prelude/Result). A
function with an `ensures` cannot have a parameter named `result`.
Contextual: elsewhere `result` is an ordinary name.

```coil
fn double(int n) -> int
    ensures result == n * 2
{
    return n + n;
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
