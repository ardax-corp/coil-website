---
slug: "keywords/panic"
title: "panic"
description: "Aborts with a message: panic \"message\"."
module: "keywords"
kind: "keyword"
name: "panic"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/keywords.md#L337"
order: 14
---

Aborts with a message: `panic "message"`.

The message is printed as `panic: <message> at <file>:<line>:<col>` and the
program exits with status 1. The `defer` blocks of the functions it leaves
still run. A panic inside a child task fails that task and its scope instead
of the program. Prefer `raise` or [`Result`](/docs/reference/prelude/Result) for errors a caller can handle.

```coil
fn checked_div(int a, int b) -> int {
    if b == 0 {
        panic "division by zero";
    }
    return a / b;
}
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
