---
slug: "cell/Ref/get"
title: "Ref::get"
description: "Current value."
module: "cell"
kind: "method"
name: "get"
parent: "Ref"
signature: "pub fn get() -> T"
import: "use cell::{Ref};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/cell.hy#L35"
order: 1
---

Current value.

Called on a `Ref` value as `value.get(…)`.

## Returns

`T`

## See also

- [`Ref`](/docs/reference/cell/Ref): A shared, mutable box holding one `T`.
- [`Ref::new`](/docs/reference/cell/Ref/new): New cell holding `value`.
- [`Ref::set`](/docs/reference/cell/Ref/set): Store `value`.
- [`Ref::replace`](/docs/reference/cell/Ref/replace): Store `value` and return the previous one.
- [`Ref::update`](/docs/reference/cell/Ref/update): Store `f(current)` and return the new value.
