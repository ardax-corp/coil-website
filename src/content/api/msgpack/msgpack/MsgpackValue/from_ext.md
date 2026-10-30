---
slug: "msgpack/msgpack/MsgpackValue/from_ext"
package: "msgpack"
title: "MsgpackValue::from_ext"
description: "ty is the extension type code (-128..=127). Out of range fails at encode."
module: "msgpack"
kind: "static method"
name: "from_ext"
parent: "MsgpackValue"
signature: "pub static fn from_ext(int ty, Vec<byte> data) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/28282558ca88aab4179bd52d695227e467bf08d3/src/msgpack.hy#L292"
order: 9
---

`ty` is the extension type code (-128..=127). Out of range fails at encode.

## Parameters

| Name | Type |
|------|------|
| `ty` | `int` |
| `data` | `Vec<byte>` |

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
