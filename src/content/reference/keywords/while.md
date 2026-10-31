---
slug: "keywords/while"
title: "while"
description: "Repeats a block while a bool condition is true."
module: "keywords"
kind: "keyword"
name: "while"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L238"
order: 8
---

Repeats a block while a [`bool`](/docs/reference/types/bool) condition is true.

`while let Pattern = value { … }` repeats while the value matches. A `while`
header can carry `invariant` and `decreases` clauses before its body. Use
`break` and `continue` to leave or restart the loop.

```coil
fn main() {
    let i = 0;
    let total = 0;
    while i < 5 {
        total = total + i;
        i = i + 1;
    }
}
```

## See also

- [`bool`](/docs/reference/types/bool)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
