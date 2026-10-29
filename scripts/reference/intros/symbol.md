---
description: "Compile-time keys for functions and a process-wide id counter, for run-time tables such as memo caches."
---
`fn_key()` is a key of the function it is written in, fixed while compiling:
the same `int` on every call in that function, and a different one in every
other function, method, overload, lambda and test. `next_id()` counts up
across the whole process, so no two calls get the same id. Both are plain
`int`s, meant as keys for your own tables, such as a memo cache keyed by
`(fn_key(), argument)`.

```coil
use symbol::{fn_key, next_id};
# use tests::assert;

fn which(int n) -> int {
    return fn_key();
}

fn main() {
    assert!(which(1) == which(2));
    let a = next_id();
    assert!(next_id() > a);
}
```

A generic function has one key for all the types it is called with, and
inlining never changes a key. `fn_key()` outside a function body, such as in
a `const` initializer, is error `E0144`.
