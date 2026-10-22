---
slug: "collections/deque/VecDeque/pop_front"
title: "VecDeque::pop_front"
description: "Removes and returns the front value, or None when the deque is empty."
module: "collections::deque"
kind: "method"
name: "pop_front"
parent: "VecDeque"
signature: "pub fn pop_front() -> Option<T>"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/deque.hy#L174"
order: 9
---

Removes and returns the front value, or `None` when the deque is empty.

Called on a `VecDeque` value as `value.pop_front(…)`.

## Returns

`Option<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == old(self.len) - 1 || (old(self.len) == 0 && self.len == 0)
```

## Examples

```coil
use collections::deque::{VecDeque};
use tests::assert;
let q: VecDeque<int> = VecDeque::new();
q.push_back(1);
q.push_back(2);
assert!((q.pop_front() ?? 0) == 1);
assert!((q.pop_front() ?? 0) == 2);
assert!(q.pop_front().is_none());
```

## See also

- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/docs/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::size`](/docs/reference/collections/deque/VecDeque/size): Returns the number of values.
- [`VecDeque::is_empty`](/docs/reference/collections/deque/VecDeque/is_empty): Returns `true` when the deque has no values.
- [`VecDeque::capacity`](/docs/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back): Adds `v` at the back.
- [`VecDeque::push_front`](/docs/reference/collections/deque/VecDeque/push_front): Adds `v` at the front.
