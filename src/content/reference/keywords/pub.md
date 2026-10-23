---
slug: "keywords/pub"
title: "pub"
description: "Makes a class field or method accessible from outside the type."
module: "keywords"
kind: "keyword"
name: "pub"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/keywords.md#L652"
order: 27
---

Makes a class field or method accessible from outside the type.

Without `pub`, fields and methods are private to the type's own `impl`
blocks. Top-level items need no `pub`.

```coil
class User {
    pub name: string,
    password: string,
}

impl User {
    pub fn greeting() -> string {
        return "hi " + self.name;
    }

    fn secret_len() -> int {
        return self.password.len();
    }
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
