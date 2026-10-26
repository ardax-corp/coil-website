---
slug: "keywords/return"
title: "return"
description: "Leaves the current function, optionally with a value."
module: "keywords"
kind: "keyword"
name: "return"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/keywords.md#L300"
order: 12
---

Leaves the current function, optionally with a value.

`return;` returns [`unit`](/docs/reference/types/unit). In a function in result mode (one that returns a
[`Result`](/docs/reference/prelude/Result), uses `raise` or uses `?`), a plain `return v` is wrapped as
`Result::Ok(v)`. Pending `defer` blocks run before the function returns.

```coil
fn clamp(int n, int lo, int hi) -> int {
    if n < lo {
        return lo;
    }
    if n > hi {
        return hi;
    }
    return n;
}
```

## See also

- [`unit`](/docs/reference/types/unit)
- [`Result`](/docs/reference/prelude/Result)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
