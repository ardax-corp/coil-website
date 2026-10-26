---
slug: "keywords/where"
title: "where"
description: "Adds trait constraints to a generic function: where Trait<A, B>."
module: "keywords"
kind: "keyword"
name: "where"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/keywords.md#L843"
order: 37
---

Adds trait constraints to a generic function: `where Trait<A, B>`.

It comes after the return type and is needed for constraints with several
type parameters. A single-parameter bound is written on the parameter:
`fn f<T: Num>`, or a separate bounded impl block, `impl Cell<T: Num> { … }`,
for methods that need a bound on the impl's parameter. A unary
`where Num<T>` is an error.

```coil
fn convert<A, B>(A x) -> B where Into<A, B> {
    return into(x);
}

class Cell<T> {
    pub v: T,
}

impl Cell<T: Num> {
    pub fn doubled() -> T {
        return self.v + self.v;
    }
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
