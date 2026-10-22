---
slug: "collections/list/index"
title: "collections::list"
description: "List: a singly-linked list."
module: "collections::list"
kind: "module"
name: "collections::list"
origin: "stdlib"
auto: false
order: 24
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::list::{Node, List};
```

## Types

| Name | Description |
|------|-------------|
| [`Node`](/docs/reference/collections/list/Node) | One cell of a [`List`](/docs/reference/collections/list/List): a value and the rest of the list. |
| [`List`](/docs/reference/collections/list/List) | A singly-linked list with constant-time push and pop at the front. |
| [`ListIter`](/docs/reference/collections/list/ListIter) | An iterator over a [`List`](/docs/reference/collections/list/List), front to back, from [`List::iter`](/docs/reference/collections/list/List/iter). |
