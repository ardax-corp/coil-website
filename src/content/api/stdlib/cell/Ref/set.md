---
slug: "stdlib/cell/Ref/set"
package: "stdlib"
title: "Ref::set"
description: "Store value."
module: "cell"
kind: "method"
name: "set"
parent: "Ref"
signature: "pub fn set(T value)"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/cell.coil#L40"
order: 2
---

Store `value`.

Called on a `Ref` value as `value.set(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## See also

- [`Ref`](/packages/stdlib/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::new`](/packages/stdlib/reference/cell/Ref/new): New cell holding `value`.
- [`Ref::get`](/packages/stdlib/reference/cell/Ref/get): Current value.
- [`Ref::replace`](/packages/stdlib/reference/cell/Ref/replace): Store `value` and return the previous one.
- [`Ref::update`](/packages/stdlib/reference/cell/Ref/update): Store `f(current)` and return the new value.
