---
slug: "keywords/static"
title: "static"
description: "Declares a module-level or class-level slot shared by the whole program, or a method without self."
module: "keywords"
kind: "keyword"
name: "static"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/keywords.md#L77"
order: 3
---

Declares a module-level or class-level slot shared by the whole program, or a method without `self`.

`static let` is a reassignable module variable; its initializer runs once
before `main` (a module constant is a `const`). In a class, `static count: int = 0`
is a class field read as `Class::count`. In an `impl` or trait, `static fn`
is a method called on the type (`Counter::fresh()`), never on a value.

A thread started with [`thread::spawn`](/docs/reference/thread/spawn) gets a copy of every static as it was
when it was spawned: constants read the same values there, and its writes
to a `static let` stay in that thread. A `stdin()`, `stdout()` or
`stderr()` in a static, on its own or inside a tuple, array, enum or class
field, is the same process stream in the thread; a file or socket stream
cannot cross threads, and using it there panics.

```coil
static let hits = 0;

class Counter {
    value: int,
}

impl Counter {
    pub static fn fresh() -> Counter {
        hits = hits + 1;
        return new Counter(0);
    }
}

fn main() {
    let c = Counter::fresh();
}
```

## See also

- [`thread::spawn`](/docs/reference/thread/spawn)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
