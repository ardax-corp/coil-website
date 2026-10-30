---
slug: "collections/list/ListIter"
title: "ListIter"
description: "An iterator over a List, front to back, from List::iter."
module: "collections::list"
kind: "class"
name: "ListIter"
signature: "class ListIter<T>"
import: "use collections::list::{ListIter};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/collections/list.hy#L42"
order: 2
---

An iterator over a [`List`](/docs/reference/collections/list/List), front to back, from [`List::iter`](/docs/reference/collections/list/List/iter).

## Methods

| Name | Description |
|------|-------------|
| [`next`](/docs/reference/collections/list/ListIter/next) | Returns the next value, or `None` at the end. |

## Trait implementations

- [`Iterator`](/docs/reference/prelude/Iterator) for `ListIter<T>`

## See also

- [`collections::list::List`](/docs/reference/collections/list/List)
- [`List::iter`](/docs/reference/collections/list/List/iter)
- [`Node`](/docs/reference/collections/list/Node): One cell of a `List`: a value and the rest of the list.
