---
slug: "msgpack/msgpack/MsgpackValue/nan"
package: "msgpack"
title: "MsgpackValue::nan"
description: "A NaN float, with the NaN kind set in i. Use it rather than from_float(0.0 / 0.0), since a host float may not keep a NaN."
module: "msgpack"
kind: "static method"
name: "nan"
parent: "MsgpackValue"
signature: "pub static fn nan() -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/717fa0fe98bf14f43b00c42cce89eeb1d7f97684/src/msgpack.hy#L344"
order: 3
---

A NaN float, with the NaN kind set in `i`. Use it rather than `from_float(0.0 / 0.0)`, since a host float may not keep a NaN.

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
- [`MsgpackValue::from_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bin): A MessagePack binary value holding `data`.
