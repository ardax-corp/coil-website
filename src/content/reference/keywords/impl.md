---
slug: "keywords/impl"
title: "impl"
description: "Adds methods to a type (impl Type { … }) or implements a trait for it (impl Trait for Type { … })."
module: "keywords"
kind: "keyword"
name: "impl"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/keywords.md#L675"
order: 28
---

Adds methods to a type (`impl Type { … }`) or implements a trait for it (`impl Trait for Type { … }`).

Methods have an implicit `self`; `pub` makes them callable from outside the
type, and `static fn` declares one that is called on the type. An inherent
`fn drop()` is a finalizer the garbage collector runs once.

A generic type's inherent impl declares its parameters, `impl Cell<T> { … }`
(bounds as `impl Cell<T: Eq>`). `impl Show<Foo> { … }` is an error: a trait
instance is always written `impl Show for Foo`.

```coil
class Celsius {
    pub deg: float,
}

trait Describe<T> {
    fn describe(T x) -> string;
}

impl Celsius {
    pub fn to_fahrenheit() -> float {
        return self.deg * 9.0 / 5.0 + 32.0;
    }
}

impl Describe for Celsius {
    fn describe(Celsius c) -> string {
        return "temperature";
    }
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
