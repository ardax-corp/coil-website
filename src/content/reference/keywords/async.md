---
slug: "keywords/async"
title: "async"
description: "Removed. Generator functions are spelled gen fn; async fn is a parse error that names gen fn. Coil has no async / await; concurrency uses the task module and threads."
module: "keywords"
kind: "keyword"
name: "async"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/keywords.md#L771"
order: 33
---

Removed. Generator functions are spelled `gen fn`; `async fn` is a parse error that names `gen fn`. Coil has no `async` / `await`; concurrency uses the [`task`](/docs/reference/task) module and threads.

## See also

- [`task`](/docs/reference/task)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
