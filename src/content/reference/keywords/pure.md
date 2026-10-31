---
slug: "keywords/pure"
title: "pure"
description: "Declares that a function has no effects: pure fn name(…)."
module: "keywords"
kind: "keyword"
name: "pure"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L974"
order: 41
---

Declares that a function has no effects: `pure fn name(…)`.

The compiler checks the promise: a call that reads or writes files, uses the
network, the environment, threads or shared mutable state is error `E0413`.
Panicking and building new objects are allowed. Contextual: only a keyword
directly before `fn`.

```coil
pure fn area(int w, int h) -> int {
    return w * h;
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
