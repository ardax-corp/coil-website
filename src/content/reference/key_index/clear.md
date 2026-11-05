---
slug: "key_index/clear"
title: "clear"
description: "Removes every slot. The table keeps its size."
module: "key_index"
kind: "fn"
name: "clear"
signature: "fn clear(Vec<int> table, Vec<int> hashes, Vec<int> live)"
import: "use key_index::{clear};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d7885cdf76165c70da4908418715c8292ae54a1d/compiler/src/builtin_docs/key_index.coil#L41"
order: 6
---

Removes every slot. The table keeps its size.

## Parameters

| Name | Type |
|------|------|
| `table` | `Vec<int>` |
| `hashes` | `Vec<int>` |
| `live` | `Vec<int>` |

## See also

- [`table`](/docs/reference/key_index/table): An empty table with room for `n` entries before it grows.
- [`probe`](/docs/reference/key_index/probe): The next live slot whose hash is `h`, in probe order after slot `after` (`-1` starts at the first), or `-1` when there is none.
- [`insert`](/docs/reference/key_index/insert): Adds a slot for a key with hash `h` and returns it.
- [`remove`](/docs/reference/key_index/remove): Marks `slot` removed: `probe` no longer returns it and its `live` flag is 0.
- [`retain`](/docs/reference/key_index/retain): Drops the elements of `v` whose slot is removed, keeping the order of the rest, and returns the new length.
- [`compact`](/docs/reference/key_index/compact): Drops the removed slots and renumbers the rest in order, as `retain` did to the caller's `Vec`s.
- [`eq_mode`](/docs/reference/key_index/eq_mode): How `find` may compare keys of `k`'s type: `1` when `==` on it compares words (`int`), `2` when it compares string contents (`string`), `0` otherwise (the caller compares with `probe`).
- [`find`](/docs/reference/key_index/find): The live slot whose hash is `h` and whose key in `keys` equals `k`, or `-1`.
