---
slug: "key_index/probe"
title: "probe"
description: "The next live slot whose hash is h, in probe order after slot after (-1 starts at the first), or -1 when there is none."
module: "key_index"
kind: "fn"
name: "probe"
signature: "fn probe(Vec<int> table, Vec<int> hashes, int h, int after) -> int"
import: "use key_index::{probe};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/builtin_docs/key_index.coil#L19"
order: 1
---

The next live slot whose hash is `h`, in probe order after slot `after` (`-1` starts at the first), or `-1` when there is none.

The index does not compare keys: the caller checks each candidate
slot's key with `==` and asks again after it on a mismatch.

## Parameters

| Name | Type |
|------|------|
| `table` | `Vec<int>` |
| `hashes` | `Vec<int>` |
| `h` | `int` |
| `after` | `int` |

## Returns

`int`

## See also

- [`table`](/docs/reference/key_index/table): An empty table with room for `n` entries before it grows.
- [`insert`](/docs/reference/key_index/insert): Adds a slot for a key with hash `h` and returns it.
- [`remove`](/docs/reference/key_index/remove): Marks `slot` removed: `probe` no longer returns it and its `live` flag is 0.
- [`retain`](/docs/reference/key_index/retain): Drops the elements of `v` whose slot is removed, keeping the order of the rest, and returns the new length.
- [`compact`](/docs/reference/key_index/compact): Drops the removed slots and renumbers the rest in order, as `retain` did to the caller's `Vec`s.
- [`clear`](/docs/reference/key_index/clear): Removes every slot.
- [`eq_mode`](/docs/reference/key_index/eq_mode): How `find` may compare keys of `k`'s type: `1` when `==` on it compares words (`int`), `2` when it compares string contents (`string`), `0` otherwise (the caller compares with `probe`).
- [`find`](/docs/reference/key_index/find): The live slot whose hash is `h` and whose key in `keys` equals `k`, or `-1`.
