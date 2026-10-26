---
slug: "task/Scope/spawn"
title: "Scope::spawn"
description: "Starts body as a child task of this scope and returns its handle."
module: "task"
kind: "method"
name: "spawn"
parent: "Scope"
signature: "pub fn spawn<R>(unit -> R body) -> Task<R>"
import: "use task::{Scope};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/task.hy#L85"
order: 0
---

Starts `body` as a child task of this scope and returns its handle.

The task begins running at the caller's next suspension point (an IO wait,
[`sleep`](/docs/reference/task/sleep), `join`, [`yield_now`](/docs/reference/task/yield_now) or the end of the scope). Capture what it needs
with `use (…)`.

Called on a `Scope` value as `value.spawn(…)`.

## Parameters

| Name | Type |
|------|------|
| `body` | `unit -> R` |

## Returns

`Task<R>`

## Examples

```coil
use task::{scope, Scope};
use tests::assert;
let total = scope(fn (Scope s) {
    let a = s.spawn(fn () => 20);
    let b = s.spawn(fn () => 22);
    return (a.join() ?? 0) + (b.join() ?? 0);
});
assert!((total ?? 0) == 42);
```

## See also

- [`task::sleep`](/docs/reference/task/sleep)
- [`task::yield_now`](/docs/reference/task/yield_now)
- [`Scope`](/docs/reference/task/Scope): A running `scope`, used to start child tasks with `spawn`.
