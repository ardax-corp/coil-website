---
slug: "cell/Ref/replace"
title: "Ref::replace"
description: "Store value and return the previous one."
module: "cell"
kind: "method"
name: "replace"
parent: "Ref"
signature: "pub fn replace(T value) -> T"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/cell.hy#L45"
order: 3
---

Store `value` and return the previous one.

Called on a `Ref` value as `value.replace(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`T`

## See also

- [`Ref`](/docs/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::new`](/docs/reference/cell/Ref/new): New cell holding `value`.
- [`Ref::get`](/docs/reference/cell/Ref/get): Current value.
- [`Ref::set`](/docs/reference/cell/Ref/set): Store `value`.
- [`Ref::update`](/docs/reference/cell/Ref/update): Store `f(current)` and return the new value.
