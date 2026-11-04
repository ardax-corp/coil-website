---
slug: "key_index/insert"
title: "insert"
description: "Adds a slot for a key with hash h and returns it. The caller has checked, with probe, that the key is not there yet. The table grows when it would pass half full."
module: "key_index"
kind: "fn"
name: "insert"
signature: "fn insert(Vec<int> table, Vec<int> hashes, Vec<int> live, int h) -> int"
import: "use key_index::{insert};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d7885cdf76165c70da4908418715c8292ae54a1d/compiler/src/builtin_docs/key_index.coil#L24"
order: 2
---

Adds a slot for a key with hash `h` and returns it. The caller has checked, with [`probe`](/docs/reference/key_index/probe), that the key is not there yet. The table grows when it would pass half full.

## Parameters

| Name | Type |
|------|------|
| `table` | `Vec<int>` |
| `hashes` | `Vec<int>` |
| `live` | `Vec<int>` |
| `h` | `int` |

## Returns

`int`

## See also

- [`key_index::probe`](/docs/reference/key_index/probe)
- [`table`](/docs/reference/key_index/table): An empty table with room for `n` entries before it grows.
- [`remove`](/docs/reference/key_index/remove): Marks `slot` removed: `probe` no longer returns it and its `live` flag is 0.
- [`retain`](/docs/reference/key_index/retain): Drops the elements of `v` whose slot is removed, keeping the order of the rest, and returns the new length.
- [`compact`](/docs/reference/key_index/compact): Drops the removed slots and renumbers the rest in order, as `retain` did to the caller's `Vec`s.
- [`clear`](/docs/reference/key_index/clear): Removes every slot.
- [`eq_mode`](/docs/reference/key_index/eq_mode): How `find` may compare keys of `k`'s type: `1` when `==` on it compares words (`int`), `2` when it compares string contents (`string`), `0` otherwise (the caller compares with `probe`).
- [`find`](/docs/reference/key_index/find): The live slot whose hash is `h` and whose key in `keys` equals `k`, or `-1`.
