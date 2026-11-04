---
slug: "key_index/retain"
title: "retain"
description: "Drops the elements of v whose slot is removed, keeping the order of the rest, and returns the new length. Call it on each Vec the caller keeps by slot, then compact. Returns -1 and changes nothing when v is not as long as live."
module: "key_index"
kind: "fn"
name: "retain"
signature: "fn retain<T>(Vec<T> v, Vec<int> live) -> int"
import: "use key_index::{retain};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d7885cdf76165c70da4908418715c8292ae54a1d/compiler/src/builtin_docs/key_index.coil#L34"
order: 4
---

Drops the elements of `v` whose slot is removed, keeping the order of the rest, and returns the new length. Call it on each [`Vec`](/docs/reference/prelude/Vec) the caller keeps by slot, then [`compact`](/docs/reference/key_index/compact). Returns `-1` and changes nothing when `v` is not as long as `live`.

## Parameters

| Name | Type |
|------|------|
| `v` | `Vec<T>` |
| `live` | `Vec<int>` |

## Returns

`int`

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`key_index::compact`](/docs/reference/key_index/compact)
- [`table`](/docs/reference/key_index/table): An empty table with room for `n` entries before it grows.
- [`probe`](/docs/reference/key_index/probe): The next live slot whose hash is `h`, in probe order after slot `after` (`-1` starts at the first), or `-1` when there is none.
- [`insert`](/docs/reference/key_index/insert): Adds a slot for a key with hash `h` and returns it.
- [`remove`](/docs/reference/key_index/remove): Marks `slot` removed: `probe` no longer returns it and its `live` flag is 0.
- [`clear`](/docs/reference/key_index/clear): Removes every slot.
- [`eq_mode`](/docs/reference/key_index/eq_mode): How `find` may compare keys of `k`'s type: `1` when `==` on it compares words (`int`), `2` when it compares string contents (`string`), `0` otherwise (the caller compares with `probe`).
