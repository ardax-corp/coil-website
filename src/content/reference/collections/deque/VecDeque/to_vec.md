---
slug: "collections/deque/VecDeque/to_vec"
title: "VecDeque::to_vec"
description: "Returns the values front to back as a new Vec."
module: "collections::deque"
kind: "method"
name: "to_vec"
parent: "VecDeque"
signature: "pub fn to_vec() -> Vec<T>"
import: "use collections::deque::{VecDeque};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/collections/deque.hy#L227"
order: 12
---

Returns the values front to back as a new [`Vec`](/docs/reference/prelude/Vec).

Called on a `VecDeque` value as `value.to_vec(…)`.

## Returns

`Vec<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == self.len
```

## Examples

```coil
use collections::deque::{VecDeque};
use tests::assert;
let q: VecDeque<int> = VecDeque::new();
q.push_back(2);
q.push_front(1);
let v = q.to_vec();
assert!(v[0] == 1 && v[1] == 2);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`VecDeque`](/docs/reference/collections/deque/VecDeque): A double-ended queue: constant-time push and pop at both ends.
- [`VecDeque::with_capacity`](/docs/reference/collections/deque/VecDeque/with_capacity): Empty deque with ring capacity rounded up to the next power of two (min 8).
- [`VecDeque::new`](/docs/reference/collections/deque/VecDeque/new): Empty deque with default capacity 8.
- [`VecDeque::size`](/docs/reference/collections/deque/VecDeque/size): Returns the number of values.
- [`VecDeque::is_empty`](/docs/reference/collections/deque/VecDeque/is_empty): Returns true when the deque has no values.
- [`VecDeque::capacity`](/docs/reference/collections/deque/VecDeque/capacity): Returns how many values fit before the ring buffer grows.
- [`VecDeque::push_back`](/docs/reference/collections/deque/VecDeque/push_back): Adds v at the back.
