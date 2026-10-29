---
slug: "keywords/from"
title: "from"
description: "Delegates a generator to another coroutine: yield from other()."
module: "keywords"
kind: "keyword"
name: "from"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/keywords.md#L1058"
order: 47
---

Delegates a generator to another coroutine: `yield from other()`.

Each value the inner coroutine yields is yielded by the outer one, and sent
values pass through to it.

```coil
gen fn inner() {
    yield 1;
    yield 2;
}

gen fn outer() {
    yield 0;
    yield from inner();
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
