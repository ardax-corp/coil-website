---
slug: "keywords/uses"
title: "uses"
description: "Declares the effects a function may have: uses {read, write}."
module: "keywords"
kind: "keyword"
name: "uses"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/keywords.md#L976"
order: 42
---

Declares the effects a function may have: `uses {read, write}`.

The effects are `read`, `write`, [`net`](/docs/reference/io/net), [`env`](/docs/reference/env), `exec`, [`ffi`](/docs/reference/ffi), [`thread`](/docs/reference/thread),
`suspend` and `mutate`. The compiler checks the list against what the body
does (error `E0413`); `uses {}` means the same as `pure`. Contextual: only a
keyword after the signature (and its `where` clause).

```coil
static let hits = 0;

fn bump() uses {read, mutate} {
    hits = hits + 1;
}
```

## See also

- [`io::net`](/docs/reference/io/net)
- [`env`](/docs/reference/env)
- [`ffi`](/docs/reference/ffi)
- [`thread`](/docs/reference/thread)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
