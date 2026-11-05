---
slug: "stdlib/collections/index/KeyIndex/is_live"
package: "stdlib"
title: "KeyIndex::is_live"
description: "Returns true when slot holds a key (it was added and not removed)."
module: "collections::index"
kind: "method"
name: "is_live"
parent: "KeyIndex"
signature: "pub fn is_live(int slot) -> bool"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/index.coil#L89"
order: 6
---

Returns `true` when `slot` holds a key (it was added and not removed).

Called on a `KeyIndex` value as `value.is_live(…)`.

## Parameters

| Name | Type |
|------|------|
| `slot` | `int` |

## Returns

`bool`

## See also

- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
- [`KeyIndex::capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity): Returns how many keys the index holds before it grows.
- [`KeyIndex::slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots): Returns the number of slots, removed ones included: every slot number is below it.
- [`KeyIndex::key_at`](/packages/stdlib/reference/collections/index/KeyIndex/key_at): Returns the key in `slot`.
