---
slug: "keywords/use"
title: "use"
description: "Imports items from a module, or lists the outer variables a lambda or defer captures."
module: "keywords"
kind: "keyword"
name: "use"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/keywords.md#L513"
order: 21
---

Imports items from a module, or lists the outer variables a lambda or `defer` captures.

`use path::item;`, `use path::{a, b};` and `use path::item as alias;` bring
names into scope; `use path::*` is rejected. The prelude is imported
automatically. After a lambda's parameters or after `defer`, `use (x, y)`
names the outer locals the body may use.

```coil
use string::{format};
use io::sync::{println as say};

fn main() {
    let name = "coil";
    let greet = fn () use (name) => format("hello %s", name);
    let _ = say(greet());
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
