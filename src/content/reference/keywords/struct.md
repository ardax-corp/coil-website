---
slug: "keywords/struct"
title: "struct"
description: "Declares a C struct layout for FFI: extern struct Name { field: type, … };."
module: "keywords"
kind: "keyword"
name: "struct"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/keywords.md#L1077"
order: 48
---

Declares a C struct layout for FFI: `extern struct Name { field: type, … };`.

The struct can be passed to and returned from C functions by value; a
returned struct is read with `.field`. Field types are C scalar names such as
`int32`, [`int`](/docs/reference/types/int) or [`float`](/docs/reference/types/float). There are no Coil structs: use `class`.

```coil
extern struct Point {
    x: int32,
    y: int32,
};
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
