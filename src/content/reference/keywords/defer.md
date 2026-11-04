---
slug: "keywords/defer"
title: "defer"
description: "Schedules a block to run when the enclosing block ends."
module: "keywords"
kind: "keyword"
name: "defer"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d7885cdf76165c70da4908418715c8292ae54a1d/compiler/src/builtin_docs/keywords.md#L778"
order: 32
---

Schedules a block to run when the enclosing block ends.

Deferred blocks run when their block ends: on falling off its end, on a
`return`, on a `break` or `continue` that leaves it, and while a panic or
task cancellation unwinds. The defers of one block run in reverse order of
the `defer` statements that were reached, and an inner block's run before
an outer one's. A `defer` in a loop body runs at the end of every
iteration.

The block sees outer locals only when they are listed in `defer use (…)`.
As with a lambda, each one is copied when the `defer` statement runs: a
later assignment is not seen. `use (mut x)` borrows `x` instead, so the
block sees its value when it runs and its writes reach `x`.

A deferred block cannot choose another way out: `return`, `raise`, `?`, and
a `break` or `continue` that would leave the block are errors (E0146).
Handle a failure inside it with `match` or `.unwrap_or(..)`. A `panic`
inside it starts (or replaces) a panic: the callers' defers still run. If
the function was already unwinding, its defers that have not run yet are
skipped.

```coil
fn work(Vec<string> log) -> int {
    log.push("start");
    defer use (mut log) {
        log.push("cleanup");
    }
    return log.len(); // 1: the defer runs after the value is computed
}

fn main() {
    let log: Vec<string> = Vec::new();
    let n = work(log); // log is now ["start", "cleanup"]
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
