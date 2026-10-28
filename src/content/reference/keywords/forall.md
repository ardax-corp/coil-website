---
slug: "keywords/forall"
title: "forall"
description: "Writes a polymorphic (higher-rank) function type: forall T. T -> T."
module: "keywords"
kind: "keyword"
name: "forall"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/keywords.md#L1037"
order: 46
---

Writes a polymorphic (higher-rank) function type: `forall T. T -> T`.

A parameter of that type accepts a generic function that the callee can use
at several types. Constraints go on the binder: `forall T: Num. T -> T`.

```coil
fn id<T>(T x) -> T {
    return x;
}

fn both(forall T. T -> T f) -> (int, string) {
    return (f(1), f("one"));
}

fn main() {
    let pair = both(id);
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
