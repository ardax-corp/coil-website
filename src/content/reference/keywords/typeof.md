---
slug: "keywords/typeof"
title: "typeof"
description: "Gives the static type of an expression as a string, at compile time."
module: "keywords"
kind: "keyword"
name: "typeof"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/keywords.md#L355"
order: 15
---

Gives the static type of an expression as a [`string`](/docs/reference/types/string), at compile time.

The operand is type-checked but never evaluated. Nominal types are written
with their defining module ([`prelude::Option<int>`](/docs/reference/prelude/Option)); types from the entry
file stay bare. A type that is not fully known is a compile error.

`typeof` is a unary prefix, like `-` or `readonly`: it takes the operand
right after it (with any calls, fields or indexing), so
`typeof x == "int"` compares the type name. Parenthesize a larger operand:
`typeof (a + b)`.

```coil
fn main() {
    let a = typeof 42; // "int"
    let b = typeof (1, "x"); // "(int, string)"
    let c = typeof Option::Some(1); // "prelude::Option<int>"
    let d = typeof a == "string"; // true
}
```

## See also

- [`string`](/docs/reference/types/string)
- [`Option`](/docs/reference/prelude/Option)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
