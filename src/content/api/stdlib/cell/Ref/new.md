---
slug: "stdlib/cell/Ref/new"
package: "stdlib"
title: "Ref::new"
description: "New cell holding value."
module: "cell"
kind: "static method"
name: "new"
parent: "Ref"
signature: "pub static fn new(T value) -> Ref<T>"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/cell.coil#L30"
order: 0
---

New cell holding `value`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`Ref<T>`

## See also

- [`Ref`](/packages/stdlib/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::get`](/packages/stdlib/reference/cell/Ref/get): Current value.
- [`Ref::set`](/packages/stdlib/reference/cell/Ref/set): Store `value`.
- [`Ref::replace`](/packages/stdlib/reference/cell/Ref/replace): Store `value` and return the previous one.
- [`Ref::update`](/packages/stdlib/reference/cell/Ref/update): Store `f(current)` and return the new value.
