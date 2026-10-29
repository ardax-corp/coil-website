---
slug: "keywords/for"
title: "for"
description: "Iterates over the values of an array, Vec, range, coroutine or any IntoIterator."
module: "keywords"
kind: "keyword"
name: "for"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/keywords.md#L257"
order: 9
---

Iterates over the values of an array, [`Vec`](/docs/reference/prelude/Vec), range, coroutine or any [`IntoIterator`](/docs/reference/prelude/IntoIterator).

`for x in expr { … }` pulls one value at a time; ranges such as `0..n` are
lazy and allocate nothing. `x` is a copy of each element; `for mut x in xs`
borrows it, so writes through `x` change `xs`. C-style `for (init; cond; step)` loops do not
exist. In `impl Trait for Type`, `for` names the type the trait is
implemented for.

```coil
fn main() {
    let total = 0;
    for x in [1, 2, 3] {
        total = total + x;
    }
    for i in 0..10 {
        total = total + i;
    }
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`IntoIterator`](/docs/reference/prelude/IntoIterator)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
