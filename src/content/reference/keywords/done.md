---
slug: "keywords/done"
title: "done"
description: "Tells whether a coroutine has finished: done(handle) returns a bool."
module: "keywords"
kind: "keyword"
name: "done"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/keywords.md#L1206"
order: 54
---

Tells whether a coroutine has finished: `done(handle)` returns a [`bool`](/docs/reference/types/bool).

It is `false` before the first `resume` and while the coroutine is suspended
at a `yield`, and `true` once its body has returned.

```coil
gen fn two() {
    yield 1;
    yield 2;
}

fn main() {
    let h = two();
    while !done(h) {
        resume h;
    }
}
```

## See also

- [`bool`](/docs/reference/types/bool)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
