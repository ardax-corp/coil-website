---
slug: "keywords/false"
title: "false"
description: "The bool value false."
module: "keywords"
kind: "keyword"
name: "false"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/keywords.md#L733"
order: 31
---

The [`bool`](/docs/reference/types/bool) value false.

```coil
fn main() {
    let done_yet = false;
    while !done_yet {
        done_yet = true;
    }
}
```

## See also

- [`bool`](/docs/reference/types/bool)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
