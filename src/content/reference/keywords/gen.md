---
slug: "keywords/gen"
title: "gen"
description: "Declares a generator function (a coroutine): gen fn name(…) { … }."
module: "keywords"
kind: "keyword"
name: "gen"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/keywords.md#L746"
order: 32
---

Declares a generator function (a coroutine): `gen fn name(…) { … }`.

Calling it allocates a suspended coroutine handle and runs nothing. Each
`resume` runs it to the next `yield` (or its `return`), and `for` can iterate
it. `gen` is only a keyword directly before `fn` (or `static fn`).

```coil
gen fn countdown(int n) {
    let i = n;
    while i > 0 {
        yield i;
        i = i - 1;
    }
}

fn main() {
    let total = 0;
    for v in countdown(3) {
        total = total + v;
    }
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
