---
slug: "cell/Ref/set"
title: "Ref::set"
description: "Store value."
module: "cell"
kind: "method"
name: "set"
parent: "Ref"
signature: "pub fn set(T value)"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/cell.hy#L40"
order: 2
---

Store `value`.

Called on a `Ref` value as `value.set(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## See also

- [`Ref`](/docs/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::new`](/docs/reference/cell/Ref/new): New cell holding `value`.
- [`Ref::get`](/docs/reference/cell/Ref/get): Current value.
- [`Ref::replace`](/docs/reference/cell/Ref/replace): Store `value` and return the previous one.
- [`Ref::update`](/docs/reference/cell/Ref/update): Store `f(current)` and return the new value.
