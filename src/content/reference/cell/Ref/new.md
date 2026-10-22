---
slug: "cell/Ref/new"
title: "Ref::new"
description: "New cell holding value."
module: "cell"
kind: "static method"
name: "new"
parent: "Ref"
signature: "pub static fn new(T value) -> Ref<T>"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/cell.hy#L30"
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

- [`Ref`](/docs/reference/cell/Ref): A shared, mutable box holding one T.
- [`Ref::get`](/docs/reference/cell/Ref/get): Current value.
- [`Ref::set`](/docs/reference/cell/Ref/set): Store value.
- [`Ref::replace`](/docs/reference/cell/Ref/replace): Store value and return the previous one.
- [`Ref::update`](/docs/reference/cell/Ref/update): Store f(current) and return the new value.
