---
slug: "stdlib/collections/index/KeyIndex/retain_live"
package: "stdlib"
title: "KeyIndex::retain_live"
description: "Drops the elements of v at removed slots, keeping the order of the rest: the same renumbering compact applies to the index. Call it on each Vec you keep by slot, just before compact."
module: "collections::index"
kind: "method"
name: "retain_live"
parent: "KeyIndex"
signature: "pub fn retain_live<T>(Vec<T> v)"
import: "use collections::index::{KeyIndex};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/collections/index.coil#L128"
order: 10
---

Drops the elements of `v` at removed slots, keeping the order of the rest: the same renumbering [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact) applies to the index. Call it on each [`Vec`](/docs/reference/prelude/Vec) you keep by slot, just before [`compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact).

Panics when `v` is not [`slots()`](/packages/stdlib/reference/collections/index/KeyIndex/slots) long.

Called on a `KeyIndex` value as `value.retain_live(…)`.

## Parameters

| Name | Type |
|------|------|
| `v` | `Vec<T>` |

## See also

- [`KeyIndex::compact`](/packages/stdlib/reference/collections/index/KeyIndex/compact)
- [`Vec`](/docs/reference/prelude/Vec)
- [`KeyIndex::slots`](/packages/stdlib/reference/collections/index/KeyIndex/slots)
- [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex): Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on.
- [`KeyIndex::new`](/packages/stdlib/reference/collections/index/KeyIndex/new): Creates an empty index.
- [`KeyIndex::with_capacity`](/packages/stdlib/reference/collections/index/KeyIndex/with_capacity): Creates an empty index with room for `n` keys before it grows.
- [`KeyIndex::len`](/packages/stdlib/reference/collections/index/KeyIndex/len): Returns the number of keys.
- [`KeyIndex::is_empty`](/packages/stdlib/reference/collections/index/KeyIndex/is_empty): Returns `true` when the index has no keys.
