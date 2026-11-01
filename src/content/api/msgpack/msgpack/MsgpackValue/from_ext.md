---
slug: "msgpack/msgpack/MsgpackValue/from_ext"
package: "msgpack"
title: "MsgpackValue::from_ext"
description: "A MessagePack extension of type ty holding data."
module: "msgpack"
kind: "static method"
name: "from_ext"
parent: "MsgpackValue"
signature: "pub static fn from_ext(int ty, Vec<byte> data) -> MsgpackValue"
import: "use msgpack::{MsgpackValue};"
origin: "package"
source: "https://github.com/ardax-corp/coil-msgpack/blob/5b073ea8d83d5b051d57bdf030ec80a385e25add/src/msgpack.coil#L423"
order: 8
---

A MessagePack extension of type `ty` holding `data`.

`ty` is the extension type code, -128..=127; negative codes are
reserved by the spec (`-1` is a timestamp). A code out of range is
accepted here and fails at encode with [`MsgpackError::Number`](/packages/msgpack/reference/msgpack/MsgpackError#variant-number).

## Parameters

| Name | Type |
|------|------|
| `ty` | `int` |
| `data` | `Vec<byte>` |

## Returns

`MsgpackValue`

## See also

- [`msgpack::MsgpackError`](/packages/msgpack/reference/msgpack/MsgpackError)
- [`MsgpackValue`](/packages/msgpack/reference/msgpack/MsgpackValue): A MessagePack value: nil, bool, int, float, string, binary, array, map or extension.
- [`MsgpackValue::nil`](/packages/msgpack/reference/msgpack/MsgpackValue/nil): The MessagePack `nil` value.
- [`MsgpackValue::from_bool`](/packages/msgpack/reference/msgpack/MsgpackValue/from_bool): A MessagePack boolean.
- [`MsgpackValue::from_int`](/packages/msgpack/reference/msgpack/MsgpackValue/from_int): A MessagePack integer.
- [`MsgpackValue::nan`](/packages/msgpack/reference/msgpack/MsgpackValue/nan): A NaN float, with the NaN kind set in `i`.
- [`MsgpackValue::inf`](/packages/msgpack/reference/msgpack/MsgpackValue/inf): An infinite float: `-inf` when `neg`, otherwise `+inf`.
- [`MsgpackValue::from_float`](/packages/msgpack/reference/msgpack/MsgpackValue/from_float): A MessagePack float.
