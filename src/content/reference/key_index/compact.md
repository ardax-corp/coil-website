---
slug: "key_index/compact"
title: "compact"
description: "Drops the removed slots and renumbers the rest in order, as retain did to the caller's Vecs. Returns the live count."
module: "key_index"
kind: "fn"
name: "compact"
signature: "fn compact(Vec<int> table, Vec<int> hashes, Vec<int> live) -> int"
import: "use key_index::{compact};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d7885cdf76165c70da4908418715c8292ae54a1d/compiler/src/builtin_docs/key_index.coil#L38"
order: 5
---

Drops the removed slots and renumbers the rest in order, as [`retain`](/docs/reference/key_index/retain) did to the caller's [`Vec`](/docs/reference/prelude/Vec)s. Returns the live count.

## Parameters

| Name | Type |
|------|------|
| `table` | `Vec<int>` |
| `hashes` | `Vec<int>` |
| `live` | `Vec<int>` |

## Returns

`int`

## See also

- [`key_index::retain`](/docs/reference/key_index/retain)
- [`Vec`](/docs/reference/prelude/Vec)
- [`table`](/docs/reference/key_index/table): An empty table with room for `n` entries before it grows.
- [`probe`](/docs/reference/key_index/probe): The next live slot whose hash is `h`, in probe order after slot `after` (`-1` starts at the first), or `-1` when there is none.
- [`insert`](/docs/reference/key_index/insert): Adds a slot for a key with hash `h` and returns it.
- [`remove`](/docs/reference/key_index/remove): Marks `slot` removed: `probe` no longer returns it and its `live` flag is 0.
- [`clear`](/docs/reference/key_index/clear): Removes every slot.
- [`eq_mode`](/docs/reference/key_index/eq_mode): How `find` may compare keys of `k`'s type: `1` when `==` on it compares words (`int`), `2` when it compares string contents (`string`), `0` otherwise (the caller compares with `probe`).
