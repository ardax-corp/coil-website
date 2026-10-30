---
slug: "msgpack/msgpack/MsgpackValue/append"
package: "msgpack"
title: "MsgpackValue::append"
description: "Copy child onto the end of this array."
module: "msgpack"
kind: "method"
name: "append"
parent: "MsgpackValue"
signature: "pub fn append(MsgpackValue child) -> Result<(), MsgpackError>"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L443"
order: 30
---

Copy `child` onto the end of this array.

Called on a `MsgpackValue` value as `value.append(…)`.

## Parameters

| Name | Type |
|------|------|
| `child` | `MsgpackValue` |

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
