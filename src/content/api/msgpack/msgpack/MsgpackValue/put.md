---
slug: "msgpack/msgpack/MsgpackValue/put"
package: "msgpack"
title: "MsgpackValue::put"
description: "Copy key and val onto the end of this map. Duplicate keys are kept."
module: "msgpack"
kind: "method"
name: "put"
parent: "MsgpackValue"
signature: "pub fn put(MsgpackValue key, MsgpackValue val) -> Result<(), MsgpackError>"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L454"
order: 31
---

Copy `key` and `val` onto the end of this map. Duplicate keys are kept.

Called on a `MsgpackValue` value as `value.put(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `MsgpackValue` |
| `val` | `MsgpackValue` |

## Returns

`Result<(), MsgpackError>`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): MessagePack value.
- [`MsgpackValue::wrap`](/packages/msgpack/reference/msgpack/MsgpackValue/wrap)
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil)
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool)
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int)
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan)
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf)
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float)
