---
slug: "keywords/defer"
title: "defer"
description: "Schedules a block to run when the enclosing function exits."
module: "keywords"
kind: "keyword"
name: "defer"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L753"
order: 31
---

Schedules a block to run when the enclosing function exits.

Deferred blocks run on every return, on falling off the end, and while a
panic or task cancellation unwinds, in reverse order of the `defer`
statements that were reached. The block sees outer locals only when they
are listed in `defer use (…)`.

A `defer` belongs to its function, not to the block or loop it sits in.
Each `defer` statement is queued at most once per call: inside a loop it
runs once, when the function exits, however many iterations reached it
(warning E0147). For cleanup per iteration, move the loop body into a
function with its own `defer`.

A deferred block cannot choose another way out: `return`, `raise`, `?`, and
a `break` or `continue` that would leave the block are errors (E0146).
Handle a failure inside it with `match` or `.unwrap_or(..)`. A `panic`
inside it starts (or replaces) a panic: the callers' defers still run. If
the function was already unwinding, its defers that have not run yet are
skipped.

```coil
fn work(Vec<string> log) -> int {
    log.push("start");
    defer use (log) {
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
