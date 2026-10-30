---
slug: "keywords/new"
title: "new"
description: "Constructs a class instance: new Class(args)."
module: "keywords"
kind: "keyword"
name: "new"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/keywords.md#L733"
order: 30
---

Constructs a class instance: `new Class(args)`.

Arguments fill the fields in declaration order.
A class invariant is checked after construction. `readonly new Class(…)`
builds a sealed instance.

```coil
class Point {
    pub x: int,
    pub y: int,
}

fn main() {
    let p = new Point(3, 4);
    let sum = p.x + p.y;
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
