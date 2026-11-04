---
slug: "keywords/view"
title: "view"
description: "Declares a view class: a class whose mut fields borrow places."
module: "keywords"
kind: "keyword"
name: "view"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d7885cdf76165c70da4908418715c8292ae54a1d/compiler/src/builtin_docs/keywords.md#L675"
order: 28
---

Declares a `view class`: a class whose `mut` fields borrow places.

A `mut` field is filled with `mut place` at construction, like `let c = mut
place`, and names that place's object instead of a copy of it. A view value
is held to the scope of the borrows it holds. `view` is a keyword only before
`class`.

```coil
class Counter {
    pub n: int,
}

view class Bump {
    mut c: Counter,
    by: int,
}

fn main() {
    let k = new Counter(1);
    let _ = new Bump(mut k, 10);
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
