---
slug: "collections/list/List/pop_front"
title: "List::pop_front"
description: "Removes and returns the front value, or None when the list is empty. Constant time."
module: "collections::list"
kind: "method"
name: "pop_front"
parent: "List"
signature: "pub fn pop_front() -> Option<T>"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/list.hy#L136"
order: 6
---

Removes and returns the front value, or `None` when the list is empty. Constant time.

Called on a `List` value as `value.pop_front(…)`.

## Returns

`Option<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == old(self.len) - 1 || (old(self.len) == 0 && self.len == 0)
```

## Examples

```coil
use collections::list::{List};
use tests::assert;
let xs: List<int> = List::new();
xs.push_front(7);
assert!((xs.pop_front() ?? 0) == 7);
assert!(xs.pop_front().is_none());
```

## See also

- [`List`](/docs/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/docs/reference/collections/list/List/new): Creates an empty list.
- [`List::len`](/docs/reference/collections/list/List/len): Returns the number of values.
- [`List::is_empty`](/docs/reference/collections/list/List/is_empty): Returns `true` when the list has no values.
- [`List::push_front`](/docs/reference/collections/list/List/push_front): Adds `v` at the front.
- [`List::push_back`](/docs/reference/collections/list/List/push_back): Adds `v` at the back.
- [`List::peek_front`](/docs/reference/collections/list/List/peek_front): Returns the front value without removing it, or `None` when the list is empty.
- [`List::pop_back`](/docs/reference/collections/list/List/pop_back): Removes and returns the back value, or `None` when the list is empty.
