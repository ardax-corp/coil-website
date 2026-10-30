---
slug: "msgpack/msgpack/Store/add"
package: "msgpack"
title: "Store::add"
description: "Method Store::add."
module: "msgpack"
kind: "method"
name: "add"
parent: "Store"
signature: "pub fn add(int tag, bool flag, int n, float x, string s, string key, Vec<byte> bin) -> int"
import: "use msgpack::{Store};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L115"
order: 5
---

*No documentation yet.*

Called on a `Store` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `tag` | `int` |
| `flag` | `bool` |
| `n` | `int` |
| `x` | `float` |
| `s` | `string` |
| `key` | `string` |
| `bin` | `Vec<byte>` |

## Returns

`int`

## See also

- [`Store`](/packages/msgpack/reference/msgpack/Store)
- [`Store::with_capacity`](/packages/msgpack/reference/msgpack/Store/with_capacity)
- [`Store::new`](/packages/msgpack/reference/msgpack/Store/new)
- [`Store::copy_bytes`](/packages/msgpack/reference/msgpack/Store/copy_bytes)
- [`Store::inf_float`](/packages/msgpack/reference/msgpack/Store/inf_float)
- [`Store::nan_float`](/packages/msgpack/reference/msgpack/Store/nan_float)
- [`Store::attach`](/packages/msgpack/reference/msgpack/Store/attach)
- [`Store::nth_child`](/packages/msgpack/reference/msgpack/Store/nth_child)
