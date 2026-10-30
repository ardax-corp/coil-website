---
slug: "thread/with_lock"
title: "with_lock"
description: "Locks m, runs f on its value, stores the new value and returns the result."
module: "thread"
kind: "fn"
name: "with_lock"
signature: "fn with_lock<A, B>(Mutex<A> m, A -> (A, B) f) -> Result<B, LockError>"
import: "use thread::{with_lock};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/thread.hy#L544"
order: 18
---

Locks `m`, runs `f` on its value, stores the new value and returns the result.

`f` gets the current value and returns a pair `(new_value, result)`: the
mutex keeps `new_value` and `with_lock` returns `Ok(result)`. The lock is
held for the whole callback, so the update is atomic. If the mutex is
held, it waits (inside a [`task::scope`](/docs/reference/task/fn.scope), only this task waits). This is the
safe way to use a [`Mutex`](/docs/reference/thread/Mutex); prefer it over [`lock`](/docs/reference/thread/lock) / [`unlock`](/docs/reference/thread/unlock).

## Parameters

| Name | Type |
|------|------|
| `m` | `Mutex<A>` |
| `f` | `A -> (A, B)` |

## Returns

`Result<B, LockError>`

## Examples

```coil
use thread::{mutex, with_lock};
use tests::assert;
let m = match mutex(10) {
    Result::Ok(m) => m,
    Result::Err(_) => panic "mutex failed",
};
let before = match with_lock(m, fn (int n) => (n * 2, n)) {
    Result::Ok(old) => old,
    Result::Err(_) => -1,
};
assert!(before == 10);
assert!(match with_lock(m, fn (int n) => (n, n)) { Result::Ok(n) => n == 20, Result::Err(_) => false });
```

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`thread::Mutex`](/docs/reference/thread/Mutex)
- [`thread::lock`](/docs/reference/thread/lock)
- [`thread::unlock`](/docs/reference/thread/unlock)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
