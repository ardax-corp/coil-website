---
slug: "symbol/index"
title: "symbol"
description: "Compile-time keys for functions and a process-wide id counter, for run-time tables such as memo caches."
module: "symbol"
kind: "module"
name: "symbol"
origin: "builtin"
auto: false
order: 13
---

[`fn_key()`](/docs/reference/symbol/fn_key) is a key of the function it is written in, fixed while compiling:
the same [`int`](/docs/reference/types/int) on every call in that function, and a different one in every
other function, method, overload, lambda and test. [`next_id()`](/docs/reference/symbol/next_id) counts up
across the whole process, so no two calls get the same id. Both are plain
[`int`](/docs/reference/types/int)s, meant as keys for your own tables, such as a memo cache keyed by
`(fn_key(), argument)`.

```coil
use symbol::{fn_key, next_id};
use tests::assert;

fn which(int n) -> int {
    return fn_key();
}

fn main() {
    assert!(which(1) == which(2));
    let a = next_id();
    assert!(next_id() > a);
}
```

A generic function has a key per instantiation (`ident(1)` and `ident(2)`
share one, `ident("a")` has another), and inlining never changes a key. A
generic function that calls [`fn_key()`](/docs/reference/symbol/fn_key) cannot be used as a function value
(error `E0145`). [`fn_key()`](/docs/reference/symbol/fn_key) outside a function body, such as in
a `const` initializer, is error `E0144`.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use symbol::{fn_key, next_id};
```

## Functions

| Name | Description |
|------|-------------|
| [`fn_key`](/docs/reference/symbol/fn_key) | Returns the key of the function this call is written in. |
| [`next_id`](/docs/reference/symbol/next_id) | Returns the next value of a process-wide counter. |
