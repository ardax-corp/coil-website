---
slug: "keywords/readonly"
title: "readonly"
description: "A read-only view of a value: nothing reachable through it can be changed."
module: "keywords"
kind: "keyword"
name: "readonly"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/keywords.md#L143"
order: 5
---

A read-only view of a value: nothing reachable through it can be changed.

`readonly T` is a type, written anywhere a type is: parameters, returns, `let`
annotations, class fields and generic arguments ([`Vec<readonly Point>`](/docs/reference/prelude/Vec)).
`readonly e` views any expression read-only (`readonly [1, 2, 3]`,
`readonly new Point(1, 2)`, `readonly p`). Field writes, index writes and
`push`/`pop`/… through it are compile errors, and so is calling a method or
function that mutates it: the compiler infers which parameters (`self`
included) each body mutates, and the error names the write (`it mutates
`self` (writes field `x`)`). A trait method is callable on a `readonly` value,
`readonly Area` trait objects included, only when the trait declares
`readonly A self`; its impls must then not mutate `self`. The seal is deep: a
field, element, loop variable or matched payload read through it is
`readonly` too (`readonly Option<P>` is [`Option<readonly P>`](/docs/reference/prelude/Option)), and so is what
a method called on it returns (`p.get_inner()`, `r.get()` on a `readonly
Ref<P>`), unless its trait declares `readonly A self`. A `T` converts
to `readonly T`, never back, and [`Vec<T>`](/docs/reference/prelude/Vec) does not convert to
[`Vec<readonly T>`](/docs/reference/prelude/Vec); a parameter that only reads takes `readonly Vec<T>`.
`readonly` costs nothing at run time, and the variable itself can still be
rebound.

```coil
class Point {
    pub x: int,
    pub y: int,
}

impl Point {
    pub fn norm1() -> int {
        return self.x + self.y;
    }

    pub fn shift() {
        self.x = self.x + 1;
    }
}

fn sum(readonly Point p) -> int {
    return p.x + p.y; // reading is fine; `p.x = 5;` would not compile
}

fn main() {
    let xs = readonly [1, 2, 3];
    let p = new Point(1, 2);
    let r = readonly p;
    let total = sum(p) + sum(r) + r.norm1(); // `r.shift()` would not compile
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Option`](/docs/reference/prelude/Option)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
- [`if`](/docs/reference/keywords/if): Runs a block when a `bool` condition is true.
