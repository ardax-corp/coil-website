---
slug: "collections/deque/VecDeque/clear"
title: "VecDeque::clear"
description: "Removes every value, keeping the capacity."
module: "collections::deque"
kind: "method"
name: "clear"
parent: "VecDeque"
signature: "pub fn clear()"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/deque.hy#L202"
order: 11
---

Removes every value, keeping the capacity.

Called on a `VecDeque` value as `value.clear(…)`.

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == 0
```

## See also

- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/docs/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::size`](/docs/reference/collections/deque/VecDeque/size): Returns the number of values.
- [`VecDeque::is_empty`](/docs/reference/collections/deque/VecDeque/is_empty): Returns true when the deque has no values.
- [`VecDeque::capacity`](/docs/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back): Adds v at the back.
- [`VecDeque::push_front`](/docs/reference/collections/deque/VecDeque/push_front): Adds v at the front.
