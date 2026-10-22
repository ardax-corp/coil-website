---
slug: "keywords/attr"
title: "attr"
description: "Declares an attribute macro: attr name(FnDecl f, …) -> Code { … }."
module: "keywords"
kind: "keyword"
name: "attr"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/keywords.md#L1092"
order: 49
---

Declares an attribute macro: `attr name(FnDecl f, …) -> Code { … }`.

It runs at compile time on the item marked `#[name(…)]` (a function, method,
class or enum) and its output replaces that item. The first parameter is a
`FnDecl` or `TypeDecl`; the others bind the attribute's arguments. A module
cannot use its own macros: import them from a provider module.

```coil
use macro::{FnDecl, Code, raw};

/// Keeps the function and adds a `name_twice` wrapper.
attr twice(FnDecl f) -> Code {
    return quote items {
        ${raw(f.source)}
        fn ${raw(f.name.str())}_twice() -> int {
            return ${raw(f.name.str())}() * 2;
        }
    };
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
