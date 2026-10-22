---
slug: "collections/list/List/pop_back"
title: "List::pop_back"
description: "Removes and returns the back value, or None when the list is empty."
module: "collections::list"
kind: "method"
name: "pop_back"
parent: "List"
signature: "pub fn pop_back() -> Option<T>"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/list.hy#L163"
order: 7
---

Removes and returns the back value, or `None` when the list is empty.

Walks the list, so it takes time proportional to its length.

Called on a `List` value as `value.pop_back(…)`.

## Returns

`Option<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == old(self.len) - 1 || (old(self.len) == 0 && self.len == 0)
```

## See also

- [`List`](/docs/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/docs/reference/collections/list/List/new): Creates an empty list.
- [`List::size`](/docs/reference/collections/list/List/size): Returns the number of values.
- [`List::is_empty`](/docs/reference/collections/list/List/is_empty): Returns true when the list has no values.
- [`List::push_front`](/docs/reference/collections/list/List/push_front): Adds v at the front.
- [`List::push_back`](/docs/reference/collections/list/List/push_back): Adds v at the back.
- [`List::peek_front`](/docs/reference/collections/list/List/peek_front): Returns the front value without removing it, or None when the list is empty.
- [`List::pop_front`](/docs/reference/collections/list/List/pop_front): Removes and returns the front value, or None when the list is empty.
