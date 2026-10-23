---
slug: "keywords/if"
title: "if"
description: "Runs a block when a bool condition is true."
module: "keywords"
kind: "keyword"
name: "if"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/keywords.md#L163"
order: 5
---

Runs a block when a [`bool`](/docs/reference/types/bool) condition is true.

The condition needs no parentheses and the body always takes braces. Chain
alternatives with `else if` and `else`. `if let Pattern = value { … }` runs the
block when the value matches the pattern, binding its names.

```coil
fn sign(int n) -> int {
    if n < 0 {
        return -1;
    } else if n == 0 {
        return 0;
    } else {
        return 1;
    }
}

fn main() {
    let found = Option::Some(3);
    if let Option::Some(v) = found {
        let doubled = v * 2;
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
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a `bool` condition is true.
