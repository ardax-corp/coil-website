---
slug: "keywords/uses"
title: "uses"
description: "Declares the effects a function may have: uses {read, write}."
module: "keywords"
kind: "keyword"
name: "uses"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/keywords.md#L884"
order: 39
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
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
