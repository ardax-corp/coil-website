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
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/list.hy#L4"
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
- [`ListIter`](/docs/reference/collections/list/ListIter): An iterator over a List, front to back, from List::iter.
