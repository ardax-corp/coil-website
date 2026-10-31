---
slug: "stdlib/cell/Ref"
package: "stdlib"
title: "Ref"
description: "A shared, mutable box holding one T."
module: "cell"
kind: "class"
name: "Ref"
signature: "shared class Ref<T>"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/cell.hy#L24"
order: 0
---

A shared, mutable box holding one `T`.

Captured locals are copies: a lambda, `defer` block or task that assigns to a
captured variable changes only its own copy. Capture a `Ref` instead, and
every holder sees each [`set`](/packages/stdlib/reference/cell/Ref/set).

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/cell/Ref/new) | New cell holding `value`. |

## Methods

| Name | Description |
|------|-------------|
| [`get`](/packages/stdlib/reference/cell/Ref/get) | Current value. |
| [`set`](/packages/stdlib/reference/cell/Ref/set) | Store `value`. |
| [`replace`](/packages/stdlib/reference/cell/Ref/replace) | Store `value` and return the previous one. |
| [`update`](/packages/stdlib/reference/cell/Ref/update) | Store `f(current)` and return the new value. |

## Examples

```coil
use cell::{Ref};
use tests::assert;
let count = Ref::new(0);
let bump = fn () use (count) => count.update(fn (int n) => n + 1);
bump();
bump();
assert!(count.get() == 2);
```

## See also

- [`Ref::set`](/packages/stdlib/reference/cell/Ref/set)
