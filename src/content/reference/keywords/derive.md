---
slug: "keywords/derive"
title: "derive"
description: "Declares a derive macro: derive Name(TypeDecl t) -> Code { … }, used as #[derive(Name)]."
module: "keywords"
kind: "keyword"
name: "derive"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/keywords.md#L1115"
order: 50
---

Declares a derive macro: `derive Name(TypeDecl t) -> Code { … }`, used as `#[derive(Name)]`.

It runs at compile time on the class or enum it is attached to, and its
output (usually an `impl`) is added after the type. `attrs(h, …)` lists the
field and variant attributes it owns. The built-in derives ([`Show`](/docs/reference/prelude/ops/Show), [`Eq`](/docs/reference/prelude/ops/Eq),
[`Ord`](/docs/reference/prelude/ops/Ord), `Hash`, `String`, `Default`, `Send`, `Sensitive`) need no import.
Contextual: elsewhere `derive` is an ordinary name.

```coil
use macro::{TypeDecl, Code, lit};

/// `T::type_name()` returns the type's name.
derive TypeName(TypeDecl t) -> Code {
    return quote items {
        impl ${t.name} {
            pub static fn type_name() -> string {
                return ${lit(t.name.str())};
            }
        }
    };
}
```

## See also

- [`Show`](/docs/reference/prelude/ops/Show)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
