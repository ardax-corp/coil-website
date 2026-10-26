---
slug: "collections/list/List/push_front"
title: "List::push_front"
description: "Adds v at the front. Constant time."
module: "collections::list"
kind: "method"
name: "push_front"
parent: "List"
signature: "pub fn push_front(T v)"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/list.hy#L74"
order: 3
---

Adds `v` at the front. Constant time.

Called on a `List` value as `value.push_front(…)`.

## Parameters

| Name | Type |
|------|------|
| `v` | `T` |

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == old(self.len) + 1
```

## Examples

```coil
use collections::list::{List};
use tests::assert;
let xs: List<string> = List::new();
xs.push_front("b");
xs.push_front("a");
assert!((xs.peek_front() ?? "") == "a");
```

## See also

- [`List`](/docs/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/docs/reference/collections/list/List/new): Creates an empty list.
- [`List::len`](/docs/reference/collections/list/List/len): Returns the number of values.
- [`List::is_empty`](/docs/reference/collections/list/List/is_empty): Returns `true` when the list has no values.
- [`List::push_back`](/docs/reference/collections/list/List/push_back): Adds `v` at the back.
- [`List::peek_front`](/docs/reference/collections/list/List/peek_front): Returns the front value without removing it, or `None` when the list is empty.
- [`List::pop_front`](/docs/reference/collections/list/List/pop_front): Removes and returns the front value, or `None` when the list is empty.
- [`List::pop_back`](/docs/reference/collections/list/List/pop_back): Removes and returns the back value, or `None` when the list is empty.
