---
slug: "keywords/region"
title: "region"
description: "Runs a block whose garbage is freed in one go when the block ends."
module: "keywords"
kind: "keyword"
name: "region"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/keywords.md#L790"
order: 32
---

Runs a block whose garbage is freed in one go when the block ends.

`region { … }` suits a clear unit of work: one request, one frame, one
pass over a file. Objects made inside are reclaimed together at the end
instead of one by one by the collector. The compiler checks that none of
them can leave the region (E0140): an object made inside may not be
assigned to a local declared outside, stored into an object or static
from outside, passed to a function that keeps it, or be the block's value.
The value may be a plain value or an object made before the region.
`return`, `?`, `break` and `continue` leave the region on the way out, and
`region` is only a keyword before `{`: elsewhere it is an ordinary name.

```coil
use string::format;

fn total_len(int rounds) -> int {
    let total = 0;
    let i = 0;
    while i < rounds {
        total += region {
            let line = format("row %i", i);
            line.len()
        };
        i += 1;
    }
    return total;
}

fn main() {
    let n = total_len(3); // 15
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
