---
slug: "collections/deque/VecDeque/push_back"
title: "VecDeque::push_back"
description: "Adds v at the back."
module: "collections::deque"
kind: "method"
name: "push_back"
parent: "VecDeque"
signature: "pub fn push_back(T v)"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections/deque.hy#L107"
order: 5
---

Adds `v` at the back.

Called on a `VecDeque` value as `value.push_back(…)`.

## Parameters

| Name | Type |
|------|------|
| `v` | `T` |

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures self.len == old(self.len) + 1
```

## Examples

```coil
use collections::deque::{VecDeque};
use tests::assert;
let q: VecDeque<int> = VecDeque::new();
q.push_back(1);
q.push_back(2);
assert!((q.peek_back() ?? 0) == 2);
```

## See also

- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/docs/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::size`](/docs/reference/collections/deque/VecDeque/size): Returns the number of values.
- [`VecDeque::is_empty`](/docs/reference/collections/deque/VecDeque/is_empty): Returns `true` when the deque has no values.
- [`VecDeque::capacity`](/docs/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_front`](/docs/reference/collections/deque/VecDeque/push_front): Adds `v` at the front.
- [`VecDeque::peek_front`](/docs/reference/collections/deque/VecDeque/peek_front): Returns the front value without removing it, or `None` when the deque is empty.
