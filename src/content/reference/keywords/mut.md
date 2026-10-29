---
slug: "keywords/mut"
title: "mut"
description: "Borrows a place instead of copying it: the new name reaches the same object."
module: "keywords"
kind: "keyword"
name: "mut"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/keywords.md#L43"
order: 2
---

Borrows a place instead of copying it: the new name reaches the same object.

Class instances, vectors and maps are values: `let b = a;` gives `b` a
copy, made only when one side writes (copy-on-write). `mut` asks for the
original instead. `let c = mut a.config;` makes `c` another name for
`a.config`, `for mut item in items` changes each element in place, and
`fn () use (mut list) { … }` lets a lambda change the outer [`list`](/docs/reference/collections/list).

```coil
use tests::assert;

class Point {
    pub x: int,
}

fn main() {
    let a = new Point(1);
    let b = a;
    b.x = 2; // copies: `a.x` stays 1
    let c = mut a;
    c.x = 5; // writes `a`'s object
    let ps: Vec<Point> = [new Point(0)];
    for mut p in ps {
        p.x = 9;
    }
    assert!(a.x == 5 && b.x == 2 && ps[0].x == 9);
}
```

## See also

- [`collections::list`](/docs/reference/collections/list)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an `if` that runs when its condition is false (or its pattern does not match).
