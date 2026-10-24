---
slug: "keywords/decreases"
title: "decreases"
description: "States an int that every iteration of a while loop makes smaller, without going negative."
module: "keywords"
kind: "keyword"
name: "decreases"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/keywords.md#L965"
order: 43
---

States an [`int`](/docs/reference/types/int) that every iteration of a `while` loop makes smaller, without going negative.

It proves the loop ends; a violation panics with `(went negative)` or
`(did not decrease)`. Contextual: only a keyword in a `while` header.

```coil
fn sum_to(int n) -> int {
    let i = 0;
    let s = 0;
    while i < n
        decreases n - i
    {
        s = s + i;
        i = i + 1;
    }
    return s;
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
