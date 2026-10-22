---
slug: "keywords/macro"
title: "macro"
description: "Declares a function-style macro: macro name(Expr a, …) -> Code { … }, used as name!(…)."
module: "keywords"
kind: "keyword"
name: "macro"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/keywords.md#L1140"
order: 51
---

Declares a function-style macro: `macro name(Expr a, …) -> Code { … }`, used as `name!(…)`.

It runs at compile time with the call's arguments as unevaluated `Expr`
values and returns code that replaces the call: an expression, statements,
or declarations depending on where the call is. A last [`Vec<Expr>`](/docs/reference/prelude/Vec) parameter
takes the remaining arguments. Contextual: `use macro::{…}` names the macro
model module.

```coil
use macro::{Expr, Code};

/// `square!(e)` expands to `e * e`.
macro square(Expr e) -> Code {
    return quote expr { ${e} * ${e} };
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
