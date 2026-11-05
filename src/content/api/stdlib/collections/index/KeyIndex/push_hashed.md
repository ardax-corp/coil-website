---
slug: "stdlib/collections/index/KeyIndex/push_hashed"
package: "stdlib"
title: "KeyIndex::push_hashed"
description: "Adds k, which find_hashed(k, h) did not find, at the next slot and returns it. Adding a key that is already there makes a second slot find may return instead of the first."
module: "collections::index"
kind: "method"
name: "push_hashed"
parent: "KeyIndex"
signature: "pub fn push_hashed(K k, int h) -> int"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/index.coil#L202"
order: 16
---

Adds `k`, which `find_hashed(k, h)` did not find, at the next slot and returns it. Adding a key that is already there makes a second slot [`find`](/packages/stdlib/reference/collections/index/KeyIndex/find) may return instead of the first.

Called on a `KeyIndex` value as `value.push_hashed(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `K` |
| `h` | `int` |

## Returns

`int`

## See also

- [`KeyIndex::find`](/packages/stdlib/reference/collections/index/KeyIndex/find)
- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
- [`KeyIndex::capacity`](/packages/stdlib/reference/collections/index/KeyIndex/capacity): Returns how many keys the index holds before it grows.
- [`KeyIndex::slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots): Returns the number of slots, removed ones included: every slot number is below it.
