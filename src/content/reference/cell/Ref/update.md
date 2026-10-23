---
slug: "cell/Ref/update"
title: "Ref::update"
description: "Store f(current) and return the new value."
module: "cell"
kind: "method"
name: "update"
parent: "Ref"
signature: "pub fn update(T -> T f) -> T"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/cell.hy#L52"
order: 4
---

Store `f(current)` and return the new value.

Called on a `Ref` value as `value.update(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `T -> T` |

## Returns

`T`

## See also

- [`Ref`](/docs/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::new`](/docs/reference/cell/Ref/new): New cell holding `value`.
- [`Ref::get`](/docs/reference/cell/Ref/get): Current value.
- [`Ref::set`](/docs/reference/cell/Ref/set): Store `value`.
- [`Ref::replace`](/docs/reference/cell/Ref/replace): Store `value` and return the previous one.
