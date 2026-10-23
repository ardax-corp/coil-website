---
slug: "keywords/class"
title: "class"
description: "Declares a class: a named heap type with fields, constructed with new."
module: "keywords"
kind: "keyword"
name: "class"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/keywords.md#L591"
order: 25
---

Declares a class: a named heap type with fields, constructed with `new`.

Fields are `name: Type`, private unless marked `pub`; `const` fields are
set only by the constructor and `static` fields belong to the class. Methods
go in an `impl` block. A class can be generic and can declare an
`invariant`.

```coil
class Account {
    pub owner: string,
    balance: int,
}

impl Account {
    pub fn deposit(int amount) {
        self.balance = self.balance + amount;
    }
}

fn main() {
    let a = new Account("ada", 0);
    a.deposit(10);
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
