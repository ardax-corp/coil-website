---
slug: "key_index/find"
title: "find"
description: "The live slot whose hash is h and whose key in keys equals k, or -1. mode is what eq_mode(k) gave: find compares the keys itself, in one call. With mode 0 it finds nothing."
module: "key_index"
kind: "fn"
name: "find"
signature: "fn find<K>(Vec<int> table, Vec<int> hashes, Vec<K> keys, int h, K k, int mode) -> int"
import: "use key_index::{find};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/builtin_docs/key_index.coil#L53"
order: 8
---

The live slot whose hash is `h` and whose key in `keys` equals `k`, or `-1`. `mode` is what `eq_mode(k)` gave: `find` compares the keys itself, in one call. With mode `0` it finds nothing.

## Parameters

| Name | Type |
|------|------|
| `table` | `Vec<int>` |
| `hashes` | `Vec<int>` |
| `keys` | `Vec<K>` |
| `h` | `int` |
| `k` | `K` |
| `mode` | `int` |

## Returns

`int`

## See also

- [`table`](/docs/reference/key_index/table): An empty table with room for `n` entries before it grows.
- [`probe`](/docs/reference/key_index/probe): The next live slot whose hash is `h`, in probe order after slot `after` (`-1` starts at the first), or `-1` when there is none.
- [`insert`](/docs/reference/key_index/insert): Adds a slot for a key with hash `h` and returns it.
- [`remove`](/docs/reference/key_index/remove): Marks `slot` removed: `probe` no longer returns it and its `live` flag is 0.
- [`retain`](/docs/reference/key_index/retain): Drops the elements of `v` whose slot is removed, keeping the order of the rest, and returns the new length.
- [`compact`](/docs/reference/key_index/compact): Drops the removed slots and renumbers the rest in order, as `retain` did to the caller's `Vec`s.
- [`clear`](/docs/reference/key_index/clear): Removes every slot.
- [`eq_mode`](/docs/reference/key_index/eq_mode): How `find` may compare keys of `k`'s type: `1` when `==` on it compares words (`int`), `2` when it compares string contents (`string`), `0` otherwise (the caller compares with `probe`).
