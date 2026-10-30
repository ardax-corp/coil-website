---
slug: "keywords/enum"
title: "enum"
description: "Declares a sum type: a value is exactly one of its variants."
module: "keywords"
kind: "keyword"
name: "enum"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/keywords.md#L465"
order: 18
---

Declares a sum type: a value is exactly one of its variants.

Variants can carry no data, a tuple payload or named fields. Build them with
`Enum::Variant` and take them apart with `match`. With `#[repr(int)]` (or
[`string`](/docs/reference/types/string), [`float`](/docs/reference/types/float), [`bool`](/docs/reference/types/bool)), each variant is backed by a literal (`Ok = 200`).
An enum may be generic.

```coil
enum Shape {
    Circle(float),
    Rect { w: float, h: float },
    Empty,
}

fn area(Shape s) -> float {
    return match s {
        Shape::Circle(r) => 3.14 * r * r,
        Shape::Rect { w, h } => w * h,
        Shape::Empty => 0.0,
    };
}
```

## See also

- [`string`](/docs/reference/types/string)
- [`float`](/docs/reference/types/float)
- [`bool`](/docs/reference/types/bool)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without `self`.
