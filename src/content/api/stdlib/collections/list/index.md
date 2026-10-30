---
slug: "stdlib/collections/list/index"
package: "stdlib"
title: "collections::list"
description: "List: a singly-linked list."
module: "collections::list"
kind: "module"
name: "collections::list"
origin: "stdlib"
auto: false
order: 7
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::list::{Node, List};
```

## Types

| Name | Description |
|------|-------------|
| [`Node`](/packages/stdlib/reference/collections/list/Node) | One cell of a [`List`](/packages/stdlib/reference/collections/list/List): a value and the rest of the list. |
| [`List`](/packages/stdlib/reference/collections/list/List) | A singly-linked list with constant-time push and pop at the front. |
| [`ListIter`](/packages/stdlib/reference/collections/list/ListIter) | An iterator over a [`List`](/packages/stdlib/reference/collections/list/List), front to back, from [`List::iter`](/packages/stdlib/reference/collections/list/List/iter). |
