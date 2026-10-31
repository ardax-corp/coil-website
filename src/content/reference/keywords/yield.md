---
slug: "keywords/yield"
title: "yield"
description: "Suspends a generator and hands a value to the code that resumed it."
module: "keywords"
kind: "keyword"
name: "yield"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L882"
order: 37
---

Suspends a generator and hands a value to the code that resumed it.

`yield v` produces `v` as the result of the `resume`. Used as an expression
(`let msg = yield v;`) it also receives the value sent with
`resume h with x`. `yield from other()` delegates to another coroutine.

```coil
gen fn echo() {
    let msg = yield "ready";
    yield msg;
}

fn main() {
    let h = echo();
    let first = resume h; // "ready"
    let second = resume h with "hello"; // "hello"
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
