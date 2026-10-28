---
slug: "collections/list/Node"
title: "Node"
description: "One cell of a List: a value and the rest of the list."
module: "collections::list"
kind: "class"
name: "Node"
signature: "class Node<T>"
import: "use collections::list::{Node};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/collections/list.hy#L4"
order: 0
---

One cell of a [`List`](/docs/reference/collections/list/List): a value and the rest of the list.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | `T` | The value held in this cell. |
| `next` | `Option<Node<T>>` | The following cell, or `None` at the end. |

## See also

- [`collections::list::List`](/docs/reference/collections/list/List)
- [`ListIter`](/docs/reference/collections/list/ListIter): An iterator over a `List`, front to back, from `List::iter`.
