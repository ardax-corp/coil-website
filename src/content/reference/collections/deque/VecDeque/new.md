---
slug: "collections/deque/VecDeque/new"
title: "VecDeque::new"
description: "Empty deque with default capacity 8."
module: "collections::deque"
kind: "static method"
name: "new"
parent: "VecDeque"
signature: "pub static fn new() -> VecDeque<T>"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/collections/deque.hy#L52"
order: 1
---

Empty deque with default capacity 8.

## Returns

`VecDeque<T>`

## See also

- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::len`](/docs/reference/collections/deque/VecDeque/len): Returns the number of values.
- [`VecDeque::is_empty`](/docs/reference/collections/deque/VecDeque/is_empty): Returns `true` when the deque has no values.
- [`VecDeque::capacity`](/docs/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back): Adds `v` at the back.
- [`VecDeque::push_front`](/docs/reference/collections/deque/VecDeque/push_front): Adds `v` at the front.
- [`VecDeque::peek_front`](/docs/reference/collections/deque/VecDeque/peek_front): Returns the front value without removing it, or `None` when the deque is empty.
