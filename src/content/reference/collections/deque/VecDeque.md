---
slug: "collections/deque/VecDeque"
title: "VecDeque"
description: "A double-ended queue: constant-time push and pop at both ends."
module: "collections::deque"
kind: "class"
name: "VecDeque"
signature: "class VecDeque<T>"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/deque.hy#L21"
order: 0
---

A double-ended queue: constant-time push and pop at both ends.

Backed by a ring buffer that doubles when full. Use it as a FIFO queue
([`push_back`](/docs/reference/collections/deque/VecDeque/push_back) + [`pop_front`](/docs/reference/collections/deque/VecDeque/pop_front)) or a stack at either end.

## Associated functions

| Name | Description |
|------|-------------|
| [`with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity) | Empty deque with ring capacity rounded up to the next power of two (min 8). |
| [`new`](/docs/reference/collections/deque/VecDeque/new) | Empty deque with default capacity 8. |

## Methods

| Name | Description |
|------|-------------|
| [`size`](/docs/reference/collections/deque/VecDeque/size) | Returns the number of values. |
| [`is_empty`](/docs/reference/collections/deque/VecDeque/is_empty) | Returns true when the deque has no values. |
| [`capacity`](/docs/reference/collections/deque/VecDeque/capacity) | Returns how many values fit before the ring buffer grows. |
| [`push_back`](/docs/reference/collections/deque/VecDeque/push_back) | Adds v at the back. |
| [`push_front`](/docs/reference/collections/deque/VecDeque/push_front) | Adds v at the front. |
| [`peek_front`](/docs/reference/collections/deque/VecDeque/peek_front) | Returns the front value without removing it, or None when the deque is empty. |
| [`peek_back`](/docs/reference/collections/deque/VecDeque/peek_back) | Returns the back value without removing it, or None when the deque is empty. |
| [`pop_front`](/docs/reference/collections/deque/VecDeque/pop_front) | Removes and returns the front value, or None when the deque is empty. |
| [`pop_back`](/docs/reference/collections/deque/VecDeque/pop_back) | Removes and returns the back value, or None when the deque is empty. |
| [`clear`](/docs/reference/collections/deque/VecDeque/clear) | Removes every value, keeping the capacity. |
| [`to_vec`](/docs/reference/collections/deque/VecDeque/to_vec) | Returns the values front to back as a new Vec. |

## Invariants

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
invariant self.len >= 0 && self.len <= self.cap
invariant self.head >= 0 && self.head < self.cap
invariant self.buf.len() == self.cap
```

## Examples

```coil
use collections::deque::{VecDeque};
use tests::assert;
let q: VecDeque<string> = VecDeque::new();
q.push_back("first");
q.push_back("second");
q.push_front("zeroth");
assert!((q.pop_front() ?? "") == "zeroth");
assert!((q.pop_back() ?? "") == "second");
assert!(q.size() == 1);
```

## See also

- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back)
- [`VecDeque::pop_front`](/docs/reference/collections/deque/VecDeque/pop_front)
