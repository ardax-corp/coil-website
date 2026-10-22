---
slug: "keywords/for"
title: "for"
description: "Iterates over the values of an array, Vec, range, coroutine or any IntoIterator."
module: "keywords"
kind: "keyword"
name: "for"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/keywords.md#L226"
order: 8
---

Iterates over the values of an array, [`Vec`](/docs/reference/prelude/Vec), range, coroutine or any [`IntoIterator`](/docs/reference/prelude/IntoIterator).

`for x in expr { … }` pulls one value at a time; ranges such as `0..n` are
lazy and allocate nothing. C-style `for (init; cond; step)` loops do not
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
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
