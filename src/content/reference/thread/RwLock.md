---
slug: "thread/RwLock"
title: "RwLock"
description: "A readers-writer lock that owns a value, made by rwlock."
module: "thread"
kind: "class"
name: "RwLock"
signature: "class RwLock"
import: "use thread::{RwLock};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/thread.hy#L128"
order: 4
---

A readers-writer lock that owns a value, made by [`rwlock`](/docs/reference/thread/rwlock).

Many readers ([`with_read`](/docs/reference/thread/with_read), [`try_read`](/docs/reference/thread/try_read)) or one writer ([`with_write`](/docs/reference/thread/with_write),
[`try_write`](/docs/reference/thread/try_write)) at a time. Like [`Mutex`](/docs/reference/thread/Mutex), the handle can be passed to other
threads.

## Examples

```coil
use thread::{rwlock, with_read, with_write, RwLock};
use tests::assert;
let lock: RwLock = match rwlock(1) {
    Result::Ok(l) => l,
    Result::Err(_) => panic "rwlock failed",
};
let _ = with_write(lock, fn (int n) => (n + 1, 0));
let seen = match with_read(lock, fn (int n) => n) {
    Result::Ok(n) => n,
    Result::Err(_) => -1,
};
assert!(seen == 2);
```

## See also

- [`thread::rwlock`](/docs/reference/thread/rwlock)
- [`thread::with_read`](/docs/reference/thread/with_read)
- [`thread::try_read`](/docs/reference/thread/try_read)
- [`thread::with_write`](/docs/reference/thread/with_write)
- [`thread::try_write`](/docs/reference/thread/try_write)
- [`thread::Mutex`](/docs/reference/thread/Mutex)
- [`Thread`](/docs/reference/thread/Thread): A handle to a function running on another OS thread, from spawn.
- [`Sender`](/docs/reference/thread/Sender): The sending half of a channel made by channel.
