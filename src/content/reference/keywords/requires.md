---
slug: "keywords/requires"
title: "requires"
description: "States a precondition, checked when the function is entered: requires cond, \"message\"."
module: "keywords"
kind: "keyword"
name: "requires"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/keywords.md#L1006"
order: 43
---

States a precondition, checked when the function is entered: `requires cond, "message"`.

A failed `requires` panics and blames the caller (the message names the call
site). Clauses come after the signature and before the body. Contextual:
only a keyword in that position.

```coil
fn isqrt(int n) -> int
    requires n >= 0, "negative input"
{
    let r = 0;
    while (r + 1) * (r + 1) <= n {
        r = r + 1;
    }
    return r;
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
