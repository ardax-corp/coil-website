---
slug: "key_index/eq_mode"
title: "eq_mode"
description: "How find may compare keys of k's type: 1 when == on it compares words (int), 2 when it compares string contents (string), 0 otherwise (the caller compares with probe). The compiler turns the call into that constant wherever the type is known, so a branch on it costs nothing in a specialized body."
module: "key_index"
kind: "fn"
name: "eq_mode"
signature: "fn eq_mode<K>(K k) -> int"
import: "use key_index::{eq_mode};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/builtin_docs/key_index.coil#L48"
order: 7
---

How [`find`](/docs/reference/key_index/find) may compare keys of `k`'s type: `1` when `==` on it compares words ([`int`](/docs/reference/types/int)), `2` when it compares string contents ([`string`](/docs/reference/types/string)), `0` otherwise (the caller compares with [`probe`](/docs/reference/key_index/probe)). The compiler turns the call into that constant wherever the type is known, so a branch on it costs nothing in a specialized body.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |

## Returns

`int`

## See also

- [`key_index::find`](/docs/reference/key_index/find)
- [`int`](/docs/reference/types/int)
- [`string`](/docs/reference/types/string)
- [`key_index::probe`](/docs/reference/key_index/probe)
- [`table`](/docs/reference/key_index/table): An empty table with room for `n` entries before it grows.
- [`insert`](/docs/reference/key_index/insert): Adds a slot for a key with hash `h` and returns it.
- [`remove`](/docs/reference/key_index/remove): Marks `slot` removed: `probe` no longer returns it and its `live` flag is 0.
- [`retain`](/docs/reference/key_index/retain): Drops the elements of `v` whose slot is removed, keeping the order of the rest, and returns the new length.
