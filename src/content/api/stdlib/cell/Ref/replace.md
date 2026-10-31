---
slug: "stdlib/cell/Ref/replace"
package: "stdlib"
title: "Ref::replace"
description: "Store value and return the previous one."
module: "cell"
kind: "method"
name: "replace"
parent: "Ref"
signature: "pub fn replace(T value) -> T"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/cell.hy#L45"
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

- [`Ref`](/packages/stdlib/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::new`](/packages/stdlib/reference/cell/Ref/new): New cell holding `value`.
- [`Ref::get`](/packages/stdlib/reference/cell/Ref/get): Current value.
- [`Ref::set`](/packages/stdlib/reference/cell/Ref/set): Store `value`.
- [`Ref::update`](/packages/stdlib/reference/cell/Ref/update): Store `f(current)` and return the new value.
