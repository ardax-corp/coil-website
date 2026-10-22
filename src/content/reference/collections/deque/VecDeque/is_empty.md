---
slug: "collections/deque/VecDeque/is_empty"
title: "VecDeque::is_empty"
description: "Returns true when the deque has no values."
module: "collections::deque"
kind: "method"
name: "is_empty"
parent: "VecDeque"
signature: "pub fn is_empty() -> bool"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/deque.hy#L62"
order: 3
---

Returns `true` when the deque has no values.

Called on a `VecDeque` value as `value.is_empty(…)`.

## Returns

`bool`

## See also

- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/docs/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::size`](/docs/reference/collections/deque/VecDeque/size): Returns the number of values.
- [`VecDeque::capacity`](/docs/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back): Adds v at the back.
- [`VecDeque::push_front`](/docs/reference/collections/deque/VecDeque/push_front): Adds v at the front.
- [`VecDeque::peek_front`](/docs/reference/collections/deque/VecDeque/peek_front): Returns the front value without removing it, or None when the deque is empty.
