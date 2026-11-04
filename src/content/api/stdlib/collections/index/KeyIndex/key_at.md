---
slug: "stdlib/collections/index/KeyIndex/key_at"
package: "stdlib"
title: "KeyIndex::key_at"
description: "Returns the key in slot. A removed slot still returns its old key until compact; check is_live first when that matters."
module: "collections::index"
kind: "method"
name: "key_at"
parent: "KeyIndex"
signature: "pub fn key_at(int slot) -> K"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/index.coil#L97"
order: 7
---

Returns the key in `slot`. A removed slot still returns its old key until [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact); check [`is_live`](/packages/stdlib/reference/collections/index/KeyIndex/is_live) first when that matters.

Panics when `slot` is out of range.

Called on a `KeyIndex` value as `value.key_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `slot` | `int` |

## Returns

`K`

## See also

- [`KeyIndex::compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact)
- [`KeyIndex::is_live`](/packages/stdlib/reference/collections/index/KeyIndex/is_live)
- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
- [`KeyIndex::capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity): Returns how many keys the index holds before it grows.
