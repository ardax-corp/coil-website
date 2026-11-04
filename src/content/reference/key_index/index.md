---
slug: "key_index/index"
title: "key_index"
description: "The key_index module."
module: "key_index"
kind: "module"
name: "key_index"
origin: "builtin"
auto: false
order: 15
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use key_index::{table, probe};
```

## Functions

| Name | Description |
|------|-------------|
| [`table`](/docs/reference/key_index/table) | An empty table with room for `n` entries before it grows. |
| [`probe`](/docs/reference/key_index/probe) | The next live slot whose hash is `h`, in probe order after slot `after` (`-1` starts at the first), or `-1` when there is none. |
| [`insert`](/docs/reference/key_index/insert) | Adds a slot for a key with hash `h` and returns it. |
| [`remove`](/docs/reference/key_index/remove) | Marks `slot` removed: [`probe`](/docs/reference/key_index/probe) no longer returns it and its `live` flag is 0. |
| [`retain`](/docs/reference/key_index/retain) | Drops the elements of `v` whose slot is removed, keeping the order of the rest, and returns the new length. |
| [`compact`](/docs/reference/key_index/compact) | Drops the removed slots and renumbers the rest in order, as [`retain`](/docs/reference/key_index/retain) did to the caller's [`Vec`](/docs/reference/prelude/Vec)s. |
| [`clear`](/docs/reference/key_index/clear) | Removes every slot. |
| [`eq_mode`](/docs/reference/key_index/eq_mode) | How [`find`](/docs/reference/key_index/find) may compare keys of `k`'s type: `1` when `==` on it compares words ([`int`](/docs/reference/types/int)), `2` when it compares string contents ([`string`](/docs/reference/types/string)), `0` otherwise (the caller compares with [`probe`](/docs/reference/key_index/probe)). |
| [`find`](/docs/reference/key_index/find) | The live slot whose hash is `h` and whose key in `keys` equals `k`, or `-1`. |
