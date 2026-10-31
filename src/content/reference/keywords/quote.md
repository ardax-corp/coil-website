---
slug: "keywords/quote"
title: "quote"
description: "Builds generated code inside a macro: quote items|expr|stmts|type { template }."
module: "keywords"
kind: "keyword"
name: "quote"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L1264"
order: 55
---

Builds generated code inside a macro: `quote items|expr|stmts|type { template }`.

The template is Coil source with holes: `${e}` splices an expression, name,
type or `Code`, and `$(xs),*` splices a [`Vec<Code>`](/docs/reference/prelude/Vec) with a separator. The
result is a `Code` value. Names bound inside the template are renamed so
they cannot clash with the caller's. Contextual: `quote(x)` stays a call.

```coil
use macro::{Expr, Code};

macro twice(Expr e) -> Code {
    return quote stmts {
        ${e};
        ${e};
    };
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
