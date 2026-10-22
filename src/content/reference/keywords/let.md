---
slug: "keywords/let"
title: "let"
description: "Declares a mutable local variable."
module: "keywords"
kind: "keyword"
name: "let"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/keywords.md#L26"
order: 1
---

Declares a mutable local variable.

The type is inferred from the initializer, or written after a colon. A `let`
can destructure a tuple: `let (a, b) = pair;`. `if let` and `while let` test a
pattern instead.

```coil
fn main() {
    let count = 0;
    let name: string = "coil";
    let (x, y) = (1, 2);
    count = count + x + y;
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
- [`for`](/docs/reference/keywords/for): Iterates over the values of an array, Vec, range, coroutine or any IntoIterator.
