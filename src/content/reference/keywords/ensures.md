---
slug: "keywords/ensures"
title: "ensures"
description: "States a postcondition, checked on every return: ensures cond, \"message\"."
module: "keywords"
kind: "keyword"
name: "ensures"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/keywords.md#L1026"
order: 44
---

States a postcondition, checked on every return: `ensures cond, "message"`.

Inside the clause, `result` is the value being returned and `old(e)` is the
value `e` had on entry. Contextual: only a keyword after the signature.

```coil
fn abs(int n) -> int
    ensures result >= 0
{
    if n < 0 {
        return -n;
    }
    return n;
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
