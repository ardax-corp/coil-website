---
slug: "msgpack/msgpack/MsgpackValue/key_at"
package: "msgpack"
title: "MsgpackValue::key_at"
description: "Nth map key. Out of range returns self."
module: "msgpack"
kind: "method"
name: "key_at"
parent: "MsgpackValue"
signature: "pub fn key_at(int n) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L398"
order: 27
---

Nth map key. Out of range returns `self`.

Called on a `MsgpackValue` value as `value.key_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): MessagePack value.
- [`MsgpackValue::wrap`](/packages/msgpack/reference/msgpack/MsgpackValue/wrap)
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil)
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool)
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int)
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan)
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf)
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float)
