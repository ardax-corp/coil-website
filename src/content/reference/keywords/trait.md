---
slug: "keywords/trait"
title: "trait"
description: "Declares a trait: a set of functions that types implement with impl Trait for Type."
module: "keywords"
kind: "keyword"
name: "trait"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/keywords.md#L986"
order: 44
---

Declares a trait: a set of functions that types implement with `impl Trait for Type`.

Its first type parameter is the implementing type. Methods may have default
bodies, and a trait can declare associated types (`type Elem;`) and
`static fn` constructors. Use it as a bound (`T: Area`) or as an
existential parameter type.

A trait method is called as a method (`x.area()`), as a function
(`area(x)`), or qualified by its trait (`Area::area(x)`). The qualified
form resolves like the function form but only considers that trait's
method, so it picks between two traits (or a trait and a free function)
that share a method name; it compiles to the same call.

```coil
trait Area<T> {
    fn area(T x) -> int;
}

class Square {
    pub side: int,
}

impl Area for Square {
    fn area(Square s) -> int {
        return s.side * s.side;
    }
}

fn total<T: Area>(T a, T b) -> int {
    return area(a) + Area::area(b);
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
