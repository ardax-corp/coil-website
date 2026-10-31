---
slug: "stdlib/collections/deque/VecDeque/push_front"
package: "stdlib"
title: "VecDeque::push_front"
description: "Adds v at the front."
module: "collections::deque"
kind: "method"
name: "push_front"
parent: "VecDeque"
signature: "pub fn push_front(T v)"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/deque.hy#L129"
order: 6
---

Adds `v` at the front.

Called on a `VecDeque` value as `value.push_front(…)`.

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
q.push_front(1);
q.push_front(2);
assert!((q.peek_front() ?? 0) == 2);
```

## See also

- [`VecDeque`](/packages/stdlib/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/packages/stdlib/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/packages/stdlib/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::len`](/packages/stdlib/reference/collections/deque/VecDeque/len): Returns the number of values.
- [`VecDeque::is_empty`](/packages/stdlib/reference/collections/deque/VecDeque/is_empty): Returns `true` when the deque has no values.
- [`VecDeque::capacity`](/packages/stdlib/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/packages/stdlib/reference/collections/deque/VecDeque/push_back): Adds `v` at the back.
- [`VecDeque::peek_front`](/packages/stdlib/reference/collections/deque/VecDeque/peek_front): Returns the front value without removing it, or `None` when the deque is empty.
