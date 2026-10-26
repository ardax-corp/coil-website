---
slug: "keywords/type"
title: "type"
description: "Declares a type alias, or an associated type in a trait or impl."
module: "keywords"
kind: "keyword"
name: "type"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/keywords.md#L495"
order: 20
---

Declares a type alias, or an associated type in a trait or `impl`.

`type Name = T;` gives an existing type a new name; the alias is replaced by
its type at compile time and may take type parameters. Inside a trait,
`type Elem;` declares an associated type that each `impl` defines with
`type Elem = int;`.

```coil
type UserId = int;
type Pair<T> = (T, T);

fn swap(Pair<UserId> p) -> Pair<UserId> {
    return (p[1], p[0]);
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
