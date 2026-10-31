---
slug: "stdlib/collections/list/List/peek_front"
package: "stdlib"
title: "List::peek_front"
description: "Returns the front value without removing it, or None when the list is empty."
module: "collections::list"
kind: "method"
name: "peek_front"
parent: "List"
signature: "pub fn peek_front() -> Option<T>"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/list.hy#L117"
order: 5
---

Returns the front value without removing it, or `None` when the list is empty.

Called on a `List` value as `value.peek_front(…)`.

## Returns

`Option<T>`

## See also

- [`List`](/packages/stdlib/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::new`](/packages/stdlib/reference/collections/list/List/new): Creates an empty list.
- [`List::len`](/packages/stdlib/reference/collections/list/List/len): Returns the number of values.
- [`List::is_empty`](/packages/stdlib/reference/collections/list/List/is_empty): Returns `true` when the list has no values.
- [`List::push_front`](/packages/stdlib/reference/collections/list/List/push_front): Adds `v` at the front.
- [`List::push_back`](/packages/stdlib/reference/collections/list/List/push_back): Adds `v` at the back.
- [`List::pop_front`](/packages/stdlib/reference/collections/list/List/pop_front): Removes and returns the front value, or `None` when the list is empty.
- [`List::pop_back`](/packages/stdlib/reference/collections/list/List/pop_back): Removes and returns the back value, or `None` when the list is empty.
