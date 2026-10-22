---
slug: "collections/list/List/new"
title: "List::new"
description: "Creates an empty list."
module: "collections::list"
kind: "static method"
name: "new"
parent: "List"
signature: "pub static fn new() -> List<T>"
import: "use collections::list::{List};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/list.hy#L48"
order: 0
---

Creates an empty list.

## Returns

`List<T>`

## See also

- [`List`](/docs/reference/collections/list/List): A singly-linked list with constant-time push and pop at the front.
- [`List::size`](/docs/reference/collections/list/List/size): Returns the number of values.
- [`List::is_empty`](/docs/reference/collections/list/List/is_empty): Returns true when the list has no values.
- [`List::push_front`](/docs/reference/collections/list/List/push_front): Adds v at the front.
- [`List::push_back`](/docs/reference/collections/list/List/push_back): Adds v at the back.
- [`List::peek_front`](/docs/reference/collections/list/List/peek_front): Returns the front value without removing it, or None when the list is empty.
- [`List::pop_front`](/docs/reference/collections/list/List/pop_front): Removes and returns the front value, or None when the list is empty.
- [`List::pop_back`](/docs/reference/collections/list/List/pop_back): Removes and returns the back value, or None when the list is empty.
