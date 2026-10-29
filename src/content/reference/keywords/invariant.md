---
slug: "keywords/invariant"
title: "invariant"
description: "States a condition that must always hold for a class's instances, or each time a loop tests its condition."
module: "keywords"
kind: "keyword"
name: "invariant"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/keywords.md#L1031"
order: 45
---

States a condition that must always hold for a class's instances, or each time a loop tests its condition.

On a class (`class Name invariant cond { … }`) it is checked after `new` and
whenever a `pub` method returns. On a `while` or `for` loop it is checked
before the first iteration and after each one. Contextual: only a keyword in
those headers.

```coil
class Account
    invariant self.balance >= 0, "no overdraft"
{
    balance: int,
}

fn main() {
    let i = 0;
    while i < 3
        invariant i <= 3
    {
        i = i + 1;
    }
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
