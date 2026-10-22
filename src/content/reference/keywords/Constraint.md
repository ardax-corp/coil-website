---
slug: "keywords/Constraint"
title: "Constraint"
description: "The kind of a constraint, in a kind annotation: c: * -> Constraint."
module: "keywords"
kind: "keyword"
name: "Constraint"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/keywords.md#L1287"
order: 58
---

The kind of a constraint, in a kind annotation: `c: * -> Constraint`.

It lets a type parameter stand for a trait, so a function can be generic over
which trait bounds another parameter.

```coil
fn show_it<c: * -> Constraint, T: c>(T x) -> string {
    return show(x);
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
