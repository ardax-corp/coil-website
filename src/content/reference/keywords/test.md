---
slug: "keywords/test"
title: "test"
description: "Declares a test case run by coil test: test(\"name\") { … }."
module: "keywords"
kind: "keyword"
name: "test"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L1126"
order: 48
---

Declares a test case run by `coil test`: `test("name") { … }`.

The body runs in result mode, so `assert!(…)`, `raise` and `?` fail the case.
Each case runs in its own VM. Cases are left out of ordinary builds; a file
with test cases has no `fn main`.

```coil
use tests::assert;

test("addition works") {
    assert!(1 + 1 == 2);
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
