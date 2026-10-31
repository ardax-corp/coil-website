---
slug: "stdlib/collections/list/ListIter/next"
package: "stdlib"
title: "ListIter::next"
description: "Returns the next value, or None at the end."
module: "collections::list"
kind: "method"
name: "next"
parent: "ListIter"
signature: "pub fn next() -> Option<T>"
import: "use collections::list::{ListIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/list.hy#L204"
order: 0
---

Returns the next value, or `None` at the end.

Called on a `ListIter` value as `value.next(…)`.

## Returns

`Option<T>`

## See also

- [`ListIter`](/packages/stdlib/reference/collections/list/ListIter): An iterator over a `List`, front to back, from `List::iter`.
