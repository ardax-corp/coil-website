---
slug: "collections/list/List/clear"
title: "List::clear"
description: "Removes every value."
module: "collections::list"
kind: "method"
name: "clear"
parent: "List"
signature: "pub fn clear()"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/list.hy#L212"
order: 8
---

Removes every value.

Called on a `List` value as `value.clear(…)`.

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == 0
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
