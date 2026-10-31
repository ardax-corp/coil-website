---
slug: "prelude/IntoIterator"
title: "IntoIterator"
description: "A type that can be turned into an Iterator, which makes it usable in for x in value."
module: "prelude"
kind: "trait"
name: "IntoIterator"
signature: "trait IntoIterator<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude.coil#L418"
order: 6
---

A type that can be turned into an [`Iterator`](/docs/reference/prelude/Iterator), which makes it usable in `for x in value`.

[`into_iter`](/docs/reference/prelude/IntoIterator/into_iter) returns the iterator (`IntoIter`), whose `Item` must match.
A class that is its own iterator can return itself, though an [`Iterator`](/docs/reference/prelude/Iterator)
needs no `IntoIterator` to be used in `for`.

## Associated types

- `type Item`
- `type IntoIter`

## Required methods

| Name | Description |
|------|-------------|
| [`into_iter`](/docs/reference/prelude/IntoIterator/into_iter) | Converts `value` into its iterator. |

## Examples

```coil
use tests::assert;
class Ones {
    pub left: int,
}

impl Iterator for Ones {
    type Item = int;
    pub fn next(Ones o) -> Option<int> {
        if o.left == 0 {
            return Option::None;
        }
        o.left = o.left - 1;
        return Option::Some(1);
    }
}

impl IntoIterator for Ones {
    type Item = int;
    type IntoIter = Ones;
    pub fn into_iter(Ones o) -> Ones {
        return o;
    }
}

fn main() {
    let n = 0;
    for x in new Ones(4) {
        n = n + x;
    }
    assert!(n == 4);
}
```

## See also

- [`Iterator`](/docs/reference/prelude/Iterator)
- [`IntoIterator::into_iter`](/docs/reference/prelude/IntoIterator/into_iter)
