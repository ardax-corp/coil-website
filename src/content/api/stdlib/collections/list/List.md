---
slug: "stdlib/collections/list/List"
package: "stdlib"
title: "List"
description: "A singly-linked list with constant-time push and pop at the front."
module: "collections::list"
kind: "class"
name: "List"
signature: "class List<T>"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/list.hy#L34"
order: 1
---

A singly-linked list with constant-time push and pop at the front.

[`push_back`](/packages/stdlib/reference/collections/list/List/push_back) and [`pop_back`](/packages/stdlib/reference/collections/list/List/pop_back) walk the whole list, so use
[`collections::deque::VecDeque`](/packages/stdlib/reference/collections/deque/VecDeque) when you need both ends to be fast.
`for x in list` visits the values front to back.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/stdlib/reference/collections/list/List/new) | Creates an empty list. |

## Methods

| Name | Description |
|------|-------------|
| [`len`](/packages/stdlib/reference/collections/list/List/len) | Returns the number of values. |
| [`is_empty`](/packages/stdlib/reference/collections/list/List/is_empty) | Returns `true` when the list has no values. |
| [`push_front`](/packages/stdlib/reference/collections/list/List/push_front) | Adds `v` at the front. |
| [`push_back`](/packages/stdlib/reference/collections/list/List/push_back) | Adds `v` at the back. |
| [`peek_front`](/packages/stdlib/reference/collections/list/List/peek_front) | Returns the front value without removing it, or `None` when the list is empty. |
| [`pop_front`](/packages/stdlib/reference/collections/list/List/pop_front) | Removes and returns the front value, or `None` when the list is empty. |
| [`pop_back`](/packages/stdlib/reference/collections/list/List/pop_back) | Removes and returns the back value, or `None` when the list is empty. |
| [`clear`](/packages/stdlib/reference/collections/list/List/clear) | Removes every value. |
| [`to_vec`](/packages/stdlib/reference/collections/list/List/to_vec) | Returns the values front to back as a new [`Vec`](/docs/reference/prelude/Vec). |
| [`iter`](/packages/stdlib/reference/collections/list/List/iter) | Returns an iterator over the values, front to back. |

## Trait implementations

- [`IntoIterator`](/docs/reference/prelude/IntoIterator) for `List<T>`

## Invariants

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
invariant self.len >= 0
```

## Examples

```coil
use collections::list::{List};
use tests::assert;
let xs: List<int> = List::new();
xs.push_front(2);
xs.push_front(1);
xs.push_back(3);
assert!(xs.len() == 3);
let sum = 0;
for x in xs {
    sum = sum * 10 + x;
}
assert!(sum == 123);
assert!((xs.pop_front() ?? 0) == 1);
```

## See also

- [`List::push_back`](/packages/stdlib/reference/collections/list/List/push_back)
- [`List::pop_back`](/packages/stdlib/reference/collections/list/List/pop_back)
- [`collections::deque::VecDeque`](/packages/stdlib/reference/collections/deque/VecDeque)
- [`Node`](/packages/stdlib/reference/collections/list/Node): One cell of a `List`: a value and the rest of the list.
- [`ListIter`](/packages/stdlib/reference/collections/list/ListIter): An iterator over a `List`, front to back, from `List::iter`.
