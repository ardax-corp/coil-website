---
slug: "keywords/shared"
title: "shared"
description: "Declares a shared class: a class whose instances are never copied."
module: "keywords"
kind: "keyword"
name: "shared"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/keywords.md#L650"
order: 27
---

Declares a `shared class`: a class whose instances are never copied.

Plain class instances are values, copied on write (see `mut`). A shared
class stands for one identity, such as a connection, a window or a
registry: every name that holds an instance reaches the same object, and
a write through one is seen through all. `Ref<T>` from [`cell`](/packages/stdlib/reference/cell) is a shared
class. `shared` is a keyword only before `class` or `readonly class`.

```coil
use tests::assert;

shared class Log {
    pub lines: int,
}

fn main() {
    let log = new Log(0);
    let alias = log;
    alias.lines += 1;
    assert!(log.lines == 1);
}
```

## See also

- [`cell`](/packages/stdlib/reference/cell)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
