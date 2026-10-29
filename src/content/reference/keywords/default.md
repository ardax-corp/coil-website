---
slug: "keywords/default"
title: "default"
description: "The catch-all arm of a match: default => …."
module: "keywords"
kind: "keyword"
name: "default"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/keywords.md#L477"
order: 19
---

The catch-all arm of a `match`: `default => …`.

It matches anything the earlier arms did not. It must be a whole arm: a
whole-arm `_ =>` is an error (`_` only works inside a payload, such as
`Option::Some(_)`). A `match` can have one `default`.

```coil
fn status_text(int status) -> string {
    return match status {
        200 => "ok",
        404 => "missing",
        default => "other",
    };
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
