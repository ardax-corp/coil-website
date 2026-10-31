---
slug: "msgpack/msgpack/MsgpackValue/encode_buf"
package: "msgpack"
title: "MsgpackValue::encode_buf"
description: "The encoding of this value, as Msgpack::encode returns it."
module: "msgpack"
kind: "method"
name: "encode_buf"
parent: "MsgpackValue"
signature: "pub fn encode_buf() -> Result<Vec<byte>, MsgpackError>"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.hy#L1051"
order: 31
---

The encoding of this value, as [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode) returns it.

Called on a `MsgpackValue` value as `value.encode_buf(…)`.

## Returns

`Result<Vec<byte>, MsgpackError>`

## See also

- [`Msgpack::encode`](/packages/msgpack/reference/msgpack/Msgpack/encode)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
