---
slug: "thread/Mutex"
title: "Mutex"
description: "A mutual-exclusion lock that owns a value, made by mutex."
module: "thread"
kind: "class"
name: "Mutex"
signature: "class Mutex<T>"
import: "use thread::{Mutex};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/thread.hy#L109"
order: 3
---

A mutual-exclusion lock that owns a value, made by [`mutex`](/docs/reference/thread/fn.mutex).

The value is copied into the lock, and [`with_lock`](/docs/reference/thread/with_lock) hands the callback a
copy and stores the new value it returns. The handle itself can be passed
to other threads; every copy refers to the same lock.

## Examples

```coil
use thread::{mutex, with_lock, Mutex};
use tests::assert;
let m: Mutex = match mutex(0) {
    Result::Ok(m) => m,
    Result::Err(_) => panic "mutex failed",
};
let _ = with_lock(m, fn (int n) => (n + 5, 0));
let now = match with_lock(m, fn (int n) => (n, n)) {
    Result::Ok(n) => n,
    Result::Err(_) => -1,
};
assert!(now == 5);
```

## See also

- [`thread::mutex`](/docs/reference/thread/fn.mutex)
- [`thread::with_lock`](/docs/reference/thread/with_lock)
- [`Thread`](/docs/reference/thread/Thread): A handle to a function running on another OS thread, from `spawn`.
- [`Sender`](/docs/reference/thread/Sender): The sending half of a channel made by `channel`.
- [`Receiver`](/docs/reference/thread/Receiver): The receiving half of a channel made by `channel`.
- [`RwLock`](/docs/reference/thread/RwLock): A readers-writer lock that owns a value, made by `rwlock`.
