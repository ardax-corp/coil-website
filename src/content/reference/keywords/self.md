---
slug: "keywords/self"
title: "self"
description: "The receiver of a method: the instance the method was called on."
module: "keywords"
kind: "keyword"
name: "self"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/keywords.md#L1227"
order: 55
---

The receiver of a method: the instance the method was called on.

Instance methods take `self` implicitly (it is not listed in the
parameters). Read and write fields as `self.field` and call other methods as
`self.method()`. `static fn` methods have no `self`. Class invariants and
`ensures` clauses can mention `self`.

```coil
class Counter {
    n: int,
}

impl Counter {
    pub fn bump() -> int {
        self.n = self.n + 1;
        return self.n;
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
