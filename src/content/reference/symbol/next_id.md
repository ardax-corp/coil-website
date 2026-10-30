---
slug: "symbol/next_id"
title: "next_id"
description: "Returns the next value of a process-wide counter."
module: "symbol"
kind: "fn"
name: "next_id"
signature: "fn next_id() -> int"
import: "use symbol::{next_id};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/symbol.hy#L64"
order: 1
---

Returns the next value of a process-wide counter.

The first call in the process returns `1`, and each call after that one
more than the last, whichever function, thread or task makes it: no two
calls ever return the same id. Calls made at the same time on different
threads are ordered by the counter itself, so one thread's ids are
increasing but need not be consecutive while other threads take ids too.
A function that calls `next_id` counts as reading host state, so it is
never computed at compile time, hoisted out of a loop or run in
parallel automatically.

## Returns

`int`

## Examples

```coil
use symbol::{next_id};
use tests::assert;
let a = next_id();
let b = next_id();
assert!(a >= 1);
assert!(b > a);
```

## See also

- [`fn_key`](/docs/reference/symbol/fn_key): Returns the key of the function this call is written in.
