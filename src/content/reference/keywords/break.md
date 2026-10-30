---
slug: "keywords/break"
title: "break"
description: "Leaves the innermost while or for loop at once."
module: "keywords"
kind: "keyword"
name: "break"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/keywords.md#L293"
order: 11
---

Leaves the innermost `while` or `for` loop at once.

A `break` skips the loop's `invariant` check.

```coil
fn first_negative(Vec<int> xs) -> int {
    let found = 0;
    for x in xs {
        if x < 0 {
            found = x;
            break;
        }
    }
    return found;
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
