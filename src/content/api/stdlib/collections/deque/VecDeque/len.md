---
slug: "stdlib/collections/deque/VecDeque/len"
package: "stdlib"
title: "VecDeque::len"
description: "Returns the number of values."
module: "collections::deque"
kind: "method"
name: "len"
parent: "VecDeque"
signature: "pub fn len() -> int"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/deque.hy#L57"
order: 2
---

Returns the number of values.

Called on a `VecDeque` value as `value.len(…)`.

## Returns

`int`

## See also

- [`VecDeque`](/packages/stdlib/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/packages/stdlib/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/packages/stdlib/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::is_empty`](/packages/stdlib/reference/collections/deque/VecDeque/is_empty): Returns `true` when the deque has no values.
- [`VecDeque::capacity`](/packages/stdlib/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/packages/stdlib/reference/collections/deque/VecDeque/push_back): Adds `v` at the back.
- [`VecDeque::push_front`](/packages/stdlib/reference/collections/deque/VecDeque/push_front): Adds `v` at the front.
- [`VecDeque::peek_front`](/packages/stdlib/reference/collections/deque/VecDeque/peek_front): Returns the front value without removing it, or `None` when the deque is empty.
