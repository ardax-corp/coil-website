---
slug: "keywords/extern"
title: "extern"
description: "Binds C functions from a native library at compile time: extern \"lib\" { fn …; }."
module: "keywords"
kind: "keyword"
name: "extern"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/keywords.md#L568"
order: 24
---

Binds C functions from a native library at compile time: `extern "lib" { fn …; }`.

Each declaration is a signature ending in `;`, called like an ordinary
function. The compiler loads the library and declares the functions for you,
panicking with a clear message if that fails. A trailing bare `...` marks C
varargs. The library stem is gated like [`ffi::dload`](/docs/reference/ffi/dload): the build needs
`--allow-dload STEM`, and the run a `--dload-pin` or `--dload-trusted` for
it; `extern "c"` (libc) is always denied. `extern struct Name { … };`
declares a C struct passed by value.

```coil
extern "sum" {
    fn sum(int a, int b) -> int;
    fn sum_n(int n, ...) -> int;
}

fn main() {
    let n = sum(40, 2);
}
```

## See also

- [`ffi::dload`](/docs/reference/ffi/dload)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
