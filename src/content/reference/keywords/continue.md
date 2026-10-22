---
slug: "keywords/continue"
title: "continue"
description: "Skips the rest of the current iteration and goes on with the next one."
module: "keywords"
kind: "keyword"
name: "continue"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/keywords.md#L280"
order: 11
---

Skips the rest of the current iteration and goes on with the next one.

In a `while` loop the condition is tested again; in a `for` loop the next
value is taken.

```coil
fn sum_odd(int n) -> int {
    let total = 0;
    for i in 0..n {
        if i % 2 == 0 {
            continue;
        }
        total = total + i;
    }
    return total;
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
