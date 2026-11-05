---
slug: "stdlib/collections/index/KeyIndex/insert"
package: "stdlib"
title: "KeyIndex::insert"
description: "Returns the slot of k, adding it at the next slot when it is new. A new key's slot is slots() - 1 afterwards."
module: "collections::index"
kind: "method"
name: "insert"
parent: "KeyIndex"
signature: "pub fn insert(K k) -> int"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/index.coil#L190"
order: 15
---

Returns the slot of `k`, adding it at the next slot when it is new. A new key's slot is `slots() - 1` afterwards.

Called on a `KeyIndex` value as `value.insert(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |

## Returns

`int`

## See also

- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
- [`KeyIndex::capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity): Returns how many keys the index holds before it grows.
- [`KeyIndex::slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots): Returns the number of slots, removed ones included: every slot number is below it.
- [`KeyIndex::is_live`](/packages/stdlib/reference/collections/index/KeyIndex/is_live): Returns `true` when `slot` holds a key (it was added and not removed).
