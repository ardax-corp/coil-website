---
slug: "keywords/async"
title: "async"
description: "Removed. Generator functions are spelled gen fn; async fn is a parse error that names gen fn. Coil has no async / await; concurrency uses the task module and threads."
module: "keywords"
kind: "keyword"
name: "async"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L876"
order: 36
---

Removed. Generator functions are spelled `gen fn`; `async fn` is a parse error that names `gen fn`. Coil has no `async` / `await`; concurrency uses the [`task`](/docs/reference/task) module and threads.

## See also

- [`task`](/docs/reference/task)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
