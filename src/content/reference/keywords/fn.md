---
slug: "keywords/fn"
title: "fn"
description: "Declares a function, a method, or (written in an expression) an anonymous function."
module: "keywords"
kind: "keyword"
name: "fn"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/keywords.md#L5"
order: 0
---

Declares a function, a method, or (written in an expression) an anonymous function.

A declaration lists typed parameters as `Type name`, an optional `-> ReturnType`
and a body. Generic parameters go in `<…>` after the name. In an expression,
`fn (int x) => x + 1` is a lambda; it captures outer locals only when they are
listed in `use (…)`.

```coil
fn add(int a, int b) -> int {
    return a + b;
}

fn main() {
    let k = 10;
    let add_k = fn (int x) use (k) => x + k;
    let n = add_k(add(1, 2)); // 13
}
```

## See also

- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a `bool` condition is true.
- [`for`](/docs/reference/keywords/for): Iterates over the values of an array, `Vec`, range, coroutine or any `IntoIterator`.
