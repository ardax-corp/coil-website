---
slug: "stdlib/collections/list/ListIter"
package: "stdlib"
title: "ListIter"
description: "An iterator over a List, front to back, from List::iter."
module: "collections::list"
kind: "class"
name: "ListIter"
signature: "class ListIter<T>"
import: "use collections::list::{ListIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/list.coil#L42"
order: 2
---

An iterator over a [`List`](/packages/stdlib/reference/collections/list/List), front to back, from [`List::iter`](/packages/stdlib/reference/collections/list/List/iter).

## Methods

| Name | Description |
|------|-------------|
| [`next`](/packages/stdlib/reference/collections/list/ListIter/next) | Returns the next value, or `None` at the end. |

## Trait implementations

- [`Iterator`](/docs/reference/prelude/Iterator) for `ListIter<T>`

## See also

- [`collections::list::List`](/packages/stdlib/reference/collections/list/List)
- [`List::iter`](/packages/stdlib/reference/collections/list/List/iter)
- [`Node`](/packages/stdlib/reference/collections/list/Node): One cell of a `List`: a value and the rest of the list.
