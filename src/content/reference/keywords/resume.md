---
slug: "keywords/resume"
title: "resume"
description: "Runs a coroutine until its next yield or its end, and gives the yielded or returned value."
module: "keywords"
kind: "keyword"
name: "resume"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/keywords.md#L798"
order: 35
---

Runs a coroutine until its next `yield` or its end, and gives the yielded or returned value.

`resume h with v` also sends `v`, which becomes the value of the `yield`
expression the coroutine is suspended at. Resuming a finished coroutine
panics; check with `done(h)`.

```coil
gen fn steps() {
    yield 10;
    yield 20;
    return 30;
}

fn main() {
    let h = steps();
    let a = resume h; // 10
    let b = resume h; // 20
    let c = resume h; // 30
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a `bool` condition is true.
