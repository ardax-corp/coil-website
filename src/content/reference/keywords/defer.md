---
slug: "keywords/defer"
title: "defer"
description: "Schedules a block to run when the enclosing function exits."
module: "keywords"
kind: "keyword"
name: "defer"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/keywords.md#L696"
order: 29
---

Schedules a block to run when the enclosing function exits.

Deferred blocks run on every return, on falling off the end, and while a
panic or task cancellation unwinds, in reverse order of the `defer`
statements that were reached. The block sees outer locals only when they
are listed in `defer use (…)`.

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
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a `bool` condition is true.
