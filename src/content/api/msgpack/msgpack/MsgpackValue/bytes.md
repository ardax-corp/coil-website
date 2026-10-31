---
slug: "msgpack/msgpack/MsgpackValue/bytes"
package: "msgpack"
title: "MsgpackValue::bytes"
description: "A copy of the payload of a binary or extension value, or an empty Vec for any other value."
module: "msgpack"
kind: "method"
name: "bytes"
parent: "MsgpackValue"
signature: "pub fn bytes() -> Vec<byte>"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L524"
order: 24
---

A copy of the payload of a binary or extension value, or an empty [`Vec`](/docs/reference/prelude/Vec) for any other value.

Called on a `MsgpackValue` value as `value.bytes(…)`.

## Returns

`Vec<byte>`

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
