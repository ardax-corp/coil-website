---
slug: "prelude/ops/Length"
title: "Length"
description: "A size query: x.len()."
module: "prelude::ops"
kind: "trait"
name: "Length"
signature: "trait Length<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/prelude/ops.hy#L697"
order: 22
---

A size query: `x.len()`.

Arrays, [`Vec`](/docs/reference/prelude/Vec), strings (UTF-8 bytes), tuples and records (fields) have a
structural length and need no instance; fixed sizes fold at compile time.
They meet a `T: Length` bound too, [`len`](/docs/reference/prelude/ops/Length/len) reading that same length.
Implement `Length` to give your own type a length.

## Required methods

| Name | Description |
|------|-------------|
| [`len`](/docs/reference/prelude/ops/Length/len) | Returns the length of `value`. |

## Examples

```coil
use tests::assert;
class Team {
    pub names: Vec<string>,
}

impl Length for Team {
    pub fn len(Team t) -> int {
        return t.names.len();
    }
}

fn main() {
    let t = new Team(Vec::from(["ana", "bo"]));
    assert!(t.len() == 2);
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Length::len`](/docs/reference/prelude/ops/Length/len)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
