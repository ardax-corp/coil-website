---
slug: "stdlib/collections/list/Node"
package: "stdlib"
title: "Node"
description: "One cell of a List: a value and the rest of the list."
module: "collections::list"
kind: "class"
name: "Node"
signature: "class Node<T>"
import: "use collections::list::{Node};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/list.coil#L4"
order: 0
---

One cell of a [`List`](/packages/stdlib/reference/collections/list/List): a value and the rest of the list.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | `T` | The value held in this cell. |
| `next` | `Option<Node<T>>` | The following cell, or `None` at the end. |

## See also

- [`collections::list::List`](/packages/stdlib/reference/collections/list/List)
- [`ListIter`](/packages/stdlib/reference/collections/list/ListIter): An iterator over a `List`, front to back, from `List::iter`.
