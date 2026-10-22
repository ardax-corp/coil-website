---
slug: "prelude/Iterator"
title: "Iterator"
description: "A source of values that for loops pull from one at a time."
module: "prelude"
kind: "trait"
name: "Iterator"
signature: "trait Iterator<I>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/prelude.hy#L378"
order: 5
---

A source of values that `for` loops pull from one at a time.

Implementations define the associated type `Item` (the element type) and
[`next`](/docs/reference/prelude/Iterator/next), which returns `Some(item)` for each value and `None` when the sequence is
exhausted. `for x in e` first converts `e` with [`IntoIterator`](/docs/reference/prelude/IntoIterator), then calls
[`next`](/docs/reference/prelude/Iterator/next) until it returns `None`. Arrays, [`Vec`](/docs/reference/prelude/Vec), homogeneous tuples,
coroutines and numeric ranges are iterable without an `impl`; a record
is not iterable (use [`collections::map::HashMap`](/docs/reference/collections/map/HashMap) for keys to iterate).

## Associated types

- `type Item`

## Required methods

| Name | Description |
|------|-------------|
| [`next`](/docs/reference/prelude/Iterator/next) | Returns the next value, or None when the iterator is exhausted. |

## Examples

```coil
use tests::assert;
class Countdown {
    pub n: int,
}

impl Iterator for Countdown {
    type Item = int;
    pub fn next(Countdown c) -> Option<int> {
        if c.n == 0 {
            return Option::None;
        }
        c.n = c.n - 1;
        return Option::Some(c.n + 1);
    }
}

impl IntoIterator for Countdown {
    type Item = int;
    type IntoIter = Countdown;
    pub fn into_iter(Countdown c) -> Countdown {
        return c;
    }
}

fn main() {
    let seen = 0;
    for x in new Countdown(3) {
        seen = seen * 10 + x;
    }
    assert!(seen == 321);
}
```

## See also

- [`Iterator::next`](/docs/reference/prelude/Iterator/next)
- [`IntoIterator`](/docs/reference/prelude/IntoIterator)
- [`Vec`](/docs/reference/prelude/Vec)
- [`collections::map::HashMap`](/docs/reference/collections/map/HashMap)
