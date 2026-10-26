---
slug: "collections/list/List/len"
title: "List::len"
description: "Returns the number of values."
module: "collections::list"
kind: "method"
name: "len"
parent: "List"
signature: "pub fn len() -> int"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/collections/list.hy#L53"
order: 1
---

Returns the number of values.

Called on a `List` value as `value.len(…)`.

## Returns

`int`

## See also

- [`List`](/docs/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/docs/reference/collections/list/List/new): Creates an empty list.
- [`List::is_empty`](/docs/reference/collections/list/List/is_empty): Returns `true` when the list has no values.
- [`List::push_front`](/docs/reference/collections/list/List/push_front): Adds `v` at the front.
- [`List::push_back`](/docs/reference/collections/list/List/push_back): Adds `v` at the back.
- [`List::peek_front`](/docs/reference/collections/list/List/peek_front): Returns the front value without removing it, or `None` when the list is empty.
- [`List::pop_front`](/docs/reference/collections/list/List/pop_front): Removes and returns the front value, or `None` when the list is empty.
- [`List::pop_back`](/docs/reference/collections/list/List/pop_back): Removes and returns the back value, or `None` when the list is empty.
