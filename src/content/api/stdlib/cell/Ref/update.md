---
slug: "stdlib/cell/Ref/update"
package: "stdlib"
title: "Ref::update"
description: "Store f(current) and return the new value."
module: "cell"
kind: "method"
name: "update"
parent: "Ref"
signature: "pub fn update(T -> T f) -> T"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/cell.coil#L52"
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

- [`Ref`](/packages/stdlib/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::new`](/packages/stdlib/reference/cell/Ref/new): New cell holding `value`.
- [`Ref::get`](/packages/stdlib/reference/cell/Ref/get): Current value.
- [`Ref::set`](/packages/stdlib/reference/cell/Ref/set): Store `value`.
- [`Ref::replace`](/packages/stdlib/reference/cell/Ref/replace): Store `value` and return the previous one.
