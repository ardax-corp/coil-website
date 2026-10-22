---
slug: "thread/fn.rwlock"
title: "rwlock"
description: "Creates a readers-writer lock holding a copy of initial."
module: "thread"
kind: "fn"
name: "rwlock"
signature: "fn rwlock<T>(T initial) -> Result<RwLock, ThreadError>"
import: "use thread::{rwlock};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/thread.hy#L569"
order: 20
---

Creates a readers-writer lock holding a copy of `initial`.

The value must be sendable (see [`spawn`](/docs/reference/thread/spawn)), or the result is
`Err(ThreadError::NotSendable)`.

## Parameters

| Name | Type |
|------|------|
| `initial` | `T` |

## Returns

`Result<RwLock, ThreadError>`

## Examples

```coil
use thread::{rwlock, with_read};
use tests::assert;
let lock = match rwlock("config") {
    Result::Ok(l) => l,
    Result::Err(_) => panic "rwlock failed",
};
let n = match with_read(lock, fn (string s) => s.len()) {
    Result::Ok(n) => n,
    Result::Err(_) => 0,
};
assert!(n == 6);
```

## See also

- [`thread::spawn`](/docs/reference/thread/spawn)
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its (Sender, Receiver) ends.
- [`send`](/docs/reference/thread/send): Sends a copy of value on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends value without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
