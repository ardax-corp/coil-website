---
slug: "stdlib/collections/index/KeyIndex/find_hashed"
package: "stdlib"
title: "KeyIndex::find_hashed"
description: "find for a key whose hash h (k.hash()) the caller already has."
module: "collections::index"
kind: "method"
name: "find_hashed"
parent: "KeyIndex"
signature: "pub fn find_hashed(K k, int h) -> int"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/index.coil#L176"
order: 14
---

[`find`](/packages/stdlib/reference/collections/index/KeyIndex/find) for a key whose hash `h` (`k.hash()`) the caller already has.

Called on a `KeyIndex` value as `value.find_hashed(…)`.

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
