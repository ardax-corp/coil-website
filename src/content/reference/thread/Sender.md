---
slug: "thread/Sender"
title: "Sender"
description: "The sending half of a channel made by channel."
module: "thread"
kind: "class"
name: "Sender"
signature: "class Sender"
import: "use thread::{Sender};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/thread.hy#L55"
order: 1
---

The sending half of a channel made by [`channel`](/docs/reference/thread/channel).

`Sender` handles can be passed to [`spawn`](/docs/reference/thread/spawn) (alone or inside tuples, arrays,
records and class instances): every copy refers to the same channel.
[`close`](/docs/reference/thread/close) on any copy closes the channel for everyone.

## Examples

```coil
use thread::{channel, send, recv, Sender, Receiver};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
let s: Sender = tx;
let r: Receiver = rx;
let _ = send(s, "hi");
let got = match recv(r) {
    Result::Ok(v) => v,
    Result::Err(_) => "",
};
assert!(got == "hi");
```

## See also

- [`thread::channel`](/docs/reference/thread/channel)
- [`thread::spawn`](/docs/reference/thread/spawn)
- [`thread::close`](/docs/reference/thread/close)
- [`Thread`](/docs/reference/thread/Thread): A handle to a function running on another OS thread, from spawn.
- [`Receiver`](/docs/reference/thread/Receiver): The receiving half of a channel made by channel.
- [`Mutex`](/docs/reference/thread/Mutex): A mutual-exclusion lock that owns a value, made by mutex.
- [`RwLock`](/docs/reference/thread/RwLock): A readers-writer lock that owns a value, made by rwlock.
