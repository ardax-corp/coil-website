---
slug: "msgpack/msgpack/MsgpackValue/encode_buf"
package: "msgpack"
title: "MsgpackValue::encode_buf"
description: "Method MsgpackValue::encode_buf."
module: "msgpack"
kind: "method"
name: "encode_buf"
parent: "MsgpackValue"
signature: "pub fn encode_buf() -> Result<Vec<byte>, MsgpackError>"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L861"
order: 32
---

*No documentation yet.*

Called on a `MsgpackValue` value as `value.encode_buf(…)`.

## Returns

`Result<Vec<byte>, MsgpackError>`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): MessagePack value.
- [`MsgpackValue::wrap`](/packages/msgpack/reference/msgpack/MsgpackValue/wrap)
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil)
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool)
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int)
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan)
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf)
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float)
