---
slug: "keywords/else"
title: "else"
description: "Introduces the branch of an if that runs when its condition is false (or its pattern does not match)."
module: "keywords"
kind: "keyword"
name: "else"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/keywords.md#L190"
order: 6
---

Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).

`else` is followed by a block or by another `if`, which forms an `else if`
chain.

```coil
fn describe(int n) -> string {
    if n % 2 == 0 {
        return "even";
    } else {
        return "odd";
    }
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
- [`for`](/docs/reference/keywords/for): Iterates over the values of an array, Vec, range, coroutine or any IntoIterator.
