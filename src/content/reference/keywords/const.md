---
slug: "keywords/const"
title: "const"
description: "Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new."
module: "keywords"
kind: "keyword"
name: "const"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/keywords.md#L43"
order: 2
---

Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.

A `const` local is shallow: the variable cannot be reassigned, but the
contents of a [`Vec`](/docs/reference/prelude/Vec), class instance or record it holds can still change (the
compiler warns about that). On a class field, `const` forbids any write after
construction, even from the class's own methods.

A module-level `const` whose value is known at compile time (`const LIMIT =
100;`) is inlined where it is read. Any other value (an array such as
`const TABLE = [1, 2, 3];`, or a function call) is computed once, before
`main`, and the name still cannot be reassigned. `static const` is the old spelling of this: it
warns (E0129), and `coil fmt` rewrites it to `const`.

A `const` set to a `readonly` array literal is a lookup table: a read at a
constant index folds to the element, and a function-local
`const t = readonly [1, 2, 3];` is built on its first run and reused.

```coil
const VERSION = "1.0";

class Point {
    pub const x: int,
    pub const y: int,
}

fn main() {
    const limit = 100;
    let p = new Point(1, 2);
    let total = limit + p.x + p.y;
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a `bool` condition is true.
