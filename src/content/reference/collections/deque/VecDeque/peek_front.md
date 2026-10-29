---
slug: "collections/deque/VecDeque/peek_front"
title: "VecDeque::peek_front"
description: "Returns the front value without removing it, or None when the deque is empty."
module: "collections::deque"
kind: "method"
name: "peek_front"
parent: "VecDeque"
signature: "pub fn peek_front() -> Option<T>"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/deque.hy#L145"
order: 7
---

Returns the front value without removing it, or `None` when the deque is empty.

Called on a `VecDeque` value as `value.peek_front(…)`.

## Returns

`Option<T>`

## See also

- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/docs/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::len`](/docs/reference/collections/deque/VecDeque/len): Returns the number of values.
- [`VecDeque::is_empty`](/docs/reference/collections/deque/VecDeque/is_empty): Returns `true` when the deque has no values.
- [`VecDeque::capacity`](/docs/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back): Adds `v` at the back.
- [`VecDeque::push_front`](/docs/reference/collections/deque/VecDeque/push_front): Adds `v` at the front.
