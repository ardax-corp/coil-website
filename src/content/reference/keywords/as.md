---
slug: "keywords/as"
title: "as"
description: "Renames an import, or converts a value between primitive types."
module: "keywords"
kind: "keyword"
name: "as"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/keywords.md#L565"
order: 23
---

Renames an import, or converts a value between primitive types.

In `use path::item as alias;`, the item is bound as `alias`. In an
expression, `x as T` converts between [`int`](/docs/reference/types/int), [`float`](/docs/reference/types/float), [`byte`](/docs/reference/types/byte) and [`bool`](/docs/reference/types/bool);
`float as int` truncates toward zero.

```coil
use io::sync::{println as say};

fn main() {
    let n = 7.9 as int; // 7
    let f = 3 as float; // 3.0
    let _ = say("done");
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`byte`](/docs/reference/types/byte)
- [`bool`](/docs/reference/types/bool)
- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`mut`](/docs/reference/keywords/mut): Borrows a place instead of copying it: the new name reaches the same object.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by `new`.
