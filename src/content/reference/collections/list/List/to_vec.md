---
slug: "collections/list/List/to_vec"
title: "List::to_vec"
description: "Returns the values front to back as a new Vec."
module: "collections::list"
kind: "method"
name: "to_vec"
parent: "List"
signature: "pub fn to_vec() -> Vec<T>"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/list.hy#L220"
order: 9
---

Returns the values front to back as a new [`Vec`](/docs/reference/prelude/Vec).

Called on a `List` value as `value.to_vec(…)`.

## Returns

`Vec<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == self.len
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`List`](/docs/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/docs/reference/collections/list/List/new): Creates an empty list.
- [`List::len`](/docs/reference/collections/list/List/len): Returns the number of values.
- [`List::is_empty`](/docs/reference/collections/list/List/is_empty): Returns `true` when the list has no values.
- [`List::push_front`](/docs/reference/collections/list/List/push_front): Adds `v` at the front.
- [`List::push_back`](/docs/reference/collections/list/List/push_back): Adds `v` at the back.
- [`List::peek_front`](/docs/reference/collections/list/List/peek_front): Returns the front value without removing it, or `None` when the list is empty.
