---
slug: "collections/deque/VecDeque/capacity"
title: "VecDeque::capacity"
description: "Returns how many values fit before the ring buffer grows."
module: "collections::deque"
kind: "method"
name: "capacity"
parent: "VecDeque"
signature: "pub fn capacity() -> int"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/deque.hy#L67"
order: 4
---

Returns how many values fit before the ring buffer grows.

Called on a `VecDeque` value as `value.capacity(…)`.

## Returns

`int`

## See also

- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/docs/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::size`](/docs/reference/collections/deque/VecDeque/size): Returns the number of values.
- [`VecDeque::is_empty`](/docs/reference/collections/deque/VecDeque/is_empty): Returns true when the deque has no values.
- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back): Adds v at the back.
- [`VecDeque::push_front`](/docs/reference/collections/deque/VecDeque/push_front): Adds v at the front.
- [`VecDeque::peek_front`](/docs/reference/collections/deque/VecDeque/peek_front): Returns the front value without removing it, or None when the deque is empty.
