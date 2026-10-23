---
slug: "prelude/ops/Ord"
title: "Ord"
description: "The ordering bundle: Lt, Le, Gt and Ge, with Eq."
module: "prelude::ops"
kind: "trait"
name: "Ord"
signature: "trait Ord<T: Lt + Le + Gt + Ge + Eq>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/prelude/ops.hy#L523"
order: 16
---

The ordering bundle: [`Lt`](/docs/reference/prelude/ops/Lt), [`Le`](/docs/reference/prelude/ops/Le), [`Gt`](/docs/reference/prelude/ops/Gt) and [`Ge`](/docs/reference/prelude/ops/Ge), with [`Eq`](/docs/reference/prelude/ops/Eq).

`Ord` has no methods of its own. A bound `T: Ord` allows `<`, `<=`, `>`,
`>=`, `==` and `!=` on `T`, and range bounds (`a..b`) must be `Ord`.
[`Eq`](/docs/reference/prelude/ops/Eq) is a superclass, so a type that is `Ord` is [`Eq`](/docs/reference/prelude/ops/Eq) too: an `impl Ord`
or `#[derive(Ord)]` needs an [`Eq`](/docs/reference/prelude/ops/Eq) instance (`#[derive(Eq, Ord)]`). [`int`](/docs/reference/types/int), [`float`](/docs/reference/types/float),
[`byte`](/docs/reference/types/byte) and [`string`](/docs/reference/types/string) are ordered (a [`string`](/docs/reference/types/string) by its UTF-8 bytes, so
`"B" < "a"` and a prefix sorts first); [`bool`](/docs/reference/types/bool) is not. A [`string`](/docs/reference/types/string) is not
a range bound. `#[derive(Ord)]` orders an enum or class by its fields in
declaration order, and a scalar-backed enum (`#[repr(int)]`,
`#[repr(string)]`, ..) by its backing value.

A tuple whose elements are all `Ord` is `Ord` too, ordered
lexicographically: the first element that differs decides
(`(1, "b") < (2, "a")`).

## Examples

```coil
use tests::assert;
fn smaller<T: Ord>(T a, T b) -> T {
    if a < b {
        return a;
    }
    return b;
}

fn main() {
    assert!(smaller(3, 2) == 2);
    assert!(smaller(1.5, 2.5) == 1.5);
    assert!(smaller("pear", "fig") == "fig");
    assert!(smaller((1, "b"), (1, "a")) == (1, "a"));
}
```

## See also

- [`Lt`](/docs/reference/prelude/ops/Lt)
- [`Le`](/docs/reference/prelude/ops/Le)
- [`Gt`](/docs/reference/prelude/ops/Gt)
- [`Ge`](/docs/reference/prelude/ops/Ge)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`byte`](/docs/reference/types/byte)
- [`string`](/docs/reference/types/string)
- [`bool`](/docs/reference/types/bool)
