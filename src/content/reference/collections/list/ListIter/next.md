---
slug: "collections/list/ListIter/next"
title: "ListIter::next"
description: "Returns the next value, or None at the end."
module: "collections::list"
kind: "method"
name: "next"
parent: "ListIter"
signature: "pub fn next() -> Option<T>"
import: "use collections::list::{ListIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/list.hy#L248"
order: 0
---

Returns the next value, or `None` at the end.

Called on a `ListIter` value as `value.next(…)`.

## Returns

`Option<T>`

## See also

- [`ListIter`](/docs/reference/collections/list/ListIter): An iterator over a `List`, front to back, from `List::iter`.
