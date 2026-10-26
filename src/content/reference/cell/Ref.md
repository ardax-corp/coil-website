---
slug: "cell/Ref"
title: "Ref"
description: "A shared, mutable box holding one T."
module: "cell"
kind: "class"
name: "Ref"
signature: "class Ref<T>"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/cell.hy#L24"
order: 0
---

A shared, mutable box holding one `T`.

Captured locals are copies: a lambda, `defer` block or task that assigns to a
captured variable changes only its own copy. Capture a `Ref` instead, and
every holder sees each [`set`](/docs/reference/cell/Ref/set).

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/docs/reference/cell/Ref/new) | New cell holding `value`. |

## Methods

| Name | Description |
|------|-------------|
| [`get`](/docs/reference/cell/Ref/get) | Current value. |
| [`set`](/docs/reference/cell/Ref/set) | Store `value`. |
| [`replace`](/docs/reference/cell/Ref/replace) | Store `value` and return the previous one. |
| [`update`](/docs/reference/cell/Ref/update) | Store `f(current)` and return the new value. |

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

- [`Ref::set`](/docs/reference/cell/Ref/set)
