---
slug: "symbol/fn_key"
title: "fn_key"
description: "Returns the key of the function this call is written in."
module: "symbol"
kind: "fn"
name: "fn_key"
signature: "fn fn_key() -> int"
import: "use symbol::{fn_key};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/symbol.hy#L41"
order: 0
---

Returns the key of the function this call is written in.

The key is an [`int`](/docs/reference/types/int) the compiler computes from the function's module
path, name and arity, and writes in place of the call: every call in
the same function returns the same key, whatever its arguments or its
caller, and every other function, method, overload, lambda and test
has its own. Inlining does not change it, and a generic function (or a
generic class's method) has a key per instantiation: `ident(1)` and
`ident(2)` share one, `ident("a")` has another. The key is not negative, and it
stays the same across builds as long as the function keeps its module,
name and arity (a lambda's key also depends on where it sits in the
file).

Use it to key a per-function cache, such as a memo table, without
spelling the function's name. Call it directly inside a function,
method, lambda or test; anywhere else (a `const` or `static`
initializer, top-level code) is error `E0144`, and it cannot be taken as
a function value. A generic function that calls it cannot be used as a
function value either (`E0145`): wrap the call at concrete types.

## Returns

`int`

## Examples

```coil
use symbol::{fn_key};
use tests::assert;
fn which(int x) -> int {
    return fn_key();
}

fn other() -> int {
    return fn_key();
}

fn main() {
    assert!(which(1) == which(2));
    assert!(which(1) != other());
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`next_id`](/docs/reference/symbol/next_id): Returns the next value of a process-wide counter.
