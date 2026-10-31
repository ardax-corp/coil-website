---
slug: "stdlib/collections/deque/VecDeque/pop_back"
package: "stdlib"
title: "VecDeque::pop_back"
description: "Removes and returns the back value, or None when the deque is empty."
module: "collections::deque"
kind: "method"
name: "pop_back"
parent: "VecDeque"
signature: "pub fn pop_back() -> Option<T>"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/deque.coil#L188"
order: 10
---

Removes and returns the back value, or `None` when the deque is empty.

Called on a `VecDeque` value as `value.pop_back(…)`.

## Returns

`Option<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == old(self.len) - 1 || (old(self.len) == 0 && self.len == 0)
```

## See also

- [`VecDeque`](/packages/stdlib/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/packages/stdlib/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/packages/stdlib/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::len`](/packages/stdlib/reference/collections/deque/VecDeque/len): Returns the number of values.
- [`VecDeque::is_empty`](/packages/stdlib/reference/collections/deque/VecDeque/is_empty): Returns `true` when the deque has no values.
- [`VecDeque::capacity`](/packages/stdlib/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/packages/stdlib/reference/collections/deque/VecDeque/push_back): Adds `v` at the back.
- [`VecDeque::push_front`](/packages/stdlib/reference/collections/deque/VecDeque/push_front): Adds `v` at the front.
