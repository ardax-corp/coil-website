---
slug: "msgpack/msgpack/MsgpackValue/nil"
package: "msgpack"
title: "MsgpackValue::nil"
description: "The MessagePack nil value."
module: "msgpack"
kind: "static method"
name: "nil"
parent: "MsgpackValue"
signature: "pub static fn nil() -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/7b6fd8c91f36fe663780a5f920d6ed1d88dac11a/src/msgpack.coil#L321"
order: 0
---

The MessagePack `nil` value.

## Returns

`MsgpackValue`

## See also

- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
- [`MsgpackValue::from_string`](/packages/msgpack/reference/msgpack/MsgpackValue/from_string): A MessagePack string (UTF-8).
- [`MsgpackValue::from_bin`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bin): A MessagePack binary value holding `data`.
